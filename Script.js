// Main.html

let checkTF = false;


function login() {

    var id_ = document.getElementById("ID").value;
    var pw_ = document.getElementById("password").value;
    if (id_ == "") {
        alert("아이디를 입력해주세요");
        return false;
    }
    if (pw_ == "") {
        alert("비밀번호를 입력해주세요");
        return false;
    }
    $.ajax({
        type: "POST",
        url: "login.php",
        data: {
            idValue: id_,
            pwValue: pw_,
        },
        success: function (result) {
            //alert(result);
            if (result==id_) {
                alert("로그인 되었습니다.");
                $("#id_").html(id_);
                $("#logout").css("display", "inline");
                $("#loginPage").css("display", "none");
                $("#Choice").css("display", "block");
                $("body").css("background-color", "#f3f3f6");
            } else {
                alert("아이디와 비밀번호를 확인해주세요.");
            }
        }
    })

}



function join() {
    $("#loginPage").css("display", "none");
    $("#Sign").css("display", "block");
}

function checkform(id_, pw_, name_, mail_){

  var pass_val = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*/;
  var email_val = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  if (pw_ == "" || mail_ == "" || name_ == "") {
      alert("양식을 모두 입력해주세요");
      return false;
  }
  if (!pass_val.test(pw_)) {
      alert("패스워드는 8~15자의 영문 대소문자와 숫자, 특수문자의 조합으로 입력해주세요");
      return false;
  }
  if (!email_val.test(mail_)) {
      alert("이메일 형식에 맞춰 입력해주세요");
      return false;
  }

  return true;

}

function join_save() {
    if (checkTF == false) {
        alert("아이디를 체크 해주세요");
        return;
    }
    var data;
    var id_ = document.getElementById("signid").value;
    var pw_ = document.getElementById("signpw").value;
    var name_ = document.getElementById("name").value;
    var mail_ = document.getElementById("mail").value;

    var temp=checkform(id_, pw_, name_, mail_)
    if(temp==false){
      return false;
    }

    // Storing data:
    data = {
        id: id_,
        pw: pw_,
        name: name_,
        email: mail_
    };
    var myObj = JSON.stringify(data);

    $.ajax({
        type: "POST",
        url: "signIn.php",
        data: {
            jsonData: myObj,
        },
        success: function (result) {
            alert("회원가입이 완료되었습니다.");
            location.reload();
        }
    })
}

function id_Check() {
    var id_val = /^([A-Za-z0-9]){6,15}/;
    var id_ = document.getElementById("signid").value;
    if (id_ == "") {
        alert("아이디를 입력해주세요");
        return false;
    }
    if (!id_val.test(id_)) {
        alert("아이디는 6~15자의 영문 대소문자와 숫자로만 입력해주세요");
        return false;
    }
    $.ajax({
        type: "POST",
        url: "signIn.php",
        data: {
            idValue: id_,
        },
        success: function (result) {
            if (result == "yesId") {
                alert("아이디가 중복됩니다.");
            } else {
                alert("사용 가능한 아이디입니다.");
                checkTF = true;
            }
        }
    })
}
function logout(){
    $.ajax({
        type: "POST",
        url: "login.php",
        data: {
            logout: "logout",
        },

    })
    init();
    location.reload();

}

function init(){
    var id=document.getElementById("id_").innerText;
    if(id!=""){
        $("#logout").css("display", "inline");
        $("#loginPage").css("display", "none");
        $("#Choice").css("display", "block");
        $("body").css("background-color", "#f3f3f6");
    }else{
        $("#logout").css("display", "none");
        $("#loginPage").css("display", "block");
        $("#Choice").css("display", "none");
        $("body").css("background-color", "#5260AE");
    }
    document.getElementById("login").addEventListener("click", login);
    document.getElementById("signin").addEventListener("click", join);
    document.getElementById("join").addEventListener("click", join_save);
    document.getElementById("check").addEventListener("click", id_Check);
    document.getElementById("logout").addEventListener("click", logout);

}
init();
