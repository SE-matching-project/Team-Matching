<?php
$jsonData = $_POST["sendFile"];
$fileName = $_POST["fileName"];

$fp = fopen($fileName, "w+");
fwrite($fp, $jsonData);
fclose($fp);
?>