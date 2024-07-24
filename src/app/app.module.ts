import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HotelBookingComponent } from './components/hotel-booking/hotel-booking.component';
import { HomeComponent } from './components/home/home.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faPlusCircle, faEye, faEdit, faTrashAlt, faCog } from '@fortawesome/free-solid-svg-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MantaComponent } from './components/ciudades/manta/manta.component';
import { PuertoLopezComponent } from './components/ciudades/puerto-lopez/puerto-lopez.component';
import { GalapagosComponent } from './components/ciudades/galapagos/galapagos.component';
import { QuitoComponent } from './components/ciudades/quito/quito.component';
import { SalinasComponent } from './components/ciudades/salinas/salinas.component';
import { GuayaquilComponent } from './components/ciudades/guayaquil/guayaquil.component';
import { HotelDetailsComponent } from './components/hotel-details/hotel-details.component';
import { ReservationDateComponent } from './components/ciudades/reservation-date/reservation-date.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HotelBookingComponent,
    HomeComponent,
    MantaComponent,
    PuertoLopezComponent,
    GalapagosComponent,
    QuitoComponent,
    SalinasComponent,
    GuayaquilComponent,
    HotelDetailsComponent,
    ReservationDateComponent
  ],

  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
