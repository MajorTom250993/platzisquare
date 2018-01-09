import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Http } from '@angular/http';

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
  constructor(private afDB: AngularFireDatabase, private http: Http) { }

  public getLugares() {
    return this.afDB.list('lugares/');
  }
  public buscarLugar(id) {
    return this.lugares.filter((lugar) => lugar.id == id)[0] || null;
  }
  public guardarLugar(lugar) {
    this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
  }
  public editarLugar(lugar) {
    this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
  }
  public obtenerGeoData(direccion) {
    return this.http.get(`http://maps.google.com/maps/api/geocode/json?address=${direccion}`);
  }
  public getLugar(id) {
    return this.afDB.object('lugares/' + id);
  }
}
