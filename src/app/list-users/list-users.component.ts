import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})

export class ListUsersComponent implements OnInit {
  titulos: string[] = ['Nombre', 'Apellidos', 'Pais', 'Email'];
  text: string;

  constructor(public usersService: UsersService) { }

  ngOnInit() {
  }

}
