import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { AuthGuard } from './guards/auth.guard';
import { MascotaComponent } from './pages/mascota/mascota.component';
import { CrearMascotaComponent } from './pages/crear-mascota/crear-mascota.component';
import { PropietarioComponent } from './pages/propietario/propietario.component';
import { CrearPropietarioComponent } from './pages/crear-propietario/crear-propietario.component';
import { AnimalPropietarioComponent } from './pages/animal-propietario/animal-propietario.component';

export const ROUTES: Routes = [
  { path: 'login', component: LoginComponent },  // No protegido, acceso sin autenticación
  { path: 'logout', component: LogoutComponent},   // Ruta no protegida

  { path: 'mascota', component: MascotaComponent, canActivate: [AuthGuard] },  // Ruta protegida
  { path: 'mascota/crear-mascota', component: CrearMascotaComponent, canActivate: [AuthGuard] },  // Ruta protegida

  { path: 'propietario', component: PropietarioComponent, canActivate: [AuthGuard] },  // Ruta protegida
  { path: 'propietario/crear-propietario', component: CrearPropietarioComponent, canActivate: [AuthGuard] },  // Ruta protegida
  { path: 'animal/animal-propietario/:ani_id', component: AnimalPropietarioComponent, canActivate: [AuthGuard] },  // Ruta protegida

  { path: '', pathMatch: 'full', redirectTo: 'login' },  // Redirige a login si no se encuentra la ruta
  { path: '**', pathMatch: 'full', redirectTo: 'login' },  // Redirige a login si la ruta no coincide
];
