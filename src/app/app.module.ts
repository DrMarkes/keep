import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesModule } from './modules/notes/notes.module';
import { reducers } from './reducers/index';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FIREBASE_CONFIG } from './config/firebase';
import { AppMaterialDesignModule } from './app-material-design.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppMaterialDesignModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFirestoreModule.enablePersistence(),
    NotesModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
