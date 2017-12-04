<?php
// Including database connections
require_once 'connect.php';
if (isset ($_GET["ID"])){
	$query = "SELECT * FROM tbl_announcement where a_id = ". $_GET["ID"];
}

else {
$query = "SELECT * from tbl_announcement";

}


// mysqli query to fetch all data from database

$result = mysqli_query($con, $query);
$arr = array();
if(mysqli_num_rows($result) != 0) {
	while($row = mysqli_fetch_assoc($result)) {
			$arr[] = $row;
	}
}
// Return json array containing data from the database
echo $json_info = json_encode($arr);
?>
