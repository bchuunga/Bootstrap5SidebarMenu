import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage.service';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs';
import appActions from './^state/app.actions';
import menuActions from './menu/^state/menu.actions';
import { Menu, MENU_ITEMS } from './models/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  menuItems: Menu[] = MENU_ITEMS;

  constructor(
    private readonly router: Router,
    private readonly breakpointObserver: BreakpointObserver,
    private readonly store: Store,
    private readonly storage: StorageService,
  ) {}

  ngOnInit() {
    this.getMenu();

    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .pipe(map((b) => b.matches))
      .subscribe((m) => {
        this.store.dispatch(appActions.isMobile({ isMobile: m }));
      });

    this.router.events.subscribe((event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  getMenu() {
    const selectedMenu = this.storage.getItem('selectedMenu');
    this.store.dispatch(menuActions.selectedMenu({ selectedMenu }));
  }
}
