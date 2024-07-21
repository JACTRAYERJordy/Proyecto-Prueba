import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent {
  @Input() hotel: any;
  @Output() closeEvent = new EventEmitter<void>();

  closeModal() {
    this.closeEvent.emit();
  }

  onBackdropClick(event: Event) {
    this.closeModal();
  }

  updateHotelInfo(newInfo: any) {
    Object.assign(this.hotel, newInfo);
  }

  makeReservation() {
    alert('Tu reserva ha sido realizada con éxito');
  }
}
