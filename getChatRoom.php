<?php
session_start();
$chatid = $_POST["chatId"];//전달받은 방이름을 변수에 저장

$_SESSION["Chat"]=$chatid;//세션에 저장해서 다른 페이지에서도 볼수 있게 함 

?>