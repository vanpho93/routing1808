import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  contacts = [
    { id: 1, name: 'Ti', phoneNumber: '09876543355' },
    { id: 2, name: 'Teo', phoneNumber: '0964567876' },
    { id: 3, name: 'Tun', phoneNumber: '02345675876' },
  ];
}
