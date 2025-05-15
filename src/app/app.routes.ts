import { Routes } from '@angular/router';
import { AddChenComponent } from './add-chen/add-chen.component';
import { chienGuard } from './chien.guard';
import { ChiensComponent } from './chiens/chiens.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ListeVeterinairesComponent } from './liste-veterinaires/liste-veterinaires.component';
import { LoginComponent } from './login/login.component';
import { RechercheParChienComponent } from './recherche-par-chien/recherche-par-chien.component';
import { UpdateChienComponent } from './update-chien/update-chien.component';

export const routes: Routes = [
    {path: "chiens", component : ChiensComponent},
    {path: "add-chien", component : AddChenComponent, canActivate:[chienGuard]},
    {path: "", redirectTo: "chiens", pathMatch: "full"},
    {path: "updateChien/:id", component: UpdateChienComponent},
    { path: "rechercheParChien", component: RechercheParChienComponent },
    {path: "listeVeterinaires", component : ListeVeterinairesComponent},
    {path: 'login', component: LoginComponent},
    {path: 'app-forbidden', component: ForbiddenComponent},

];
