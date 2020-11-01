//========================== Socket-PubNub =============================
var pubnub = PUBNUB.init({      //pubnub(채팅 서버) 생성
    publish_key: 'pub-c-8aef3ab9-d748-4db5-ba35-a1be60ed7370',
    subscribe_key: 'sub-c-f8ceab74-1c32-11eb-a660-060a09f46642',
    ssl: true
  });
  let currentCh = "chat-1"; //채널 default 값
  let channelNumber;
  function setChannel(){
    channelNumber = document.getElementById("inputChannel").value;
    currentCh = "chat-" + channelNumber;    //원하는 채널로 변경
    pubnub.subscribe({
      channel: currentCh,
      message: displayPub
    });
  
    let currentID = document.getElementById("ID").innerHTML;
    $.ajax({            //사용자의 id를 채널.txt에 작성하고 현재인원 return
      url: './currentUSER.php',
      type: 'post',
      async: false,
      data: {
              channel   : currentCh,
              userid : currentID
            },
      success: function(response){
        numberOfPerson = parseInt(response);
        alert("현재 인원 : " + response);
      }
    });
  }
  
//================ 채팅 내용 불러오기 ===================
  function displayPub(message){     //송신받은 메세지를 div로 만들어 append한다
    var html = "<div>"+message.username+": "+message.text+"</div>";
    $("#chatPub").append(html).scrollTop(999999);
  }
  
  function sendPub(){       //메세지를 pubnub서버에 송신한다
    if($("#messagePub").val() == '') return;
    pubnub.publish({
      channel: currentCh,
      message:{
        username: $("#name").val(),
        text: $("#messagePub").val()
      }
    });
    $("#messagePub").val('').focus();
  }
  
  $(document).ready(function(){
    $("#sendPub").click(function(){
      sendPub();
    });
    $("#messagePub").keyup(function(event){
      if(event.keyCode == 13) sendPub();
    });
  });
  
