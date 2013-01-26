<?php
	
	header("Content-Type", "application/json");
	
	$data = $_POST['time'];
/* 	print_r($_POST); */
	$db = mysql_connect("localhost", "jameslar", "mylifeforaiuR14!");
	mysql_select_db("popcorn", $db);
	$result = mysql_query("SELECT * FROM corn WHERE time = ". $data ." ORDER BY RAND() LIMIT 1;", $db);
	
	$row = mysql_fetch_array($result);
	
	$result = array(
		"item" => $row['phrase'],
	);
	
	echo json_encode($result);

