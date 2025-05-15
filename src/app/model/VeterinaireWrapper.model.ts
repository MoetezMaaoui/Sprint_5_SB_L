import { Veterinaire } from "./veterinaire.model";

export class VeterinaireWrapper {
  _embedded!: { veterinaire: Veterinaire[] };
}
