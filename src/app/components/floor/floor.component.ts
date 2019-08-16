import { Component, OnInit, Input } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.scss']
})
export class FloorComponent implements OnInit {
  @Input() scene: THREE.Scene;
  constructor() {}

  ngOnInit() {
    /* const texture = new THREE.TextureLoader().load(
      '../../../assets/png/mosaic.jpg'
    );
    texture.repeat.setX(20);
    texture.repeat.setY(20);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;

    const material = new THREE.MeshBasicMaterial({ map: texture });
    const geometry = new THREE.PlaneBufferGeometry(100, 100);
    geometry.rotateX(-Math.PI / 2);
    const floor = new THREE.Mesh(geometry, material);
    this.scene.add(floor); */

    const loader = new GLTFLoader();
    loader.load('../../../assets/gltf/road.glb', (gltf: any) => {
      // const mergeGeometry = new THREE.Geometry();

      const mesh = gltf.scene.children[0];
     /*  mesh.position.x = -13.85;

      mesh.material.normalMap.repeat.setX(100);
      mesh.material.normalMap.repeat.setY(10);
      mesh.material.normalMap.wrapS = THREE.RepeatWrapping;
      mesh.material.normalMap.wrapT = THREE.RepeatWrapping; */
      this.scene.add(mesh);
    });
  }
}
