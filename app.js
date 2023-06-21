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
		this.drawMode = "canvas"; //canvas or svg
		// canva is such main object in all Canva
		this.canva = new Object(); // canva - object for saving data and functions about draw area
			this.canva.journal = new Array();
			this.canva.canvas = new Object();
				this.canva.canvas.buildFunction = () => {
					//console.log('build'); //
					this.canva.canvas.tag.addEventListener(this.tool.canvas.brush.cursor.down, this.tool.canvas.begin);
				};
				this.canva.canvas.tag = document.querySelector('canvas');
				this.canva.canvas.context = this.canva.canvas.tag.getContext('2d');
				this.canva.canvas.data = this.canva.canvas.tag.toDataURL('image/png');
			this.canva.svg = new Object();
				this.canva.svg.buildFunction = () => {
					console.log('build'); //
					this.canva.svg.tag.addEventListener(this.tool.svg.brush.cursor.down, this.tool.svg.brush.begin);
				};
				this.canva.svg.tag = document.querySelector('svg');	
			this.canva.width = 1280;
			this.canva.height = 720;
		this.html = new Object(); // for saving tags, classes, html elements
			this.html.palette = document.querySelectorAll('.color'); //flex elements div
			this.html.modeBlock = document.querySelector('#blockDraw'); //div
			this.html.size = document.querySelector('size'); //select
			this.html.tool = document.querySelectorAll('tool'); //divs
			this.html.code = document.querySelector('code_svg'); //div with textarea
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
		if(this.drawMode == 'canvas'){
			this.canva.canvas.buildFunction();
		}else if(this.drawMode == 'svg'){
			this.canva.svg.build();
		};
	}
};
let c = new Canva();