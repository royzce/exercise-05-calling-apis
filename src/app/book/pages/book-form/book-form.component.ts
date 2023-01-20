import { Component, AfterViewInit, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../service/book.service';
import { Book } from '../../models/book';
import { max, scan } from 'rxjs/operators';
@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements AfterViewInit, OnInit {
  bookForm : FormGroup
  authorsArray  : FormArray
  constructor(private formBuilder : FormBuilder,
              private bookService: BookService,
              private route: ActivatedRoute){
    this.bookForm = this.formBuilder.group({
      name: [''],
      authors: this.formBuilder.array([]),
      isbn: ['']

    })
    this.authorsArray = this.bookForm.get('authors') as FormArray;
  }
  id !: number
  highestID!: number; 
  
  ngOnInit(): void {
    this.bookService.getBooks().subscribe((book:Book[]) => {
      this.highestID = Math.max(...book.map(b => b.id))

      // console.log(this.highestID)
    })
    
  }
  ngAfterViewInit(): void {
    this.id = +this.route.snapshot.queryParams['id']
    this.populateFormById()
  }
  populateFormById(){
    if(this.id === undefined || Number.isNaN(this.id)){
      return
    }
    this.patchForm()
  }

  patchForm(){
    this.bookService.getBooks().subscribe((res:any) => {
      let filteredBook = res.find((book: Book) => book.id === this.id)
      this.bookForm.patchValue({
        name: filteredBook.name,
        isbn: filteredBook.isbn
      })
    })
    this.setAuthors()
  }
  setAuthors(){
    let control = <FormArray>this.bookForm.controls['authors']
    this.bookService.getBooks().subscribe((res:any) => {
      res.find((book: Book) => book.id == this.id).authors.
      forEach((authors: any) => control.push(new FormControl(authors)))
    })
  }
  addAuthor = () => {
    this.authorsArray.push(new FormControl())
  }
  deleteAuthor = (i:number) => {
    this.authorsArray.removeAt(i)
  }
  
  onSubmit(){
    // var generateId = this.id
    let book:any = {
      name: this.bookForm.value.name,
      authors: this.bookForm.value.authors,
      isbn: this.bookForm.value.isbn
    }
    if(Number.isNaN(this.id) || this.id === undefined){
      //create Book
      book.id = this.highestID+1
      this.bookService.createBook(book).subscribe()
    }{
      //update Book
      book.id = this.id
      this.bookService.updateBook(this.id,book).subscribe()
    }
  }
}
