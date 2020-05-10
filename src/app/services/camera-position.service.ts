import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { ControlStateService } from './control-state.service';

@Injectable({
  providedIn: 'root'
})
export class CameraPositionService {

  constructor(public controlStateService: ControlStateService) { }


  public updateCamera(camera: THREE.PerspectiveCamera, deltaTime: number) {
    const state = this.controlStateService.getControlState()
    if (state.forward === true) {
      camera.translateZ(-.2 * deltaTime);
    }
    if (state.backwards === true) {
      camera.translateZ(.2 * deltaTime);
    }
    if (state.right === true) {
      camera.rotation.y -= 6 * Math.PI / 360 * deltaTime;
    }
    if (state.left === true) {
      camera.rotation.y += 6 * Math.PI / 360 * deltaTime;
    }

    if (state.mouseIsDown === true) {
      camera.translateZ(-.2 * deltaTime);
      camera.rotation.y += -state.mouseX * 3 * Math.PI / 360 * deltaTime;
    }

    if (camera.position.x < 2) {
      camera.position.x = 2;
    }
    if (camera.position.x > 8) {
      camera.position.x = 8;
    }
  }
}
