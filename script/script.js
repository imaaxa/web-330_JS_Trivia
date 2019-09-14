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
    question: 'When printed, which of these strings would output: Good morning!Isn’ t it a“ lovely” day?',
    choices: [
      'A.var sentence = "Good morning!Isn\'t it a"lovely" day?"',
      'B.var sentence = "Good morning!Isn\'t it a\'lovely\' day?"',
      'C.var sentence = \'Good morning!Isn\'t it a"lovely" day?',
      'D.var sentence = \'Good morning!Isn\'t it a\'lovely\ day?'
    ],
    answer : 2 // Answer needs to be the array index
  }
];

var game = false;

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
      answerOptions.push('<div class="form-check"><label class="form-check-label text-capitalize" for="' + questionNumber + '-' + index + '"><input class="form-check-input" type="radio" name="answer-' + questionNumber + '" id="' + questionNumber + '-' + index + '">' + questionOptions[index] + '</label></div>');
    }
  }

  return answerOptions.join('');
}
// Test for getQuestionOptions
//console.log(getQuestionOptions( 0, questionPool[0].choices));


// KO functions
var ViewModel = {
  questionIndex: ko.observable(0),
  question: 'Would you like to play a fun game?',
  questionOptions: '',

  btnSubmit: {
    text: ko.observable('Play Game'),
    value: ko.observable(0)
  },

  incrementClickCounter : function() {
    var previousCount = Number(this.questionIndex());
    if (previousCount < 10) {
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
      this.btnSubmit.text('Submit Answers');
      this.btnSubmit.value(1);
    } else if (this.btnSubmit.value() == 1 ) {
      this.btnSubmit.text('New Game');
      this.btnSubmit.value(0);
    }
  }
};

ko.applyBindings(ViewModel);
