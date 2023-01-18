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
      name: 'The Dog in the Park',
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

  removeDuplicates(){
    // console.log(Object.values(this.arrBooks.reduce((acc,cur)=>Object.assign(acc,{[cur.id]:cur}),{})))
    this.arrBooks = Object.values(this.arrBooks.reduce((acc,cur)=>Object.assign(acc,{[cur.id]:cur}),{}))
  }
  deleteObj(id:number){
    this.arrBooks = this.arrBooks.filter( obj => obj.id !== id);
  }
  deleteAllObj(){
    this.arrBooks = []
  }
  getListOfBooks(){
    return this.arrBooks;
  }
  
}
