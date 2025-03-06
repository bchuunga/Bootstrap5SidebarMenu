import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../../models/menu';
import { Store } from '@ngrx/store';
import menuSelectors from '../../menu/^state/menu.selectors';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  selectedMenu$: Observable<Menu | undefined>;

  constructor(private readonly store: Store) {
    this.selectedMenu$ = this.store.select(menuSelectors.getSelectedMenu);
  }
}
