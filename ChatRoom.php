<?php
session_start();
?>
<html>
  <!-- 채팅방을 나타내는 페이지 -->
    <head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
    </head>
    <body>
        <div id=chatting>
<?php

if(isset($_SESSION["Chat"])){//채팅방이름이 있을때 나타내줌
    echo '<p id="inputChannel">'.$_SESSION["Chat"].'</p>';//$_SESSION["Chat"]
}
//echo '<p  id="inputChannel">'.$_SESSION["Chat"].$_SESSION["id"].'</p>';

?>
            
            <div id="chatPub" style="overflow: auto;"></div>
            <!-- 전송한 메시지가 나타나는 부분 -->
            <input type="text" id="message">
            <!-- 보낼 메세지 입력창 -->
            <input type="submit" id="send" value="send">
            <!-- send 버튼 -->
        </div>

      
        <script src="http://code.jquery.com/jquery-1.10.2.js"></script>
        <script src="https://cdn.pubnub.com/pubnub-3.4.4.js"></script>
        <script src="ChattingRoom.js"></script>
    </body>
</html>