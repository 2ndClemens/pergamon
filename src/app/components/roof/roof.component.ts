import { Component, OnInit, Input } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

@Component({
  selector: 'app-roof',
  templateUrl: './roof.component.html',
  styleUrls: ['./roof.component.scss']
})
export class RoofComponent implements OnInit {
  @Input() scene: THREE.Scene;
  constructor() {}

  ngOnInit() {
    const loader = new GLTFLoader();
    loader.load('./assets/gltf/roof.glb', (gltf: any) => {
      // const mergeGeometry = new THREE.Geometry();
/*       const geometry = new THREE.Geometry().fromBufferGeometry(
        gltf.scene.children[0].geometry
      ); */
      /* const material = gltf.scene.children[0].material;
      const mesh = new THREE.Mesh(geometry, material); */
      const mesh = gltf.scene.children[0];
      mesh.position.x = -9.85;
      // console.log(mesh);
      mesh.material.normalMap.repeat.setX(100);
      mesh.material.normalMap.repeat.setY(10);
      mesh.material.normalMap.wrapS = THREE.RepeatWrapping;
      mesh.material.normalMap.wrapT = THREE.RepeatWrapping;
      this.scene.add(mesh);
    });
  }
}
