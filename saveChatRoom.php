<?php
$jsdata = $_POST["jsonData"];

$pfile1 = fopen("./data/".$_POST['class']."/chatRoom.json", "a+");
fwrite($pfile1, $jsdata);
fwrite($pfile1,"\n");
fclose($pfile1);

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>