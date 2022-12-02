import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GalleryService } from 'src/app/app-store/services/gallery.service';
import { getGalleries } from 'src/app/app-store/actions/gallary.action';
import { Gallery } from 'src/app/app-store/interfaces/gallary';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.scss'],
})
export class GalleryListComponent implements OnInit {
  constructor(private galleryService: GalleryService) {}

  ngOnInit(): void {}
}
