import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Episode, EpisodeResponse } from '../../models/episode';
import { EpisodeService } from '../../services/episodes';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { EpisodeDetailModalComponent } from '../episode-detail-modal/episode-detail-modal';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { delay } from 'rxjs';

@Component({
  selector: 'app-episodes',
  standalone: true,
  imports: [CommonModule, MatCardModule,MatPaginatorModule,
    MatProgressSpinnerModule,EpisodeDetailModalComponent,MatButtonModule,MatIconModule],
  templateUrl: './episodes.html',
  styleUrl: './episodes.css'
})
export class Episodes implements OnInit {
  allEpisodes: Episode[] = [];
  episodes: Episode[] = [];
  pageSize = 8;
  currentPage = 0;
  totalEpisodes  = 0;
  isLoading = false;
  errorMessage = '';
  constructor(
    private episodeService: EpisodeService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadEpisodes();
  }

loadEpisodes(): void {
  this.isLoading = true;
  this.errorMessage = '';

  this.cdr.detectChanges(); // 👈 agrega esto

  this.episodeService.getEpisodes().pipe(delay(800)).subscribe({
    next: (data: EpisodeResponse) => {
      this.allEpisodes = data.results;
      this.totalEpisodes = this.allEpisodes.length;

      this.currentPage = 0;
      this.updatePage();

      this.isLoading = false;
      this.cdr.detectChanges();
    },
    error: (error: unknown) => {
      console.error(error);
      this.errorMessage = 'No se pudieron cargar los episodios.';
      this.isLoading = false;
      this.cdr.detectChanges();
    }
  });
}

  updatePage(): void {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;

    this.episodes = this.allEpisodes.slice(start, end);
    //this.episodes= [];
    //this.isLoading=false;

    this.cdr.detectChanges();
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.updatePage();
  }


  selectedEpisode: Episode | null = null;

  openEpisodeDetail(episode: Episode): void {
    this.selectedEpisode = episode;
  }

  closeEpisodeDetail(): void {
    this.selectedEpisode = null;
  }

}