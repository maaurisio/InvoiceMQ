import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { App } from './app/app';
import { InvoiceComponent } from './app/components/invoice/invoice.component';

bootstrapApplication(InvoiceComponent, {
  providers: [
    provideHttpClient(),
  ],
});
