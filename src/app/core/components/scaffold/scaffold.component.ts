import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CandidateCardComponent } from '../candidate-card/candidate-card.component';

@Component({
  selector: 'app-scaffold',
  templateUrl: './scaffold.component.html',
  styleUrls: ['./scaffold.component.scss']
})
export class ScaffoldComponent {
  constructor(private dialogService: MatDialog) {
  }

  public toggleModal() {
    this.dialogService.open(CandidateCardComponent);
  }
}
