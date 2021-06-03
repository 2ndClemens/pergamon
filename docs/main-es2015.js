(self["webpackChunkpergamon"] = self["webpackChunkpergamon"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

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
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 1053:
/*!**************************************!*\
  !*** ./src/app/components/Player.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": function() { return /* binding */ Player; }
/* harmony export */ });
/* harmony import */ var yuka__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yuka */ 1255);
/**
 * @author Mugen87 / https://github.com/Mugen87
 */



const startPosition = new yuka__WEBPACK_IMPORTED_MODULE_0__.Vector3();
const endPosition = new yuka__WEBPACK_IMPORTED_MODULE_0__.Vector3();

class Player extends yuka__WEBPACK_IMPORTED_MODULE_0__.MovingEntity {

	constructor() {

		super();

		this.maxSpeed = 4;
		this.height = 2;

		this.head = new yuka__WEBPACK_IMPORTED_MODULE_0__.GameEntity();
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

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let AppComponent = class AppComponent {
    constructor() {
        this.title = 'pergamon';
    }
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_stage_stage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/stage/stage.component */ 841);
/* harmony import */ var _components_instanced_object_instanced_object_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/instanced-object/instanced-object.component */ 6691);
/* harmony import */ var _components_controls_controls_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/controls/controls.component */ 1656);








let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
            _components_stage_stage_component__WEBPACK_IMPORTED_MODULE_2__.StageComponent,
            _components_instanced_object_instanced_object_component__WEBPACK_IMPORTED_MODULE_3__.InstancedObjectComponent,
            _components_controls_controls_component__WEBPACK_IMPORTED_MODULE_4__.ControlsComponent
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 1656:
/*!***********************************************************!*\
  !*** ./src/app/components/controls/controls.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlsComponent": function() { return /* binding */ ControlsComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_controls_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./controls.component.html */ 9394);
/* harmony import */ var _controls_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls.component.scss */ 8673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_control_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/control-state.service */ 3057);





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
    { type: src_app_services_control_state_service__WEBPACK_IMPORTED_MODULE_2__.ControlStateService }
];
ControlsComponent.propDecorators = {
    onMouseDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener, args: ['document:mousedown', ['$event'],] }],
    onMouseMove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener, args: ['document:mousemove', ['$event'],] }],
    onMouseUp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener, args: ['document:mouseup', ['$event'],] }],
    onPointerDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener, args: ['document:touchstart', ['$event'],] }],
    onPointerMove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener, args: ['document:touchmove', ['$event'],] }],
    onTouchEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener, args: ['document:touchend', ['$event'],] }],
    onKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener, args: ['document:keydown', ['$event'],] }],
    onKeyUp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener, args: ['document:keyup', ['$event'],] }]
};
ControlsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'pgm-controls',
        template: _raw_loader_controls_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        styles: [_controls_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ControlsComponent);



/***/ }),

/***/ 6691:
/*!***************************************************************************!*\
  !*** ./src/app/components/instanced-object/instanced-object.component.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstancedObjectComponent": function() { return /* binding */ InstancedObjectComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_instanced_object_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./instanced-object.component.html */ 5606);
/* harmony import */ var _instanced_object_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanced-object.component.scss */ 9330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ 7758);
/* harmony import */ var three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader.js */ 5192);
/* harmony import */ var three_examples_jsm_utils_BufferGeometryUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/utils/BufferGeometryUtils */ 6444);
/* harmony import */ var _shader_instanced_shader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shader/instanced-shader */ 7363);








let InstancedObjectComponent = class InstancedObjectComponent {
    constructor() {
        this.lights = true;
        //instanceBufferSpeed;
        this.vertexShader = _shader_instanced_shader__WEBPACK_IMPORTED_MODULE_4__.vertexShader;
        this.fragmentShader = _shader_instanced_shader__WEBPACK_IMPORTED_MODULE_4__.fragmentShader;
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
        const loader = new three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_2__.GLTFLoader().setPath('./assets/models/');
        loader.load(this.src, (gltf) => {
            // console.log(gltf.scene);
            // const loadedGeometry = gltf.scene.children[0].geometry;
            const g1 = gltf.scene.children[0].geometry;
            // const matrix = new THREE.Matrix4();
            let mergeGeometry = new three__WEBPACK_IMPORTED_MODULE_5__.BufferGeometry();
            mergeGeometry = three_examples_jsm_utils_BufferGeometryUtils__WEBPACK_IMPORTED_MODULE_3__.BufferGeometryUtils.mergeBufferGeometries([g1]);
            if (this.mirror.x) {
                g1.rotateY(Math.PI);
                mergeGeometry = three_examples_jsm_utils_BufferGeometryUtils__WEBPACK_IMPORTED_MODULE_3__.BufferGeometryUtils.mergeBufferGeometries([mergeGeometry, g1]);
                // matrix.set(-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                g1.scale(-1, 1, 1);
                // this.flipNormals(g1);
                mergeGeometry = three_examples_jsm_utils_BufferGeometryUtils__WEBPACK_IMPORTED_MODULE_3__.BufferGeometryUtils.mergeBufferGeometries([mergeGeometry, g1]);
                g1.rotateY(Math.PI);
                mergeGeometry = three_examples_jsm_utils_BufferGeometryUtils__WEBPACK_IMPORTED_MODULE_3__.BufferGeometryUtils.mergeBufferGeometries([mergeGeometry, g1]);
            }
            const loadedMaterial = gltf.scene.children[0].material;
            /* const loadedMaterial = new THREE.MeshBasicMaterial();
            loadedMaterial.map = gltf.scene.children[0].material.map; */
            if (!this.lights) {
                const geometry = mergeGeometry;
                // per instance data
                this.instanceBuffer = new three__WEBPACK_IMPORTED_MODULE_5__.InstancedInterleavedBuffer(new Float32Array(this.instances * 8), 8, 1).setUsage(three__WEBPACK_IMPORTED_MODULE_5__.DynamicDrawUsage);
                /* this.instanceBufferSpeed = new THREE.InstancedInterleavedBuffer(
                  new Float32Array(this.instances * 8),
                  8,
                  1,
                ).setUsage(THREE.DynamicDrawUsage); */
                this.offsets = new three__WEBPACK_IMPORTED_MODULE_5__.InterleavedBufferAttribute(this.instanceBuffer, 3, 0);
                // this.speeds = new THREE.InterleavedBufferAttribute(this.instanceBufferSpeed, 3, 0);
                const vector = new three__WEBPACK_IMPORTED_MODULE_5__.Quaternion();
                for (let i = 0, ul = this.instances; i < ul; i++) {
                    const x = this.transforms[i].position.x;
                    const y = this.transforms[i].position.y;
                    const z = this.transforms[i].position.z;
                    // move out at least 5 units from center in current direction
                    this.offsets.setXYZ(i, x, y, z);
                    // this.speeds.setXYZ(i, x * 0.01, 0, z * 0.01);
                }
                geometry.setAttribute('offset', this.offsets); // per mesh translation
                this.orientations = new three__WEBPACK_IMPORTED_MODULE_5__.InterleavedBufferAttribute(this.instanceBuffer, 4, 4);
                for (let i = 0, ul = this.orientations.count; i < ul; i++) {
                    vector.setFromEuler(new three__WEBPACK_IMPORTED_MODULE_5__.Euler(this.transforms[i].rotation.x, this.transforms[i].rotation.y, this.transforms[i].rotation.z));
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
                    ambientMap = new three__WEBPACK_IMPORTED_MODULE_5__.TextureLoader().load('./assets/textures/stoa-floor-ao.jpg');
                }
                if (texture) {
                    texture.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
                }
                const material = new three__WEBPACK_IMPORTED_MODULE_5__.RawShaderMaterial({
                    uniforms: {
                        map: { value: texture },
                        ambientMap,
                    },
                    vertexShader: this.vertexShader,
                    fragmentShader: this.fragmentShader,
                    side: three__WEBPACK_IMPORTED_MODULE_5__.FrontSide,
                    transparent: false,
                });
                const mesh = new three__WEBPACK_IMPORTED_MODULE_5__.Mesh(geometry, material);
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
                    let aoMap = new three__WEBPACK_IMPORTED_MODULE_5__.TextureLoader().load('assets/textures/stoa-floor-ao.png', (texture) => {
                        texture.needsUpdate = true;
                        texture.flipY = false;
                    });
                    loadedMaterial.aoMap = aoMap;
                    loadedMaterial.aoMapIntensity = 2;
                }
                var mesh = new three__WEBPACK_IMPORTED_MODULE_5__.InstancedMesh(mergeGeometry, loadedMaterial, count);
                var dummy = new three__WEBPACK_IMPORTED_MODULE_5__.Object3D();
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
    scene: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    renderer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    changeStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    src: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    mirror: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    transforms: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    transform: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    lights: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
InstancedObjectComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'pgm-instanced-object',
        template: _raw_loader_instanced_object_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectionStrategy.OnPush,
        styles: [_instanced_object_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InstancedObjectComponent);



/***/ }),

/***/ 841:
/*!*****************************************************!*\
  !*** ./src/app/components/stage/stage.component.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StageComponent": function() { return /* binding */ StageComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_stage_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./stage.component.html */ 1355);
/* harmony import */ var _stage_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stage.component.scss */ 3153);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! three */ 7758);
/* harmony import */ var yuka__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yuka */ 1255);
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Player.js */ 1053);
/* harmony import */ var three_examples_jsm_libs_stats_module_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/libs/stats.module.js */ 8299);
/* harmony import */ var src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/entity.service */ 9788);
/* harmony import */ var src_app_services_sky_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/sky.service */ 2775);
/* harmony import */ var src_app_services_camera_position_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/camera-position.service */ 7640);











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
        this.clock = new three__WEBPACK_IMPORTED_MODULE_8__.Clock();
        this.entityManager = new yuka__WEBPACK_IMPORTED_MODULE_2__.EntityManager();
        this.time = new yuka__WEBPACK_IMPORTED_MODULE_2__.Time();
        this.container = document.getElementById('container');
        this.camera = new three__WEBPACK_IMPORTED_MODULE_8__.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.3, 500);
        /*    this.camera.position.x = 5;
           this.camera.position.y = 1.6;
           this.camera.position.z = -5; */
        this.camera.matrixAutoUpdate = false;
        // this.camera.rotation.y = Math.PI;
        this.scene = new three__WEBPACK_IMPORTED_MODULE_8__.Scene();
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_8__.WebGLRenderer();
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
        this.stats = (0,three_examples_jsm_libs_stats_module_js__WEBPACK_IMPORTED_MODULE_4__.default)();
        this.container.appendChild(this.stats.dom);
        /*     this.controls = new FirstPersonControls(this.camera, this.renderer.domElement);
            this.controls.movementSpeed = 10;
            this.controls.lookSpeed = 0.1;
            this.controls.lookAt(0, 0, 0);
        
            this.controls.constrainVertical = true;
            this.controls.verticalMax = Math.PI * .55;
            this.controls.verticalMin = Math.PI * .35; */
        this.player = new _Player_js__WEBPACK_IMPORTED_MODULE_3__.Player();
        const loader2 = new yuka__WEBPACK_IMPORTED_MODULE_2__.NavMeshLoader();
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
    { type: src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_5__.EntityService },
    { type: src_app_services_sky_service__WEBPACK_IMPORTED_MODULE_6__.SkyService },
    { type: src_app_services_camera_position_service__WEBPACK_IMPORTED_MODULE_7__.CameraPositionService }
];
StageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'pgm-stage',
        template: _raw_loader_stage_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectionStrategy.OnPush,
        styles: [_stage_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StageComponent);



/***/ }),

/***/ 3006:
/*!**********************************!*\
  !*** ./src/app/data/controls.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONTROLS": function() { return /* binding */ CONTROLS; }
/* harmony export */ });
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

/***/ 6587:
/*!**********************************!*\
  !*** ./src/app/data/entities.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ENTITIES": function() { return /* binding */ ENTITIES; }
/* harmony export */ });
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
    {
        src: 'corinthian-capital-propylon.glb',
        transform: {
            rotation: { x: 0, y: (Math.PI / 180) * -40.5, z: 0 },
            position: { x: -18.7705, z: 52.6765, y: -5.02641 },
        },
        transforms: [],
        static: true,
        mirror: { x: false, y: false },
    },
    {
        src: 'column-propylon.glb',
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
        src: 'court.glb',
        transforms: [
            {
                rotation: { x: 0, y: (Math.PI / 180) * -40.5, z: 0 },
                position: { x: -43.7836, z: 38.2562, y: -5.02641 },
            },
        ],
        static: true,
        mirror: { x: false, y: false },
    },
    {
        src: 'column-stoa.glb',
        transform: {
            rotation: { x: 0, y: (Math.PI / 180) * -40.5, z: 0 },
            position: { x: -43.7836, z: 38.2562, y: -5.02641 },
        },
        transforms: [],
        static: true,
        mirror: { x: false, y: false },
    },
    {
        src: 'court-walls.glb',
        transforms: [
            {
                rotation: { x: 0, y: (Math.PI / 180) * -40.5, z: 0 },
                position: { x: -43.7836, z: 38.2562, y: -5.02641 },
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
    // { src: 'navmesh.glb', transforms: [], static: true, mirror: { x: false, y: false } },
];


/***/ }),

/***/ 7640:
/*!*****************************************************!*\
  !*** ./src/app/services/camera-position.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraPositionService": function() { return /* binding */ CameraPositionService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _control_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control-state.service */ 3057);
/* harmony import */ var yuka__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yuka */ 1255);




let CameraPositionService = class CameraPositionService {
    constructor(controlStateService) {
        this.controlStateService = controlStateService;
        this.direction = new yuka__WEBPACK_IMPORTED_MODULE_1__.Vector3();
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
    { type: _control_state_service__WEBPACK_IMPORTED_MODULE_0__.ControlStateService }
];
CameraPositionService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], CameraPositionService);



/***/ }),

/***/ 3057:
/*!***************************************************!*\
  !*** ./src/app/services/control-state.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlStateService": function() { return /* binding */ ControlStateService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _data_controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/controls */ 3006);



let ControlStateService = class ControlStateService {
    constructor() { }
    getControlState() {
        return _data_controls__WEBPACK_IMPORTED_MODULE_0__.CONTROLS;
    }
};
ControlStateService.ctorParameters = () => [];
ControlStateService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ControlStateService);



/***/ }),

/***/ 9788:
/*!********************************************!*\
  !*** ./src/app/services/entity.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntityService": function() { return /* binding */ EntityService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _data_entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/entities */ 6587);



let EntityService = class EntityService {
    constructor() { }
    getEntities() {
        return _data_entities__WEBPACK_IMPORTED_MODULE_0__.ENTITIES;
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
                case 'column-stoa.glb':
                    for (let k = 0; k < 43; k++) {
                        const distance = 2.656 - 5.312;
                        const posX = 0;
                        const posY = 0;
                        const posZ = -k * distance;
                        entities[n].transforms.push({
                            rotation: { x: 0, y: 0, z: 0 },
                            position: { x: posX, y: posY, z: posZ },
                        });
                    }
                    break;
                case 'column-propylon.glb':
                case 'corinthian-capital-propylon.glb':
                    const posY2 = 2.94571;
                    entities[n].transforms.push({
                        rotation: { x: 0, y: 0, z: 0 },
                        position: { x: -5.25, y: posY2, z: -13.5824 },
                    });
                    entities[n].transforms.push({
                        rotation: { x: 0, y: 0, z: 0 },
                        position: { x: -1.75, y: posY2, z: -13.5824 },
                    });
                    entities[n].transforms.push({
                        rotation: { x: 0, y: 0, z: 0 },
                        position: { x: 1.75, y: posY2, z: -13.5824 },
                    });
                    entities[n].transforms.push({
                        rotation: { x: 0, y: 0, z: 0 },
                        position: { x: -1.75, y: posY2, z: -9.86405 },
                    });
                    entities[n].transforms.push({
                        rotation: { x: 0, y: 0, z: 0 },
                        position: { x: 1.75, y: posY2, z: -9.86405 },
                    });
                    entities[n].transforms.push({
                        rotation: { x: 0, y: 0, z: 0 },
                        position: { x: 5.25, y: posY2, z: -13.5824 },
                    });
                    entities[n].transforms.push({
                        rotation: { x: 0, y: 0, z: 0 },
                        position: { x: -5.25, y: posY2, z: 0 },
                    });
                    entities[n].transforms.push({
                        rotation: { x: 0, y: 0, z: 0 },
                        position: { x: -1.75, y: posY2, z: 0 },
                    });
                    entities[n].transforms.push({
                        rotation: { x: 0, y: 0, z: 0 },
                        position: { x: 1.75, y: posY2, z: 0 },
                    });
                    entities[n].transforms.push({
                        rotation: { x: 0, y: 0, z: 0 },
                        position: { x: 5.25, y: posY2, z: 0 },
                    });
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
EntityService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], EntityService);



/***/ }),

/***/ 2775:
/*!*****************************************!*\
  !*** ./src/app/services/sky.service.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkyService": function() { return /* binding */ SkyService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ 7758);
/* harmony import */ var three_examples_jsm_objects_Sky__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/objects/Sky */ 211);




let SkyService = class SkyService {
    constructor() { }
    makeSky(scene) {
        const light = new three__WEBPACK_IMPORTED_MODULE_1__.DirectionalLight(0xffffff, 0.8);
        light.target.position.set(0, 0, 0);
        const hemilight = new three__WEBPACK_IMPORTED_MODULE_1__.HemisphereLight(0xffffbb, 0x645f55, 0.8);
        scene.add(hemilight);
        scene.add(light);
        const sky = new three_examples_jsm_objects_Sky__WEBPACK_IMPORTED_MODULE_0__.Sky();
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
SkyService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], SkyService);



/***/ }),

/***/ 7363:
/*!********************************************!*\
  !*** ./src/app/shader/instanced-shader.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vertexShader": function() { return /* binding */ vertexShader; },
/* harmony export */   "fragmentShader": function() { return /* binding */ fragmentShader; }
/* harmony export */ });
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

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 3069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG59Il19 */");

/***/ }),

/***/ 8673:
/*!*************************************************************!*\
  !*** ./src/app/components/controls/controls.component.scss ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250cm9scy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 9330:
/*!*****************************************************************************!*\
  !*** ./src/app/components/instanced-object/instanced-object.component.scss ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnN0YW5jZWQtb2JqZWN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 3153:
/*!*******************************************************!*\
  !*** ./src/app/components/stage/stage.component.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  width: 100%;\n  height: 100%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\na {\n  color: #08f;\n}\n\n#notSupported {\n  width: 50%;\n  margin: auto;\n  background-color: #f00;\n  margin-top: 20px;\n  padding: 10px;\n}\n\n.container {\n  width: 100%;\n  height: 100%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxXQUFBO0FBRUY7O0FBQUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBR0Y7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtBQUdGIiwiZmlsZSI6InN0YWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuYSB7XHJcbiAgY29sb3I6ICMwOGY7XHJcbn1cclxuI25vdFN1cHBvcnRlZCB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwMDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pgm-stage></pgm-stage>\r\n");

/***/ }),

/***/ 9394:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/controls/controls.component.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n");

/***/ }),

/***/ 5606:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/instanced-object/instanced-object.component.html ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ 1355:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/stage/stage.component.html ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"container\" (window:resize)=\"onWindowResize();\" draggable=\"false\"></div>\r\n<pgm-controls draggable=\"false\"></pgm-controls>\r\n<!-- <div  draggable=\"false\" style=\"position: absolute; top: 20px; right: 20px;\">{{camera.position.x}}</div> -->\r\n\r\n<pgm-instanced-object *ngFor=\"let entity of entities\" [scene]=\"scene\" [renderer]=\"renderer\" [src]=\"entity.src\" [transform]=\"entity.transform\"\r\n  [transforms]=\"entity.transforms\" [mirror]=\"entity.mirror\">\r\n</pgm-instanced-object>");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(4431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map