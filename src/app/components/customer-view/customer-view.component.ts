import { Component, Input } from '@angular/core';
import { Customer } from '../../model/customer.model';

@Component({
  selector: 'customer-view',
  imports: [],
  templateUrl: './customer-view.component.html',
})
export class CustomerViewComponent {
  @Input() customer!: Customer;


}
