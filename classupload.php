<?php
session_start();
$id=$_SESSION["id"];//로그인 한 id
$jsonData = $_POST["sendFile"];//선택한 정보 json
$fileName = $_POST["fileName"];//Class

$f_Name = "data/Class/ClassID.json";//id만 따로 저장해두는 file
$fp = fopen($f_Name,"a+");
fwrite($fp,$id."\n");
fclose($fp);

$fileName="data/Class/".$id."json";//파일path 생성 data/id_Class.json
$fp = fopen($fileName, "w+");

fwrite($fp, $jsonData);//선택한 정보를 저장함
fclose($fp);
?>