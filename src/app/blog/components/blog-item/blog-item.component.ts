import { Component, Input } from '@angular/core';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent {
  @Input() itemFromBlogList : Blog | undefined
  
  editItem(id:number){

  }
  deleteItem(id:number){

  }
}
