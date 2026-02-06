import { Component, OnInit } from "@angular/core";
import { InvoiceService } from "../../services/invoice.service";
import { Invoice } from "../../model/invoice.model";
import { CompanyViewComponent } from "../company-view/company-view.component";
import { CustomerViewComponent } from "../customer-view/customer-view.component";
import { InvoiceItemViewComponent } from "../invoice-item-view/invoice-item-view.component";

@Component({
  selector: "app-invoice",
  standalone: true,
  imports: [CompanyViewComponent, CustomerViewComponent, InvoiceItemViewComponent],
  templateUrl: "./invoice.html",
})
export class InvoiceComponent implements OnInit {
  invoice!: Invoice;
  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    this.invoiceService.getInvoice().subscribe((data: Invoice) => {
      this.invoice = data;
      console.log("Datos recibidos de la API:", data);
    },

      (error) => {
        console.error("Error al obtener la factura:", error);
        console.error("Verifica que el servidor API esté en funcionamiento y accesible.");
      }
    );
  }
}