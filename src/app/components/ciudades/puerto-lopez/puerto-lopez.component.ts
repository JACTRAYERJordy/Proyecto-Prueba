import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Asegúrate de importar el Router desde @angular/router


@Component({
  selector: 'app-puerto-lopez',
  templateUrl: './puerto-lopez.component.html',
  styleUrl: './puerto-lopez.component.css'
})
export class PuertoLopezComponent {
  cities = [
    {
      name: 'Puerto López',
      hotels: [
        {
          name: 'Hotel Victor Hugo Lopez',
          image: 'https://www.victorhugohotel.com.ec/wp-content/uploads/vh_front_03.jpg',
          badge: 'La mejor relación calidad-precio',
          address: 'Enfrente del paseo marítimo de Puerto López',
          rating: 7.4,
          price: '$9',
          description: 'Un hotel económico con una ubicación inmejorable frente al mar.',
          whyVisit: 'Disfrute de una estadía asequible con una ubicación espectacular frente al mar.',
          images: [
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/53973223.jpg?k=7c6a15a973bc87e046ff235aff269ad2d7645b5ad6e82cbb7d595ecb2223d6ce&o=&hp=1',
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/86/2e/1a/restaurant-sitting.jpg?w=700&h=-1&s=1',
            'https://x.cdrst.com/foto/hotel-sf/54084/granderesp/victor-hugo-hotel-habitacion-dd4f187.jpg',
            'https://centrodeviajesecuador.com/wp-content/uploads/2021/02/IMG_1857.jpg',
            'https://centrodeviajesecuador.com/wp-content/uploads/2021/02/IMAGEN-DE-PORTADA-5.jpg',
          ]
        },
        {
          name: 'Hotel Azuluna Ecolodge',
          image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/19360155.jpg?k=2899ba502fd692f91178a53621811c4a0254ee489e0f2e84b32946b790f8684d&o=&hp=1',
          badge: '#1 en popularidad',
          address: 'Se encuentra situado en Puerto López',
          rating: 8.0,
          price: '$36',
          description: 'Un ecolodge popular que ofrece una experiencia única y sostenible.',
          whyVisit: 'Viva una experiencia ecológica y sostenible en este popular ecolodge.',
          images: [
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/19313022.jpg?k=2f0da4a5128c91764ffbf07eda64415fd29ca4af97a52edc7546cd861d59be52&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/19313235.jpg?k=83ce6df857bddd8770c657a3dd0a331f141a3a3f6a3dc3514d43210c1482746b&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/19360229.jpg?k=efae8c13f5a60d19e89d2dda4d0715f24ee3195f09028b5ef36f0b79c24e072a&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/27983081.jpg?k=ccd54566183ae7ba3d884a9b458277b03fd94119b348c5bc014dce89a2edd1a5&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max500/19360215.jpg?k=c529fa35fa8d05d49f91c040a339cdd8703babd3ba285d7cc356e68fe58762cb&o=&hp=1',
          ]
        },
        {
          name: 'Hotel Mantaraya Lodge',
          image: 'https://images.trvl-media.com/lodging/5000000/4610000/4608100/4608071/d7b89bfd.jpg?impolicy=resizecrop&rw=598&ra=fit',
          badge: '#2 en popularidad',
          address: 'Ruta del Sol -E15 (a 2.5Km. de Puerto López).',
          rating: 8.1,
          price: '$12',
          description: 'Un lodge popular con cómodas instalaciones y una ubicación estratégica.',
          whyVisit: 'Disfrute de un cómodo lodge en una ubicación estratégica en la Ruta del Sol.',
          images: [
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/216093973.jpg?k=3f0fd8652d675997efae09c8286efc1129559975c7a989a74d29273709de4c19&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/13461490.jpg?k=a935c1f8b06a277bc2ef41beeb107762bc01db80dfb158235b52ad0143a70127&o=&hp=1',
            'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_600,q_auto,w_600//hotelier-images/b4/37/4e12d87ba4101ab4edd64baf076901ae008db7529eb429427b6869141ce0.jpeg',
            'https://media-cdn.tripadvisor.com/media/photo-m/1280/0e/68/c0/cf/photo2jpg.jpg',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/215858070.jpg?k=0e963111e119e0118d4dd82e0af2028e7a1c4ef69301681c46d8542b23586542&o=&hp=1',
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
