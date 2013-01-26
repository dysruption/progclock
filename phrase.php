
<?php
	$db = mysql_connect("localhost", "jameslar", "mylifeforaiuR14!");
	mysql_select_db("popcorn", $db);
	$time = 30;
	$result = mysql_query("SELECT * FROM corn WHERE time = ". $time ." ORDER BY RAND() LIMIT 1;", $db);
	
	while($row = mysql_fetch_array($result) or die(mysql_error())){
		echo $row['phrase'];
	};
?>
