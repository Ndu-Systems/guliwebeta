<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php"; 
$data = json_decode(file_get_contents("php://input"));

if (isset($data->ArticleId) ){  
     $ArticleId  	= $data->ArticleId;	 
     $UserId  		= $data->UserId;	

 
 // check if user exits
$result = $conn->prepare("SELECT * FROM article WHERE ArticleId = ?"); 
$result->execute(array($ArticleId));

if ($result->rowCount() == 1) {

	$check = $conn->prepare("SELECT * FROM user_article WHERE ArticleId = ? AND UserId = ?"); 
	$check->execute(array($ArticleId,$UserId));

	if ($check->rowCount() == 0) 
	{
			$result = $conn->prepare("INSERT INTO `user_article`(`UserId`, `ArticleId`) VALUES (?,?)"); 
			if($result->execute(array($ArticleId,$UserId)))
			{
				echo json_encode("1");
			}else
			{
				echo json_encode("error while trying to update Article Purchase");
			}
	}
	else{
		
		echo json_encode("Article Already Purchased Please Contact Publisher");
	}			
}else{	
	echo json_encode("Sorry, This Article does not exists");
}        
 
}
 else {

	echo json_encode( "500");
}
?>