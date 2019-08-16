import { Component, OnInit, Input } from '@angular/core';
import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';

@Component({
  selector: 'app-architrave',
  templateUrl: './architrave.component.html',
  styleUrls: ['./architrave.component.scss']
})
export class ArchitraveComponent implements OnInit {
  @Input() scene: THREE.Scene;
  constructor() {}

  ngOnInit() {
    const svgloader = new SVGLoader();
    svgloader.load(
      // resource URL
      './assets/svg/architrave.svg',
      // called when the resource is loaded
      data => {
        const paths = data.paths;
        for (let m = 0; m < paths[0].currentPath.curves.length; m++) {
          const currentPath = paths[0].subPaths[0].curves[m].getPoints(2);
          // currentPath.translateY(1);
          // for (let r = 0; r < currentPath.length; r++) {
          paths[0].subPaths[0].curves[m].v1.y =
            -1 * paths[0].subPaths[0].curves[m].v1.y;
          paths[0].subPaths[0].curves[m].v2.y =
            -1 * paths[0].subPaths[0].curves[m].v2.y;
          paths[0].subPaths[0].curves[m].v3.y =
            -1 * paths[0].subPaths[0].curves[m].v3.y;
          paths[0].subPaths[0].curves[m].v0.y =
            -1 * paths[0].subPaths[0].curves[m].v0.y;
          // }
        }
        console.log(paths[0]);
        const extrudeSettings = {
          steps: 2,
          depth: 16000,
          bevelEnabled: false
        };

        const geometry = new THREE.ExtrudeBufferGeometry(
          paths[0].toShapes(true, true),
          extrudeSettings
        );
        geometry.scale(0.001, 0.001, 0.001);
        const material = new THREE.MeshStandardMaterial({
          color: 0x888888,
          metalness: 0.1,
          roughness: 0.4
        });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.y = 4.335;
        mesh.position.x = -0.2;
        mesh.position.z = -16;
        this.scene.add(mesh);
      }
    );
  }
}
