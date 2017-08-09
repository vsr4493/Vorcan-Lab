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
	backgroundColor: "#555", 
	height:"100%",
	position:"absolute",
	bottom:"0%",
	transform:"skewX(20deg)",
	transformOrigin: "bottom left",
}

export {outer, inner};