import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AvailableRegions, CommonOption } from '../../common.types';


@Component({
  selector: 'app-regions-selector',
  templateUrl: './regions-selector.component.html',
  styleUrls: ['./regions-selector.component.scss']
})
export class RegionsSelectorComponent {
  /**
   * The select title
   */
  @Input() title: string = 'Select a region';

  /**
   * The list of available regions (the select options)
   */
  @Input() regions: CommonOption[] = [];

  /**
   * The selected value
   */
  @Input() value?: string | null = undefined;

  /**
   * Disables the drop-down
   */
  @Input() disabled?: boolean | null = false;

  /**
   * on region change, emits the (change) event
   */
  @Output() change: EventEmitter<AvailableRegions> = new EventEmitter<AvailableRegions>();
}
