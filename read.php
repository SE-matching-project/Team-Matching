<?php
$option = test_input($_POST['option']);
$fileName = "";

if($option === "C"){
    $fileName = "./data/Class/ClassID.json";
}
else{
    $fileName = "./data/Graduation/GraduID.json";
}

$file = array();

if(file_exists($fileName)){
    $classID = file($fileName);
    $arry = array(); // class id가 저장되는 곳
    for($i=0; $i<count($classID); $i++){
        $classID[$i] = test_input($classID[$i]);
        $tmp = getDetail($classID[$i], $option);
        array_push($arry, $tmp);
    }
    array_push($file, $arry);
}
else{
    $arry = array();
    array_push($file, $arry);
}

$output = json_encode($file);
echo $output;



function getDetail($id, $opt){
    if($opt === "C"){
        $fName = "data/Class/".$id.".json";//class
    }
    else {
        $fName = "data/Graduation/".$id.".json";//graduation
    }
    
    if(file_exists($fName)){
        $fp = fopen($fName,'r');
        $txt = "";
        $txt = test_input(fgets($fp));
        fclose($fp);
    }
    
    return $txt;
}


function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

?>