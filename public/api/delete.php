<?php
session_start();
include "../db.php";
$results = array();
if ($_POST == null) {
    $_POST = json_decode(file_get_contents("php://input"),true);
}
if ($_SESSION["signin"] == true) {
    if ( isset($_POST['_id']) ) {
        $stmt = $db->prepare("
            DELETE FROM books WHERE _id = :id");
        $stmt->execute(array(
            "id"=>$_POST['_id'],
        ));
        $results['success'] = true;
    } else {
        $results['success'] = false;
        $results['error'] = "Missing book id";
    }
}

header('Content-Type: application/json');
echo json_encode( $results );
?>
