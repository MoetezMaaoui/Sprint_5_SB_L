import { Component } from '@angular/core';
import { ChienService } from '../chien.service';
import { Veterinaire } from '../model/veterinaire.model';
import { UpdateVeterinairesComponent } from '../update-veterinaires/update-veterinaires.component';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-liste-veterinaires',
  standalone: true,
  imports: [CommonModule,UpdateVeterinairesComponent],
  templateUrl: './liste-veterinaires.component.html',
  styles: ``
})
export class ListeVeterinairesComponent {

  veterinaires: Veterinaire[] = [];
  updatedVet: Veterinaire = {} as Veterinaire;
  ajout: boolean = true;

  constructor(private chienService : ChienService) { }

ngOnInit(): void {
this.chienService.listeVeterinaires().
subscribe(vets => {this.veterinaires = vets;
console.log(vets);
});
}

// getVeterinaires(): void {
//   this.chienService.getVeterinaires().subscribe((vets: any) => {
//     this.veterinaires = vets;
//   });
// }

chargerVeterinaires(){
this.chienService.listeVeterinaires().
subscribe(vets => {this.veterinaires = vets;
console.log(vets);
});
}

veterinaireUpdated(vet:Veterinaire){
  console.log("Cat updated event",vet);
  this.chienService.ajouterVeterinaire(vet).
   subscribe( ()=> this.chargerVeterinaires());
  }

  updateVet(vet:Veterinaire) {
    this.updatedVet=vet;
    this.ajout=false; 
  }

  trackById(index: number, vet: Veterinaire): number {
    return vet.idVet;
  }
  
  
}




