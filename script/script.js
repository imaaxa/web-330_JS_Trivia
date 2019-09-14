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

/**
 * Takes the questionPool.choices array and wraps the data inside HTML
 * @param {string} text Text to place inside button
 * @param {int}    value Button value
 * @param {string} color Bootstrap class for color
 * @param {string} size Bootstrap class for size
 * @param {bool}   disabled (optional) true/false is button disabled
 * returns {string} HTML for a button
 */
function getButton(text, value, color, size, disabled) {
  var status = (disabled) ? 'disabled' : '';

  return '<button class="btn ' + color + ' ' + size + ' text-capitalize" value="' + value + '" ' + status + '>' + text + '</button>';
}
//console.log(getButton('Hello', -1, 'secondary', 'md', false));


// KO functions
var startViewModel = {
  questionNumber: '-',
  question: 'Would you like to play a fun game?',
  questionOptions: '',
  questionPrev: getButton('Prev', -1, 'btn-secondary', 'btn-md', true),
  questionNext: getButton('Next', 1, 'btn-secondary', 'btn-md', true),
  gameSubmit: getButton('Play', 2, 'btn-primary', 'btn-lg', false),
};

ko.applyBindings( startViewModel );
