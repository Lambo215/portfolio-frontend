import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Person } from '../model/person';
import { PersonService } from '../model/person.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  person: Person | undefined;

  constructor(public personService: PersonService) {}

  ngOnInit(): void {
    this.personService
      .getPerson()
      .subscribe((person) => (this.person = person));
  }
}
