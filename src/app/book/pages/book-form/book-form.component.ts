import { Component, AfterViewInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements AfterViewInit {
  bookForm : FormGroup
  authorsArray  : FormArray
  constructor(private formBuilder : FormBuilder ,public sharedService: SharedService){
    this.bookForm = this.formBuilder.group({
      name: [''],
      authors: this.formBuilder.array([new FormControl('')]),
      isbn: ['']

    })
    this.authorsArray = this.bookForm.get('authors') as FormArray;
  }
  ngAfterViewInit(): void {
    this.sharedService.hideElement()
  }
  addAuthor = () => {
    this.authorsArray.push(new FormControl())
  }

  deleteAuthor = (i:number) => {
    this.authorsArray.removeAt(i)
  }
}
