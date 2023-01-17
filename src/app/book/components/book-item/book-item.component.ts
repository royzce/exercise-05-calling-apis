import { Component, Input, Output } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent {
  @Input() itemFromBookList : Book | undefined
  constructor(){  }
  editItem(id:number){
    console.log(this.itemFromBookList)
  }
  deleteItem(id:number){

  }
}
