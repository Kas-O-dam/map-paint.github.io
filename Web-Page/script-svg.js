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
export default '*';