$( document ).ready(function(){

var numbers = ["9 ", "18 ", "36 ", "48 ", "54 ", "63 ", "72 ", "81 "];
var score = 0;


for (var i = 0; i < numbers.length; i++) {
// var number = Math.floor(Math.random() * 9);
    $("button").on("click", function() {
        if (numbers % 9) {
            score ++;
        };
    });
    // $("button").append(numbers);
}
});
