import { LugaresService } from './../services/lugares.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {
  lugar: any = {};
  constructor(private lugaresService: LugaresService) { }

  guardarLugar() {
    let direccion = `${this.lugar.calle}, ${this.lugar.ciudad}, ${this.lugar.pais}`;
    this.lugaresService.obtenerGeoData(direccion)
        .subscribe((result) => {
          this.lugar.lat = result.json().results[0].geometry.location.lat;
          this.lugar.lng = result.json().results[0].geometry.location.lng;
          this.lugar.id = Date.now();
          this.lugaresService.guardarLugar(this.lugar);
          alert('Se ha creado el negocio con éxito');
          this.lugar = {};
        });
  }
  ngOnInit() {
  }

}
