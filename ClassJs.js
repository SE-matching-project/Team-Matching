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


// var myJSON = '{"chk_score":"", "chk_gender":, "chk_ID":[],"chk_time":[]}';
function info_class_save() {
  var myObj, myJSON;
  var score_ = $('input:radio[name="chk_score"]:checked').val();
  var gender_=$('input:radio[name="chk_gender"]:checked').val();
  var id_list=[]
  $('input[name="chk_ID"]:checked').each(function(){
    var test=$(this).val();//선택된 아이디 하나씩
    id_list.push(test);
  });
  var time_list=[]
  $('input[name="chk_time"]:checked').each(function(){
    var temp=$(this).val();//선택된 시간들 하나씩
    time_list.push(temp);
  });

  Obj = {
      score: score_,
      gender: gender_,
      id:id_list,
      time:time_list
  };

  url = "data/Class.json"//저장할 위치
  var sendFile = JSON.stringify(Obj);//json을 string으로

  $.ajax({
      success: function (result) {
          console.log(sendFile);
          $.ajax({
              url: "classupload.php",
              type: 'POST',
              data: {
                  sendFile: sendFile,
                  fileName: url,
              }
          });
          alert("upload완료");
      },
      error: function (result) {
          console.log(sendFile);
          alert("FAILED 망할");
      }
  });
}





