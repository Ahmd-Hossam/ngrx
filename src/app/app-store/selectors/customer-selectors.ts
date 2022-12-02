import { Customer } from '../interfaces/customer';
import { AppState } from '../app-state';
import { createSelector } from '@ngrx/store';

export const customerSelector = (sate: AppState) => sate.customer;

export const getCustomerByIndex = (customerIndex: any) =>
  createSelector(customerSelector, (customer: Customer[]) => {
    return customer[customerIndex];
  });
