import { createAction, props } from '@ngrx/store';

export const isMobile = createAction(
  '[App] Viewport Changed',
  props<{ isMobile: boolean }>(),
);

const appActions = {
  isMobile,
};

export default appActions;
