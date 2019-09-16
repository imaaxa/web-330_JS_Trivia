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
var answer1 = '2';
var answer2 = '3';
var answer3 = '1';
var answer4 = '0';
var answer5 = '2';
var answer6 = '1';
var answer7 = '3';
var answer8 = '1';
var answer9 = '3';

var ViewModel = {
  questionIndex: ko.observable(1),

  q1: ko.observable(),
  q2: ko.observable(),
  q3: ko.observable(),
  q4: ko.observable(),
  q5: ko.observable(),
  q6: ko.observable(),
  q7: ko.observable(),
  q8: ko.observable(),
  q9: ko.observable(),
  q10: ko.observable(),

  canDecrement: ko.observable(false),
  canIncrement: ko.observable(true),

  incrementClickCounter: function () {
    var previousCount = Number(this.questionIndex());
    if (previousCount < 10) {
      this.questionIndex(previousCount + 1);
    }
    this.checkIncrements();
  },

  decrementClickCounter: function () {
    var previousCount = Number(this.questionIndex());

    if (previousCount > 1) {
      this.questionIndex(previousCount - 1);
    }
    this.checkIncrements();
  }
}
ko.applyBindings(ViewModel);

// Computed Observables
ViewModel.points1 = ko.computed(function () {
  test = ViewModel.q1();
  return (test === answer1) ? 10 : 0;
});

ViewModel.points2 = ko.computed(function () {
  test = ViewModel.q2();
  return (test === answer2) ? 10 : 0;
});

ViewModel.points3 = ko.computed(function () {
  test = ViewModel.q3();
  return (test === answer3) ? 10 : 0;
});

ViewModel.points4 = ko.computed(function () {
  test = ViewModel.q4();
  return (test === answer4) ? 10 : 0;
});

ViewModel.points5 = ko.computed(function () {
  test = ViewModel.q5();
  return (test === answer5) ? 10 : 0;
});

ViewModel.points6 = ko.computed(function () {
  test = ViewModel.q6();
  return (test === answer6) ? 10 : 0;
});

ViewModel.points7 = ko.computed(function () {
  test = ViewModel.q7();
  return (test === answer7) ? 10 : 0;
});

ViewModel.points8 = ko.computed(function () {
  test = ViewModel.q8();
  return (test === answer8) ? 10 : 0;
});

ViewModel.points9 = ko.computed(function () {
  test = ViewModel.q9();
  return (test === answer9) ? 10 : 0;
});

/*ViewModel.points10 = ko.computed(function () {
  test = ViewModel.q10();
  return (test === answer10) ? 10 : 0;
});*/

ViewModel.checkIncrements = function () {
  var index = Number(this.questionIndex());
  this.canDecrement(true);
  this.canIncrement(true);
  console.log(index);

  switch (index) {
    case 1:
      this.canDecrement(false);
      break;
    case 10:
      this.canIncrement(false);
      break;
  }
}
// Script Start
