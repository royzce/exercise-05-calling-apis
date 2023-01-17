import { AfterViewInit, OnInit, Component} from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { BlogService } from '../../service/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit{
  constructor(private blogService: BlogService){ }
  ngOnInit() {  } 
  buttons = [
    { name: "Add", callback: this.add},
    { name: "Delete All", callback: this.deleteAll},
  ];

  executeFunction(mainFunction:any){
    mainFunction()
  }

  add(){
    console.log("ADD");
  }
  deleteAll(){
    console.log("DELETE ALL");
  }
  
  

  getListOfBlog(){
    return this.blogService.getListOfBlog()
  }

}
