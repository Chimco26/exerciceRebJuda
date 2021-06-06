export class Test {
    _id?: string;
    supervisor_id?: string;
    key?: string;
    name?: string;
    url: string;
    file?: File;

  
    constructor(file: File) {
      this.file = file;
    }
  }