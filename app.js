class Brush{
	constructor(color='#000000', width=5, image=null){
		this.color = color;
		this.width = width;
		this.image = image;
		this.cursor = new Object();
			this.cursor.down = 'pointerdown';
			this.cursor.move = 'pointermove';
			this.cursor.up = 'pointerup';
	};
};

class 
Canva{
	constructor(){
		//great hierarchy
		const that = this;
		this.drawMode = 'canvas'; //canvas or svg
		this.elseDrawMode = 'svg'
		// canva is such main object in all Canva
		this.canva = new Object(); // canva - object for saving data and functions about draw area
			this.canva.width = '1280';
			this.canva.height = '720';
			this.canva.trash = new Array(); // array for 'redo'
			this.canva.journal = new Array(); // array for 'undo'
			this.canva.mime = 'image/png';
			this.canva.changeDrawMethod = function(){
				that.drawMode = that.html.methodInput.value;
				switch(that.drawMode){
					case 'canvas':
						that.elseDrawMode = 'svg';
						that.canva.canvas.buildCanvas();
						break;
					case 'svg':
						that.elseDrawMode = 'canvas';
						that.canva.svg.buildSVG();
						break;
				};
				that.canva[that.drawMode].tag.setAttribute('height', that.canva.height + 'px');
				that.canva[that.drawMode].tag.setAttribute('width', that.canva.width + 'px');
				that.canva[that.elseDrawMode].tag.setAttribute('height', '0px');
				that.canva[that.elseDrawMode].tag.setAttribute('width', '0px');
			};
			this.canva.buildAll = () => {
				// console.log('build system'); //
				//this.html.redo.addEventListener('click', this.tool.canvas.redo);
				this.html.buttonSave.addEventListener('click', this.canva.changeDrawMethod);
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
				this.html.palette[23].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'dodgerblue'});
				this.html.palette[24].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'royalblue'});
				this.html.palette[25].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'blue'});
				this.html.palette[26].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'mediumblue'});
				this.html.palette[27].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'darkblue'});
				this.html.palette[28].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'navy'});
				this.html.palette[29].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'white'});
				this.html.palette[30].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'lightgray'});
				this.html.palette[31].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'silver'});
				this.html.palette[32].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'darkgray'});
				this.html.palette[33].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'gray'});
				this.html.palette[34].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'dimgray'});
				this.html.palette[35].addEventListener('click', function(){that.tool[that.drawMode].brush.color = 'black'});
			};
			// BUILD FUNCTIONS //
			this.canva.canvas = new Object();
				this.canva.canvas.tag = document.querySelector('canvas');
				this.canva.canvas.context = this.canva.canvas.tag.getContext('2d');
				this.canva.canvas.data = this.canva.canvas.tag.toDataURL(this.canva.mime);
				this.canva.canvas.buildCanvas = () => {
					console.debug('build via canvas'); //
					this.canva.journal = new Array();
					this.canva.trash = new Array();
					this.canva.svg.tag.setAttribute('height', '0px');
					this.canva.svg.tag.setAttribute('width', '0px');
					this.html.brush.addEventListener(this.tool.canvas.brush.cursor.up, () => {this.canva.canvas.resetTool('brush')});
					this.html.rect.addEventListener(this.tool.canvas.brush.cursor.up, () => {this.canva.canvas.resetTool('rect')});
					this.html.round.addEventListener(this.tool.canvas.brush.cursor.up, () => {this.canva.canvas.resetTool('round')});
					this.html.polygon.addEventListener(this.tool.canvas.brush.cursor.up, () => {this.canva.canvas.resetTool('polygon')});
					this.html.undo.removeEventListener('pointerdown', this.tool.svg.undo);
					this.html.redo.removeEventListener('pointerdown', this.tool.svg.redo);
					this.html.undo.addEventListener('pointerdown', this.tool.canvas.undo);
					this.html.redo.addEventListener('pointerdown', this.tool.canvas.redo);
					this.canva.canvas.tag.setAttribute('height', this.canva.height + 'px');
					this.canva.canvas.tag.setAttribute('width', this.canva.width + 'px');
					this.canva.journal.push(this.canva.canvas.context.getImageData(0, 0, this.canva.width, this.canva.height));
				};
				this.canva.canvas.resetTool = (tool) => { // switching canva to other tool and preparing there
					this.html.round.removeEventListener(this.tool.canvas.brush.cursor.up, this.tool.canvas.round.begin);
					this.html.rect.removeEventListener(this.tool.canvas.brush.cursor.up, this.tool.canvas.rect.begin);
					this.html.polygon.removeEventListener(this.tool.canvas.brush.cursor.up, this.tool.canvas.polygon.begin);
					this.canva.canvas.tag.removeEventListener(this.tool.canvas.brush.cursor.up, this.tool.canvas.begin);
					switch(tool){
						//You worked here!
						//I'm want code switcher from one to other tool
						case 'brush':
							this.canva.canvas.tag.addEventListener(this.tool.canvas.brush.cursor.down, this.tool.canvas.begin);
							this.canva.canvas.tag.addEventListener(this.tool.canvas.brush.cursor.up, this.tool.canvas.end);
							console.info('brush');
							break;
						case 'rect':
							this.canva.canvas.tag.addEventListener(this.tool.canvas.brush.cursor.down, this.tool.canvas.rect.begin);
							this.canva.canvas.tag.addEventListener(this.tool.canvas.brush.cursor.up, this.tool.canvas.rect.end);
							console.info('rect');
							break;
						case 'round':
							this.canva.canvas.tag.addEventListener(this.tool.canvas.brush.cursor.down, this.tool.canvas.round.begin);
							this.canva.canvas.tag.addEventListener(this.tool.canvas.brush.cursor.up, this.tool.canvas.round.end);
							console.info('round');
							break;
						case 'polygon':
							this.canva.canvas.tag.addEventListener(this.tool.canvas.brush.cursor.down, this.tool.canvas.polygon.begin);
							this.canva.canvas.tag.addEventListener(this.tool.canvas.brush.cursor.up, this.tool.canvas.polygon.end);
							console.info('polygon');
							break;
					};
				};
			this.canva.svg = new Object();
				this.canva.svg.tag = document.querySelector('svg');
				this.canva.svg.buildSVG = () => {
					console.debug('build via svg'); //
					this.canva.journal = new Array();
					this.canva.trash = new Array();
					this.canva.canvas.tag.setAttribute('height', '0px');
					this.canva.canvas.tag.setAttribute('width', '0px');
					this.canva.svg.tag.setAttribute('height', this.canva.height + 'px');
					this.canva.svg.tag.setAttribute('width', this.canva.width + 'px');
					this.html.undo.removeEventListener('pointerdown', this.tool.canvas.undo);
					this.html.redo.removeEventListener('pointerdown', this.tool.canvas.redo);
					this.html.undo.addEventListener('pointerdown', this.tool.svg.undo);
					this.html.redo.addEventListener('pointerdown', this.tool.svg.redo);
					this.canva.svg.tag.addEventListener(this.tool.svg.brush.cursor.up, this.tool.svg.end);
					this.canva.svg.tag.addEventListener(this.tool.svg.brush.cursor.down, this.tool.svg.begin);
				};
			// BUILD FUNCTIONS END //
		this.html = new Object(); // for saving tags, classes, html elements
			// DOM OBJECTS //
			this.html.palette = document.querySelectorAll('.color'); //flex elements div
			this.html.canvaParentBlock = document.querySelector('#canva-block'); //div
			this.html.size = document.querySelector('size'); //select
			this.html.hand = document.querySelector('#tool-hand'); //div
			this.html.brush = document.querySelector('#tool-brush'); //div
			this.html.undo = document.querySelector('#tool-undo'); //div
			this.html.redo = document.querySelector('#tool-redo'); //div
			this.html.round = document.querySelector('#tool-round'); //div
			this.html.polygon = document.querySelector('#tool-polygon'); //div
			this.html.rect = document.querySelector('#tool-rect'); //div
			this.html.code = document.querySelector('#svg-code-block'); //div with textarea
			this.html.widthInput = document.querySelector('#width-input'); // input
			this.html.widthVisibleValue = document.querySelector('#width-visible-value');
			this.html.methodInput = document.querySelector('#draw-method-bar');
			this.html.saveMimeInput = document.querySelector('#saving-option-bar');
			this.html.buttonSave = document.querySelector('#button-save');
			this.html.buttonReset = document.querySelector('#button-reset');
			this.html.buttonExport = document.querySelector('#button-export');
			this.html.activeSVGElement = undefined;
			this.html.sampleCanva = document.querySelector('#sample-canva');
			//DOM OBJECTS END //
		this.tool = new Object();
			this.tool.canvas = new Object();
				this.tool.canvas.brush = new Brush();
					this.tool.canvas.begin = (event) => {
						console.debug('begin'); //
						this.canva.canvas.tag.addEventListener(this.tool.canvas.brush.cursor.move, this.tool.canvas.move);
						this.canva.canvas.context.beginPath();
						this.canva.canvas.context.lineWidth = this.tool.canvas.brush.width;
						this.canva.canvas.context.strokeStyle = this.tool.canvas.brush.color;
						let fromX = event.pageX - this.canva.canvas.tag.offsetLeft;
						let fromY = event.pageY - this.canva.canvas.tag.offsetTop;
						this.canva.canvas.context.moveTo(fromX, fromY);
					};
					this.tool.canvas.move = (event) => {
						console.debug('move'); //
						let toX = event.pageX - this.canva.canvas.tag.offsetLeft;	
						let toY = event.pageY - this.canva.canvas.tag.offsetTop;
						this.canva.canvas.context.lineTo(toX, toY);
						this.canva.canvas.context.stroke();
					};
					this.tool.canvas.end = (event) => {
						console.debug('end'); //
						this.canva.canvas.tag.removeEventListener(this.tool.canvas.brush.cursor.move, this.tool.canvas.move);
						this.canva.canvas.data = this.canva.canvas.tag.toDataURL('image/png'); //data update
						this.canva.journal.push(this.canva.canvas.context.getImageData(0, 0, this.canva.width, this.canva.height)); // note past canva to journal
					};
				this.tool.canvas.round = function(){};
				this.tool.canvas.rect = new Object();
					this.tool.canvas.rect.canvasBegin = new Array(undefined, undefined);
					this.tool.canvas.rect.sampleBegin = new Array(undefined, undefined);
					this.tool.canvas.rect.coordinates = new Array(undefined, undefined, undefined, undefined);
					this.tool.canvas.rect.begin = function(event){
						that.canva.canvas.tag.addEventListener(that.tool.canvas.brush.cursor.move, that.tool.canvas.rect.move);
						that.tool.canvas.rect.canvasBegin = new Array(event.pageX - that.canva.canvas.tag.offsetLeft, event.pageY - that.canva.canvas.tag.offsetTop);
						that.tool.canvas.rect.sampleBegin = new Array(event.pageX, event.pageY);
						that.tool.canvas.rect.sampleElement = document.createElement('path');
						that.tool.canvas.rect.coordinates = new Array(event.pageX, event.pageY, event.pageX, event.pageY); //a b c d
						that.tool.canvas.rect.sampleElement.setAttribute('d', `M ${that.tool.canvas.rect.coordinates[0]} ${that.tool.canvas.rect.coordinates[1]} L ${that.tool.canvas.rect.coordinates[0]} ${that.tool.canvas.rect.coordinates[3]} L ${that.tool.canvas.rect.coordinates[2]} ${that.tool.canvas.rect.coordinates[3]} L ${that.tool.canvas.rect.coordinates[2]} ${that.tool.canvas.rect.coordinates[1]} Z`);
						that.html.sampleCanvas.lastElementChild = that.tool.canvas.rect.sampleElement
						//let id = that.tool.svg.generatorID();
						//that.tool.canvas.rect.sampleElement.setAttribute('id', id);
					};
					this.tool.canvas.rect.move = function(event){
						that.tool.canvas.rect.coordinates[2] = event.pageX;
						that.tool.canvas.rect.coordinates[3] = event.pageY;
						that.tool.canvas.rect.sampleElement.setAttribute('d', `M ${that.tool.canvas.rect.coordinates[0]} ${that.tool.canvas.rect.coordinates[1]} L ${that.tool.canvas.rect.coordinates[0]} ${that.tool.canvas.rect.coordinates[3]} L ${that.tool.canvas.rect.coordinates[2]} ${that.tool.canvas.rect.coordinates[3]} L ${that.tool.canvas.rect.coordinates[2]} ${that.tool.canvas.rect.coordinates[1]} Z`);
					};
					this.tool.canvas.rect.end = function(event){
						that.canva.canvas.context.strokeRect(
							that.tool.canvas.rect.coordinates[0],
							that.tool.canvas.rect.coordinates[1],
							that.tool.canvas.rect.coordinates[2],
							that.tool.canvas.rect.coordinates[3],
						);
						document.removeChild(that.tool.canvas.rect.sampleElement)
						that.canva.canvas.tag.removeEventListener(that.tool.canvas.brush.cursor.move, that.tool.canvas.rect.move);
					};
				this.tool.canvas.polygon = function(){};
				// et cetera
				this.tool.canvas.undo = () => {
					let lastCanva = this.canva.journal.pop();
					this.canva.trash.push(lastCanva);
					this.canva.canvas.context.putImageData(this.canva.journal.at(-1), 0, 0);
				};
				this.tool.canvas.redo = () => {
					let lastCanva = this.canva.trash.pop();
					this.canva.journal.push(lastCanva);
					this.canva.canvas.context.putImageData(this.canva.journal.at(-1), 0, 0);
				};
			this.tool.canvas.colorPicker = function(){};
			this.tool.svg = new Object();
				this.tool.svg.brush = new Brush();
				this.tool.svg.generatorID = () => {
					let result = '$svg-line$' // for different then noermal IDs
					for(let i = 0; i <= 9; i++){
						result = result + '1234567890'[Math.round(Math.random()*9)];
					};
					return result;
				};
				this.tool.svg.begin = (event) => {
					console.log('begin'); //
					this.canva.svg.tag.addEventListener(this.tool.svg.brush.cursor.move, this.tool.svg.move);
					let activeID = this.tool.svg.generatorID();
					this.canva.svg.tag.innerHTML += `<path id='${activeID}' fill-opacity='0.0' stroke='${this.tool.svg.brush.color}' stroke-width='${this.tool.svg.brush.width}'></path>`;
					this.html.activeSVGElement = document.getElementById(activeID);
					this.html.activeSVGElement.setAttribute('d', `M ${event.pageX - this.html.canvaParentBlock.offsetLeft} ${event.pageY - this.html.canvaParentBlock.offsetTop}`);
				};
				this.tool.svg.move = (event) => {
					this.html.code.value = this.canva.svg.tag.innerHTML;
					let toX = event.pageX - this.html.canvaParentBlock.offsetLeft - 17;
					let toY = event.pageY - this.html.canvaParentBlock.offsetTop - 5; 
					this.html.activeSVGElement.setAttribute('d', this.html.activeSVGElement.getAttribute('d') + ` L ${toX} ${toY}`)
					console.log('move is working!'); //
				};
				this.tool.svg.end = (event) => {
					this.canva.svg.tag.removeEventListener(this.tool.svg.brush.cursor.move, this.tool.svg.move);
					console.log('end is completed!'); //
				};
				this.tool.svg = new Object();
					this.tool.svg.round = function(){
						
					};
					this.tool.svg.rect = function(){};
					this.tool.svg.polygon = function(){};
					// et cetera
				this.tool.svg.undo = function(){
					if(that.canva.svg.tag.lastElementChild != null){
						that.canva.journal.push(that.canva.svg.tag.lastElementChild);
						that.canva.svg.tag.lastElementChild.remove();
					};
				};
				this.tool.svg.redo = function(){
					if(that.canva.journal.length) that.canva.svg.tag.appendChild(that.canva.journal.pop());
				};
			this.tool.hand = function(){};
		this.saving = function(){
			switch(that.canva.mime){
				case 'image/svg':
					alert(that.html.code.innerHTML);
					break;
				default:
					that.canva.mime = that.html.saveMimeInput.value;
					let mime = that.canva.canvas.tag.toDataURL(that.canva.mime);
					window.open(mime);
					break;
			};
		};
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
		this.html.palette[11].style.backgroundColor = 'orangered';
		this.html.palette[12].style.backgroundColor = 'chocolate';
		this.html.palette[13].style.backgroundColor = 'saddlebrown';
		this.html.palette[14].style.backgroundColor = 'brown';
		this.html.palette[15].style.backgroundColor = 'greenyellow';
		this.html.palette[16].style.backgroundColor = 'lawngreen';
		this.html.palette[17].style.backgroundColor = 'lime';
		this.html.palette[18].style.backgroundColor = 'limegreen';
		this.html.palette[19].style.backgroundColor = 'forestgreen';
		this.html.palette[20].style.backgroundColor = 'green';
		this.html.palette[21].style.backgroundColor = 'darkgreen';
		this.html.palette[22].style.backgroundColor = 'deepskyblue';
		this.html.palette[23].style.backgroundColor = 'dodgerblue';
		this.html.palette[24].style.backgroundColor = 'royalblue';
		this.html.palette[25].style.backgroundColor = 'blue';
		this.html.palette[26].style.backgroundColor = 'mediumblue';
		this.html.palette[27].style.backgroundColor = 'darkblue';
		this.html.palette[28].style.backgroundColor = 'navy';
		this.html.palette[29].style.backgroundColor = 'white';
		this.html.palette[30].style.backgroundColor = 'lightgray';
		this.html.palette[31].style.backgroundColor = 'silver';
		this.html.palette[32].style.backgroundColor = 'darkgray';
		this.html.palette[33].style.backgroundColor = 'gray';
		this.html.palette[34].style.backgroundColor = 'dimgray';
		this.html.palette[35].style.backgroundColor = 'black';
	}
};
let c = new Canva();