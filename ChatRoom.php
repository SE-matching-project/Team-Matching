<?php
session_start();
?>
<html>
    <head></head>
    <body>
        <div id=chatting>
<?php

if(isset($_SESSION["Chat"])){//채팅방이름이 있을때 나타내줌
    echo '<p id="inputChannel">'.$_SESSION["Chat"].'</p>';//$_SESSION["Chat"]
}
//echo '<p  id="inputChannel">'.$_SESSION["Chat"].$_SESSION["id"].'</p>';

?>
            
            <div id="chatPub" style="overflow: auto;"></div>
            <input type="text" id="message">

            <input type="submit" id="send" value="send">
        </div>

      
        <script src="http://code.jquery.com/jquery-1.10.2.js"></script>
        <script src="https://cdn.pubnub.com/pubnub-3.4.4.js"></script>
        <script src="ChattingRoom.js"></script>
    </body>
</html>