// page loads to a header and a single start button
// on start button click reveal quiz questions and timer
// each questions has four options to answer with, only one answer has the value of true the rest are false
// timer starts at 180 seconds and counts down to zero

// on zero seconds the game ends and will reveal the quiz stats
// quiz stats are questions correct: and questions wrong: 
// questions correct: ++ per checked radio box with the true value
// questions wrong: ++ per checked radio box with the false value
// if a radio box is not checked then it is counted as false and ++ a wrong answer 
// also reveal a button to start the game over
// start over button on click will clear radio boxes, and set stats to 0, and restart timer 

// click submit button to calculate correct and false questions
// if true ++ correct answer
// else ++ wrong answer
// these numbers are displayed at the end of quiz
// end of game is determined at 0 seconds or on submit button click
// end of the quiz reveals game stats. questions correct/wrong, and a start over button

$(document).ready(function () {
    var seconds = 180;
    var correct = 0;
    var incorrect = 0;
    $("#quesitonDiv").hide();
    $("#timerDiv").hide();
    $("form").hide();
    $("#winLoss").hide();
    $("#start-button").on("click", function () {
        setInterval(function () {

            $("#timer").text("Time Remaining: " + seconds--);
        }, 1000);
        $("#quesitonDiv").show();
        $("#timerDiv").show();
        $("form").show();

        // console.log("hello")

    });

    $("#submit").on("click", function (event) {
        event.preventDefault();
        // console.log("i clicked a button ");

        var answerOne = $("input[name=answerOne]:checked").val();
        if (answerOne === "aaahhhhhh") {
            correct++
            console.log(correct++);
        } else {
            incorrect++
            console.log(incorrect++);
        };
        console.log(answerOne);

        var answerTwo = $("input[name=answerTwo]:checked").val();
        if (answerTwo === "hurricane tortilla!") {
            correct++
            console.log(correct++);
        } else {
            incorrect++
            console.log(incorrect++);
        };
        console.log(answerTwo);

        var answerThree = $("input[name=answerThree]:checked").val();
        if (answerThree === "hurricane tortilla!") {
            correct++
            console.log(correct++);
        } else {
            incorrect++
            console.log(incorrect++);
        };
        console.log(answerThree);

        var answerFour = $("input[name=answerFour]:checked").val();
        if (answerFour === "lying") {
            correct++
            console.log(correct++);
        } else {
            incorrect++
            console.log(incorrect++);
        };
        console.log(answerFour);
        $("#start-button").hide();
        $("#winLoss").show();
        $("#quesitonDiv").hide();
        $("#timerDiv").hide();
        $("form").hide();
        var newDiv = $("<div>")
        $(newDiv).text("You got" + correct + "correct." +  "You got" + incorrect + "incorrect.")
        $("#winLoss").append(newDiv);
    });



});













