import { Customer } from '../interfaces/customer';
import { AddCustomer, RemoveCustomer } from '../actions/customer-actions';
import { createReducer, on } from '@ngrx/store';

export const initialState: ReadonlyArray<Customer> = [];

const _customerReducer = createReducer(
  initialState,
  on(AddCustomer, (state, { customer }) => {
    return [...state, customer];
  }),

  on(RemoveCustomer, (state, { customerId }) => {
    return [...state.slice(0, customerId), ...state.slice(customerId + 1)];
  })
);

export function customerReducer(sate: any, action: any) {
  return _customerReducer(sate, action);
}
