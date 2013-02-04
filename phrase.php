<?php
	//ini_set("display_errors", E_ALL);
	//header("Content-Type", "application/json");
	
	$data = $_REQUEST['time'];
	//echo $data;
/* 	print_r($_POST); */
	$db = mysql_connect("localhost", "jameslar", "angerisagifT13!");
	mysql_select_db("jameslar_popcorn", $db);
	$result = mysql_query("SELECT * FROM corn WHERE time = ". $data . " ORDER BY RAND() LIMIT 1;", $db);
	//echo "SELECT * FROM corn WHERE time = ". $data . " ORDER BY RAND() LIMIT 1"; 
	
	$row = mysql_fetch_array($result) or die(mysql_error());
	
	$result = array(
		"item" => $row['phrase'],
	);
	
	echo json_encode($result);
