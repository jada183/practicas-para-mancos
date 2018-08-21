import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-upload',
  templateUrl: './img-upload.component.html',
  styleUrls: ['./img-upload.component.css']
})
export class ImgUploadComponent implements OnInit {
  selectedFile: File;

  constructor() { }

  ngOnInit() {
  }
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }
  onUpload() {
    // upload code goes here
  }
}
