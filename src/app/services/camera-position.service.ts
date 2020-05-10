import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { ControlStateService } from './control-state.service';

@Injectable({
  providedIn: 'root'
})
export class CameraPositionService {

  constructor(public controlStateService: ControlStateService) { }


  public updateCamera(camera: THREE.PerspectiveCamera) {
    camera.rotation.y = Math.PI;
    if (this.controlStateService.getControlState().forward === true) {
      camera.position.z += .2;
    }
    if (this.controlStateService.getControlState().backwards === true) {
      camera.position.z -= .2;
    }
    if (this.controlStateService.getControlState().right === true) {
      camera.position.x -= .2;
    }
    if (this.controlStateService.getControlState().left === true) {
      camera.position.x += .2;
    }

    if (camera.position.x < 2) {
      camera.position.x = 2;
    }
    if (camera.position.x > 8) {
      camera.position.x = 8;
    }
  }
}
