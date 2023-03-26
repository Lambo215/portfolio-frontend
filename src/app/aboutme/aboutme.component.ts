import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../model/person';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css'],
})
export class AboutmeComponent implements OnInit {
  @Input() person!: Person;
  constructor() {}

  ngOnInit(): void {}
}
