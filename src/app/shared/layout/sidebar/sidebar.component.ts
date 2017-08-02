import { AfterViewInit, Component, ElementRef, HostListener, OnInit } from '@angular/core';

import { GlobalState } from 'app/core/global.state';

import { layoutSizes } from 'app/theme';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements AfterViewInit, OnInit {

  menuHeight: number;
  isMenuCollapsed: boolean = false;
  isMenuShouldCollapsed: boolean = false;

  constructor(private elementRef: ElementRef, private state: GlobalState) { }

  ngOnInit() {
    this.state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }
  
  ngAfterViewInit(): void {
    setTimeout(() => this.updateSidebarHeight());
  }

  @HostListener('window:resize')
  onWindowResize(): void {

    const isMenuShouldCollapsed = this.shouldMenuCollapse();

    if (this.isMenuShouldCollapsed !== isMenuShouldCollapsed) {
      this.menuCollapseStateChange(isMenuShouldCollapsed);
    }
    this.isMenuShouldCollapsed = isMenuShouldCollapsed;
    this.updateSidebarHeight();
  }

  menuExpand(): void {
    this.menuCollapseStateChange(false);
  }

  menuCollapse(): void {
    this.menuCollapseStateChange(true);
  }

  menuCollapseStateChange(isCollapsed: boolean): void {
    this.isMenuCollapsed = isCollapsed;
    this.state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
  }

  updateSidebarHeight(): void {
    // TODO: get rid of magic 84 constant
    this.menuHeight = this.elementRef.nativeElement.childNodes[0].clientHeight - 84;
  }

  private shouldMenuCollapse(): boolean {
    return window.innerWidth <= layoutSizes.resWidthCollapseSidebar;
  }
}
