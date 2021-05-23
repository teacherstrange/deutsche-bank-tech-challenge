import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryPageComponent } from './modules/country/country-page.component';
import { RegionsPageComponent } from './modules/regions/regions-page.component';
import { RegionsPageModule } from './modules/regions/regions-page.module';
import { CountryPageModule } from './modules/country/country-page.module';

/**
 * The main application routes
 */
const routes: Routes = [
  { path: '', redirectTo: 'regions', pathMatch: 'full' },
  {
    path: 'regions',
    loadChildren: () => import('./modules/regions/regions-page.module').then(m => m.RegionsPageModule),
  },
  {
    path: 'regions/:region',
    component: RegionsPageComponent,
    children: [
      {
        path: ':country',
        component: CountryPageComponent,
      }
    ]
  },
  { path: '**', redirectTo: 'regions' }
]

@NgModule({
  imports: [
    RegionsPageModule,
    CountryPageModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
