import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {
  title = 'Platzisquare';
  lugares: any = [
    { id: 1, plan: 'gratis', cercania: 1, distancia: 1, active: true, nombre: 'Florería la Gardenía' },
    { id: 2, plan: 'pagado', cercania: 1, distancia: 1.8, active: true, nombre: 'Donas la pasadita' },
    { id: 3, plan: 'gratis', cercania: 2, distancia: 5, active: true, nombre: 'Veterinaría Huellitas Felices' },
    { id: 4, plan: 'pagado', cercania: 3, distancia: 10, active: true, nombre: 'Las Gatortas' },
    { id: 5, plan: 'gratis', cercania: 3, distancia: 35, active: true, nombre: 'Cafebrería' },
    { id: 6, plan: 'pagado', cercania: 3, distancia: 120, active: true, nombre: 'La Dosis' }
  ];
  lat: number = 19.4182086;
  lng: number = -99.1616303;

  constructor() { }

  ngOnInit() {
  }

}
