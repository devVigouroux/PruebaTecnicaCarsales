import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { LocationResponse } from '../models/locations';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

private apiUrl = `${environment.apiUrl}/location`

  constructor(private http: HttpClient) {}

    getLocations(page: number = 1): Observable<LocationResponse> {
  
      return this.http.get<LocationResponse>(
        `${this.apiUrl}?page=${page}`
      );
  
    }

}