import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {
  hotel: any;
  currentImage: string = '';

  hotelServices = [
    { icon: 'icon-fitness-center', text: 'Centro de fitness 24 horas con equipo de cardio y pesas.' },
    { icon: 'icon-valet-parking', text: 'Valet parking $80/noche.' },
    { icon: 'icon-self-parking', text: 'Autoestacionamiento $52/noche.' },
    { icon: 'icon-rooms', text: '222 habitaciones.' },
    { icon: 'icon-elevator', text: 'Ascensor.' },
    { icon: 'icon-rooftop', text: 'Terraza.' },
    { icon: 'icon-bikes', text: 'Bicicletas de la casa.' }
  ];

  roomServices = [
    { icon: 'icon-air-conditioning', text: 'Aire acondicionado.' },
    { icon: 'icon-pets', text: 'Mascotas OK, tarifa fija de $150.' },
    { icon: 'icon-room-size', text: 'Habitación de aproximadamente 275 sq ft.' },
    { icon: 'icon-tv', text: 'Televisor de pantalla plana de 42".' },
    { icon: 'icon-minibar', text: 'Minibar.' },
    { icon: 'icon-hair-dryer', text: 'Secador de pelo.' },
    { icon: 'icon-iron', text: 'Plancha.' },
    { icon: 'icon-laptop', text: 'Espacio de trabajo amigable con laptops.' },
    { icon: 'icon-safe', text: 'Caja fuerte.' },
    { icon: 'icon-crib', text: 'Cuna.' },
    { icon: 'icon-extinguisher', text: 'Extintor de incendios.' },
    { icon: 'icon-smoke-detector', text: 'Detector de humo.' }
  ];

  foodServices = [
    { icon: 'icon-restaurant', text: 'Print - Grab & Go Food Items sirve cocina americana, platos principales $15-40.' },
    { icon: 'icon-breakfast', text: 'Desayuno continental disponible con costo adicional.' },
    { icon: 'icon-room-service', text: 'Servicio de habitaciones disponible.' }
  ];

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.hotel = navigation?.extras?.state?.['hotel'] || null;
    if (this.hotel && this.hotel.images && this.hotel.images.length > 0) {
      this.currentImage = this.hotel.images[0];
    }
  }

  ngOnInit(): void {
    // Puedes agregar lógica adicional aquí si es necesario
  }

  closeModal(): void {
    this.router.navigate(['/manta']);
  }

  onBackdropClick(event: Event): void {
    this.closeModal();
  }

  makeReservation(): void {
    this.router.navigate(['/reservation-date']);
  }

  changeImage(image: string): void {
    this.currentImage = image;
  }

  closePaymentModal(): void {
    this.hotel.isPaymentModalOpen = false; // Cerrar el modal de pago
  }
}
