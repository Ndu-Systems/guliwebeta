<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
require "../Models/Article.php";

// $data = json_decode(file_get_contents("php://input"));

$id = $_GET['id'];
$rows = array(); 
 
$result = $conn->prepare("SELECT * FROM article WHERE ArticleId = ?"); 
 
$result->execute(array($id));

if ($result->rowCount() > 0) {

while($row=$result->fetch(PDO::FETCH_OBJ)) {
    $data = new Article();
	$data->ArticleId = $row->ArticleId;
    $data->ISSN = $row->ISSN;
    $data->Price = $row->Price;
    $data->Title = $row->Title;
    $data->PublisherID = $row->PublisherID;
    $data->PlublishDate = $row->PlublishDate;
    $data->Abstract = $row->Abstract;
    $data->FileUrl = $row->FileUrl;
	$data->Status = $row->Status;
	$data->ImageUrl = $row->ImageUrl;
	$rows['Articles'][] = $data;
	}
}
echo json_encode($rows);

?>

 