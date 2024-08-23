import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss'
})
export class UploadComponent {


  uploadAuthorData() {
    // Logic to upload author data
    console.log('Author data upload initiated');

  }

  uploadBookData() {
    // Logic to upload book data
    console.log('Book data upload initiated');
  }

}
