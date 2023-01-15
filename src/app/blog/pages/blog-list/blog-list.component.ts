import { Component } from '@angular/core';
import { BlogService } from '../../service/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent {
  constructor(private blogService: BlogService){
  }

  getListOfBlog(){
    return this.blogService.getListOfBlog()
  }
}
