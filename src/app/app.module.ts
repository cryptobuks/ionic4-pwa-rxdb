import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';

/**
 * PAGES
 */
import { AppComponent } from './app.component';

/**
 * PIPES
 */
import { PipesModule } from 'src/pipes/pipes.module';

/**
 * SERVICES
 */
import { initDatabase, DatabaseService } from 'src/services/database.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    PipesModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DatabaseService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: APP_INITIALIZER,
      useFactory: () => initDatabase,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
