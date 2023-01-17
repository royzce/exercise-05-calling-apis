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

  executeFunction(mainFunction:(router:Router) => void){
    mainFunction(this.router)
  }

  add(router:Router){
    router.navigate(['book/form'])
  }
  deleteAll(){
    console.log("DELETE ALL");
  }

  getListOfBooks(){
    return this.bookService.getListOfBooks();
  }

}

