import { Invoice } from "../model/invoice.model";

export const invoiceData: Invoice = {
    id: 'INV-001',
    company: {
        ruc: '1234567890',
        name: 'Tech Solutions Ltd.',
        address: {
            city: 'Tech City',
            principalStreet: '123 Tech Avenue',
            secondaryStreet: 'Suite 456',
            code: '98765',
        },
    },
    customer: {
        id: 'CUST-001',
        name: 'John Doe',
        surname: 'Smith',
        address: {
            city: 'Customer City',
            principalStreet: '789 Customer Road',
            secondaryStreet: 'Apt 101',
            code: '54321',
        },
    },
    items: [
        {
            id: 100,
            product: {
                id: 90,
                name: 'Laptop',
                price: 1200.00,
                description: 'High-performance laptop',
                category: {
                    id: 1,
                    name: 'Electronics',
                },
            },
            quantity: 2,
        },
        {
            id: 101,
            product: {
                id: 92,
                name: 'Smartphone',
                price: 800.00,
                description: 'Latest model smartphone',
                category: {
                    id: 1,
                    name: 'Electronics',
                },
            },
            quantity: 3,
        },
    ],


}