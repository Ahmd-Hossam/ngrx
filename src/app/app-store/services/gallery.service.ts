import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  constructor(private http: HttpClient) {}

  getAllGalleries() {
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }
}
