import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import apiEntrypoints from '../apiEntrypoints';
import { Country } from '../models/Country';

@Injectable({
  providedIn: 'root'
})
export class GeoService {
  constructor(private http: HttpClient) {
  }

  /**
   * Retrieves country data by region
   */
  getCountryByRegion(region: string): Observable<Country[]> {
    const url = apiEntrypoints.countries.replace(':region', region);

    return this.http.get<Country[]>(url);
  }
}
