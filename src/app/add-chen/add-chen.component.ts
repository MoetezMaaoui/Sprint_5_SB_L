import { Component , OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { ChienService } from '../chien.service';
import { Chien } from '../model/chien.model';
import { Veterinaire } from "../model/veterinaire.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-chen',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './add-chen.component.html',
  styleUrl: './add-chen.component.css'
})

export class AddChenComponent implements OnInit {
  newChien = new Chien();

  veterinaires!:Veterinaire[];

  newIdVet!:number;
  newVeterinaire! : Veterinaire;
  
  constructor(private chienService: ChienService , private router :Router) { }

  addChien(){

    this.newChien.veterinaire = this.veterinaires.find(cat => cat.idVet == this.newIdVet)!; 
    this.chienService.ajouterChien(this.newChien) 
                      .subscribe((chi: any) => { 
                      console.log(chi); 
                      this.router.navigate(['chiens']); 
                      });
    // this.newVeterinaire = this.chienService.consulterVeterinaire(this.newIdVet);
    // this.newChien.veterinaire = this.newVeterinaire;
    // this.chienService.ajouterChien(this.newChien);
    // this.router.navigate(['chiens']);
  }

  // ngOnInit() {
  //   // Récupérer la liste des vétérinaires depuis l'API
  //   this.chienService.listeVeterinaires().subscribe((vets: any) => {
  //     // Accéder à la liste des vétérinaires sous _embedded.veterinaire (au singulier)
  //     console.log(vets);
  //     this.veterinaires = vets._embedded.veterinaire;  
  //   });
  // }

  ngOnInit() {
    this.chienService.listeVeterinaires().subscribe((vets: Veterinaire[]) => {
      this.veterinaires = vets;
    });
  }
  
  
  
}
