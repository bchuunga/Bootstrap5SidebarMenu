import { Component } from '@angular/core';
import {Menu, MENU_ITEMS} from '../../models/menu';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  menuItems: Menu[] = MENU_ITEMS;

}
