import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  template: `
    <div class="error">
      <div class="error-h">
        <mat-icon>{{icon}}</mat-icon>
        <h1>
          {{title}}
        </h1>
      </div>
      <p>{{message}}</p>
    </div>
  `,
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent {
  /**
   * The alert title
   */
  @Input() title: string = 'Ooops... something went wrong';

  /**
   * The error message
   */
  @Input() message: string = '';

  /**
   * The displayed icon
   */
  @Input() icon: string = 'error';
}
