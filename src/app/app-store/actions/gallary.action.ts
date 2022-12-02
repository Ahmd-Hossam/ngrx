import { createAction, props } from '@ngrx/store';
import { Gallery } from '../interfaces/gallary';

export const getGalleries = createAction(
  'gallery api',
  props<{ gallery: Gallery[] }>()
);

export const InvokeGalleryAPi = createAction('Invoke gallery API');
