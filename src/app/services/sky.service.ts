import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { Sky } from 'three/examples/jsm/objects/Sky';

@Injectable({
  providedIn: 'root'
})
export class SkyService {

  constructor() { }
  public makeSky(scene) {
    const light = new THREE.DirectionalLight(0xffffff, 0.8);
    light.target.position.set(0, 0, 0);
    const hemilight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1.1);
    scene.add(hemilight);

    scene.add(light);

    const sky = new Sky();
    sky.scale.setScalar(10000);
    scene.add(sky);
    const uniforms = sky.material.uniforms;
    uniforms.turbidity.value = 10;
    uniforms.rayleigh.value = 2;
    uniforms.luminance.value = 1;
    uniforms.mieCoefficient.value = 0.005;
    uniforms.mieDirectionalG.value = 0.8;
    const parameters = {
      distance: 400,
      inclination: 0.15,
      azimuth: 0.3
    };

    const theta = Math.PI * (parameters.inclination - 0.5);
    const phi = 2 * Math.PI * (parameters.azimuth - 0.5);

    light.position.x = parameters.distance * Math.cos(phi);
    light.position.y = parameters.distance * Math.sin(phi) * Math.sin(theta);
    light.position.z = parameters.distance * Math.sin(phi) * Math.cos(theta);
    sky.material.uniforms.sunPosition.value = light.position.copy(
      light.position
    );
    light.position.z = -parameters.distance * Math.sin(phi) * Math.cos(theta);

  }
}
