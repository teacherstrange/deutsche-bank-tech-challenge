import { createAction, props } from '@ngrx/store'
import { Country } from '../../shared/models/Country';
import { AvailableRegions } from '../../shared/common.types';

/**
 * Action types related to the `countries` state
 */
export const requireCountries = createAction('[COUNTRIES] ~Side effect', props<{ region: AvailableRegions }>())
export const countriesRequestGet = createAction('[COUNTRIES] GET request', props<{ region: AvailableRegions }>())
export const countriesRequestResponse = createAction('[COUNTRIES] GET resp', props<{ countries: Country[], region: AvailableRegions }>())
export const countriesRequestInvalidate = createAction('[COUNTRIES] GET invalidate', props<{ error: string }>())
