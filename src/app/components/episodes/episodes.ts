import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { delay } from 'rxjs';

import { Episode, EpisodeResponse } from '../../models/episode';
import { EpisodeService } from '../../services/episodes';
import { EpisodeDetailModalComponent } from '../episode-detail-modal/episode-detail-modal';

@Component({
  selector: 'app-episodes',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    EpisodeDetailModalComponent,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  templateUrl: './episodes.html',
  styleUrl: './episodes.css'
})
export class Episodes implements OnInit {
  episodes: Episode[] = [];

  pageSize = 8;
  currentPage = 0;
  totalEpisodes = 0;

  isLoading = false;
  errorMessage = '';

  seasons: string[] = ['S01', 'S02', 'S03', 'S04', 'S05'];
  selectedSeason = 'ALL';

  selectedEpisode: Episode | null = null;

  constructor(
    private episodeService: EpisodeService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadEpisodes(1);
  }

  loadEpisodes(page: number = 1): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.cdr.detectChanges();

    this.episodeService
      .getEpisodes(page, this.selectedSeason)
      .pipe(delay(800))
      .subscribe({
        next: (data: EpisodeResponse) => {
          this.episodes = data.results;
          this.totalEpisodes = data.info.count;
          this.isLoading = false;

          this.cdr.detectChanges();
        },
        error: (error: unknown) => {
          this.episodes = [];
          this.totalEpisodes = 0;
          this.errorMessage = 'No se pudieron cargar los episodios.';
          this.isLoading = false;

          this.cdr.detectChanges();
        }
      });
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.loadEpisodes(this.currentPage + 1);
  }

  filterBySeason(): void {
    this.currentPage = 0;
    this.loadEpisodes(1);
  }

  openEpisodeDetail(episode: Episode): void {
    this.selectedEpisode = episode;
  }

  closeEpisodeDetail(): void {
    this.selectedEpisode = null;
  }
}