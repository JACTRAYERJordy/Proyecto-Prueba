import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private selectedHotel: any;

  setSelectedHotel(hotel: any): void {
    this.selectedHotel = hotel;
  }

  getSelectedHotel(): any {
    return this.selectedHotel;
  }
}
