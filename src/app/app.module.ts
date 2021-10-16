import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarComponent } from './bar/bar.component';
import { CustomizerComponent } from './customizer/customizer.component';
import { LeaveComponent } from './leave/leave.component';
import { LeaveshellComponent } from './leaveshell/leaveshell.component';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { NavComponent } from './shell/nav/nav.component';
import { TitlebarComponent } from './shell/titlebar/titlebar.component';
import { ShowComponent } from './show/show.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    CustomizerComponent,
    LeaveComponent,
    LeaveshellComponent,
    QrcodeComponent,
    BarComponent,
    TitlebarComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
