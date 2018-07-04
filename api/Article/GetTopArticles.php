<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
require "../Models/Article.php";
$data = json_decode(file_get_contents("php://input"));

$rows = array(); 
 $result = $conn->prepare("SELECT * FROM article ORDER BY Downloads Desc LIMIT 3"); 
$result->execute(); 
$rows  = $result->fetchAll(PDO::FETCH_ASSOC);
echo $json = json_encode($rows);
?>
