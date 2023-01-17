import { Component, AfterViewInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private formBuilder : FormBuilder,
              public sharedService: SharedService,
              private bookService: BookService,
              private route: ActivatedRoute){
    this.bookForm = this.formBuilder.group({
      name: [''],
      authors: this.formBuilder.array([]),
      isbn: ['']

    })
    this.authorsArray = this.bookForm.get('authors') as FormArray;
  }
  id : number | undefined
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
    this.bookForm.patchValue({
      name: this.bookService.arrBooks.find(book => book.id === this.id)?.name,
      isbn: this.bookService.arrBooks.find(book => book.id === this.id)?.isbn,
    })
    this.setAuthors()
  }
  setAuthors(){
    let control = <FormArray>this.bookForm.controls['authors']
    this.bookService.arrBooks.find(book => book.id === this.id)?.authors.forEach(data => {
      control.push(new FormControl(data))
    })
  }
  addAuthor = () => {
    this.authorsArray.push(new FormControl())
  }
  deleteAuthor = (i:number) => {
    this.authorsArray.removeAt(i)
  }
  onSubmit(){
    // var generateId = this.bookService.arrBooks.length+1
    var generateId = this.id
    if(Number.isNaN(generateId) || generateId === undefined){
      generateId = this.bookService.arrBooks.length+1
    }
    this.bookService.arrBooks.push({"id":generateId,"name":this.bookForm.value.name,
      "authors":this.bookForm.value.authors,
      "isbn":this.bookForm.value.isbn,})
    this.bookService.removeDuplicates()
  }
}
