import { Test } from './../../../models/file-model';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-upload-list',
  templateUrl: './upload-list.component.html',
  styleUrls: ['./upload-list.component.css']
})
export class UploadListComponent implements OnInit {
  fileUploads: Test[];

  constructor(private uploadService: UploadService) { }

  ngOnInit(): void {
    this.uploadService.getFiles();
    this.uploadService.getFileSubject().subscribe(list => {
      console.log(list);  
      this.fileUploads = list;
      })
  }

}
