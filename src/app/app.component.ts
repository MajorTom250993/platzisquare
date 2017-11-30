import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Platzisquare';
  lugares:any = [
    { active: false, nombre: 'Florería la Gardenía' },
    { active: true, nombre: 'Donas la pasadita' },
    { active: false, nombre: 'Veterinaría Huellitas Felices' },
    { active: true, nombre: 'Las Gatortas' },
    { active: false, nombre: 'Cafebrería' },
    { active: true, nombre: 'La Dosis' }
];

  constructor() {

  }
}
