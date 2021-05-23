import { Component, EventEmitter, Output } from '@angular/core';

/**
 * app-header is a stateless component displaying the top toolbar of the application.
 */
@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar color="primary">
      <span>Antonio Russo - <small>Technical challenge</small></span>
      &nbsp;
      <button mat-icon-button (click)="contactClick.emit($event)">
        <mat-icon>contact_mail</mat-icon>
      </button>
    </mat-toolbar>
  `,
})
export class HeaderComponent {
  /**
   * The (contactClick) event is triggered when the user clicks on the business-card-like icon on the left
   */
  @Output() contactClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
}
