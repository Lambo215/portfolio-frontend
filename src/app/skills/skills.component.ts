import { Component, Input, OnInit } from '@angular/core';
import { Skills } from '../model/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  @Input() skillsList!: Array<Skills>;
  constructor() {}

  ngOnInit(): void {}
}
