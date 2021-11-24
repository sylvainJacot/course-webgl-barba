/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("console.log(\"Hello\"); // Canvas\n// We create the canvas where the scene will take place\n\nconst canvas = document.querySelector('canvas.webgl'); // Scene\n\nconst scene = new THREE.Scene(); // Object\n\nconst geometry = new THREE.BoxGeometry(1, 1, 1);\nconst material = new THREE.MeshBasicMaterial({\n  color: 0xff0000\n});\nconst mesh = new THREE.Mesh(geometry, material);\nscene.add(mesh); // Sizes\n\nconst sizes = {\n  width: 800,\n  height: 600\n}; // Camera\n\nconst camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);\ncamera.position.z = 3;\nscene.add(camera); // Renderer\n\nconst renderer = new THREE.WebGLRenderer({\n  canvas: canvas\n});\nrenderer.setSize(sizes.width, sizes.height);\nrenderer.render(scene, camera);\n\n//# sourceURL=webpack://course-webgl-barba/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;