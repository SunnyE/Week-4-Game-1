
function pickHero() {
	alert("pickHero Function");
	$('.enemies').append($(".choose-hero"));
	$('.your-char').append(this);
}

function pickVillain(e){
	alert("pickVillain Function");
    $('.defender').append(e.target);
}


$(document).ready(function() {

// CLICK ON A CHARACTER TO PLACE IN 'YOUR CHARACTER' ////////////////////	
	$('.choose-hero').on('click', pickHero);

	// UNBIND CLICK EVENT  ///////////////////////////////////////

	$('.choose-hero').click(function(){
        $('.choose-hero').unbind('click', pickHero);
     });

// CLICK ON AN ENEMY TO CHOOSE YOUR VILLAIN /////////////////////////////

	$('.enemies').on('click', pickVillain);

	// UNBIND CLICK EVENT ///////////////////////////////////////

	$('.enemies').click(function(){
    	$('.enemies').unbind('click', pickVillain);
    });

});

