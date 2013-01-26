
$(function(){

	var time = 60;
	var progWidth = $('#progress').width() - 20;
	$('#bar').animate({width:progWidth}, (time * 1000), 'linear', function(){
			$('#bar').animate({opacity:0.1});
	});


});