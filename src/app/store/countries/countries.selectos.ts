import { createFeatureSelector, createSelector } from '@ngrx/store'
import { CountriesState } from './countries.types';
import { AvailableRegions } from '../../shared/common.types';
import { Country } from '../../shared/models/Country';

export const selectCountriesState = createFeatureSelector<CountriesState>('countries');

/**
 * Selects the isFetching flag so that components can be aware 'countries' state is fetching data
 */
export const selectCountriesLoading = createSelector(
  selectCountriesState,
  ({ isFetching }) => isFetching
);

/**
 * Selects the error from the 'countries' state if there's any, otherwise returns false
 */
export const selectCountriesError = createSelector(
  selectCountriesState,
  ({ didInvalidate, error }) => didInvalidate ? error : false,
);

/**
 * Selects the data property from the 'countries' state if there's any, otherwise returns null
 */
export const selectCountriesData = createSelector(
  selectCountriesState,
  ({ data }) => data ? data : null,
)

/**
 * Selects the currentRegion property from the 'countries' state if there's any
 */
export const selectCurrentRegionValue = createSelector(
  selectCountriesState,
  ({ currentRegion }) => currentRegion || undefined,
);

/**
 * Selects the available countries for the provided region (or null)
 */
export const selectCurrentRegionData = createSelector(
  selectCurrentRegionValue,
  selectCountriesData,
  (region, data) => data && region ? data[region] : undefined,
);

export const selectCountryByNameAndRegion = (name: string, region: AvailableRegions) => createSelector(
  selectCountriesData,
  (data) => {
    if (!data || !region || !data[region]) return undefined;

    // @ts-ignore
    return data[region].filter((country: Country) => country.name === name)[0];
  }
)
