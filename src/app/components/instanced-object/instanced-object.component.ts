import { Component, OnInit, Input, OnChanges } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { vertexShader, fragmentShader } from '../../shader/instanced-shader';
import { ObjectTransform } from 'src/app/models/object-transform';

@Component({
  selector: 'pgm-instanced-object',
  templateUrl: './instanced-object.component.html',
  styleUrls: ['./instanced-object.component.scss'],
})
export class InstancedObjectComponent implements OnInit, OnChanges {
  @Input() scene;
  @Input() renderer;
  @Input() changeStep;
  instances;
  @Input() src;
  @Input() mirror;
  @Input() transforms: ObjectTransform[];
  @Input() lights = true;
  orientations;
  offsets;
  // speeds;
  instanceBuffer;
  instanceBufferSpeed;
  vertexShader = vertexShader;
  fragmentShader = fragmentShader;
  constructor() { }

  ngOnInit() {
    this.init();
  }

  ngOnChanges() {
    if (this.instanceBuffer) {
      for (let i = 0, ul = this.instances; i < ul; i++) {
        // move out at least 5 units from center in current direction
        this.offsets.setXYZ(
          i,
          this.transforms[i].position.x,
          this.transforms[i].position.y,
          this.transforms[i].position.z,
        );
      }
      this.instanceBuffer.needsUpdate = true;
    }
  }

  init() {
    this.instances = this.transforms.length;
    const loader = new GLTFLoader().setPath('./assets/models/');
    loader.load(this.src, (gltf: any) => {
      // console.log(gltf.scene);
      // const loadedGeometry = gltf.scene.children[0].geometry;

      const g1 = new THREE.Geometry().fromBufferGeometry(
        gltf.scene.children[0].geometry
      );
      // const matrix = new THREE.Matrix4();
      const mergeGeometry = new THREE.Geometry();
      mergeGeometry.merge(g1);
      if (this.mirror.x) {
        g1.rotateY(Math.PI);
        mergeGeometry.merge(g1);
        // matrix.set(-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        g1.scale(-1, 1, 1);
        this.flipNormals(g1);
        mergeGeometry.merge(g1);
        g1.rotateY(Math.PI);
        mergeGeometry.merge(g1);
      }

      const loadedMaterial = gltf.scene.children[0].material;

      if (!this.lights) {

        const geometry = new THREE.InstancedBufferGeometry().fromGeometry(mergeGeometry);

        // per instance data
        this.instanceBuffer = new THREE.InstancedInterleavedBuffer(
          new Float32Array(this.instances * 8),
          8,
          1,
        ).setUsage(THREE.DynamicDrawUsage);
        this.instanceBufferSpeed = new THREE.InstancedInterleavedBuffer(
          new Float32Array(this.instances * 8),
          8,
          1,
        ).setUsage(THREE.DynamicDrawUsage);
        this.offsets = new THREE.InterleavedBufferAttribute(this.instanceBuffer, 3, 0);
        // this.speeds = new THREE.InterleavedBufferAttribute(this.instanceBufferSpeed, 3, 0);

        const vector = new THREE.Quaternion();
        for (let i = 0, ul = this.instances; i < ul; i++) {
          const x = this.transforms[i].position.x;
          const y = this.transforms[i].position.y;
          const z = this.transforms[i].position.z;

          // move out at least 5 units from center in current direction
          this.offsets.setXYZ(i, x, y, z);

          // this.speeds.setXYZ(i, x * 0.01, 0, z * 0.01);
        }

        geometry.setAttribute('offset', this.offsets); // per mesh translation

        this.orientations = new THREE.InterleavedBufferAttribute(this.instanceBuffer, 4, 4);

        for (let i = 0, ul = this.orientations.count; i < ul; i++) {
          vector.setFromEuler(
            new THREE.Euler(
              this.transforms[i].rotation.x,
              this.transforms[i].rotation.y,
              this.transforms[i].rotation.z
            ),
          );
          // vector.normalize();
          // this.orientations.setXYZW(i, 0, vector.y, 0, 1);

          this.orientations.setXYZW(i, vector.x, vector.y, vector.z, vector.w);
          // this.orientations.setY( i, vector.y );
        }

        geometry.setAttribute('orientation', this.orientations); // per mesh orientation

        // material
        const texture = loadedMaterial.map;

        if (texture) { texture.anisotropy = this.renderer.capabilities.getMaxAnisotropy(); }

        const material = new THREE.RawShaderMaterial({
          uniforms: {
            map: { value: texture },
          },
          vertexShader: this.vertexShader,
          fragmentShader: this.fragmentShader,
          side: THREE.DoubleSide,
          transparent: false,

        });


        const mesh = new THREE.Mesh(geometry, material);
        mesh.frustumCulled = false;
        this.scene.add(mesh);
      } else {

        var count = this.transforms.length;

        var mesh = new THREE.InstancedMesh(mergeGeometry, loadedMaterial, count);

        var dummy = new THREE.Object3D();

        for (var i = 0; i < count; i++) {

          dummy.position.set(
            this.transforms[i].position.x,
            this.transforms[i].position.y,
            this.transforms[i].position.z,
          );

          dummy.rotation.set(
            this.transforms[i].rotation.x,
            this.transforms[i].rotation.y,
            this.transforms[i].rotation.z,
          );

          dummy.updateMatrix();

          mesh.setMatrixAt(i, dummy.matrix);

        }

      }
      this.scene.add(mesh);
    });
  }

  flipNormals(geometry) {
    console.log(geometry);
    let temp = 0;
    // let face;

    // flip every vertex normal in geometry by multiplying normal by -1
    for (let i = 0; i < geometry.faces.length; i++) {
      const face = geometry.faces[i];
      face.normal.x = -1 * face.normal.x;
      face.normal.y = 1 * face.normal.y;
      face.normal.z = 1 * face.normal.z;

      face.vertexNormals[0].x = -1 * face.vertexNormals[0].x;
      face.vertexNormals[0].y = 1 * face.vertexNormals[0].y;
      face.vertexNormals[0].z = 1 * face.vertexNormals[0].z;

      face.vertexNormals[1].x = -1 * face.vertexNormals[1].x;
      face.vertexNormals[1].y = 1 * face.vertexNormals[1].y;
      face.vertexNormals[1].z = 1 * face.vertexNormals[1].z;

      face.vertexNormals[2].x = -1 * face.vertexNormals[2].x;
      face.vertexNormals[2].y = 1 * face.vertexNormals[2].y;
      face.vertexNormals[2].z = 1 * face.vertexNormals[2].z;

      temp = face.vertexNormals[0];
      face.vertexNormals[0] = face.vertexNormals[2];
      face.vertexNormals[2] = temp;
    }

    /*     for (let i = 0; i < geometry.vertices.length; i++) {
      const vertex = geometry.vertices[i];
      vertex.normal.x = -1 * vertex.normal.x;
      vertex.normal.y = -1 * vertex.normal.y;
      vertex.normal.z = -1 * vertex.normal.z;
    } */

    // change face winding order
    for (let i = 0; i < geometry.faces.length; i++) {
      const face = geometry.faces[i];
      temp = face.a;
      face.a = face.c;
      face.c = temp;
    }

    // flip UV coordinates

    const faceVertexUvs = geometry.faceVertexUvs[0];
    for (let i = 0; i < faceVertexUvs.length; i++) {
      temp = faceVertexUvs[i][0];
      faceVertexUvs[i][0] = faceVertexUvs[i][2];
      faceVertexUvs[i][2] = temp;
    }

    geometry.verticesNeedUpdate = true;
    geometry.normalsNeedUpdate = true;
    geometry.vertexNormalsNeedUpdate = true;

    /* geometry.computeFaceNormals();
    geometry.computeVertexNormals(); */
    geometry.computeBoundingSphere();
  }
}
