<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
$data = json_decode(file_get_contents("php://input"));

  // $Email= $data->Email; 
  // $Password = $data->Password;
  $Email = $_GET['Email'];
  $Password= $_GET['Password'];
  $rows = array();

  $result = $conn->prepare("SELECT * FROM users WHERE Email = ?");
  $result->execute(array($Email));
  $user = $result->fetch(PDO::FETCH_ASSOC);

  if($user)
  {
      if(password_verify($Password, $user['Password']))
      {
        $rows['data'][] = $user;
        echo json_encode($rows);
      }
      else{
        echo ("0");
      }      
  }
  else
  {
	  echo json_encode("Invalid Email Address");
  }

?>