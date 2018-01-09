// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { HttpModule } from '@angular/http';

// Directives
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CrearComponent } from './crear/crear.component';

// Services
import { LugaresService } from './services/lugares.service';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Enviroment
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  {path: '', component: LugaresComponent},
  {path: 'lugares', component: LugaresComponent},
  {path: 'detalle/:id', component: DetalleComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'crear/:id', component: CrearComponent},
];

export const firebaseConfig = {
  apiKey: 'AIzaSyAjVorMrVoXlQFAGdsJbnUpJjyy3ER-QLg',
  authDomain: 'platzisquare-1512022393727.firebaseapp.com',
  databaseURL: 'https://platzisquare-1512022393727.firebaseio.com',
  storageBucket: 'platzisquare-1512022393727.appspot.com',
  messagingSenderId: '648530039083'
};

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.agmApiKey
    }),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule
  ],
  providers: [
    LugaresService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
