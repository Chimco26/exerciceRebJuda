import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/models/file-model';
import { UploadService } from 'src/app/services/upload.service';


@Component({
  selector: 'app-upload-new-tests',
  templateUrl: './upload-new-tests.component.html',
  styleUrls: ['./upload-new-tests.component.css']
})
export class UploadNewTestsComponent implements OnInit {
  
  selectedFiles: FileList;
  currentFileUpload: Test;
  percentage: number;

  constructor(private uploadService: UploadService) { }

  ngOnInit(): void {
  }

  selectFile(event): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;

    this.currentFileUpload = new Test(file);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
      percentage => {
        this.percentage = Math.round(percentage);
      },
      error => {
        console.log(error);
      }
    );
  }
  
}
