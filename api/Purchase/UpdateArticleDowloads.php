<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php"; 
$data = json_decode(file_get_contents("php://input"));

if (isset($data->ArticleId) ){  
 	$ArticleId  		= $data->ArticleId;	 
 
 // check if user exits
$result = $conn->prepare("SELECT * FROM article WHERE ArticleId = ?"); 
$result->execute(array($ArticleId));
if ($result->rowCount() == 1) {

$result = $conn->prepare("
    UPDATE article
    SET 	Downloads =	Downloads + 1
    WHERE ArticleId = ?
    "); 
if($result->execute(array(
$ArticleId    
))){
	 echo json_encode(1);
}else{
	echo json_encode("error while trying to update Article downloads");
}			
}else{
	
	echo json_encode("Sorry, This Article aready exists");
}
 
 
 
        
 
}
 else {

	echo json_encode( "500");
}
?>