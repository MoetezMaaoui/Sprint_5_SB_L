import { Component,Input ,Output,EventEmitter } from '@angular/core';
import { Veterinaire } from '../model/veterinaire.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-veterinaires',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './update-veterinaires.component.html',
  styles: ``
})
export class UpdateVeterinairesComponent {
  @Input()
  veterinaire! : Veterinaire;

  @Input()
  ajout!:boolean;
  
  @Output() 
  veterinaireUpdate = new EventEmitter<Veterinaire>();

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateVeterinaire ",this.veterinaire);
    }

    saveVeterinaire(){
      this.veterinaireUpdate.emit(this.veterinaire);
    }
    
      
}
