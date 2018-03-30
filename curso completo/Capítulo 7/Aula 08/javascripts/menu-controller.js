var toggleMenu = document.querySelector('.js-bar-button');

toggleMenu.onclick = function() {
	var menu = document.querySelector('.js-menu');
	menu.classList.toggle('header-menu--toggling');
}