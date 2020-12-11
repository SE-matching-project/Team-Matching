<?php
session_start();
$id=$_SESSION["id"];//로그인 한 id
$jsonData = $_POST["sendFile"];//선택한 정보 json
$fileName = $_POST["fileName"];//Class

$id=test_input($id);
$f_Name = "data/Class/chatRoom.json";//id만 따로 저장해두는 file
$f_id = fopen($f_Name,"r");
//$f_w=fopen($f_Name,"a+");

$stored_id=file_get_contents($f_Name);
$arr=explode("\n",$stored_id);
$check=false;
print_r($arr);

for($i=0;$i<sizeof($arr)-1;$i++){
        
    if($id==$arr[$i]){
        $check=true;    //있다.
        break;
    }
}

//if($check==false){
//    fwrite($f_w,$id."\n");
//}



$fileName="data/Class/".$id.".json";//파일path 생성 data/id_Class.json
$fp = fopen($fileName, "w+");
fwrite($fp, $jsonData."\n");//선택한 정보를 저장함
fclose($fp);
//fclose($f_w);
fclose($f_id);

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }