//Class.html
document.getElementById("next1").addEventListener("click",change);
document.getElementById("next2").addEventListener("click",change2);
document.getElementById("next3").addEventListener("click",change3);
document.getElementById("submit").addEventListener("click",info_class_save);

function change(){
  $("#First").css("display","none");
  $("#Second").css("display","block");
}
function change2(){
  $("#Second").css("display","none");
  $("#Three").css("display","block");
}
function change3(){
  $("#Three").css("display","none");
  $("#Four").css("display","block");
}
// 다음 버튼 눌렀을때 화면 전환 되도록 하는 함수들

// var myJSON = '{"chk_score":"", "chk_gender":, "chk_ID":[],"chk_time":[]}';
function info_class_save() {//정보저장하는 함수
  var score_ = $('input:radio[name="chk_score"]:checked').val();
  var gender_=$('input:radio[name="chk_gender"]:checked').val();
  //강의,성별 정보 받음
  var id_list=[]
  $('input[name="chk_ID"]:checked').each(function(){
    var test=$(this).val();//선택된 학번 하나씩
    id_list.push(test);
  });
  var time_list=[]
  $('input[name="chk_time"]:checked').each(function(){
    var temp=$(this).val();//선택된 시간들 하나씩
    time_list.push(temp);
  });
//학번들 과 시간대 정보 받음
  Obj = {
      score: score_,
      gender: gender_,
      id:id_list,
      time:time_list
  };

  url = "Class"
  var sendFile = JSON.stringify(Obj);//json을 string으로

  $.ajax({
      success: function (result) {
          console.log(sendFile);//정보 저장이 잘되었는지 확인차
          $.ajax({
              url: "classupload.php",
              type: 'POST',
              data: {
                  sendFile: sendFile,
                  fileName: url,
              }
              //선택한 정보와 Class화면에서 일어남을 전달함
          });
          alert("upload완료");
      },
      error: function (result) {
          console.log(sendFile);
          alert("FAILED");
      }
  });
}





