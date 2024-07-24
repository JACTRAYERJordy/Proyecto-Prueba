import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
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
        },
        {
          name: 'Hotel Santa Fé',
          image: 'https://santa-fe.ruta-del-sol-mejor-hoteles.com/data/Images/OriginalPhoto/14173/1417391/1417391220/image-manta-hotel-santa-fe-2.JPEG',
          badge: 'Excelente ubicación',
          address: 'Se encuentra ubicado en la Av. 23 315-261',
          rating: 8.0,
          price: '$89',
          description: 'Ubicado en el corazón de la ciudad, este hotel ofrece fácil acceso a todas las atracciones principales.',
          whyVisit: 'Explore la ciudad con facilidad desde este hotel excelentemente ubicado.',
          images: [
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/225823013.jpg?k=3fc37c42a7a27201198678d4b78b8674f69dd1eb156475280e57c286b4ab71aa&o=&hp=1',
            'https://santa-fe.ruta-del-sol-mejor-hoteles.com/data/Images/OriginalPhoto/7637/763752/763752457/image-manta-hotel-santa-fe-37.JPEG',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/215517121.jpg?k=7a240c4406beae309d46f4e1789c9bcdcd043602cfa46b325d87909f90dac440&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/300833020.jpg?k=d8925330272e5a6edc8c8a2837b757362770415edf37368337df6030545e7ff9&o=&hp=1',
            'https://santa-ana.hotelspuertoescondido.com/data/Images/OriginalPhoto/8164/816446/816446522/image-puerto-escondido-oaxaca-hotel-santa-ana-9.JPEG',
          ]
        }
      ]
    },
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
        },
        {
          name: 'Hotel-Restaurante Ancora',
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/bf/92/97/hotel-ancora.jpg',
          badge: 'La mejor relación calidad-precio',
          address: 'Parque Nacional Machalilla. Frente al mar, Malecon Julio Izuerieta',
          rating: 8.0,
          price: '$75',
          description: 'Un hotel y restaurante frente al mar con excelente servicio y precios accesibles.',
          whyVisit: 'Disfrute de un excelente servicio y comida deliciosa en un entorno frente al mar.',
          images: [
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/84/63/b2/img-20170608-130833-388.jpg?w=500&h=400&s=1',
            'https://media-cdn.tripadvisor.com/media/photo-s/25/0b/b0/a8/nuestra-sala-restaurante.jpg',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/440052980.jpg?k=8084496e025f0ec7427c69f143dfa0de44c84758b0cfe6cc0c35360561a2f76e&o=&hp=1',
            'https://images.trvl-media.com/lodging/28000000/27180000/27173900/27173812/ed3fa552.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
            'https://images.trvl-media.com/lodging/28000000/27180000/27173900/27173812/ace8f321.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium',
          ]
        }
      ]
    },
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
          name: 'Hotel Francisco III',
          image: 'https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen,f_auto,h_248,q_auto,w_481/partner-images/40/5a/4cfb7beb4bab654bdd03fdaaa2c93be243acdfa8dba97c121838d5c49cdd.jpeg',
          badge: 'Excelente ubicación',
          address: 'Se encuentra ubicado en la calle Segunda, 130',
          rating: 7.8,
          price: '$75',
          description: 'Un hotel excelentemente ubicado con fácil acceso a las atracciones principales.',
          whyVisit: 'Explore Salinas con facilidad desde este hotel bien ubicado.',
          images: [
            'https://francisco-iii.ruta-del-sol-mejor-hoteles.com/data/Photos/OriginalPhoto/1258/125831/125831142.JPEG',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/195420013.jpg?k=41c1c47719430ca5f5d72b0db4d94d0f1bed7d3dd123fdd3446d8cd84060782c&o=&hp=1',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpWR1021zZ6aHwW91_eO9gCDyCW0Y5vmmGKw&s',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/43288033.jpg?k=5a06d8d2728b39df93211d074e871864d1bbb8c38be03790ce4022bdd18b8113&o=&hp=1',
            'https://www.momondo.es/rimg/himg/de/04/8f/expediav2-256626-ea277e-688786.jpg?width=968&height=607&crop=true',
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

  // Bandera para controlar la apertura del modal
  isModalOpen = false;
  // Objeto para almacenar el hotel seleccionado
  selectedHotel: any;

  // Método para abrir el modal con los detalles del hotel
  openHotelDetails(hotel: any, event: Event): void {
    this.selectedHotel = hotel;
    this.isModalOpen = true;
    event.stopPropagation(); // Evita que el evento de clic se propague al overlay
  }

  // Método para cerrar el modal
  closeModal(event?: Event): void {
    if (event) {
      event.stopPropagation(); // Evita que el evento de clic se propague al overlay
    }
    this.isModalOpen = false;
  }
}
