// Return a random integer between 0 and 1000
function rand() {
  return Math.floor(Math.random() * 1000);
}

function f1(cb) {
  console.log('f1 starts');
  setTimeout(cb, rand());
}

function f2(cb) {
  console.log('f2 starts');
  setTimeout(cb, rand());
}

function f3(cb) {
  console.log('f3 starts');
  setTimeout(cb, rand());
}

function onEnd() {
  console.log('onEnd called');
}

/*
PROBLEM:
Figure out a way to run f1, f2 and f3 in
parallel and to completion before running onEnd.

The program should complete as quickly as possible.

Do not modify anything above this comment;
do not modify f1, f2, f3, and onEnd.
Run this program with the following command:

node run_group.js

Notice that the onEnd function runs before the
other functions complete.

Replace the code following this comment with
something that works.
*/

function Counter()
{
	this.count = 0;
	this.max = 3;
}

Counter.prototype.countMe = function() {
	++this.count;

	// If all nodes have completed, call onEnd
	if( this.count == this.max )
		onEnd();
};

var myCounter = new Counter();

f1(function() { console.log('f1 completed'); myCounter.countMe() });
f2(function() { console.log('f2 completed'); myCounter.countMe() });
f3(function() { console.log('f3 completed'); myCounter.countMe() });
