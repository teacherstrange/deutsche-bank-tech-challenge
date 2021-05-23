import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { RegionsPageComponent } from './regions-page.component';

const routes: Routes = [{ path: '', component: RegionsPageComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionsPageRoutingModule {
}
