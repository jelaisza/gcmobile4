<?php 
	//connection
	header('Access-Control-Allow-Origin: *'); // macontrol kung sno pwede makapagaccess ng data na andto. asterisk, lahat pwede makaaccess
	header('application/json');
	
	$SERVER = "192.168.42.172";
	$USERNAME = "prema";
	$PASSWORD = "";
	$DBASE = "fourkeeps";
	
	//define("SERVER", "localhost"); mas secure
	
    $conn = mysqli_connect($SERVER,$USERNAME,$PASSWORD,$DBASE);

?>