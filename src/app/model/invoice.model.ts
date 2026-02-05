import { Company } from "./company.model";
import { Customer } from "./customer.model";
import { InvoiceItem } from "./invoiceItem.model";

//export para usar en otros archivos
export class Invoice {
    //!= para inicializar despues(puede tomar valor null)
    id!: string;
    //any = cualquier tipo de dato
    company!: Company;
    customer!: Customer;
    items!: InvoiceItem[];
}