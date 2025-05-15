import { Veterinaire } from "./veterinaire.model";

export class Chien {
    id? : number;
    nom? : string;
    race? : string;
    age? : number ;
    veterinaire !: Veterinaire
    }