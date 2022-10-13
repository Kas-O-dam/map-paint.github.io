
let picture = document.getElementById('blockDraw');

let size = document.getElementById('size');
let hc = '720';
let wc = '1280'; 

let move_type = 'mousemove';
let up_type = 'mouseup';
let down_type = 'mousedown';

size.addEventListener('click', sizeWhat)
function sizeWhat(){
	wc = prompt('Set width (px)')
	hc = prompt('Set height (px)');
	size.innerHTML = wc + '*' + hc;
	build();
} 

	let palitre = {
		tinylight:{
			tinylightred: document.querySelector('#tinylightred'),
			tinylightorange: document.querySelector('#tinylightorange'),
			tinylightyellow: document.querySelector('#tinylightyellow'),
			tinylightgreen: document.querySelector('#tinylightgreen'),
			tinylightblue: document.querySelector('#tinylightblue'),
			tinylightblack: document.querySelector('#tinylightblack'),
			tinylightgray: document.querySelector('#tinylightgray')
		},
		light:{
			lightred: document.querySelector('#lightred'),
			lightorange: document.querySelector('#lightorange'),
			lightyellow: document.querySelector('#lightyellow'),
			lightgreen: document.querySelector('#lightgreen'),
			lightblue: document.querySelector('#lightblue'),
			lightblack: document.querySelector('#lightblack'),
			lightgray: document.querySelector('#lightgray')
		},
		hugelight:{
			hugelightred: document.querySelector('#hugelightred'),
			hugelightorange: document.querySelector('#hugelightorange'),
			hugelightyellow: document.querySelector('#hugelightyellow'),
			hugelightgreen: document.querySelector('#hugelightgreen'),
			hugelightblue: document.querySelector('#hugelightblue'),
			hugelightblack: document.querySelector('#hugelightblack'),
			hugelightgray: document.querySelector('#hugelightgray')
		},
		normal:{
			red: document.querySelector('#red'),
			orange: document.querySelector('#orange'),
			yellow: document.querySelector('#yellow'),
			green: document.querySelector('#green'),
			blue: document.querySelector('#blue'),
			black: document.querySelector('#black'),
			white: document.querySelector('#white')
		},
		tinydark:{
			tinydarkred: document.querySelector('#tinydarkred'),
			tinydarkyellow: document.querySelector('#tinydarkyellow'),
			tinydarkgreen: document.querySelector('#tinydarkgreen'),
			tinydarkblue: document.querySelector('#tinydarkblue'),
			tinybrown: document.querySelector('#tinybrown'),
			tinydarkgray: document.querySelector('#tinydarkgray')
		},
		dark:{
			darkred: document.querySelector('#darkred'),
			darkyellow: document.querySelector('#darkyellow'),
			darkgreen: document.querySelector('#darkgreen'),
			darkblue: document.querySelector('#darkblue'),
			brown: document.querySelector('#brown'),
			darkgray: document.querySelector('#darkgray')
		},
		hugedark:{
			hugedarkred: document.querySelector('#darkred'),
			hugedarkyellow: document.querySelector('#darkyellow'),
			hugedarkgreen: document.querySelector('#darkgreen'),
			hugedarkblue: document.querySelector('#darkblue'),
			hugebrown: document.querySelector('#brown'),
			hugedarkgray: document.querySelector('#darkgray')
		},
	};

	palitre.normal.red.addEventListener('click', function(){color = 'red'})
	palitre.normal.orange.addEventListener('click', function(){color = 'orange'})
	palitre.normal.yellow.addEventListener('click', function(){color = 'yellow'})
	palitre.normal.green.addEventListener('click', function(){color = 'green'})
	palitre.normal.blue.addEventListener('click', function(){color = 'blue'})
	palitre.normal.black.addEventListener('click', function(){color = 'black'}) 
	palitre.normal.white.addEventListener('click', function(){color = 'white'})

	palitre.dark.darkred.addEventListener('click', function(){color = '#781b13'})
	palitre.dark.darkyellow.addEventListener('click', function(){color = '#48411b'})
	palitre.dark.darkgreen.addEventListener('click', function(){color = '#1a502e'})
	palitre.dark.darkblue.addEventListener('click', function(){color = '#050e51'})
	palitre.dark.brown.addEventListener('click', function(){color = 'brown'})
	palitre.dark.darkgray.addEventListener('click', function(){color = '#20292e'})

	palitre.light.lightred.addEventListener('click', function(){color = '#f9beab'})
	palitre.light.lightorange.addEventListener('click', function(){color = '#f6d46c'})
	palitre.light.lightyellow.addEventListener('click', function(){color = '#f9f265'})
	palitre.light.lightgreen.addEventListener('click', function(){color = '#e4e795'})
	palitre.light.lightblue.addEventListener('click', function(){color = '#a5a5d6'})
	palitre.light.lightgray.addEventListener('click', function(){color = '#d1d1d1'})
/*
	palitre.tinylight.lightred.addEventListener('click', function(){color = '#f9beab'})
	palitre.tinylight.lightorange.addEventListener('click', function(){color = '#f6d46c'})
	palitre.tinylight.lightyellow.addEventListener('click', function(){color = '#f9f265'})
	palitre.tinylight.lightgreen.addEventListener('click', function(){color = '#e4e795'})
	palitre.tinylight.lightblue.addEventListener('click', function(){color = '#a5a5d6'})
	palitre.tinylight.lightgray.addEventListener('click', function(){color = '#d1d1d1'})
*/

//

let widthInput = document.getElementById('widthInput')
	let width = widthInput.value;
	let widthBlock = document.querySelector('#width');
	widthInput.addEventListener(move_type, widthEdit)
	function widthEdit(){
		width = widthInput.value
		widthBlock.innerHTML = width
	};

//

let colorBlock = document.querySelector('#color');
let color = 'black';

//

let device = 'PC';
let device_block = document.getElementById('device');
device_block.addEventListener("click", change_device);

function change_device(){
	let user_input = prompt("What's device? PC/phone")
	if(user_input.toLowerCase() == 'phone'){
		move_type = 'touchmove';
		up_type = 'touchend';
		down_type = 'touchstart';
	}else{
		move_type = 'mousemove';
		up_type = 'mouseup';
		down_type = 'mousedown';
		alert("Uncorrect or unsupported device. Your device in settings at this moment: PC")
	}
};

//

let format = 'canvas';
let styleDraw = document.getElementById('styleDraw');
styleDraw.addEventListener('click', what);
build();
function what(event){
	if(confirm('You really want change a format drawing?! All canva will C L E A R before it')){
		format = prompt('What is a format? svg/canvas');
		styleDraw.innerHTML = format;
		build();
	};
};

//

function build(){
	if(format === null){
		alert(`Please set format of drawing`);
		what();
	}else if(format.toLowerCase() === 'canvas'){
		picture.innerHTML = `<canvas id="canvas" height="${hc}" width="${wc}">Your browser don't support canvas</canvas>`
		styleDraw.value = `canvas`;
		canvas();
	}else if(format.toLowerCase() === 'svg'){
		picture.innerHTML = `<svg width="${wc}" height="${hc}" xmlns="http://www.w3.org/2000/svg" id="svg"></svg>`
		styleDraw.value = `svg`;
		svg();
	}else{
		alert(`Don't understand or not support your format`);
		what();
	};
};

function canvas(){

/*Эта фигня объявляет объект с координатами и их начальным значением
и сам элемент холста*/ 
let canvas = document.querySelector(`#canvas`);
let ctx = canvas.getContext('2d');
	let coursor = {
		StartX: undefined,
		StartY: undefined,
		EndX: undefined,
		EndY: undefined, 
	};

export_canvas = document.querySelector('#export')
export_canvas.addEventListener("click", exportPNG)


function exportPNG(){
	window.location = canvas.toDataURL();
}

/*Начальное событие, по нажатию кнопки запускать функцию begin()*/ 
	canvas.addEventListener(down_type, begin); 

/*добавляет событие при движении мышью на холсте
Очищает саму себя и добавляет событие на функцию end() при отпускании мыши*/

	function begin(){
		canvas.addEventListener(move_type, draw);
		canvas.removeEventListener(down_type, begin);
		canvas.addEventListener(up_type, end);
		ctx.beginPath();
		ctx.lineWidth = width;
		ctx.strokeStyle = color;
		ctx.moveTo(coursor.StartX, coursor.StartY);
	};

/* возвращает все события в начальное состояние
и сбрасывает координаты курсора*/

	function end(){
		canvas.removeEventListener(move_type, draw)
		canvas.removeEventListener(up_type, end);
		canvas.addEventListener(down_type, begin);
		coursor.StartX = undefined;
		coursor.StartY = undefined;
		setTimeout(function(){
			coursor.EndX = undefined;
			coursor.EndY = undefined; 
		}, 0.1)
	};

/*Находит начальные координаты и заносит в ранее объявленный объект
Спустя доли секунды находит координаты ещё раз, занося их в конечные координаты
По окончанию получения данных о движении курсора, добавляет тег в эсвэгэшку со всеми данными, настроенные пользователем*/

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

//		__	__		__   ____
//	 / /	\ \    / /  / ____\
//	 | |	 \ \  / /  | | _____
//		\ \	  \ \/ /   | ||__  |
//	  __| |	   \  /    | |___| |
//	 \__/ /		\/      \_____/


function svg(){

/*Эта фигня объявляет объект с координатами и их начальным значением
и сам элемент холста*/ 
	let svg = document.querySelector(`#svg`);
	let coursor = {
		StartX: undefined,
		StartY: undefined,
		EndX: undefined,
		EndY: undefined, 
	};	
/*Начальное событие, по нажатию кнопки запускать функцию begin()*/ 
	svg.addEventListener(down_type, begin);

/*добавляет событие при движении мышью на холсте
Очищает саму себя и добавляет событие на функцию end() при отпускании мыши*/

	function begin(){
		svg.addEventListener(move_type, draw);
		svg.removeEventListener(down_type, begin);
		svg.addEventListener(up_type, end);
	};

/* возвращает все события в начальное состояние
и сбрасывает координаты курсора*/

	function end(){
		svg.removeEventListener(move_type, draw)
		svg.removeEventListener(up_type, end);
		svg.addEventListener(down_type, begin);
		coursor.StartX = undefined;
		coursor.StartY = undefined;
		setTimeout(function(){
			coursor.EndX = undefined;
			coursor.EndY = undefined; 
		}, 0.1)
	}; 

/*Находит начальные координаты и заносит в ранее объявленный объект
Спустя доли секунды находит координаты ещё раз, занося их в конечные координаты
По окончанию получения данных о движении курсора, добавляет тег в эсвэгэшку со всеми данными, настроенные пользователем*/

	function draw(event){
		coursor.StartX = event.pageX - picture.offsetLeft;
		coursor.StartY = event.pageY - picture.offsetTop;
		setTimeout(function(){
			coursor.EndX = event.pageX - picture.offsetLeft
			coursor.EndY = event.pageY - picture.offsetTop; 
		}, 0.1)
		svg.innerHTML = svg.innerHTML + `<path d="M ${coursor.StartX} ${coursor.StartY} L ${coursor.EndX} ${coursor.EndY}" stroke="${color}" stroke-width="${width}" fill="black" stroke-linecap="round"/>`
	};
};
