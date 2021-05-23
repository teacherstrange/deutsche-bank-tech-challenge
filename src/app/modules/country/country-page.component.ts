import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../../shared/models/Country';
import { AvailableRegions, FromStore } from '../../shared/common.types';
import { Store } from '@ngrx/store';
import { RootState } from '../../store/RootState.type';
import { Observable } from 'rxjs';
import { selectCountryByNameAndRegion } from '../../store/countries/countries.selectos';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss']
})
export class CountryPageComponent implements OnInit {

  /**
   * The table available columns
   */
  public displayedColumns: string[] = ['name', 'capital', 'population', 'currencies', 'flag'];

  /**
   * The selected country data arriving from the store.
   * As the values provided to the selector used for this specific data are bound to the url params
   * the business logic is implemented in the ngOnInit method.
   * An alternative approach would've been to use rxjs pipe methods to compose the selector without using
   * ngOnInit but I feel like readability is more important in this precise context.
   */
  public country$: FromStore<Country> = new Observable();

  constructor(private route: ActivatedRoute, private store: Store<RootState>) {
  }

  /**
   * Get the country parameter and the region parameter (from the parent),
   * then use selectCountryByNameAndRegion to retrieve the data
   */
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      if (params.has('country')) {
        const country: string = params.get('country') as string;

        this.route.parent?.paramMap.subscribe((parentParams) => {
          const region: AvailableRegions = parentParams.get('region') as AvailableRegions;
          this.country$ = this.store.select(selectCountryByNameAndRegion(country, region));
        });
      }
    });
  }
}
