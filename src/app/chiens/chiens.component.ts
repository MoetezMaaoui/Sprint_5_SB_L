import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chien } from '../model/chien.model';
import { ChienService } from '../chien.service';
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-chiens',
  standalone: true,
  imports: [CommonModule ,RouterLink],
  templateUrl: './chiens.component.html',
  styleUrls: ['./chiens.component.css']  // <-- corrigé ici
})
export class ChiensComponent implements OnInit {
  chiens !: Chien[];

  constructor(private chienService: ChienService, public authService: AuthService) {
    //this.chiens = chienService.listeChiens();
  }

  supprimerChien(c: Chien) {
    // Vérifier si c.id est défini
    if (c.id !== undefined) {
      let conf = confirm("Etes-vous sûr ?");
      if (conf) {
        this.chienService.supprimerChien(c.id).subscribe(() => {
          console.log("Chien supprimé");
          this.chargerChiens();  // Recharger la liste des chiens après suppression
        });
      }
    } else {
      console.error("ID du chien est indéfini !");
    }
  }
  
  

  ngOnInit(): void {
    this.chargerChiens();
  }

  chargerChiens(){
    this.chienService.listeChiens().subscribe((chi: Chien[]) => {
      console.log(chi);
      this.chiens = chi;
    }); 
  }

}
