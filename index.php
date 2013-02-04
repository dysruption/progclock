<!DOCTYPE html>
<head>
    <link rel="stylesheet" type="text/css" href="style.css">
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:300' rel='stylesheet' type='text/css'>
    <script type="text/javascript" src="http://code.jquery.com/jquery.min.js"></script>
<script type='text/javascript'src='main.js'></script>
	<script type="text/javascript" src="script.js"></script>
<script type='text/javascript'>
//$(function (){

	
//});

</script>

    <title>progclock.</title>
    <h1>just enough time</h1>
</head>
<body>
	
	<hr>
	
	<nav id="input">
	</nav>

	<form id="myform" NAME="myform" METHOD="GET" autocomplete="off">
		<span class="bracket">[</span>
		<input type="text" id="day" placeholder="day"> : <input type="text" id="hour" placeholder="hour"> : <input type="text" id="minute" placeholder="minute"> : <input type="text" id="second" placeholder="second">
		<span class="bracket">]</span>
		<br>
		<input id="button" type="button" name="button" value="Submit">
	</form>

	<div id="timer">00:00:00:00</div>
	<div id="progress">
	  <div id="bar" style="background-color:#999999; width:2; height: 76;">&nbsp;</div>
	</div>
	<br>

	<div id=activity></div>
	<?php
	//	include('phrase.php');
	?>
	

<div id="foot"><a href="http://www.markmossberg.us/">Mark Mossberg</a> &amp; <a href="http://www.jameslarisch.com/">James Larisch</a></div>

</body>
</html>