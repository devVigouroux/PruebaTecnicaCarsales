import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

export interface CharacterResponse {
  info: any;
  results: Character[];
}

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

    /**getCharacters(page: number = 1): Observable<CharacterResponse> {
    return this.http.get<CharacterResponse>(
      `${this.apiUrl}?page=${page}`
    );
  }*/
  getCharacters(page: number = 1) {

    return this.http.get<CharacterResponse>(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );

  }
}