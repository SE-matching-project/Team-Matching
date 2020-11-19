<?php
$jsonData = $_POST["jsonData"];
$id_ = test_input($_POST["idValue"]);

if(isset($jsonData)){
    sign($jsonData);
}else if(isset($id_)){
    checkId($id_);
}

function sign($jsonData){
    if(file_exists("./data/member.json")==1){
        $pfile1 = fopen("./data/member.json", "a");
        fwrite($pfile1, "\n");
        fwrite($pfile1, $jsonData);
        fclose($pfile1);
    }else{
        $pfile1 = fopen("./data/member.json", "a+");
        fwrite($pfile1, $jsonData."\n");
        fclose($pfile1);
    }
    
}
function checkId($id_){
    $exist = false;
    if(file_exists("./data/member.json")==1){
        $infoArray;
        $pfile2 = fopen("./data/member.json", "r");
        while(!feof($pfile2)) {
            $str = fgets($pfile2);
            $str1 = json_decode($str, true);
            $infoArray[] = array($str1["id"], $str1["pw"]);
        }
        fclose($pfile2);
        for ($row = 0; $row < count($infoArray); $row++) {
            if($id_ == $infoArray[$row][0]) {
                $exist = true;
                break;
            }
          
        }
    }
    if($exist==true){
        echo "yesId";
    }else{
        echo "noId";
    }
    
}
function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }

?>