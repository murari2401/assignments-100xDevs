// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let a=0;
(function timer(){
    a++;
    console.log(a);
    setTimeout(timer,1000);
})();