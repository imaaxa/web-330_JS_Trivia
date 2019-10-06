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

// Answer Key
var answer1 = '2';
var answer2 = '3';
var answer3 = '1';
var answer4 = '0';
var answer5 = '2';
var answer6 = '1';
var answer7 = '3';
var answer8 = '1';
var answer9 = '2';
var answer10 = '3';

var ViewModel = {
  // Keeps track of quetion number
  // Ranges 1-10, 11 is game over
  questionIndex: ko.observable(1),

  gameOver: ko.observable(1),

  questions: ko.observableArray([
    {
      id: 1,
      question: 'When printed, which of these strings would output: Good morning! Isn’t it a “lovely” day?',
      correctAnswer: 2,
      answer: 'var sentence = \'Good morning! Isn\'t it a "lovely" day?\'',
      options: [
        'var sentence = "Good morning! Isn\'t it a "lovely" day?"',
        'var sentence = "Good morning! Isn\'t it a \'lovely\' day?"',
        'var sentence = \'Good morning! Isn\'t it a "lovely" day?\'',
        'var sentence = \'Good morning! Isn\'t it a \'lovely day?'
      ]
    },
    {
      id: 2,
      question: 'What is \'NaN\'',
      correctAnswer: 3,
      answer: 'Not a Number',
      options: [
        'None at Noon',
        'Neither animal Nor',
        'Not a Neither',
        'Not a Number '
      ]
    },
    {
      id: 3,
      question: 'JavaScript is an OOP language by default?',
      correctAnswer: 1,
      answer: 'False',
      options: [
        'True',
        'False'
      ]
    },
    {
      id: 4,
      question: 'What is a prototype?',
      correctAnswer: 0,
      answer: 'A reference to another object',
      options: [
        'A reference to another object',
        'The car from that car show',
        'Prototype... I have heard that before somewhere',
        'A new object that I just discovered'
      ]
    },
    {
      id: 5,
      question: 'How do you create an object with constructors?',
      correctAnswer: 2,
      answer: 'Create a constructor function.',
      options: [
        'Construct the object.',
        'Objects need constructors?',
        'Create a constructor function.',
        'JavaScript does not use objects.'
      ]
    },
    {
      id: 6,
      question: 'What is a callback function?',
      correctAnswer: 1,
      answer: 'A function that is executed after another function has finished',
      options: [
        'Something I wish that person I meet the other day had.',
        'A function that is executed after another function has finished',
        'A function that calls you back.',
        'Callback? There is no such thing.'
      ]
    },
    {
      id: 7,
      question: 'What are the common uses of JavaScript?',
      correctAnswer: 3,
      answer: 'All of the Above',
      options: [
        'Web development',
        'Web Applications',
        'Web Servers',
        'All of the Above'
      ]
    },
    {
      id: 8,
      question: 'A separate file is needed for JavaScript while programming a web app.?',
      correctAnswer: 1,
      answer: 'False',
      options: [
        'True',
        'False'
      ]
    },
    {
      id: 9,
      question: 'When using the Modulus arithmetic operator (%), which of these equations is true?',
      correctAnswer: 2,
      answer: 'All of the above',
      options: [
        '50 % 4 = 0',
        '50 % 4 = .08',
        '50 % 4 = 2',
        '50 % 4 = 12.5'
      ]
    },
    {
      id: 10,
      question: 'What is the benefit of including \'use strict\' at the start of a JavaScript file?',
      correctAnswer: 3,
      answer: 'All of the above',
      options: [
        'Voluntary way to enforce stricter parsing',
        'Voluntary way to enforce stricter error handling',
        'Generate errors or throw exceptions for silent code errors',
        'All of the above'
      ]
    },
    {}
  ]),

  // Submit button information
  btnSubmit: {
    text: ko.observable('Finish'),
    value: ko.observable(0),
    active: ko.observable(true)
  },

  // Keep track of the score
  score: ko.observable(0),
  rank: ko.observable(''),

  // Keeps track of user's answer selection
  usersAnswers: ko.observableArray([
  ]),
  q1: ko.observable(0),
  q2: ko.observable(0),
  q3: ko.observable(0),
  q4: ko.observable(0),
  q5: ko.observable(0),
  q6: ko.observable(0),
  q7: ko.observable(0),
  q8: ko.observable(0),
  q9: ko.observable(0),
  q10: ko.observable(0),

  // Keeps track of correct answers
  a1: ko.observable(false),
  a2: ko.observable(false),
  a3: ko.observable(false),
  a4: ko.observable(false),
  a5: ko.observable(false),
  a6: ko.observable(false),
  a7: ko.observable(false),
  a8: ko.observable(false),
  a9: ko.observable(false),
  a10: ko.observable(false),

  // Prev/Next button active/disable toggles
  canDecrement: ko.observable(false),
  canIncrement: ko.observable(true),

  // Returns id for questions
  questionID: function () {
    var index = this.questionIndex();
    return 'q' + index;
  },

  // Returns id for options
  optionID: function (option) {
    var index = this.questionIndex();
    return index + '-' + option;
  },

  // Increment the questionIndex and update Prev/Next toggles
  incrementClickCounter: function () {
    var previousCount = Number(this.questionIndex());
    if (previousCount < 10) {
      this.questionIndex(previousCount + 1);
    }
    this.checkIncrements();
  },

  // Decrement the questionIndex and update Prev/Next toggles
  decrementClickCounter: function () {
    var previousCount = Number(this.questionIndex());

    if (previousCount > 1) {
      this.questionIndex(previousCount - 1);
    }
    this.checkIncrements();
  },

  // End of Game tasks
  endGame: function () {
    // Set submit button values
    this.btnSubmit.text('Game Over');
    this.btnSubmit.active(false);

    // Set Score, Rank, before Activate Final Game Screen
    this.getScore();
    this.checkRank();
    this.gameOver(this.btnSubmit.value());

    // Set active state of Prev/Next
    this.checkIncrements();
  }
}
ko.applyBindings(ViewModel);

// Computed Observables

// Functions: (ViewModel.points#) for each question:
//    Set pass/fail
//    Return triggers class on final page user answers
ViewModel.points1 = ko.computed(function () {
  return testResponse(ViewModel.q1(), answer1, 1);
});

ViewModel.points2 = ko.computed(function () {
  return testResponse(ViewModel.q2(), answer2, 2);
});

ViewModel.points3 = ko.computed(function () {
  return testResponse(ViewModel.q3(), answer3, 3);
});

ViewModel.points4 = ko.computed(function () {
  return testResponse(ViewModel.q4(), answer4, 4);
});

ViewModel.points5 = ko.computed(function () {
  return testResponse(ViewModel.q5(), answer5, 5);
});

ViewModel.points6 = ko.computed(function () {
  return testResponse(ViewModel.q6(), answer6, 6);
});

ViewModel.points7 = ko.computed(function () {
  return testResponse(ViewModel.q7(), answer7, 7);
});

ViewModel.points8 = ko.computed(function () {
  return testResponse(ViewModel.q8(), answer8, 8);
});

ViewModel.points9 = ko.computed(function () {
      return testResponse(ViewModel.q9(), answer9, 9);
});

ViewModel.points10 = ko.computed(function () {
      return testResponse(ViewModel.q10(), answer10, 10);
});

// Tests users response and set corrasponding settings
function testResponse(test, answer, index) {
  var pass = (test === answer) ? true : false;
  ViewModel['a' + index](pass);
  return pass ? 10 : 0;
}

ViewModel.checkRank = function () {
  var value = ViewModel.score() / 10;
  if (value > 7) {
    this.rank('Expert');
  } else if (value > 5) {
    this.rank('Novice');
  } else {
    this.rank('Beginner');
  }
}

// Uses questionIndex to set active status on Prev/Next buttons
ViewModel.checkIncrements = function () {
  // Both are initially set to true
  this.canDecrement(true);
  this.canIncrement(true);

  // Disable decrement if game over or on first question
  (!this.gameOver() || this.questionIndex() == 1) ? this.canDecrement(false) : '';

  // Disable increment if game over or on last question
  (!this.gameOver() || this.questionIndex() == 10) ? this.canIncrement(false) : '';
}

// Adds up all the points
ViewModel.getScore = function () {
  var total = 0;
  total = parseInt(this.points1()) + parseInt(this.points2()) + parseInt(this.points3()) + parseInt(this.points4()) + parseInt(this.points5()) + parseInt(this.points6()) + parseInt(this.points7()) + parseInt(this.points8()) + parseInt(this.points9()) + parseInt(this.points10());
  this.score(total);
}

// jQuery

// Sets up the User selected answers for the final page
// Adds a on click event for all the radio buttons
$(document).ready(function () {
  $(":radio").on('click', function (event) {
    // Gets the question text of the clicked  radio button
    var userSelection = $(this).next().text();
    // Gets the id of the clicked radio button
    var answerId = $(this).attr('id').split('-');

    // Copies selected answer text to user selected answer for the question
    $('.userAnswer-' + answerId[0]).text(userSelection);
  });
});
