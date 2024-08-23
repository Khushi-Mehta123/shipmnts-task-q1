import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-upload-author',
  templateUrl: './upload-author.component.html',
  styleUrl: './upload-author.component.scss'
})
export class UploadAuthorComponent {
  tableData: any[] = [];

  onFileChange(event: any) {
    const target: DataTransfer = <DataTransfer>(event.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');

    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      const data = <any[][]>XLSX.utils.sheet_to_json(ws, { header: 1 });

      this.tableData = data.slice(1).map(row => ({
        Name: row[0],
        Email: row[1],
        DateOfBirth : this.Converttexttodate(row[2])
      }));
    };
    reader.readAsBinaryString(target.files[0]);
  }

  onUpload() {
    if (this.tableData.length) {
      // Here, you would send this.tableData to the backend for validation and storage
      console.log('Data ready for upload:', this.tableData);
      alert('Data uploaded successfully!');
    } else {
      alert('Please upload a valid Excel file.');
    }
  }

  Converttexttodate(dateString: string): string {
    if (/^\d+(\.\d+)?$/.test(dateString)) {
      const excelDate = parseFloat(dateString);
      const date = new Date((excelDate - 25569) * 86400 * 1000);
      return date.toISOString().split('T')[0];
    }
    return dateString;
  }

}
