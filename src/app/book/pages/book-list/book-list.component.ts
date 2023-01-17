import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit{
  constructor(private bookService: BookService, private router:Router){  }
  ngOnInit() {  }

  buttons = [
    { name: "Add", callback: this.add},
    { name: "Delete All", callback: this.deleteAll},
  ];

  executeFunction(mainFunction:(router:Router, bookService:BookService) => void){
    mainFunction(this.router,this.bookService)
  }
  editFunction(id:number){
    this.router.navigate(['book/form'], {queryParams: {id:id}})
  }
  add(router:Router,bookService:BookService){
    router.navigate(['book/form'])
  }
  deleteAll(router:Router,bookService:BookService){
    bookService.deleteAllObj()
  }

  getListOfBooks(){
    return this.bookService.getListOfBooks();
  }

}

