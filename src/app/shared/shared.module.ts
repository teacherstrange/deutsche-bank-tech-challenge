import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionsSelectorComponent } from './components/regions-selector/regions-selector.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { OptionsPipe } from './pipes/options.pipe';
import { GeoService } from './services/geo.service';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { MatIconModule } from '@angular/material/icon';


/**
 * Exports reusable shared components, pipes, filters and services.
 * The SharedModule should be imported in any other module that makes use of these items.
 */
@NgModule({
  declarations: [
    RegionsSelectorComponent,
    OptionsPipe,
    ErrorMessageComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
  ],
  providers: [
    GeoService,
  ],
  exports: [
    RegionsSelectorComponent,
    OptionsPipe,
    ErrorMessageComponent
  ]
})
export class SharedModule {
}
