/*
============================================
; Title: exercise-6.2.js
; Author: Cory Gilliam, Loren Wetzel, Tyler Librandi
; Date: 13 Sept 2019
; Modified By:
; Description: JavaScript Knockout Trivia Game
;===========================================
*/

// Variables
var questionPool = [
  // Use this as the object model for all of the questions
  // Remember: Last item in a list dose "not" get a ,
  // I tend to use single quotes for strings,
  //     so all single quotes in the string needs to be escaped with a \
  {
    question: 'Would you like to play a fun game?',
    choices: ['', '', '', ''],
    answer: 0
  },
  {
    question: 'When printed, which of these strings would output: Good morning!Isn’ t it a“ lovely” day?',
    choices: [
      'A.var sentence = "Good morning!Isn\'t it a"lovely" day?"',
      'B.var sentence = "Good morning!Isn\'t it a\'lovely\' day?"',
      'C.var sentence = \'Good morning!Isn\'t it a"lovely" day?',
      'D.var sentence = \'Good morning!Isn\'t it a\'lovely\ day?'
    ],
<<<<<<< HEAD
    answer: 2 // Answer needs to be the array index
  }, {
=======
    answer : 2 // Answer needs to be the array index
  },
  { 
>>>>>>> 189a1e51501f18a9851ad7e293e4b58530ace63e
    question: "What is 'NaN'",
    choices: [
      "A.None at Noon",
      "B.Neither animal Nor",
      "C.Not a Neither",
      "D.Not a Number"
    ],
    answer: 3
<<<<<<< HEAD
  }, {
    question: "JavaScript is an OOP language by default?",
    choices: [
=======
  },
  {
    question:"JavaScript is an OOP language by default?",
    choices:[
>>>>>>> 189a1e51501f18a9851ad7e293e4b58530ace63e
      "A. True",
      "B. False"
    ],
    answer: 1
<<<<<<< HEAD
  }, {
    question: "What is a prototype?",
    choices: [
=======
  },
  { 
    question:"What is a prototype?",
    choices:[
>>>>>>> 189a1e51501f18a9851ad7e293e4b58530ace63e
      "A. A reference to another object",
      "B. The car from that car show",
      "C. Prototype... I have heard that before somewhere",
      "D. A new object that I just discovered"
    ],
    answer: 0
<<<<<<< HEAD
  }, {
    question: "How do you create an object with constructors?",
    choices: [
=======
  },
  { 
    question:"How do you create an object with constructors?",
    choices:[
>>>>>>> 189a1e51501f18a9851ad7e293e4b58530ace63e
      "A. Construct the object.",
      "B. Objects need constructors?",
      "C. Create a constructor function.",
      "D. JavaScript does not use objects."
    ],
    answer: 2
<<<<<<< HEAD
  }, {
    question: "What is a callback function?",
    choices: [
=======
  },
  { 
    question:"What is a callback function?",
    choices:[
>>>>>>> 189a1e51501f18a9851ad7e293e4b58530ace63e
      "A. Something I wish that person I meet the other day had.",
      "B. A function that is executed after another function has finished",
      "C. A function that calls you back.",
      "D. Callback? There is no such thing."
    ],
    answer: 1
<<<<<<< HEAD
  }, {
    question: "What are the common uses of JavaScript?",
    choices: [
=======
  },
  { 
    question:"What are the common uses of JavaScript?",
    choices:[
>>>>>>> 189a1e51501f18a9851ad7e293e4b58530ace63e
      "A. Web development",
      "B. Web Applications",
      "C. Web Servers",
      "D. All of the Above"
    ],
    answer: 3
<<<<<<< HEAD
  }, {
    question: "A separate file is needed for JavaScript while programming a web app.?",
    choices: [
=======
  },
  { 
    question:"A separate file is needed for JavaScript while programming a web app.?",
    choices:[
>>>>>>> 189a1e51501f18a9851ad7e293e4b58530ace63e
      "A. True",
      "B. False"
    ],
    answer: 1
<<<<<<< HEAD
  }, {
=======
  },
  {
>>>>>>> 189a1e51501f18a9851ad7e293e4b58530ace63e
    question: "What is the benefit of including 'use strict' at the start of a JavaScript file?",
    choices: [
      "A. Voluntary way to enforce stricter parsing",
      "B. Voluntary way to enforce stricter error handling",
      "C. Generate errors or throw exceptions for silent code errors",
      "D. All of the above"
    ],
    answer: 3
<<<<<<< HEAD
  }];
=======
  }
];

var game = false;
>>>>>>> 189a1e51501f18a9851ad7e293e4b58530ace63e

// Script Start

/**
 * Takes the questionPool.choices array and wraps the data inside HTML
 * @param {int} questionNumber Question array index
 * @param {array} questionOptions An array of answer options
 * returns {string} HTML div, label, and radio buttons
 */
function getQuestionOptions( questionNumber, questionOptions ) {
  var answerOptions = [];

  if (questionOptions.length) {
    for (var index = 0; index < questionOptions.length; index++) {
      if (questionOptions[index] != '') {
        answerOptions.push('<div class="form-check"><label class="form-check-label text-capitalize" for="' + questionNumber + '-' + index + '"><input class="form-check-input" type="radio" name="answer-' + questionNumber + '" id="' + questionNumber + '-' + index + '">' + questionOptions[index] + '</label></div>');
        }
    }
  }

  return answerOptions.join('');
}
// Test for getQuestionOptions
//console.log(getQuestionOptions( 0, questionPool[0].choices));


// KO functions
var ViewModel = {
  questionIndex: ko.observable(0),
  btnSubmit: {
    text: ko.observable('Play Game'),
    value: ko.observable(0)
  },

  incrementClickCounter : function() {
    var previousCount = Number(this.questionIndex());
    if (previousCount < (questionPool.length) - 1 ) {
      this.questionIndex(previousCount + 1);
    }
  },

  decrementClickCounter: function () {
    var previousCount = Number(this.questionIndex());
    if (previousCount > 1) {
      this.questionIndex(previousCount - 1);
    }
  },

  startGame: function () {
    if (this.btnSubmit.value() == 0 ) {
      this.incrementClickCounter();
      this.btnSubmit.text('Submit Answers');
      this.btnSubmit.value(1);

    } else if (this.btnSubmit.value() == 1 ) {
      this.btnSubmit.text('New Game');
      this.btnSubmit.value(0);
    }
  }
};

var question = ko.computed(function () {
  var index = ViewModel.questionIndex();
  return questionPool[index].question;
});

var questionOptions = ko.computed(function () {
  var index = ViewModel.questionIndex();
  //return questionPool[index].choices;
  console.log(getQuestionOptions(index, questionPool[index].choices));

  return getQuestionOptions(index, questionPool[index].choices);
});

ko.applyBindings(ViewModel);
