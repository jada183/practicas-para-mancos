import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  titulos: string[] = ['Nombre', 'Apellidos', 'Pais', 'Email'];

  constructor() { }

  ngOnInit() {
  }

}
