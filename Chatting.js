function add(event){
  var id_ = event.target.innerText;//방이름 
  $.post("getInfo.php",
  {
    id : id_
  },
  function(data, status){
    var option=data.split(" ");
    if(option[0]=="SE"){//사용자가 그방에 대한 선택한 정보를 보기 쉽게 나타내기 위한 if문들
      event.target.title="소프트 웨어 공학";
    }
    //event.target.title=data;
  });
  
}
$("#create_chatroom").click(function(){//채팅방 만들기 버튼 클릭하면 채팅방 만드는 함수 실행
  createChatRoom();
});

let ID;//로그인한 아이디를 받을 변수

$.ajax({
  url:'Chatting.php',
 
  success: function(id){
    ID=id;//로그인한 아이디를 변수ID로 받는다.
    alert("id");
  }
});


function createChatRoom(){
  var td_arr=document.getElementsByTagName("td");
  for(let i=0; i<td_arr.length;i++){//채팅방 만들때 같은 사람이 여러개 방을 만들 수 없도록 같은 id이름인 채팅방은 못만든다.
    if(td_arr[i].innerHTML==ID){//같은거 발견하면
      return;//만들지 마라
    }
  }
  var h= document.getElementById("chat_table");
  var tr=document.createElement("tr");
  var td=document.createElement("td");
  td.innerHTML=ID;
  var a= document.createElement("a");
  a.href="./ChatRoom.php";
  a.addEventListener("mouseover",function(e){
    add(e);//선택한 정보 마우스 갔다되면 보이도록 함
  });
  a.addEventListener("click",function(e){
    uploadchat(e);//채팅방 입장 했을때 입장한 방이름 나타냄
  });
  a.appendChild(td);
  tr.appendChild(a);
  h.appendChild(tr);//테이블에 추가 

}

function uploadchat(event) {//입장한 방이름(생성한 사람의 id)을 getChatRoom.php로 전달하는 함수
  var id_ = event.target.innerText;
  $.post("getChatRoom.php",
  {
    chatId : id_
  });
  
}