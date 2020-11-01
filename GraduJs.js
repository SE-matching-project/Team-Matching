document.getElementById("next5").addEventListener("click",change);
document.getElementById("next6").addEventListener("click",change2);
document.getElementById("next7").addEventListener("click",change3);
document.getElementById("Submit2").addEventListener("click",info_save);

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

function info_save() {
    var myObj, myJSON;
    var interest_ = $('input:radio[name="chk_title"]:checked').val();
    var gender_=$('input:radio[name="chk_gender"]:checked').val();
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

    Obj = {
        interest: interest_,
        gender: gender_,
        id:id_list,
        time:time_list
    };

    url = "data/Graduation.json"
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
            alert("upload완료");
        },
        error: function (result) {
            console.log(sendFile);
            alert("FAILED 망할");
        }
    });
}
