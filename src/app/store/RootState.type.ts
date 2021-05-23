import { CountriesState } from './countries/countries.types'
/**
 * Export and defines the shape of the global NgRx state.
 */
export interface RootState {
  countries: CountriesState;
}
