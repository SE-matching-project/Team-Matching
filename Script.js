// Main.html
document.getElementById("login").addEventListener("click",login);
document.getElementById("signin").addEventListener("click",join);

function login(){
  $("#loginPage").css("display","none");
  $("#Choice").css("display","block");
  $("body").css("background-color","#f3f3f6");
}

 function join(){
  $("#loginPage").css("display","none");
  $("#Sign").css("display","block");
 }
