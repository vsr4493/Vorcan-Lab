"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var container = {
	color: "#fff",
	fontSize: "22px",
	padding: "15px"
};
var facadeOuter = {
	position: "absolute",
	display: "block",
	width: "100%",
	height: "60px",
	top: "0px",
	left: "0px",
	overflow: "hidden"
};
var facadeInner = {
	backgroundColor: "#191919",
	transform: "skewY(5deg)",
	transformOrigin: "top left",
	width: "100%",
	height: "100%",
	position: "absolute",
	top: "-15px",
	left: "0px",
	bottom: 0,
	right: 0
};

exports.facadeOuter = facadeOuter;
exports.facadeInner = facadeInner;
exports.container = container;