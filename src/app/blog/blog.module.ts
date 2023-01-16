import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogRoutingModule } from './blog-routing.module';
import { CommandBarComponent } from '../shared/components/command-bar/command-bar.component';
// import { AppModule } from "../app.module";



@NgModule({
    declarations: [
        BlogListComponent,
        BlogItemComponent,
        CommandBarComponent
        
        
    ],
    imports: [
        CommonModule,
        BlogRoutingModule,
        

    ]
})
export class BlogModule { }
