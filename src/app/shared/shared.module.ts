import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandBarComponent } from './components/command-bar/command-bar.component';



@NgModule({
  declarations: [CommandBarComponent],
  imports: [
    CommonModule
  ],
  exports: [CommandBarComponent]
})
export class SharedModule { }
