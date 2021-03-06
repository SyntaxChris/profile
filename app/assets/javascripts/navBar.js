$(document).ready(function(){
	var $container = $('.main-cntnr');
	var $content = $('.content');
	var $navBar = $('svg.navbar');
	var containerOpen = false;

	var pageSlider = function(linkContent, marker){
		var mark = linkContent.data('to');

		if(containerOpen){
			if(linkContent.css('display') === 'block'){
				$content.hide();
				$container.addClass('collapse');
				$container.removeClass('expand');
				containerOpen = false;
			}else{
				$content.hide();
				$container.addClass('collapse');
				$container.removeClass('expand');
				

				setTimeout(function(){ 
					$container.removeClass('collapse');
					$container.addClass('expand');
					linkContent.delay(100).fadeIn();
					
				}, 320);
			}
		}else{
			if(linkContent.css('display') === 'block'){
				$container.removeClass('collapse');
				$container.addClass('expand');

			}else{
				$container.removeClass('collapse');
				$container.addClass('expand');

				$content.hide();
				linkContent.delay(100).fadeIn();
			}
			
			containerOpen = true;
		}
	};

	var $about = $('.content.about');
	var $portfolio = $('.content.portfolio');
	var $contact = $('.content.contact');
	var $aboutMarker = $('animate.about');
	var $portfolioMarker = $('animate.portfolio');
	var $contactMarker = $('animate.contact');
	
	$('.about-link').on('click', function(){
		pageSlider($about, $aboutMarker);
		$('line.about').addClass('dash-show');
	});

	$('.portfolio-link').on('click', function(){
		pageSlider($portfolio, $portfolioMarker);
	});

	$('.contact-link').on('click', function(){
		pageSlider($contact, $contactMarker);
	});
});