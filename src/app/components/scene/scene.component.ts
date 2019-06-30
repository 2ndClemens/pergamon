import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener
} from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements OnInit {
  scene = new THREE.Scene();
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;

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
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: false,
      // precision: 'mediump',
      alpha: false
    });
    this.renderer.setClearColor(0xffffff, 1);

    this.camera = new THREE.PerspectiveCamera(
      40,
      this.canvas.width / this.canvas.height,
      1,
      1000
    );
    this.camera.position.x = 0;
    this.camera.position.y = 0;
    this.camera.position.z = 50;

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    this.scene.add(cube);
    this.onResize();
    this.animate();
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));

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
  }
}
