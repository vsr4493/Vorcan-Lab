"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var outer = {
	position: "absolute",
	display: "block",
	width: "100%",
	height: "100%",
	top: "0px",
	left: "0px",
	overflow: "hidden"
};
var inner = {
	backgroundColor: "#191919",
	width: "80%",
	height: "100%",
	position: "absolute"
};
var transform = {
	left: "20%",
	bottom: "0px",
	transform: "skewX(20deg)",
	transformOrigin: "bottom left"
};

var triangleRight = {
	position: "absolute",
	top: 2,
	left: "20%",
	width: 0,
	height: 0,
	borderTop: "85px solid transparent",
	borderRight: "172px solid #888",
	borderBottom: "0px solid transparent"
};

exports.outer = outer;
exports.inner = inner;
exports.triangleRight = triangleRight;
exports.transform = transform;