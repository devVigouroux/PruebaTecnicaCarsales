import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Episode } from '../../models/episode';

@Component({
  selector: 'app-episode-detail-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './episode-detail-modal.html',
  styleUrl: './episode-detail-modal.css'
})
export class EpisodeDetailModalComponent {
  @Input() episode: Episode | null = null;
  @Output() close = new EventEmitter<void>();

  closeModal(): void {
    this.close.emit();
  }
}