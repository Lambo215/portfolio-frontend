import { Component, Input, OnInit } from '@angular/core';
import { Proyect } from '../model/proyect';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css'],
})
export class ProyectsComponent implements OnInit {
  @Input() proyectsList!: Array<Proyect>;
  constructor() {}

  ngOnInit(): void {}
}
