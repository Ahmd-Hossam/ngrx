import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddCustomer } from 'src/app/app-store/actions/customer-actions';
import { Customer } from 'src/app/app-store/interfaces/customer';

@Component({
  selector: 'app-customers-add',
  templateUrl: './customers-add.component.html',
  styleUrls: ['./customers-add.component.scss'],
})
export class CustomersAddComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  addNewCustomer(name: any, email: any) {
    const customer = new Customer();
    (customer.name = name), (customer.email = email);
    console.log('cusormer', customer);

    this.store.dispatch(
      AddCustomer({
        customer: customer,
      })
    );
  }
}
