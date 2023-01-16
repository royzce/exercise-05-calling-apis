import { Component, AfterViewInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements AfterViewInit{
  constructor(private bookService: BookService, public sharedService: SharedService){
  }
  ngAfterViewInit(): void {
    this.sharedService.showElement()
  }
  getListOfBooks(){
    return this.bookService.getListOfBooks();
  }

}

