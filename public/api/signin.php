<?php
session_start();
include "../db.php";
include "../creds.php";

$results = array();
$results['success'] = false;
$_SESSION["signin"] = false;
if ($_POST == null) {
    $_POST = json_decode(file_get_contents("php://input"),true);
}
if ( isset($_POST['password']) ) {
    if ($_POST['password'] == $APP_PASSWORD) {
        $results['success'] = true;
        $_SESSION["signin"] = true;
    }
}

header('Content-Type: application/json');
echo json_encode( $results );
?>
