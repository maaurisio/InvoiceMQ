import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invoice } from '../model/invoice.model';

@Injectable({ providedIn: 'root' })
export class InvoiceService {
  private apiUrl = 'http://localhost:3000/api/invoice'; // tu API

  constructor(private http: HttpClient) {}

  getInvoice(): Observable<Invoice> {
    return this.http.get<Invoice>(this.apiUrl);
  }
}
