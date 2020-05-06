import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StageComponent } from './components/stage/stage.component';
import { InstancedObjectComponent } from './components/instanced-object/instanced-object.component';

@NgModule({
  declarations: [
    AppComponent,
    StageComponent,
    InstancedObjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
