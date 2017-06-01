/**
 * Toolkit JavaScript
 */

'use strict';

//
// new Vivus('my-svg', {
//   duration: 200
//
// }, myCallback);
(function(){
var mainNav = function() {
	var button = document.getElementById('cn-button'),
    wrapper = document.getElementById('cn-wrapper');

    //open and close menu when the button is clicked
	var open = false;
	button.addEventListener('click', handler, false);
	$('body').append('<div class="cn-button__overlay cn-button__overlay--closed"/>');
	function handler(){
	  if(!open){
			$(this).find('.cn-button__menu').hide();
	    $(this).find('.cn-button__menu--close').show();
	    $(wrapper).addClass('opened-nav');
			$('body').addClass('overlay-visible');
			$('.cn-button__overlay').removeClass('cn-button__overlay--closed');
	  }
	  else{
				$(this).find('.cn-button__menu').show();
		    $(this).find('.cn-button__menu--close').hide();
				$(wrapper).removeClass('opened-nav');
				$('body').removeClass('overlay-visible');
				$('.cn-button__overlay').addClass('cn-button__overlay--closed');
	  }
	  open = !open;
	}
	function closeWrapper(){
		$(wrapper).removeClass('opened-nav');
	}
}();

})();


$(function(){
  // var ilustrations = $('.jumbotron__animation');

  // ilustrations.each(function(){
  //   console.log($(this).attr('id'));
  // });
  // console.log(animations);

	var loaderHandler = function(callback) {
		$('.loader-wrapper').css('opacity','0')
		setTimeout(function() { $('.loader-wrapper').remove()}, 1000);



	}


	var options = {
		duration: 30,
		onReady: function(el) {
			$(el.parentEl.closest('.jumbotron__animation-wrapper')).addClass('gold-stroke');
			$(el.parentEl.closest('.jumbotron')).find('.jumbotron__background--wrapper').css('opacity','1');
			setTimeout(loaderHandler,2000);
		}
	}

  if ($('#svgEmperors').length>0) {
    var svgEmperors = new Vivus('svgEmperors',options , hideSVG);
  }
  if ($('#svgForbiddencity').length>0) {
    var svgForbiddencity = new Vivus('svgForbiddencity', {
				duration: 30,
				start: 'autostart',
				onReady: function(el) {
					$(el.parentEl.closest('.jumbotron__animation-wrapper')).addClass('gold-stroke');
					$(el.parentEl.closest('.jumbotron')).find('.jumbotron__background--wrapper').css('opacity','1');
					setTimeout(loaderHandler,200);
				}
		}, hideSVG);
  }
  if ($('#svgHistory').length>0) {
    var svgHistory = new Vivus('svgHistory', options, hideSVG);
  }
  if ($('#svgTraveltips').length>0) {
    var svgTraveltips = new Vivus('svgTraveltips', options, hideSVG);
  }
  if ($('#svgWhattosee').length>0) {
    var svgWhattosee = new Vivus('svgWhattosee', options, hideSVG);
  }
	function hideSVG(animation) {
		var jumbo = $(animation.parentEl).closest('.jumbotron');

		jumbo.find('.jumbotron__animation-wrapper').fadeOut(500, "easeOutCubic", function() {
			jumbo.addClass('svg--fade');
			$('body').addClass('svg--faded');
			jumbo.find('.jumbotron__pattern-gold').css('opacity', '0');
			jumbo.find('.rec-white').css('opacity','1');
		});

	}



})


$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 630) {
        $(".page__title.page__title--main").addClass("gold-text");
    } else {
        $(".page__title.page__title--main").removeClass("gold-text");
    }
});
