import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { isDevMode } from '@angular/core';
import { appReducer } from '../^state/app.reducer';
import {AppEntity} from '../^state/app.models';

export const reducers: ActionReducerMap<AppEntity> = {
  router: routerReducer,
  app: appReducer,
};

export const metaReducers: MetaReducer<AppEntity>[] = isDevMode() ? [] : [];
