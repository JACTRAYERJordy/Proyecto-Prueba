import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Asegúrate de importar el Router desde @angular/router

@Component({
  selector: 'app-guayaquil',
  templateUrl: './guayaquil.component.html',
  styleUrl: './guayaquil.component.css'
})
export class GuayaquilComponent {
  cities = [
    {
      name: 'Guayaquil',
      hotels: [
        {
          name: 'Hotel Hilton Colon',
          image: 'https://cloudfront-us-east-1.images.arcpublishing.com/bloomberglinea/EHGVY52ENVH7ZJ5ZJ3A4UR5M7E.jpg',
          badge: 'Lujo y Confort',
          address: 'Av. Francisco de Orellana Mz. 111, Guayaquil 090150, Ecuador',
          rating: 9.0,
          price: '$180',
          description: 'El Hilton Colón Guayaquil ofrece una combinación de lujo, confort y comodidad en el centro de la ciudad.',
          whyVisit: 'Disfrute de instalaciones de primera clase y servicios excepcionales en el corazón de Guayaquil.',
          images: [
            'https://www.es.kayak.com/rimg/himg/10/6a/c3/ice-207549-99694132-980587.jpg?width=1366&height=768&crop=true',
            'https://www.hilton.com/im/en/QUIHIHF/6130431/quihi-1-king-bed-jr-suite-.jpg?impolicy=crop&cw=6000&ch=3359&gravity=NorthWest&xposition=0&yposition=320&rw=768&rh=430',
            'https://www.hilton.com/im/en/QUIHIHF/19384449/cafe-colon-1.jpg?impolicy=crop&cw=5000&ch=2799&gravity=NorthWest&xposition=0&yposition=266&rw=768&rh=430',
            'https://www.hilton.com/im/en/QUIHIHF/3186241/hilton-colon-quito-hotel-pool-965327.jpg?impolicy=crop&cw=4500&ch=2519&gravity=NorthWest&xposition=0&yposition=240&rw=768&rh=430',
            'https://vivemedia-1d168.kxcdn.com/261748/0.jpg',
          ]
        },
        {
          name: 'Wyndham Guayaquil',
          image: 'https://static11.com-hotel.com/uploads/hotel/16156/photo/hotel-wyndham-guayaquil_15499710495.jpeg',
          badge: 'Elegancia Moderna',
          address: 'Calle Numa Pompilio Llona S/N, Barrio Las Peñas, Guayaquil 090313, Ecuador',
          rating: 9.4,
          price: '$160',
          description: 'Ubicado en el barrio Las Peñas, el Wyndham Guayaquil ofrece modernas instalaciones y vistas al río.',
          whyVisit: 'Disfrute de un servicio excepcional y una ubicación privilegiada junto al río Guayas.',
          images: [
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/51/20/d9/wyndham-guayaquil.jpg?w=700&h=-1&s=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/40440997.jpg?k=e18627994d0c74c7aad52465589c09f697e442e6f4cb7a9eaca603bb53c94280&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/181373883.jpg?k=b7e0357cfeccb9cda66ed01ffeee2197789e24440984b1add2a9e07897edab8c&o=&hp=1',
            'https://www.wyndhamhotels.com/content/dam/property-images/en-us/hr/ec/others/guayaquil---guayas/36167/36167_pool_view_2.jpg?crop=3000:2000;*,*&downsize=720:*',
            'https://wyndham.guayaquilhotelsweb.com/data/Images/OriginalPhoto/4313/431310/431310651/image-guayaquil-wyndham-hotel-86.JPEG',
          ]
        },
        {
          name: 'Sheraton Guayaquil',
          image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/f0/1b/4c/sheraton-guayaquil-hotel.jpg?w=700&h=-1&s=1',
          badge: 'Comodidad Superior',
          address: 'Av. Constitucion, Plaza del Sol, Guayaquil 090150, Ecuador',
          rating: 8.8,
          price: '$140',
          description: 'El Sheraton Guayaquil combina comodidad y modernidad, ofreciendo un servicio de primera clase.',
          whyVisit: 'Viva la experiencia de un hotel internacionalmente reconocido con todas las comodidades.',
          images: [
            'https://sheraton-guayaquil-hotel-090150.guayaquilhotels.org/data/Imgs/OriginalPhoto/5218/521829/521829393/sheraton-hotel-guayaquil-img-42.JPEG',
            'https://sheraton.guayaquilhotelsweb.com/data/Photos/OriginalPhoto/15670/1567005/1567005512/photo-sheraton-hotel-guayaquil-28.JPEG',
            'https://img.directhotels.com/ec/guayaquil/sheraton-guayaquil/29.jpg',
            'https://sheraton.guayaquilhotelsweb.com/data/Photos/OriginalPhoto/15569/1556962/1556962651/photo-sheraton-hotel-guayaquil-55.JPEG',
            'https://www.kayak.com.ec/rimg/himg/e7/6b/c4/leonardo-50753-175877341-610539.jpg?width=968&height=607&crop=true',
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
