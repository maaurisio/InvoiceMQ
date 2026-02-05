import { Injectable } from '@angular/core';
import { Invoice } from '../model/invoice.model';
import { invoiceData } from '../data/invoice.data';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  //services trae la data
  private invoice: Invoice = invoiceData;
  constructor() { }

  getInvoice(): Invoice {
    //retorna la factura cargada desde el archivo de datos
    return this.invoice;
  }

}
