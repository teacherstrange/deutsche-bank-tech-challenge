import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryPageComponent } from './country-page.component';
import { MatTableModule } from '@angular/material/table';
import { DatagridPipe } from './pipes/datagrid.pipe';


@NgModule({
  declarations: [
    CountryPageComponent,
    DatagridPipe
  ],
  imports: [
    CommonModule,
    MatTableModule,
  ]
})
export class CountryPageModule {
}
