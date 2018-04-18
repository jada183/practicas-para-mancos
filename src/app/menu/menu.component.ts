import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  nav = 'fixed';

  constructor() { }

  ngOnInit() {
  }

  changeClass(button: String) {
    if (button === 'servicios') {
      this.nav = 'unfixed';
    } else {
      this.nav = 'fixed';
    }
  }
}
