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
  private letters: string[] = [
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'ñ', 'o', 'p', 'q',
    'r', 's', 't', 'u', 'w', 'x',
    'y', 'z'
  ];
  table: Array<String>[] = [];
  private row: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  createTable() {
    for (let countRow = 0; countRow < this.countRows; countRow++) {
      this.row = [];
      for (let countColumn = 0; countColumn < this.countColumns; countColumn++) {
        this.row[countColumn] = this.letters[Math.round(Math.random() * (this.letters.length - 1))];
      }
      this.table[countRow] = this.row;
    }
  }
}
