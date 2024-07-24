import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Asegúrate de importar el Router desde @angular/router


@Component({
  selector: 'app-quito',
  templateUrl: './quito.component.html',
  styleUrl: './quito.component.css'
})
export class QuitoComponent {
  cities = [
    {
      name: 'Quito',
      hotels: [
        {
          name: 'Hilton Colon Quito',
          image: 'https://hilton-colon-1701-3103.quitotophotels.com/data/Pics/OriginalPhoto/2220/222056/222056945/pic-hilton-colon-hotel-1701-3103-quito-71.JPEG',
          badge: 'Lujo y Confort',
          address: 'Av. Amazonas N19-14 y Patria, Quito 170517, Ecuador',
          rating: 9.0,
          price: '$200',
          description: 'El Hilton Colon Quito ofrece una experiencia de lujo con todas las comodidades modernas en el corazón de Quito.',
          whyVisit: 'Disfrute de un servicio excepcional y una ubicación céntrica para explorar la ciudad.',
          images: [
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/486119518.jpg?k=9e68bcfe91bac9cc03957de4cd1a810c60cebc2c2f0c7957062b43c4e6b9fdaa&o=&hp=1',
            'https://www.hilton.com/im/en/QUIHIHF/3185697/hilton-colon-quito-hotel-presidential-suite-965353.jpg?impolicy=crop&cw=4500&ch=2519&gravity=NorthWest&xposition=0&yposition=240&rw=768&rh=430',
            'https://www.hilton.com/im/en/QUIHIHF/3186241/hilton-colon-quito-hotel-pool-965327.jpg?impolicy=crop&cw=4500&ch=2519&gravity=NorthWest&xposition=0&yposition=240&rw=768&rh=430',
            'https://www.hilton.com/im/en/QUIHIHF/19384449/cafe-colon-1.jpg?impolicy=crop&cw=5000&ch=2799&gravity=NorthWest&xposition=0&yposition=266&rw=768&rh=430',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/486119541.jpg?k=be474b4e008d93110f16826c0a0dc7a41830c889236705ea3d822a220320f0c8&o=&hp=1',
          ]
        },
        {
          name: 'Hotel NH Collection Quito Royal',
          image: 'https://hotelcms-contents-live.tajawal.com/6d7e72e1-a753-4323-a36b-43eb3776cf45.jpg',
          badge: 'Elegancia Moderna',
          address: 'Av. 12 de Octubre 1830 y Cordero, Quito 170525, Ecuador',
          rating: 9.2,
          price: '$170',
          description: 'El NH Collection Quito Royal ofrece modernas instalaciones y un servicio de primera clase en una ubicación privilegiada.',
          whyVisit: 'Disfrute de elegancia y confort en el corazón de Quito, cerca de las principales atracciones.',
          images: [
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/269861511.jpg?k=69a80c4234259f392fa47c19663f586b9f07596f7dd96f1438bd9f7bced40769&o=&hp=1',
            'https://img.nh-hotels.net/ae11w/7Lv2R/original/RS_NH_collection-royal-quito_031.jpg',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/269861531.jpg?k=1f69e84289ceba1ff1875093337c06391e950e1da32a39b44d0b042f1dff36bc&o=&hp=1',
            'https://img.nh-hotels.net/ae11w/ge0r8/original/RC_NH_collection-royal-quito_011.jpg',
            'https://y.cdrst.com/foto/hotel-sf/6326/granderesp/foto-hotel-1203171e.jpg',
          ]
        },
        {
          name: 'Park Inn by Radisson Quito',
          image: 'https://x.cdrst.com/foto/hotel-sf/12293d/granderesp/foto-hotel-12584918.jpg',
          badge: 'Comodidad Superior',
          address: 'Av. 6 de Diciembre N34-120 y Checoslovaquia, Quito 170517, Ecuador',
          rating: 8.8,
          price: '$150',
          description: 'El Park Inn by Radisson Quito combina confort y conveniencia en una ubicación estratégica de la ciudad.',
          whyVisit: 'Experimente un servicio amigable y todas las comodidades necesarias para una estancia agradable.',
          images: [
            'https://images.trvl-media.com/lodging/33000000/32790000/32787800/32787736/fa7dfb8d.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium',
            'https://images.trvl-media.com/lodging/33000000/32790000/32787800/32787736/e4ca6851.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
            'https://images.trvl-media.com/lodging/33000000/32790000/32787800/32787736/2e27843c.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/da/44/5f/lobbyinterior.jpg?w=700&h=-1&s=1',
            'https://www.kayak.com.ec/rimg/himg/c2/cd/c0/ice-140622-104830444-170864.jpg?width=1366&height=768&crop=true',
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
