import { AfterViewInit, OnInit, Component} from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/book/service/book.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import { BlogService } from '../../service/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit{
  constructor(private blogService: BlogService, private router:Router){ }
  ngOnInit() {  } 
  buttons = [
    { name: "Add", callback: this.add},
    { name: "Delete All", callback: this.deleteAll},
  ];

  executeFunction(mainFunction:(router:Router, blogService:BlogService) => void){
    mainFunction(this.router,this.blogService)
  }
  editFunction(id:number){
    this.router.navigate(['blog/form'], {queryParams: {id:id}})
  }
  add(router:Router, blogService:BlogService){
    router.navigate(['blog/form'])
  }
  deleteAll(router:Router, blogService:BlogService){
    blogService.deleteAllObj()
  }
  

  getListOfBlog(){
    return this.blogService.getListOfBlog()
  }

}
