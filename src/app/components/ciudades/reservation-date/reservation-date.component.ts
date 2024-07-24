import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-date',
  templateUrl: './reservation-date.component.html',
  styleUrls: ['./reservation-date.component.css']
})
export class ReservationDateComponent implements OnInit {
  checkInDate: string | null = null;
  checkOutDate: string | null = null;
  hotelImages: string[] = [];
  hotelName: string | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.hotelImages = navigation.extras.state['images'] || [];
      this.hotelName = navigation.extras.state['name'] || null;
    }
  }

  makeReservation() {
    if (this.checkInDate && this.checkOutDate) {
      console.log('Reserva realizada:', this.checkInDate, this.checkOutDate);
      this.router.navigate(['/reservation']);
    } else {
      console.error('Por favor, selecciona las fechas de check-in y check-out.');
    }
  }
}
