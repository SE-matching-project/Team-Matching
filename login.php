<?php
// Start the session
session_start();

$idVal = test_input($_POST["idValue"]);
$pwVal = test_input($_POST["pwValue"]);

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

login($idVal,$pwVal);

function login($idVal,$pwVal){
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
            if((strcmp($idVal,$infoArray[$row][0]) == 0) && (strcmp($pwVal,$infoArray[$row][1]) == 0)) {
                $exist = true;
                break;
            }
          
        }
    }
    if($exist==true){
        echo "Login";
    }else{
        echo "Fail";
    }

}


?>