document.getElementById("next5").addEventListener("click",change);
document.getElementById("next6").addEventListener("click",change2);
document.getElementById("next7").addEventListener("click",change3);
// 다음 버튼이 클릭 되었을 때

function change(){
  $("#Five").css("display","none");
  $("#Six").css("display","block");
}
function change2(){
  $("#Six").css("display","none");
  $("#Seven").css("display","block");
}
function change3(){
  $("#Seven").css("display","none");
  $("#Eight").css("display","block");
}
// 다음 화면으로 나타내게끔 하는 함수

function check_infovalue(interest, gender, id_list, time_list) {
  if (interest == undefined || gender == undefined || id_list.length == 0 || time_list.length == 0) {
    alert("선택하지 않은 항목이 있습니다!");
    return false;
  }

  return true;
}

function info_save() {
  var interest_ = $('input:radio[name="chk_title"]:checked').val();
  var gender_=$('input:radio[name="chk_gender"]:checked').val();
  // 관심사, 성별 value 받음
  var id_list=[]
  $('input[name="chk_ID"]:checked').each(function(){
    var test=$(this).val();
    id_list.push(test);
  });
  var time_list=[]
  $('input[name="chk_time"]:checked').each(function(){
    var temp=$(this).val();
    time_list.push(temp);
  });

  var bool = check_infovalue(interest_, gender_, id_list, time_list);
  if (bool) {
    // 학번들 과 시간대 배열을 받음
    Obj = {
      interest: interest_,
      gender: gender_,
      id:id_list,
      time:time_list
    };

    url = "Graduation"
    var sendFile = JSON.stringify(Obj);

    $.ajax({
      success: function (result) {
        console.log(sendFile);
        $.ajax({
          url: "upload.php",
          type: 'POST',
          data: {
            sendFile: sendFile,
            fileName: url,
          }
        });
        // 선택한 정보 전달 graduation에서 선택한 정보임을 전달
        alert("upload완료");
      },
      error: function (result) {
        console.log(sendFile);
        alert("FAILED");
      }
    });
    return true;
  }
  else{
    return false;
  }
}
