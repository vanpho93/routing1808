import { Component } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})

export class ContactsComponent {
  contacts = [];
  constructor(private contactService: ContactService) {
    this.contactService.getAll()
    .then(contacts => this.contacts = contacts)
    .catch(err => console.log(err.message));
  }
}
