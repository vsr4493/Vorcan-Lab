const container = {
	color: "#fff",
	fontSize: "22px",
	padding: "15px"
}
const facadeOuter = {
	position:"absolute",
	display:"block",
	width:"100%",
	height:"60px",
	top:"0px",
	left:"0px",
	overflow:"hidden",
}
const facadeInner = {
	backgroundColor: "#191919", 
	transform:"skewY(5deg)",
	transformOrigin: "top left",
	width:"100%",
	height:"100%",
	position:"absolute",
	top:"-15px",
	left:"0px",
	bottom:0,
	right:0,
}

export {facadeOuter, facadeInner, container};