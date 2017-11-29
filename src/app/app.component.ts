import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Platzisquare';
  lugares:any = [
    { nombre: 'Florería la Gardenía' },
    { nombre: 'Donas la pasadita' },
    { nombre: 'Veterinaría Huellitas Felices' },
    { nombre: 'Florería la Gardenía' },
    { nombre: 'Donas la pasadita' },
    { nombre: 'Veterinaría Huellitas Felices' }
];

  constructor() {

  }
}
