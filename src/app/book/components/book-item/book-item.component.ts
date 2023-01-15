import { Component, Input } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent {
  @Input() itemFromBookList : Book | undefined
  
  editItem(id:number){

  }
  deleteItem(id:number){

  }
}
