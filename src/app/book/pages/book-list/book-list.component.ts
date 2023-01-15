import { Component } from '@angular/core';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  constructor(private bookService: BookService){
  }
  getListOfBooks(){
    return this.bookService.getListOfBooks();
  }

}

