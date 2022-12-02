import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/app-store/interfaces/customer';
import { Store, select } from '@ngrx/store';
import { RemoveCustomer } from 'src/app/app-store/actions/customer-actions';
import { getCustomerByIndex } from 'src/app/app-store/selectors/customer-selectors';
@Component({
  selector: 'app-customers-view',
  templateUrl: './customers-view.component.html',
  styleUrls: ['./customers-view.component.scss'],
})
export class CustomersViewComponent implements OnInit {
  customers: Observable<Customer[]>;
  public customerDetails: Customer | undefined;
  constructor(private store: Store<{ customer: Customer[] }>) {
    this.customers = this.store.pipe(select('customer'));
  }

  ngOnInit(): void {
    console.log('sotre', this.store.pipe(select('customer')));
    this.store.pipe(select('customer')).subscribe((tes) => {
      console.log('tsst', tes);
    });
  }

  removeCusomer(index: any) {
    this.store.dispatch(RemoveCustomer({ customerId: index }));
  }

  //get customer details
  getCustomerDetails(index: any) {
    const subscription = this.store
      .pipe(select(getCustomerByIndex(index)))
      .subscribe((res) => {
        this.customerDetails = res;
      });
    subscription.unsubscribe();
  }
}
