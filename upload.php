<?php
session_start();
$id=$_SESSION["id"];//로그인 한 id
$jsonData = $_POST["sendFile"];//선택한 정보 json
$fileName = $_POST["fileName"];//Graduation

$f_Name = "data/Class/GraduationID.json";//id만 따로 저장해두는 file
$fp = fopen($f_Name,"a+");
fwrite($fp,$id."\n");
fclose($fp);

$fileName="data/Graduation/".$id.".json";
$fp = fopen($fileName, "w+");

fwrite($fp, $jsonData);
fclose($fp);

?>
