function add(event){
  var id_ = event.target.innerText;//방이름 
  $.post("getInfo.php",
  {
    id : id_
  },
  function(data, status){
    var option=data.split(" ");
    p_arr=document.getElementsByTagName("p");
    if(option[0]=="SE"){//사용자가 그방에 대한 선택한 정보를 보기 쉽게 나타내기 위한 if문들
      event.target.title="소프트 웨어 공학";
      p_arr[0].innerHTML="소프트 웨어 공학";
    }

    var text="";
    id_arr=option[2].split("|");
    id_arr=id_arr.sort();
    for(let id of id_arr){
      if(id!=""){
        text+=id+"학번 ";
      }
    }
    p_arr[2].innerHTML=text;

    //추가적인 if문 필요
    //event.target.title=data;
  });
  
}
function createTable(arr){
  var firstRow="<tr>";
  firstRow+="<td></td>";
  firstRow+="<th>월</th>";
  firstRow+="<th>화</th>";
  firstRow+="<th>수</th>";
  firstRow+="<th>목</th>";
  firstRow+= "<th>금</th>";
  firstRow+="<th>토</th>";
  firstRow+="<th>일</th>"+"</tr>";

  var table=document.createElement("table");
  table.appendChild(firstRow);
  
  var tr=document.createElement("tr");
  var th=document.createElement("th");
  var td=document.createElement("td");

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
  var td_arr=document.getElementsByTagName("a");
  for(let i=0; i<td_arr.length;i++){//채팅방 만들때 같은 사람이 여러개 방을 만들 수 없도록 같은 id이름인 채팅방은 못만든다.
    if(td_arr[i].innerHTML==ID){//같은거 발견하면
      return;//만들지 마라
    }
  }
  var h= document.getElementById("chat_table");
  var tbody=document.getElementById("t_body");
  var tr=document.createElement("tr");
  var td=document.createElement("td");
  //td.innerHTML=ID;
  var a= document.createElement("a");
  a.href="./ChatRoom.php";
  a.addEventListener("mouseover",function(e){
    add(e);//선택한 정보 마우스 갔다되면 보이도록 함
  });
  a.addEventListener("click",function(e){
    uploadchat(e);//채팅방 입장 했을때 입장한 방이름 나타냄
  });
  a.innerHTML=ID;
  td.appendChild(a);
  tr.appendChild(td);
  tbody.appendChild(tr);
  h.appendChild(tbody);//테이블에 추가 

}

function uploadchat(event) {//입장한 방이름(생성한 사람의 id)을 getChatRoom.php로 전달하는 함수
  var id_ = event.target.innerText;
  $.post("getChatRoom.php",
  {
    chatId : id_
  });
  
}
//추가 구현 해야할 것
//매칭알고리즘으로 정렬된 채팅방목록들을 화면에 표시할 함수()
//매칭을 위한 php 구현 필요