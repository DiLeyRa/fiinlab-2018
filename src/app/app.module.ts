import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DreamComponent } from './components/dream/dream.component';
import { DreamStatusComponent } from './components/dream-status/dream-status.component';
import { DreamRegisterComponent } from './components/dream-register/dream-register.component';

@NgModule({
  declarations: [
    AppComponent,
    DreamComponent,
    DreamStatusComponent,
    DreamRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
