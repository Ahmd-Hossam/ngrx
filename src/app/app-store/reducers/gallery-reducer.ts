import { Gallery } from '../interfaces/gallary';
import { getGalleries } from '../actions/gallary.action';
import { createReducer, on } from '@ngrx/store';

export const initialState: ReadonlyArray<Gallery> = [];

const _galleryReducer = createReducer(
  initialState,
  on(getGalleries, (state, { gallery }) => {
    return [...gallery];
  })
);

export function galleryReducer(sate: any, action: any) {
  return _galleryReducer(sate, action);
}
