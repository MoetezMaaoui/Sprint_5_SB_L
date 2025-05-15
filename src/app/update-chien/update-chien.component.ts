import { Component, OnInit } from '@angular/core';
import { Chien } from '../model/chien.model';  // Assurez-vous que le modèle Chien est bien défini
import { ActivatedRoute } from '@angular/router';
import { ChienService } from '../chien.service';  // Utilisation du service ChienService
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Veterinaire } from '../model/veterinaire.model';

@Component({
  selector: 'app-update-chien',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-chien.component.html',
  styles: []
})
export class UpdateChienComponent implements OnInit {
  currentChien = new Chien();  // Modèle Chien

  veterinaires !: Veterinaire[];
  updatedVetId! : number;

  constructor(
    private router :Router,
    private activatedRoute: ActivatedRoute,
    private chienService: ChienService  // Service ChienService
  ) {}

  updateChien()
  { //console.log(this.currentChien);
    this.chienService.updateChien(this.currentChien).subscribe((chi: any) => { 
      this.router.navigate(['chiens']);
    }); 
  }  

  // ngOnInit() {
  //   this.veterinaires = this.chienService.listeVeterinaires();
  //   this.currentChien =this.chienService.consulterChien(this.activatedRoute.snapshot.params['id']);
  //   this.updatedVetId=this.currentChien.veterinaire.idVet;
  // }

  // ngOnInit(): void {

  //   this.chienService.listeVeterinaires().
  //   subscribe(vets => {console.log(vets);
  //     this.veterinaires = vets._embedded.veterinaire;
  //   }
  //   );
  //   this.chienService.consulterChien(this.activatedRoute.snapshot.params['id']).
  //   subscribe( chi =>{ this.currentChien = chi;
  //   this.updatedVetId = this.currentChien.veterinaire.idVet;
  // } ) ;
  // }
  ngOnInit(): void {
    this.chienService.listeVeterinaires()
      .subscribe(vets => {
        console.log(vets);
        this.veterinaires = vets; // ✅ plus besoin de "_embedded"
      });
  
    this.chienService.consulterChien(this.activatedRoute.snapshot.params['id'])
      .subscribe(chi => {
        this.currentChien = chi;
        this.updatedVetId = this.currentChien.veterinaire.idVet;
      });
  }
  

    // // Charger la liste des vétérinaires
    // this.chienService.listeVeterinaires()
    //   .subscribe((vets: Veterinaire[]) => {
    //     this.veterinaires = vets;
    //     console.log("Vétérinaires chargés :", vets);
    //   });
  
    // // Charger les infos du chien à modifier
    // this.chienService.consulterChien(this.activatedRoute.snapshot.params['id'])
    //   .subscribe((chi: Chien) => {
    //     this.currentChien = chi;
    //     this.updatedVetId = chi.veterinaire.idVet;
    //   });
  
  
  
}
