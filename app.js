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
					this.html.palette[0].addEventListener('click', function(){that.tool.canvas.brush.color = 'salmon'});
					this.html.palette[1].addEventListener('click', function(){that.tool.canvas.brush.color = 'indianred'});
					this.html.palette[2].addEventListener('click', function(){that.tool.canvas.brush.color = 'red'});
					this.html.palette[3].addEventListener('click', function(){that.tool.canvas.brush.color = 'darkred'});
					this.html.palette[4].addEventListener('click', function(){that.tool.canvas.brush.color = 'lightyellow'});
					this.html.palette[5].addEventListener('click', function(){that.tool.canvas.brush.color = 'papayawhip'});
					this.html.palette[6].addEventListener('click', function(){that.tool.canvas.brush.color = 'moccasin'});
					this.html.palette[7].addEventListener('click', function(){that.tool.canvas.brush.color = 'peachpuff'});
					this.html.palette[8].addEventListener('click', function(){that.tool.canvas.brush.color = 'yellow'});
					this.html.palette[9].addEventListener('click', function(){that.tool.canvas.brush.color = 'orange'});
					this.html.palette[10].addEventListener('click', function(){that.tool.canvas.brush.color = 'darkorange'});
					this.html.palette[11].addEventListener('click', function(){that.tool.canvas.brush.color = 'orangered'});
					this.html.palette[12].addEventListener('click', function(){that.tool.canvas.brush.color = 'chocolate'});
					this.html.palette[13].addEventListener('click', function(){that.tool.canvas.brush.color = 'saddlebrown'});
					this.html.palette[14].addEventListener('click', function(){that.tool.canvas.brush.color = 'brown'});
					this.html.palette[15].addEventListener('click', function(){that.tool.canvas.brush.color = 'greenyellow'});
					this.html.palette[16].addEventListener('click', function(){that.tool.canvas.brush.color = 'lawngreen'});
					this.html.palette[17].addEventListener('click', function(){that.tool.canvas.brush.color = 'lime'});
					this.html.palette[18].addEventListener('click', function(){that.tool.canvas.brush.color = 'limegreen'});
					this.html.palette[19].addEventListener('click', function(){that.tool.canvas.brush.color = 'forestgreen'});
					this.html.palette[20].addEventListener('click', function(){that.tool.canvas.brush.color = 'green'});
					this.html.palette[21].addEventListener('click', function(){that.tool.canvas.brush.color = 'darkgreen'});
					this.html.palette[22].addEventListener('click', function(){that.tool.canvas.brush.color = 'deepskyblue'});
					this.html.palette[23].addEventListener('click', function(){that.tool.canvas.brush.color = 'royalblue'});
					this.html.palette[24].addEventListener('click', function(){that.tool.canvas.brush.color = 'blue'});
					this.html.palette[25].addEventListener('click', function(){that.tool.canvas.brush.color = 'mediumblue'});
					this.html.palette[26].addEventListener('click', function(){that.tool.canvas.brush.color = 'darkblue'});
					this.html.palette[27].addEventListener('click', function(){that.tool.canvas.brush.color = 'navy'});
					this.html.palette[28].addEventListener('click', function(){that.tool.canvas.brush.color = 'white'});
					this.html.palette[29].addEventListener('click', function(){that.tool.canvas.brush.color = 'lightgray'});
					this.html.palette[30].addEventListener('click', function(){that.tool.canvas.brush.color = 'silver'});
					this.html.palette[31].addEventListener('click', function(){that.tool.canvas.brush.color = 'darkgray'});
					this.html.palette[32].addEventListener('click', function(){that.tool.canvas.brush.color = 'gray'});
					this.html.palette[33].addEventListener('click', function(){that.tool.canvas.brush.color = 'dimgray'});
					this.html.palette[34].addEventListener('click', function(){that.tool.canvas.brush.color = 'black'});
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