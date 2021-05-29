(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Clemens\Documents\pergamon\src\main.ts */"zUnb");


/***/ }),

/***/ "1aBA":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/stage/stage.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"container\" (window:resize)=\"onWindowResize();\" draggable=\"false\"></div>\r\n<pgm-controls draggable=\"false\"></pgm-controls>\r\n<!-- <div  draggable=\"false\" style=\"position: absolute; top: 20px; right: 20px;\">{{camera.position.x}}</div> -->\r\n\r\n<pgm-instanced-object *ngFor=\"let entity of entities\" [scene]=\"scene\" [renderer]=\"renderer\" [src]=\"entity.src\" [transform]=\"entity.transform\"\r\n  [transforms]=\"entity.transforms\" [mirror]=\"entity.mirror\">\r\n</pgm-instanced-object>");

/***/ }),

/***/ "1w+u":
/*!*************************************************************!*\
  !*** ./src/app/components/controls/controls.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250cm9scy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "7VzK":
/*!***************************************************************************!*\
  !*** ./src/app/components/instanced-object/instanced-object.component.ts ***!
  \***************************************************************************/
/*! exports provided: InstancedObjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstancedObjectComponent", function() { return InstancedObjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_instanced_object_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./instanced-object.component.html */ "JGKc");
/* harmony import */ var _instanced_object_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instanced-object.component.scss */ "rCu5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ "Womt");
/* harmony import */ var three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader.js */ "NK00");
/* harmony import */ var three_examples_jsm_utils_BufferGeometryUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three/examples/jsm/utils/BufferGeometryUtils */ "kDdP");
/* harmony import */ var _shader_instanced_shader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shader/instanced-shader */ "XhG+");








let InstancedObjectComponent = class InstancedObjectComponent {
    constructor() {
        this.lights = true;
        //instanceBufferSpeed;
        this.vertexShader = _shader_instanced_shader__WEBPACK_IMPORTED_MODULE_7__["vertexShader"];
        this.fragmentShader = _shader_instanced_shader__WEBPACK_IMPORTED_MODULE_7__["fragmentShader"];
    }
    ngOnInit() {
        this.init();
    }
    ngOnChanges() {
        if (this.instanceBuffer) {
            for (let i = 0, ul = this.instances; i < ul; i++) {
                // move out at least 5 units from center in current direction
                this.offsets.setXYZ(i, this.transforms[i].position.x, this.transforms[i].position.y, this.transforms[i].position.z);
            }
            this.instanceBuffer.needsUpdate = true;
        }
    }
    init() {
        this.instances = this.transforms.length;
        const loader = new three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_5__["GLTFLoader"]().setPath('./assets/models/');
        loader.load(this.src, (gltf) => {
            // console.log(gltf.scene);
            // const loadedGeometry = gltf.scene.children[0].geometry;
            const g1 = gltf.scene.children[0].geometry;
            // const matrix = new THREE.Matrix4();
            let mergeGeometry = new three__WEBPACK_IMPORTED_MODULE_4__["BufferGeometry"]();
            mergeGeometry = three_examples_jsm_utils_BufferGeometryUtils__WEBPACK_IMPORTED_MODULE_6__["BufferGeometryUtils"].mergeBufferGeometries([g1]);
            if (this.mirror.x) {
                g1.rotateY(Math.PI);
                mergeGeometry = three_examples_jsm_utils_BufferGeometryUtils__WEBPACK_IMPORTED_MODULE_6__["BufferGeometryUtils"].mergeBufferGeometries([mergeGeometry, g1]);
                // matrix.set(-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                g1.scale(-1, 1, 1);
                // this.flipNormals(g1);
                mergeGeometry = three_examples_jsm_utils_BufferGeometryUtils__WEBPACK_IMPORTED_MODULE_6__["BufferGeometryUtils"].mergeBufferGeometries([mergeGeometry, g1]);
                g1.rotateY(Math.PI);
                mergeGeometry = three_examples_jsm_utils_BufferGeometryUtils__WEBPACK_IMPORTED_MODULE_6__["BufferGeometryUtils"].mergeBufferGeometries([mergeGeometry, g1]);
            }
            const loadedMaterial = gltf.scene.children[0].material;
            /* const loadedMaterial = new THREE.MeshBasicMaterial();
            loadedMaterial.map = gltf.scene.children[0].material.map; */
            if (!this.lights) {
                const geometry = mergeGeometry;
                // per instance data
                this.instanceBuffer = new three__WEBPACK_IMPORTED_MODULE_4__["InstancedInterleavedBuffer"](new Float32Array(this.instances * 8), 8, 1).setUsage(three__WEBPACK_IMPORTED_MODULE_4__["DynamicDrawUsage"]);
                /* this.instanceBufferSpeed = new THREE.InstancedInterleavedBuffer(
                  new Float32Array(this.instances * 8),
                  8,
                  1,
                ).setUsage(THREE.DynamicDrawUsage); */
                this.offsets = new three__WEBPACK_IMPORTED_MODULE_4__["InterleavedBufferAttribute"](this.instanceBuffer, 3, 0);
                // this.speeds = new THREE.InterleavedBufferAttribute(this.instanceBufferSpeed, 3, 0);
                const vector = new three__WEBPACK_IMPORTED_MODULE_4__["Quaternion"]();
                for (let i = 0, ul = this.instances; i < ul; i++) {
                    const x = this.transforms[i].position.x;
                    const y = this.transforms[i].position.y;
                    const z = this.transforms[i].position.z;
                    // move out at least 5 units from center in current direction
                    this.offsets.setXYZ(i, x, y, z);
                    // this.speeds.setXYZ(i, x * 0.01, 0, z * 0.01);
                }
                geometry.setAttribute('offset', this.offsets); // per mesh translation
                this.orientations = new three__WEBPACK_IMPORTED_MODULE_4__["InterleavedBufferAttribute"](this.instanceBuffer, 4, 4);
                for (let i = 0, ul = this.orientations.count; i < ul; i++) {
                    vector.setFromEuler(new three__WEBPACK_IMPORTED_MODULE_4__["Euler"](this.transforms[i].rotation.x, this.transforms[i].rotation.y, this.transforms[i].rotation.z));
                    // vector.normalize();
                    this.orientations.setXYZW(i, 0, vector.y, 0, 1);
                    this.orientations.setXYZW(i, vector.x, vector.y, vector.z, vector.w);
                    // this.orientations.setY( i, vector.y );
                }
                geometry.setAttribute('orientation', this.orientations); // per mesh orientation
                // material
                const texture = loadedMaterial.map;
                let ambientMap;
                if (gltf.scene.children[0].geometry.attributes.uv2) {
                    ambientMap = new three__WEBPACK_IMPORTED_MODULE_4__["TextureLoader"]().load('./assets/textures/stoa-floor-ao.jpg');
                }
                if (texture) {
                    texture.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
                }
                const material = new three__WEBPACK_IMPORTED_MODULE_4__["RawShaderMaterial"]({
                    uniforms: {
                        map: { value: texture },
                        ambientMap,
                    },
                    vertexShader: this.vertexShader,
                    fragmentShader: this.fragmentShader,
                    side: three__WEBPACK_IMPORTED_MODULE_4__["FrontSide"],
                    transparent: false,
                });
                const mesh = new three__WEBPACK_IMPORTED_MODULE_4__["Mesh"](geometry, material);
                if (this.transform && this.transform.rotation) {
                    mesh.rotation.set(this.transform.rotation.x, this.transform.rotation.y, this.transform.rotation.z);
                }
                if (this.transform && this.transform.position) {
                    mesh.position.set(this.transform.position.x, this.transform.position.y, this.transform.position.z);
                }
                mesh.frustumCulled = false;
                mesh.matrixAutoUpdate = false;
                mesh.updateMatrix();
                this.scene.add(mesh);
            }
            else {
                var count = this.transforms.length;
                if (gltf.scene.children[0].geometry.attributes.uv2) {
                    let aoMap = new three__WEBPACK_IMPORTED_MODULE_4__["TextureLoader"]().load('assets/textures/stoa-floor-ao.png', (texture) => {
                        texture.needsUpdate = true;
                        texture.flipY = false;
                    });
                    loadedMaterial.aoMap = aoMap;
                    loadedMaterial.aoMapIntensity = 2;
                }
                var mesh = new three__WEBPACK_IMPORTED_MODULE_4__["InstancedMesh"](mergeGeometry, loadedMaterial, count);
                var dummy = new three__WEBPACK_IMPORTED_MODULE_4__["Object3D"]();
                for (var i = 0; i < count; i++) {
                    dummy.position.set(this.transforms[i].position.x, this.transforms[i].position.y, this.transforms[i].position.z);
                    dummy.rotation.set(this.transforms[i].rotation.x, this.transforms[i].rotation.y, this.transforms[i].rotation.z);
                    dummy.updateMatrix();
                    mesh.setMatrixAt(i, dummy.matrix);
                }
            }
            if (this.transform && this.transform.rotation) {
                mesh.rotation.set(this.transform.rotation.x, this.transform.rotation.y, this.transform.rotation.z);
            }
            if (this.transform && this.transform.position) {
                mesh.position.set(this.transform.position.x, this.transform.position.y, this.transform.position.z);
            }
            mesh.matrixAutoUpdate = false;
            mesh.updateMatrix();
            this.scene.add(mesh);
        });
    }
    flipNormals(geometry) {
        // console.log(geometry);
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
};
InstancedObjectComponent.ctorParameters = () => [];
InstancedObjectComponent.propDecorators = {
    scene: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    renderer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    changeStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    src: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    mirror: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    transforms: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    transform: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    lights: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
InstancedObjectComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'pgm-instanced-object',
        template: _raw_loader_instanced_object_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_instanced_object_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InstancedObjectComponent);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "JGKc":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/instanced-object/instanced-object.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "KEBK":
/*!*****************************************************!*\
  !*** ./src/app/services/camera-position.service.ts ***!
  \*****************************************************/
/*! exports provided: CameraPositionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraPositionService", function() { return CameraPositionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _control_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./control-state.service */ "mgdp");
/* harmony import */ var yuka__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yuka */ "51wi");




let CameraPositionService = class CameraPositionService {
    constructor(controlStateService) {
        this.controlStateService = controlStateService;
        this.direction = new yuka__WEBPACK_IMPORTED_MODULE_3__["Vector3"]();
    }
    updateCamera(player, deltaTime) {
        const state = this.controlStateService.getControlState();
        //player.getDirection(this.direction);
        //console.log(this.direction);
        this.direction.x = Math.sin(player.rotation.y);
        this.direction.z = Math.cos(player.rotation.y);
        const slowdown = 5;
        if (state.forward === true) {
            player.position.z -= this.direction.z / slowdown * deltaTime;
            player.position.x -= this.direction.x / slowdown * deltaTime;
        }
        if (state.backwards === true) {
            player.position.z += this.direction.z / slowdown * deltaTime;
            player.position.x += this.direction.x / slowdown * deltaTime;
        }
        if (state.right === true) {
            player.rotation.y -= 6 * Math.PI / 360 * deltaTime;
        }
        if (state.left === true) {
            player.rotation.y += 6 * Math.PI / 360 * deltaTime;
        }
        if (state.mouseIsDown === true) {
            player.position.z -= this.direction.z / slowdown * deltaTime;
            player.position.x -= this.direction.x / slowdown * deltaTime;
            player.rotation.y += -state.mouseX * 3 * Math.PI / 360 * deltaTime;
        }
        /* if (player.position.x < 2) {
          player.position.x = 2;
        }
        if (player.position.x > 8) {
          player.position.x = 8;
        } */
    }
};
CameraPositionService.ctorParameters = () => [
    { type: _control_state_service__WEBPACK_IMPORTED_MODULE_2__["ControlStateService"] }
];
CameraPositionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CameraPositionService);



/***/ }),

/***/ "M8cW":
/*!*****************************************************!*\
  !*** ./src/app/components/stage/stage.component.ts ***!
  \*****************************************************/
/*! exports provided: StageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StageComponent", function() { return StageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_stage_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./stage.component.html */ "1aBA");
/* harmony import */ var _stage_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stage.component.scss */ "R6v/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ "Womt");
/* harmony import */ var yuka__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yuka */ "51wi");
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Player.js */ "ZCbq");
/* harmony import */ var three_examples_jsm_libs_stats_module_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three/examples/jsm/libs/stats.module.js */ "7yBH");
/* harmony import */ var src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/entity.service */ "MV75");
/* harmony import */ var src_app_services_sky_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/sky.service */ "YxNL");
/* harmony import */ var src_app_services_camera_position_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/camera-position.service */ "KEBK");











let StageComponent = class StageComponent {
    constructor(entityService, skyService, cameraPositionService) {
        this.entityService = entityService;
        this.skyService = skyService;
        this.cameraPositionService = cameraPositionService;
        this.deltaTime = 1;
    }
    ngOnInit() {
        this.entityService.createEntities();
        this.entities = this.entityService.getEntities();
        this.init();
    }
    init() {
        this.clock = new three__WEBPACK_IMPORTED_MODULE_4__["Clock"]();
        this.entityManager = new yuka__WEBPACK_IMPORTED_MODULE_5__["EntityManager"]();
        this.time = new yuka__WEBPACK_IMPORTED_MODULE_5__["Time"]();
        this.container = document.getElementById('container');
        this.camera = new three__WEBPACK_IMPORTED_MODULE_4__["PerspectiveCamera"](50, window.innerWidth / window.innerHeight, 0.3, 500);
        /*    this.camera.position.x = 5;
           this.camera.position.y = 1.6;
           this.camera.position.z = -5; */
        this.camera.matrixAutoUpdate = false;
        // this.camera.rotation.y = Math.PI;
        this.scene = new three__WEBPACK_IMPORTED_MODULE_4__["Scene"]();
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_4__["WebGLRenderer"]();
        /*  this.controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
            this.controls.dampingFactor = 0.05;
            this.controls.screenSpacePanning = false;
            this.controls.minDistance = 5;
            this.controls.maxDistance = 200;
            this.controls.maxPolarAngle = Math.PI / 2.015;
            this.controls.target.set(0, 0, 60);
         */
        this.skyService.makeSky(this.scene);
        /*   if (this.renderer.extensions.get('ANGLE_instanced_arrays') === null) {
            //document.getElementById('notSupported').style.display = '';
            return;
          } */
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.container.appendChild(this.renderer.domElement);
        this.stats = Object(three_examples_jsm_libs_stats_module_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
        this.container.appendChild(this.stats.dom);
        /*     this.controls = new FirstPersonControls(this.camera, this.renderer.domElement);
            this.controls.movementSpeed = 10;
            this.controls.lookSpeed = 0.1;
            this.controls.lookAt(0, 0, 0);
        
            this.controls.constrainVertical = true;
            this.controls.verticalMax = Math.PI * .55;
            this.controls.verticalMin = Math.PI * .35; */
        this.player = new _Player_js__WEBPACK_IMPORTED_MODULE_6__["Player"]();
        const loader2 = new yuka__WEBPACK_IMPORTED_MODULE_5__["NavMeshLoader"]();
        loader2.load('./assets/models/navmesh.glb', { epsilonCoplanarTest: 0.25 }).then((navMesh) => {
            // visualize convex regions
            // const navMeshGroup = createConvexRegionHelper( navMesh );
            // scene.add( navMeshGroup );
            this.player.navMesh = navMesh;
            this.player.head.setRenderComponent(this.camera, this.sync);
            this.player.position.set(5, 0, -5);
            this.entityManager.add(this.player);
            // const loadingScreen = document.getElementById( 'loading-screen' );
            // loadingScreen.classList.add( 'fade-out' );
            // loadingScreen.addEventListener( 'transitionend', onTransitionEnd );
            // animate();
        });
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
        // this.deltaTime = this.clock.getDelta();
        const delta = this.time.update().getDelta();
        this.cameraPositionService.updateCamera(this.player, delta * 30);
        this.entityManager.update(delta);
        this.camera.position.x = this.player.position.x;
        this.camera.position.y = this.player.position.y + this.player.height;
        this.camera.position.z = this.player.position.z;
        this.camera.rotation.x = this.player.rotation.x;
        this.camera.rotation.y = this.player.rotation.y;
        this.camera.rotation.z = this.player.rotation.z;
        // console.log(this.player.position.x);
        // controls.update( delta );
        this.camera.updateProjectionMatrix();
        this.camera.updateMatrix();
        this.renderer.render(this.scene, this.camera);
    }
    sync(entity, renderComponent) {
        // renderComponent.matrixWorld.copy(entity.worldMatrix);
    }
};
StageComponent.ctorParameters = () => [
    { type: src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_8__["EntityService"] },
    { type: src_app_services_sky_service__WEBPACK_IMPORTED_MODULE_9__["SkyService"] },
    { type: src_app_services_camera_position_service__WEBPACK_IMPORTED_MODULE_10__["CameraPositionService"] }
];
StageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'pgm-stage',
        template: _raw_loader_stage_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_stage_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], StageComponent);



/***/ }),

/***/ "MV75":
/*!********************************************!*\
  !*** ./src/app/services/entity.service.ts ***!
  \********************************************/
/*! exports provided: EntityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityService", function() { return EntityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/entities */ "hIAJ");



let EntityService = class EntityService {
    constructor() { }
    getEntities() {
        return _data_entities__WEBPACK_IMPORTED_MODULE_2__["ENTITIES"];
    }
    createEntities() {
        const entities = this.getEntities();
        for (let n = 0; n < entities.length; n++) {
            switch (entities[n].src) {
                case 'capitol.glb':
                    for (let i = 0; i < 2; i++) {
                        const posX = i * 9.65;
                        const posZ = 2.645 * 4;
                        const posY = 4.35 + 0.225;
                        // const rotY = Math.random() * Math.PI;
                        for (let k = 0; k < 100; k++) {
                            entities[n].transforms.push({
                                rotation: { x: Math.PI, y: 0, z: 0 },
                                position: { x: posX, y: posY, z: posZ - k * 2.645 },
                            });
                        }
                        // move out at least 5 units from center in current direction
                    }
                    break;
                case 'hall-ceiling.glb':
                    for (let i = 0; i < 2; i++) {
                        const posX = i * 9.65;
                        const posZ = 2.645 * 4;
                        const posY = 5.00371;
                        // const rotY = Math.random() * Math.PI;
                        for (let k = 0; k < 100; k++) {
                            entities[n].transforms.push({
                                rotation: { x: 0, y: i * Math.PI, z: 0 },
                                position: { x: posX, y: posY, z: posZ - k * (2.645 / 2) },
                            });
                        }
                        // move out at least 5 units from center in current direction
                    }
                    break;
                case 'pedistal.glb':
                    for (let i = 0; i < 2; i++) {
                        const posX = i * 9.65;
                        const posZ = 2.645 * 4;
                        const posY = 0.5 + 0.225;
                        // const rotY = Math.random() * Math.PI;
                        for (let k = 0; k < 100; k++) {
                            entities[n].transforms.push({
                                rotation: { x: Math.PI, y: 0, z: 0 },
                                position: { x: posX, y: posY, z: posZ - k * 2.645 },
                            });
                        }
                        // move out at least 5 units from center in current direction
                    }
                    break;
                case 'shaft.glb':
                    for (let i = 0; i < 2; i++) {
                        const posX = i * 9.65;
                        const posZ = 2.645 * 4;
                        const posY = 0.5 + 0.225;
                        // const rotY = Math.random() * Math.PI;
                        for (let k = 0; k < 100; k++) {
                            entities[n].transforms.push({
                                rotation: { x: 0, y: 0, z: 0 },
                                position: { x: posX, y: posY, z: posZ - k * 2.645 },
                            });
                        }
                        // move out at least 5 units from center in current direction
                    }
                    break;
                case 'chamber.glb':
                    for (let i = 0; i < 1; i++) {
                        const posX = -5.2;
                        const posZ = 0;
                        const posY = 0 + 0.225;
                        // const rotY = Math.random() * Math.PI;
                        for (let k = 0; k < 20; k++) {
                            entities[n].transforms.push({
                                rotation: { x: 0, y: 0, z: 0 },
                                position: { x: posX, y: posY, z: posZ - 4.454 * k },
                            });
                        }
                        for (let k = 0; k < 18; k++) {
                            entities[n].transforms.push({
                                rotation: { x: 0, y: Math.PI, z: 0 },
                                position: { x: 15.2, y: posY, z: posZ - 4.454 * k },
                            });
                        }
                        // move out at least 5 units from center in current direction
                    }
                    break;
                case 'portal-pillar.glb':
                    entities[n].transforms.push({
                        rotation: { x: 0, y: -Math.PI / 4, z: 0 },
                        position: { x: 2.582, y: -2.25, z: 15.6291 },
                    });
                    entities[n].transforms.push({
                        rotation: { x: 0, y: (Math.PI / 4) * 3, z: 0 },
                        position: { x: 5.6107, y: -2.25, z: 18.3544 },
                    });
                    // move out at least 5 units from center in current direction
                    break;
                case 'column-court.glb':
                    const posZ = -36.6416;
                    const posY = 2.70996;
                    const distance = 34.0016 - 36.6416;
                    for (let i = 0; i < 2; i++) {
                        const posX = -11.4742 + i * 11.4742 * 2;
                        // const rotY = Math.random() * Math.PI;
                        for (let k = 0; k < 11; k++) {
                            entities[n].transforms.push({
                                rotation: { x: 0, y: 0, z: 0 },
                                position: { x: posX, y: posY, z: posZ - k * distance },
                            });
                        }
                        // move out at least 5 units from center in current direction
                    }
                    for (let k = 1; k < 9; k++) {
                        const distance = -11.4758 + 8.92584;
                        const posX = -11.4742 - k * distance;
                        const posZ = -36.6416;
                        entities[n].transforms.push({
                            rotation: { x: 0, y: 0, z: 0 },
                            position: { x: posX, y: posY, z: posZ },
                        });
                    }
                    break;
                case 'corinthian-capital.glb':
                    for (let i = 0; i < 2; i++) {
                        const posZ = -36.6416;
                        const posY = 2.70996;
                        const distance = 34.0016 - 36.6416;
                        const posX = -11.4742 + i * 11.4742 * 2;
                        // const rotY = Math.random() * Math.PI;
                        for (let k = 0; k < 11; k++) {
                            entities[n].transforms.push({
                                rotation: { x: 0, y: 0, z: 0 },
                                position: { x: posX, y: posY, z: posZ - k * distance },
                            });
                        }
                        // move out at least 5 units from center in current direction
                    }
                    for (let k = 1; k < 9; k++) {
                        const distance = -11.4758 + 8.92584;
                        const posX = -11.4742 - k * distance;
                        const posY = 2.70996;
                        const posZ = -36.6416;
                        entities[n].transforms.push({
                            rotation: { x: 0, y: 0, z: 0 },
                            position: { x: posX, y: posY, z: posZ },
                        });
                    }
                    break;
                default:
                    if (!entities[n].transforms || entities[n].transforms.length === 0) {
                        entities[n].transforms.push({
                            rotation: { x: 0, y: 0, z: 0 },
                            position: { x: 0, y: 0, z: 0 },
                        });
                    }
                    // move out at least 5 units from center in current direction
                    break;
            }
        }
    }
};
EntityService.ctorParameters = () => [];
EntityService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], EntityService);



/***/ }),

/***/ "O/4L":
/*!***********************************************************!*\
  !*** ./src/app/components/controls/controls.component.ts ***!
  \***********************************************************/
/*! exports provided: ControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlsComponent", function() { return ControlsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_controls_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./controls.component.html */ "QPJR");
/* harmony import */ var _controls_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls.component.scss */ "1w+u");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_control_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/control-state.service */ "mgdp");





let ControlsComponent = class ControlsComponent {
    constructor(controlStateService) {
        this.controlStateService = controlStateService;
    }
    onMouseDown(ev) {
        ev.preventDefault();
        // this.controlState.forward = true;
        this.controlState.mouseIsDown = true;
        this.controlState.mouseX = (ev.clientX / window.innerWidth - .5) * 2;
        this.controlState.mouseY = (ev.clientY / window.innerHeight - .5) * 2;
        // console.log(this.controlState.mouseX);
        // console.log(ev.clientX)
    }
    onMouseMove(ev) {
        ev.preventDefault();
        this.controlState.mouseX = (ev.clientX / window.innerWidth - .5) * 2;
        this.controlState.mouseY = (ev.clientY / window.innerHeight - .5) * 2;
        // console.log(this.controlState.mouseX);
    }
    onMouseUp(ev) {
        ev.preventDefault();
        this.controlState.mouseIsDown = false;
    }
    onPointerDown(ev) {
        // ev.preventDefault();
        this.controlState.mouseIsDown = true;
        this.controlState.mouseX = (ev.touches[0].clientX / window.innerWidth - .5) * 2;
        this.controlState.mouseY = (ev.touches[0].clientY / window.innerHeight - .5) * 2;
    }
    onPointerMove(ev) {
        // ev.preventDefault();
        // console.log(ev);
        this.controlState.mouseX = (ev.touches[0].clientX / window.innerWidth - .5) * 2;
        this.controlState.mouseY = (ev.touches[0].clientY / window.innerHeight - .5) * 2;
        // console.log(this.controlState.mouseX);
    }
    onTouchEnd(ev) {
        // ev.preventDefault();
        this.controlState.mouseIsDown = false;
    }
    onKeyDown(ev) {
        // console.log(`The user just pressed ${ev.key}!`);
        switch (ev.keyCode) {
            case 38: /*up*/
            case 87: /*W*/
                this.controlState.forward = true;
                break;
            case 40: /*down*/
            case 83: /*S*/
                this.controlState.backwards = true;
                break;
            case 37: /*left*/
            case 65: /*A*/
                this.controlState.left = true;
                break;
            case 39: /*right*/
            case 68: /*D*/
                this.controlState.right = true;
                break;
        }
    }
    onKeyUp(ev) {
        // console.log(`The user just released ${ev.key}!`);
        switch (ev.keyCode) {
            case 38: /*up*/
            case 87: /*W*/
                this.controlState.forward = false;
                break;
            case 40: /*down*/
            case 83: /*S*/
                this.controlState.backwards = false;
                break;
            case 37: /*left*/
            case 65: /*A*/
                this.controlState.left = false;
                break;
            case 39: /*right*/
            case 68: /*D*/
                this.controlState.right = false;
                break;
        }
    }
    ngOnInit() {
        this.controlState = this.controlStateService.getControlState();
    }
};
ControlsComponent.ctorParameters = () => [
    { type: src_app_services_control_state_service__WEBPACK_IMPORTED_MODULE_4__["ControlStateService"] }
];
ControlsComponent.propDecorators = {
    onMouseDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['document:mousedown', ['$event'],] }],
    onMouseMove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['document:mousemove', ['$event'],] }],
    onMouseUp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['document:mouseup', ['$event'],] }],
    onPointerDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['document:touchstart', ['$event'],] }],
    onPointerMove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['document:touchmove', ['$event'],] }],
    onTouchEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['document:touchend', ['$event'],] }],
    onKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['document:keydown', ['$event'],] }],
    onKeyUp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['document:keyup', ['$event'],] }]
};
ControlsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'pgm-controls',
        template: _raw_loader_controls_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_controls_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ControlsComponent);



/***/ }),

/***/ "QPJR":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/controls/controls.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n");

/***/ }),

/***/ "R6v/":
/*!*******************************************************!*\
  !*** ./src/app/components/stage/stage.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  width: 100%;\n  height: 100%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\na {\n  color: #08f;\n}\n\n#notSupported {\n  width: 50%;\n  margin: auto;\n  background-color: #f00;\n  margin-top: 20px;\n  padding: 10px;\n}\n\n.container {\n  width: 100%;\n  height: 100%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzdGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtBQUNGOztBQUNBO0VBQ0UsV0FBQTtBQUVGOztBQUFBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUdGOztBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7QUFHRiIsImZpbGUiOiJzdGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcbmEge1xyXG4gIGNvbG9yOiAjMDhmO1xyXG59XHJcbiNub3RTdXBwb3J0ZWQge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMDA7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() {
        this.title = 'pergamon';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pgm-stage></pgm-stage>\r\n");

/***/ }),

/***/ "XhG+":
/*!********************************************!*\
  !*** ./src/app/shader/instanced-shader.ts ***!
  \********************************************/
/*! exports provided: vertexShader, fragmentShader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vertexShader", function() { return vertexShader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fragmentShader", function() { return fragmentShader; });
let vertexShader = `precision highp float;

  uniform mat4 modelViewMatrix;
  uniform mat4 projectionMatrix;

  attribute vec3 position;
  attribute vec3 offset;
  attribute vec2 uv;
  attribute vec4 orientation;

  varying vec2 vUv;

  // http://www.geeks3d.com/20141201/how-to-rotate-a-vertex-by-a-quaternion-in-glsl/

  vec3 applyQuaternionToVector( vec4 q, vec3 v ){

    return v + 2.0 * cross( q.xyz, cross( q.xyz, v ) + q.w * v );

  }

  void main() {

    vec3 vPosition = applyQuaternionToVector( orientation, position );

    vUv = uv;

    gl_Position = projectionMatrix * modelViewMatrix * vec4( offset + vPosition, 1.0 );

  }`;
let fragmentShader = `precision highp float;

  uniform sampler2D map;

  varying vec2 vUv;

  void main() {

    gl_FragColor = texture2D(map, vUv);

  }`;


/***/ }),

/***/ "YxNL":
/*!*****************************************!*\
  !*** ./src/app/services/sky.service.ts ***!
  \*****************************************/
/*! exports provided: SkyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkyService", function() { return SkyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "Womt");
/* harmony import */ var three_examples_jsm_objects_Sky__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/objects/Sky */ "AroK");




let SkyService = class SkyService {
    constructor() { }
    makeSky(scene) {
        const light = new three__WEBPACK_IMPORTED_MODULE_2__["DirectionalLight"](0xffffff, 0.8);
        light.target.position.set(0, 0, 0);
        const hemilight = new three__WEBPACK_IMPORTED_MODULE_2__["HemisphereLight"](0xffffbb, 0x645f55, 0.8);
        scene.add(hemilight);
        scene.add(light);
        const sky = new three_examples_jsm_objects_Sky__WEBPACK_IMPORTED_MODULE_3__["Sky"]();
        sky.scale.setScalar(10000);
        scene.add(sky);
        const uniforms = sky.material.uniforms;
        uniforms.turbidity.value = 10;
        uniforms.rayleigh.value = 2;
        //uniforms.luminance.value = 1;
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
        sky.material.uniforms.sunPosition.value = light.position.copy(light.position);
        light.position.z = -parameters.distance * Math.sin(phi) * Math.cos(theta);
    }
};
SkyService.ctorParameters = () => [];
SkyService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SkyService);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_stage_stage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/stage/stage.component */ "M8cW");
/* harmony import */ var _components_instanced_object_instanced_object_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/instanced-object/instanced-object.component */ "7VzK");
/* harmony import */ var _components_controls_controls_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/controls/controls.component */ "O/4L");








let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_stage_stage_component__WEBPACK_IMPORTED_MODULE_5__["StageComponent"],
            _components_instanced_object_instanced_object_component__WEBPACK_IMPORTED_MODULE_6__["InstancedObjectComponent"],
            _components_controls_controls_component__WEBPACK_IMPORTED_MODULE_7__["ControlsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "ZCbq":
/*!**************************************!*\
  !*** ./src/app/components/Player.js ***!
  \**************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var yuka__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yuka */ "51wi");
/**
 * @author Mugen87 / https://github.com/Mugen87
 */



const startPosition = new yuka__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
const endPosition = new yuka__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();

class Player extends yuka__WEBPACK_IMPORTED_MODULE_0__["MovingEntity"] {

	constructor() {

		super();

		this.maxSpeed = 4;
		this.height = 2;

		this.head = new yuka__WEBPACK_IMPORTED_MODULE_0__["GameEntity"]();
		this.add( this.head );

		this.updateOrientation = false;
		this.navMesh = null;
		this.currentRegion = null;

	}

	update( delta ) {

		startPosition.copy( this.position );

		super.update( delta );

		endPosition.copy( this.position );

		// ensure the entity stays inside its navmesh

		this.currentRegion = this.navMesh.clampMovement(
			this.currentRegion,
			startPosition,
			endPosition,
			this.position
		);

		// adjust height of player according to the ground

		const distance = this.currentRegion.distanceToPoint( this.position );

		this.position.y -= distance * 0.2; // smooth transition

	}

}





/***/ }),

/***/ "hIAJ":
/*!**********************************!*\
  !*** ./src/app/data/entities.ts ***!
  \**********************************/
/*! exports provided: ENTITIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTITIES", function() { return ENTITIES; });
let ENTITIES = [
    { src: 'capitol.glb', transforms: [], static: true, mirror: { x: true, y: true } },
    {
        src: 'corinthian-capital.glb',
        transform: {
            rotation: { x: 0, y: (Math.PI / 180) * -40.5, z: 0 },
            position: { x: -18.7705, z: 52.6765, y: -5.02641 },
        },
        transforms: [],
        static: true,
        mirror: { x: false, y: false },
    },
    { src: 'pedistal.glb', transforms: [], static: true, mirror: { x: false, y: false } },
    { src: 'shaft.glb', transforms: [], static: true, mirror: { x: false, y: false } },
    {
        src: 'column-court.glb',
        transform: {
            rotation: { x: 0, y: (Math.PI / 180) * -40.5, z: 0 },
            position: { x: -18.7705, z: 52.6765, y: -5.02641 },
        },
        transforms: [],
        static: true,
        mirror: { x: false, y: false },
    },
    { src: 'chamber.glb', transforms: [], static: true, mirror: { x: false, y: false } },
    { src: 'road.glb', transforms: [], static: true, mirror: { x: false, y: false } },
    { src: 'stoa-floor.glb', transforms: [], static: true, mirror: { x: false, y: false } },
    { src: 'stairs.glb', transforms: [], static: true, mirror: { x: false, y: false } },
    { src: 'portal-pillar.glb', transforms: [], static: true, mirror: { x: false, y: false } },
    { src: 'roof.glb', transforms: [], static: true, mirror: { x: false, y: false } },
    { src: 'architrave.glb', transforms: [], static: true, mirror: { x: false, y: false } },
    { src: 'hall-ceiling.glb', transforms: [], static: true, mirror: { x: false, y: false } },
    {
        src: 'propylon-walls.glb',
        transforms: [
            {
                rotation: { x: 0, y: (Math.PI / 180) * -40.5, z: 0 },
                position: { x: -18.7705, z: 52.6765, y: -5.02641 },
            },
        ],
        static: true,
        mirror: { x: false, y: false },
    },
    {
        src: 'propylon-court-walls.glb',
        transforms: [
            {
                rotation: { x: 0, y: (Math.PI / 180) * -40.5, z: 0 },
                position: { x: -18.7705, z: 52.6765, y: -5.02641 },
            },
        ],
        static: true,
        mirror: { x: false, y: false },
    },
    {
        src: 'propylon-court-floor.glb',
        transforms: [
            {
                rotation: { x: 0, y: (Math.PI / 180) * -40.5, z: 0 },
                position: { x: -18.7705, z: 52.6765, y: -5.02641 },
            },
        ],
        static: true,
        mirror: { x: false, y: false },
    },
    {
        src: 'propylon-architrave.glb',
        transforms: [
            {
                rotation: { x: 0, y: (Math.PI / 180) * -40.5, z: 0 },
                position: { x: -18.7705, z: 52.6765, y: -5.02641 },
            },
        ],
        static: true,
        mirror: { x: false, y: false },
    },
    {
        src: 'propylon-court-architrave.glb',
        transforms: [
            {
                rotation: { x: 0, y: (Math.PI / 180) * -40.5, z: 0 },
                position: { x: -18.7705, z: 52.6765, y: -5.02641 },
            },
        ],
        static: true,
        mirror: { x: false, y: false },
    },
];


/***/ }),

/***/ "mgdp":
/*!***************************************************!*\
  !*** ./src/app/services/control-state.service.ts ***!
  \***************************************************/
/*! exports provided: ControlStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlStateService", function() { return ControlStateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/controls */ "wtQz");



let ControlStateService = class ControlStateService {
    constructor() { }
    getControlState() {
        return _data_controls__WEBPACK_IMPORTED_MODULE_2__["CONTROLS"];
    }
};
ControlStateService.ctorParameters = () => [];
ControlStateService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ControlStateService);



/***/ }),

/***/ "rCu5":
/*!*****************************************************************************!*\
  !*** ./src/app/components/instanced-object/instanced-object.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnN0YW5jZWQtb2JqZWN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "wtQz":
/*!**********************************!*\
  !*** ./src/app/data/controls.ts ***!
  \**********************************/
/*! exports provided: CONTROLS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTROLS", function() { return CONTROLS; });
let CONTROLS = {
    forward: false,
    backwards: false,
    left: false,
    right: false,
    mouseIsDown: false,
    mouseX: 0,
    mouseY: 0
};


/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbn0iXX0= */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map