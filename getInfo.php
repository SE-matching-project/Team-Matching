<?php
$id = $_POST["id"];

$fName = "data/Class/".$id.".json";//class 인지 graduation인지 나눠야함
$fName2="data/Graduation/".$id."json";

if(file_exists($fName)){
    $fp = fopen($fName,'r');
}else if(file_exists($fName2)){
    $fp = fopen($fName2,'r');
}

$txt = fgets($fp);
fclose($fp);
$str = json_decode($txt,true);//저장되어있는 선택한 정보 json을 읽어옴
//{"score":"SE","gender":"woman","id":["13"],"time":["M10","M11"]}
$infoArray[]=$str["score"];//학과
$infoArray[]=$str["gender"];//성별
$infoArray[]=$str["id"];//학번
$infoArray[]=$str["time"];//시간대
echo $infoArray[0]." ".$infoArray[1]." ";

//$t = json_encode($infoArray);
//echo $txt; 
?>