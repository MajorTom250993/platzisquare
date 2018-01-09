import { LugaresService } from './../services/lugares.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {
  lugar: any = {};
  id: any = null;
  constructor(private lugaresService: LugaresService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    if (this.id !== 'new') {
      this.lugaresService.getLugar(this.id)
          .valueChanges().subscribe((lugar) => {
            this.lugar = lugar;
          });
    }
  }

  guardarLugar() {
    let direccion = `${this.lugar.calle}, ${this.lugar.ciudad}, ${this.lugar.pais}`;
    this.lugaresService.obtenerGeoData(direccion)
        .subscribe((result) => {
          this.lugar.lat = result.json().results[0].geometry.location.lat;
          this.lugar.lng = result.json().results[0].geometry.location.lng;
          if (this.id !== 'new') {
            this.lugaresService.editarLugar(this.lugar);
            alert('El negocio se ha editado con éxito');
          } else {
            this.lugar.id = Date.now();
            this.lugaresService.guardarLugar(this.lugar);
            alert('Se ha creado el negocio con éxito');
          }
          this.lugar = {};
        });
  }
  ngOnInit() {
  }

}
