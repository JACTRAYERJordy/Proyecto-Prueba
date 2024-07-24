import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Asegúrate de importar el Router desde @angular/router


@Component({
  selector: 'app-galapagos',
  templateUrl: './galapagos.component.html',
  styleUrl: './galapagos.component.css'
})
export class GalapagosComponent {
    cities = [
      {
        name: 'Galapagos',
        hotels: [
          {
            name: 'Finch Bay Galapagos Hotel',
            image: 'https://static.finchbayhotel.com/wp-content/uploads/2019/12/finch-bay-galapagos-hotel-pool-exterior.jpg',
            badge: 'Eco-Friendly Luxury',
            address: 'Barrio Punta Estrada, Puerto Ayora, Santa Cruz Island, Galápagos',
            rating: 9.5,
            price: '$450',
            description: 'Finch Bay offers an eco-friendly experience with luxurious accommodations and unique wildlife encounters.',
            whyVisit: 'Immerse yourself in the natural beauty of the Galapagos with sustainable luxury and exclusive excursions.',
            images: [
              'https://static.finchbayhotel.com/wp-content/uploads/2018/01/suite_00.jpg',
              'https://cf.bstatic.com/xdata/images/hotel/max1024x768/243385542.jpg?k=7ba5906130312cdd57a48fd21d3f2b37b274f46ddc1e4b0865388fe77d9086ba&o=&hp=1',
              'https://www.metropolitan-touring.com/wp-content/uploads/2023/05/finch-bay-room.webp',
              'https://media-cdn.tripadvisor.com/media/photo-s/0b/19/0f/4b/fbh-restaurant-bar-lounge.jpg',
              'https://cf.bstatic.com/xdata/images/hotel/max1024x768/243396995.jpg?k=c24fe97b84c0ffa9274c5e4ad3e8fbb5b63a9d0846ce4bdf5727a6598ef4b3e9&o=&hp=1',
            ]
          },
          {
            name: 'Hotel Indigo',
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/fb/c1/c9/hotel-indigo-galapagos.jpg?w=700&h=-1&s=1',
            badge: 'Boutique Charm',
            address: 'Puerto Villamil, Isla Isabela, Galápagos',
            rating: 9.0,
            price: '$350',
            description: 'Hotel Indigo provides a boutique experience with personalized service and breathtaking ocean views.',
            whyVisit: 'Explore Isla Isabela in style and comfort, with easy access to Galapagos wildlife and natural wonders.',
            images: [
              'https://cf.bstatic.com/xdata/images/hotel/max1024x768/377811933.jpg?k=afee22a25c7fb1cd0d2410726e227be3dd39923b1801a5edbaef8172e4a57ac1&o=&hp=1',
              'https://cf.bstatic.com/xdata/images/hotel/max1024x768/413652566.jpg?k=5aafb0d34310fbe2aee5f94e5ef322ccbfe4c15bf8a00c015ee43db2fac4468f&o=&hp=1',
              'https://cf.bstatic.com/xdata/images/hotel/max1024x768/399343515.jpg?k=0cbfe5c431271f3704e699ea52c96c02ea95f278c79ae83c643ef8474bd3a096&o=&hp=1',
              'https://a.mktgcdn.com/p/8A-gC83BnIErh_NGUEC2vZvFMC3ZX-kAaYcNY5yGGuU/2048x1152.jpg',
              'https://digital.ihg.com/is/image/ihg/hotel-indigo-puerto-baquerizo-moreno-7603577997-3x2',
            ]
          },
          {
            name: 'Albemarle Hotel',
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/44/13/96/hotel-albemarle.jpg?w=700&h=-1&s=1',
            badge: 'Beachfront Paradise',
            address: 'Puerto Villamil, Isla Isabela, Galápagos',
            rating: 8.7,
            price: '$300',
            description: 'The Albemarle Hotel offers a beachfront paradise with stunning ocean views and personalized service.',
            whyVisit: 'Enjoy a tranquil escape with direct access to the beach and explore the unique wildlife of the Galapagos.',
            images: [
              'https://cf.bstatic.com/xdata/images/hotel/max1024x768/582709508.jpg?k=601c35fe0ae20e3515adaac1214ed7e1a345f9470cf2cfc2e35401634a717ab5&o=&hp=1',
              'https://images.trvl-media.com/lodging/1000000/20000/13200/13159/e890b63a.jpg?impolicy=resizecrop&rw=598&ra=fit',
              'https://cf.bstatic.com/xdata/images/hotel/max1024x768/60982962.jpg?k=6f9b455878915834b84fa49052f7c2d6fa873ab67456577d201fb3a30e8ed34c&o=&hp=1',
              'https://www.hotelalbemarle.com/images/img-servicios02.jpg',
              'https://cdn.adventure-life.com/42/80/50/pool-area/663x400.webp',
            ]
          }
        ]
      }
    ];
    selectedHotel: any = null;

  constructor(private router: Router) {}

  makeReservation(): void {
    this.router.navigate(['/reservation-date']);
  }

  openHotelDetails(hotel: any): void {
    this.selectedHotel = hotel; // Establecer el hotel seleccionado
    this.router.navigate(['/hotel-details'], { state: { hotel: this.selectedHotel } });
  }
}

