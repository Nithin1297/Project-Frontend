import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { API } from './global';

export interface Iphoto {
  movieId: string;
  name: string;
  poster: string;
  rating: number;
  summary: string;
  trailer: string;
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private router: Router) { }
  async getAllMoviesP(): Promise<Iphoto[]> {
    const res = await fetch(`${API}/photos`);
    return await res.json();
  }
}
