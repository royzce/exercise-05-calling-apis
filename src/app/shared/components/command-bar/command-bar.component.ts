import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Blog } from 'src/app/blog/models/blog';
import { Book } from 'src/app/book/models/book';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss']
})
export class CommandBarComponent {
  @Input () data : any 
  @Output () actionEmitter = new EventEmitter<any>();

  sendAction(){
    console.log(this.data)
    this.actionEmitter.emit(this.data);
  }
}
