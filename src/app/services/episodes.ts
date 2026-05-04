import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { EpisodeResponse } from '../models/episode';
import { environment } from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class EpisodeService {
  private readonly apiUrl = `${environment.apiUrl}/episode`;

  constructor(private http: HttpClient) {}

  getEpisodes(page: number = 1, season: string = 'ALL'): Observable<EpisodeResponse> {
    let url = `${this.apiUrl}?page=${page}`;
    if (season !== 'ALL') {
      url = `${this.apiUrl}?page=${page}&episode=${season}`;
    }

    return this.http.get<EpisodeResponse>(url);
  }
}