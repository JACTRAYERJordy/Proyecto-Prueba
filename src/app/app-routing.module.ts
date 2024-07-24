import { CommonEngine } from '@angular/ssr';
import { NgModule, Component } from '@angular/core'; // Importa el decorador NgModule para definir un módulo de Angular
import { RouterModule, Routes } from '@angular/router'; // Importa RouterModule para manejar el enrutamiento y Routes para definir rutas
import { LoginComponent } from './components/login/login.component'; // Importa el componente LoginComponent
import { RegisterComponent } from './components/register/register.component'; // Importa el componente RegisterComponent
import { HotelBookingComponent } from './components/hotel-booking/hotel-booking.component'; // Importa el componente HotelBookingComponent
import { HomeComponent } from './components/home/home.component'; // Importa el componente HomeComponent
import { ListComponent } from './components/list/list.component'; // Importa el componente ListComponent
import { MantaComponent } from './components/ciudades/manta/manta.component';
import { HotelDetailsComponent } from './components/hotel-details/hotel-details.component';
import { ReservationDateComponent } from './components/ciudades/reservation-date/reservation-date.component';
import { GalapagosComponent } from './components/ciudades/galapagos/galapagos.component';
import { GuayaquilComponent } from './components/ciudades/guayaquil/guayaquil.component';
import { PuertoLopezComponent } from './components/ciudades/puerto-lopez/puerto-lopez.component';
import { QuitoComponent } from './components/ciudades/quito/quito.component';
import { SalinasComponent } from './components/ciudades/salinas/salinas.component';


// Define las rutas de la aplicación
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'hotel-booking/:email', component: HotelBookingComponent }, // Ruta con parámetro dinámico
  { path: 'list', component: ListComponent },
  { path: 'manta', component: MantaComponent },
  { path: 'galapagos', component: GalapagosComponent},
  { path: 'guayaquil', component: GuayaquilComponent},
  { path: 'puerto-lopez', component: PuertoLopezComponent},
  { path: 'quito', component: QuitoComponent},
  { path: 'salinas', component: SalinasComponent},
  { path: 'hotel-details', component: HotelDetailsComponent },
  { path: 'reservation-date', component: ReservationDateComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Ruta por defecto redirige a 'login'
  { path: '**', redirectTo: 'login', pathMatch: 'full' }, // Ruta comodín redirige a 'login' para cualquier ruta no encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configura el enrutamiento para la aplicación y lo importa
  exports: [RouterModule] // Exporta RouterModule para que esté disponible en toda la aplicación
})
export class AppRoutingModule { } // Define el módulo de enrutamiento de la aplicación
