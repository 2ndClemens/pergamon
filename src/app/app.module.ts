import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SceneComponent } from './components/scene/scene.component';
import { GltfObjectComponent } from './components/gltf-object/gltf-object.component';
import { FloorComponent } from './components/floor/floor.component';
import { ChamberComponent } from './components/chamber/chamber.component';
import { ArchitraveComponent } from './components/architrave/architrave.component';
import { RoofComponent } from './components/roof/roof.component';

@NgModule({
  declarations: [
    AppComponent,
    SceneComponent,
    GltfObjectComponent,
    FloorComponent,
    ChamberComponent,
    ArchitraveComponent,
    RoofComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
