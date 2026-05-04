import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { delay } from 'rxjs';



import {
  Location,
  LocationResponse
} from '../../models/locations';

import {
  LocationService
} from '../../services/locations';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule, MatCardModule,MatPaginatorModule,MatProgressSpinnerModule],
  templateUrl: './locations.html',
  styleUrl: './locations.css'
})
export class Locations implements OnInit {
  allLocations: Location[] = [];
  locations: Location[] = [];
  pageSize = 8;
  currentPage = 0;
  totalLocations = 0;
  isLoading = false;
  errorMessage = '';
  constructor(
    private locationService: LocationService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadLocations();
  }

  loadLocations(): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.locationService
      .getLocations().pipe(delay(800))
      .subscribe({

        next: (data: LocationResponse) => {

          // llegan 20 desde API

          this.allLocations =
            data.results;

          // total real = 20

          this.totalLocations =
            this.allLocations.length;

          // mostrar página 1

          this.updatePage();
          this.isLoading = false;
          this.cdr.detectChanges();

        },

        error: (error: unknown) => {
          this.errorMessage = 'No se pudieron cargar las ubicaciones.';
          this.isLoading = false;
          this.cdr.detectChanges();
        }

      });

  }

  updatePage(): void {

    const start =
      this.currentPage * this.pageSize;

    const end =
      start + this.pageSize;

    this.locations =
      this.allLocations.slice(start, end);

  }

  onPageChange(event: PageEvent): void {

    this.currentPage =
      event.pageIndex;

    this.updatePage();

  }

}