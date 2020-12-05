<?php
// Start the session
session_start();

if(isset($_POST["idValue"])){
    $idVal = test_input($_POST["idValue"]);
}

if(isset($_POST["pwValue"])){
    $pwVal = test_input($_POST["pwValue"]);
}

if(isset($_POST["logout"])){
    $pwVal = $_POST["logout"];
    logout();
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

if(isset($_POST["idValue"])){
    login($idVal,$pwVal);
}


function logout(){
    session_destroy();
}

function login($idVal,$pwVal){
    //session_start();
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
                $_SESSION["id"] = $idVal;
                break;
            }
          
        }
    }
    if($exist==true){
        echo $_SESSION['id'];
    }else{
        echo "Fail";
    }

}


?>