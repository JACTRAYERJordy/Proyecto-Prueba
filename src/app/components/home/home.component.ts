import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importar Router de @angular/router

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {}

  // Método para navegar al componente 'list'
  navigateToList(): void {
    this.router.navigate(['/list']);
  }

  // Lista de hoteles disponibles
  hoteles = [
    {
      nombre: 'Crucero al atardecer por el Bósforo en Estambul',
      descripcion: 'En yate de lujo',
      img: 'https://d2poxrheyfxwbo.cloudfront.net/hotel/bbc4b08b-dce2-42d6-b2fe-156f33db9e8e', // Reemplaza con la ruta real de la imagen
      precio: 40
    },
    {
      nombre: 'Exclusiva experiencia de navegación desde Atenas',
      descripcion: 'Agistri, Moni y Egina',
      img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/64/3b/a0/pool.jpg?w=1200&h=-1&s=1', // Reemplaza con la ruta real de la imagen
      precio: 149
    },
    {
      nombre: 'Excursión de 2 horas al atardecer en Lisboa',
      descripcion: 'Con copa de vino',
      img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/2c/4a/d8/hotel-el-marques.jpg?w=300&h=-1&s=1', // Reemplaza con la ruta real de la imagen
      precio: 45
    },
    {
      nombre: 'Crucero en catamarán de medio día por Santorini',
      descripcion: '',
      img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/38/e8/85/photo0jpg.jpg?w=1200&h=-1&s=1', // Reemplaza con la ruta real de la imagen
      precio: 95
    }
  ];

  // Lista de destinos turísticos
  destinos = [
    {
      nombre: '3 días perfectos en Sorrento, Italia',
      img: 'https://ekosnegocios.com/image/posts/September2021/BYGwbp3SD8rvWzgibCgt.jpeg' // Reemplaza con la ruta real de la imagen
    },
    {
      nombre: '2 días perfectos en Miconos',
      img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/417926078.jpg?k=5f3785b6f7ed8cfe37b81e4ad7d0d69b3740e71899ac828033853a076e24793a&o=&hp=1' // Reemplaza con la ruta real de la imagen
    },
    {
      nombre: 'Un día perfecto en Nápoles',
      img: 'https://lh3.googleusercontent.com/proxy/7kqYdlRZb6FrdNmtuFh-10vMKfsRNpFh3lzwvUpzkCdHtwqIWlzdjS2Q4qX14XJ-zool36M0W6wGtVX-QDrdol_nwMml8OQP_QM-J6nkUmIMwpk6xDdMZRraOJYSUPEnovRTGGgn9x97FJuiONccf-_yzj-cHQ=w472-h352-n-k' // Reemplaza con la ruta real de la imagen
    },
    {
      nombre: 'Un día perfecto en Nápoles',
      img: 'https://lh3.googleusercontent.com/proxy/oOs1-5PJkncXAcwGlRytWaScr7S0C9aZEDAvJDWNYCoEl3yL0PzP_YpdiX6vTc4zUGphUuDZiFXcWOpkRZalYdUempaFloQRQlFYfHs3ka2lHw2PUXKvCCOpaRCiB4pvuRFMmd-MOz2DCfO26LGb1RoRKnARRQ=w472-h352-n-k' // Reemplaza con la ruta real de la imagen
    },
    {
      nombre: 'Un día perfecto en Nápoles',
      img: 'https://media-cdn.tripadvisor.com/media/photo-s/2b/e1/c0/8f/caption.jpg' // Reemplaza con la ruta real de la imagen
    },
    {
      nombre: 'Un día perfecto en Nápoles',
      img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/2c/61/93/hotel-playa-cristal-rodeado.jpg?w=1200&h=-1&s=1' // Reemplaza con la ruta real de la imagen
    }
  ];

  // Lista de tours disponibles
  tours = [
    {
      title2: 'Tour a la Cueva Azul y Hvar: tour por 5 islas desde Split y Trogir',
      image: 'https://www.mashpilodge.com/wp-content/uploads/2019/08/mashpi-lodge-varanda-view.webp',
      reviews: 2133,
      price: 97
    },
    {
      title2: 'Avistamiento de delfines y ballenas en Madeira desde un lujoso catamarán',
      image: 'https://www.visitaecuador.com/img/web/hoteles.jpg',
      reviews: 1408,
      price: 35
    },
    {
      title2: 'Avistamiento de ballenas clásico | La experiencia original desde Reikiavik',
      image: 'https://img.cronista.com/files/image/307/307135/5ffe2f480d5e8_950_534!.jpg?s=cfd25182861d9e8414087730494e94a1&d=1711747414',
      reviews: 1802,
      price: 93
    },
    {
      title2: 'Tour en catamarán a la laguna azul, playas y bahías',
      image: 'https://q-xx.bstatic.com/xdata/images/hotel/840x460/333602484.jpg?k=9e0882170a5d43ddeb82ee768f79eafc8ddb20c0b25ddd556370b671dfd87631&o=',
      reviews: 1065,
      price: 45
    },
    {
      title2: 'Tour a la Cueva Azul y Hvar: tour por 5 islas desde Split y Trogir',
      image: 'https://images.trvl-media.com/lodging/71000000/70420000/70415100/70415066/9865dcd3.jpg?impolicy=resizecrop&rw=598&ra=fit',
      reviews: 2133,
      price: 97
    },
    {
      title2: 'Avistamiento de delfines y ballenas en Madeira desde un lujoso catamarán',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/fc/92/cc/barcelo-salinas.jpg?w=700&h=-1&s=1',
      reviews: 1408,
      price: 35
    },
    {
      title2: 'Avistamiento de ballenas clásico | La experiencia original desde Reikiavik',
      image: 'https://turismoi.ec/uploads/ec/photo/photo_file/7881/Galapagos_Habitat_Hotel.jpg',
      reviews: 1802,
      price: 93
    },
    {
      title2: 'Tour en catamarán a la laguna azul, playas y bahías',
      image: 'https://naturegalapagos.com/es/wp-content/uploads/sites/3/2015/07/Hotel-Banner-Santa-Cruz.jpg',
      reviews: 1065,
      price: 45
    }
  ];
}
