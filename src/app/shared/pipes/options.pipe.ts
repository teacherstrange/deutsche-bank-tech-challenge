import { Pipe, PipeTransform } from '@angular/core';
import { CommonOption } from '../common.types';


@Pipe({ name: 'options', pure: true })
export class OptionsPipe implements PipeTransform {
  /**
   * Converts an array of unknown values to an array of CommonOption
   */
  transform(value?: unknown | unknown[], valueKey: string = 'value', labelKey: string = valueKey): CommonOption[] {
    if (!value || !Array.isArray(value)) return [];

    return value.map((item: any) => ({
      value: item[valueKey],
      label: item[labelKey],
    }));
  }
}
