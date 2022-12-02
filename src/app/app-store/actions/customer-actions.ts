import { createAction, props } from '@ngrx/store';
import { Customer } from '../interfaces/customer';

//add new customer
export const AddCustomer = createAction(
  'add customer',
  props<{ customer: Customer }>()
);

//remove customer
export const RemoveCustomer = createAction(
  'remove customers',
  props<{ customerId: any }>()
);
