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
      authors: this.formBuilder.array([new FormControl(''), new FormControl('')]),
      isbn: ['']

    })
    this.authorsArray = this.bookForm.get('authors') as FormArray;
  }
  id : number | undefined
  ngAfterViewInit(): void {
    this.id = +this.route.snapshot.queryParams['id']
    this.populateFormById()
    console.log('afterview')
  }
  populateFormById(){
    if(this.id === undefined || Number.isNaN(this.id)){
      console.log(this.id)
      console.log(this.bookService.arrBooks.find(book => book.id === 3)?.name)
      return
    }
    this.bookForm = this.formBuilder.group({
      name: [this.bookService.arrBooks.find(book => book.id === this.id)?.name],
      authors: this.formBuilder.array(this.bookService.arrBooks.find(book => book.id === this.id)!.authors),
      isbn: ['']

    })
  }
  addAuthor = () => {
    this.authorsArray.push(new FormControl())
  }
  deleteAuthor = (i:number) => {
    this.authorsArray.removeAt(i)
  }
  onSubmit(){
    // console.log(this.route.snapshot.params)
    // console.log(this.route.snapshot.queryParams['id'])
    
    // console.log(this.bookForm.value)
    var generateId = this.bookService.arrBooks.length+1
    this.bookService.arrBooks.push({"id":generateId,"name":this.bookForm.value.name,
      "authors":this.bookForm.value.authors,
      "isbn":this.bookForm.value.isbn,})
    // console.log(this.bookService.arrBooks)
  }
}
