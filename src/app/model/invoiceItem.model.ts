import { Product } from "./product.model";

export class InvoiceItem {
    id!: number;
    product!: Product;
    quantity!: number;
}