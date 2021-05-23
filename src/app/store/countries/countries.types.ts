import { Country } from '../../shared/models/Country';
import { AvailableRegions } from '../../shared/common.types';

/**
 * Define and exports the shape of the tenants state
 */
export interface CountriesState {
  didInvalidate: boolean;
  isFetching: boolean;
  data?: { [key in keyof typeof AvailableRegions]?: Country[] };
  currentRegion?: AvailableRegions,
  error?: string;
}
