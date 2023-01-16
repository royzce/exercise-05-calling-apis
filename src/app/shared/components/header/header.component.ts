import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(){

  }
  hideCommandBar(){
    // this.sharedService.emitData();
    // console.log(this.sharedService)
    // this.sharedService.emitData()
  }
  showCommandBar(){
    // this.sharedService.emitData()
  }
}
