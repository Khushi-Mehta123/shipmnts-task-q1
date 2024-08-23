import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadBooksComponent } from './upload-books/upload-books.component';
import { UploadAuthorComponent } from './upload-author/upload-author.component';

const routes: Routes = [
  {path : '' , component : UploadBooksComponent},
  {path : 'uploadbooks' , component : UploadBooksComponent},
  {path : 'uploadauthors' , component : UploadAuthorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
