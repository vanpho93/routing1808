import { Injectable } from '@angular/core';

const contacts: Contact[] = [
    { id: 1, name: 'Ti', phoneNumber: '09876543355' },
    { id: 2, name: 'Teo', phoneNumber: '0964567876' },
    { id: 3, name: 'Tun', phoneNumber: '02345675876' },
];

@Injectable()

export class ContactService {
    getAll(): Promise<Contact[]> {
        return Promise.resolve(contacts);
    }

    getContactById(id: number): Promise<Contact> {
        const contact = contacts.find(e => e.id === id);
        return Promise.resolve(contact);
    }
}

interface Contact {
    name: string;
    id: number;
    phoneNumber: string;
}
