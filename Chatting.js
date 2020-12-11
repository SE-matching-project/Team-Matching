function add(event) {
  var id_ = event.target.innerText;//방이름 
  var classOrGrad = document.getElementById("classOrGrad").innerText;

  $.post("getInfo.php",
    {
      id: id_,
      cG: classOrGrad,
    },
    function (data, status) {
      console.log(data);
      var option = data.split(" ");
      p_arr = document.getElementsByTagName("p");

      switch (option[0]) {//사용자가 그방에 대한 선택한 정보를 보기 쉽게 나타내기 위한 if문들
        case "SE":
          p_arr[1].innerHTML = "소프트 웨어 공학";
          break;
        case "CN":
          p_arr[1].innerHTML = "컴퓨터네트워크";
          break;
        case "GS":
          p_arr[1].innerHTML = "공개소프트웨어실습";
          break;

        case "GZ":
          p_arr[1].innerHTML = "객체지향설계";
          break;

        case "App":
          p_arr[1].innerHTML = "어플리케이션";
          break;

        case "Embedded":
          p_arr[1].innerHTML = "임베디드";
          break;
        case "IoT":
          p_arr[1].innerHTML = "사물인터넷";
          break;
        case "Web":
          p_arr[1].innerHTML="웹";
          break;
        case "Network":
          p_arr[1].innerHTML="네트워크";
          break;
        case "Security":
          p_arr[1].innerHTML="보안";
          break;
        case "AI":
          p_arr[1].innerHTML="인공지능";
          break;
        case "Machine":
          p_arr[1].innerHTML="기계학습";
          break;
        case "ComputerV":
          p_arr[1].innerHTML="컴퓨터비젼";
          break;
        case "iOS":
          p_arr[1].innerHTML="iOS";
          break;
      }
      switch (option[1]) {
        case "man":
          p_arr[2].innerHTML = "남자";
          break;
        case "woman":
          p_arr[2].innerHTML = "여자";
          break;
        case "mid":
          p_arr[2].innerHTML = "상관없음";
          break;
      }

      var text = "";
      var id_arr;
      id_arr = option[2].split("|");
      id_arr = id_arr.sort();
      for (let id of id_arr) {
        if (id != "") {
          text += id + "학번 ";
        }
      }
      p_arr[2].innerHTML = text;

      var time_arr;
      time_arr = option[3].split("?");
      time_arr.pop();//마지막 공백 뺌
      p_arr[3].innerHTML = time_arr;//잘받아 오는 지 테스트
      createTable(time_arr);//table만들어냄

    });
    document.getElementById("tooltip").style.display="block";

}

function createTable(arr) {
  $("#timetable").empty();
  var weekday = ["M", "T", "W", "TH", "F", "S", "Sun"];
  var table = $("#timetable");//document.createElement("table");

  var r = document.createElement("tr");
  var d = document.createElement("td");

  r.appendChild(d);
  var day = ["월", "화", "수", "목", "금", "토", "일"];
  for (let i = 0; i < 7; i++) {
    var h = document.createElement("th");
    h.classList.add("Day");
    h.innerText = day[i];
    r.appendChild(h);
  }//첫번째 row


  table.append(r);
  for (let row = 0; row < 14; row++) {
    var tr = document.createElement("tr");
    var th = document.createElement("th");
    th.innerHTML = 9 + row;//시간
    tr.appendChild(th);
    for (let col = 0; col < 7; col++) {
      var td = document.createElement("td");
      td.id = weekday[col] + "" + (row + 9);
      tr.appendChild(td);
    }
    table.append(tr);
  }

  for (let i = 0; i < arr.length; i++) {
    var checktd = document.getElementById(arr[i]);
    checktd.style.backgroundColor = "#808cbc";
  }
}

function close_(){
  document.getElementById("tooltip").style.display="none";
}

$("#create_chatroom").click(function () {//채팅방 만들기 버튼 클릭하면 채팅방 만드는 함수 실행
  createChatRoom();
});

let ID;//로그인한 아이디를 받을 변수

$.ajax({
  url: 'Chatting.php',

  success: function (id) {
    ID = id;//로그인한 아이디를 변수ID로 받는다.
    //alert("id");
  }
});


function createChatRoom() {
  var classOrGrad = document.getElementById("classOrGrad").innerText;

  var td_arr = document.getElementsByTagName("a");
  for (let i = 0; i < td_arr.length; i++) {//채팅방 만들때 같은 사람이 여러개 방을 만들 수 없도록 같은 id이름인 채팅방은 못만든다.
    if (td_arr[i].innerHTML == ID) {//같은거 발견하면
      return;//만들지 마라
    }
  }
  if (ID == "") {
    return;
  }
  var h = document.getElementById("chat_table");
  var tbody = document.getElementById("t_body");
  var tr = document.createElement("tr");
  var td = document.createElement("td");
  //td.innerHTML=ID;
  var a = document.createElement("a");
  a.href = "./ChatRoom.php";
  a.addEventListener("mouseover", function (e) {
    add(e);//선택한 정보 마우스 갔다되면 보이도록 함
  });
  a.addEventListener("mouseout", function (e) {
    close_();//선택한 정보 마우스 갔다되면 보이도록 함
  });
  a.addEventListener("click", function (e) {
    uploadchat(e);//채팅방 입장 했을때 입장한 방이름 나타냄
  });
  a.innerHTML = ID;
  td.appendChild(a);
  tr.appendChild(td);
  tbody.appendChild(tr);
  h.appendChild(tbody);//테이블에 추가 
  var data;
  data = {
    id: ID,
  };
  var myObj = JSON.stringify(data);
  $.ajax({
    type: "POST",
    url: "saveChatRoom.php",
    data: {
      jsonData: ID,
      class:classOrGrad,
    },

  })


}

function uploadchat(event) {//입장한 방이름(생성한 사람의 id)을 getChatRoom.php로 전달하는 함수
  var id_ = event.target.innerText;
  var classOrGrad = document.getElementById("classOrGrad").innerText;
  $.post("getChatRoom.php",
    {
      chatId: id_+"/"+classOrGrad,
    });

}
//추가 구현 해야할 것
//매칭알고리즘으로 정렬된 채팅방목록들을 화면에 표시할 함수()
//매칭을 위한 php 구현 필요