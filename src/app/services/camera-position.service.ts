import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { ControlStateService } from './control-state.service';

@Injectable({
  providedIn: 'root'
})
export class CameraPositionService {

  constructor(public controlStateService: ControlStateService) { }


  public updateCamera(camera: THREE.PerspectiveCamera, deltaTime: number) {
    if (this.controlStateService.getControlState().forward === true) {
      camera.translateZ(-.2 * deltaTime);
    }
    if (this.controlStateService.getControlState().backwards === true) {
      camera.translateZ(.2 * deltaTime);
    }
    if (this.controlStateService.getControlState().right === true) {
      camera.rotation.y -= 2 * Math.PI/360  * deltaTime;
    }
    if (this.controlStateService.getControlState().left === true) {
      camera.rotation.y += 2 * Math.PI/360  * deltaTime;
    }

    if (camera.position.x < 2) {
      camera.position.x = 2;
    }
    if (camera.position.x > 8) {
      camera.position.x = 8;
    }
  }
}
