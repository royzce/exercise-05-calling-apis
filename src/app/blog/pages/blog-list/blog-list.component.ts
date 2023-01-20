import { AfterViewInit, OnInit, Component} from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of, Subscription, switchMap } from 'rxjs';
import { BookService } from 'src/app/book/service/book.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import { Blog } from '../../models/blog';
import { BlogService } from '../../service/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit{

  private subscription: Subscription | undefined 
  blogArray: Blog[] = [];

  constructor(private blogService: BlogService, private router:Router){ }

  ngOnInit() {
    this.loadBlogs()
  } 

  blogItemAction(event: {id:number, action:string}){
    switch(event.action) {
      case 'edit':
        this.editBlog(event.id)
      break
      case 'delete':
        this.deleteBlog(event.id)
      break
    }
  }

  commandBarAction(event:{action:string}){
    switch(event.action) {
      case 'add':
        this.add()
      break
      case 'deleteAll':
        this.deleteAll()
      break
    }
  }

  editBlog(id:number){
    this.router.navigate(['blog/form'], {queryParams: {id:id}})
  }

  deleteBlog(id:number){
    this.blogService.deleteBlog(id).pipe(
      //this will update the UI when deleting a blog item
      switchMap(async () => this.loadBlogs()),catchError(_err => of (null))
    ).subscribe()
  }

  add(){
    this.router.navigate(['blog/form'])
  }
  deleteAll(){
    this.blogArray.forEach(blog => this.deleteBlog(blog.id))
  }
  
  
  loadBlogs(){
    this.subscription = this.blogService.getBlogs().subscribe(blog => {
      this.blogArray = blog
    })
  }

  // buttons = [
  //   { name: "Add", callback: this.add},
  //   { name: "Delete All", callback: this.deleteAll},
  // ];

  // executeFunction(mainFunction:(router:Router, blogService:BlogService) => void){
  //   mainFunction(this.router,this.blogService)
  // }
  // editFunction(id:number){
  //   this.router.navigate(['blog/form'], {queryParams: {id:id}})
  // }
  // add(router:Router, blogService:BlogService){
  //   router.navigate(['blog/form'])
  // }
  // deleteAll(router:Router, blogService:BlogService){
  //   blogService.deleteAllObj()
  // }
  

  // getListOfBlog(){
  //   return this.blogService.getListOfBlog()
  // }

}
