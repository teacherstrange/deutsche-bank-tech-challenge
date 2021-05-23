/**
 * This module exports the data model for the Country object and its related sub-models.
 */

export type Currency = {
  code: string;
  name: string;
  symbol: string;
}

export type Language = {
  name: string;
  nativeName: string;
  iso639_1: string;
  iso639_2: string;
}


export type RegionalBlock = {
  acronym: string,
  name: string,
  otherAcronyms: string[],
  otherNames: string[],
}

export interface Country {
  name: string,
  topLevelDomain: string[],
  alpha2Code: string,
  alpha3Code: string,
  callingCodes: number[],
  capital: string,
  altSpellings: string[]
  region: string,
  subregion: string,
  population: number,
  latlng: number[]
  demonym: string,
  area: number,
  gini: number,
  timezones: string[],
  borders: string[]
  nativeName: string,
  numericCode: number,
  currencies: Currency[],
  languages: Language[],
  translations: Record<string, string>
  flag: string,
  regionalBlocs: RegionalBlock[],
  cioc: string,
}
