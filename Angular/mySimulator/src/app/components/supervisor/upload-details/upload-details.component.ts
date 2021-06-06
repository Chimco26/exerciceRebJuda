import { Component, Input, OnInit } from '@angular/core';
import { Test } from 'src/app/models/file-model';
import { UploadService } from 'src/app/services/upload.service';


@Component({
  selector: 'app-upload-details',
  templateUrl: './upload-details.component.html',
  styleUrls: ['./upload-details.component.css']
})
export class UploadDetailsComponent implements OnInit {
  @Input() fileUpload: Test;

  constructor(private uploadService: UploadService) { }

  ngOnInit(): void {
  }

  deleteFileUpload(): void {
    this.uploadService.deleteFile(this.fileUpload);
    this.uploadService.getFiles();

  }

}
