$(document).ready(function() {

	$('.choose-hero').click(function() {


		$('.enemies').append($(".choose-hero"));
		$(this).prop('id', 'hero');
		$('.your-char').append($("#hero"));
		$('.choose-hero').not(this).removeClass('choose-hero').addClass('enemy');
		
	});

	$('.enemy').click(function() {

		
		$(this).prop('id', 'villain');
		
		$('.defender').append($("#villain"));
		
	});

	


});