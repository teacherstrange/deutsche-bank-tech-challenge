import { Pipe, PipeTransform } from '@angular/core';
import { Country, Currency } from '../../../shared/models/Country';


@Pipe({ name: 'datagrid', pure: true })
export class DatagridPipe implements PipeTransform {
  /**
   * Converts a country to an array of table data
   */
  transform(country: Country): any[] {
    if (!country) return [];
    const { name, capital, population, currencies, flag } = country;

    console.log([{
      name,
      capital,
      population,
      currencies: currencies.map((c: Currency) => `${c.name} (${c.symbol})`).join(', '),
      flag,
    }]);

    return [{
      name,
      capital,
      population,
      currencies: currencies.map((c: Currency) => `${c.name} (${c.symbol})`).join(', '),
      flag,
    }];
  }
}
