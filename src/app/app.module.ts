import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomizerComponent } from './customizer/customizer.component';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {ShowComponent} from './show/show.component';
import { LeaveComponent } from './leave/leave.component';
import { LeaveshellComponent } from './leaveshell/leaveshell.component';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { BarComponent } from './bar/bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    CustomizerComponent,
    LeaveComponent,
    LeaveshellComponent,
    QrcodeComponent,
    BarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
      {provide: LocationStrategy, useClass: PathLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
