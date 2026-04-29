
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { CharacterService, Character, CharacterResponse } from '../../services/character';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { delay } from 'rxjs';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule, MatCardModule,MatPaginatorModule,MatProgressSpinnerModule],
  templateUrl: './characters.html',
  styleUrl: './characters.css'
})
export class Characters implements OnInit {

  allCharacters: Character[] = [];
  characters: Character[] = [];

  pageSize = 8;
  currentPage = 0;
  totalCharacters = 0;
  isLoading = false;
  errorMessage = '';
  constructor(
    private characterService: CharacterService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

    loadCharacters(): void {
      this.isLoading = true;
      this.errorMessage = '';
      this.characterService
        .getCharacters().pipe(delay(800))
        .subscribe({
          next: (data: CharacterResponse) => {
            // Aquí llegan 20 personajes
            this.allCharacters = data.results;
            // Total real que queremos paginar
            this.totalCharacters = this.allCharacters.length;
            // Mostrar primera página
            this.updatePage();
            this.isLoading = false;
            this.cdr.detectChanges();
          },

          error: (error: unknown) => {
            console.error(error);
            
            this.errorMessage =
            typeof error==='string'
              ? error
              : 'No se pudieron cargar los personajes.';
            this.isLoading = false;
            this.cdr.detectChanges();
          }

        });

    }

  updatePage(): void {

    const start =
    this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    this.characters = this.allCharacters.slice(start, end);
  }
  onPageChange(event: any): void {

    this.currentPage = event.pageIndex;
    this.updatePage();

  }
}