import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { LoginComponent}  from '../app/login/login.component';
import { InicioComponent } from '../app/inicio/inicio.component';
import { ListCreatorComponent } from '../app/list-creator/list-creator.component';
import { ListComponent } from '../app/list/list.component';

// Services
import { AuthGuardService } from '../app/services/auth.guard.service';  

const routes: Routes = [
  { path: '', component: InicioComponent, pathMatch: 'full', canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'lists/:id', component: ListComponent},
  { path: 'taks', component: ListCreatorComponent , canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
