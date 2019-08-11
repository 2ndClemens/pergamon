import { Component, OnInit, Input } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
import { InstancedMesh } from '../../instanced/mesh';
// declare const require: any;
// import * as InstancedMesh from 'three-instanced-mesh'
// require('three-instanced-mesh')(THREE);

@Component({
  selector: 'app-gltf-object',
  templateUrl: './gltf-object.component.html',
  styleUrls: ['./gltf-object.component.scss']
})
export class GltfObjectComponent implements OnInit {
  @Input() scene: THREE.Scene;

  constructor() {}

  ngOnInit() {
    this.buildShaft().then((shaftGeometry: THREE.Geometry) => {
      const material = new THREE.MeshStandardMaterial({
        color: 0x888888,
        metalness: 0.1,
        roughness: 0.4
      });
      shaftGeometry.scale(0.0254, 0.0254, 0.0254);
      shaftGeometry.translate(0,-97,0)
      // const lathe = new THREE.Mesh(shaftGeometry, material);


      // this.scene.add(lathe);

      // load a SVG resource

      const loader = new GLTFLoader();
      loader.load('../../../assets/gltf/kapitell.glb', (gltf: any) => {
        const mergeGeometry = new THREE.Geometry();
        const g1 = new THREE.Geometry().fromBufferGeometry(
          gltf.scene.children[0].geometry
        );
        // const matrix = new THREE.Matrix4();

        mergeGeometry.merge(g1);
        g1.rotateY(Math.PI);
        mergeGeometry.merge(g1);
        // matrix.set(-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        g1.scale(-1, 1, 1);
        this.flipNormals(g1);
        mergeGeometry.merge(g1);
        g1.rotateY(Math.PI);
        mergeGeometry.merge(g1);

        mergeGeometry.mergeVertices();
        mergeGeometry.merge(shaftGeometry);
        // mergeGeometry.computeVertexNormals(true);
        console.log(gltf.scene.children[0].matrix);

        // this.scene.add(gltf.scene.children[0]);
        // const geometry = new THREE.BoxBufferGeometry(1, 1, 1);

        // create 4096 instances of this mesh
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

        /* gltf.animations; // Array<THREE.AnimationClip>
      gltf.scene; // THREE.Scene
      gltf.scenes; // Array<THREE.Scene>
      gltf.cameras; // Array<THREE.Camera>
      gltf.asset; // Object */
      });
    });
    // geometry to be instanced
    /* const boxGeometry = new THREE.BoxBufferGeometry(2, 2, 2, 1, 1, 1);

    // material that the geometry will use
    const material = new THREE.MeshPhongMaterial();

    //the instance group
    const THREE2: any = THREE;
    const cluster = new THREE2.InstancedMesh(
      boxGeometry, //this is the same
      material,
      1000, //instance count
      false, //is it dynamic
      false, //does it have color
      true //uniform scale, if you know that the placement function will not do a non-uniform scale, this will optimize the shader
    );

    const _v3 = new THREE.Vector3();
    const _q = new THREE.Quaternion();

    for (var i = 0; i < 10000; i++) {
      cluster.setQuaternionAt(i, _q);
      cluster.setPositionAt(
        i,
        _v3.set(Math.random()*100, Math.random()*100, Math.random())
      );
      cluster.setScaleAt(i, _v3.set(1, 1, 1));
    }

    this.scene.add(cluster); */
    /*  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    this.scene.add(cube); */
  }

  buildShaft() {
    return new Promise((resolve, reject) => {
      const svgloader = new SVGLoader();
      svgloader.load(
        // resource URL
        '../../../assets/svg/column.svg',
        // called when the resource is loaded
        data => {
          const paths = data.paths;
          console.log(paths[0].currentPath.curves[0].getPoints(1));
          const mergeGeometry = new THREE.Geometry();
          for (let m = 0; m < paths[0].currentPath.curves.length; m++) {
            const currentPath = paths[0].currentPath.curves[m].getPoints(2);
            // currentPath.translateY(1);
            for (let r = 0; r < currentPath.length; r++) {
              currentPath[r].y = -1 * currentPath[r].y;
            }
            const geometry = new THREE.LatheGeometry(currentPath, 16);
            mergeGeometry.merge(geometry);
          }

          mergeGeometry.mergeVertices();
          resolve(mergeGeometry);

          /* var group = new THREE.Group();

      for (var i = 0; i < paths.length; i++) {
        var path = paths[i];

        var material = new THREE.MeshBasicMaterial({
          color: path.color,
          side: THREE.DoubleSide,
          depthWrite: false
        });

        var shapes = path.toShapes(true);

        for (var j = 0; j < shapes.length; j++) {
          var shape = shapes[j];
          var geometry = new THREE.ShapeBufferGeometry(shape);
          var mesh = new THREE.Mesh(geometry, material);
          group.add(mesh);
        }
      }

      scene.add(group); */
        },
        // called when loading is in progresses
        xhr => {
          console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        // called when loading has errors
        error => {
          console.log('An error happened');
        }
      );
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
  pathToPolygon(path, samples) {
    if (!samples) {
      samples = 0;
    }

    const poly = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'polygon'
    );

    // Put all path segments in a queue
    const segs = [];
    const s = path.pathSegList;
    for (let i2 = s.numberOfItems - 1; i2 >= 0; --i2) {
      segs[i2] = s.getItem(i2);
    }
    const segments = segs.concat();

    var seg,
      lastSeg,
      points = [],
      x,
      y;
    var addSegmentPoint = function(s) {
      if (s.pathSegType == SVGPathSeg.PATHSEG_CLOSEPATH) {
      } else {
        if (s.pathSegType % 2 == 1 && s.pathSegType > 1) {
          // All odd-numbered path types are relative, except PATHSEG_CLOSEPATH (1)
          x += s.x;
          y += s.y;
        } else {
          x = s.x;
          y = s.y;
        }
        var lastPoint = points[points.length - 1];
        if (!lastPoint || x != lastPoint[0] || y != lastPoint[1])
          points.push([x, y]);
      }
    };

    for (
      let d = 0, len = path.getTotalLength(), step = len / samples;
      d <= len;
      d += step
    ) {
      var seg = segments[path.getPathSegAtLength(d)];
      var pt = path.getPointAtLength(d);
      if (seg != lastSeg) {
        lastSeg = seg;
        while (segs.length && segs[0] != seg) addSegmentPoint(segs.shift());
      }
      var lastPoint = points[points.length - 1];
      if (!lastPoint || pt.x != lastPoint[0] || pt.y != lastPoint[1])
        points.push([pt.x, pt.y]);
    }

    for (let i = 0, len = segs.length; i < len; ++i) {
      addSegmentPoint(segs[i]);
    }
    for (let i = 0, len = points.length; i < len; ++i) {
      points[i] = points[i].join(',');
    }
    poly.setAttribute('points', points.join(' '));
    return points;
  }
}