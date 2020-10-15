document.getElementById("next5").addEventListener("click",change);
document.getElementById("next6").addEventListener("click",change2);
document.getElementById("next7").addEventListener("click",change3);

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
