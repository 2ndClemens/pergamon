import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { ControlStateService } from './control-state.service';
import { Vector3 } from 'yuka';

@Injectable({
  providedIn: 'root'
})
export class CameraPositionService {
  direction = new Vector3();

  constructor(public controlStateService: ControlStateService) { }


  public updateCamera(player: any, deltaTime: number) {
    const state = this.controlStateService.getControlState();

    //player.getDirection(this.direction);

    //console.log(this.direction);
    this.direction.x = Math.sin(player.rotation.y);
    this.direction.z = Math.cos(player.rotation.y);
    const slowdown = 5;

    if (state.forward === true) {
      player.position.z -= this.direction.z / slowdown * deltaTime;
      player.position.x -= this.direction.x / slowdown * deltaTime;
    }
    if (state.backwards === true) {
      player.position.z += this.direction.z / slowdown * deltaTime;
      player.position.x += this.direction.x / slowdown * deltaTime;
    }
    if (state.right === true) {
      player.rotation.y -= 6 * Math.PI / 360 * deltaTime;
    }
    if (state.left === true) {
      player.rotation.y += 6 * Math.PI / 360 * deltaTime;
    }

    if (state.mouseIsDown === true) {
      player.position.z -= this.direction.z / slowdown * deltaTime;
      player.position.x -= this.direction.x / slowdown * deltaTime;
      player.rotation.y += -state.mouseX * 3 * Math.PI / 360 * deltaTime;
    }

    /* if (player.position.x < 2) {
      player.position.x = 2;
    }
    if (player.position.x > 8) {
      player.position.x = 8;
    } */
  }
}
