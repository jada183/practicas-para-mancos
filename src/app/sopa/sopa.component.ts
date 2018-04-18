import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sopa',
  templateUrl: './sopa.component.html',
  styleUrls: ['./sopa.component.css']
})
export class SopaComponent implements OnInit {
  rowsColumns: number[] = [ 1, 2, 3, 4, 5, 6, 7, 8];
  countColumns: number;
  countRows: number;

  constructor() { }

  ngOnInit() {
  }

  createTable() {
  }
}
