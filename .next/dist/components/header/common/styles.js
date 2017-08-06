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
	width: "100%",
	height: "100%",
	position: "absolute"
};
var transform = {
	left: "-22%",
	bottom: "0px",
	transform: "skewX(-20deg)",
	transformOrigin: "bottom left"
};

exports.outer = outer;
exports.inner = inner;
exports.transform = transform;