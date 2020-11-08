<?php
session_start();
$id=$_SESSION["id"];
$jsonData = $_POST["sendFile"];
$fileName = $_POST["fileName"];

$fileName="data/".$id."_".$fileName.".json";
$fp = fopen($fileName, "w+");

fwrite($fp, $jsonData);
fclose($fp);
?>
