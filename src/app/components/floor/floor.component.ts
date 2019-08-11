import { Component, OnInit, Input } from '@angular/core';
import * as THREE from 'three';
@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.scss']
})
export class FloorComponent implements OnInit {
  @Input() scene: THREE.Scene;
  constructor() {}

  ngOnInit() {
    const texture = new THREE.TextureLoader().load(
      '../../../assets/png/mosaic.jpg'
    );
    texture.repeat.setX(20);
    texture.repeat.setY(20);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;

    // immediately use the texture for material creation
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const geometry = new THREE.PlaneBufferGeometry(100, 100);
    geometry.rotateX(-Math.PI / 2);
    const floor = new THREE.Mesh(geometry, material);
    this.scene.add(floor);
  }
}
