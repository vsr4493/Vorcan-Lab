const outer = {
	position:"absolute",
	display:"block",
	width:"100%",
	height:"100%",
	top:"0px",
	left:"0px",
	overflow:"hidden",
}
const inner = {
	backgroundColor: "#191919", 
	width:"80%",
	height:"100%",
	position:"absolute",
}
const transform = {
	left:"20%",
	bottom:"0px",
	transform:"skewX(20deg)",
	transformOrigin: "bottom left",
}

export {outer, inner, transform};