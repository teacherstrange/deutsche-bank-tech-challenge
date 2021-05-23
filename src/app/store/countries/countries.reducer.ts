import { createReducer, on } from '@ngrx/store'
import { CountriesState } from './countries.types'
import { countriesRequestGet, countriesRequestInvalidate, countriesRequestResponse, requireCountries } from './countries.actions'

/**
 * Creates a handy adapter for the the "countries" state.
 */
export const initialState: CountriesState = {
  didInvalidate: false,
  isFetching: false,
}

/**
 * Derives the next "countries" state from the previous one and the current action.
 * Uses the adapter to make sure the next state is a valid entity state.
 * The returned state is a brand a new object.
 */
export const countriesReducer = createReducer(
  initialState,
  on(requireCountries, (state, action) => ({
    ...state,
    currentRegion: action.region,
  })),
  on(countriesRequestGet, (state) => ({
    ...state,
    didInvalidate: false,
    isFetching: true,
    error: undefined,
  })),
  on(countriesRequestResponse, (state, action) => ({
    ...state,
    isFetching: false,
    data: {
      ...state.data,
      [action.region]: action.countries,
    }
  })),
  on(countriesRequestInvalidate, (state, action) => ({
    ...state,
    didInvalidate: true,
    isFetching: false,
    currentRegion: undefined,
    error: action.error
  }))
)

export default countriesReducer
