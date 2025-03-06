import { Component, Input } from '@angular/core';
import { Menu } from '../../../models/menu';
import { Store } from '@ngrx/store';
import menuActions from '../../../menu/^state/menu.actions';
import { StorageService } from '../../../services/storage.service';
import { Observable } from 'rxjs';
import menuSelectors from '../../../menu/^state/menu.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-item',
  standalone: false,
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.scss',
})
export class NavItemComponent {
  @Input() menuItems: Menu[] = [];
  selectedMenu$: Observable<Menu | undefined>;

  constructor(
    private readonly store: Store,
    private readonly storage: StorageService,
    private readonly router: Router,
  ) {
    this.selectedMenu$ = this.store.select(menuSelectors.getSelectedMenu);
  }

  selectedMenu(selectedMenu: Menu) {
    this.storage.setItem('selectedMenu', selectedMenu);
    this.store.dispatch(menuActions.selectedMenu({ selectedMenu }));

    if (selectedMenu.url) {
      this.router.navigate([selectedMenu.url]);
    }
  }
}
