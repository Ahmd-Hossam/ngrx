import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { CustomersAddComponent } from './components/customers-add/customers-add.component';
import { CustomersViewComponent } from './components/customers-view/customers-view.component';
import { LayoutComponent } from './layout/layout.component';
import { GalleryListComponent } from './components/gallery-list/gallery-list.component';


@NgModule({
  declarations: [
    CustomersAddComponent,
    CustomersViewComponent,
    LayoutComponent,
    GalleryListComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
