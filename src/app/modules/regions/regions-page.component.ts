import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AvailableRegions, CommonOption, FromStore } from '../../shared/common.types';
import { RootState } from '../../store/RootState.type';
import { requireCountries } from '../../store/countries/countries.actions';
import { Country } from '../../shared/models/Country';
import {
  selectCountriesError,
  selectCountriesLoading,
  selectCurrentRegionData,
  selectCurrentRegionValue
} from '../../store/countries/countries.selectos';



@Component({
  selector: 'app-regions-page',
  templateUrl: './regions-page.component.html',
  styleUrls: ['./regions-page.component.scss']
})
export class RegionsPageComponent implements OnInit {
  /**
   * The list of the available regions
   */
  public regions: CommonOption<AvailableRegions>[] = [
    { value: AvailableRegions.europe, label: 'Europe' },
    { value: AvailableRegions.asia, label: 'Asia' },
  ]

  /**
   * The selected region drop-down value observable
   */
  public selectedRegionValue$: FromStore<AvailableRegions> = this.store.select(selectCurrentRegionValue);

  /**
   * The selected countries observable
   */
  public selectedRegionCountries$: FromStore<Country[]> = this.store.select(selectCurrentRegionData);

  /**
   * The loading flag for the countries state observable
   */
  public countriesLoading$: FromStore<boolean> = this.store.select(selectCountriesLoading);

  /**
   * The possible error from the countries state observable
   */
  public error$: FromStore<string | false> = this.store.select(selectCountriesError);

  /**
   * The local selected country
   */
  public selectedCountry: string | null = null;

  constructor(private store: Store<RootState>, private route: ActivatedRoute, private router: Router) {
  }

  /**
   * When the component inits, subscribe to the 'region' parameter from the url, then require the
   * counties accordingly.
   */
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if (params.has('region')) {
        const region: AvailableRegions = params.get('region') as AvailableRegions;

        this.store.dispatch(requireCountries({ region }));
      }
    });

    this.selectedCountry = this.route.children[0]?.snapshot.params.country as string;
  }

  /**
   * When the region drop-down value changes, navigate that specific region url
   */
  onRegionChange(nextRegion: AvailableRegions) {
    this.router.navigate([`/regions/${nextRegion}`]).then(() => {
      this.selectedCountry = null;
    })
  }

  /**
   * When the country drop-down value changes, navigate to its route
   */
  onCountryChange(nextCountry: string) {
    this.selectedCountry = nextCountry;
    this.router.navigate([nextCountry], { relativeTo: this.route });
  }
}
