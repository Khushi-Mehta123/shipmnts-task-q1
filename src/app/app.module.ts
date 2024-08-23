import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { UploadAuthorComponent } from './upload-author/upload-author.component';
import { UploadBooksComponent } from './upload-books/upload-books.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    UploadAuthorComponent,
    UploadBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
