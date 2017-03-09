window.onload = function(){

var numbers = "";
var score = 0;


  $("button").mouseover(function() {
    var x = Math.floor((Math.random() * 9) + 1);
      $(this).append(x).off();

  $("button").on("click", function(){
      if(x + x + x === 9){
        document.getElementById("score").innerHTML= "Score: " + score; 
        score ++;
      }
      else{
        // score --;
      }
    });

  });
};

