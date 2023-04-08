import { Component, Input, OnInit } from '@angular/core';
import { Education } from '../model/education';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  @Input() educationList!: Array<Education>;
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}
