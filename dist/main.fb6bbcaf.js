// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/main.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

console.clear(); // Polyfill for IE11

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}
/**
 * This class provides provides a filter that causes distortion
 * based on a screen size and in relation to the user's cursor.
 *
 * @class ScreenFilter
 * @augments PIXI.Filter
 * @author Liam Egan <liam@wethecollective.com>
 * @version 1.0.0
 * @created Mar 20, 2019
 */


var ScreenFilter = /*#__PURE__*/function (_PIXI$Filter) {
  _inherits(ScreenFilter, _PIXI$Filter);

  var _super = _createSuper(ScreenFilter);

  /**
   * The Screenfilter constructor assembles all of the uniforms 
   * and initialises the superclass.
   *
   * @constructor
   * @param {Number} resolution         The resolution of the application, essentially the pixel depth
   */
  function ScreenFilter(resolution) {
    var _this;

    _classCallCheck(this, ScreenFilter);

    // Construct the super class based on the default vertex shader and the fragment shader from the ScreenFilter
    _this = _super.call(this, PIXI.Filter.defaultVertexSrc, ScreenFilter.fragmentSrc);
    _this.resolution = resolution; // Set up the filter uniforms

    _this.uniforms.time = 0;
    _this.uniforms.mouse = [0, 0];
    _this.uniforms.u_resolution = [window.innerWidth * _this.resolution, window.innerHeight * _this.resolution];
    _this.uniforms.ratio = _this.uniforms.u_resolution[1] < _this.uniforms.u_resolution[0] ? _this.uniforms.u_resolution[0] / _this.uniforms.u_resolution[1] : _this.uniforms.u_resolution[1] / _this.uniforms.u_resolution[0]; // This simply stops the filter from passing unexpected params to our shader

    _this.autoFit = false; // Bund our resize handler

    _this.onResize = _this.onResize.bind(_assertThisInitialized(_this));
    window.addEventListener('resize', _this.onResize);
    return _this;
  }
  /**
   * Reacts to the window resize event. Calculates the new size of the filter
   *
   * @public
   * @return null
   */


  _createClass(ScreenFilter, [{
    key: "onResize",
    value: function onResize() {
      this.uniforms.u_resolution = [window.innerWidth * this.resolution, window.innerHeight * this.resolution];
      this.uniforms.ratio = this.uniforms.u_resolution[1] < this.uniforms.u_resolution[0] ? this.uniforms.u_resolution[0] / this.uniforms.u_resolution[1] : this.uniforms.u_resolution[1] / this.uniforms.u_resolution[0];
    }
    /**
     * (getter) The fragment shader for the screen filter
     *
     * @static
     * @type {string}
     */

  }, {
    key: "apply",

    /**
     * Override the parent apply method so that we can increment the time uniform for
     * the purpose of supplying a time component to the shader.
     */
    value: function apply(filterManager, input, output) {
      // Increment the time uniform
      this.uniforms.time += .01; // Apply the filter.

      filterManager.applyFilter(this, input, output);
    }
    /**
     * (getter/setter) The mouse position. Setting this will update the mouse
     * uniform that's supplied to the shader.
     *
     * @type {array}
     * @default [0,0]
     */

  }, {
    key: "mousepos",
    set: function set(value) {
      if (value instanceof Array && value.length === 2 && !isNaN(value[0]) && !isNaN(value[1])) {
        this._mousepos = value;
        this.uniforms.mouse = value;
      }
    },
    get: function get() {
      return this._mousepos || [0, 0];
    }
  }], [{
    key: "fragmentSrc",
    get: function get() {
      return "\n  /*\n    Sceen distortion filter\n    -------------------\n    \n    This shader expects to operate on a screen sized container (essentailly the whole menu)\n    and take the output of the program and distort it in a radial pattern, applying some\n    bloomed blur and noisy waves toward the edge, centered on the mouse.\n\n  */  \n  precision highp float;\n  varying vec2 vTextureCoord;\n\n  uniform sampler2D uSampler;\n  uniform vec4 inputClamp;\n  uniform vec4 inputSize;\n  uniform vec4 inputPixel;\n  uniform vec4 outputFrame;\n  uniform vec2 mouse;\n  uniform vec2 u_resolution;\n  uniform float ratio;\n  uniform float time;\n\n  #define PI 3.14159265359\n  \n  // Return a random number between 0 and 1 based on a vec2\n  float rand(vec2 c){\n\t  return fract(sin(dot(c.xy ,vec2(12.9898,78.233))) * 43758.5453);\n  }\n\n  // This is sort of a cheap and dirty precursor to full on\n  // Perlin noise. We could have happily used a more expensive\n  // noise algorithm here, but this is more than sufficient \n  // for our needs.\n  float noise(vec2 p, float freq ){\n    float unit = inputSize.x/freq;\n    vec2 ij = floor(p/unit);\n    vec2 xy = mod(p,unit)/unit;\n    //xy = 3.*xy*xy-2.*xy*xy*xy;\n    xy = .5*(1.-cos(PI*xy));\n    float a = rand((ij+vec2(0.,0.)));\n    float b = rand((ij+vec2(1.,0.)));\n    float c = rand((ij+vec2(0.,1.)));\n    float d = rand((ij+vec2(1.,1.)));\n    float x1 = mix(a, b, xy.x);\n    float x2 = mix(c, d, xy.x);\n    return mix(x1, x2, xy.y);\n  }\n\n  // Blur a texture based on a 7 sample laplacian\n  // Fast gaussien blur - https://github.com/Jam3/glsl-fast-gaussian-blur\n  vec4 blur13(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {\n    vec4 color = vec4(0.0);\n    vec2 off1 = vec2(1.411764705882353) * direction;\n    vec2 off2 = vec2(3.2941176470588234) * direction;\n    vec2 off3 = vec2(5.176470588235294) * direction;\n    color += texture2D(image, uv) * 0.1964825501511404;\n    color += texture2D(image, uv + (off1 / resolution)) * 0.2969069646728344;\n    color += texture2D(image, uv - (off1 / resolution)) * 0.2969069646728344;\n    color += texture2D(image, uv + (off2 / resolution)) * 0.09447039785044732;\n    color += texture2D(image, uv - (off2 / resolution)) * 0.09447039785044732;\n    color += texture2D(image, uv + (off3 / resolution)) * 0.010381362401148057;\n    color += texture2D(image, uv - (off3 / resolution)) * 0.010381362401148057;\n    return color;\n  }\n\n  void main(void){\n    // Generate our normalized, centered UV coordinates\n    vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);\n    // Get the mouse coordinates in relation to the frament coords\n    vec2 uvm = uv - mouse;\n    uvm /= ratio;\n    // The radial mouse gradient. We use this to apply our blur\n    vec2 raidalmouse = smoothstep(.3, 2., abs(uvm) * 2.);\n\n    // Initialise our texture output\n    vec4 tex = vec4(0.);\n\n    // The centered texture coordinates\n    vec2 textureCoord = vTextureCoord - .5;\n    // The polar texture coordinates\n    vec2 polar = vec2(length(textureCoord), atan(textureCoord.y,textureCoord.x));\n    // This distorts the texture in a wave pattern around our mouse position.\n    polar.y += smoothstep(.1, 2., abs(uvm.x) * 2.);\n    // polar.y += smoothstep(.1, 2., abs(uvm.x) * 4.); // uncomment this to see the effects of ramping up the mouse vector\n    // This is just converting our polar texture coordinates back into cartesian coordinates\n    textureCoord = vec2( cos(polar.y) * polar.x, sin(polar.y) * polar.x );\n\n    // This just increases the size of the text slightly as it gets further from the middle of the mouse position\n    // Essentially this is multiplying texture in the Y direction based on the distance from the centre of the mouse\n    textureCoord.y *= 1. - abs(uvm.x * 1.5) * .3;\n    // textureCoord *= 1. - smoothstep(.2, .5, length(uvm)) * .3; // Uncomment this line to ramp up this effect\n\n    // Now, the good stuff!\n    // Add some noise to the texture coordinate (with a time component, naturally) and \n    // multiply the effect by a gradient centered on the mouse's position.\n    textureCoord += noise(uv, 10000. + sin(time) * 5000.) * smoothstep(.15, 2., abs(uvm.x)) * .6;\n    // This just recenters the coordinate\n    textureCoord += .5;\n\n    // Gather the blur samples build the texture\n    //tex = blur13(uSampler, textureCoord, u_resolution, vec2(clamp(raidalmouse.x*20., 0., 5.), 0.));\n    //tex += blur13(uSampler, textureCoord, u_resolution, vec2(0., clamp(raidalmouse.x*20., 0., 5.)));\n    //tex *= .5;\n\n    // If you want to get rid of the blur, use the below instead of the above, it will just spit out the \n    // exact texture based on all of the above\n    tex = texture2D(uSampler, textureCoord);\n\n    // assemble the colour based on the texture multiplied by a gradient of the mouse position - this \n    // just fades the texture out at the edges\n    gl_FragColor = tex * 1. - smoothstep(.5, 1.5, length(uvm)*2.);\n\n    // Uncomment the below to output the combination of the blurred, distorted texture and a gradient\n    // representing the mouse position\n    // gl_FragColor = vec4(vec3(1. - smoothstep(.2, .25, length(uvm)) * .3), 1.);\n    // gl_FragColor = mix(gl_FragColor, tex, tex.a);\n  }\n";
    }
  }]);

  return ScreenFilter;
}(PIXI.Filter);
/**
 * This class provides provides a filter that provides the hover
 * styles to the buttoms. Essentially this is just supplying some
 * basic noise on hover now, but it could really do anything a 
 * fragment shader can do.
 *
 * @class HoverFilter
 * @augments PIXI.Filter
 * @author Liam Egan <liam@wethecollective.com>
 * @version 1.0.0
 * @created Mar 20, 2019
 */


var HoverFilter = /*#__PURE__*/function (_PIXI$Filter2) {
  _inherits(HoverFilter, _PIXI$Filter2);

  var _super2 = _createSuper(HoverFilter);

  /**
   * The HoverFilter constructor assembles all of the uniforms 
   * and initialises the superclass.
   *
   * @constructor
   */
  function HoverFilter() {
    var _this2;

    _classCallCheck(this, HoverFilter);

    _this2 = _super2.call(this, PIXI.Filter.defaultVertexSrc, HoverFilter.fragmentSrc);
    _this2.uniforms.time = 0;
    return _this2;
  }
  /**
   * (getter) The fragment shader for the screen filter
   *
   * @static
   * @type {string}
   */


  _createClass(HoverFilter, [{
    key: "apply",

    /**
     * Override the parent apply method so that we can increment the time uniform for
     * the purpose of supplying a time component to the shader.
     */
    value: function apply(filterManager, input, output) {
      this.uniforms.time += .01;
      filterManager.applyFilter(this, input, output);
    }
  }], [{
    key: "fragmentSrc",
    get: function get() {
      return "\n  /*\n    Hover filter\n    -------------------\n    \n    This shader expects to operate on a display object within a pixi application.\n    It takes the output of the display object and applies some noise to it based\n    on the objects alpha channel, in this way clamping the colour to the bounts\n    of the text that makes up the button\n\n  */  \n  precision highp float;\n  varying vec2 vTextureCoord;\n\n  uniform sampler2D uSampler;\n  uniform vec4 inputClamp;\n  uniform vec4 inputSize;\n  uniform vec4 inputPixel;\n  uniform vec4 outputFrame;\n  uniform float time;\n\n  #define PI 3.14159265359\n  \n  // Return a random number between 0 and 1 based on a vec2\n  float rand(vec2 c){\n\t  return fract(sin(dot(c.xy ,vec2(12.9898,78.233))) * 43758.5453);\n  }\n\n  // Some FBM noise based on a value component\n  // see https://thebookofshaders.com/13/ for more details\n  #define NUM_OCTAVES 3\n  float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}\n  vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}\n  vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}\n  float noise(vec3 p){\n      vec3 a = floor(p);\n      vec3 d = p - a;\n      d = d * d * (3.0 - 2.0 * d);\n\n      vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);\n      vec4 k1 = perm(b.xyxy);\n      vec4 k2 = perm(k1.xyxy + b.zzww);\n\n      vec4 c = k2 + a.zzzz;\n      vec4 k3 = perm(c);\n      vec4 k4 = perm(c + 1.0);\n\n      vec4 o1 = fract(k3 * (1.0 / 41.0));\n      vec4 o2 = fract(k4 * (1.0 / 41.0));\n\n      vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);\n      vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);\n\n      return o4.y * d.y + o4.x * (1.0 - d.y);\n  }\n  float fbm(vec3 x) {\n    float v = 0.0;\n    float a = 0.5;\n    vec3 shift = vec3(100);\n    for (int i = 0; i < NUM_OCTAVES; ++i) {\n      v += a * noise(x);\n      x = x * 2.0 + shift;\n      a *= 0.5;\n    }\n    return v;\n  }\n\n  float distortedFBM(in vec3 x) {\n    float t = fbm(x);\n    x.xy += (t -.5);\n    t *= fbm(x);\n    x.xy += (t -.5) * .6;\n    t = fbm(x);\n    return t;\n  }\n\n  // Create a pattern based on a normalised uv coordinate. In this\n  // example we're making some noise and setting a couple of colours,\n  // but you could make this any sort of pattern\n  vec4 pattern(vec2 uv) {\n\n    // Increasing the frequency of the noise\n    uv *= 4.;\n    // modify our time component, making it faster\n    float t = time*2.;\n\n    // Create our noise\n\n    float pattern = distortedFBM(vec3(uv, t));\n    pattern *= pattern * 1.2;\n    // Create our base colour\n    vec4 rtn = vec4( 0.81, 0.33, 0, 1. ); // dark blue\n    // mux this colour with another based on the noise value\n    rtn = mix(rtn, vec4( 1. ), smoothstep(.0, 1., pattern)); // sort of a light light grey colour\n    return rtn;\n    \n  }\n\n  void main(void){\n    // Generate our normalized, centered UV coordinates\n    vec2 uv = (gl_FragCoord.xy - 0.5 * inputSize.xy) / min(inputSize.x, inputSize.y);\n    // Get the base texture - this is the display object from pixi\n    vec4 tex = texture2D(uSampler, vTextureCoord);\n\n    // output the pattern constrained by the texture's alpha\n    gl_FragColor = vec4((tex.a) * pattern(uv));\n  }\n";
    }
  }]);

  return HoverFilter;
}(PIXI.Filter);
/**
 * This class provides encapsulates the navigation as a whole. It is provided the base
 * navigation element which it reads and recreates in the Pixi application
 *
 * @class Navigation
 * @author Liam Egan <liam@wethecollective.com>
 * @version 1.0.0
 * @created Mar 20, 2019
 */


var Navigation = /*#__PURE__*/function () {
  /**
   * The Navigation constructor saves the navigation element and binds all of the 
   * basic listener methods for the class.
   * 
   * The provided nav element should serve as both a container to the pixi canvas
   * as well as containing the links that will become the navigation. It's important
   * to understand that any elements within the navigation element that might appear
   * will be covered by the application canvas, so it should serve only as a 
   * container for the navigation links and the application canvas.
   *
   * @constructor
   * @param {HTMLElement} nav         The navigation container.
   */
  function Navigation(nav) {
    _classCallCheck(this, Navigation);

    // Save the nav
    this.nav = nav; // Set up the basic object property requirements.

    this.initialised = false; // Whether the navigation is already initialised

    this.navItems = []; // This will contain the generic nav item objects

    this.app = null; // The PIXI application

    this.container = null; // The PIXI container element that will contain the nav elements

    this.screenFilter = null; // The screen filter to be appliced to the container

    this.navWidth = null; // The full width of the navigation

    this.background = null; // The container for the background graphic

    this.pointerdown = false; // Indicates whether the user's pointer is currently down on the page

    this.dragging = false; // Indicates whether the nav is currently being dragged. This is here to allow for both the dragging of the nav and the tapping of elements.

    this.targetMousePos = [0, 0]; // The targetMousePos is used for animating the mouse position
    // Bind the listener methods to the class instance

    this.onPointerMove = this.onPointerMove.bind(this);
    this.onPointerDown = this.onPointerDown.bind(this);
    this.onPointerUp = this.onPointerUp.bind(this);
    this.onResize = this.onResize.bind(this);
    this.onOpen = this.onOpen.bind(this);
    this.onClose = this.onClose.bind(this);
    this.animate = this.animate.bind(this);
  }
  /**
   * Initialises the navigation. Creates the navigation items, sets up the pixi 
   * application, and binds the various listeners.
   *
   * @public
   * @return null
   */


  _createClass(Navigation, [{
    key: "init",
    value: function init() {
      var _this3 = this;

      this.initialised = true; // Find all of the anchors within the nav element and create generic object
      // holders for them. 

      var els = this.nav.querySelectorAll('a');
      els.forEach(function (el) {
        _this3.navItems.push({
          rootElement: el,
          // The anchor element upon which this nav item is based
          title: el.innerText,
          // The text of the nav item
          element: null,
          // This will be a canvas representation of the nav item
          sprite: null,
          // The PIXI.Sprite element that will be appended to stage
          link: el.href // The link's href. This will be used when clicking on the button within the nav

        });
      }); // Set up the various requirements

      this.makeNavItems(); // Set up the nav items

      this.setupWebGLContext(); // Set up the pixi application and append it to the document
      // Bind the various listener methods to their appropriate listeners

      window.addEventListener('pointermove', this.onPointerMove);
      window.addEventListener('pointerdown', this.onPointerDown);
      window.addEventListener('pointerup', this.onPointerUp);
      window.addEventListener('resize', this.onResize);
      window.addEventListener('navOpen', this.onOpen);
      window.addEventListener('navClose', this.onClose);
    }
    /**
     * Initialises the Navigation item elements, initialising their canvas 
     * renditions, their pixi sprites and initialising their interactivity.
     *
     * @public
     * @return null
     */

  }, {
    key: "makeNavItems",
    value: function makeNavItems() {
      var _this4 = this;

      if (!this.initialised) return; // Loop through the navItems object

      this.navItems.forEach(function (navItem, i) {
        // Make the nav element (the canvas rendition of the anchor) for this item.
        navItem.element = _this4.makeNavItem(navItem.title, navItem.link); // Create the PIXI sprite from the canvas

        navItem.sprite = PIXI.Sprite.from(navItem.element); // Turn the sprite into a button and initialise the various event listeners

        navItem.sprite.interactive = true;
        navItem.sprite.buttonMode = true;
        var filter = new HoverFilter(); // This provides a callback for focus on the root element, providing us with
        // a way to cause navigation on tab.

        navItem.rootElement.addEventListener('focus', function () {
          _this4.focusNavItemByIndex(i);

          navItem.sprite.filters = [filter];
        });
        navItem.rootElement.addEventListener('blur', function () {
          navItem.sprite.filters = [];
        }); // on pointer over, add the filter

        navItem.sprite.on('pointerover', function (e) {
          navItem.sprite.filters = [filter];
        }); // on pointer out remove the filter

        navItem.sprite.on('pointerout', function (e) {
          navItem.sprite.filters = [];
        }); // On pointer up, if we're not dragging the navigation, execute a click on
        // the root navigation element.

        navItem.sprite.on('pointerup', function (e) {
          if (_this4.dragging) return;
          navItem.rootElement.click();
        });
      });
    }
    /**
     * Public methods
     */

    /**
     * Initialises the Navigation item as a canvas element. This takes a string and renders it
     * to the canvas using fillText. 
     *
     * @public
     * @param {String} title      The text of the link element
     * @return {Canvas}           The canvas alement that contains the text rendition of the link
     */

  }, {
    key: "makeNavItem",
    value: function makeNavItem(title) {
      if (!this.initialised) return; // Create an offscreen canvas and context

      var c = document.createElement('canvas');
      var ctx = c.getContext('2d'); // Set up our font

      var font = 'tenez';
      var fontSize = 80;
      var fontWeight = 400;
      ctx.font = "".concat(fontWeight, " ").concat(fontSize, "px ").concat(font); // Make our canvas the size of the text  with a padding of 50px

      c.width = ctx.measureText(title).width + 50;
      c.height = fontSize * 1.5; // Draw the text into the canvas

      ctx.font = "".concat(fontWeight, " ").concat(fontSize, "px ").concat(font);
      ctx.textAlign = "center";
      ctx.textBaseline = "bottom";
      ctx.fillStyle = "rgba(223,143,86,1)";
      ctx.fillText(title, c.width * .5, c.height - fontSize * .2);
      return c;
    }
    /**
     * Initialises the PIXI application and appends it to the nav element
     *
     * @public
     * @return null
     */

  }, {
    key: "setupWebGLContext",
    value: function setupWebGLContext() {
      var _this5 = this;

      if (!this.initialised) return; // Create the pixi application, setting the background colour, width and
      // height and pixel resolution.

      this.app = new PIXI.Application({
        backgroundColor: this.backgroundColour,
        width: window.innerWidth,
        height: window.innerHeight,
        resolution: 2
      }); // Ofsetting the stage to the middle of the page. I find it easier to 
      // position things to a point in the middle of the window, so I do this
      // but you might find it easier to position to the top left.

      this.app.stage.x = window.innerWidth * .5;
      this.app.stage.y = window.innerHeight * .5; // Create the container and apply the screen filter to it.

      this.container = new PIXI.Container();
      this.screenFilter = new ScreenFilter(2);
      this.app.stage.filters = [this.screenFilter]; // Measure what will be the full pixel width of the navigation 
      // Then loop through the nav elements and append them to the containter

      var ipos = 0; // The tracked position for each element in the navigation

      this.navWidth = 0; // The full width of the navigation

      this.navItems.forEach(function (item) {
        _this5.navWidth += item.sprite.width;
      });
      this.navItems.forEach(function (item) {
        item.sprite.x = _this5.navWidth * -.5 + ipos; // Calculate the position of the nav element to the nav width

        ipos += item.sprite.width; // update the ipos

        _this5.container.addChild(item.sprite); // Add the sprite to the container

      }); // Create the background graphic 

      this.background = new PIXI.Graphics();
      this.setupBackground(); // Add the background and the container to the stage

      this.app.stage.addChild(this.background);
      this.app.stage.addChild(this.container); // Set the various necessary attributes and class for the canvas 
      // elmenent and append it to the nav element.

      this.app.view.setAttribute('aria-hidden', 'true'); // This just hides the element from the document reader (for sight-impaired people)

      this.app.view.setAttribute('tab-index', '-1'); // This takes the canvas element out of tab order completely (tabbing will be handled programatically using the actual links)

      this.app.view.className = 'main-nav__canvas'; // Add the class name

      this.nav.appendChild(this.app.view); // Append the canvas to the nav element
    }
    /**
     * Given a numeric index, this calculates the position of the 
     * associated nav element within the application and simulates
     * a mouse move to that position.
     *
     * @public
     * @param {Number} index      The index of the navigation element to focus.
     * @return null
     */

  }, {
    key: "focusNavItemByIndex",
    value: function focusNavItemByIndex(index) {
      var _this6 = this;

      if (!this.initialised) return;
      var c = 0; // loop through the nav items and increment the position 
      // until the required index is reached.

      this.navItems.forEach(function (item, i) {
        var perWidth = item.element.width / _this6.navWidth;

        if (i < index) {
          c += perWidth;
        } else if (i === index) {
          c += perWidth * .5;
        }
      }); // Calculate the mouse position.

      var mousepos = [window.innerWidth * .1 + window.innerWidth * .8 * c, window.innerHeight * .5];
      this.mousepos = mousepos;
    }
    /**
     * Removes all of the event listeners and any association of
     * the navigation object, preparing the instance for garbage
     * collection.
     * 
     * This method is unused in this demo, but exists here to 
     * provide somewhere for you to remove all remnents of the 
     * instance from memory, if and when you might need to.
     * 
     *
     * @public
     * @return null
     */

  }, {
    key: "deInit",
    value: function deInit() {
      window.removeEventListener('pointermove', this.onPointerMove);
      window.removeEventListener('pointerdown', this.onPointerDown);
      window.removeEventListener('pointerup', this.onPointerUp);
      window.removeEventListener('resize', this.onResize);
    }
    /**
     * Redraws the background graphic and the container mask.
     *
     * @public
     * @return null
     */

  }, {
    key: "setupBackground",
    value: function setupBackground() {
      if (!this.initialised) return; // The background graphic is just a matte that lives behind everything.
      // If you wanted to you could apply a filter to this to create a pattern
      // or animation in the background to the navigation. For the purposes
      // of this demo, this is just a block of colour.

      this.background.clear();
      this.background.beginFill(this.backgroundColour, 0.);
      this.background.position.x = window.innerWidth * -.5;
      this.background.position.y = window.innerHeight * -.5;
      this.background.drawRect(-this.maskpadding, -this.maskpadding, window.innerWidth + this.maskpadding, window.innerHeight + this.maskpadding);
      this.background.endFill(); // We mask the container so that the dimensions that PIXI provides to 
      // our screen filter are predictable. If we don't do this, then the 
      // behaviour of the shader becomes unpredictable and weird. The reason 
      // that we pad the mask is so that we have a slightly larger than the
      // screen area to play with within the shader.

      var mask = new PIXI.Graphics();
      mask.beginFill(this.backgroundColour, .5);
      mask.position.x = window.innerWidth * -.5;
      mask.position.y = window.innerHeight * -.5;
      mask.drawRect(-this.maskpadding, -this.maskpadding, window.innerWidth + this.maskpadding, window.innerHeight + this.maskpadding);
      mask.endFill();
      this.container.mask = mask;
    }
    /**
     * Coerces the mouse position as a vector with units in the 0-1 range
     *
     * @public
     * @param {Array} mousepos_px      An array of the mouse's position on screen in pixels
     * @return {Array}
     */

  }, {
    key: "fixMousePos",
    value: function fixMousePos(mousepos_px) {
      var ratio = window.innerHeight / window.innerWidth;
      var mousepos = [];

      if (window.innerHeight > window.innerWidth) {
        mousepos[0] = (mousepos_px[0] - window.innerWidth / 2) / window.innerWidth;
        mousepos[1] = (mousepos_px[1] - window.innerHeight / 2) / window.innerHeight * -1 * ratio;
      } else {
        mousepos[0] = (mousepos_px[0] - window.innerWidth / 2) / window.innerWidth / ratio;
        mousepos[1] = (mousepos_px[1] - window.innerHeight / 2) / window.innerHeight * -1;
      }

      return mousepos;
    }
    /**
     * Coerces the mouse position from a vector with units in the 0-1 range
     * to screen coordinates
     *
     * @public
     * @param {Array} mousepos      An array of the mouse's position on screen the 0-1 range
     * @return {Array}
     */

  }, {
    key: "unfixMousePos",
    value: function unfixMousePos(mousepos) {
      var ratio = window.innerHeight / window.innerWidth;
      var mousepos_px = [];

      if (window.innerHeight > window.innerWidth) {
        mousepos_px[0] = mousepos[0] * window.innerWidth + window.innerWidth / 2;
        mousepos_px[1] = mousepos[1] * window.innerHeight / -1 / ratio + window.innerHeight / 2;
      } else {
        mousepos_px[0] = mousepos[0] * window.innerWidth * ratio + window.innerWidth / 2;
        mousepos_px[1] = mousepos[1] * window.innerHeight / -1 + window.innerHeight / 2;
      }

      return mousepos_px;
    }
    /**
     * Event callbacks
     */

    /**
     * Responds to the window resize event, resizing the stage and redrawing 
     * the background.
     *
     * @public
     * @param {Object} e     The event object
     * @return null
     */

  }, {
    key: "onResize",
    value: function onResize(e) {
      this.app.renderer.resize(window.innerWidth, window.innerHeight);
      this.app.stage.x = window.innerWidth * .5;
      this.app.stage.y = window.innerHeight * .5;
      this.setupBackground();
    }
    /**
     * Responds to the window pointer move event, updating the application's mouse
     * position.
     *
     * @public
     * @param {Object} e     The event object
     * @return null
     */

  }, {
    key: "onPointerMove",
    value: function onPointerMove(e) {
      if (this.animatingPointer === true) {
        if (this.dragging || e.pointerType === 'mouse') {
          this.targetMousePos = [e.pageX, e.pageY];
        }

        return;
      }

      if (this.dragging || e.pointerType === 'mouse') {
        this.mousepos = [e.pageX, e.pageY];
      }
    }
    /**
     * Responds to the window pointer down event, creating a timeout that checks,
     * after a short period of time, whether the pointer is still down, after 
     * which it sets the dragging property to true.
     *
     * @public
     * @param {Object} e     The event object
     * @return null
     */

  }, {
    key: "onPointerDown",
    value: function onPointerDown(e) {
      var _this7 = this;

      this.pointerdown = true;
      setTimeout(function () {
        if (_this7.pointerdown === true) _this7.dragging = true;
      }, 300);
    }
    /**
     * Responds to the window pointer up event, sets pointer down to false and,
     * after a short time, sets dragging to false.
     *
     * @public
     * @param {Object} e     The event object
     * @return null
     */

  }, {
    key: "onPointerUp",
    value: function onPointerUp(e) {
      var _this8 = this;

      this.pointerdown = false;
      setTimeout(function () {
        _this8.dragging = false;
      }, 300);
    }
    /**
     * Responds to the custom navOpen event fired when the navigation is opened.
     * This listener doesn't do anything mission critical, so it can be skipped
     * if necessary.
     *
     * @public
     * @param {Object} e     The event object
     * @return null
     */

  }, {
    key: "onOpen",
    value: function onOpen() {
      this.animatingPointer = true;
      this.focusNavItemByIndex(0);
      this.targetMousePos = this.unfixMousePos(this.mousepos);
      this.mousepos = [3000, window.innerHeight * .5];
    }
    /**
     * Responds to the custom navClosed event fired when the navigation is closed.
     *
     * @public
     * @param {Object} e     The event object
     * @return null
     */

  }, {
    key: "onClose",
    value: function onClose() {
      this.animatingPointer = false;
    }
    /**
     * Responds to request animation frame. Responsible for rendering any 
     * animation events
     *
     * @public
     * @param {Number} delta  The time variable, provided by RaF
     * @return null
     */

  }, {
    key: "animate",
    value: function animate(delta) {
      if (this.animatingPointer === true) requestAnimationFrame(this.animate);
      var pxMousepos = this.unfixMousePos(this.mousepos);
      var diff = [this.targetMousePos[0] - pxMousepos[0], this.targetMousePos[1] - pxMousepos[1]];
      pxMousepos[0] += diff[0] * .05;
      pxMousepos[1] += diff[1] * .05;
      this.mousepos = pxMousepos; // const l = Math.sqrt((diff[0] * diff[0]) + (diff[1] * diff[1]));
      // if(l < 1) {
      //   this.animatingPointer = false;
      // }
    }
    /**
     * Getters and setters (properties)
     */

    /**
     * (getter/setter) The colour of the application background. This can take
     * a number or an RGB hex string in the format of '#FFFFFF'. It stores
     * the colour as a number
     *
     * @type {number/string}
     * @default 0x151515
     */

  }, {
    key: "backgroundColour",
    set: function set(value) {
      // A regex that determines whether the passed string (if string it is)
      // is in the required format.
      var colourval = /^#([0-9ABCDEF]{6,6})/i.exec(value);

      if (typeof value == 'string' && colourval != null) {
        // If we have a string and it's in the right format, convert it to a numbe
        this._backgroundColour = "0x".concat(colourval[1]) * 1;
      } else if (typeof value == 'number') {
        // If it's a number, save it
        this._backgroundColour = value;
      } // reset the background.


      this.setupBackground();
    },
    get: function get() {
      return this._backgroundColour || 0x151515;
    }
    /**
     * (getter/setter) A flag that specifies whether the simulation is 
     * currently animating the mouse position. If this is set to true
     * then the pointer listener will simply return.
     *
     * @type {bolean}
     * @default false
     */

  }, {
    key: "animatingPointer",
    set: function set(value) {
      var wasAnimating = this.animatingPointer;
      this._animating = value === true;

      if (wasAnimating === false && this.animatingPointer === true) {
        requestAnimationFrame(this.animate);
      }
    },
    get: function get() {
      return this._animating || false;
    }
    /**
     * (getter/setter) A flag that specifies whether the the user is
     * currently dragging the simulation. This exists to toggle the
     * animation of the position based on the pointer position when
     * the user is interacting by dragging.
     *
     * @type {bolean}
     * @default false
     */

  }, {
    key: "dragging",
    set: function set(value) {
      if (value === true) {
        this.old_animatingPointer = this.animatingPointer;
        this.animatingPointer = false;
        this._dragging = true;
      } else {
        this._dragging = false;
      }
    },
    get: function get() {
      return this._dragging || false;
    }
    /**
     * (getter/setter) The position of the mouse/pointer on screen. This 
     * updates the position of the navigation in response to the cursor
     * and fixes the mouse position before passing it to the screen
     * filter.
     *
     * @type {Array}
     * @default [0,0]
     */

  }, {
    key: "mousepos",
    set: function set(value) {
      // Find the position of the container relating to the mouse and set it.
      var p = value[0] / window.innerWidth;
      this.container.position.x = -(this.navWidth * .5) + (1. - p) * this.navWidth; // Fix the mouse position, save it and pass it onto the screen filter

      value = this.fixMousePos(value);

      if (value instanceof Array && value.length === 2 && !isNaN(value[0]) && !isNaN(value[1])) {
        this._mousepos = value;
        if (this.screenFilter) this.screenFilter.mousepos = value;
      }
    },
    get: function get() {
      return this._mousepos || [0, 0];
    }
    /**
     * (getter/setter) The amount of padding at the edge of the screen. This
     * is sort of an arbitrary value at the moment, so if you start to see 
     * tearing at the edge of the text, make this value a little higher
     *
     * @type {Number}
     * @default 100
     */

  }, {
    key: "maskpadding",
    set: function set(value) {
      if (!isNaN(value)) this._maskpadding = value;
    },
    get: function get() {
      if (!isNaN(this._maskpadding)) return this._maskpadding;
      return 100;
    }
  }]);

  return Navigation;
}(); // The nav toggle is the checkbox that determines the visibility of the main nav


var navToggle = document.getElementById('main-nav-toggle'); // Set up the keyup listener on the nav toggle elements. This just makes sure 
// that these labels work as expected for keyboard users

document.addEventListener('keyup', function (e) {
  if (e.target.className.indexOf('nav-toggle') && (e.keyCode === 13 || e.keyCode === 32)) {
    navToggle.checked = !navToggle.checked;
    e.preventDefault();
  }
}); // This listener exists to fire the open event which the nav listens to. This
// Just spawns the open animation

navToggle.addEventListener('change', function (e) {
  var eventName;
  console.log(e.target.checked);

  if (e.target.checked) {
    eventName = 'navOpen';
  } else {
    eventName = 'navClose';
  }

  if (window.CustomEvent) {
    var event = new CustomEvent(eventName);
  } else {
    var event = document.createEvent('CustomEvent');
    event.initCustomEvent(eventName, true, true);
  }

  window.dispatchEvent(event);
}); //navToggle.checked = true;
// Create the navigation based on teh nav element

var nav = new Navigation(document.querySelector('.main-nav'));
window.navigation = nav; // Load the web font and, once it's loaded, initialise the nav.

WebFont.load({
  typekit: {
    id: 'phg5cnq'
  },

  /*google: {
    families: ['Abril Fatface']
  },*/
  active: function active() {
    nav.init();
    nav.focusNavItemByIndex(0); // trigger the checkbox change event to start up the animation

    var event = document.createEvent('HTMLEvents');
    event.initEvent('change', true, false);
    navToggle.dispatchEvent(event);
  }
});
},{}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50255" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map