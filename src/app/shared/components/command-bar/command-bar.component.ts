import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss']
})
export class CommandBarComponent{
  @Output () actionEmitter = new EventEmitter<any>();
  constructor () {  }

  executeAction(action:string) {
    this.actionEmitter.emit({action});
  }

  
  
}
