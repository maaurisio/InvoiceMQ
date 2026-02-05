import { Address } from "./address.model";

export class Customer {
    id!: string;
    name!: string;
    surname!: string;
    address!: Address;
}