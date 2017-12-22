import { Injectable } from '@angular/core';

@Injectable()
export class LugaresService {
  lugares: any = [
    { id: 1, plan: 'gratis', cercania: 1, distancia: 1, active: true, nombre: 'Florería la Gardenía' },
    { id: 2, plan: 'pagado', cercania: 1, distancia: 1.8, active: true, nombre: 'Donas la pasadita' },
    { id: 3, plan: 'gratis', cercania: 2, distancia: 5, active: true, nombre: 'Veterinaría Huellitas Felices' },
    { id: 4, plan: 'pagado', cercania: 3, distancia: 10, active: true, nombre: 'Las Gatortas' },
    { id: 5, plan: 'gratis', cercania: 3, distancia: 35, active: true, nombre: 'Cafebrería' },
    { id: 6, plan: 'pagado', cercania: 3, distancia: 120, active: true, nombre: 'La Dosis' }
  ];
  public getLugares() {
    return this.lugares;
  }
  public buscarLugar(id) {
    return this.lugares.filter((lugar) => lugar.id == id)[0] || null;
  }
  constructor() { }

}
