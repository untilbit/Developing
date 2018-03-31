"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var texto = "Hola mundo";
console.log("ES6", texto);

function function_name() {
  return [1, 6, 7, 4, 8, 0]; //here we are storing variables in an array and returning the array
}
var q, w, e, r, t, y;
//Here we are using ES6's array destructuring feature to assign the returned values to variables.
//Here we are ignoring 2 and 4 array indexes

var _function_name = function_name();

var _function_name2 = _slicedToArray(_function_name, 6);

q = _function_name2[0];
w = _function_name2[1];
r = _function_name2[3];
y = _function_name2[5];

alert(y); //y is 0

function myFunction() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
  console.log(x, y, z); // Output "6 7 3"
}myFunction(6, 7);

function myFunction() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3 + 5;

  console.log(x, y, z); // Output "6 7 8" 
}
myFunction(6, 7);

//args variable is an array holding the passed function arguments
function function_one() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  console.log(args);
  console.log(args.length);
}
function_one(1, 4);function_one(1, 4, 7);function_one(1, 4, 7, 0);
function function_two(a, b) {
  for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  console.log(args);
  console.log(args.length);
}
//"args" holds only 7 and 9
function_two(1, 5, 7, 9);