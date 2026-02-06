import { Component } from '@angular/core';
import { InvoiceComponent } from './components/invoice/invoice.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InvoiceComponent],
  template: `
    <h1>APP COMPONENT FUNCIONA</h1>
    <app-invoice></app-invoice>
  `
})
export class App {}
