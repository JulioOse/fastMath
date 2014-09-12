$(document).ready(function() {
	/* basic menu controls */
	$('#page2').hide();
	$('#page3').hide();
	function pageCheck(x) {
		switch (x) {
			case 1:
				$('#page2').hide('fast');
				$('#page3').hide('fast');
				$('#page1').show('fast');
				break;
			case 2:
				$('#page1').hide('fast');
				$('#page3').hide('fast');
				$('#page2').show('fast');
				break;
			case 3:
				$('#page2').hide('fast');
				$('#page1').hide('fast');
				$('#page3').show('fast');
				break;
		}
	}
	$('#buttonMulty').click(function() {
		pageCheck(1);
		if(screen.width < 300) {
			$('#rightColumn').css('margin-top', '-500px');
		} else {
			$('#rightColumn').css('margin-top', '-200%');
		}
		
	});
	$('#buttonSquare').click(function() {
		pageCheck(2);
			if(screen.width < 300) {
			$('#rightColumn').css('margin-top', '-700px');;
		} else {
			$('#rightColumn').css('margin-top', '-200%');
		}
	});
	$('#buttonTrick').click(function() {
		pageCheck(3);
			if(screen.width < 300) {
			$('#rightColumn').css('margin-top', '-800px');;
		} else {
			$('#rightColumn').css('margin-top', '-250%');
		}
	});
	/* section for practice divs */
	$('#practice1').click(function() {
		var ranNum = Math.floor((Math.random() * 100) + 100 );
		var ranNumSmall = Math.floor((Math.random() * 8) + 1);
		var answer = ranNum * ranNumSmall;
		$('#practice1').html(ranNum + ' x ' + ranNumSmall + "<div id='result'>" + answer +"<div>");
		$('#result').hide();
		$('#result').fadeIn(30000);
	});
		$('#practice2').click(function() {
		var ranNum2 = Math.floor((Math.random() * 89) + 10 );
		var answer2 = ranNum2 * ranNum2;
		$('#practice2').html(ranNum2 + ' x ' + ranNum2 + "<div id='result2'>" + answer2 +"<div>");
		$('#result2').hide();
		$('#result2').fadeIn(30000);
	});
		$('#practice11').click(function() {
		var ranNum11 = Math.floor((Math.random() * 89) + 10 );
		var answer11 = ranNum11 * 11;
		$('#practice11').html(ranNum11 + ' x ' + '11' + "<div id='result3'>" + answer11 +"<div>");
		$('#result3').hide();
		$('#result3').fadeIn(30000);
	});
		$('#practice5').click(function() {
		var ranNum5 = Math.floor((Math.random() * 3) + 6 );
		var ranNum52 = ranNum5 + '';
		var ranNum53 = ranNum52 + '5';
		var ranNum5Final = Math.floor(ranNum53);
		var answer5 = ranNum5Final * ranNum5Final;
		$('#practice5').html(ranNum5Final + ' x ' + ranNum5Final + "<div id='result5'>" + answer5 +"<div>");
		$('#result5').hide();
		$('#result5').fadeIn(30000);
	});
	
	


	
	
	
	
	
	

})
