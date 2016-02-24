
var maul = {
	name: 'Darth Maul',
	health: 180,
	attackPower: 20,
	attackPowerConstant: 20,
	counterAttack: 25
}

var luke = {
	name: 'Luke Skywalker',
	health: 100,
	attackPower: 10,
	attackPowerConstant: 10,
	counterAttack: 5
}

var sidious = {
	name: 'Darth Sidious',
	health: 150,
	attackPower: 15,
	attackPowerConstant: 15,
	counterAttack: 20
}

var obi = {
	name: 'Obi-Wan Kenobi',
	health: 120,
	attackPower: 8,
	attackPowerConstant: 8,
	counterAttack: 10
}

function pickHero() {
	$('.enemies').append($(".choose-hero"));
	$('.your-char').append(this);
}

function pickVillain(e){
	$('.attack-report').empty();
	$('.counter-report').empty();
    $('.defender').append(e.target);
}

function changeHealth() {
	var hero = $('.your-char div').attr('id');
	if(hero == 'maul') {hero = maul};
	if(hero == 'luke') {hero = luke};
	if(hero == 'sidious') {hero = sidious};
	if(hero == 'obi') { hero = obi};

	var villain = $('.defender div').attr('id');
	if(villain == 'maul') {villain = maul};
	if(villain == 'luke') {villain = luke};
	if(villain == 'sidious') {villain = sidious};
	if(villain == 'obi') { villain = obi};
	$('.defender .health').html(villain.health -= hero.attackPower);
	$('.your-char .health').html(hero.health -= villain.counterAttack);
	
	$('.attack-report').html("You attacked " + villain.name + " for " + 
		hero.attackPower + " damage.");
	$('.counter-report').html(villain.name + " attacked you back for " +
		 villain.counterAttack + " damage.");

	hero.attackPower += hero.attackPowerConstant;

	if(hero.health <= 0 || villain.health <= 0) {
		if(hero.health <= 0) {
			$('.result').html("YOU LOSE.");
			$('.btn-attack').remove();
			$('.fight-section').append('<button class="restart btn btn-danger">Restart</button>');
			$('.restart').click(restart);
		} else {
			$('.attack-report').html("You defeated " + villain.name + "!");
			$('.counter-report').html("Please choose your next opponent.");
			$('.defender div').remove();
			$('.enemies').on('click', pickVillain);
			$('.enemies').click(function(){
    			$('.enemies').unbind('click', pickVillain);
    		});
		}
		if($('.enemies div').length == 0) {
			// alert("WINNER!");
			$('.result').html("WINNER!");
			$('.btn-attack').remove();
			$('.fight-section').append('<button class="restart btn btn-danger">Restart</button>');
			$('.restart').click(restart);
		}
	}
}

function restart() {
	location.reload();
}


$(document).ready(function() {

// CLICK ON A CHARACTER TO PLACE IN 'YOUR CHARACTER' ////////////////	
	$('.choose-hero').on('click', pickHero);

	// UNBIND CLICK EVENT  ///////////////////////////////////////
	$('.choose-hero').click(function(){
        $('.choose-hero').unbind('click', pickHero);
     });

// CLICK ON AN ENEMY TO CHOOSE YOUR VILLAIN /////////////////////////
	$('.enemies').on('click', pickVillain);

	// UNBIND CLICK EVENT ///////////////////////////////////////
	$('.enemies').click(function(){
    	$('.enemies').unbind('click', pickVillain);
    });

	$('.btn-attack').click(changeHealth);

});  // end of ready function

