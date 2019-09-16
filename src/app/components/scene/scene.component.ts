import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener
} from '@angular/core';
import * as THREE from 'three';
import { WEBVR } from 'three/examples/jsm/vr/WebVR.js';
declare const require: any;
const Sky: any = require('./sky')(THREE);
// import { MapControls } from 'three/examples/jsm/controls/OrbitControls.js';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements OnInit {
  scene = new THREE.Scene();
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  raycaster = new THREE.Raycaster();
  // controls: MapControls;
  columnPositions: THREE.Vector3[] = [];
  debugMessage: string;
  public mouseIsDown: boolean;
  private mouse = new THREE.Vector2(0, 0);
  private center = new THREE.Vector2(0, 0);

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  @ViewChild('canvas', { static: true }) private canvasRef: ElementRef;
  @HostListener('window:resize', ['$event'])
  onResizeWindow() {
    this.onResize();
  }

  constructor() {}

  ngOnInit() {

    for (let n = 0; n < 100; n++) {
      this.columnPositions.push(new THREE.Vector3(0, 4.335, -2.645 * n));
      this.columnPositions.push(new THREE.Vector3(10, 4.335, -2.645 * n));
    }

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      // precision: 'mediump',
      alpha: false
    });
    this.renderer.setClearColor(0xffffff, 1);
    document.body.appendChild(WEBVR.createButton(this.renderer, null));
    this.renderer.vr.enabled = true;

    this.camera = new THREE.PerspectiveCamera(
      40,
      this.canvas.width / this.canvas.height,
      1,
      1000
    );

    /* this.controls = new MapControls(this.camera);
    //controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)
    this.controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    this.controls.dampingFactor = 0.05;
    this.controls.screenSpacePanning = false;
    this.controls.minDistance = 5;
    this.controls.maxDistance = 500;
    this.controls.maxPolarAngle = Math.PI / 2; */

    this.camera.position.x = 5;
    this.camera.position.y = 2;
    this.camera.position.z = 5;
    // this.controls.target.setY(2);

    const light = new THREE.DirectionalLight(0xffffff, 0.8);
    // light.rotateY(Math.PI/2);
    // scene.add(light);
    // const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    // scene.add(directionalLight);
    light.target.position.set(0, 0, 0);
    const hemilight = new THREE.HemisphereLight(0xffffbb, 0x080820, 2.5);
    this.scene.add(hemilight);

    this.scene.add(light);

    const sky = new Sky();
    sky.scale.setScalar(10000);
    // sky.rotateY(180);
    sky.rotation.y = 180;
    // this.scene.add(sky);
    const uniforms = sky.material.uniforms;
    uniforms.turbidity.value = 10;
    uniforms.rayleigh.value = 2;
    uniforms.luminance.value = 1;
    uniforms.mieCoefficient.value = 0.005;
    uniforms.mieDirectionalG.value = 0.8;
    const parameters = {
      distance: 400,
      inclination: 0.1,
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

    console.log(sky);

    this.onResize();
    this.animate();
  }

  animate() {
    this.renderer.setAnimationLoop(this.animate.bind(this));
    this.camera.updateMatrix();
    this.camera.updateProjectionMatrix();
    // this.controls.update();

    // update the picking ray with the camera and mouse position
    this.raycaster.setFromCamera(this.center, this.camera);

    // calculate objects intersecting the picking ray
    const intersects = this.raycaster.intersectObjects(
      this.scene.children,
      true
    );

    if (this.mouseIsDown) {
      if (intersects.length > 0) {
        console.log(intersects[0].distance);
        if (intersects[0].distance > 2) {
          this.camera.translateZ(-0.2);
        }
      } else {
        this.camera.translateZ(-0.2);
      }
      this.camera.rotateY(-this.mouse.x / 50);
    }

    /* for (let i = 0; i < intersects.length; i++) {
    console.log(intersects[i].distance);
    // intersects[i].object.material.color.set(0xff0000);
    } */

    this.renderer.render(this.scene, this.camera);
  }

  private getAspectRatio() {
    return window.innerWidth / window.innerHeight;
  }

  public onResize() {
    this.camera.aspect = this.getAspectRatio();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.camera.zoom = window.innerWidth / window.innerHeight / 1.7;
    this.camera.updateProjectionMatrix();
    // this.center.x = window.innerWidth/2;
    // this.center.y = window.innerHeight/2;
  }

  pointerDown(event: PointerEvent) {
    this.debugMessage = JSON.stringify(event);
    // event.preventDefault();
    this.mouseIsDown = true;
    this.debugMessage = 'pd:' + JSON.stringify(event.clientX);
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }

  pointerUp(event: PointerEvent) {
    this.debugMessage = JSON.stringify(event);
    // event.preventDefault();
    this.mouseIsDown = false;
  }

  onPointerMove(event: PointerEvent) {
    // this.debugMessage = JSON.stringify(event);
    // event.preventDefault();
    // do nothing when mouse is not yet available
    if (!this.mouse) {
      return;
    }

    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }
  onPinch(event) {
    // don't remove, these are important to disable gestures on iOS;
  }
  onPinchStart(event) {
    // don't remove, these are important to disable gestures on iOS;
  }
  onPanMove(event) {
    // don't remove, these are important to disable gestures on iOS;
  }
}
