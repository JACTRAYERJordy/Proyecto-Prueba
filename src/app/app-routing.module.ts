import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HotelBookingComponent } from './components/hotel-booking/hotel-booking.component';
import { HomeComponent } from './components/home/home.component';
import { BookingComponent } from './components/booking/booking.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'hotel-booking/:email', component: HotelBookingComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'booking/:location', component: BookingComponent },
  { path: 'list', component: ListComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Ruta de redirección predeterminada
  { path: '**', redirectTo: 'login', pathMatch: 'full' } // Ruta de comodín para redirigir a login en caso de ruta no encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
