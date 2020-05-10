import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';

import Stats from 'three/examples/jsm/libs/stats.module.js';

// import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls';
// import { MapControls } from 'three/examples/jsm/controls/OrbitControls';
// import { CannonPhysics } from 'three/examples/jsm/physics/CannonPhysics.js';

import { Entity } from 'src/app/models/entity';
import { EntityService } from 'src/app/services/entity.service';
import { SkyService } from 'src/app/services/sky.service';
import { CameraPositionService } from 'src/app/services/camera-position.service';

@Component({
  selector: 'pgm-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.scss'],
})
export class StageComponent implements OnInit {
  container;
  stats: Stats;

  camera: THREE.PerspectiveCamera;
  scene: THREE.Scene;
  renderer: THREE.WebGLRenderer;
  entities: Entity[];

  // controls;
  clock: THREE.Clock;



  constructor(public entityService: EntityService, public skyService: SkyService, public cameraPositionService: CameraPositionService) { }

  ngOnInit() {
    this.entityService.createEntities();
    this.entities = this.entityService.getEntities();
    this.init();
  }

  init() {
    this.clock = new THREE.Clock();

    this.container = document.getElementById('container');

    this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
    this.camera.position.x = 5;
    this.camera.position.y = 1.6;
    this.camera.position.z = -5;
    // this.camera.rotation.y = Math.PI;


    this.scene = new THREE.Scene();

    this.renderer = new THREE.WebGLRenderer();



    /*  this.controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
        this.controls.dampingFactor = 0.05;
        this.controls.screenSpacePanning = false;
        this.controls.minDistance = 5;
        this.controls.maxDistance = 200;
        this.controls.maxPolarAngle = Math.PI / 2.015;
        this.controls.target.set(0, 0, 60);
     */



    this.skyService.makeSky(this.scene);

    if (this.renderer.extensions.get('ANGLE_instanced_arrays') === null) {
      document.getElementById('notSupported').style.display = '';
      return;
    }

    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.container.appendChild(this.renderer.domElement);

    this.stats = Stats();
    this.container.appendChild(this.stats.dom);

/*     this.controls = new FirstPersonControls(this.camera, this.renderer.domElement);
    this.controls.movementSpeed = 10;
    this.controls.lookSpeed = 0.1;
    this.controls.lookAt(0, 0, 0);

    this.controls.constrainVertical = true;
    this.controls.verticalMax = Math.PI * .55;
    this.controls.verticalMin = Math.PI * .35; */


    this.animate();
  }

  onWindowResize() {
    console.log('resize');
    // this.controls.handleResize();
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));

    this.render();

  }

  render() {
    this.stats.update();
    // this.controls.update(this.clock.getDelta());
    this.cameraPositionService.updateCamera(this.camera);
    this.renderer.render(this.scene, this.camera);
  }
}
