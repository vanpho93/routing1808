import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ContactService } from '../contact.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ContactService]
})
export class DetailComponent implements OnInit {
  contact = null;
  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService
  ) { }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.contactService.getContactById(id)
      .then(contact => this.contact = contact);
    });
  }
}
