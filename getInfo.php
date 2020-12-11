<?php
$id = $_POST["id"];
$CG = $_POST["cG"];

$fName = "data/Class/" . $id . ".json"; //class 인지 graduation인지 나눠야함
$fName2 = "data/Graduation/" . $id . ".json";

if ($CG==="class") {
    $fp = fopen($fName, 'r');

    $txt = fgets($fp);
    fclose($fp);
    $str = json_decode($txt, true); //저장되어있는 선택한 정보 json을 읽어옴
    //{"score":"SE","gender":"woman","id":["13"],"time":["M10","M11"]}
    $infoArray[] = $str["score"]; //학과
    $infoArray[] = $str["gender"]; //성별
    $infoArray[] = $str["id"]; //학번
    $infoArray[] = $str["time"]; //시간대

    $result = "";
    $result .= $infoArray[0] . " " . $infoArray[1] . " ";
    for ($i = 0; $i < count($infoArray[2]); $i++) {
        $result .= $infoArray[2][$i] . "|";
    }
    $result .= " ";
    for ($u = 0; $u < count($infoArray[3]); $u++) {
        $result .= $infoArray[3][$u] . "?";
    }
    echo $result;
    
} else if ($CG==="grad") {
    $fp = fopen($fName2, 'r');
    $txt = fgets($fp);
    fclose($fp);
    $str = json_decode($txt, true); //저장되어있는 선택한 정보 json을 읽어옴
    //{"interest":"Embedded","gender":"woman","id":["16","17","18"],"time":["T10","TH10","W12","F12"]}
    $infoArray[] = $str["interest"]; //학과
    $infoArray[] = $str["gender"]; //성별
    $infoArray[] = $str["id"]; //학번
    $infoArray[] = $str["time"]; //시간대
    echo $infoArray[0] . " " . $infoArray[1] . " ";
    for ($i = 0; $i < count($infoArray[2]); $i++) {
        echo $infoArray[2][$i] . "|";
    }
    echo " ";
    for ($u = 0; $u < count($infoArray[3]); $u++) {
        echo $infoArray[3][$u] . "?";
    }
}
