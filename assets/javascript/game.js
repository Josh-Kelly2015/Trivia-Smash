//theme: FINISH THE MEME!!
//Questions: 1- It is Wednesday my dudes... (AHHHHHHHHHHHHH!!!!!, Hump Dayyy!!, Middle of the Week Sneak Peek, Only 234.5 days until Halloween)
//Questions: 2- Hurricane Katrina?! More like... (Hurricane Harvey!!, Issa Knife, Look at all those chickens!, Hurricane Tor- Tilla!!)
//Questions: 3- How would Keanu Reeves describe you? (Quite the character, A good guy he is, You're breathtaking!, Subtle, yet well known..Like a wet a fart)
//Questions: 4- Why you always.. (Playing, Dancing, Eating, Lying)



//We have 4 questions, 4 answers to each question, 1 correct answer
// var questionOne, questionTwo, questionThree, questionFour
var questionOne = "Finish this meme: It is Wednesday my dudes...";
var questionTwo = "Finish this meme: Hurricane Katrina?! More like...";
var questionThree = "How would Keanu Reeves describe you?";
var questionFour = "Finish this meme :Why you always..";
//correct answers to each question
var correctAnswerOne = "AHHHHHHHHHHHHH!!!!!";
var correctAnswerTwo = "Hurricane Tor- Tilla!!";
var correctAnswerThree = "You're breathtaking!";
var correctAnswerFour = "Lying";
//list of possible answers
// var answers.questionOne.(AHHHHHHHHHHHHH!!!!!, Hump Dayyy!!, Middle of the Week Sneak Peek, Only 234.5 days until Halloween)
// answers.questionTwo.(Hurricane Harvey!!, Issa Knife, Look at all those chickens!, Hurricane Tor- Tilla!!)
// answers.questionThree.(Quite the character, A good guy he is, You're breathtaking!, Subtle, yet well known..Like a wet a fart)
// answers.questionFour.(Playing, Dancing, Eating, Lying)
// var possibleAnswersOne = "AHHHHHHHHHHHHH!!!!!, Hump Dayyy!!, Middle of the Week Sneak Peek, Only 234.5 days until Halloween";
// var possibleAnswersTwo = "Hurricane Harvey!!, Issa Knife, Look at all those chickens!, Hurricane Tor- Tilla!!";
// var possibleAnswersThree = "Quite the character, A good guy he is, You're breathtaking!, Subtle, yet well known..Like a wet a fart";
// var possibleAnswersFour = "Playing, Dancing, Eating, Lying";

//create objects out of my variables
var possibleAnswersOne = { //options for 
    suggestionOne: { // first button
        text: "AHHHHHHHHHHHHH!!!!!", // .text this to button
        value: true // ask if this value is true, if it is then display win screen. if not display lose screen
    },
    suggestionTwo: {
        text: "Hump Dayyy!!",
        value: false
    },

    suggestionThree: {
        text: "Middle of the Week Sneak Peek",
        value: false
    },
    suggestionFour: {
        text: "Only 234.543598 days until Halloween",
        value: false
    }
};

var triviaQuestions = {

    questionOne: {
        text: "Finish this meme: It is Wednesday my dudes...",
        possibleAnswers: {
            optionOne: {
                text: "AHHHHHHHHHHHHH!!!!!", // #buttonOne .text
                value: true // if questionOne.possibleAnswers.value = true then display win screen, else display lose screen
            },
            optionTwo: {
                text: "Hump Dayyy!!", //#buttonTwo .text
                value: false // false is given to the options that are not true.
            },

            optionThree: {
                text: "Middle of the Week Sneak Peek", //#button three .text
                value: false
            },
            optionFour: {
                text: "Only 234.543598 days until Halloween", // button four . text
                value: false
            },
        },
    },

    questionTwo: {
        text: "Finish this meme: Hurricane Katrina?! More like...",
        possibleAnswers: {
            optionOne: {
                text: "Sharknado",
                value: false,
            },
            optionTwo: {
                text: "Hurricane Tor-Tilla!",
                value: true,
            },
            optionThree: {
                text: "Look at all those chickens",
                value: false,
            },
            optionFour: {
                text: "It's Hump Daaayyyy",
                value: false,
            },

        },
    },

    questionThree: {
        text: "You're walking down the road when suddenly Keanu Reeves see's you from across the street. He holds his hand out for a cab, but he just uses the taxi as a barrier to  safely cross towards you. Keanu is just a few feet away you. Staring deeply in to your eyes. You want to look away, but you can't. It's Keanu Reeves, afterall. You continue walking, but you don't get past him. Keanu Reeves firmly grasps your shoulders, locking his arms straight out in front of him. He desperatly wishes to compliment you. How does he do it?",
        possibleAnswers: {
            optionOne: {
                text: "I shidded",
                value: false,
            },
            optionTwo: {
                text: "You're quite the guy",
                value: false,
            },
            optionThree: {
                text: "He half squats down and points with both index fingers, exclaiming 'You're breathtaking!' ",
                value: true,
            },
            optionFour: {
                text: "Amazing personality bro",
                value: false,
            },
        },

    },

    questionFour: {
        text: "The following meme is a number 1 hit single in the Vine community. Finish the lyrics: Why you always.. ",
        possibleAnswers: {
            optionOne: {
                text: "Playing",
                value: false,
            },
            optionTwo: {
                text: "Dying",
                value: false,
            },
            optionThree: {
                text: "Crying",
                value: false,
            },
            optionFour: {
                text: "Lying",
                value: true,
            },

        },
    },
};
// make suggestionOne = true so that if button clicked equals true then display correct answer screen


// set each answer to display as text inside the designated button. buttonOne gets possibleAnswersOne
// each answer is a button displayed below the question
// if the correct answer is chosen the hidden video is displayed and played for 7 seconds and then the next question is shown
// if the wrong answer is chosen then text showing "You are wrong" is displayed, next question is displayed
// 30 second timer for each question. NExt question is displayed at the end of 30 seconds despite an answer being inputed




//Link of picture/video for each question
//stop timer on correct answer click
//only show if question is correct
//embed youtube video or gifs for Q 1,2,4. Keanu gif for Q 3.
//automatically play for 7 seconds then switch to next question




//30 second timer for each question. 
//End of 30 seconds move on to next question
//Even if question is unanswereed




//Track correct/wrong answers. Display at the end of game. 
// var correct ++ on click of correctAnswer
// var wrong ++ onClick of the rest of buttons
// .text("Correct: _")
//.text("Wrong _")
// <button> start over ? </button>
//Start over button on ending page
