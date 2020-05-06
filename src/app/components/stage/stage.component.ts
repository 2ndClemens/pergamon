import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';

import Stats from 'three/examples/jsm/libs/stats.module.js';

import { vertexShader, fragmentShader } from '../../shader/instanced-shader';
import { MapControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Sky } from 'three/examples/jsm/objects/Sky';
import { Entity } from 'src/app/models/entity';

@Component({
  selector: 'pgm-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.scss'],
})
export class StageComponent implements OnInit {
  container;
  stats;

  camera;
  scene;
  renderer;

  controls;
  changeStep = 0;

  lastTime = 0;
  instances = 50;

  moveQ = new THREE.Quaternion(0.5, 0.5, 0.5, 0.0).normalize();
  tmpQ = new THREE.Quaternion();
  currentQ = new THREE.Quaternion();
  vertexShader = vertexShader;
  fragmentShader = fragmentShader;

  entities: Entity[] = [
    /*  { src: 'maxo-ms-aa-open.glb', transforms: [], static: false },
     { src: 'maxo-ms-aa2-open.glb', transforms: [], static: false },
     { src: 'maxo-ms-aa-closed.glb', transforms: [], static: false },
     { src: 'maxo-ms-la-open.glb', transforms: [], static: false },
     { src: 'maxo-ms-tv-open.glb', transforms: [], static: false },
     { src: 'rollenfoerderer.glb', transforms: [], static: true }, */
    { src: 'capitol.glb', transforms: [], static: true, mirror: { x: true, y: true } },
    { src: 'pedistal.glb', transforms: [], static: true, mirror: { x: false, y: false } },
    { src: 'shaft.glb', transforms: [], static: true, mirror: { x: false, y: false } },
    { src: 'chamber.glb', transforms: [], static: true, mirror: { x: false, y: false } },
    /*     { src: 'la.glb', transforms: [], static: false },
        { src: 'floor.glb', transforms: [], static: true }, */
  ];

  constructor() { }

  ngOnInit() {
    this.init();
  }

  init() {
    for (let n = 0; n < this.entities.length; n++) {
      switch (this.entities[n].src) {

        case 'capitol.glb':
          for (let i = 0; i < 2; i++) {
            const posX = i * 10;
            const posZ = 0;
            const posY = 5;
            // const rotY = Math.random() * Math.PI;

            for (let k = 0; k < 100; k++) {
              this.entities[n].transforms.push({
                rotation: { x: Math.PI, y: 0, z: 0 },

                position: { x: posX, y: posY, z: posZ + k * 1.19 },
                speed: { x: 0, y: 0, z: 0 },
              });



            }
            // move out at least 5 units from center in current direction
          }
          break;

        case 'pedistal.glb':
          for (let i = 0; i < 2; i++) {
            const posX = i * 10;
            const posZ = 0;
            const posY = 1;
            // const rotY = Math.random() * Math.PI;

            for (let k = 0; k < 100; k++) {
              this.entities[n].transforms.push({
                rotation: { x: Math.PI, y: 0, z: 0 },

                position: { x: posX, y: posY, z: posZ + k * 1.19 },
                speed: { x: 0, y: 0, z: 0 },
              });



            }
            // move out at least 5 units from center in current direction
          }
          break;

        case 'shaft.glb':
          for (let i = 0; i < 2; i++) {
            const posX = i * 10;
            const posZ = 0;
            const posY = 1;
            // const rotY = Math.random() * Math.PI;

            for (let k = 0; k < 100; k++) {
              this.entities[n].transforms.push({
                rotation: { x: 0, y: 0, z: 0 },

                position: { x: posX, y: posY, z: posZ + k * 1.19 },
                speed: { x: 0, y: 0, z: 0 },
              });



            }
            // move out at least 5 units from center in current direction
          }
          break;

        case 'chamber.glb':
          for (let i = 0; i < 1; i++) {
            const posX = -4;
            const posZ = 0;
            const posY = 1;
            // const rotY = Math.random() * Math.PI;

            for (let k = 0; k < 19; k++) {
              this.entities[n].transforms.push({
                rotation: { x: 0, y: 0, z: 0 },

                position: { x: posX, y: posY, z: posZ + 4.454 * k },
                speed: { x: 0, y: 0, z: 0 },
              });



            }
            // move out at least 5 units from center in current direction
          }
          break;

        case 'floor.glb':
          for (let i = 0; i < 10; i++) {
            const posX = i * 20 - 90;
            const posZ = 0;
            // const rotY = Math.random() * Math.PI;

            for (let k = 0; k < 10; k++) {
              this.entities[n].transforms.push({
                rotation: { x: 0, y: 0, z: 0 },
                position: { x: posX, y: 0, z: posZ + k * 20 - 90 },
                speed: { x: 0, y: 0, z: 0 },
              });
            }

            // move out at least 5 units from center in current direction
          }
          break;



        default:
          for (let i = 0; i < 600; i++) {
            const posX = Math.random() * 200 - 100;
            const posZ = Math.random() * 200 - 100;
            let speedX = 0;
            let speedZ = 0;
            if (Math.random() > 0.5) {
              speedX = Math.random() * 3 - 1.5;
            } else {
              speedZ = Math.random() * 3 - 1.5;
            }
            const rotY = (Math.round(Math.random() * 4 - 2) * Math.PI) / 2;
            this.entities[n].transforms.push({
              rotation: { x: 0, y: rotY, z: 0 },
              position: { x: posX, y: 0, z: posZ },
              speed: { x: speedX, y: 0, z: speedZ },
            });
            // move out at least 5 units from center in current direction
          }
      }
    }
    this.container = document.getElementById('container');

    this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
    this.camera.position.x = 5;
    this.camera.position.y = 1.6;
    this.camera.position.z = -5;


    this.scene = new THREE.Scene();
    // this.scene.background = new THREE.Color(0x333333);

    this.renderer = new THREE.WebGLRenderer();

    this.controls = new MapControls(this.camera, this.renderer.domElement);

    this.controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    this.controls.dampingFactor = 0.05;
    this.controls.screenSpacePanning = false;
    this.controls.minDistance = 5;
    this.controls.maxDistance = 200;
    this.controls.maxPolarAngle = Math.PI / 2.015;
    this.controls.target.set(0, 0, 60);




    const light = new THREE.DirectionalLight(0xffffff, 0.8);
    // light.rotateY(Math.PI/2);
    // scene.add(light);
    // const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    // scene.add(directionalLight);
    light.target.position.set(0, 0, 0);
    const hemilight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1.6);
    this.scene.add(hemilight);

    this.scene.add(light);

    const sky = new Sky();
    sky.scale.setScalar(10000);
    // sky.rotateY(180);
    // sky.rotation.y = 180;
    this.scene.add(sky);
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

    

    // geometry

    if (this.renderer.extensions.get('ANGLE_instanced_arrays') === null) {
      document.getElementById('notSupported').style.display = '';
      return;
    }

    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.container.appendChild(this.renderer.domElement);

    this.stats = Stats();
    this.container.appendChild(this.stats.dom);

    this.animate();
  }

  onWindowResize() {
    console.log('resize');
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate() {
    this.controls.update();
    requestAnimationFrame(this.animate.bind(this));

    this.render();
    this.stats.update();
  }

  render() {
    const time = performance.now();

    this.renderer.render(this.scene, this.camera);

    const delta = (time - this.lastTime) / 500;
    // console.log(delta);
    this.tmpQ.set(0, this.moveQ.y * delta, 0, 1).normalize();

    for (let n = 0; n < this.entities.length; n++) {
      if (!this.entities[n].static) {
        for (let i = 0; i < this.entities[n].transforms.length; i++) {
          if (
            this.entities[n].transforms[i].position.x > 100 ||
            this.entities[n].transforms[i].position.x < -100
          ) {
            if (this.entities[n].transforms[i].position.x > 100) {
              this.entities[n].transforms[i].position.x = 100;
            }
            if (this.entities[n].transforms[i].position.x < -100) {
              this.entities[n].transforms[i].position.x = -100;
            }

            this.entities[n].transforms[i].speed.x = -this.entities[n].transforms[i].speed.x;
          }
          if (
            this.entities[n].transforms[i].position.z > 100 ||
            this.entities[n].transforms[i].position.z < -100
          ) {
            if (this.entities[n].transforms[i].position.z > 100) {
              this.entities[n].transforms[i].position.z = 100;
            }
            if (this.entities[n].transforms[i].position.z < -100) {
              this.entities[n].transforms[i].position.z = -100;
            }
            this.entities[n].transforms[i].speed.z = -this.entities[n].transforms[i].speed.z;
          }

          this.entities[n].transforms[i].position.x +=
            this.entities[n].transforms[i].speed.x * delta;
          this.entities[n].transforms[i].position.z +=
            this.entities[n].transforms[i].speed.z * delta;
        }
      }
    }

    /* for (let i = 0, ul = this.orientations.count; i < ul; i++) {
      const index = i * this.instanceBuffer.stride + this.orientations.offset;
      this.currentQ.set(
        this.instanceBuffer.array[index],
        this.instanceBuffer.array[index + 1],
        this.instanceBuffer.array[index + 2],
        this.instanceBuffer.array[index + 3],
      );
      this.currentQ.multiply(this.tmpQ);

      this.orientations.setXYZW(
        i,
        this.currentQ.x,
        this.currentQ.y,
        this.currentQ.z,
        this.currentQ.w,
      );

      this.instanceBuffer.needsUpdate = true;

    } */
    this.lastTime = time;
    this.changeStep += 1;
  }
}
