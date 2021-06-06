import { LoginService } from './login.service';
import { TestServerService } from './test-server.service';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';

import { Observable, BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Test } from '../models/file-model';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private basePath = '/uploads';

  private listFiles: Test[] = [];
  listFiles$: BehaviorSubject<Test[]> = new BehaviorSubject<Test[]>([]);

  constructor(private loginService: LoginService,
    private TestServer: TestServerService,
    private storage: AngularFireStorage) { }

  pushFileToStorage(fileUpload: Test): Observable<number> {
    const filePath = `${this.basePath}/${fileUpload.file.name}`;
    console.log(fileUpload.file.name);
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          // fileUpload.url = downloadURL;
          // fileUpload.name = fileUpload.file.name;
          
          const myTest: Test = {
            name: fileUpload.file.name,
            supervisor_id: this.loginService.myUser._id,
            url: downloadURL,
          }
          this.TestServer.saveTest(myTest).subscribe(data => {
            console.log(data);
            this.getFiles();
          });
        });
      })
    ).subscribe();

    return uploadTask.percentageChanges();
  }
  
  getFiles(): void {
    console.log("getFiles");
    
    this.TestServer.getAllTest<Test[]>().subscribe(data => {
      console.log(data);
      
      this.listFiles = data;
      this.listFiles$.next(this.listFiles);
    });
  }

  getFileSubject(): Observable<Test[]>{
    return this.listFiles$;
  }

  deleteFile(fileUpload: Test): void {
    this.deleteFileDatabase(fileUpload)
      .subscribe(() => {
        console.log(fileUpload.name);
        
        this.deleteFileStorage(fileUpload.name);
      })
  }

  private deleteFileDatabase(test: Test): Observable<Test> {
    return this.TestServer.deleteTest<Test>(test);
  }

  private deleteFileStorage(name: string): void {
    const storageRef = this.storage.ref(this.basePath);
    storageRef.child(name).delete();
  }
}
