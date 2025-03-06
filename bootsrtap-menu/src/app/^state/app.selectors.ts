import { createFeatureSelector, createSelector } from '@ngrx/store';
import {AppFeatureKey, AppState} from './app.reducer';

export const selectAppState = createFeatureSelector<AppState>(AppFeatureKey);

export const isMobile = createSelector(
  selectAppState,
  (state) => state.isMobile,
);

const appSelectors = {
  isMobile,
};

export default appSelectors;
