import { createReducer, on } from '@ngrx/store';
import { Menu } from '../../models/menu';
import menuActions from './menu.actions';
import { AppEntity } from '../../^state/app.models';

export const MenuFeatureKey = 'menu';

export interface MenuState extends AppEntity {
  selectedMenu?: Menu;
}

export const initialMenuState: MenuState = {
  selectedMenu: undefined,
};

export const menuReducer = createReducer(
  initialMenuState,
  on(menuActions.selectedMenu, (state, action) => ({
    ...state,
    selectedMenu: action.selectedMenu,
  })),
);
