import { Component, OnInit } from '@angular/core';
import { Chien } from '../model/chien.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ChienService } from '../chien.service';

@Component({
  selector: 'app-recherche-par-chien',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './recherche-par-chien.component.html',
  styles: ``
})
export class RechercheParChienComponent {

}
