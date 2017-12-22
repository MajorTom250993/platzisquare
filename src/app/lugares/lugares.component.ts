import { LugaresService } from './../services/lugares.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {
  title = 'Platzisquare';

  lat: number = 19.4182086;
  lng: number = -99.1616303;
  lugares = null;
  constructor(private lugaresService: LugaresService) {
    this.lugares = lugaresService.getLugares();
   }

  ngOnInit() {
  }

}
