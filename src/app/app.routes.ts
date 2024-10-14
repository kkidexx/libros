import { Routes } from '@angular/router';
import { PrivadoComponent } from './pages/privado/privado.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { privadoGuard } from './guards/privado.guard';
import { DetallelibrosComponent } from './pages/detallelibros/detallelibros.component';
import { EditarComponent } from './pages/editar/editar.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { LibrosComponent } from './pages/libros/libros.component';

export const routes: Routes = [

  { path: 'libros/:idLibro', component: DetallelibrosComponent},
  { path: 'editar/:idLibro', component: EditarComponent},
  { path: 'gestion', component: GestionComponent},
  { path: 'libros', component: LibrosComponent},

  { path: 'privado', component: PrivadoComponent, canActivate:[privadoGuard]},
  { path: 'login', component: LoginComponent, },
  { path: 'registro', component: RegistroComponent, }
];
