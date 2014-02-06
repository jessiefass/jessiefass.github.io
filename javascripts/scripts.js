$(document).ready(function() {
	$(".fancybox").fancybox();

	$('.fancybox').fancybox({
		loop:false
	});

	$(".fancybox-thumb")
	.attr('rel', 'gallery')
	.fancybox({
		padding : 0,
		closeBtn : false,
		prevEffect	: 'none',
		nextEffect	: 'none',
		helpers	: {
			title	: {
				type: 'outside'
			},
			thumbs	: {
				width	: 50,
				height	: 50
			}
		}
	});

	// easing scroll
	$(function() {
		$('nav ul ul li a').unbind('click');
		$('nav ul ul li a').bind('click', function(){
			console.log($(this).attr('href'));
			$('html, body').animate({
				scrollTop: $($(this).attr('href')).offset().top
			}, 1200);
				return false;
		});
	});

});