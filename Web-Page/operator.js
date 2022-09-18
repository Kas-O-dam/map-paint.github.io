let format;
let picture = document.getElementById('blockDraw');
what();
function what(){ 
	format = prompt(`How graphic you choose:
	◉ SVG (vector)
	◉ Canvas (pixel)`);
	build()
};
function build(){
	if(format === null){
		alert(`Please set the style of drawing`);
		what();
	}else if(format.toLowerCase() === 'canvas'){
		picture.innerHTML = `<canvas id="canvas" height="500px" width="1000px">Your browser don't support canvas</canvas>`
		canvas();
	}else if(format.toLowerCase() === 'svg'){
		picture.innerHTML = `<svg width="1000px" height="500px" xmlns="http://www.w3.org/2000/svg" id="svg"></svg>`
		svg();
	}else{
		alert(`Don't understand or not support your format`);
		what();
	};
}
function svg(){
	let width = 5;
let widthBlock = document.querySelector('#width');
widthBlock.addEventListener("click", widthEdit)
function widthEdit(){
	width = prompt("Edit width:");
	widthBlock.innerHTML = `Width: ${width}`
};
let color = "black";
let colorBlock = document.querySelector('#color');
colorBlock.addEventListener("click", colorEdit)
function colorEdit(){
	color = prompt(`Examples 
	red 
	orange
	yellow
	pink
	magenta
	blue
	black
	white
	brown
	green
else hexadecimal or rgb/rgba coed
Edit color:`);
	colorBlock.innerHTML = `Color: ${color}`
};
let svg = document.querySelector(`#svg`);
let coursor = {
	StartX: undefined,
	StartY: undefined,
	EndX: undefined,
	EndY: undefined, 
};
svg.addEventListener("click", begin); 
function begin(){
	svg.addEventListener("mousemove", draw);
	svg.removeEventListener("click", begin);
	svg.addEventListener("click", end);
};
function end(){
	svg.removeEventListener("mousemove", draw)
	svg.removeEventListener("click", end);
	svg.addEventListener("click", begin);
	coursor.StartX = undefined;
	coursor.StartY = undefined;
	setTimeout(function(){
		coursor.EndX = undefined;
		coursor.EndY = undefined; 
	}, 0.1)
};
function draw(event){
	coursor.StartX = event.pageX - 10;
	coursor.StartY = event.pageY - 15;
	setTimeout(function(){
		coursor.EndX = event.pageX - 10;
		coursor.EndY = event.pageY - 15; 
	}, 0.1)
	svg.innerHTML = svg.innerHTML + `<path d="M ${coursor.StartX} ${coursor.StartY} L ${coursor.EndX} ${coursor.EndY}" stroke="${color}" stroke-width="${width}" fill="black" stroke-linecap="round"/>`
};
};

function canvas(){
	let width = 5;
let widthBlock = document.querySelector('#width');
widthBlock.addEventListener("click", widthEdit)
function widthEdit(){
	width = Number(prompt("Edit width:"));
	widthBlock.innerHTML = `Width: ${width}`
};
let color = "black";
let colorBlock = document.querySelector('#color');
colorBlock.addEventListener("click", colorEdit)
function colorEdit(){
	color = prompt(`Examples 
	red 
	orange
	yellow
	pink
	magenta
	blue
	black
	white
	brown
	green
else hexadecimal or rgb/rgba coed
Edit color:`);
	colorBlock.innerHTML = `Color: ${color}`
};
let canvas = document.querySelector(`#canvas`);
let ctx = canvas.getContext('2d');
let coursor = {
	StartX: undefined,
	StartY: undefined,
	EndX: undefined,
	EndY: undefined, 
};
canvas.addEventListener("click", begin); 
function begin(){
	canvas.addEventListener("mousemove", draw);
	canvas.removeEventListener("click", begin);
	canvas.addEventListener("click", end);
	ctx.beginPath();
	ctx.lineWidth = width;
	ctx.strokeStyle = color;
	ctx.moveTo(coursor.StartX, coursor.StartY);
};
function end(){
	canvas.removeEventListener("mousemove", draw)
	canvas.removeEventListener("click", end);
	canvas.addEventListener("click", begin);
	coursor.StartX = undefined;
	coursor.StartY = undefined;
	setTimeout(function(){
		coursor.EndX = undefined;
		coursor.EndY = undefined; 
	}, 0.1)
};
function draw(event){
	coursor.StartX = event.pageX - 10;
	coursor.StartY = event.pageY - 15;
	setTimeout(function(){
		coursor.EndX = event.pageX - 10;
		coursor.EndY = event.pageY - 15; 
	}, 15)
	//line(coursor.StartX, coursor.StartY, coursor.EndX, coursor.EndY, width, color)
	ctx.lineTo(coursor.EndX, coursor.EndY)
	ctx.stroke()	
};
/*
function line(x, y, x2, y2, w, c){
	ctx.beginPath();
	ctx.lineWidth = w;
	ctx.strokeStyle = c;
	ctx.moveTo(x, y); 
	ctx.lineTo(x2, y2)
	ctx.stroke()
};*/
};