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
	$PublisherID        = $data->PublisherID;
	$ImageUrl           = $data->ImageUrl;
	$Abstract           = $data->Abstract;
	$FileUrl            = $data->FileUrl;
 
 // check if user exits
$result = $conn->prepare("SELECT * FROM article WHERE ISSN = ?"); 
$result->execute(array($ISSN));
if ($result->rowCount() ==0) {

$result = $conn->prepare("INSERT INTO article(PlublishDate,ISSN, Price, Title, PublisherID, ImageUrl, Abstract, FileUrl)
                VALUES (now(),?,?,?,?,?,?,?)"); 
if($result->execute(array(
$ISSN        ,
$Price       ,
$Title       ,
$PublisherID ,
$ImageUrl    ,
$Abstract    ,
$FileUrl     
))){
	 echo 1;
}else{
	echo "error while trying to add Article";
}		

	
}else{
	
	echo "Sorry, This Article aready exists";
}
 
 
 
        
 
}
 else {

	echo json_encode( "500");
}
?>