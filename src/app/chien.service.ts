import { Injectable } from '@angular/core';
import { Chien } from './model/chien.model';
import { Veterinaire } from "./model/veterinaire.model";
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VeterinaireWrapper } from './model/VeterinaireWrapper.model';


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})


export class ChienService {
  apiURL: string = 'http://localhost:8083/chiens/api';
  apiURLVet: string = 'http://localhost:8083/chiens/api/vet';

  chiens !: Chien[];
  veterinaires !: Veterinaire[];
  constructor(private http : HttpClient) { 
    // this.veterinaires = [
    //   { idVet: 1, nomVet: "Dr. Ahmed", specialite: "Dermatologie" },
    //   { idVet: 2, nomVet: "Dr. Sonia", specialite: "Chirurgie" },
    //   { idVet: 3, nomVet: "Dr. Khaled", specialite: "Généraliste" }
    // ];
    // this.chiens = [
    //   { id: 1, nom: "Rex", race: "Labrador", age: 5, veterinaire: { idVet: 1, nomVet: "Dr. Ahmed", specialite: "Dermatologie" } },
    //   { id: 2, nom: "Bella", race: "Bulldog", age: 3, veterinaire: { idVet: 2, nomVet: "Dr. Sonia", specialite: "Chirurgie" } },
    //   { id: 3, nom: "Max", race: "Golden Retriever", age: 4, veterinaire: { idVet: 3, nomVet: "Dr. Khaled", specialite: "Généraliste" } }
    // ];
  }
  // Méthode pour obtenir la liste des chiens
  listeChiens():Observable<Chien[]>{
    return this.http.get<Chien[]>(this.apiURL);
  }

  // Méthode pour ajouter un chien
  ajouterChien(c: Chien): Observable<Chien>{
    return this.http.post<Chien>(this.apiURL, c, httpOptions);
  }

  supprimerChien (id : number) { 
    const url = `${this.apiURL}/${id}`; 
    return this.http.delete(url, httpOptions); 
    
     //supprimer le chien c du tableau chiens
    // const index = this.chiens.indexOf(c, 0);
    // if (index > -1) {
    // this.chiens.splice(index, 1);
    // }
    //ou Bien
    /* this.produits.forEach((cur, index) => {
    if(prod.idProduit === cur.idProduit) {
    this.produits.splice(index, 1);
    }
    }); */
    }

    chien!: Chien;
    consulterChien(id: number): Observable<Chien> { 
      const url = `${this.apiURL}/${id}`; 
      return this.http.get<Chien>(url); 
      }

      updateChien(chien: Chien) {
        return this.http.put<Chien>(this.apiURL, chien, httpOptions); 
      }
    
      // listeVeterinaires(): Observable<VeterinaireWrapper> {
      //   return this.http.get<VeterinaireWrapper>(this.apiURLVet);
      // }
      listeVeterinaires(): Observable<Veterinaire[]> {
        return this.http.get<Veterinaire[]>(this.apiURLVet);
      }
      
        
      consulterVeterinaire(id:number): Veterinaire{
        return this.veterinaires.find(vet => vet.idVet == id)!;
      }

      rechercherParVeterinaire(idVet: number): Observable<Chien[]> {
        const url = `${this.apiURL}/chiensVet/${idVet}`;
        return this.http.get<Chien[]>(url);
      }
      
      ajouterVeterinaire( vet: Veterinaire):Observable<Veterinaire>{
        return this.http.post<Veterinaire>(this.apiURLVet, vet, httpOptions);
        }

}

