let icons = document.getElementsByClassName('icon-menu');
let content = document.getElementsByClassName('content');
let pt = document.getElementsByClassName('parenthese');
let device = document.getElementsByClassName('device');
let blockDraw = document.getElementById('canvas-block');

icons[0].addEventListener('click', visible_one);
icons[1].addEventListener('click', visible_two);
icons[2].addEventListener('click', visible_three);

function visible_one(){
	content[0].style.display = 'block';
	pt[0].innerHTML = '⟩';
	icons[0].removeEventListener('click', visible_one);
	icons[0].addEventListener('click', hidden_one);
};

function visible_two(){
	content[1].style.display = 'block';
	pt[1].innerHTML = '⟩';
	icons[1].removeEventListener('click', visible_two);
	icons[1].addEventListener('click', hidden_two);
};

function visible_three(){
	content[2].style.display = 'block';
	pt[2].innerHTML = '⟩';
	icons[2].removeEventListener('click', visible_three);
	icons[2].addEventListener('click', hidden_three);
};
function hidden_one(){
	content[0].style.display = 'none';
	pt[0].innerHTML = '⟨';
	icons[0].removeEventListener('click', hidden_one);
	icons[0].addEventListener('click', visible_one);
};

function hidden_two(){
	content[1].style.display = 'none';
	pt[1].innerHTML = '⟨';
	icons[1].removeEventListener('click', hidden_two);
	icons[1].addEventListener('click', visible_two);
};

function hidden_three(){
	content[2].style.display = 'none';
	pt[2].innerHTML = '⟨';
	icons[2].removeEventListener('click', hidden_three);
	icons[2].addEventListener('click', visible_three);
};
