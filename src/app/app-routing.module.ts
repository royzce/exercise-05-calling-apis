import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'blog',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./book/book.module')
    .then(m => m.BookModule)
  },
  {
    path: '',
    loadChildren: () => import('./blog/blog.module')
    .then(m => m.BlogModule)

  },
  {
    path: 'profile',
    loadChildren: () => import('./user/user.module')
    .then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
