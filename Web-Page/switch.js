let blockDraw = document.getElementById('blockDraw');
let icons = document.getElementsByClassName('icon_menu');
let content = document.getElementsByClassName('content');
let groups = document.getElementsByClassName('group');
icons[0].addEventListener('pointerover', function(){content[0].style.display = 'block';});
icons[1].addEventListener('pointerover', function(){content[1].style.display = 'block';});
icons[2].addEventListener('pointerover', function(){content[2].style.display = 'block';});

groups[0].addEventListener('pointerleave', function(){content[0].style.display = 'none';});
groups[1].addEventListener('pointerleave', function(){content[1].style.display = 'none';});
groups[2].addEventListener('pointerleave', function(){content[2].style.display = 'none';});