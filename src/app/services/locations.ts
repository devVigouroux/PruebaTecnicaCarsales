import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LocationResponse } from '../models/locations';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private apiUrl =
    'https://rickandmortyapi.com/api/location';

  constructor(private http: HttpClient) {}

  getLocations(): Observable<LocationResponse> {
    return this.http.get<LocationResponse>(this.apiUrl);
  }

}