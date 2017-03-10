window.onload = function(){

var score = 0;


  $("button").mouseover(function() {
    var x = Math.floor((Math.random() * 8) + 1);
      $(this).append(x).off();

  $(this).on("click", function(){
      if(x + x + x === 9){
        document.getElementById("score").innerHTML= "<h4>Score: </h4>" + score; 
        score ++;
      }
      else{
        // score --;
      }
    });

  });

  $("#restart").on("click",function(){
    var y = Math.floor((Math.random() * 7) + 1);
      $("button").text(y);
        // $(this).random(y);
  });
};

