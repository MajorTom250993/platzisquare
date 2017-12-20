import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  lugares: any = [
    { id: 1, plan: 'gratis', cercania: 1, distancia: '1 km', active: true, nombre: 'Florería la Gardenía', description: 'Descripción de este negocio. Más adelante tendremos más información' },
    { id: 2, plan: 'pagado', cercania: 1, distancia: '1.8 km', active: true, nombre: 'Donas la pasadita', description: 'Descripción de este negocio. Más adelante tendremos más información' },
    { id: 3, plan: 'gratis', cercania: 2, distancia: '5 km', active: true, nombre: 'Veterinaría Huellitas Felices', description: 'Descripción de este negocio. Más adelante tendremos más información' },
    { id: 4, plan: 'pagado', cercania: 3, distancia: '10 km', active: true, nombre: 'Las Gatortas', description: 'Descripción de este negocio. Más adelante tendremos más información' },
    { id: 5, plan: 'gratis', cercania: 3, distancia: '35 km', active: true, nombre: 'Cafebrería', description: 'Descripción de este negocio. Más adelante tendremos más información' },
    { id: 6, plan: 'pagado', cercania: 3, distancia: '120 km', active: true, nombre: 'La Dosis', description: 'Descripción de este negocio. Más adelante tendremos más información' }
  ];
  id = null;
  lugar: any = {}
  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.params['id']);
    console.log(this.route.snapshot.queryParams['action2']);
    console.log(this.route.snapshot.queryParams['referer']);
    this.id = this.route.snapshot.params['id'];
    this.lugar = this.buscarLugar();
  }
  buscarLugar() {
    return this.lugares.filter((lugar) => lugar.id == this.id )[0] || null;
  }

  ngOnInit() {
  }

}
