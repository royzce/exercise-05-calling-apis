import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  serverUrl = 'http://localhost:3000'
  constructor (private http:HttpClient){

  }

  getBooks():Observable<Book[]>{
    return this.http.get<Book[]>(`${this.serverUrl}/books`)
  }
  deleteBook(id:number){
    return this.http.delete(`${this.serverUrl}/books/${id}`)
  }
  createBook(book: Book) {
    return this.http.post(`${this.serverUrl}/books`, book)
  }
  updateBook(id:number, book: Book) {
    return this.http.put(`${this.serverUrl}/books/${id}`, book)
  }
  
}
