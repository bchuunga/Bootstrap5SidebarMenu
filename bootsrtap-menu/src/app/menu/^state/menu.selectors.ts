import {createFeatureSelector, createSelector} from '@ngrx/store';
import {MenuFeatureKey, MenuState} from './menu.reducer';

export const selectMenuState = createFeatureSelector<MenuState>(MenuFeatureKey);

export const getSelectedMenu = createSelector(
  selectMenuState,
  (state) => state.selectedMenu,
);

const menuSelectors = {
  getSelectedMenu,
};

export default menuSelectors;
