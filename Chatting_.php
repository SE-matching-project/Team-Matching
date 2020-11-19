<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
 

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
  <link  href="ChatCss.css" rel="stylesheet"/>

  <title>Team Matching Project</title>
</head>
<body>
  <!-- 채팅방 목록이 서버에 저장되어야함 -->
  <!-- 반복문으로 채팅방을 만들어야함 -->
  
 
    
        <div class="container">
          <div class="row">
            <div id="chatting_list" class="col-xs-12 col-md-12">
              <table class="bordered" id="chat_table">
                <thead>
                  <tr>
                    <th>채팅방 목록</th>
                  </tr>
                </thead>
                <tbody id="t_body">
               <?php
               
                if(file_exists("./data/chatRoom.json")==1){
                    $infoArray;
                    $pfile2 = fopen("./data/chatRoom.json", "r");
                    while(!feof($pfile2)) {
                        $str = fgets($pfile2);
                        $str1 = json_decode($str, true);
                        echo '<tr><td><a href="./ChatRoom.php" onclick="uploadchat(event)">'.$str1["id"].'</a></td></tr>';
                    }
                    fclose($pfile2);
                    
                }
                
               ?>
                </tbody>
              </table>
            </div>
            <button id="create_chatroom">채팅방 만들기</button>
            <div id="tooltip">
              <p id="score"></p>
              <p id="gender"></p>
              <p id="id"></p>
              <p id="time"></p>
              <table id="timetable"></table>
            </div>
          </div>
        </div>


  
<!-- 채팅방이 하나도 없을때 만드는 채팅방 버튼 -->
  <script src="http://code.jquery.com/jquery-1.10.2.js"></script>
  <script src="https://cdn.pubnub.com/pubnub-3.4.4.js"></script>
  <!-- chatting api -->
  <script src="Chatting.js"></script>
  <!-- <pre id="json_output"></pre> -->
  <script src="http://code.jquery.com/jquery-latest.js"></script>
  <script src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
 
</body>
</html>
