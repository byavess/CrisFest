import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { Home } from './home/home';
import { DetalhesVeiculos } from './detalhes-veiculos/detalhes-veiculos';



// Guards
import { AuthGuard } from './guards/auth-guard';



const routes: Routes = [
  // Rota padrão - Home
  {
    path: '',
    component: Home
  },

  // Rota de detalhes do veículo
  {
    path: 'details/:id',
    component: DetalhesVeiculos
  },

  // Rota de login
 

  // Rotas administrativas (protegidas por guard)
 

  // Rota curinga - redireciona para home
  {
    path: '**',
    redirectTo: ''
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
