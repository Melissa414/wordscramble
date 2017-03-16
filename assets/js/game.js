window.onload = function() {

    var random = [];
    var score = 0;


    $("button").mouseover(function() {
        var x = Math.floor((Math.random() * 9) + 0);
        var random = x;
        $(this).append(x).off();

        $(this).on("click", function() {
            if (x + x + x == 9) {
                document.getElementById("score").innerHTML = "<h4>Score: </h4>" + score;
                score++;
            } else {
                // score --;
            }
        });
        $("#restart").on("click", function() {
            $("button").html(Math.floor(Math.random() * 9) + 0);
            // $(this).sort(random);
        });
    });
};
