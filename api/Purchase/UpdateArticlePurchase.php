<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php"; 
$data = json_decode(file_get_contents("php://input"));

if (isset($data->ArticleId) ){  
     $ArticleId  	= $data->ArticleId;	 
     $UserId  		= $data->UserId;	
     $State = $data->State;

 
 // check if user exits
$result = $conn->prepare("SELECT * FROM user_article WHERE ArticleId = ?"); 
$result->execute(array($ArticleId));
if ($result->rowCount() == 1) {

$result = $conn->prepare("
UPDATE user_article
SET State = ?
WHERE UserId = ? AND ArticleId = ?
"); 
if($result->execute(array(
    $State,
    $UserId ,
    $ArticleId   
))){
	 echo json_encode(1);
}else{
	echo json_encode("error while trying to update Article Purchase");
}			
}else{
	
	echo json_encode("Sorry, This Article does not exists");
}        
 
}
 else {

	echo json_encode( "500");
}
?>