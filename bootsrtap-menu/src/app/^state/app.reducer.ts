import { createReducer, on } from '@ngrx/store';
import appActions from './app.actions';

export const AppFeatureKey = 'app';

export interface AppState {
  isMobile: boolean;
}

export const initialAppState: AppState = {
  isMobile: false,
};

export const appReducer = createReducer(
  initialAppState,
  on(appActions.isMobile, (state, action) => ({
    ...state,
    isMobile: action.isMobile,
  })),
);
