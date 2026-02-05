import { Component, Input } from '@angular/core';
import { InvoiceItem } from '../../model/invoiceItem.model';

@Component({
  selector: 'invoice-item-view',
  imports: [],
  templateUrl: './invoice-item-view.component.html',
})
export class InvoiceItemViewComponent {
  @Input() invoiceItem!: InvoiceItem[];
}
