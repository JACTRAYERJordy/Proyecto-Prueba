import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Asegúrate de importar el Router desde @angular/router


@Component({
  selector: 'app-salinas',
  templateUrl: './salinas.component.html',
  styleUrl: './salinas.component.css'
})
export class SalinasComponent {
  cities = [
    {
      name: 'Salinas',
      hotels: [
        {
          name: 'Hotel Casablanca Salinas',
          image: 'https://content.skyscnr.com/available/1529952906/1529952906_WxH.jpg',
          badge: '#1 en popularidad',
          address: 'Se encuentra ubicado en la Avenida Malecon de Salinas',
          rating: 8.4,
          price: '$54',
          description: 'Un hotel popular frente a la playa con excelentes servicios y comodidades.',
          whyVisit: 'Relájese y disfrute de las impresionantes vistas del océano desde este hotel frente a la playa.',
          images: [
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/43378417.jpg?k=ac9463218c00d23343b315f6fbe7b9b6c4d850cc0167d56dd3e278894e78e077&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/118813837.jpg?k=096d13bb8d9646251a364acefb3a0ab434b5f023e58a67296967392eab1f34da&o=&hp=1',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo4xDVpJqS5aSl2mm4Da9C5jIE_z2K1XFm_A&s',
            'https://content.r9cdn.net/himg/1f/5a/75/expediav2-703925-4097005185-987853.jpg',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/43378417.jpg?k=ac9463218c00d23343b315f6fbe7b9b6c4d850cc0167d56dd3e278894e78e077&o=&hp=1',
          ]
        },
        {
          name: 'Blue Bay Hotel',
          image: 'https://www.bluebayresorts.com/images/ofertas/early-booking/ofertas/2687_3-900.jpg',
          badge: '#2 en popularidad',
          address: 'Avenida 9 de Octubre y calle 10',
          rating: 8.2,
          price: '$60',
          description: 'Este hotel ofrece una experiencia de lujo con todas las comodidades modernas.',
          whyVisit: 'Experimente el lujo y la comodidad en este popular hotel de Salinas.',
          images: [
            'https://www.bluebayresorts.com/mailings/Press_Center_BlueBay/images/thumbs/big/BB_Beach_Club.jpg',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/275408427.jpg?k=e3ca4a0ced0833e366301f88cef87dd0b36921d2555160694720afa9540e9cbb&o=&hp=1',
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/8d/32/33/blue-bay-resort-hotel.jpg?w=700&h=-1&s=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/210193338.jpg?k=4ae5d4b0152ee8021c44abfe9d114a5b11b02b073bd6b005195aeda9b95cc614&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/63247476.jpg?k=f6eb1b8291b88ead041ffb945702c1af2d45d02b7de5ede8f939e443409fa87f&o=&hp=1',
          ]
        },
        {
          name: 'Chescos Hostel & Hotel',
          image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/cf/25/4c/chescos-hostel-hotel.jpg?w=700&h=-1&s=1',
          badge: 'La mejor relación calidad-precio',
          address: 'General Enrique Gallo y calle General Ulpiano Paez',
          rating: 8.6,
          price: '$40',
          description: 'Un hostal y hotel asequible con un ambiente amigable y acogedor.',
          whyVisit: 'Disfrute de una estancia acogedora y asequible en este popular hostal.',
          images: [
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/308003273.jpg?k=76402a973770a29886633c3276333d9a67bd4149bbb1a91d6fe37f9ffeb875e5&o=&hp=1',
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/cf/26/4c/chescos-hostel-hotel.jpg?w=700&h=-1&s=1',
            'https://i.pinimg.com/736x/1a/67/b9/1a67b91fabe2c2b0487f5d36a110296e.jpg',
            'https://i.pinimg.com/736x/c1/49/89/c149892e19ce0f44d7db0f16f25a7129.jpg',
            'https://limg.hostelsclub.com/pics/31607/031607-1537749951.jpg',
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
