import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent {
  @Input() hotel: any;
  @Output() close = new EventEmitter<void>();

  currentImage: string;

  constructor(private router: Router) {
    this.currentImage = this.hotel?.images[0] || '';
  }

  closeModal(): void {
    this.close.emit();
  }

  onBackdropClick(event: Event): void {
    this.closeModal();
  }

  makeReservation() {
    this.router.navigate(['/reservation-date'], { state: {
      image: this.currentImage,
      name: this.hotel.name
    } });
  }

  changeImage(image: string): void {
    this.currentImage = image;
  }
}
