import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss']
})
export class CommandBarComponent{
  @Input() buttons: any[] | undefined;
  @Output () actionEmitter = new EventEmitter<any>();
  constructor (public sharedService:SharedService, private router:Router) {  }

  onClick(button: any) {
    this.actionEmitter.emit(button.callback);
  }
  
}
