window.onload = function(){

var numbers = "";
var score = 0;


  $("button").mouseover(function() {
    var x = Math.floor((Math.random() * 500) + 1);
      $(this).append(x).off();

  $("button").on("click", function(){
      if(x % 9 == 0){
        document.getElementById("score").innerHTML= "Score: " + score; 
        score ++;
      }
      else{
        // score --;
      }
    });
  });
};

