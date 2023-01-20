import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookRoutingModule } from './book-routing.module';
import { BookFormComponent } from './pages/book-form/book-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../shared/shared.module";



@NgModule({
    declarations: [
        BookListComponent,
        BookItemComponent,
        BookFormComponent,
    ],
    imports: [
        CommonModule,
        BookRoutingModule,
        ReactiveFormsModule,
        SharedModule,
    ]
})
export class BookModule {
}


