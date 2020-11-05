<?php
$jsonData = $_POST["sendFile"];
$fileName = $_POST["fileName"];
if(file_exists ( $fileName )){
    $fp = fopen($fileName, "a");
}else{
    $fp = fopen($fileName, "w");
}

fwrite($fp, $jsonData);
fclose($fp);
?>