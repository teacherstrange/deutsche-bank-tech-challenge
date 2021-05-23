import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';


import { HeaderComponent } from './components/header/header.component';
import { ScaffoldComponent } from './components/scaffold/scaffold.component';
import { CandidateCardComponent } from './components/candidate-card/candidate-card.component';

/**
 * The CoreModule contains singleton services, universal/atomic components and other single instanced features.
 * It exports the necessary features to run the application.
 * The CoreModule should be imported only in the AppModule.
 */
@NgModule({
  declarations: [
    HeaderComponent,
    ScaffoldComponent,
    CandidateCardComponent,
  ],
  imports: [
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatDialogModule,
    MatListModule,
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HeaderComponent,
    MatSidenavModule,
    ScaffoldComponent,
    MatCardModule,
    MatDialogModule,
    MatListModule,
    CandidateCardComponent,
  ]
})
export class CoreModule {
}
