var Timer;
var totalTime;


function makeTimer(TimerID, time){

	Timer = document.getElementById(TimerID);
	totalTime = time;
	//alert(totalTime);

	Update();

	window.setTimeout("Tick()", 1000);

}

function Tick(){

	if (totalTime == 0){
		// alert("Time's up yo.")
		$('#timer').html("<iframe width=\"560\" height=\"315\" src=\"http://www.youtube.com/embed/SIaFtAKnqBU?autoplay=1#t=3s\" frameborder=\"0\" allowfullscreen></iframe>").delay(5000).fadeOut().queue(function(n) {
		        $(this).html("00:00:00:00");
		        n();
		    }).fadeIn();
		return;
	}


	totalTime -= 1;
	Update();
	window.setTimeout("Tick()", 1000);
}

function Update(){

	var seconds = totalTime;
	//console.log(seconds/86400);
	var days = Math.floor(seconds / 86400);
	seconds -= (86400 * days);

	var hours = Math.floor(seconds / 3600);

	seconds -= (3600 * hours);

	var minutes = Math.floor(seconds / 60);
	seconds -= (60 * minutes);
	//console.log(days, hours, minutes);
/* 	 console.log(seconds); */
	

	// var timeStr = ((days > 0) ? days + " days: ") + hours + ":" + minutes + ":" + seconds;

		var timeStr = leadingZero(days) + ":" + leadingZero(hours) + ":" + leadingZero(minutes) + ":" + leadingZero(seconds);

	

	function leadingZero(num){
		if (num < 10){
			print = "0" + num;
			return print;
		}else{
			return num;
		}
	}
	// var timeStr = days + ":" + hours + ":" + minutes + ":" + seconds;
	$('#timer').html(timeStr);
	//$.getJSON('phrase.php', time, function(data) { debuggging
	//alert(totalTime);
	$.post('phrase.php?time='+totalTime, {"time" : totalTime}, function(data) {
			console.log("before", data);
			data = JSON.parse(data);
/* 			console.log(data); */
            //alert('hi'); //uncomment this for debug
            //alert (data.item1+" "+data.item2+" "+data.item3); //further debug
            if(data.item !== null){
            	$('#activity').hide().html(totalTime + " seconds? that's just enough time to: <br> <b>" + data.item + "</b>").fadeIn();
            }
        });
	
	// Timer.innerHTML = seconds;
}

// makeTimer("timer", 86405);