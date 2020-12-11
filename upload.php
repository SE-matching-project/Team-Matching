<?php
session_start();
$id=$_SESSION["id"];//로그인 한 id
$jsonData = $_POST["sendFile"];//선택한 정보 json
$fileName = $_POST["fileName"];//Graduation

$f_Name = "data/Graduation/chatRoom.json";//id만 따로 저장해두는 file


$f_w=fopen($f_Name,"a+");

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

    if($check==false){
        fwrite($f_w,$id."\n");
    }





$fileName="data/Graduation/".$id.".json";
$fp = fopen($fileName, "w+");

fwrite($fp, $jsonData."\n");
fclose($fp);
fclose($f_id);

?>
