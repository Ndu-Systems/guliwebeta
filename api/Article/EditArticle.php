<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php"; 
$data = json_decode(file_get_contents("php://input"));

if (isset($data->Price) ){  
 	$ISSN  				= $data->issn;
	$Price              = $data->Price;
	$Title              = $data->Title;
	$Status             = $data->Status;
	$ImageUrl           = $data->ImageUrl;
	$Abstract           = $data->abstract;
    $FileUrl            = $data->FileUrl;
    $ArticleId          = $data->ArticleId;
 
 // check if user exits
$result = $conn->prepare("SELECT * FROM article WHERE ISSN = ?"); 
$result->execute(array($ISSN));
if ($result->rowCount() == 1) {

$result = $conn->prepare("UPDATE article SET  
ISSN=?,
Price=?,
Title=?,
ImageUrl=?,
Abstract=?,
FileUrl=?,
Status=? 
WHERE ArticleId = ?
"); 
if($result->execute(array(
$ISSN        ,
$Price       ,
$Title       ,
$ImageUrl    ,
$Abstract    ,
$FileUrl ,
$Status,
$ArticleId    
))){
	 echo json_encode("1");
}else{
	echo json_encode("error while trying to edit Article");
}		
}else{
	
	echo json_encode("Sorry, This Article does not exists");
}        
 
}
 else {

	echo json_encode( "500");
}
?>