import { of } from 'rxjs';
import { catchError, concatMap, filter, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { countriesRequestGet, countriesRequestInvalidate, countriesRequestResponse, requireCountries } from './countries.actions';
import { GeoService } from '../../shared/services/geo.service';
import { RootState } from '../RootState.type';
import { selectCountriesData } from './countries.selectos';


/**
 * The following injectable class defines and contains all the "countries" state related side effects.
 */
@Injectable()
export class CountriesEffects {

  /**
   * When the requireCountries action is dispatched checks if the data are already
   * there, if so return the last one, otherwise dispatches the countriesRequestGet action
   * which will fetch the data from the API (check the getCountriesEffect$ side-effect)
   */
  requireCountriesEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requireCountries),
      concatMap(action => of(action).pipe(
        withLatestFrom(this.store.select(selectCountriesData)),
      )),
      filter(([action, latestData]) => !latestData || !latestData[action.region]),
      map(([action]) => action),
      mergeMap(({ region }) => of(countriesRequestGet({ region })))
    )
  );

  /**
   * When the countriesRequestGet action is dispatched takes care of performing
   * the related actions to fetch and bring the data to the store
   */
  getCountriesEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(countriesRequestGet),
      mergeMap(({ region }) => this.geoService.getCountryByRegion(region)
        .pipe(
          map((countries) => countriesRequestResponse({ countries, region })),
          catchError((error) => of(countriesRequestInvalidate({ error: error.message })))
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<RootState>,
    private geoService: GeoService,
  ) {
  }
}
