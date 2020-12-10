<?php
session_start();
?>
<html>
  <!-- 채팅방을 나타내는 페이지 -->
    <head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="ChatRoom.css" >
    </head>
    <body>
        <div id=chatting>
<?php

if(isset($_SESSION["Chat"])){//채팅방이름이 있을때 나타내줌
    echo '<p id="inputChannel">'.$_SESSION["Chat"].'</p>';//$_SESSION["Chat"]
}else{
    echo "session fail";
}
//echo '<p  id="inputChannel">'.$_SESSION["Chat"].$_SESSION["id"].'</p>';

?>
            
            <div id="chatPub" style="overflow: auto;"></div>
            <!-- 전송한 메시지가 나타나는 부분 -->
            
            <div class="container">
	<div class="container__item">
		<div id="send_area">
            <input type="text"id="message" class="form__field" placeholder="Typing Your Message" />
			<input type="submit" id="send"class="btn btn--primary btn--inside uppercase" value="send">
        </div>
			
		
	</div>
	
</div>
        </div>

      
        <script src="http://code.jquery.com/jquery-1.10.2.js"></script>
        <script src="https://cdn.pubnub.com/pubnub-3.4.4.js"></script>
        <script src="ChattingRoom.js"></script>
    </body>
</html>