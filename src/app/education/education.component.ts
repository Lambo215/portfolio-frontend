import { Component, Input, OnInit } from '@angular/core';
import { Education } from '../model/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  @Input() educationList!: Array<Education>;
  constructor() {}

  ngOnInit(): void {}
}
