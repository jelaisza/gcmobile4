<?php 
// Including database connections
require_once 'connect.php';
// Fetching the updated data & storin in new variables
$data = json_decode(file_get_contents("php://input")); 
// Escaping special characters from updated data
$id = mysqli_real_escape_string($conn, $data->id);
$uname = mysqli_real_escape_string($conn, $data->uname);
$contact = mysqli_real_escape_string($conn, $data->contact);
$address = mysqli_real_escape_string($conn, $data->address);
// mysqli query to insert the updated data
$query = "UPDATE accounts SET username='$uname',address='$address',contact='$contact' WHERE id= '$id'";
mysqli_query($conn, $query);
echo true;
?>