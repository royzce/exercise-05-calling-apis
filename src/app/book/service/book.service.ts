import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  arrBooks: Book[] = [
    {
      id: 1,
      name: 'Taming the Tiger',
      authors: ['James K.'],
      isbn: '1482333098'
    },
    {
      id: 2,
      name: 'The Dog in th Park',
      authors: ['Lebron I.', 'Stephen K.', 'Loonie K.'],
      isbn: '4523993823'
    },
    {
      id: 3,
      name: 'Amber Stones',
      authors: ['Kevin F.', 'Terence J.'],
      isbn: '3123455099'
    }
  ];

  getListOfBooks(){
    return this.arrBooks;
  }
  
  constructor() { }
}
