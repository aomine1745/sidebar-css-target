const wall = document.querySelector('.wall'),
x = document.querySelector('.x'),
hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', ()=>{
	wall.classList.remove('wall-none');
	wall.classList.remove('wall-effect');
});
wall.addEventListener('click', vanished);
x.addEventListener('click', vanished);
function vanished(){
	wall.classList.add('wall-effect');
	setTimeout(none, 500);
}
function none(){
	wall.classList.add('wall-none');
	wall.classList.remove('wall-effect');
}