"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Brush = function Brush() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#000000';
  var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  var image = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  _classCallCheck(this, Brush);

  this.color = color;
  this.width = width;
  this.image = image;
  this.cursor = new Object();
  this.cursor.down = 'pointerdown';
  this.cursor.move = 'pointermove';
  this.cursor.up = 'pointerup';
};

;

var Canva = function Canva() {
  var _this = this;

  _classCallCheck(this, Canva);

  //great hierarchy
  var that = this;
  this.drawMode = 'canvas'; //canvas or svg

  this.elseDrawMode = 'svg'; // canva is such main object in all Canva

  this.canva = new Object(); // canva - object for saving data and functions about draw area

  this.canva.width = '1280';
  this.canva.height = '720';
  this.canva.trash = new Array(); // array for 'redo'

  this.canva.journal = new Array(); // array for 'undo'

  this.canva.mime = 'image/png';

  this.canva.changeDrawMethod = function () {
    that.drawMode = that.html.methodInput.value;

    switch (that.drawMode) {
      case 'canvas':
        that.elseDrawMode = 'svg';
        that.canva.canvas.buildCanvas();
        break;

      case 'svg':
        that.elseDrawMode = 'canvas';
        that.canva.svg.buildSVG();
        break;
    }

    ;
    that.canva[that.drawMode].tag.setAttribute('height', that.canva.height + 'px');
    that.canva[that.drawMode].tag.setAttribute('width', that.canva.width + 'px');
    that.canva[that.elseDrawMode].tag.setAttribute('height', '0px');
    that.canva[that.elseDrawMode].tag.setAttribute('width', '0px');
  };

  this.canva.buildAll = function () {
    // console.log('build system'); //
    //this.html.redo.addEventListener('click', this.tool.canvas.redo);
    _this.html.buttonSave.addEventListener('click', _this.canva.changeDrawMethod);

    _this.html.widthInput.addEventListener('pointerup', function () {
      that.tool[that.drawMode].brush.width = that.html.widthInput.value;
    });

    _this.html.widthInput.addEventListener('pointermove', function () {
      that.html.widthVisibleValue.innerHTML = that.html.widthInput.value;
    });

    _this.html.palette[0].addEventListener('click', function () {
      that.tool[that.drawMode].brush.color = 'salmon';
    });

    _this.html.palette[1].addEventListener('click', function () {
      that.tool[that.drawMode].brush.color = 'indianred';
    });

    _this.html.palette[2].addEventListener('click', function () {
      that.tool[that.drawMode].brush.color = 'red';
    });

    _this.html.palette[3].addEventListener('click', function () {
      that.tool[that.drawMode].brush.color = 'darkred';
    });

    _this.html.palette[4].addEventListener('click', function () {
      that.tool[that.drawMode].brush.color = 'lightyellow';
    });

    _this.html.palette[5].addEventListener('click', function () {
      that.tool[that.drawMode].brush.color = 'papayawhip';
    });

    _this.html.palette[6].addEventListener('click', function () {
      that.tool[that.drawMode].brush.color = 'moccasin';
    });

    _this.html.palette[7].addEventListener('click', function () {
      that.tool[that.drawMode].brush.color = 'peachpuff';
    });

    _this.html.palette[8].addEventListener('click', function () {
      that.tool[that.drawMode].brush.color = 'yellow';
    });

    _this.html.palette[9].addEventListener('click', function () {
      that.tool[that.drawMode].brush.color = 'orange';
    });

    _this.html.palette[10].addEventListener('click', function () {
      that.tool[that.drawMode].brush.color = 'darkorange';
    });

    _this.html.palette[11].addEventListener('click', function () {
      that.tool[that.drawMode].brush.color = 'orangered';
    });

    _this.html.palette[12].addEventListener('click', function () {
      that.tool[that.drawMode].brush.color = 'chocolate';
    });

    _this.html.palette[13].addEventListener('click', function () {
      that.tool[that.drawMode].brush.color = 'saddlebrown';
    });

    _this.html.palette[14].addEventListener('click', function () {
      that.tool[that.drawMode].brush.color = 'brown';
    });

    _this.html.palette[15].addEventListener('click', function () {
      that.tool[that.drawMode].brush.color = 'greenyellow';
    });

    _this.html.palette[16].addEventListener('click', function () {
      that.tool[that.drawMode].brush.color = 'lawngreen';
    });

    _this.html.palette[17].addEventListener('click', function () {
      that.tool[that.drawMode].brush.color = 'lime';
    });

    _this.html.palette[18].addEventListener('click', function () {
      that.tool[that.drawMode].brush.color = 'limegreen';
    });

    _this.html.palette[19].addEventListener('click', function () {
      that.tool[that.drawMode].brush.color = 'forestgreen';
    });

    _this.html.palette[20].addEventListener('click', function () {
      that.tool[that.drawMode].brush.color = 'green';
    });

    _this.html.palette[21].addEventListener('click', function () {
      that.tool[that.drawMode].brush.color = 'darkgreen';
    });

    _this.html.palette[22].addEventListener('click', function () {
      that.tool[that.drawMode].brush.color = 'deepskyblue';
    });

    _this.html.palette[23].addEventListener('click', function () {
      that.tool[that.drawMode].brush.color = 'dodgerblue';
    });

    _this.html.palette[24].addEventListener('click', function () {
      that.tool[that.drawMode].brush.color = 'royalblue';
    });

    _this.html.palette[25].addEventListener('click', function () {
      that.tool[that.drawMode].brush.color = 'blue';
    });

    _this.html.palette[26].addEventListener('click', function () {
      that.tool[that.drawMode].brush.color = 'mediumblue';
    });

    _this.html.palette[27].addEventListener('click', function () {
      that.tool[that.drawMode].brush.color = 'darkblue';
    });

    _this.html.palette[28].addEventListener('click', function () {
      that.tool[that.drawMode].brush.color = 'navy';
    });

    _this.html.palette[29].addEventListener('click', function () {
      that.tool[that.drawMode].brush.color = 'white';
    });

    _this.html.palette[30].addEventListener('click', function () {
      that.tool[that.drawMode].brush.color = 'lightgray';
    });

    _this.html.palette[31].addEventListener('click', function () {
      that.tool[that.drawMode].brush.color = 'silver';
    });

    _this.html.palette[32].addEventListener('click', function () {
      that.tool[that.drawMode].brush.color = 'darkgray';
    });

    _this.html.palette[33].addEventListener('click', function () {
      that.tool[that.drawMode].brush.color = 'gray';
    });

    _this.html.palette[34].addEventListener('click', function () {
      that.tool[that.drawMode].brush.color = 'dimgray';
    });

    _this.html.palette[35].addEventListener('click', function () {
      that.tool[that.drawMode].brush.color = 'black';
    });
  }; // BUILD FUNCTIONS //


  this.canva.canvas = new Object();
  this.canva.canvas.tag = document.querySelector('#canvas-main');
  this.canva.canvas.context = this.canva.canvas.tag.getContext('2d');
  this.canva.canvas.data = this.canva.canvas.tag.toDataURL(this.canva.mime);

  this.canva.canvas.buildCanvas = function () {
    console.debug('build via canvas'); //

    _this.canva.journal = new Array();
    _this.canva.trash = new Array();

    _this.canva.svg.tag.setAttribute('height', '0px');

    _this.canva.svg.tag.setAttribute('width', '0px');

    _this.html.brush.addEventListener(_this.tool.canvas.brush.cursor.up, function () {
      _this.canva.canvas.resetTool('brush');
    });

    _this.html.rect.addEventListener(_this.tool.canvas.brush.cursor.up, function () {
      _this.canva.canvas.resetTool('rect');
    });

    _this.html.round.addEventListener(_this.tool.canvas.brush.cursor.up, function () {
      _this.canva.canvas.resetTool('round');
    });

    _this.html.polygon.addEventListener(_this.tool.canvas.brush.cursor.up, function () {
      _this.canva.canvas.resetTool('polygon');
    });

    _this.html.undo.removeEventListener('pointerdown', _this.tool.svg.undo);

    _this.html.redo.removeEventListener('pointerdown', _this.tool.svg.redo);

    _this.html.undo.addEventListener('pointerdown', _this.tool.canvas.undo);

    _this.html.redo.addEventListener('pointerdown', _this.tool.canvas.redo);

    _this.canva.canvas.tag.setAttribute('height', _this.canva.height + 'px');

    _this.canva.canvas.tag.setAttribute('width', _this.canva.width + 'px');

    _this.canva.journal.push(_this.canva.canvas.context.getImageData(0, 0, _this.canva.width, _this.canva.height));
  };

  this.canva.canvas.resetTool = function (tool) {
    // switching canva to other tool and preparing there
    _this.html.round.removeEventListener(_this.tool.canvas.brush.cursor.up, _this.tool.canvas.round.begin);

    _this.html.rect.removeEventListener(_this.tool.canvas.brush.cursor.up, _this.tool.canvas.rect.begin);

    _this.html.polygon.removeEventListener(_this.tool.canvas.brush.cursor.up, _this.tool.canvas.polygon.begin);

    _this.canva.canvas.tag.removeEventListener(_this.tool.canvas.brush.cursor.up, _this.tool.canvas.begin);

    switch (tool) {
      //You worked here!
      //I'm want code switcher from one to other tool
      case 'brush':
        _this.canva.canvas.tag.addEventListener(_this.tool.canvas.brush.cursor.down, _this.tool.canvas.begin);

        _this.canva.canvas.tag.addEventListener(_this.tool.canvas.brush.cursor.up, _this.tool.canvas.end);

        console.info('brush');
        break;

      case 'rect':
        _this.canva.canvas.tag.addEventListener(_this.tool.canvas.brush.cursor.down, _this.tool.canvas.rect.begin);

        _this.canva.canvas.tag.addEventListener(_this.tool.canvas.brush.cursor.up, _this.tool.canvas.rect.end);

        console.info('rect');
        break;

      case 'round':
        _this.canva.canvas.tag.addEventListener(_this.tool.canvas.brush.cursor.down, _this.tool.canvas.round.begin);

        _this.canva.canvas.tag.addEventListener(_this.tool.canvas.brush.cursor.up, _this.tool.canvas.round.end);

        console.info('round');
        break;

      case 'polygon':
        _this.canva.canvas.tag.addEventListener(_this.tool.canvas.brush.cursor.down, _this.tool.canvas.polygon.begin);

        _this.canva.canvas.tag.addEventListener(_this.tool.canvas.brush.cursor.up, _this.tool.canvas.polygon.end);

        console.info('polygon');
        break;
    }

    ;
  };

  this.canva.svg = new Object();
  this.canva.svg.tag = document.querySelector('#svg-main');

  this.canva.svg.buildSVG = function () {
    console.debug('build via svg'); //

    _this.canva.journal = new Array();
    _this.canva.trash = new Array();

    _this.canva.canvas.tag.setAttribute('height', '0px');

    _this.canva.canvas.tag.setAttribute('width', '0px');

    _this.canva.svg.tag.setAttribute('height', _this.canva.height + 'px');

    _this.canva.svg.tag.setAttribute('width', _this.canva.width + 'px');

    _this.html.undo.removeEventListener('pointerdown', _this.tool.canvas.undo);

    _this.html.redo.removeEventListener('pointerdown', _this.tool.canvas.redo);

    _this.html.undo.addEventListener('pointerdown', _this.tool.svg.undo);

    _this.html.redo.addEventListener('pointerdown', _this.tool.svg.redo);

    _this.canva.svg.tag.addEventListener(_this.tool.svg.brush.cursor.up, _this.tool.svg.end);

    _this.canva.svg.tag.addEventListener(_this.tool.svg.brush.cursor.down, _this.tool.svg.begin);
  }; // BUILD FUNCTIONS END //


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
  this.html.sampleCanva = document.querySelector('#sample-canva'); //DOM OBJECTS END //

  this.tool = new Object();
  this.tool.canvas = new Object();
  this.tool.canvas.brush = new Brush();

  this.tool.canvas.begin = function (event) {
    console.debug('begin'); //

    _this.canva.canvas.tag.addEventListener(_this.tool.canvas.brush.cursor.move, _this.tool.canvas.move);

    _this.canva.canvas.context.beginPath();

    _this.canva.canvas.context.lineWidth = _this.tool.canvas.brush.width;
    _this.canva.canvas.context.strokeStyle = _this.tool.canvas.brush.color;
    var fromX = event.pageX - _this.canva.canvas.tag.offsetLeft;
    var fromY = event.pageY - _this.canva.canvas.tag.offsetTop;

    _this.canva.canvas.context.moveTo(fromX, fromY);
  };

  this.tool.canvas.move = function (event) {
    console.debug('move'); //

    var toX = event.pageX - _this.canva.canvas.tag.offsetLeft;
    var toY = event.pageY - _this.canva.canvas.tag.offsetTop;

    _this.canva.canvas.context.lineTo(toX, toY);

    _this.canva.canvas.context.stroke();
  };

  this.tool.canvas.end = function (event) {
    console.debug('end'); //

    _this.canva.canvas.tag.removeEventListener(_this.tool.canvas.brush.cursor.move, _this.tool.canvas.move);

    _this.canva.canvas.data = _this.canva.canvas.tag.toDataURL('image/png'); //data update

    _this.canva.journal.push(_this.canva.canvas.context.getImageData(0, 0, _this.canva.width, _this.canva.height)); // note past canva to journal

  };

  this.tool.canvas.round = function () {};

  this.tool.canvas.rect = new Object();
  this.tool.canvas.rect.canvasBegin = new Array(undefined, undefined);
  this.tool.canvas.rect.sampleBegin = new Array(undefined, undefined);
  this.tool.canvas.rect.coordinates = new Array(undefined, undefined, undefined, undefined);

  this.tool.canvas.rect.begin = function (event) {
    that.canva.canvas.tag.addEventListener(that.tool.canvas.brush.cursor.move, that.tool.canvas.rect.move);
    that.tool.canvas.rect.canvasBegin = new Array(event.pageX - that.canva.canvas.tag.offsetLeft, event.pageY - that.canva.canvas.tag.offsetTop);
    that.tool.canvas.rect.sampleBegin = new Array(event.pageX, event.pageY);
    that.tool.canvas.rect.sampleElement = document.createElement('path');
    that.tool.canvas.rect.coordinates = new Array(event.pageX - that.canva.canvas.tag.offsetLeft, event.pageY - that.canva.canvas.tag.offsetTop, undefined, undefined); //a b c d

    that.tool.canvas.rect.sampleElement.setAttribute('d', "M ".concat(that.tool.canvas.rect.coordinates[0], " ").concat(that.tool.canvas.rect.coordinates[1], " L ").concat(that.tool.canvas.rect.coordinates[0], " ").concat(that.tool.canvas.rect.coordinates[3], " L ").concat(that.tool.canvas.rect.coordinates[2], " ").concat(that.tool.canvas.rect.coordinates[3], " L ").concat(that.tool.canvas.rect.coordinates[2], " ").concat(that.tool.canvas.rect.coordinates[1], " Z"));
    that.html.sampleCanva.appendChild(that.tool.canvas.rect.sampleElement);
    that.tool.canvas.rect.sampleElement.setAttribute('width', that.tool.canvas.brush.width);
    that.tool.canvas.rect.sampleElement.setAttribute('stroke', that.tool.canvas.brush.color); //let id = that.tool.svg.generatorID();
    //that.tool.canvas.rect.sampleElement.setAttribute('id', id);
  };

  this.tool.canvas.rect.move = function (event) {
    that.tool.canvas.rect.coordinates[2] = event.pageX - that.canva.canvas.tag.offsetLeft;
    that.tool.canvas.rect.coordinates[3] = event.pageY - that.canva.canvas.tag.offsetTop;
    that.tool.canvas.rect.sampleElement.setAttribute('d', "M ".concat(that.tool.canvas.rect.coordinates[0], " ").concat(that.tool.canvas.rect.coordinates[1], " L ").concat(that.tool.canvas.rect.coordinates[0], " ").concat(that.tool.canvas.rect.coordinates[3], " L ").concat(that.tool.canvas.rect.coordinates[2], " ").concat(that.tool.canvas.rect.coordinates[3], " L ").concat(that.tool.canvas.rect.coordinates[2], " ").concat(that.tool.canvas.rect.coordinates[1], " Z"));
    console.info(that.tool.canvas.rect.coordinates);
  };

  this.tool.canvas.rect.end = function (event) {
    // if(that.tool.canvas.rect.coordinates[0] < that.tool.canvas.rect.coordinates[2]){
    // 	that.tool.canvas.rect.coordinates[0], that.tool.canvas.rect.coordinates[2] = that.tool.canvas.rect.coordinates[2], that.tool.canvas.rect.coordinates[0]
    // }
    // if(that.tool.canvas.rect.coordinates[1] < that.tool.canvas.rect.coordinates[3]){
    // 	that.tool.canvas.rect.coordinates[1], that.tool.canvas.rect.coordinates[3] = that.tool.canvas.rect.coordinates[3], that.tool.canvas.rect.coordinates[1]
    // }
    that.canva.canvas.context.strokeRect(that.tool.canvas.rect.coordinates[0], that.tool.canvas.rect.coordinates[1], that.tool.canvas.rect.coordinates[0] - that.tool.canvas.rect.coordinates[2], that.tool.canvas.rect.coordinates[1] - that.tool.canvas.rect.coordinates[3]);
    that.html.sampleCanva.removeChild(that.tool.canvas.rect.sampleElement);
    that.canva.canvas.tag.removeEventListener(that.tool.canvas.brush.cursor.move, that.tool.canvas.rect.move);
  };

  this.tool.canvas.polygon = function () {}; // et cetera


  this.tool.canvas.undo = function () {
    var lastCanva = _this.canva.journal.pop();

    _this.canva.trash.push(lastCanva);

    _this.canva.canvas.context.putImageData(_this.canva.journal.at(-1), 0, 0);
  };

  this.tool.canvas.redo = function () {
    var lastCanva = _this.canva.trash.pop();

    _this.canva.journal.push(lastCanva);

    _this.canva.canvas.context.putImageData(_this.canva.journal.at(-1), 0, 0);
  };

  this.tool.canvas.colorPicker = function () {};

  this.tool.svg = new Object();
  this.tool.svg.brush = new Brush();

  this.tool.svg.generatorID = function () {
    var result = '$svg-line$'; // for different then noermal IDs

    for (var i = 0; i <= 9; i++) {
      result = result + '1234567890'[Math.round(Math.random() * 9)];
    }

    ;
    return result;
  };

  this.tool.svg.begin = function (event) {
    console.log('begin'); //

    _this.canva.svg.tag.addEventListener(_this.tool.svg.brush.cursor.move, _this.tool.svg.move);

    var activeID = _this.tool.svg.generatorID();

    _this.canva.svg.tag.innerHTML += "<path id='".concat(activeID, "' fill-opacity='0.0' stroke='").concat(_this.tool.svg.brush.color, "' stroke-width='").concat(_this.tool.svg.brush.width, "'></path>");
    _this.html.activeSVGElement = document.getElementById(activeID);

    _this.html.activeSVGElement.setAttribute('d', "M ".concat(event.pageX - _this.html.canvaParentBlock.offsetLeft, " ").concat(event.pageY - _this.html.canvaParentBlock.offsetTop));
  };

  this.tool.svg.move = function (event) {
    _this.html.code.value = _this.canva.svg.tag.innerHTML;
    var toX = event.pageX - _this.html.canvaParentBlock.offsetLeft - 17;
    var toY = event.pageY - _this.html.canvaParentBlock.offsetTop - 5;

    _this.html.activeSVGElement.setAttribute('d', _this.html.activeSVGElement.getAttribute('d') + " L ".concat(toX, " ").concat(toY));

    console.log('move is working!'); //
  };

  this.tool.svg.end = function (event) {
    _this.canva.svg.tag.removeEventListener(_this.tool.svg.brush.cursor.move, _this.tool.svg.move);

    console.log('end is completed!'); //
  };

  this.tool.svg = new Object();

  this.tool.svg.round = function () {};

  this.tool.svg.rect = function () {};

  this.tool.svg.polygon = function () {}; // et cetera


  this.tool.svg.undo = function () {
    if (that.canva.svg.tag.lastElementChild != null) {
      that.canva.journal.push(that.canva.svg.tag.lastElementChild);
      that.canva.svg.tag.lastElementChild.remove();
    }

    ;
  };

  this.tool.svg.redo = function () {
    if (that.canva.journal.length) that.canva.svg.tag.appendChild(that.canva.journal.pop());
  };

  this.tool.hand = function () {};

  this.saving = function () {
    switch (that.canva.mime) {
      case 'image/svg':
        alert(that.html.code.innerHTML);
        break;

      default:
        that.canva.mime = that.html.saveMimeInput.value;
        var mime = that.canva.canvas.tag.toDataURL(that.canva.mime);
        window.open(mime);
        break;
    }

    ;
  }; // hanging events


  this.canva.buildAll();

  if (this.drawMode == 'canvas') {
    this.canva.canvas.buildCanvas();
  } else if (this.drawMode == 'svg') {
    this.canva.svg.buildSVG();
  }

  ;
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
};

;
var c = new Canva();