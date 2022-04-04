// what is debouncing

// debouncing a function ensures that it doesn't get called too frequently.
// why? what does it solve?
// ex. you want to move a box on the page every time you scroll the browser window
// *************************** example code *******************************
// function scrollHandler(e) {
//   // do somethin
// }

// window.addEventListener("scroll", scrollHandler);

// this code will work but will cause performance issues
//  why? if you scroll the browser window say 100px,
//the scrollhandler function code will run very often.
// can run dozens to hundreds of times.
// it can cause the scroll experience to be stuttery.
// ******************************* WHY ***************************************
// in situations like this you want the scrollhandler() function to run only
// when the scroll ends

// debouncing says: 'wait until this function hasn't been called in x time, and then run it'
// all the prior calls get dropped.
// input type aheads are another common use case.

// ************************** debounce implementation *************************
const debounce = (func, time) => {
  var timer;
  return function () {
    // if more than one call comes in before 350ms has expired,
    // drop the prior function call
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log("set timeout");
      func.apply(this, arguments);
    }, time);
  };
};

function printLog(arg) {
  console.log("fire🔥 ", arg);
}
var shouldFireOnce = debounce(printLog, 350);

for (var i = 0; i < 10; i++) {
  shouldFireOnce("arg");
}
