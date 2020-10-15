//Class.html
document.getElementById("next1").addEventListener("click",change);
document.getElementById("next2").addEventListener("click",change2);
document.getElementById("next3").addEventListener("click",change3);

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
