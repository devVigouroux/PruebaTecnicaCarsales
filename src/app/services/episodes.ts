import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { EpisodeResponse } from '../models/episode';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {
  private apiUrl = 'https://rickandmortyapi.com/api/episode';

  constructor(private http: HttpClient) {}

    getEpisodes(page: number = 1) {
    return this.http.get<EpisodeResponse>(
      `https://rickandmortyapi.com/api/episode?page=${page}`
    );
  }
}