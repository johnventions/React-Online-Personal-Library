<?php
include "../db.php";
$results = array();

$stmt = $db->prepare('
    SELECT * FROM books');
$stmt->execute(array());

$row_count = $stmt->rowCount();
$results['count'] = $row_count;
$results['success'] = false;

if ($row_count > 0) {
    $results['success'] = true;
    $results['books'] = array();
    while($book = $stmt->fetch(PDO::FETCH_ASSOC)) {
        array_push($results['books'], $book);
    }
}

header('Content-Type: application/json');
echo json_encode( $results );
?>
