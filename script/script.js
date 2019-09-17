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
  // Ranges 1-10, 20 is game over
  questionIndex: ko.observable(1),

  // Submit button information
  btnSubmit: {
    text: ko.observable('Finish'),
    value: ko.observable(20)
  },
  // Submit button active/disable toggle
  btnSubmitActive: ko.observable(true),

  // Keep track of the score
  score: ko.observable(0),
  rank: ko.observable(''),

  // Keeps track of user's answer selection
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

  // Change submit button label and disable it
  // Get the score
  // Set the questionIndex to 20 in order to display final screen
  endGame: function () {
    this.btnSubmit.text('Game Over');
    this.btnSubmitActive(false);
    this.getScore();
    this.checkRank();
    this.questionIndex(20);
    this.checkIncrements();
  }
}
ko.applyBindings(ViewModel);

// Computed Observables

// Functions: (ViewModel.points#) for each question:
//    Set pass/fail
//    Return triggers class on final page user answers
ViewModel.points1 = ko.computed(function () {
  test = ViewModel.q1();
  var pass = (test === answer1) ? true : false;
  ViewModel.a1(pass);
  return pass ? 10 : 0;
});

ViewModel.points2 = ko.computed(function () {
  test = ViewModel.q2();
  var pass = (test === answer2) ? true : false;
  ViewModel.a2(pass);
  return pass ? 10 : 0;
});

ViewModel.points3 = ko.computed(function () {
  test = ViewModel.q3();
  var pass = (test === answer3) ? true : false;
  ViewModel.a3(pass);
  return pass ? 10 : 0;
});

ViewModel.points4 = ko.computed(function () {
  test = ViewModel.q4();
  var pass = (test === answer4) ? true : false;
  ViewModel.a4(pass);
  return pass ? 10 : 0;
});

ViewModel.points5 = ko.computed(function () {
  test = ViewModel.q5();
  var pass = (test === answer5) ? true : false;
  ViewModel.a5(pass);
  return pass ? 10 : 0;
});

ViewModel.points6 = ko.computed(function () {
  test = ViewModel.q6();
  var pass = (test === answer6) ? true : false;
  ViewModel.a6(pass);
  return pass ? 10 : 0;
});

ViewModel.points7 = ko.computed(function () {
  test = ViewModel.q7();
  var pass = (test === answer7) ? true : false;
  ViewModel.a7(pass);
  return pass ? 10 : 0;
});

ViewModel.points8 = ko.computed(function () {
  test = ViewModel.q8();
  var pass = (test === answer8) ? true : false;
  ViewModel.a8(pass);
  return pass ? 10 : 0;
});

ViewModel.points9 = ko.computed(function () {
  test = ViewModel.q9();
  var pass = (test === answer9) ? true : false;
  ViewModel.a9(pass);
  return pass ? 10 : 0;
});

ViewModel.points10 = ko.computed(function () {
  test = ViewModel.q10();
  var pass = (test === answer10) ? true : false;
  ViewModel.a10(pass);
  return pass ? 10 : 0;
});

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
  var index = Number(this.questionIndex());
  // Both are initially set to true
  this.canDecrement(true);
  this.canIncrement(true);

  // Determins which ones need to be false
  switch (index) {
    case 1:
      this.canDecrement(false);
      break;
    case 10:
      this.canIncrement(false);
      break;
    case 20:
      this.canDecrement(false);
      this.canIncrement(false);
      break;
  }
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
$(":radio").on('click', function (event) {
  // Gets the question text of the clicked  radio button
  var userSelection = $(this).next().text();
  // Gets the id of the clicked radio button
  var answerId = $(this).attr('id').split('-');

  // Copies selected answer text to user selected answer for the question
  $('.userAnswer-' + answerId[0]).text(userSelection);
});
// Script Start
