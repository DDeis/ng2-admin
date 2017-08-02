import { Component, OnInit } from '@angular/core';

import { GlobalState } from 'app/core/global.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  activePageTitle: string = '';

  constructor(private state: GlobalState) { }

  ngOnInit() {
    this.state.subscribe('menu.activeLink', (activeLink) => {
      if (activeLink) {
        this.activePageTitle = activeLink.title;
      }
    });
  }

}
