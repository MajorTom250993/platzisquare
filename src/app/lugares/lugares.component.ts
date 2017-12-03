import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {
  title = 'Platzisquare';
  lugares: any = [
    { plan: 'gratis', cercania: 1, distancia: 1, active: false, nombre: 'Florería la Gardenía' },
    { plan: 'pagado', cercania: 1, distancia: 1.8, active: true, nombre: 'Donas la pasadita' },
    { plan: 'gratis', cercania: 2, distancia: 5, active: false, nombre: 'Veterinaría Huellitas Felices' },
    { plan: 'pagado', cercania: 3, distancia: 10, active: true, nombre: 'Las Gatortas' },
    { plan: 'gratis', cercania: 3, distancia: 35, active: false, nombre: 'Cafebrería' },
    { plan: 'pagado', cercania: 3, distancia: 120, active: true, nombre: 'La Dosis' }
  ];
  lat: number = 19.4182086;
  lng: number = -99.1616303;

  constructor() { }

  ngOnInit() {
  }

}
