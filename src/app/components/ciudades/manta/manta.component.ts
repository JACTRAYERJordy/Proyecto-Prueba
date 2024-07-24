import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Asegúrate de importar el Router desde @angular/router

@Component({
  selector: 'app-manta',
  templateUrl: './manta.component.html',
  styleUrls: ['./manta.component.css'] // Corregido a 'styleUrls' en lugar de 'styleUrl'
})
export class MantaComponent {
  cities = [
    {
      name: 'Manta',
      hotels: [
        {
          name: 'Hostal Vistalmar',
          image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/100459326.jpg?k=6013850f2237a673d7ebb55396a905cac60edd7b5b37ba558e9ce30b1676c654&o=&hp=1',
          badge: 'La mejor relación calidad-precio',
          address: 'Ubicado, a 600 metros de la playa Murciélago',
          rating: 8.6,
          price: '$85',
          description: 'Este hotel ofrece una excelente vista al mar y está a pocos pasos de la playa.',
          whyVisit: 'Disfrute de una vista impresionante del océano y una proximidad inmejorable a la playa.',
          images: [
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/217231420.jpg?k=8c37cd06f661b5f570a8bd72977e86f60c34e461f8f0a7d006a9d099e7262b11&o=&hp=1',
            'https://vistalmar.ruta-del-sol-mejor-hoteles.com/data/Images/OriginalPhoto/8867/886781/886781353/image-manta-hotel-vistalmar-13.JPEG',
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/0e/d9/20/habitacion-matrimonial.jpg?w=700&h=-1&s=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/217233370.jpg?k=47d4965145d26e8f9143a7e583aabbf61cdcf31cf5625d9dc69e5ec88b0ba94f&o=&hp=1',
            'https://vistalmar.ruta-del-sol-mejor-hoteles.com/data/Images/OriginalPhoto/6471/647161/647161671/image-manta-hotel-vistalmar-60.JPEG',
          ]
        },
        {
          name: 'Hotel Poseidon',
          image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/116355357.jpg?k=d9e9e8dd2830927208258f08458142b8f313f8fa6aee9b692259d7ed994efad8&o=&hp=1',
          badge: '#1 en popularidad',
          address: 'Se encuentra ubicado en el Km 1. a Avenida 5',
          rating: 9.2,
          price: '$139',
          description: 'Un hotel popular conocido por su excelente servicio y comodidades modernas.',
          whyVisit: 'Experimente el lujo y el confort en el hotel más popular de la zona.',
          images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK7qB12G5Xd_tYzM0t-_ZPOkwInOgPMfB4NQ&s',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/509226698.jpg?k=043bea1ff0d9343fa37c6ff0f91b90405d4cdec70212b6615da1da284f9ffc0d&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/54378854.jpg?k=4084ee7cdeb97629fd2735907577850904ec5afd54c8a56761da6d5c7d2f1961&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/54378950.jpg?k=8b6167539b3fdc992d2eb97701e10933a880f0e72bcb2fa95572e79fd2d6acaa&o=&hp=1',
            'https://ec.viajandox.com/uploads/Hotel%20Poisedon_1.jpg',
          ]
        },
        {
          name: 'Mantahost Hotel',
          image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_9vh1DVSuhxsJs-d1UqFvX-OtG2PLFRKx6YPubh-5gvz9F92uR0QRkoz1H-FxEXsO9BRGrB_6iqgkhEBldEDs7F6bSnwpm51GnFzGFdD-t2fdzE-TgkI-mX7CJWxFI8AIQg2sxLhD2ZE/s1600/mantahost-hotel.jpg',
          badge: '#2 en popularidad',
          address: 'Se encuentra ubicado en el Km. 1.5 Vía Barbasquillo',
          rating: 8.6,
          price: '$124',
          description: 'Con una ubicación privilegiada y vistas al mar, este hotel es ideal para unas vacaciones relajantes.',
          whyVisit: 'Relájese en un entorno tranquilo con vistas impresionantes del océano.',
          images: [
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/43697636.jpg?k=ac28cc1da5b7d5fa439a45eb4fdf8d6c904963de60a905d9ce6db7ce4e993bef&o=&hp=1',
            'https://host.ruta-del-sol-mejor-hoteles.com/data/Images/OriginalPhoto/2058/205833/205833916/image-manta-host-hotel-56.JPEG',
            'https://images.trvl-media.com/lodging/16000000/15910000/15904400/15904308/155604dd.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium',
            'https://media-cdn.tripadvisor.com/media/photo-s/05/f2/8f/d8/mantahost-hotel.jpg',
            'https://host.ruta-del-sol-mejor-hoteles.com/data/Images/OriginalPhoto/15894/1589449/1589449132/image-manta-host-hotel-16.JPEG',
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


