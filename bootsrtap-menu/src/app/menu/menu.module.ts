import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MenuFeatureKey, menuReducer } from './^state/menu.reducer';
import { MenuEffects } from './^state/menu.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(MenuFeatureKey, menuReducer),
    EffectsModule.forFeature([MenuEffects]),
  ],
})
export class MenuModule {}
