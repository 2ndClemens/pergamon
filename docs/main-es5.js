(function () {
  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\Clemens\Documents\pergamon\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1aBA":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/stage/stage.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function aBA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"container\" (window:resize)=\"onWindowResize();\" draggable=\"false\"></div>\r\n<pgm-controls draggable=\"false\"></pgm-controls>\r\n<!-- <div  draggable=\"false\" style=\"position: absolute; top: 20px; right: 20px;\">{{camera.position.x}}</div> -->\r\n\r\n<pgm-instanced-object *ngFor=\"let entity of entities\" [scene]=\"scene\" [renderer]=\"renderer\" [src]=\"entity.src\" [transform]=\"entity.transform\"\r\n  [transforms]=\"entity.transforms\" [mirror]=\"entity.mirror\">\r\n</pgm-instanced-object>";
      /***/
    },

    /***/
    "1w+u":
    /*!*************************************************************!*\
      !*** ./src/app/components/controls/controls.component.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function wU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250cm9scy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "7VzK":
    /*!***************************************************************************!*\
      !*** ./src/app/components/instanced-object/instanced-object.component.ts ***!
      \***************************************************************************/

    /*! exports provided: InstancedObjectComponent */

    /***/
    function VzK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InstancedObjectComponent", function () {
        return InstancedObjectComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_instanced_object_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./instanced-object.component.html */
      "JGKc");
      /* harmony import */


      var _instanced_object_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./instanced-object.component.scss */
      "rCu5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! three */
      "Womt");
      /* harmony import */


      var three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! three/examples/jsm/loaders/GLTFLoader.js */
      "NK00");
      /* harmony import */


      var three_examples_jsm_utils_BufferGeometryUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! three/examples/jsm/utils/BufferGeometryUtils */
      "kDdP");
      /* harmony import */


      var _shader_instanced_shader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../shader/instanced-shader */
      "XhG+");

      var InstancedObjectComponent = /*#__PURE__*/function () {
        function InstancedObjectComponent() {
          _classCallCheck(this, InstancedObjectComponent);

          this.lights = true; //instanceBufferSpeed;

          this.vertexShader = _shader_instanced_shader__WEBPACK_IMPORTED_MODULE_7__["vertexShader"];
          this.fragmentShader = _shader_instanced_shader__WEBPACK_IMPORTED_MODULE_7__["fragmentShader"];
        }

        _createClass(InstancedObjectComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.init();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            if (this.instanceBuffer) {
              for (var i = 0, ul = this.instances; i < ul; i++) {
                // move out at least 5 units from center in current direction
                this.offsets.setXYZ(i, this.transforms[i].position.x, this.transforms[i].position.y, this.transforms[i].position.z);
              }

              this.instanceBuffer.needsUpdate = true;
            }
          }
        }, {
          key: "init",
          value: function init() {
            var _this = this;

            this.instances = this.transforms.length;
            var loader = new three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_5__["GLTFLoader"]().setPath('./assets/models/');
            loader.load(this.src, function (gltf) {
              // console.log(gltf.scene);
              // const loadedGeometry = gltf.scene.children[0].geometry;
              var g1 = gltf.scene.children[0].geometry; // const matrix = new THREE.Matrix4();

              var mergeGeometry = new three__WEBPACK_IMPORTED_MODULE_4__["BufferGeometry"]();
              mergeGeometry = three_examples_jsm_utils_BufferGeometryUtils__WEBPACK_IMPORTED_MODULE_6__["BufferGeometryUtils"].mergeBufferGeometries([g1]);

              if (_this.mirror.x) {
                g1.rotateY(Math.PI);
                mergeGeometry = three_examples_jsm_utils_BufferGeometryUtils__WEBPACK_IMPORTED_MODULE_6__["BufferGeometryUtils"].mergeBufferGeometries([mergeGeometry, g1]); // matrix.set(-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);

                g1.scale(-1, 1, 1); // this.flipNormals(g1);

                mergeGeometry = three_examples_jsm_utils_BufferGeometryUtils__WEBPACK_IMPORTED_MODULE_6__["BufferGeometryUtils"].mergeBufferGeometries([mergeGeometry, g1]);
                g1.rotateY(Math.PI);
                mergeGeometry = three_examples_jsm_utils_BufferGeometryUtils__WEBPACK_IMPORTED_MODULE_6__["BufferGeometryUtils"].mergeBufferGeometries([mergeGeometry, g1]);
              }

              var loadedMaterial = gltf.scene.children[0].material;
              /* const loadedMaterial = new THREE.MeshBasicMaterial();
              loadedMaterial.map = gltf.scene.children[0].material.map; */

              if (!_this.lights) {
                var geometry = mergeGeometry; // per instance data

                _this.instanceBuffer = new three__WEBPACK_IMPORTED_MODULE_4__["InstancedInterleavedBuffer"](new Float32Array(_this.instances * 8), 8, 1).setUsage(three__WEBPACK_IMPORTED_MODULE_4__["DynamicDrawUsage"]);
                /* this.instanceBufferSpeed = new THREE.InstancedInterleavedBuffer(
                  new Float32Array(this.instances * 8),
                  8,
                  1,
                ).setUsage(THREE.DynamicDrawUsage); */

                _this.offsets = new three__WEBPACK_IMPORTED_MODULE_4__["InterleavedBufferAttribute"](_this.instanceBuffer, 3, 0); // this.speeds = new THREE.InterleavedBufferAttribute(this.instanceBufferSpeed, 3, 0);

                var vector = new three__WEBPACK_IMPORTED_MODULE_4__["Quaternion"]();

                for (var _i = 0, ul = _this.instances; _i < ul; _i++) {
                  var x = _this.transforms[_i].position.x;
                  var y = _this.transforms[_i].position.y;
                  var z = _this.transforms[_i].position.z; // move out at least 5 units from center in current direction

                  _this.offsets.setXYZ(_i, x, y, z); // this.speeds.setXYZ(i, x * 0.01, 0, z * 0.01);

                }

                geometry.setAttribute('offset', _this.offsets); // per mesh translation

                _this.orientations = new three__WEBPACK_IMPORTED_MODULE_4__["InterleavedBufferAttribute"](_this.instanceBuffer, 4, 4);

                for (var _i2 = 0, _ul = _this.orientations.count; _i2 < _ul; _i2++) {
                  vector.setFromEuler(new three__WEBPACK_IMPORTED_MODULE_4__["Euler"](_this.transforms[_i2].rotation.x, _this.transforms[_i2].rotation.y, _this.transforms[_i2].rotation.z)); // vector.normalize();

                  _this.orientations.setXYZW(_i2, 0, vector.y, 0, 1);

                  _this.orientations.setXYZW(_i2, vector.x, vector.y, vector.z, vector.w); // this.orientations.setY( i, vector.y );

                }

                geometry.setAttribute('orientation', _this.orientations); // per mesh orientation
                // material

                var texture = loadedMaterial.map;
                var ambientMap;

                if (gltf.scene.children[0].geometry.attributes.uv2) {
                  ambientMap = new three__WEBPACK_IMPORTED_MODULE_4__["TextureLoader"]().load('./assets/textures/stoa-floor-ao.jpg');
                }

                if (texture) {
                  texture.anisotropy = _this.renderer.capabilities.getMaxAnisotropy();
                }

                var material = new three__WEBPACK_IMPORTED_MODULE_4__["RawShaderMaterial"]({
                  uniforms: {
                    map: {
                      value: texture
                    },
                    ambientMap: ambientMap
                  },
                  vertexShader: _this.vertexShader,
                  fragmentShader: _this.fragmentShader,
                  side: three__WEBPACK_IMPORTED_MODULE_4__["FrontSide"],
                  transparent: false
                });

                var _mesh = new three__WEBPACK_IMPORTED_MODULE_4__["Mesh"](geometry, material);

                if (_this.transform && _this.transform.rotation) {
                  _mesh.rotation.set(_this.transform.rotation.x, _this.transform.rotation.y, _this.transform.rotation.z);
                }

                if (_this.transform && _this.transform.position) {
                  _mesh.position.set(_this.transform.position.x, _this.transform.position.y, _this.transform.position.z);
                }

                _mesh.frustumCulled = false;
                _mesh.matrixAutoUpdate = false;

                _mesh.updateMatrix();

                _this.scene.add(_mesh);
              } else {
                var count = _this.transforms.length;

                if (gltf.scene.children[0].geometry.attributes.uv2) {
                  var aoMap = new three__WEBPACK_IMPORTED_MODULE_4__["TextureLoader"]().load('assets/textures/stoa-floor-ao.png', function (texture) {
                    texture.needsUpdate = true;
                    texture.flipY = false;
                  });
                  loadedMaterial.aoMap = aoMap;
                  loadedMaterial.aoMapIntensity = 2;
                }

                var mesh = new three__WEBPACK_IMPORTED_MODULE_4__["InstancedMesh"](mergeGeometry, loadedMaterial, count);
                var dummy = new three__WEBPACK_IMPORTED_MODULE_4__["Object3D"]();

                for (var i = 0; i < count; i++) {
                  dummy.position.set(_this.transforms[i].position.x, _this.transforms[i].position.y, _this.transforms[i].position.z);
                  dummy.rotation.set(_this.transforms[i].rotation.x, _this.transforms[i].rotation.y, _this.transforms[i].rotation.z);
                  dummy.updateMatrix();
                  mesh.setMatrixAt(i, dummy.matrix);
                }
              }

              if (_this.transform && _this.transform.rotation) {
                mesh.rotation.set(_this.transform.rotation.x, _this.transform.rotation.y, _this.transform.rotation.z);
              }

              if (_this.transform && _this.transform.position) {
                mesh.position.set(_this.transform.position.x, _this.transform.position.y, _this.transform.position.z);
              }

              mesh.matrixAutoUpdate = false;
              mesh.updateMatrix();

              _this.scene.add(mesh);
            });
          }
        }, {
          key: "flipNormals",
          value: function flipNormals(geometry) {
            // console.log(geometry);
            var temp = 0; // let face;
            // flip every vertex normal in geometry by multiplying normal by -1

            for (var i = 0; i < geometry.faces.length; i++) {
              var face = geometry.faces[i];
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


            for (var _i3 = 0; _i3 < geometry.faces.length; _i3++) {
              var _face = geometry.faces[_i3];
              temp = _face.a;
              _face.a = _face.c;
              _face.c = temp;
            } // flip UV coordinates


            var faceVertexUvs = geometry.faceVertexUvs[0];

            for (var _i4 = 0; _i4 < faceVertexUvs.length; _i4++) {
              temp = faceVertexUvs[_i4][0];
              faceVertexUvs[_i4][0] = faceVertexUvs[_i4][2];
              faceVertexUvs[_i4][2] = temp;
            }

            geometry.verticesNeedUpdate = true;
            geometry.normalsNeedUpdate = true;
            geometry.vertexNormalsNeedUpdate = true;
            /* geometry.computeFaceNormals();
            geometry.computeVertexNormals(); */

            geometry.computeBoundingSphere();
          }
        }]);

        return InstancedObjectComponent;
      }();

      InstancedObjectComponent.ctorParameters = function () {
        return [];
      };

      InstancedObjectComponent.propDecorators = {
        scene: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        renderer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        changeStep: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        src: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        mirror: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        transforms: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        transform: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        lights: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      InstancedObjectComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'pgm-instanced-object',
        template: _raw_loader_instanced_object_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_instanced_object_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], InstancedObjectComponent);
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
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

      /***/
    },

    /***/
    "JGKc":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/instanced-object/instanced-object.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JGKc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "";
      /***/
    },

    /***/
    "KEBK":
    /*!*****************************************************!*\
      !*** ./src/app/services/camera-position.service.ts ***!
      \*****************************************************/

    /*! exports provided: CameraPositionService */

    /***/
    function KEBK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CameraPositionService", function () {
        return CameraPositionService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _control_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./control-state.service */
      "mgdp");
      /* harmony import */


      var yuka__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! yuka */
      "51wi");

      var CameraPositionService = /*#__PURE__*/function () {
        function CameraPositionService(controlStateService) {
          _classCallCheck(this, CameraPositionService);

          this.controlStateService = controlStateService;
          this.direction = new yuka__WEBPACK_IMPORTED_MODULE_3__["Vector3"]();
        }

        _createClass(CameraPositionService, [{
          key: "updateCamera",
          value: function updateCamera(player, deltaTime) {
            var state = this.controlStateService.getControlState(); //player.getDirection(this.direction);
            //console.log(this.direction);

            this.direction.x = Math.sin(player.rotation.y);
            this.direction.z = Math.cos(player.rotation.y);
            var slowdown = 5;

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
        }]);

        return CameraPositionService;
      }();

      CameraPositionService.ctorParameters = function () {
        return [{
          type: _control_state_service__WEBPACK_IMPORTED_MODULE_2__["ControlStateService"]
        }];
      };

      CameraPositionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], CameraPositionService);
      /***/
    },

    /***/
    "M8cW":
    /*!*****************************************************!*\
      !*** ./src/app/components/stage/stage.component.ts ***!
      \*****************************************************/

    /*! exports provided: StageComponent */

    /***/
    function M8cW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StageComponent", function () {
        return StageComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_stage_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./stage.component.html */
      "1aBA");
      /* harmony import */


      var _stage_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./stage.component.scss */
      "R6v/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! three */
      "Womt");
      /* harmony import */


      var yuka__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! yuka */
      "51wi");
      /* harmony import */


      var _Player_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../Player.js */
      "ZCbq");
      /* harmony import */


      var three_examples_jsm_libs_stats_module_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! three/examples/jsm/libs/stats.module.js */
      "7yBH");
      /* harmony import */


      var src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/entity.service */
      "MV75");
      /* harmony import */


      var src_app_services_sky_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/sky.service */
      "YxNL");
      /* harmony import */


      var src_app_services_camera_position_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/camera-position.service */
      "KEBK");

      var StageComponent = /*#__PURE__*/function () {
        function StageComponent(entityService, skyService, cameraPositionService) {
          _classCallCheck(this, StageComponent);

          this.entityService = entityService;
          this.skyService = skyService;
          this.cameraPositionService = cameraPositionService;
          this.deltaTime = 1;
        }

        _createClass(StageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.entityService.createEntities();
            this.entities = this.entityService.getEntities();
            this.init();
          }
        }, {
          key: "init",
          value: function init() {
            var _this2 = this;

            this.clock = new three__WEBPACK_IMPORTED_MODULE_4__["Clock"]();
            this.entityManager = new yuka__WEBPACK_IMPORTED_MODULE_5__["EntityManager"]();
            this.time = new yuka__WEBPACK_IMPORTED_MODULE_5__["Time"]();
            this.container = document.getElementById('container');
            this.camera = new three__WEBPACK_IMPORTED_MODULE_4__["PerspectiveCamera"](50, window.innerWidth / window.innerHeight, 0.3, 500);
            /*    this.camera.position.x = 5;
               this.camera.position.y = 1.6;
               this.camera.position.z = -5; */

            this.camera.matrixAutoUpdate = false; // this.camera.rotation.y = Math.PI;

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
            var loader2 = new yuka__WEBPACK_IMPORTED_MODULE_5__["NavMeshLoader"]();
            loader2.load('./assets/models/navmesh.glb', {
              epsilonCoplanarTest: 0.25
            }).then(function (navMesh) {
              // visualize convex regions
              // const navMeshGroup = createConvexRegionHelper( navMesh );
              // scene.add( navMeshGroup );
              _this2.player.navMesh = navMesh;

              _this2.player.head.setRenderComponent(_this2.camera, _this2.sync);

              _this2.player.position.set(5, 0, -5);

              _this2.entityManager.add(_this2.player); // const loadingScreen = document.getElementById( 'loading-screen' );
              // loadingScreen.classList.add( 'fade-out' );
              // loadingScreen.addEventListener( 'transitionend', onTransitionEnd );
              // animate();

            });
            this.animate();
          }
        }, {
          key: "onWindowResize",
          value: function onWindowResize() {
            console.log('resize'); // this.controls.handleResize();

            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
          }
        }, {
          key: "animate",
          value: function animate() {
            requestAnimationFrame(this.animate.bind(this));
            this.render();
          }
        }, {
          key: "render",
          value: function render() {
            this.stats.update(); // this.deltaTime = this.clock.getDelta();

            var delta = this.time.update().getDelta();
            this.cameraPositionService.updateCamera(this.player, delta * 30);
            this.entityManager.update(delta);
            this.camera.position.x = this.player.position.x;
            this.camera.position.y = this.player.position.y + this.player.height;
            this.camera.position.z = this.player.position.z;
            this.camera.rotation.x = this.player.rotation.x;
            this.camera.rotation.y = this.player.rotation.y;
            this.camera.rotation.z = this.player.rotation.z; // console.log(this.player.position.x);
            // controls.update( delta );

            this.camera.updateProjectionMatrix();
            this.camera.updateMatrix();
            this.renderer.render(this.scene, this.camera);
          }
        }, {
          key: "sync",
          value: function sync(entity, renderComponent) {// renderComponent.matrixWorld.copy(entity.worldMatrix);
          }
        }]);

        return StageComponent;
      }();

      StageComponent.ctorParameters = function () {
        return [{
          type: src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_8__["EntityService"]
        }, {
          type: src_app_services_sky_service__WEBPACK_IMPORTED_MODULE_9__["SkyService"]
        }, {
          type: src_app_services_camera_position_service__WEBPACK_IMPORTED_MODULE_10__["CameraPositionService"]
        }];
      };

      StageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'pgm-stage',
        template: _raw_loader_stage_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_stage_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], StageComponent);
      /***/
    },

    /***/
    "MV75":
    /*!********************************************!*\
      !*** ./src/app/services/entity.service.ts ***!
      \********************************************/

    /*! exports provided: EntityService */

    /***/
    function MV75(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EntityService", function () {
        return EntityService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _data_entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../data/entities */
      "hIAJ");

      var EntityService = /*#__PURE__*/function () {
        function EntityService() {
          _classCallCheck(this, EntityService);
        }

        _createClass(EntityService, [{
          key: "getEntities",
          value: function getEntities() {
            return _data_entities__WEBPACK_IMPORTED_MODULE_2__["ENTITIES"];
          }
        }, {
          key: "createEntities",
          value: function createEntities() {
            var entities = this.getEntities();

            for (var n = 0; n < entities.length; n++) {
              switch (entities[n].src) {
                case 'capitol.glb':
                  for (var i = 0; i < 2; i++) {
                    var posX = i * 9.65;

                    var _posZ = 2.645 * 4;

                    var _posY = 4.35 + 0.225; // const rotY = Math.random() * Math.PI;


                    for (var k = 0; k < 100; k++) {
                      entities[n].transforms.push({
                        rotation: {
                          x: Math.PI,
                          y: 0,
                          z: 0
                        },
                        position: {
                          x: posX,
                          y: _posY,
                          z: _posZ - k * 2.645
                        }
                      });
                    } // move out at least 5 units from center in current direction

                  }

                  break;

                case 'hall-ceiling.glb':
                  for (var _i5 = 0; _i5 < 2; _i5++) {
                    var _posX = _i5 * 9.65;

                    var _posZ2 = 2.645 * 4;

                    var _posY2 = 5.00371; // const rotY = Math.random() * Math.PI;

                    for (var _k = 0; _k < 100; _k++) {
                      entities[n].transforms.push({
                        rotation: {
                          x: 0,
                          y: _i5 * Math.PI,
                          z: 0
                        },
                        position: {
                          x: _posX,
                          y: _posY2,
                          z: _posZ2 - _k * (2.645 / 2)
                        }
                      });
                    } // move out at least 5 units from center in current direction

                  }

                  break;

                case 'pedistal.glb':
                  for (var _i6 = 0; _i6 < 2; _i6++) {
                    var _posX2 = _i6 * 9.65;

                    var _posZ3 = 2.645 * 4;

                    var _posY3 = 0.5 + 0.225; // const rotY = Math.random() * Math.PI;


                    for (var _k2 = 0; _k2 < 100; _k2++) {
                      entities[n].transforms.push({
                        rotation: {
                          x: Math.PI,
                          y: 0,
                          z: 0
                        },
                        position: {
                          x: _posX2,
                          y: _posY3,
                          z: _posZ3 - _k2 * 2.645
                        }
                      });
                    } // move out at least 5 units from center in current direction

                  }

                  break;

                case 'shaft.glb':
                  for (var _i7 = 0; _i7 < 2; _i7++) {
                    var _posX3 = _i7 * 9.65;

                    var _posZ4 = 2.645 * 4;

                    var _posY4 = 0.5 + 0.225; // const rotY = Math.random() * Math.PI;


                    for (var _k3 = 0; _k3 < 100; _k3++) {
                      entities[n].transforms.push({
                        rotation: {
                          x: 0,
                          y: 0,
                          z: 0
                        },
                        position: {
                          x: _posX3,
                          y: _posY4,
                          z: _posZ4 - _k3 * 2.645
                        }
                      });
                    } // move out at least 5 units from center in current direction

                  }

                  break;

                case 'chamber.glb':
                  for (var _i8 = 0; _i8 < 1; _i8++) {
                    var _posX4 = -5.2;

                    var _posZ5 = 0;

                    var _posY5 = 0 + 0.225; // const rotY = Math.random() * Math.PI;


                    for (var _k4 = 0; _k4 < 20; _k4++) {
                      entities[n].transforms.push({
                        rotation: {
                          x: 0,
                          y: 0,
                          z: 0
                        },
                        position: {
                          x: _posX4,
                          y: _posY5,
                          z: _posZ5 - 4.454 * _k4
                        }
                      });
                    }

                    for (var _k5 = 0; _k5 < 18; _k5++) {
                      entities[n].transforms.push({
                        rotation: {
                          x: 0,
                          y: Math.PI,
                          z: 0
                        },
                        position: {
                          x: 15.2,
                          y: _posY5,
                          z: _posZ5 - 4.454 * _k5
                        }
                      });
                    } // move out at least 5 units from center in current direction

                  }

                  break;

                case 'portal-pillar.glb':
                  entities[n].transforms.push({
                    rotation: {
                      x: 0,
                      y: -Math.PI / 4,
                      z: 0
                    },
                    position: {
                      x: 2.582,
                      y: -2.25,
                      z: 15.6291
                    }
                  });
                  entities[n].transforms.push({
                    rotation: {
                      x: 0,
                      y: Math.PI / 4 * 3,
                      z: 0
                    },
                    position: {
                      x: 5.6107,
                      y: -2.25,
                      z: 18.3544
                    }
                  }); // move out at least 5 units from center in current direction

                  break;

                case 'column-court.glb':
                  var posZ = -36.6416;
                  var posY = 2.70996;
                  var distance = 34.0016 - 36.6416;

                  for (var _i9 = 0; _i9 < 2; _i9++) {
                    var _posX5 = -11.4742 + _i9 * 11.4742 * 2; // const rotY = Math.random() * Math.PI;


                    for (var _k6 = 0; _k6 < 11; _k6++) {
                      entities[n].transforms.push({
                        rotation: {
                          x: 0,
                          y: 0,
                          z: 0
                        },
                        position: {
                          x: _posX5,
                          y: posY,
                          z: posZ - _k6 * distance
                        }
                      });
                    } // move out at least 5 units from center in current direction

                  }

                  for (var _k7 = 1; _k7 < 9; _k7++) {
                    var _distance = -11.4758 + 8.92584;

                    var _posX6 = -11.4742 - _k7 * _distance;

                    var _posZ6 = -36.6416;

                    entities[n].transforms.push({
                      rotation: {
                        x: 0,
                        y: 0,
                        z: 0
                      },
                      position: {
                        x: _posX6,
                        y: posY,
                        z: _posZ6
                      }
                    });
                  }

                  break;

                case 'corinthian-capital.glb':
                  for (var _i10 = 0; _i10 < 2; _i10++) {
                    var _posZ7 = -36.6416;

                    var _posY6 = 2.70996;

                    var _distance2 = 34.0016 - 36.6416;

                    var _posX7 = -11.4742 + _i10 * 11.4742 * 2; // const rotY = Math.random() * Math.PI;


                    for (var _k8 = 0; _k8 < 11; _k8++) {
                      entities[n].transforms.push({
                        rotation: {
                          x: 0,
                          y: 0,
                          z: 0
                        },
                        position: {
                          x: _posX7,
                          y: _posY6,
                          z: _posZ7 - _k8 * _distance2
                        }
                      });
                    } // move out at least 5 units from center in current direction

                  }

                  for (var _k9 = 1; _k9 < 9; _k9++) {
                    var _distance3 = -11.4758 + 8.92584;

                    var _posX8 = -11.4742 - _k9 * _distance3;

                    var _posY7 = 2.70996;

                    var _posZ8 = -36.6416;

                    entities[n].transforms.push({
                      rotation: {
                        x: 0,
                        y: 0,
                        z: 0
                      },
                      position: {
                        x: _posX8,
                        y: _posY7,
                        z: _posZ8
                      }
                    });
                  }

                  break;

                default:
                  if (!entities[n].transforms || entities[n].transforms.length === 0) {
                    entities[n].transforms.push({
                      rotation: {
                        x: 0,
                        y: 0,
                        z: 0
                      },
                      position: {
                        x: 0,
                        y: 0,
                        z: 0
                      }
                    });
                  } // move out at least 5 units from center in current direction


                  break;
              }
            }
          }
        }]);

        return EntityService;
      }();

      EntityService.ctorParameters = function () {
        return [];
      };

      EntityService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], EntityService);
      /***/
    },

    /***/
    "O/4L":
    /*!***********************************************************!*\
      !*** ./src/app/components/controls/controls.component.ts ***!
      \***********************************************************/

    /*! exports provided: ControlsComponent */

    /***/
    function O4L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ControlsComponent", function () {
        return ControlsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_controls_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./controls.component.html */
      "QPJR");
      /* harmony import */


      var _controls_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./controls.component.scss */
      "1w+u");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_control_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/control-state.service */
      "mgdp");

      var ControlsComponent = /*#__PURE__*/function () {
        function ControlsComponent(controlStateService) {
          _classCallCheck(this, ControlsComponent);

          this.controlStateService = controlStateService;
        }

        _createClass(ControlsComponent, [{
          key: "onMouseDown",
          value: function onMouseDown(ev) {
            ev.preventDefault(); // this.controlState.forward = true;

            this.controlState.mouseIsDown = true;
            this.controlState.mouseX = (ev.clientX / window.innerWidth - .5) * 2;
            this.controlState.mouseY = (ev.clientY / window.innerHeight - .5) * 2; // console.log(this.controlState.mouseX);
            // console.log(ev.clientX)
          }
        }, {
          key: "onMouseMove",
          value: function onMouseMove(ev) {
            ev.preventDefault();
            this.controlState.mouseX = (ev.clientX / window.innerWidth - .5) * 2;
            this.controlState.mouseY = (ev.clientY / window.innerHeight - .5) * 2; // console.log(this.controlState.mouseX);
          }
        }, {
          key: "onMouseUp",
          value: function onMouseUp(ev) {
            ev.preventDefault();
            this.controlState.mouseIsDown = false;
          }
        }, {
          key: "onPointerDown",
          value: function onPointerDown(ev) {
            // ev.preventDefault();
            this.controlState.mouseIsDown = true;
            this.controlState.mouseX = (ev.touches[0].clientX / window.innerWidth - .5) * 2;
            this.controlState.mouseY = (ev.touches[0].clientY / window.innerHeight - .5) * 2;
          }
        }, {
          key: "onPointerMove",
          value: function onPointerMove(ev) {
            // ev.preventDefault();
            // console.log(ev);
            this.controlState.mouseX = (ev.touches[0].clientX / window.innerWidth - .5) * 2;
            this.controlState.mouseY = (ev.touches[0].clientY / window.innerHeight - .5) * 2; // console.log(this.controlState.mouseX);
          }
        }, {
          key: "onTouchEnd",
          value: function onTouchEnd(ev) {
            // ev.preventDefault();
            this.controlState.mouseIsDown = false;
          }
        }, {
          key: "onKeyDown",
          value: function onKeyDown(ev) {
            // console.log(`The user just pressed ${ev.key}!`);
            switch (ev.keyCode) {
              case 38:
              /*up*/

              case 87:
                /*W*/
                this.controlState.forward = true;
                break;

              case 40:
              /*down*/

              case 83:
                /*S*/
                this.controlState.backwards = true;
                break;

              case 37:
              /*left*/

              case 65:
                /*A*/
                this.controlState.left = true;
                break;

              case 39:
              /*right*/

              case 68:
                /*D*/
                this.controlState.right = true;
                break;
            }
          }
        }, {
          key: "onKeyUp",
          value: function onKeyUp(ev) {
            // console.log(`The user just released ${ev.key}!`);
            switch (ev.keyCode) {
              case 38:
              /*up*/

              case 87:
                /*W*/
                this.controlState.forward = false;
                break;

              case 40:
              /*down*/

              case 83:
                /*S*/
                this.controlState.backwards = false;
                break;

              case 37:
              /*left*/

              case 65:
                /*A*/
                this.controlState.left = false;
                break;

              case 39:
              /*right*/

              case 68:
                /*D*/
                this.controlState.right = false;
                break;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.controlState = this.controlStateService.getControlState();
          }
        }]);

        return ControlsComponent;
      }();

      ControlsComponent.ctorParameters = function () {
        return [{
          type: src_app_services_control_state_service__WEBPACK_IMPORTED_MODULE_4__["ControlStateService"]
        }];
      };

      ControlsComponent.propDecorators = {
        onMouseDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['document:mousedown', ['$event']]
        }],
        onMouseMove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['document:mousemove', ['$event']]
        }],
        onMouseUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['document:mouseup', ['$event']]
        }],
        onPointerDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['document:touchstart', ['$event']]
        }],
        onPointerMove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['document:touchmove', ['$event']]
        }],
        onTouchEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['document:touchend', ['$event']]
        }],
        onKeyDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['document:keydown', ['$event']]
        }],
        onKeyUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['document:keyup', ['$event']]
        }]
      };
      ControlsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'pgm-controls',
        template: _raw_loader_controls_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_controls_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ControlsComponent);
      /***/
    },

    /***/
    "QPJR":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/controls/controls.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QPJR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n";
      /***/
    },

    /***/
    "R6v/":
    /*!*******************************************************!*\
      !*** ./src/app/components/stage/stage.component.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function R6v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  display: block;\n  width: 100%;\n  height: 100%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\na {\n  color: #08f;\n}\n\n#notSupported {\n  width: 50%;\n  margin: auto;\n  background-color: #f00;\n  margin-top: 20px;\n  padding: 10px;\n}\n\n.container {\n  width: 100%;\n  height: 100%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzdGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtBQUNGOztBQUNBO0VBQ0UsV0FBQTtBQUVGOztBQUFBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUdGOztBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7QUFHRiIsImZpbGUiOiJzdGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcbmEge1xyXG4gIGNvbG9yOiAjMDhmO1xyXG59XHJcbiNub3RTdXBwb3J0ZWQge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMDA7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'pergamon';
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<pgm-stage></pgm-stage>\r\n";
      /***/
    },

    /***/
    "XhG+":
    /*!********************************************!*\
      !*** ./src/app/shader/instanced-shader.ts ***!
      \********************************************/

    /*! exports provided: vertexShader, fragmentShader */

    /***/
    function XhG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "vertexShader", function () {
        return vertexShader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fragmentShader", function () {
        return fragmentShader;
      });

      var vertexShader = "precision highp float;\n\n  uniform mat4 modelViewMatrix;\n  uniform mat4 projectionMatrix;\n\n  attribute vec3 position;\n  attribute vec3 offset;\n  attribute vec2 uv;\n  attribute vec4 orientation;\n\n  varying vec2 vUv;\n\n  // http://www.geeks3d.com/20141201/how-to-rotate-a-vertex-by-a-quaternion-in-glsl/\n\n  vec3 applyQuaternionToVector( vec4 q, vec3 v ){\n\n    return v + 2.0 * cross( q.xyz, cross( q.xyz, v ) + q.w * v );\n\n  }\n\n  void main() {\n\n    vec3 vPosition = applyQuaternionToVector( orientation, position );\n\n    vUv = uv;\n\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( offset + vPosition, 1.0 );\n\n  }";
      var fragmentShader = "precision highp float;\n\n  uniform sampler2D map;\n\n  varying vec2 vUv;\n\n  void main() {\n\n    gl_FragColor = texture2D(map, vUv);\n\n  }";
      /***/
    },

    /***/
    "YxNL":
    /*!*****************************************!*\
      !*** ./src/app/services/sky.service.ts ***!
      \*****************************************/

    /*! exports provided: SkyService */

    /***/
    function YxNL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SkyService", function () {
        return SkyService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! three */
      "Womt");
      /* harmony import */


      var three_examples_jsm_objects_Sky__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! three/examples/jsm/objects/Sky */
      "AroK");

      var SkyService = /*#__PURE__*/function () {
        function SkyService() {
          _classCallCheck(this, SkyService);
        }

        _createClass(SkyService, [{
          key: "makeSky",
          value: function makeSky(scene) {
            var light = new three__WEBPACK_IMPORTED_MODULE_2__["DirectionalLight"](0xffffff, 0.8);
            light.target.position.set(0, 0, 0);
            var hemilight = new three__WEBPACK_IMPORTED_MODULE_2__["HemisphereLight"](0xffffbb, 0x645f55, 0.8);
            scene.add(hemilight);
            scene.add(light);
            var sky = new three_examples_jsm_objects_Sky__WEBPACK_IMPORTED_MODULE_3__["Sky"]();
            sky.scale.setScalar(10000);
            scene.add(sky);
            var uniforms = sky.material.uniforms;
            uniforms.turbidity.value = 10;
            uniforms.rayleigh.value = 2; //uniforms.luminance.value = 1;

            uniforms.mieCoefficient.value = 0.005;
            uniforms.mieDirectionalG.value = 0.8;
            var parameters = {
              distance: 400,
              inclination: 0.15,
              azimuth: 0.3
            };
            var theta = Math.PI * (parameters.inclination - 0.5);
            var phi = 2 * Math.PI * (parameters.azimuth - 0.5);
            light.position.x = parameters.distance * Math.cos(phi);
            light.position.y = parameters.distance * Math.sin(phi) * Math.sin(theta);
            light.position.z = parameters.distance * Math.sin(phi) * Math.cos(theta);
            sky.material.uniforms.sunPosition.value = light.position.copy(light.position);
            light.position.z = -parameters.distance * Math.sin(phi) * Math.cos(theta);
          }
        }]);

        return SkyService;
      }();

      SkyService.ctorParameters = function () {
        return [];
      };

      SkyService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], SkyService);
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _components_stage_stage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/stage/stage.component */
      "M8cW");
      /* harmony import */


      var _components_instanced_object_instanced_object_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/instanced-object/instanced-object.component */
      "7VzK");
      /* harmony import */


      var _components_controls_controls_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/controls/controls.component */
      "O/4L");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_stage_stage_component__WEBPACK_IMPORTED_MODULE_5__["StageComponent"], _components_instanced_object_instanced_object_component__WEBPACK_IMPORTED_MODULE_6__["InstancedObjectComponent"], _components_controls_controls_component__WEBPACK_IMPORTED_MODULE_7__["ControlsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "ZCbq":
    /*!**************************************!*\
      !*** ./src/app/components/Player.js ***!
      \**************************************/

    /*! exports provided: Player */

    /***/
    function ZCbq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Player", function () {
        return Player;
      });
      /* harmony import */


      var yuka__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! yuka */
      "51wi");
      /**
       * @author Mugen87 / https://github.com/Mugen87
       */


      var startPosition = new yuka__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
      var endPosition = new yuka__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();

      var Player = /*#__PURE__*/function (_yuka__WEBPACK_IMPORT) {
        _inherits(Player, _yuka__WEBPACK_IMPORT);

        var _super = _createSuper(Player);

        function Player() {
          var _this3;

          _classCallCheck(this, Player);

          _this3 = _super.call(this);
          _this3.maxSpeed = 4;
          _this3.height = 2;
          _this3.head = new yuka__WEBPACK_IMPORTED_MODULE_0__["GameEntity"]();

          _this3.add(_this3.head);

          _this3.updateOrientation = false;
          _this3.navMesh = null;
          _this3.currentRegion = null;
          return _this3;
        }

        _createClass(Player, [{
          key: "update",
          value: function update(delta) {
            startPosition.copy(this.position);

            _get(_getPrototypeOf(Player.prototype), "update", this).call(this, delta);

            endPosition.copy(this.position); // ensure the entity stays inside its navmesh

            this.currentRegion = this.navMesh.clampMovement(this.currentRegion, startPosition, endPosition, this.position); // adjust height of player according to the ground

            var distance = this.currentRegion.distanceToPoint(this.position);
            this.position.y -= distance * 0.2; // smooth transition
          }
        }]);

        return Player;
      }(yuka__WEBPACK_IMPORTED_MODULE_0__["MovingEntity"]);
      /***/

    },

    /***/
    "hIAJ":
    /*!**********************************!*\
      !*** ./src/app/data/entities.ts ***!
      \**********************************/

    /*! exports provided: ENTITIES */

    /***/
    function hIAJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ENTITIES", function () {
        return ENTITIES;
      });

      var ENTITIES = [{
        src: 'capitol.glb',
        transforms: [],
        "static": true,
        mirror: {
          x: true,
          y: true
        }
      }, {
        src: 'corinthian-capital.glb',
        transform: {
          rotation: {
            x: 0,
            y: Math.PI / 180 * -40.5,
            z: 0
          },
          position: {
            x: -18.7705,
            z: 52.6765,
            y: -5.02641
          }
        },
        transforms: [],
        "static": true,
        mirror: {
          x: false,
          y: false
        }
      }, {
        src: 'pedistal.glb',
        transforms: [],
        "static": true,
        mirror: {
          x: false,
          y: false
        }
      }, {
        src: 'shaft.glb',
        transforms: [],
        "static": true,
        mirror: {
          x: false,
          y: false
        }
      }, {
        src: 'column-court.glb',
        transform: {
          rotation: {
            x: 0,
            y: Math.PI / 180 * -40.5,
            z: 0
          },
          position: {
            x: -18.7705,
            z: 52.6765,
            y: -5.02641
          }
        },
        transforms: [],
        "static": true,
        mirror: {
          x: false,
          y: false
        }
      }, {
        src: 'chamber.glb',
        transforms: [],
        "static": true,
        mirror: {
          x: false,
          y: false
        }
      }, {
        src: 'road.glb',
        transforms: [],
        "static": true,
        mirror: {
          x: false,
          y: false
        }
      }, {
        src: 'stoa-floor.glb',
        transforms: [],
        "static": true,
        mirror: {
          x: false,
          y: false
        }
      }, {
        src: 'stairs.glb',
        transforms: [],
        "static": true,
        mirror: {
          x: false,
          y: false
        }
      }, {
        src: 'portal-pillar.glb',
        transforms: [],
        "static": true,
        mirror: {
          x: false,
          y: false
        }
      }, {
        src: 'roof.glb',
        transforms: [],
        "static": true,
        mirror: {
          x: false,
          y: false
        }
      }, {
        src: 'architrave.glb',
        transforms: [],
        "static": true,
        mirror: {
          x: false,
          y: false
        }
      }, {
        src: 'hall-ceiling.glb',
        transforms: [],
        "static": true,
        mirror: {
          x: false,
          y: false
        }
      }, {
        src: 'propylon-walls.glb',
        transforms: [{
          rotation: {
            x: 0,
            y: Math.PI / 180 * -40.5,
            z: 0
          },
          position: {
            x: -18.7705,
            z: 52.6765,
            y: -5.02641
          }
        }],
        "static": true,
        mirror: {
          x: false,
          y: false
        }
      }, {
        src: 'propylon-court-walls.glb',
        transforms: [{
          rotation: {
            x: 0,
            y: Math.PI / 180 * -40.5,
            z: 0
          },
          position: {
            x: -18.7705,
            z: 52.6765,
            y: -5.02641
          }
        }],
        "static": true,
        mirror: {
          x: false,
          y: false
        }
      }, {
        src: 'propylon-court-floor.glb',
        transforms: [{
          rotation: {
            x: 0,
            y: Math.PI / 180 * -40.5,
            z: 0
          },
          position: {
            x: -18.7705,
            z: 52.6765,
            y: -5.02641
          }
        }],
        "static": true,
        mirror: {
          x: false,
          y: false
        }
      }, {
        src: 'propylon-architrave.glb',
        transforms: [{
          rotation: {
            x: 0,
            y: Math.PI / 180 * -40.5,
            z: 0
          },
          position: {
            x: -18.7705,
            z: 52.6765,
            y: -5.02641
          }
        }],
        "static": true,
        mirror: {
          x: false,
          y: false
        }
      }, {
        src: 'propylon-court-architrave.glb',
        transforms: [{
          rotation: {
            x: 0,
            y: Math.PI / 180 * -40.5,
            z: 0
          },
          position: {
            x: -18.7705,
            z: 52.6765,
            y: -5.02641
          }
        }],
        "static": true,
        mirror: {
          x: false,
          y: false
        }
      }];
      /***/
    },

    /***/
    "mgdp":
    /*!***************************************************!*\
      !*** ./src/app/services/control-state.service.ts ***!
      \***************************************************/

    /*! exports provided: ControlStateService */

    /***/
    function mgdp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ControlStateService", function () {
        return ControlStateService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _data_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../data/controls */
      "wtQz");

      var ControlStateService = /*#__PURE__*/function () {
        function ControlStateService() {
          _classCallCheck(this, ControlStateService);
        }

        _createClass(ControlStateService, [{
          key: "getControlState",
          value: function getControlState() {
            return _data_controls__WEBPACK_IMPORTED_MODULE_2__["CONTROLS"];
          }
        }]);

        return ControlStateService;
      }();

      ControlStateService.ctorParameters = function () {
        return [];
      };

      ControlStateService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ControlStateService);
      /***/
    },

    /***/
    "rCu5":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/instanced-object/instanced-object.component.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function rCu5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnN0YW5jZWQtb2JqZWN0LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "wtQz":
    /*!**********************************!*\
      !*** ./src/app/data/controls.ts ***!
      \**********************************/

    /*! exports provided: CONTROLS */

    /***/
    function wtQz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CONTROLS", function () {
        return CONTROLS;
      });

      var CONTROLS = {
        forward: false,
        backwards: false,
        left: false,
        right: false,
        mouseIsDown: false,
        mouseX: 0,
        mouseY: 0
      };
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map