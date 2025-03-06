import { createAction, props } from '@ngrx/store';
import { Menu } from '../../models/menu';

export const selectedMenu = createAction(
  '[Menu] Menu Updated',
  props<{ selectedMenu: Menu }>(),
);

const menuActions = {
  selectedMenu,
};

export default menuActions;
