
//========================== Socket-PubNub =============================
var pubnub = PUBNUB.init({      //pubnub(채팅 서버) 생성
    publish_key: 'pub-c-8aef3ab9-d748-4db5-ba35-a1be60ed7370',
    subscribe_key: 'sub-c-f8ceab74-1c32-11eb-a660-060a09f46642',
    ssl: true
  });
  let currentCh = "chat-1"; //채널 default 값
  let channelNumber;//방이름 으로 채널을 구분함
  let ID;//접속한 사용자의 id
  $(document).ready(function(){
    setChannel();
  });
 
  function setChannel(){
    channelNumber = document.getElementById("inputChannel").innerHTML;
    currentCh = "chat-" + channelNumber;    //원하는 채널로 변경
    pubnub.subscribe({
      channel: currentCh,
      message: displayPub
    });    
    $.ajax({
      url:'Chatting.php',
      type:'post',
      
      success: function(id){
        ID=id;
      }
    });
  }
  
//================ 채팅 내용 불러오기 ===================
  function displayPub(message){     //송신받은 메세지를 div로 만들어 append한다
    var html = "<div>"+message.username+": "+message.text+"</div>";
    $("#chatPub").append(html).scrollTop(999999);
  }
  
  function sendPub(){       //메세지를 pubnub서버에 송신한다
    if($("#message").val() == '') return;
    pubnub.publish({
      channel: currentCh,
      message:{
        username: ID,
        text: $("#message").val()
      }
    });
    $("#message").val('').focus();
  }
  
  $(document).ready(function(){
    setChannel();
    $("#send").click(function(){
      sendPub();
    });
    $("#message").keyup(function(event){
      if(event.keyCode == 13) sendPub();
    });
  });
  
