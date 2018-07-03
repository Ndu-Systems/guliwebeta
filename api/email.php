<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
$data = json_decode(file_get_contents("php://input"));

if (isset($data->email)) {
    
    $email   = $data->email;
    $subject = $data->subject;
	$message = $data->message;
    $from    = "publication@guliwe.net";    
    $to      = $email;
    $message = $message . " <br><br> Regards <br> Guliwe Publications Team.";
    
    
    // Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    
    // More headers
    $headers .= "From:" . $from . "\r\n";
    $headers .= 'Cc: freedom.khanyile@ndu-systems.net' . "\r\n";
    
    mail($to, $subject, $message, $headers);
    echo 1;
}

else {
    
    echo json_encode("oops something went wrong");
}

?>