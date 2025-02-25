"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pretendardB = exports.pxGrotesk = exports.programme = void 0;

var _local = _interopRequireDefault(require("next/font/local"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var programme = (0, _local["default"])({
  src: "../fonts/Programme-Light.woff",
  weight: "400",
  style: "normal",
  display: "swap"
});
exports.programme = programme;
var pxGrotesk = (0, _local["default"])({
  src: '../fonts/Px-Grotesk-Regular.woff',
  // 경로 확인 (src 내부에서 접근)
  weight: '400',
  style: 'normal',
  display: 'swap'
});
exports.pxGrotesk = pxGrotesk;
var pretendardB = (0, _local["default"])({
  src: '../fonts/Pretendard-Bold.subset.woff',
  // 경로 확인 (src 내부에서 접근)
  weight: '400',
  style: 'normal',
  display: 'swap'
});
exports.pretendardB = pretendardB;