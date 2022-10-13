export function canvas(){
	let widthInput = document.getElementById('widthInput')
	let width = widthInput.value;
	let widthBlock = document.querySelector('#width');
	widthInput.addEventListener("mousemove", widthEdit)
	function widthEdit(){
		width = widthInput.value
		widthBlock.innerHTML = width
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
		colorBlock.innerHTML = color
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
		coursor.StartX = event.pageX - canvas.offsetLeft;
		coursor.StartY = event.pageY - canvas.offsetTop;
		setTimeout(function(){
			coursor.EndX = event.pageX - canvas.offsetLeft;
			coursor.EndY = event.pageY - canvas.offsetTop; 
		}, 15)
		ctx.lineTo(coursor.EndX, coursor.EndY)
		ctx.stroke()	
	};
};