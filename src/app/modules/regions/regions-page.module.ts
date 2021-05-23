import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionsPageComponent } from './regions-page.component';
import { RegionsPageRoutingModule } from './regions-page.routing';
import { SharedModule } from '../../shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    RegionsPageComponent
  ],
  imports: [
    CommonModule,
    RegionsPageRoutingModule,
    SharedModule,
    MatProgressSpinnerModule,
  ]
})
export class RegionsPageModule {
}
