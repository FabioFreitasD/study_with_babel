"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _console;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// operadores rest

/*function somar(a, b) {
    return a + b;
}
console.log(somar(10, 20))

se quisermos continuar passando valores ficaria insustentavel para isso temos o arguments */

function somar() {
  var soma = 0;
  for (var i = 0; i < arguments.length; i++) {
    soma += arguments[i];
  }
  return soma;
}
console.log(somar(10, 20, 30));
function somarComRest() {
  for (var _len = arguments.length, numeros = new Array(_len), _key = 0; _key < _len; _key++) {
    numeros[_key] = arguments[_key];
  }
  var soma = numeros.reduce(function (total, numeroAtual) {
    total += numeroAtual;
    return total;
  }, 0);
  return soma;
}
console.log(somarComRest(10, 30, 50));

//spread
var numeros = [1, 2, 3, 4];
(_console = console).log.apply(_console, numeros);
var timesDeFutebolDeMg = ['Cruzeiro', 'Atletico', 'America', 'Villa Nova'];
var timesDeFutebolDeSp = ['São Paulo', 'Palmeiras', 'Santos', 'Corinthias'];
var timesDeFutebol = [].concat(timesDeFutebolDeMg, timesDeFutebolDeSp);
console.log(timesDeFutebol);

//podemos usar o spread com objetos literais
var carroDoFabio = {
  modelo: 'civic',
  marca: 'honda',
  motor: 1.8
};
var carroDaJosiane = _objectSpread(_objectSpread({}, carroDoFabio), {}, {
  motor: 1.6
});
console.log(carroDaJosiane);

// desestruturação
//const motorDoCarroDaJosiane = carroDaJosiane.motor;
var motorDoCarroDaJosiane = carroDaJosiane.motor;
var motorDoCarroDoFabio = carroDoFabio.motor;
console.log(motorDoCarroDaJosiane);
console.log(carroDoFabio);