import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()

export class ContactService {
    constructor(private http: Http) {}

    getAll(): Promise<Contact[]> {
        return this.http.get('http://localhost:3000/api/contacts')
        .toPromise()
        .then(res => res.json());
    }

    getContactById(id: number): Promise<Contact> {
        return this.http.get('http://localhost:3000/api/contact/' + id)
        .toPromise()
        .then(res => res.json());
    }
}

interface Contact {
    name: string;
    id: number;
    phoneNumber: string;
}
