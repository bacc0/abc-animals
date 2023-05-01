"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Sounds.js":
/*!**********************************!*\
  !*** ./src/components/Sounds.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ \"./src/data.js\");\n/* harmony import */ var react_audio_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-audio-player */ \"./node_modules/react-audio-player/dist/bundle.js\");\n/* harmony import */ var react_audio_player__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_audio_player__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Sounds = (param)=>{\n    let { count , visibleButtons  } = param;\n    _s();\n    const [switchVisible, setSwitchVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [autoplay, setAutoplay] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [autoplayType, setAutoplayType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [textButton, setTextButton] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"MUTE\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setTimeout(()=>{\n            setSwitchVisible(true);\n        }, 3400);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setAutoplayType(false);\n        setTimeout(()=>{\n            setAutoplayType(true);\n        }, 100);\n    }, [\n        count\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setSwitchVisible(false);\n        setTimeout(()=>{\n            setSwitchVisible(true);\n        }, 3400);\n    }, [\n        count\n    ]);\n    const handleClick = ()=>{\n        setAutoplay(!autoplay);\n        setTextButton(textButton === \"PLAY\" ? \"MUTE\" : \"PLAY\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            color: \"darkblue\"\n        },\n        children: [\n            visibleButtons && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.button, {\n                initial: {\n                    opacity: 0\n                },\n                animate: {\n                    opacity: 1\n                },\n                transition: {\n                    delay: 0.2,\n                    duration: 1\n                },\n                style: {\n                    width: 70,\n                    height: 70,\n                    borderRadius: 100,\n                    border: \"1.5px solid \".concat(textButton === \"PLAY\" ? \"#154B19\" : \"#C60001\"),\n                    fontSize: 18,\n                    fontWeight: 600,\n                    color: \"#FFFFFF\",\n                    backgroundColor: \"\".concat(textButton === \"PLAY\" ? \"#2e7d32\" : \"#ff1744\"),\n                    position: \"absolute\",\n                    top: 12,\n                    left: 0,\n                    right: 0,\n                    marginLeft: \"auto\",\n                    marginRight: \"auto\"\n                },\n                onClick: handleClick,\n                children: textButton\n            }, void 0, false, {\n                fileName: \"/Users/trayanov/Work/abc-animal/src/components/Sounds.js\",\n                lineNumber: 51,\n                columnNumber: 21\n            }, undefined),\n            !switchVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_audio_player__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    src: \"/soundsType/\".concat(_data__WEBPACK_IMPORTED_MODULE_2__.animals[count].type, \".mp3\"),\n                    volume: autoplayType ? 1 : 0,\n                    autoPlay: true,\n                    audioprocess: false\n                }, void 0, false, {\n                    fileName: \"/Users/trayanov/Work/abc-animal/src/components/Sounds.js\",\n                    lineNumber: 95,\n                    columnNumber: 31\n                }, undefined)\n            }, void 0, false),\n            switchVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_audio_player__WEBPACK_IMPORTED_MODULE_3___default()), {\n                src: \"/sounds/\".concat(_data__WEBPACK_IMPORTED_MODULE_2__.animals[count].type, \".mp3\"),\n                volume: autoplay ? 0.3 : 0,\n                autoPlay: true,\n                audioprocess: false\n            }, void 0, false, {\n                fileName: \"/Users/trayanov/Work/abc-animal/src/components/Sounds.js\",\n                lineNumber: 109,\n                columnNumber: 26\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/trayanov/Work/abc-animal/src/components/Sounds.js\",\n        lineNumber: 45,\n        columnNumber: 11\n    }, undefined);\n};\n_s(Sounds, \"9xXKLB25mJtwCBkslY8HSrQRBSY=\");\n_c = Sounds;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sounds);\nvar _c;\n$RefreshReg$(_c, \"Sounds\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Tb3VuZHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDVDtBQUNTO0FBQ1o7QUFHdEMsTUFBTU8sU0FBUyxTQUErQjtRQUE5QixFQUFFQyxNQUFLLEVBQUVDLGVBQWMsRUFBRTs7SUFFcEMsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR1YsK0NBQVFBLENBQUMsS0FBSztJQUN4RCxNQUFNLENBQUNXLFVBQVVDLFlBQVksR0FBR1osK0NBQVFBLENBQUMsSUFBSTtJQUU3QyxNQUFNLENBQUNhLGNBQWNDLGdCQUFnQixHQUFHZCwrQ0FBUUEsQ0FBQyxJQUFJO0lBRXJELE1BQU0sQ0FBQ2UsWUFBWUMsY0FBYyxHQUFHaEIsK0NBQVFBLENBQUM7SUFFN0NDLGdEQUFTQSxDQUFDLElBQU07UUFDWGdCLFdBQVcsSUFBTTtZQUNaUCxpQkFBaUIsSUFBSTtRQUMxQixHQUFHO0lBQ1IsR0FBRyxFQUFFO0lBRUxULGdEQUFTQSxDQUFDLElBQU07UUFDWGEsZ0JBQWdCLEtBQUs7UUFDckJHLFdBQVcsSUFBTTtZQUNaSCxnQkFBZ0IsSUFBSTtRQUV6QixHQUFHO0lBRVIsR0FBRztRQUFDUDtLQUFNO0lBRVZOLGdEQUFTQSxDQUFDLElBQU07UUFDWFMsaUJBQWlCLEtBQUs7UUFDdEJPLFdBQVcsSUFBTTtZQUNaUCxpQkFBaUIsSUFBSTtRQUMxQixHQUFHO0lBRVIsR0FBRztRQUFDSDtLQUFNO0lBRVYsTUFBTVcsY0FBYyxJQUFNO1FBQ3JCTixZQUFZLENBQUNEO1FBQ2JLLGNBQWNELGVBQWUsU0FBUyxTQUFTLE1BQU07SUFDMUQ7SUFFQSxxQkFDSyw4REFBQ0k7UUFDSUMsT0FBTztZQUNGQyxPQUFPO1FBQ1o7O1lBRUNiLGdDQUNJLDhEQUFDSCx3REFBYTtnQkFFVGtCLFNBQVM7b0JBQUVDLFNBQVM7Z0JBQUU7Z0JBQ3RCQyxTQUFTO29CQUFFRCxTQUFTO2dCQUFFO2dCQUN0QkUsWUFBWTtvQkFDUEMsT0FBTztvQkFDUEMsVUFBVTtnQkFDZjtnQkFDQVIsT0FBTztvQkFDRlMsT0FBTztvQkFDUEMsUUFBUTtvQkFFUkMsY0FBYztvQkFDZEMsUUFBUSxlQUdGLE9BSGlCakIsZUFBZSxTQUMvQixZQUNBLFNBQVM7b0JBRWhCa0IsVUFBVTtvQkFDVkMsWUFBWTtvQkFDWmIsT0FBTztvQkFDUGMsaUJBQWlCLEdBR1gsT0FIY3BCLGVBQWUsU0FDNUIsWUFDQSxTQUFTO29CQUVoQnFCLFVBQVU7b0JBQ1ZDLEtBQUs7b0JBQ0xDLE1BQU07b0JBQ05DLE9BQU87b0JBQ1BDLFlBQVk7b0JBQ1pDLGFBQWE7Z0JBSWxCO2dCQUNBQyxTQUFTeEI7MEJBRVJIOzs7Ozs7WUFLTixDQUFDTiwrQkFDSTswQkFFSyw0RUFBQ0wsMkRBQWdCQTtvQkFDWnVDLEtBQUssZUFBbUMsT0FBcEJ6QywwQ0FBTyxDQUFDSyxNQUFNLENBQUNxQyxJQUFJLEVBQUM7b0JBQ3hDQyxRQUFRaEMsZUFBZSxJQUFJLENBQUM7b0JBQzVCaUMsVUFBVSxJQUFJO29CQUNkQyxjQUFjLEtBQUs7Ozs7Ozs7WUFRbEN0QywrQkFFSyw4REFBQ0wsMkRBQWdCQTtnQkFDWnVDLEtBQUssV0FBK0IsT0FBcEJ6QywwQ0FBTyxDQUFDSyxNQUFNLENBQUNxQyxJQUFJLEVBQUM7Z0JBQ3BDQyxRQUFRbEMsV0FBVyxNQUFNLENBQUM7Z0JBQzFCbUMsVUFBVSxJQUFJO2dCQUNkQyxjQUFjLEtBQUs7Ozs7Ozs7Ozs7OztBQVdqRDtHQXJITXpDO0tBQUFBO0FBdUhOLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NvdW5kcy5qcz9lNDVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBhbmltYWxzLCBjb2xvcnMgfSBmcm9tICcuLi9kYXRhJ1xuaW1wb3J0IFJlYWN0QXVkaW9QbGF5ZXIgZnJvbSAncmVhY3QtYXVkaW8tcGxheWVyJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5cblxuY29uc3QgU291bmRzID0gKHsgY291bnQsIHZpc2libGVCdXR0b25zIH0pID0+IHtcblxuICAgICBjb25zdCBbc3dpdGNoVmlzaWJsZSwgc2V0U3dpdGNoVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgIGNvbnN0IFthdXRvcGxheSwgc2V0QXV0b3BsYXldID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgICAgY29uc3QgW2F1dG9wbGF5VHlwZSwgc2V0QXV0b3BsYXlUeXBlXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gICAgIGNvbnN0IFt0ZXh0QnV0dG9uLCBzZXRUZXh0QnV0dG9uXSA9IHVzZVN0YXRlKCdNVVRFJyk7XG5cbiAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgIHNldFN3aXRjaFZpc2libGUodHJ1ZSlcbiAgICAgICAgICB9LCAzNDAwKTtcbiAgICAgfSwgW10pO1xuXG4gICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgc2V0QXV0b3BsYXlUeXBlKGZhbHNlKVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgc2V0QXV0b3BsYXlUeXBlKHRydWUpXG5cbiAgICAgICAgICB9LCAxMDApO1xuXG4gICAgIH0sIFtjb3VudF0pO1xuXG4gICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgc2V0U3dpdGNoVmlzaWJsZShmYWxzZSlcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgIHNldFN3aXRjaFZpc2libGUodHJ1ZSlcbiAgICAgICAgICB9LCAzNDAwKTtcblxuICAgICB9LCBbY291bnRdKTtcblxuICAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgICBzZXRBdXRvcGxheSghYXV0b3BsYXkpXG4gICAgICAgICAgc2V0VGV4dEJ1dHRvbih0ZXh0QnV0dG9uID09PSAnUExBWScgPyAnTVVURScgOiAnUExBWScpXG4gICAgIH1cblxuICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZGFya2JsdWUnXG4gICAgICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgICAgIHt2aXNpYmxlQnV0dG9ucyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uYnV0dG9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogMC4yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3MCxcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IGAxLjVweCBzb2xpZCAke3RleHRCdXR0b24gPT09ICdQTEFZJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICcjMTU0QjE5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcjQzYwMDAxJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxOCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI0ZGRkZGRicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGAke3RleHRCdXR0b24gPT09ICdQTEFZJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICcjMmU3ZDMyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcjZmYxNzQ0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnYXV0bycsXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgIHt0ZXh0QnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5idXR0b24+XG4gICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICFzd2l0Y2hWaXNpYmxlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxwPm5hbWU8L3A+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0QXVkaW9QbGF5ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL3NvdW5kc1R5cGUvJHthbmltYWxzW2NvdW50XS50eXBlfS5tcDNgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2x1bWU9e2F1dG9wbGF5VHlwZSA/IDEgOiAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvUGxheT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXVkaW9wcm9jZXNzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBsYXlzSW5saW5lIC8vIEFkZCB0aGlzIGF0dHJpYnV0ZSB0byBlbmFibGUgYXV0b3BsYXkgb24gaU9TXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoVmlzaWJsZSAmJiAoXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RBdWRpb1BsYXllclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL3NvdW5kcy8ke2FuaW1hbHNbY291bnRdLnR5cGV9Lm1wM2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2x1bWU9e2F1dG9wbGF5ID8gMC4zIDogMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9QbGF5PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXVkaW9wcm9jZXNzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwbGF5c0lubGluZSAvLyBBZGQgdGhpcyBhdHRyaWJ1dGUgdG8gZW5hYmxlIGF1dG9wbGF5IG9uIGlPU1xuICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICB7LyogPGRpdj5Tb3VuZHMge2FuaW1hbHNbY291bnRdLnR5cGV9PC9kaXY+ICovfVxuXG4gICAgICAgICAgPC9kaXYgPlxuICAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNvdW5kcyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYW5pbWFscyIsImNvbG9ycyIsIlJlYWN0QXVkaW9QbGF5ZXIiLCJtb3Rpb24iLCJTb3VuZHMiLCJjb3VudCIsInZpc2libGVCdXR0b25zIiwic3dpdGNoVmlzaWJsZSIsInNldFN3aXRjaFZpc2libGUiLCJhdXRvcGxheSIsInNldEF1dG9wbGF5IiwiYXV0b3BsYXlUeXBlIiwic2V0QXV0b3BsYXlUeXBlIiwidGV4dEJ1dHRvbiIsInNldFRleHRCdXR0b24iLCJzZXRUaW1lb3V0IiwiaGFuZGxlQ2xpY2siLCJkaXYiLCJzdHlsZSIsImNvbG9yIiwiYnV0dG9uIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImRlbGF5IiwiZHVyYXRpb24iLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImJhY2tncm91bmRDb2xvciIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInJpZ2h0IiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0Iiwib25DbGljayIsInNyYyIsInR5cGUiLCJ2b2x1bWUiLCJhdXRvUGxheSIsImF1ZGlvcHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Sounds.js\n"));

/***/ })

});