import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { CharacterResponse } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {


  private apiUrl = `${environment.apiUrl}/character`
  constructor(private http: HttpClient) {}

  getCharacters(page: number = 1): Observable<CharacterResponse> {

    return this.http.get<CharacterResponse>(
      `${this.apiUrl}?page=${page}`
    );

  }
}