/*
 I'm love JavaScript




                    _______                                ______
  #####    #####   |_____ |                               / ____/                     _
##################      | |                              | /                         |_|               _
##################      | |   _______  __  __    ______  \ \____     _____   __ ___   _   _  _____   _| |_
 ################       | |  / __   | | |  | |  / __   |  \___  \   /  ___\ |  '___| | | | '/ ___ \ |_   _|
   ############     _   | | | /  \  | \ \  / / | /  \  |      \  \ |  /     | /      | | |   /   \ |  | |
     ########      | \__/ | | \__/  |  \ \/ /  | \__/  |  ____/  | |  \____ | |      | | |   \___/ |  | |_
        ##         \______/  \___/|_|   \__/    \___/|_|  \_____/   \_____/ |_|      |_| | |\_____/   \___|
																																												 | |
																																												 |_|



 для мотивации и радости при открытии документа
*/
let picture = document.getElementById('blockDraw'); //блок в который всовывается либо canvas либо svg
let code = document.getElementById('code_svg'); //это блочный элемент (<textarea>) где отображается svg код в функции build он обнуляется потому что рисовать начинают заново
let size = document.getElementById('size'); //форма при нажатии на которую задаётся размер, а потом отображается в атрибуте placeholder
let hc = '720'; //изначальная ширина
let wc = '1280'; //изначальная высота, т. е. расширение 720р
let mime = 0; // 0 задаётся по приколу, сама переменная хранит в себе MIME тип в котором юзер сохраняет имейдж, к примеру png, jpeg, ну ты понял, да?
let palitre = document.querySelectorAll('.color');
let tool = document.getElementsByClassName('tool'); //переключатель с перемещения по рисование и наоборот
let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; //алфавит, строка букв для генератора
let result =''; //это тоже для генератора, то, что он по идее должен возвращать
let active_id;
let active_element;
let svg_tag = 'path';
let action_list = [];

//следующие три переменные на данный момент бессмыслены, но в будущем по идеи они меняются на строки тач-событий
let move_type = 'pointermove';
let up_type = 'pointerup';
let down_type = 'pointerdown';

// объект, хранящий в себе координаты курсора
let coursor = {
	StartX: undefined,
	StartY: undefined,
	EndX: undefined,
	EndY: undefined
	};

function name_generator(){//сама функция генератора, нужно для генерации имён для svg тегов
	result = '$'//это нужно для того, чтобы легко отличить сгенерированные от нормальных имён
	for(i=0; i<=60; i++){//цикл, тут всё просто
		if(i===60){//ограничиваем кол-во символов
			return result;//ретарним если хватит
		};
		result = result + alphabet[Math.round(Math.random()*51)];//при каждой итерации присваиваем рандомный символ
	};
};

//функция для изменения размена
//добавляем обработчик событий
size.addEventListener('click', sizeWhat)
function sizeWhat(){
	//спрашиваем размер
	wc = prompt('Set width (px)')
	hc = prompt('Set height (px)');
	//не знаю зачем это 
	size.innerHTML = wc + '*' + hc;
	//смена значения расширения в атрибуте placeholder
	size.setAttribute('placeholder', `${wc}*${hc}`)
	//перестраивает изображение под нужный размер
	build();
} 

//изменение ширины кисти
//добываем тот самый ползунок
let widthInput = document.getElementById('widthInput')
//хрен пойми зачем мне это
	let width = widthInput.value;
	//это тег span, он будет отображать юзеру текущий размер
	let widthBlock = document.querySelector('#width');
	//обработчик событий
	widthInput.addEventListener(move_type, widthEdit)
	//собсн сама функция, просто по каждому перемещению мышки по ползунковому блоку добывает значение формы присваивает куда надо и выводит на экран чё да как
	function widthEdit(){
		width = widthInput.value
		widthBlock.innerHTML = width
	};
	//ну тип поначалу чтобы всё определилось
	widthEdit()

//1 блок с палитрой, 2 переменная для текущего цвета и значением по умолчанию

let colorBlock = document.querySelector('#color');
let color = 'black';

//вот собсн и переключатель между эсвэгэ и канвас
//переменная, хранящая в себе текущий формат рисования
let format = 'svg';
//форма в которой выбирают формат
let styleDraw = document.getElementById('styleDraw');
//третий раз говорить не буду...        это обработчик событий!
styleDraw.addEventListener('click', what);
// это для того, чтобы браузер построил холст, не знаю почему именно здесь и сейчас 
build();
function what(event){
	//извлекает из формы чё нужно
	format = styleDraw.value;
	//перестройка холста
	build();
};

//функция важная, она перестраивает холст в случае изменение таких настроек, как размер изображения, формат рисования. Да что тебе объяснять? Я же уже всё разболтал в предыдущих комментариях

function build(){
	//чекает на канвас и если "правда" запускает всё что нужно для него
 if(format.toLowerCase() === 'canvas'){
		//создаёт тег в хтмл
		picture.innerHTML = `<canvas id="canvas" height="${hc}" width="${wc}">Your browser don't support canvas</canvas>`
		//не понимаю к чему это, но вещь нужная
		styleDraw.value = `canvas`;
		//запускает канвас, там все обработчики событий и подобное для него
		canvas();
	};
		//аналогично для эсвэгэ
	if(format.toLowerCase() === 'svg'){
		picture.innerHTML = `<svg width="${wc}" height="${hc}" xmlns="http://www.w3.org/2000/svg" id="svg"></svg>`
		styleDraw.value = `svg`;
		svg();
	// вот то самое обнуление блока с кодом про которое я говорил
	code.value = '';
	};
};
/*
  ______           _         _       _   __            __    _          _____
 / _____ \        / \       | |     | |  \ \          / /   / \        /  /\__\
/ /     |_|      /   \      |  \    | |   \ \        / /   /   \      |  |
| |             / /^\ \     | |\\   | |    \ \      / /   / /^\ \      \__\__
| |            / /___\ \    | | \\  | |     \ \    / /   / /___\ \        \  \
| |      __   / _______ \   | |  \\ | |      \ \  / /   / ______  \        |  |
\ \_____| |  / /       \ \  | |   \\| |       \ \/ /   / /       \ \   ____|  |
 \_______/  /_/         \_\ |_|    \__|        \__/   /_/         \_\  \___/  /


*/
//мне лень дальше разбирайся сам
function canvas(){

code.style.display = 'none';

/*Эта фигня объявляет элемент холста*/ 
let canvas = document.querySelector(`#canvas`);
let ctx = canvas.getContext('2d');
let action_list = [];
let rem_list = [];

option = document.getElementsByClassName('download');
option[0].addEventListener("click", export_to_data);
option[1].addEventListener("click", export_to_data);
option[2].addEventListener("click", export_to_data); 
function export_to_data(){
	mime = document.getElementById('export').value;
	setTimeout(function(){document.location.href = canvas.toDataURL(mime)}, 500)
};


/*Начальное событие, по нажатию кнопки запускать функцию begin()*/ 
	canvas.addEventListener(down_type, begin); 

/*добавляет событие при движении мышью на холсте
Очищает саму себя и добавляет событие на функцию end() при отпускании мыши*/

	function begin(event, sw=true){
		canvas.addEventListener(move_type, draw);
		canvas.removeEventListener(down_type, begin);
		canvas.addEventListener(up_type, end);
		ctx.beginPath();
		ctx.lineWidth = width;
		ctx.strokeStyle = color;
		ctx.moveTo(event.pageX - canvas.offsetLeft, event.pageY - canvas.offsetTop);
		if(sw){action_list.push([]);};
	};

/* возвращает все события в начальное состояние
и сбрасывает координаты курсора*/

	function end(sw=true){
		canvas.removeEventListener(move_type, draw)
		canvas.removeEventListener(up_type, end);
		canvas.addEventListener(down_type, begin);
		coursor.EndX = undefined;
		coursor.EndY = undefined;
		//console.log(action_list);
	};

/*Находит начальные координаты и заносит в ранее объявленный объект
Спустя доли секунды находит координаты ещё раз, занося их в конечные координаты
По окончанию получения данных о движении курсора, добавляет тег в эсвэгэшку со всеми данными, настроенные пользователем*/

	function draw(event, sw=true){
		action_list[action_list.length-1].push({});
		if(sw){
			action_list[action_list.length-1][action_list[action_list.length-1].length-1].x = coursor.EndX = event.pageX - canvas.offsetLeft;	
			action_list[action_list.length-1][action_list[action_list.length-1].length-1].y = coursor.EndY = event.pageY - canvas.offsetTop;
		};
		ctx.lineTo(coursor.EndX, coursor.EndY);
		ctx.stroke();
	};
	/*function undo(){
		ctx.clearRect(0, 0, wc, hc)
		action_list.pop()
		console.log(action_list)
		for(let line of action_list){
			begin('pointerdown', false)
			let counter = -1
			for(let obj of line){
				counter+=1
				coursor.EndX = line[counter].x;
				coursor.EndY = line[counter].y;
				draw('pointermove', false);
			};
			end(false)
		};
	
	};*/
	//tool[2].addEventListener('click', undo);
};

//		__	 __		   __   ____
//	 / \_\ \ \    / /  / ____\
//	 | |	  \ \  / /  | | _____
//		\ \	   \ \/ /   | ||__  |
//	  __| |	  \  /    | |___| |
//	 \__/ /		 \/      \_____/


function svg(){

code.style.display = 'block'

/*Эта фигня объявляет элемент холста*/ 
	let svg = document.querySelector(`#svg`);	
/*Начальное событие, по нажатию кнопки запускать функцию begin()*/ 
	svg.addEventListener(down_type, begin);

/*добавляет событие при движении мышью на холсте
Очищает саму себя и добавляет событие на функцию end() при отпускании мыши*/

	function begin(){
		svg.addEventListener(move_type, draw);
		svg.removeEventListener(down_type, begin);
		svg.addEventListener(up_type, end);
		active_id = name_generator();
		svg.innerHTML += `<${svg_tag} id="${active_id}" fill-opacity="0.0" stroke="${color}" stroke-width="${width}"></${svg_tag}>`;
		active_element = document.getElementById(active_id);
		active_element.setAttribute('d', `M ${event.pageX - picture.offsetLeft} ${event.pageY - picture.offsetTop}`)
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
		code.value = svg.innerHTML
		coursor.StartX = event.pageX - picture.offsetLeft;
		coursor.StartY = event.pageY - picture.offsetTop;

		coursor.EndX = event.pageX - picture.offsetLeft;
		coursor.EndY = event.pageY - picture.offsetTop; 
		setTimeout(function(){
			coursor.EndX = event.pageX - picture.offsetLeft;
			coursor.EndY = event.pageY - picture.offsetTop; 
		}, 0.1)
		active_element.setAttribute('d', active_element.getAttribute('d')+` L ${coursor.StartX} ${coursor.StartY}`+` L ${coursor.EndX} ${coursor.EndY}`)
	};
	tool[2].addEventListener('click', function(){
		try{
			action_list.push(svg.lastElementChild.outerHTML);
			svg.removeChild(svg.lastElementChild);
		}catch{};
	})
	tool[3].addEventListener('click', function(){
		svg.innerHTML += action_list[action_list.length - 1];
		action_list.pop(action_list[action_list.length - 1])
	})
};

tool[0].addEventListener('click', function(){
	blockDraw.style.touchAction = 'auto';
	format = undefined;

	up_type = undefined;
	down_type = undefined;
	move_type = undefined;

	coursor.StartX = undefined;
	coursor.StartY = undefined;

	coursor.EndX = undefined;
	coursor.EndY = undefined; 

});
tool[1].addEventListener('click', function(){
	blockDraw.style.touchAction = 'none'
	format = 'canvas';
	move_type = 'pointermove';
	up_type = 'pointerup';
	down_type = 'pointerdown';
});
for(let index = 0; index < 35; index++){
	palitre[index].addEventListener('click', function(){color = palitre[index].getAttribute('title')});
	palitre[index].style.backgroundColor = palitre[index].getAttribute('title');
};
