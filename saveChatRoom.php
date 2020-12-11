<?php
$jsdata = $_POST["jsonData"];
$ClassOrGrad=$_POST['class'];
if($ClassOrGrad==="class"){
$pfile1 = fopen("./data/Class"."/chatRoom.json", "a+");
}else if($ClassOrGrad==="grad"){
$pfile1 = fopen("./data/Graduation"."/chatRoom.json", "a+");
}

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