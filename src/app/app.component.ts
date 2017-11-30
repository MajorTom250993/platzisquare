import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Platzisquare';
  lugares:any = [
    { cercania: 1, distancia: 1, active: false, nombre: 'Florería la Gardenía' },
    { cercania: 1, distancia: 1.8, active: true, nombre: 'Donas la pasadita' },
    { cercania: 2, distancia: 5, active: false, nombre: 'Veterinaría Huellitas Felices' },
    { cercania: 3, distancia: 10, active: true, nombre: 'Las Gatortas' },
    { cercania: 3, distancia: 35, active: false, nombre: 'Cafebrería' },
    { cercania: 3, distancia: 120, active: true, nombre: 'La Dosis' }
  ];
  lat: number = 19.4182086;
  lng: number = -99.1616303;

  constructor() {

  }
}
