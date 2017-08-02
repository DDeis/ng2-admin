import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { BaMenuService } from '../theme';
import { PAGES_MENU } from './pages.menu';

@Component({
  selector: 'pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent {

  constructor(private menuService: BaMenuService,) { }

  ngOnInit() {
    this.menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
  }
}
