class Brush{
	constructor(color='#000000', width=5, image=null){
		this.color = color;
		this.width = width;
		this.image = image;
		this.cursor = new Object();
			this.cursor.x = undefined;
			this.cursor.y = undefined;
			this.cursor.down = 'pointerdown';
			this.cursor.move = 'pointermove';
			this.cursor.up = 'pointerup';
	};
};

class Canva{
	constructor(){
		//great hierarchy
		const that = this;
		this.drawMode = "svg"; //canvas or svg
		// canva is such main object in all Canva
		this.canva = new Object(); // canva - object for saving data and functions about draw area
			this.canva.journal = new Array();
			this.canva.buildAll = () => {
				// console.log("build system"); //
				this.html.widthInput.addEventListener('pointerup', function(){that.tool[that.drawMode].brush.width = that.html.widthInput.value});
				this.html.widthInput.addEventListener('pointermove', function(){that.html.widthVisibleValue.innerHTML = that.html.widthInput.value});
				this.html.palette[0].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'salmon'});
				this.html.palette[1].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'indianred'});
				this.html.palette[2].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'red'});
				this.html.palette[3].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'darkred'});
				this.html.palette[4].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'lightyellow'});
				this.html.palette[5].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'papayawhip'});
				this.html.palette[6].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'moccasin'});
				this.html.palette[7].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'peachpuff'});
				this.html.palette[8].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'yellow'});
				this.html.palette[9].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'orange'});
				this.html.palette[10].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'darkorange'});
				this.html.palette[11].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'orangered'});
				this.html.palette[12].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'chocolate'});
				this.html.palette[13].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'saddlebrown'});
				this.html.palette[14].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'brown'});
				this.html.palette[15].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'greenyellow'});
				this.html.palette[16].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'lawngreen'});
				this.html.palette[17].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'lime'});
				this.html.palette[18].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'limegreen'});
				this.html.palette[19].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'forestgreen'});
				this.html.palette[20].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'green'});
				this.html.palette[21].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'darkgreen'});
				this.html.palette[22].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'deepskyblue'});
				this.html.palette[23].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'royalblue'});
				this.html.palette[24].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'blue'});
				this.html.palette[25].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'mediumblue'});
				this.html.palette[26].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'darkblue'});
				this.html.palette[27].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'navy'});
				this.html.palette[28].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'white'});
				this.html.palette[29].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'lightgray'});
				this.html.palette[30].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'silver'});
				this.html.palette[31].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'darkgray'});
				this.html.palette[32].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'gray'});
				this.html.palette[33].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'dimgray'});
				this.html.palette[34].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'black'});
			};
			this.canva.canvas = new Object();
				this.canva.canvas.buildCanvas = () => {
					//console.log('build via canvas'); //
					this.canva.canvas.tag.addEventListener(this.tool[that.drawMode].brush.cursor.down, this.tool[that.drawMode].begin);
				};
				this.canva.canvas.tag = document.querySelector('canvas');
				this.canva.canvas.context = this.canva.canvas.tag.getContext('2d');
				this.canva.canvas.data = this.canva.canvas.tag.toDataURL('image/png');
			this.canva.svg = new Object();
				this.canva.svg.tag = document.querySelector('svg');
				this.canva.svg.buildSVG = () => {
					console.log('build via svg'); //
					this.canva.svg.tag.addEventListener(this.tool.svg.brush.cursor.down, this.tool.svg.begin);
				};	
			this.canva.width = 1280;
			this.canva.height = 720;
		this.html = new Object(); // for saving tags, classes, html elements
			this.html.palette = document.querySelectorAll('.color'); //flex elements div
			this.html.canvaParentBlock = document.querySelector('#blockDraw'); //div
			this.html.size = document.querySelector('size'); //select
			this.html.tool = document.querySelectorAll('tool'); //divs
			this.html.code = document.querySelector('#code_svg'); //div with textarea
			this.html.widthInput = document.querySelector('#width_input'); // input
			this.html.widthVisibleValue = document.querySelector('#width_visible_value');
			this.html.activeSVGElement = undefined;
		this.tool = new Object();
			this.tool.canvas = new Object();
				this.tool.canvas.brush = new Brush();
					this.tool.canvas.begin = (event) => {
						//console.log('begin'); //
						this.canva.canvas.tag.removeEventListener(this.tool.canvas.brush.cursor.down, this.tool.canvas.begin);
						this.canva.canvas.tag.addEventListener(this.tool.canvas.brush.cursor.move, this.tool.canvas.move);
						this.canva.canvas.tag.addEventListener(this.tool.canvas.brush.cursor.up, this.tool.canvas.end);
						this.canva.canvas.context.beginPath();
						this.canva.canvas.context.lineWidth = this.tool.canvas.brush.width;
						this.canva.canvas.context.strokeStyle = this.tool.canvas.brush.color;
						this.tool.canvas.brush.cursor.x = event.pageX - this.canva.canvas.tag.offsetLeft;
						this.tool.canvas.brush.cursor.y = event.pageY - this.canva.canvas.tag.offsetTop;
						this.canva.canvas.context.moveTo(this.tool.canvas.brush.cursor.x, this.tool.canvas.brush.cursor.y);
					};
					this.tool.canvas.move = (event) => {
						//console.log('move'); //
						let toX = event.pageX - this.canva.canvas.tag.offsetLeft;	
						let toY = event.pageY - this.canva.canvas.tag.offsetTop;
						this.canva.canvas.context.lineTo(toX, toY);
						this.canva.canvas.context.stroke();
					};
					this.tool.canvas.end = (event) => {
						//console.log('end'); //
						this.canva.canvas.tag.removeEventListener(this.tool.canvas.brush.cursor.up, this.tool.canvas.end);
						this.canva.canvas.tag.removeEventListener(this.tool.canvas.brush.cursor.move, this.tool.canvas.move);
						this.canva.canvas.tag.addEventListener(this.tool.canvas.brush.cursor.down, this.tool.canvas.begin);
						this.canva.journal.push(this.canva.canvas.data); // note past canva to journal
						this.canva.canvas.data = this.canva.canvas.tag.toDataURL('image/png'); //data update
					};
				this.tool.canvas.shape = new Object();
					this.tool.canvas.shape.round = function(){};
					this.tool.canvas.shape.rect = function(){};
					this.tool.canvas.shape.polygon = function(){};
					// et cetera
				this.tool.canvas.undo = function(){};
				this.tool.canvas.redo = function(){};
				this.tool.canvas.colorPicker = function(){};
			this.tool.svg = new Object();
				this.tool.svg.brush = new Brush();
				this.tool.svg.generatorID = () => {
					let result = '$svg-line$' // for different then noermal IDs
					for(let i = 0; i <= 9; i++){
						result = result + "1234567890"[Math.round(Math.random()*9)];
					};
					return result;
				};
				this.tool.svg.begin = (event) => {
					this.canva.svg.tag.removeEventListener(this.tool.svg.brush.cursor.up, this.tool.svg.end);
					this.canva.svg.tag.addEventListener(this.tool.svg.brush.cursor.move, this.tool.svg.move);
					this.canva.svg.tag.addEventListener(this.tool.svg.brush.cursor.down, this.tool.svg.begin);
					let activeID = this.tool.svg.generatorID();
					this.canva.svg.tag.innerHTML += `<path id="${activeID}" fill-opacity="0.0" stroke="${this.tool.svg.brush.color}" stroke-width="${this.tool.svg.brush.width}"></path>`;
					this.html.activeSVGElement = document.getElementById(activeID);
					this.html.activeSVGElement.setAttribute('d', `M ${event.pageX - this.html.canvaParentBlock.offsetLeft} ${event.pageY - this.html.canvaParentBlock.offsetTop}`)
					console.log("begin is completed!"); //
				};
				this.tool.svg.move = (event) => {
					this.html.code.value = this.canva.svg.tag.innerHTML;
					//let fromX = Math.round(event.pageX - this.html.canvaParentBlock.offsetLeft);
					//let fromY = Math.round(event.pageY - this.html.canvaParentBlock.offsetTop);
					let toX = event.pageX - this.html.canvaParentBlock.offsetLeft;
					let toY = event.pageY - this.html.canvaParentBlock.offsetTop; 
					/*setTimeout(function(){
						coursor.EndX = Math.round(event.pageX - picture.offsetLeft);
						coursor.EndY = Math.round(event.pageY - picture.offsetTop); 
					}, 0.1)*/
					this.html.activeSVGElement.setAttribute('d', this.html.activeSVGElement.getAttribute('d') + ` L ${toX} ${toY}`)
					
					// don't in the 'move'
					/*tool[2].addEventListener('click', function(){
						try{
							action_list.push(svg.lastElementChild.outerHTML);
							svg.removeChild(svg.lastElementChild);
						}catch{};
					});
					tool[3].addEventListener('click', function(){
						svg.innerHTML += action_list[action_list.length - 1];
						action_list.pop(action_list[action_list.length - 1])
					});*/
					console.log("move is working!"); //
				};
				this.tool.svg.end = (event) => {
					this.canva.svg.tag.removeEventListener(this.tool.svg.brush.cursor.up, this.tool.svg.end);
						this.canva.svg.tag.removeEventListener(this.tool.svg.brush.cursor.move, this.tool.svg.move);
						this.canva.svg.tag.addEventListener(this.tool.svg.brush.cursor.down, this.tool.svg.begin);
					console.log("end is completed!"); //
				};
				this.tool.svg.shape = new Object();
					this.tool.svg.shape.round = function(){};
					this.tool.svg.shape.rect = function(){};
					this.tool.svg.shape.polygon = function(){};
					// et cetera
				this.tool.svg.undo = function(){};
				this.tool.svg.redo = function(){};
			this.tool.hand = function(){};
		this.saving = function(){};
		// hanging events
		this.canva.buildAll();
		if(this.drawMode == 'canvas'){
			this.canva.canvas.buildCanvas();
		}else if(this.drawMode == 'svg'){
			this.canva.svg.buildSVG();
		};
		this.html.palette[0].style.backgroundColor = 'salmon';
		this.html.palette[1].style.backgroundColor = 'indianred';
		this.html.palette[2].style.backgroundColor = 'red';
		this.html.palette[3].style.backgroundColor = 'darkred';
		this.html.palette[4].style.backgroundColor = 'lightyellow';
		this.html.palette[5].style.backgroundColor = 'papayawhip';
		this.html.palette[6].style.backgroundColor = 'moccasin';
		this.html.palette[7].style.backgroundColor = 'peachpuff';
		this.html.palette[8].style.backgroundColor = 'yellow';
		this.html.palette[9].style.backgroundColor = 'orange';
		this.html.palette[10].style.backgroundColor = 'darkorange';
		this.html.palette[11].style.backgroundColor = 'chocolate';
		this.html.palette[12].style.backgroundColor = 'saddlebrown';
		this.html.palette[13].style.backgroundColor = 'brown';
		this.html.palette[14].style.backgroundColor = 'greenyellow';
		this.html.palette[15].style.backgroundColor = 'lawngreen';
		this.html.palette[16].style.backgroundColor = 'lime';
		this.html.palette[17].style.backgroundColor = 'limegreen';
		this.html.palette[18].style.backgroundColor = 'forestgreen';
		this.html.palette[19].style.backgroundColor = 'green';
		this.html.palette[20].style.backgroundColor = 'darkgreen';
		this.html.palette[21].style.backgroundColor = 'deepskyblue';
		this.html.palette[22].style.backgroundColor = 'dodgerblue';
		this.html.palette[23].style.backgroundColor = 'royalblue';
		this.html.palette[24].style.backgroundColor = 'blue';
		this.html.palette[25].style.backgroundColor = 'mediumblue';
		this.html.palette[26].style.backgroundColor = 'darkblue';
		this.html.palette[27].style.backgroundColor = 'navy';
		this.html.palette[28].style.backgroundColor = 'white';
		this.html.palette[29].style.backgroundColor = 'lightgray';
		this.html.palette[30].style.backgroundColor = 'silver';
		this.html.palette[31].style.backgroundColor = 'darkgray';
		this.html.palette[32].style.backgroundColor = 'gray';
		this.html.palette[33].style.backgroundColor = 'dimgray';
		this.html.palette[34].style.backgroundColor = 'black';
	}
};
let c = new Canva();