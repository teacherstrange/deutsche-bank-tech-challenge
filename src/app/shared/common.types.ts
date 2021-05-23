/**
 * This module exports a set of common data types shared all over
 * the application.
 */

/**
 * Exports and define the available regions (so far)
 */
import { Observable } from 'rxjs';

export enum AvailableRegions {
  asia = 'asia',
  europe = 'europe',
}


/**
 * Defines the a common type for select-like components where an a list of {value, label} object is expected
 */
export interface CommonOption<VALUE = string | number> {
  value: VALUE,
  label: string,
}

export type FromStore<T> = Observable<T | undefined>;
