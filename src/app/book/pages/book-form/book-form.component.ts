import { Component, AfterViewInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SharedService } from 'src/app/shared/services/shared.service';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements AfterViewInit {
  bookForm : FormGroup
  authorsArray  : FormArray
  constructor(private formBuilder : FormBuilder ,public sharedService: SharedService,private bookService: BookService){
    this.bookForm = this.formBuilder.group({
      name: [''],
      authors: this.formBuilder.array([new FormControl('')]),
      isbn: ['']

    })
    this.authorsArray = this.bookForm.get('authors') as FormArray;
  }
  ngAfterViewInit(): void {
    
  }
  addAuthor = () => {
    this.authorsArray.push(new FormControl())
  }
  deleteAuthor = (i:number) => {
    this.authorsArray.removeAt(i)
  }
  onSubmit(){
    console.log(this.bookForm.value)
    var generateId = this.bookService.arrBooks.length+1
    this.bookService.arrBooks.push({"id":generateId,"name":this.bookForm.value.name,
      "authors":this.bookForm.value.authors,
      "isbn":this.bookForm.value.isbn,})
    console.log(this.bookService.arrBooks)
  }
}
