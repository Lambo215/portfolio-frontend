import { Component, Input, OnInit } from '@angular/core';
import { Experience } from '../model/experience';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  @Input() laboralExperienceList!: Array<Experience>;
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}
