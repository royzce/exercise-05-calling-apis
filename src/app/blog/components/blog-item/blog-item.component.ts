import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Blog } from '../../models/blog';
import { BlogService } from '../../service/blog.service';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent {
  @Input() itemFromBlogList : Blog | undefined
  @Output() actionEmitter = new EventEmitter<any>();
  constructor (private blogService:BlogService){}
  editItem(id:number){
    this.actionEmitter.emit(id)
  }
  deleteItem(id:number){
    this.blogService.deleteObj(id)
  }
  sendAction(){
    this.actionEmitter.emit(this.itemFromBlogList)
  }
}
