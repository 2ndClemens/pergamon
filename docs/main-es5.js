(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (self["webpackChunkpergamon"] = self["webpackChunkpergamon"] || []).push([["main"], {
    /***/
    8255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
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
      webpackEmptyAsyncContext.id = 8255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    1053:
    /*!**************************************!*\
      !*** ./src/app/components/Player.js ***!
      \**************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Player": function Player() {
          return (
            /* binding */
            _Player
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var yuka__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! yuka */
      1255);
      /**
       * @author Mugen87 / https://github.com/Mugen87
       */


      var startPosition = new yuka__WEBPACK_IMPORTED_MODULE_0__.Vector3();
      var endPosition = new yuka__WEBPACK_IMPORTED_MODULE_0__.Vector3();

      var _Player = /*#__PURE__*/function (_yuka__WEBPACK_IMPORT) {
        _inherits(_Player, _yuka__WEBPACK_IMPORT);

        var _super = _createSuper(_Player);

        function _Player() {
          var _this;

          _classCallCheck(this, _Player);

          _this = _super.call(this);
          _this.maxSpeed = 4;
          _this.height = 2;
          _this.head = new yuka__WEBPACK_IMPORTED_MODULE_0__.GameEntity();

          _this.add(_this.head);

          _this.updateOrientation = false;
          _this.navMesh = null;
          _this.currentRegion = null;
          return _this;
        }

        _createClass(_Player, [{
          key: "update",
          value: function update(delta) {
            startPosition.copy(this.position);

            _get(_getPrototypeOf(_Player.prototype), "update", this).call(this, delta);

            endPosition.copy(this.position); // ensure the entity stays inside its navmesh

            this.currentRegion = this.navMesh.clampMovement(this.currentRegion, startPosition, endPosition, this.position); // adjust height of player according to the ground

            var distance = this.currentRegion.distanceToPoint(this.position);
            this.position.y -= distance * 0.2; // smooth transition
          }
        }]);

        return _Player;
      }(yuka__WEBPACK_IMPORTED_MODULE_0__.MovingEntity);
      /***/

    },

    /***/
    158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      9895);

      var routes = [];

      var _AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      _AppRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      })], _AppRoutingModule);
      /***/
    },

    /***/
    5041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./app.component.html */
      1106);
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.scss */
      3069);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'pergamon';
      };

      _AppComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AppComponent);
      /***/
    },

    /***/
    6747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.module */
      158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      5041);
      /* harmony import */


      var _components_stage_stage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/stage/stage.component */
      841);
      /* harmony import */


      var _components_instanced_object_instanced_object_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/instanced-object/instanced-object.component */
      6691);
      /* harmony import */


      var _components_controls_controls_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/controls/controls.component */
      1656);

      var _AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      _AppModule = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_stage_stage_component__WEBPACK_IMPORTED_MODULE_2__.StageComponent, _components_instanced_object_instanced_object_component__WEBPACK_IMPORTED_MODULE_3__.InstancedObjectComponent, _components_controls_controls_component__WEBPACK_IMPORTED_MODULE_4__.ControlsComponent],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      })], _AppModule);
      /***/
    },

    /***/
    1656:
    /*!***********************************************************!*\
      !*** ./src/app/components/controls/controls.component.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ControlsComponent": function ControlsComponent() {
          return (
            /* binding */
            _ControlsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _raw_loader_controls_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./controls.component.html */
      9394);
      /* harmony import */


      var _controls_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./controls.component.scss */
      8673);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var src_app_services_control_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/control-state.service */
      3057);

      var _ControlsComponent = /*#__PURE__*/function () {
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

      _ControlsComponent.ctorParameters = function () {
        return [{
          type: src_app_services_control_state_service__WEBPACK_IMPORTED_MODULE_2__.ControlStateService
        }];
      };

      _ControlsComponent.propDecorators = {
        onMouseDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
          args: ['document:mousedown', ['$event']]
        }],
        onMouseMove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
          args: ['document:mousemove', ['$event']]
        }],
        onMouseUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
          args: ['document:mouseup', ['$event']]
        }],
        onPointerDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
          args: ['document:touchstart', ['$event']]
        }],
        onPointerMove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
          args: ['document:touchmove', ['$event']]
        }],
        onTouchEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
          args: ['document:touchend', ['$event']]
        }],
        onKeyDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
          args: ['document:keydown', ['$event']]
        }],
        onKeyUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
          args: ['document:keyup', ['$event']]
        }]
      };
      _ControlsComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'pgm-controls',
        template: _raw_loader_controls_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        styles: [_controls_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ControlsComponent);
      /***/
    },

    /***/
    6691:
    /*!***************************************************************************!*\
      !*** ./src/app/components/instanced-object/instanced-object.component.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InstancedObjectComponent": function InstancedObjectComponent() {
          return (
            /* binding */
            _InstancedObjectComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _raw_loader_instanced_object_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./instanced-object.component.html */
      5606);
      /* harmony import */


      var _instanced_object_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./instanced-object.component.scss */
      9330);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! three */
      7758);
      /* harmony import */


      var three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! three/examples/jsm/loaders/GLTFLoader.js */
      5192);
      /* harmony import */


      var three_examples_jsm_utils_BufferGeometryUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! three/examples/jsm/utils/BufferGeometryUtils */
      6444);
      /* harmony import */


      var _shader_instanced_shader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shader/instanced-shader */
      7363);

      var _InstancedObjectComponent = /*#__PURE__*/function () {
        function InstancedObjectComponent() {
          _classCallCheck(this, InstancedObjectComponent);

          this.lights = true; //instanceBufferSpeed;

          this.vertexShader = _shader_instanced_shader__WEBPACK_IMPORTED_MODULE_4__.vertexShader;
          this.fragmentShader = _shader_instanced_shader__WEBPACK_IMPORTED_MODULE_4__.fragmentShader;
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
            var _this2 = this;

            this.instances = this.transforms.length;
            var loader = new three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_2__.GLTFLoader().setPath('./assets/models/');
            loader.load(this.src, function (gltf) {
              // console.log(gltf.scene);
              // const loadedGeometry = gltf.scene.children[0].geometry;
              var g1 = gltf.scene.children[0].geometry; // const matrix = new THREE.Matrix4();

              var mergeGeometry = new three__WEBPACK_IMPORTED_MODULE_5__.BufferGeometry();
              mergeGeometry = three_examples_jsm_utils_BufferGeometryUtils__WEBPACK_IMPORTED_MODULE_3__.BufferGeometryUtils.mergeBufferGeometries([g1]);

              if (_this2.mirror.x) {
                g1.rotateY(Math.PI);
                mergeGeometry = three_examples_jsm_utils_BufferGeometryUtils__WEBPACK_IMPORTED_MODULE_3__.BufferGeometryUtils.mergeBufferGeometries([mergeGeometry, g1]); // matrix.set(-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);

                g1.scale(-1, 1, 1); // this.flipNormals(g1);

                mergeGeometry = three_examples_jsm_utils_BufferGeometryUtils__WEBPACK_IMPORTED_MODULE_3__.BufferGeometryUtils.mergeBufferGeometries([mergeGeometry, g1]);
                g1.rotateY(Math.PI);
                mergeGeometry = three_examples_jsm_utils_BufferGeometryUtils__WEBPACK_IMPORTED_MODULE_3__.BufferGeometryUtils.mergeBufferGeometries([mergeGeometry, g1]);
              }

              var loadedMaterial = gltf.scene.children[0].material;
              /* const loadedMaterial = new THREE.MeshBasicMaterial();
              loadedMaterial.map = gltf.scene.children[0].material.map; */

              if (!_this2.lights) {
                var geometry = mergeGeometry; // per instance data

                _this2.instanceBuffer = new three__WEBPACK_IMPORTED_MODULE_5__.InstancedInterleavedBuffer(new Float32Array(_this2.instances * 8), 8, 1).setUsage(three__WEBPACK_IMPORTED_MODULE_5__.DynamicDrawUsage);
                /* this.instanceBufferSpeed = new THREE.InstancedInterleavedBuffer(
                  new Float32Array(this.instances * 8),
                  8,
                  1,
                ).setUsage(THREE.DynamicDrawUsage); */

                _this2.offsets = new three__WEBPACK_IMPORTED_MODULE_5__.InterleavedBufferAttribute(_this2.instanceBuffer, 3, 0); // this.speeds = new THREE.InterleavedBufferAttribute(this.instanceBufferSpeed, 3, 0);

                var vector = new three__WEBPACK_IMPORTED_MODULE_5__.Quaternion();

                for (var _i = 0, ul = _this2.instances; _i < ul; _i++) {
                  var x = _this2.transforms[_i].position.x;
                  var y = _this2.transforms[_i].position.y;
                  var z = _this2.transforms[_i].position.z; // move out at least 5 units from center in current direction

                  _this2.offsets.setXYZ(_i, x, y, z); // this.speeds.setXYZ(i, x * 0.01, 0, z * 0.01);

                }

                geometry.setAttribute('offset', _this2.offsets); // per mesh translation

                _this2.orientations = new three__WEBPACK_IMPORTED_MODULE_5__.InterleavedBufferAttribute(_this2.instanceBuffer, 4, 4);

                for (var _i2 = 0, _ul = _this2.orientations.count; _i2 < _ul; _i2++) {
                  vector.setFromEuler(new three__WEBPACK_IMPORTED_MODULE_5__.Euler(_this2.transforms[_i2].rotation.x, _this2.transforms[_i2].rotation.y, _this2.transforms[_i2].rotation.z)); // vector.normalize();

                  _this2.orientations.setXYZW(_i2, 0, vector.y, 0, 1);

                  _this2.orientations.setXYZW(_i2, vector.x, vector.y, vector.z, vector.w); // this.orientations.setY( i, vector.y );

                }

                geometry.setAttribute('orientation', _this2.orientations); // per mesh orientation
                // material

                var texture = loadedMaterial.map;
                var ambientMap;

                if (gltf.scene.children[0].geometry.attributes.uv2) {
                  ambientMap = new three__WEBPACK_IMPORTED_MODULE_5__.TextureLoader().load('./assets/textures/stoa-floor-ao.jpg');
                }

                if (texture) {
                  texture.anisotropy = _this2.renderer.capabilities.getMaxAnisotropy();
                }

                var material = new three__WEBPACK_IMPORTED_MODULE_5__.RawShaderMaterial({
                  uniforms: {
                    map: {
                      value: texture
                    },
                    ambientMap: ambientMap
                  },
                  vertexShader: _this2.vertexShader,
                  fragmentShader: _this2.fragmentShader,
                  side: three__WEBPACK_IMPORTED_MODULE_5__.FrontSide,
                  transparent: false
                });

                var _mesh = new three__WEBPACK_IMPORTED_MODULE_5__.Mesh(geometry, material);

                if (_this2.transform && _this2.transform.rotation) {
                  _mesh.rotation.set(_this2.transform.rotation.x, _this2.transform.rotation.y, _this2.transform.rotation.z);
                }

                if (_this2.transform && _this2.transform.position) {
                  _mesh.position.set(_this2.transform.position.x, _this2.transform.position.y, _this2.transform.position.z);
                }

                _mesh.frustumCulled = false;
                _mesh.matrixAutoUpdate = false;

                _mesh.updateMatrix();

                _this2.scene.add(_mesh);
              } else {
                var count = _this2.transforms.length;

                if (gltf.scene.children[0].geometry.attributes.uv2) {
                  var aoMap = new three__WEBPACK_IMPORTED_MODULE_5__.TextureLoader().load('assets/textures/stoa-floor-ao.png', function (texture) {
                    texture.needsUpdate = true;
                    texture.flipY = false;
                  });
                  loadedMaterial.aoMap = aoMap;
                  loadedMaterial.aoMapIntensity = 2;
                }

                var mesh = new three__WEBPACK_IMPORTED_MODULE_5__.InstancedMesh(mergeGeometry, loadedMaterial, count);
                var dummy = new three__WEBPACK_IMPORTED_MODULE_5__.Object3D();

                for (var i = 0; i < count; i++) {
                  dummy.position.set(_this2.transforms[i].position.x, _this2.transforms[i].position.y, _this2.transforms[i].position.z);
                  dummy.rotation.set(_this2.transforms[i].rotation.x, _this2.transforms[i].rotation.y, _this2.transforms[i].rotation.z);
                  dummy.updateMatrix();
                  mesh.setMatrixAt(i, dummy.matrix);
                }
              }

              if (_this2.transform && _this2.transform.rotation) {
                mesh.rotation.set(_this2.transform.rotation.x, _this2.transform.rotation.y, _this2.transform.rotation.z);
              }

              if (_this2.transform && _this2.transform.position) {
                mesh.position.set(_this2.transform.position.x, _this2.transform.position.y, _this2.transform.position.z);
              }

              mesh.matrixAutoUpdate = false;
              mesh.updateMatrix();

              _this2.scene.add(mesh);
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

      _InstancedObjectComponent.ctorParameters = function () {
        return [];
      };

      _InstancedObjectComponent.propDecorators = {
        scene: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
        }],
        renderer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
        }],
        changeStep: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
        }],
        src: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
        }],
        mirror: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
        }],
        transforms: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
        }],
        transform: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
        }],
        lights: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
        }]
      };
      _InstancedObjectComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'pgm-instanced-object',
        template: _raw_loader_instanced_object_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectionStrategy.OnPush,
        styles: [_instanced_object_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _InstancedObjectComponent);
      /***/
    },

    /***/
    841:
    /*!*****************************************************!*\
      !*** ./src/app/components/stage/stage.component.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StageComponent": function StageComponent() {
          return (
            /* binding */
            _StageComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _raw_loader_stage_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./stage.component.html */
      1355);
      /* harmony import */


      var _stage_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./stage.component.scss */
      3153);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var three__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! three */
      7758);
      /* harmony import */


      var yuka__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! yuka */
      1255);
      /* harmony import */


      var _Player_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../Player.js */
      1053);
      /* harmony import */


      var three_examples_jsm_libs_stats_module_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! three/examples/jsm/libs/stats.module.js */
      8299);
      /* harmony import */


      var src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/entity.service */
      9788);
      /* harmony import */


      var src_app_services_sky_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/sky.service */
      2775);
      /* harmony import */


      var src_app_services_camera_position_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/camera-position.service */
      7640);

      var _StageComponent = /*#__PURE__*/function () {
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
            var _this3 = this;

            this.clock = new three__WEBPACK_IMPORTED_MODULE_8__.Clock();
            this.entityManager = new yuka__WEBPACK_IMPORTED_MODULE_2__.EntityManager();
            this.time = new yuka__WEBPACK_IMPORTED_MODULE_2__.Time();
            this.container = document.getElementById('container');
            this.camera = new three__WEBPACK_IMPORTED_MODULE_8__.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.3, 500);
            /*    this.camera.position.x = 5;
               this.camera.position.y = 1.6;
               this.camera.position.z = -5; */

            this.camera.matrixAutoUpdate = false; // this.camera.rotation.y = Math.PI;

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
            this.stats = (0, three_examples_jsm_libs_stats_module_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
            this.container.appendChild(this.stats.dom);
            /*     this.controls = new FirstPersonControls(this.camera, this.renderer.domElement);
                this.controls.movementSpeed = 10;
                this.controls.lookSpeed = 0.1;
                this.controls.lookAt(0, 0, 0);
            
                this.controls.constrainVertical = true;
                this.controls.verticalMax = Math.PI * .55;
                this.controls.verticalMin = Math.PI * .35; */

            this.player = new _Player_js__WEBPACK_IMPORTED_MODULE_3__.Player();
            var loader2 = new yuka__WEBPACK_IMPORTED_MODULE_2__.NavMeshLoader();
            loader2.load('./assets/models/navmesh.glb', {
              epsilonCoplanarTest: 0.25
            }).then(function (navMesh) {
              // visualize convex regions
              // const navMeshGroup = createConvexRegionHelper( navMesh );
              // scene.add( navMeshGroup );
              _this3.player.navMesh = navMesh;

              _this3.player.head.setRenderComponent(_this3.camera, _this3.sync);

              _this3.player.position.set(5, 0, -5);

              _this3.entityManager.add(_this3.player); // const loadingScreen = document.getElementById( 'loading-screen' );
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

      _StageComponent.ctorParameters = function () {
        return [{
          type: src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_5__.EntityService
        }, {
          type: src_app_services_sky_service__WEBPACK_IMPORTED_MODULE_6__.SkyService
        }, {
          type: src_app_services_camera_position_service__WEBPACK_IMPORTED_MODULE_7__.CameraPositionService
        }];
      };

      _StageComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'pgm-stage',
        template: _raw_loader_stage_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectionStrategy.OnPush,
        styles: [_stage_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _StageComponent);
      /***/
    },

    /***/
    3006:
    /*!**********************************!*\
      !*** ./src/app/data/controls.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CONTROLS": function CONTROLS() {
          return (
            /* binding */
            _CONTROLS
          );
        }
        /* harmony export */

      });

      var _CONTROLS = {
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
    6587:
    /*!**********************************!*\
      !*** ./src/app/data/entities.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ENTITIES": function ENTITIES() {
          return (
            /* binding */
            _ENTITIES
          );
        }
        /* harmony export */

      });

      var _ENTITIES = [{
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
        src: 'corinthian-capital-propylon.glb',
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
        src: 'column-propylon.glb',
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
      } // { src: 'navmesh.glb', transforms: [], static: true, mirror: { x: false, y: false } },
      ];
      /***/
    },

    /***/
    7640:
    /*!*****************************************************!*\
      !*** ./src/app/services/camera-position.service.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CameraPositionService": function CameraPositionService() {
          return (
            /* binding */
            _CameraPositionService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _control_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./control-state.service */
      3057);
      /* harmony import */


      var yuka__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! yuka */
      1255);

      var _CameraPositionService = /*#__PURE__*/function () {
        function CameraPositionService(controlStateService) {
          _classCallCheck(this, CameraPositionService);

          this.controlStateService = controlStateService;
          this.direction = new yuka__WEBPACK_IMPORTED_MODULE_1__.Vector3();
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

      _CameraPositionService.ctorParameters = function () {
        return [{
          type: _control_state_service__WEBPACK_IMPORTED_MODULE_0__.ControlStateService
        }];
      };

      _CameraPositionService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _CameraPositionService);
      /***/
    },

    /***/
    3057:
    /*!***************************************************!*\
      !*** ./src/app/services/control-state.service.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ControlStateService": function ControlStateService() {
          return (
            /* binding */
            _ControlStateService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _data_controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../data/controls */
      3006);

      var _ControlStateService = /*#__PURE__*/function () {
        function ControlStateService() {
          _classCallCheck(this, ControlStateService);
        }

        _createClass(ControlStateService, [{
          key: "getControlState",
          value: function getControlState() {
            return _data_controls__WEBPACK_IMPORTED_MODULE_0__.CONTROLS;
          }
        }]);

        return ControlStateService;
      }();

      _ControlStateService.ctorParameters = function () {
        return [];
      };

      _ControlStateService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _ControlStateService);
      /***/
    },

    /***/
    9788:
    /*!********************************************!*\
      !*** ./src/app/services/entity.service.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EntityService": function EntityService() {
          return (
            /* binding */
            _EntityService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _data_entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../data/entities */
      6587);

      var _EntityService = /*#__PURE__*/function () {
        function EntityService() {
          _classCallCheck(this, EntityService);
        }

        _createClass(EntityService, [{
          key: "getEntities",
          value: function getEntities() {
            return _data_entities__WEBPACK_IMPORTED_MODULE_0__.ENTITIES;
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

                case 'corinthian-capital-propylon.glb':
                  for (var _i11 = 0; _i11 < 2; _i11++) {
                    var _posZ9 = -13.5824;

                    var _posY8 = 2.94571;

                    var _distance4 = 34.0016 - 36.6416;

                    var _posX9 = -5.25 + _i11 * 11.4742 * 2; // const rotY = Math.random() * Math.PI;


                    for (var _k10 = 0; _k10 < 11; _k10++) {
                      entities[n].transforms.push({
                        rotation: {
                          x: 0,
                          y: 0,
                          z: 0
                        },
                        position: {
                          x: _posX9,
                          y: _posY8,
                          z: _posZ9 - _k10 * _distance4
                        }
                      });
                    } // move out at least 5 units from center in current direction

                  }

                  for (var _k11 = 1; _k11 < 9; _k11++) {
                    var _distance5 = -11.4758 + 8.92584;

                    var _posX10 = -11.4742 - _k11 * _distance5;

                    var _posY9 = 2.70996;

                    var _posZ10 = -36.6416;

                    entities[n].transforms.push({
                      rotation: {
                        x: 0,
                        y: 0,
                        z: 0
                      },
                      position: {
                        x: _posX10,
                        y: _posY9,
                        z: _posZ10
                      }
                    });
                  }

                  break;

                case 'column-propylon.glb':
                  for (var _i12 = 0; _i12 < 2; _i12++) {
                    var _posZ11 = -13.5824;

                    var _posY10 = 2.94571;

                    var _distance6 = 34.0016 - 36.6416;

                    var _posX11 = -5.25 + _i12 * 11.4742 * 2; // const rotY = Math.random() * Math.PI;


                    for (var _k12 = 0; _k12 < 11; _k12++) {
                      entities[n].transforms.push({
                        rotation: {
                          x: 0,
                          y: 0,
                          z: 0
                        },
                        position: {
                          x: _posX11,
                          y: _posY10,
                          z: _posZ11 - _k12 * _distance6
                        }
                      });
                    } // move out at least 5 units from center in current direction

                  }

                  for (var _k13 = 1; _k13 < 9; _k13++) {
                    var _distance7 = -11.4758 + 8.92584;

                    var _posX12 = -11.4742 - _k13 * _distance7;

                    var _posY11 = 2.70996;

                    var _posZ12 = -36.6416;

                    entities[n].transforms.push({
                      rotation: {
                        x: 0,
                        y: 0,
                        z: 0
                      },
                      position: {
                        x: _posX12,
                        y: _posY11,
                        z: _posZ12
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

      _EntityService.ctorParameters = function () {
        return [];
      };

      _EntityService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _EntityService);
      /***/
    },

    /***/
    2775:
    /*!*****************************************!*\
      !*** ./src/app/services/sky.service.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SkyService": function SkyService() {
          return (
            /* binding */
            _SkyService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! three */
      7758);
      /* harmony import */


      var three_examples_jsm_objects_Sky__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! three/examples/jsm/objects/Sky */
      211);

      var _SkyService = /*#__PURE__*/function () {
        function SkyService() {
          _classCallCheck(this, SkyService);
        }

        _createClass(SkyService, [{
          key: "makeSky",
          value: function makeSky(scene) {
            var light = new three__WEBPACK_IMPORTED_MODULE_1__.DirectionalLight(0xffffff, 0.8);
            light.target.position.set(0, 0, 0);
            var hemilight = new three__WEBPACK_IMPORTED_MODULE_1__.HemisphereLight(0xffffbb, 0x645f55, 0.8);
            scene.add(hemilight);
            scene.add(light);
            var sky = new three_examples_jsm_objects_Sky__WEBPACK_IMPORTED_MODULE_0__.Sky();
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

      _SkyService.ctorParameters = function () {
        return [];
      };

      _SkyService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _SkyService);
      /***/
    },

    /***/
    7363:
    /*!********************************************!*\
      !*** ./src/app/shader/instanced-shader.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "vertexShader": function vertexShader() {
          return (
            /* binding */
            _vertexShader
          );
        },

        /* harmony export */
        "fragmentShader": function fragmentShader() {
          return (
            /* binding */
            _fragmentShader
          );
        }
        /* harmony export */

      });

      var _vertexShader = "precision highp float;\n\n  uniform mat4 modelViewMatrix;\n  uniform mat4 projectionMatrix;\n\n  attribute vec3 position;\n  attribute vec3 offset;\n  attribute vec2 uv;\n  attribute vec4 orientation;\n\n  varying vec2 vUv;\n\n  // http://www.geeks3d.com/20141201/how-to-rotate-a-vertex-by-a-quaternion-in-glsl/\n\n  vec3 applyQuaternionToVector( vec4 q, vec3 v ){\n\n    return v + 2.0 * cross( q.xyz, cross( q.xyz, v ) + q.w * v );\n\n  }\n\n  void main() {\n\n    vec3 vPosition = applyQuaternionToVector( orientation, position );\n\n    vUv = uv;\n\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( offset + vPosition, 1.0 );\n\n  }";
      var _fragmentShader = "precision highp float;\n\n  uniform sampler2D map;\n\n  varying vec2 vUv;\n\n  void main() {\n\n    gl_FragColor = texture2D(map, vUv);\n\n  }";
      /***/
    },

    /***/
    2340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
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

      /***/
    },

    /***/
    4431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      4608);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      6747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      2340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      (0, _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    3069:
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG59Il19 */";
      /***/
    },

    /***/
    8673:
    /*!*************************************************************!*\
      !*** ./src/app/components/controls/controls.component.scss ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250cm9scy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    9330:
    /*!*****************************************************************************!*\
      !*** ./src/app/components/instanced-object/instanced-object.component.scss ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnN0YW5jZWQtb2JqZWN0LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    3153:
    /*!*******************************************************!*\
      !*** ./src/app/components/stage/stage.component.scss ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  display: block;\n  width: 100%;\n  height: 100%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\na {\n  color: #08f;\n}\n\n#notSupported {\n  width: 50%;\n  margin: auto;\n  background-color: #f00;\n  margin-top: 20px;\n  padding: 10px;\n}\n\n.container {\n  width: 100%;\n  height: 100%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxXQUFBO0FBRUY7O0FBQUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBR0Y7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtBQUdGIiwiZmlsZSI6InN0YWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuYSB7XHJcbiAgY29sb3I6ICMwOGY7XHJcbn1cclxuI25vdFN1cHBvcnRlZCB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwMDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    1106:
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<pgm-stage></pgm-stage>\r\n";
      /***/
    },

    /***/
    9394:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/controls/controls.component.html ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n";
      /***/
    },

    /***/
    5606:
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/instanced-object/instanced-object.component.html ***!
      \*******************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "";
      /***/
    },

    /***/
    1355:
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/stage/stage.component.html ***!
      \*********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"container\" (window:resize)=\"onWindowResize();\" draggable=\"false\"></div>\r\n<pgm-controls draggable=\"false\"></pgm-controls>\r\n<!-- <div  draggable=\"false\" style=\"position: absolute; top: 20px; right: 20px;\">{{camera.position.x}}</div> -->\r\n\r\n<pgm-instanced-object *ngFor=\"let entity of entities\" [scene]=\"scene\" [renderer]=\"renderer\" [src]=\"entity.src\" [transform]=\"entity.transform\"\r\n  [transforms]=\"entity.transforms\" [mirror]=\"entity.mirror\">\r\n</pgm-instanced-object>";
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(4431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map