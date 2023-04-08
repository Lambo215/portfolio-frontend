import { Component, Input, OnInit } from '@angular/core';
import { Proyect } from '../model/proyect';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css'],
})
export class ProyectsComponent implements OnInit {
  @Input() proyectsList!: Array<Proyect>;
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}
