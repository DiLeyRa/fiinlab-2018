import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DreamComponent } from './components/dream/dream.component';
import { DreamStatusComponent } from './components/dream-status/dream-status.component';
import { DreamRegisterComponent } from './components/dream-register/dream-register.component';

import { SubmitComponent } from './components/submit/submit.component';
import { Submit2Component } from './components/submit2/submit2.component';

import { StartComponent } from './components/start/start.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { QrComponent } from './components/qr/qr.component';

@NgModule({
  declarations: [
    AppComponent,
    DreamComponent,
    DreamStatusComponent,
    DreamRegisterComponent,
    SubmitComponent,
    Submit2Component,
    StartComponent,
    QrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
