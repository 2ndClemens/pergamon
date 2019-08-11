import { Component, OnInit, Input } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { InstancedMesh } from '../../instanced/mesh';

@Component({
  selector: 'app-chamber',
  templateUrl: './chamber.component.html',
  styleUrls: ['./chamber.component.scss']
})
export class ChamberComponent implements OnInit {
  @Input() scene: THREE.Scene;
  constructor() {}

  ngOnInit() {
    const material = new THREE.MeshStandardMaterial({
      color: 0x888888,
      metalness: 0.1,
      roughness: 0.4
    });
    const loader = new GLTFLoader();
    loader.load('../../../assets/gltf/chamber.glb', (gltf: any) => {
      const mergeGeometry = new THREE.Geometry();
      const g1 = new THREE.Geometry().fromBufferGeometry(
        gltf.scene.children[0].geometry
      );
      const mesh = new InstancedMesh(
        100,
        new THREE.BufferGeometry().fromGeometry(mergeGeometry),
        material
      );
      for (let n = 0; n < mesh.instances.length; n++) {
        mesh.instances[n].position.x = 2;
        mesh.instances[n].position.y = 9.7;
        mesh.instances[n].position.z = -20 * n;
        mesh.instances[n].scale.x = 0.1;
        mesh.instances[n].scale.y = 0.1;
        mesh.instances[n].scale.z = 0.1;
      }
      mesh.updateInstances();
      this.scene.add(mesh);
    });

  }
}
