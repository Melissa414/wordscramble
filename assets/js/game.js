$( document ).ready(function(){

var numbers = [];
var score = 0;

// var number = Math.floor(Math.random() * 9);
    $(".cell").on("click", function() {
        if (numbers % 9) {
            score ++;
        };
    });
    $(".cell").append(numbers);

});
