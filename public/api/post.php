<?php
session_start();
include "../db.php";
$results = array();
if ($_POST == null) {
    $_POST = json_decode(file_get_contents("php://input"),true);
}
if ($_SESSION["signin"] == true) {
    if (isset($_POST['title']) && isset($_POST['author'])) {
        $stmt = $db->prepare("
            INSERT INTO books (title, author) VALUES (:title, :author)");
        $stmt->execute(array(
            "title"=>$_POST['title'],
            "author"=>$_POST['author']
        ));
        $bookID = $db->lastInsertId();
        $results['success'] = true;
        $results['bookID'] = $bookID;
    } else {
        $results['success'] = false;
        $results['error'] = "Missing book info";
    }
    
} 
header('Content-Type: application/json');
echo json_encode( $results );
?>
