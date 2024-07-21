import { Component, OnInit } from '@angular/core';

interface Experience {
  image: string;
  title: string;
  location: string;
  description: string;
  duration: string;
  age: string;
  reviews: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  experiences: Experience[] = [
    {
      image: 'https://www.turismo.gob.ec/wp-content/uploads/2020/09/320quilotoa-lake-ecuador.jpg',
      title: 'Tour privado a Quilotoa con todo incluido',
      location: 'Quilotoa, Ecuador',
      description: 'Con este tour privado, obtén un itinerario personalizado para explorar el impresionante cráter de Quilotoa y sus alrededores, disfrutando de la belleza natural y de la deliciosa gastronomía local.',
      duration: '1 día',
      age: 'De 1 a 99 años',
      reviews: '2500 opiniones'
    },
    {
      image: 'https://elcomercio.pe/resizer/2sqxKAVRSxXoCfoMn1hVYQOeLn4=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/ACLV4PBZJNADDEL76ZAEBNUWI4.jpg',
      title: 'Tour privado en las Islas Galápagos',
      location: 'Galápagos, Ecuador',
      description: 'Disfruta de un tour privado en las Islas Galápagos, con un itinerario adaptado a tus intereses. Descubre la biodiversidad única y relájate en alojamientos cómodos mientras degustas la comida local.',
      duration: '3 días',
      age: 'De 8 a 99 años',
      reviews: '5800 opiniones'
    },
    {
      image: 'https://www.imagineecuador.com/wp-content/uploads/2021/11/Recurso-117.png',
      title: 'Tour privado al Volcán Cotopaxi',
      location: 'Cotopaxi, Ecuador',
      description: 'Participa en un tour privado al Volcán Cotopaxi, diseñado a tu medida, donde podrás disfrutar de paisajes impresionantes y aprender sobre la flora y fauna de la región.',
      duration: '2 días',
      age: 'De 15 a 99 años',
      reviews: '1800 opiniones'
    },
    {
      image: 'https://i1.wp.com/pasaportesindestino.net/wp-content/uploads/2018/04/2.png?fit=810%2C450&ssl=1',
      title: 'Tour privado de aventura en Baños',
      location: 'Baños, Ecuador',
      description: 'Vive una experiencia personalizada en Baños, disfrutando de actividades emocionantes como puenting, además de relajarte en los famosos baños termales y degustar la deliciosa comida local.',
      duration: '1 día',
      age: 'De 5 a 99 años',
      reviews: '4000 opiniones'
    }
  ];

  showSelect = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSelect() {
    this.showSelect = !this.showSelect;
  }

  selectLocation(location: string) {
    console.log(`Seleccionaste: ${location}`);
    this.showSelect = false; // Cierra el menú al seleccionar
  }
}
