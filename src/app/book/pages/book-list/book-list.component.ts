import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of, Subscription, switchMap } from 'rxjs';
import { Book } from '../../models/book';
import { BookService } from '../../service/book.service';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit{

  private subscription: Subscription | undefined 
  bookArray: Book[] = [];

  constructor(private bookService: BookService, private router:Router,){  }

  ngOnInit() {
    this.loadBooks()
  }

  bookItemAction(event:{id:number,action:string}){
    switch(event.action) {
      case 'edit':
        this.editBook(event.id)
      break
      case 'delete':
        this.deleteBook(event.id)
      break
    }
  }

  commandBarAction(event:{action:string}){
    switch(event.action) {
      case 'add':
        this.add()
      break
      case 'deleteAll':
        this.deleteAll()
      break
    }
  }

  editBook(id:number){
    this.router.navigate(['book/form'], {queryParams: {id:id}})
  }

  deleteBook(id:number){
    this.bookService.deleteBook(id).pipe(
      //this will update the UI when deleting a book item
      switchMap(async () => this.loadBooks()),catchError(_err => of (null))
    ).subscribe()
  }

  add(){
    this.router.navigate(['book/form'])
  }
  deleteAll(){
    this.bookArray.forEach(book => this.deleteBook(book.id))
  }
  
  
  loadBooks(){
    this.subscription = this.bookService.getBooks().subscribe(book => {
      this.bookArray = book
    })
  }


}

