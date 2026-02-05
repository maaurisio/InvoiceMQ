import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../model/invoice.model';
import { CustomerViewComponent } from '../customer-view/customer-view.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { InvoiceItemViewComponent } from '../invoice-item-view/invoice-item-view.component';

@Component({
  selector: 'app-invoice',
  imports: [CompanyViewComponent, CustomerViewComponent, InvoiceItemViewComponent],
  templateUrl: './invoice.html',
})
export class InvoiceComponent implements OnInit {
  invoice!: Invoice;

  //no instanciar el servicio
  //inyectar el servicio
  constructor(private service: InvoiceService) { }

  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }

}
