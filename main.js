
$(function(){
	$('body').hide().fadeIn(3000);
	
	$("#button").click(function(){
		var day = $("#day").val();
		var hour = $("#hour").val();
		var minute = $("#minute").val();
		var second = $("#second").val();
		
		day = parseInt(day);
		hour = parseInt(hour);
		minute = parseInt(minute);
		second = parseInt(second);
		if (isNaN(day)){day=0;}
		if (isNaN(hour)){hour=0;}
		if (isNaN(minute)){minute=0};
		if (isNaN(second)){second=0};
		
		//console.log(day, hour, minute, second);
		//console.log(day*86400, hour*3600, minute*60, second);
		
		var totalSeconds = (day*86400) + (hour*3600) + (minute*60) + second;
		
		var time = totalSeconds;
		var progWidth = $('#progress').width();
		$('#bar').animate({width:progWidth}, (time * 1000), 'linear', function(){
			$('#bar').delay(1000).animate({width:1});
		});
		if(totalSeconds !== 0) {
			makeTimer("timer",totalSeconds);
		}
		
		
			
		
	});

	

});
