import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { EpisodeResponse } from '../models/episode';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  private readonly apiUrl = `${environment.apiUrl}/episode`;

  constructor(private http: HttpClient) {}

    getEpisodes(page: number = 1): Observable<EpisodeResponse> {
    return this.http.get<EpisodeResponse>(
      `${this.apiUrl}?page=${page}`
    );
  }
}