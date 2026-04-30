import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { vi } from 'vitest';

import { Episodes } from './episodes';
import { EpisodeService } from '../../services/episodes';
import { EpisodeResponse } from '../../models/episode';

describe('Episodes', () => {
  let component: Episodes;
  let fixture: ComponentFixture<Episodes>;

  const mockResponse: EpisodeResponse = {
    info: {
      count: 1,
      pages: 1,
      next: null,
      prev: null
    },
    results: [
      {
        id: 1,
        name: 'Pilot',
        air_date: 'December 2, 2013',
        episode: 'S01E01',
        characters: ['url'],
        url: 'url',
        created: 'date'
      }
    ]
  };

  const episodeServiceMock = {
    getEpisodes: vi.fn()
  };

  beforeEach(async () => {

    vi.useFakeTimers();

    episodeServiceMock.getEpisodes.mockReturnValue(of(mockResponse));

    await TestBed.configureTestingModule({
      imports: [Episodes],
      providers: [
        {
          provide: EpisodeService,
          useValue: episodeServiceMock
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Episodes);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    vi.clearAllMocks();
    vi.useRealTimers();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load episodes correctly', async () => {

    fixture.detectChanges();

    await vi.advanceTimersByTimeAsync(800);

    expect(component.episodes.length).toBe(1);
    expect(component.totalEpisodes).toBe(1);
  });

  it('should show error message when service fails', async () => {

    episodeServiceMock.getEpisodes.mockReturnValue(
      throwError(() => new Error('API error'))
    );

    fixture.detectChanges();

    await vi.advanceTimersByTimeAsync(800);

    expect(component.errorMessage)
      .toBe('No se pudieron cargar los episodios.');
  });

  it('should open episode detail modal', () => {

    const episode = mockResponse.results[0];

    component.openEpisodeDetail(episode);

    expect(component.selectedEpisode)
      .toEqual(episode);
  });

  it('should close episode detail modal', () => {

    component.selectedEpisode = mockResponse.results[0];

    component.closeEpisodeDetail();

    expect(component.selectedEpisode)
      .toBeNull();
  });

});