<?php
session_start();
$id=$_SESSION["id"];
$jsonData = $_POST["sendFile"];
$fileName = $_POST["fileName"];//Class

$fileName="data/".$id."_".$fileName."json";//파일path 생성 data/id_Class.json
$fp = fopen($fileName, "w+");

fwrite($fp, $jsonData);
fclose($fp);
?>