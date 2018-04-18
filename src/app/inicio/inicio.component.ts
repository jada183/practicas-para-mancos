import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {
  visibilityimg1 = 'visible';
  visibilityimg2 = 'hidden';
  visibilityimg3 = 'hidden';
  visibilityimg1b = true;
  visibilityimg2b = false;
  visibilityimg3b = false;
  countChangeimg = 1;
  constructor() {

   }

  ngOnInit() {

    Observable.interval(2000).subscribe(x => this.changeImg());
  }
  selectImg(num: number): void {
    if (num === 1) {
      this.visibilityimg1 = 'visible';
      this.visibilityimg2 = 'hidden';
      this.visibilityimg3 = 'hidden';
      this.countChangeimg = 2;
    } else if (num === 2) {
      this.visibilityimg2 = 'visible';
      this.visibilityimg1 = 'hidden';
      this.visibilityimg3 = 'hidden';
      this.countChangeimg = 3;
    } else if (num === 3) {
      this.visibilityimg3 = 'visible';
      this.visibilityimg1 = 'hidden';
      this.visibilityimg2 = 'hidden';
      this.countChangeimg = 1;
    }
    }
    changeImg(): void {
      if (this.countChangeimg === 1) {
        this.visibilityimg1 = 'visible';
        this.visibilityimg2 = 'hidden';
        this.visibilityimg3 = 'hidden';
        this.countChangeimg = 2;
        this.visibilityimg1b = true;
        this.visibilityimg2b = false;
        this.visibilityimg3b = false;
      } else if (this.countChangeimg === 2) {
        this.visibilityimg2 = 'visible';
        this.visibilityimg1 = 'hidden';
        this.visibilityimg3 = 'hidden';
        this.countChangeimg = 3;
        this.visibilityimg1b = false;
        this.visibilityimg2b = true;
        this.visibilityimg3b = false;
      } else if (this.countChangeimg === 3) {
        this.visibilityimg3 = 'visible';
        this.visibilityimg1 = 'hidden';
        this.visibilityimg2 = 'hidden';
        this.countChangeimg = 1;
        this.visibilityimg1b = false;
        this.visibilityimg2b = false;
        this.visibilityimg3b = true;
      }

    }
  }


