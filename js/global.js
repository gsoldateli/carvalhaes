(function(window){

	window.registerMenuActions = function registerMenuActions() {
		$contentHolder = document.querySelector('.content-holder');

		/* Registra ação do menu lateral */
		$waypoints = document.querySelectorAll('[data-menu-id]');
		var $pages = document.querySelectorAll('.page');

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
		});
	}
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

	//Função página carregada.
	window.$ = {};
	$.ready = function(fn) {
	  if (document.readyState == "complete")
	      return fn();

	  if (window.addEventListener)
	      window.addEventListener("load", fn, false);
	  else if (window.attachEvent)
	      window.attachEvent("onload", fn);
	  else
	      window.onload = fn;
	}

	window.fadeOut = function(el){
	  el.style.opacity = 1;

	  (function fade() {
	    if ((el.style.opacity -= .1) < 0) {
	      //el.remove();
	      el.style.display = "none";
	    } else {
	      requestAnimationFrame(fade);
	    }
	  })();
	}

	window.fadeIn = function(el){
	  el.style.opacity = 0;
	  el.style.display = "block";

	  (function fade() {
	    var val = parseFloat(el.style.opacity);
	    //Increase opacity while it is not totally opaque.
	    if (!((val += .1) > 1)) {
	      el.style.opacity = val;
	      requestAnimationFrame(fade);
	    }
	  })();
	}


})(window);


function onLoadPage() {
	//Remove splash screen
	fadeOut(document.querySelector('.splash'));

	var $imageCol = document.querySelector('.same-height-previous');
	$imageCol.style.height = $imageCol.previousElementSibling.getBoundingClientRect().height+'px';
}

$.ready(onLoadPage);
registerMenuActions();