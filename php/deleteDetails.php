
<?php 

include('connect.php');

if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }

    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers:{$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

        exit(0);
    }



$data = json_decode(file_get_contents("php://input")); 
$id = mysqli_real_escape_string($conn, $data->del_id);
$photo = mysqli_real_escape_string($conn, $data->photo_);
$title = mysqli_real_escape_string($conn, $data->title_);
$datee = mysqli_real_escape_string($conn, $data->datee_);
$desc = mysqli_real_escape_string($conn, $data->desc_);
$acc = mysqli_real_escape_string($conn, $data->acc_);

$query1 = "DELETE FROM form WHERE day_id=$id";
mysqli_query($conn, $query1);


mysqli_query($conn,"INSERT INTO archives(photo,title,date,description,accountOf) VALUES ('$photo','$title','$datee','$desc','$acc')");



echo true;
?>