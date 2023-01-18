import { Component, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent{
  userForm : FormGroup
  constructor(private formBuilder : FormBuilder){
    this.userForm = this.formBuilder.group({
      email: [''],
      name: [''],
      bio: [''],
      active: ['']
    });
  }
  onSubmit(){

  }
}
