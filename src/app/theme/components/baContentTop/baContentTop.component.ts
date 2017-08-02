import { Component } from '@angular/core';

import { GlobalState } from 'app/core/global.state';

@Component({
  selector: 'ba-content-top',
  styleUrls: ['./baContentTop.scss'],
  templateUrl: './baContentTop.html',
})
export class BaContentTop {

  activePageTitle: string = '';

  constructor(private state: GlobalState) {
    this.state.subscribe('menu.activeLink', (activeLink) => {
      if (activeLink) {
        this.activePageTitle = activeLink.title;
      }
    });
  }
}
