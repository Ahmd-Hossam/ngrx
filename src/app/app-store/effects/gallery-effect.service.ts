import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { map } from 'rxjs';
import { InvokeGalleryAPi } from '../actions/gallary.action';
import { GalleryService } from '../services/gallery.service';

@Injectable()
export class GalleryEffectService {
  constructor(private galleryService: GalleryService) {}

  getAllGalleries = this.galleryService
    .getAllGalleries()
    .pipe(map((data) => data));
}
