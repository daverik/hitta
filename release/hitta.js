(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["hitta"] = factory();
	else
		root["hitta"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var api_1 = __webpack_require__(4);
	var query_1 = __webpack_require__(1);
	exports.query = function () {
	    var rest = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        rest[_i - 0] = arguments[_i];
	    }
	    console.warn('Deprecated. Please use filter instead.');
	    return query_1.query.apply(this, rest);
	};
	exports.filter = api_1.filter;
	exports.any = api_1.any;
	exports.find = api_1.find;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var types_1 = __webpack_require__(2);
	var utils_1 = __webpack_require__(3);
	exports.query = function (data) {
	    if (!utils_1.isArray(data)) {
	        throw new Error('Not an array');
	    }
	    return function (query) {
	        var qa = utils_1.flatten(extract(query, ''));
	        return utils_1.filter(data, function (obj) {
	            return utils_1.every(qa, function (q) {
	                return types_1.queryTypes[q.type](utils_1.get(obj, q.path), q.value);
	            });
	        });
	    };
	};
	function extract(obj, path) {
	    if (utils_1.isArray(exports.query) || !utils_1.keys(obj).length) {
	        return [];
	    }
	    else {
	        return utils_1.map(obj, function (value, key) {
	            if (value instanceof RegExp) {
	                return {
	                    path: path === '' ? key : path + "." + key,
	                    type: '$regex',
	                    value: value
	                };
	            }
	            else if (typeof value === 'string') {
	                return {
	                    path: path === '' ? key : path + "." + key,
	                    type: '$exact',
	                    value: value
	                };
	            }
	            else if (/\$.*/.test(key)) {
	                if (types_1.queryTypes[key]) {
	                    return {
	                        path: path,
	                        type: key,
	                        value: value
	                    };
	                }
	                else {
	                    return [];
	                }
	            }
	            else {
	                return utils_1.flatten(extract(value, path === '' ? key : path + "." + key));
	            }
	        });
	    }
	}


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var utils_1 = __webpack_require__(3);
	exports.queryTypes = {
	    $exists: function (srcValue, queryValue) {
	        return utils_1.isUndefined(srcValue) !== queryValue;
	    },
	    $gt: function (srcValue, queryValue) {
	        return srcValue > queryValue;
	    },
	    $gte: function (srcValue, queryValue) {
	        return srcValue >= queryValue;
	    },
	    $lt: function (srcValue, queryValue) {
	        return srcValue < queryValue;
	    },
	    $lte: function (srcValue, queryValue) {
	        return srcValue <= queryValue;
	    },
	    $in: function (srcValue, queryValue) {
	        return utils_1.some(queryValue, function (val) {
	            return val === srcValue;
	        });
	    },
	    $nin: function (srcValue, queryValue) {
	        return !utils_1.some(queryValue, function (val) {
	            return val === srcValue;
	        });
	    },
	    $regex: function (srcValue, queryValue) {
	        return queryValue.test(srcValue);
	    },
	    $exact: function (srcValue, queryValue) {
	        return srcValue === queryValue;
	    }
	};


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	exports.every = function (arr, cb) {
	    return arr.every(cb);
	};
	exports.filter = function (arr, cb) {
	    return arr.filter(cb);
	};
	exports.isArray = function (obj) {
	    return Array.isArray(obj);
	};
	exports.keys = function (obj) {
	    return Object.keys(obj);
	};
	exports.some = function (arr, cb) {
	    return arr.some(cb);
	};
	exports.map = function (obj, cb) {
	    if (exports.isArray(obj)) {
	        return obj.map(cb);
	    }
	    else {
	        var arr = [];
	        for (var k in obj) {
	            arr.push(cb(obj[k], k));
	        }
	        return arr;
	    }
	};
	exports.flatten = function (arr) {
	    var newArr = [];
	    arr.forEach(function (val) {
	        if (exports.isArray(val)) {
	            val.forEach(function (_val) {
	                newArr.push(_val);
	            });
	        }
	        else {
	            newArr.push(val);
	        }
	    });
	    return newArr;
	};
	exports.get = function (obj, path) {
	    var pathArr = path.split('.');
	    if (!obj) {
	        return null;
	    }
	    if (pathArr.length === 1) {
	        return obj[pathArr[0]];
	    }
	    else {
	        return exports.get(obj[pathArr[0]], pathArr.slice(1, pathArr.length).join('.'));
	    }
	};
	exports.isUndefined = function (obj) {
	    return typeof obj === 'undefined';
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var query_1 = __webpack_require__(1);
	exports.filter = query_1.query;
	exports.any = function (data) { return function (_query) {
	    var queried = query_1.query(data)(_query);
	    return queried && queried.length !== 0;
	}; };
	exports.find = function (data) { return function (_query) {
	    var queried = query_1.query(data)(_query);
	    if (queried && queried.length !== 0) {
	        return queried[0];
	    }
	    else {
	        return null;
	    }
	}; };


/***/ }
/******/ ])
});
;