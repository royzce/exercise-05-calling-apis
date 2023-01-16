import { Component, AfterViewInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements AfterViewInit {
  constructor(private sharedService : SharedService){}
  ngAfterViewInit(): void {
    this.sharedService.hideElement()
  }
}
