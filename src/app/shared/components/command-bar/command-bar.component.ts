import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss']
})
export class CommandBarComponent{
  @Input() buttons: any[] | undefined;
  @Output () actionEmitter = new EventEmitter<any>();
  constructor (public sharedService:SharedService) {  }

  onClick(button: any) {
    this.actionEmitter.emit(button.callback);
  }
  
}
