<?php
$className = test_input($_POST['className']);
$fileName = "./chatRooms.json";

$file = array();

if(file_exists($fileName)){
  $jsonfile = @file($fileName);
  $arry = array();

  for($i=0; $i<count($jsonfile); $i++){
    $jsonfile[$i] = test_input($jsonfile[$i]);
    array_push($arry, $jsonfile[$i]);
  }
  array_push($file, $arry);
}
else{
  $arry = array();
  array_push($file, $arry);
}

$output = json_encode($file);
echo $output;


function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

?>
