(function(window){

$contentHolder = document.querySelector('.content-holder');

/* Registra ação do menu lateral */
$waypoints = document.querySelectorAll('[data-menu-id]');
var $pages = document.querySelectorAll('.page');
console.log($pages);

//Adiciona ação de click nos menus laterais para mostrar a página
for(var x=0; x<$waypoints.length; x++) {
	var $wp = $waypoints[x];
	$wp.addEventListener('click',goTo(x));
}

function goTo(index) {
	return function(){
		scrollToElement($pages[index]);
	};
}

//Registra scroll que ativa menu lateral quando chega em determinada seção
$contentHolder.addEventListener('scroll',function(){
	for(var x=0; x<$pages.length;x++) {
		var $page = $pages[x];
		if(isInViewport($page,-30)) {
			$waypoints[x].classList.add('menu__item--active');
			$page.classList.add('page--active');
		}
		else {
			$page.classList.remove('page--active');
			$waypoints[x].classList.remove('menu__item--active');
		}
	}
	console.log('Opa');
});

function isInViewport($el,threshold) {
	
	if(threshold === undefined) {
		threshold = 0;
	}

    var rect = $el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;


    // Only completely visible elements return true:
    var isVisible = (elemTop < -threshold && elemBottom > 0); 


    return isVisible;
}

})(window);