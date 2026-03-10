// Create a function that takes another function as an argument and calls it after 3 seconds (HOF + Callback). ✅

// function abc(fnc) {
//     setTimeout(() => {
//         fnc()
//     }, 3000);
// }
// abc(function () {
//     console.log("hello world");
    
// })


// Create a function that takes a callback and executes it after every `n` seconds indefinitely. ✅

// function abc(fnc , time) {
//     setInterval(() => {
//         fnc()
//     }, time);
// }

// abc(function () {
//     console.log("hello world");
    
// },2000)

// Write a function that uses closures to create a counter. ✅

//  function abc() {
//     let counter  =  1
//     return function () {
//         console.log(counter);
//       return  counter++
        
        
//     }
// }
//  let count = abc();  

// count()
// count()
// count()


// let arr  = [1,2,3,4,5]
// function maut(fn,arr) {
//     let newarr = []
//     for (let i = 0; i <arr.length; i++) {
//         newarr.push(fn(arr[i]))
         
//     }
//     return newarr
// }

//  let ans = maut( function(value) {
//     return value + 2
// },arr)
// console.log(ans);

// Implement a function that limits how many times another function can be called (Closure + HOF).

// function abc(fnc, limit) {
//     let totalcalled = 0
//     return function() {
//         if (totalcalled<limit) {
//             fnc()
//             totalcalled++
//         }
//     }
// }

//  let ans = abc(function () {
//     console.log('hey');
    
// },3)
// ans()
// ans()
// ans()
// ans()


// Implement a function that takes a callback and only executes it once (HOF + Closure).
// function once(fn) {
//     let executed = false;

//     return function (...args) {
//         if (!executed) {
//             executed = true;
//             return fn(...args);
//         }
//     };
// }

// const init = once(() => console.log("Initialized!"))

// init() 
// init() 





//   const throttledFn = throttle(() => console.log("Throttled Execution"), 2000);


// function throttle(fn, delay) {
//     let allow = true

//     return function(...args) {
//         if (!allow) return

//         allow = false
//         fn(...args)

//         setTimeout(() => {
//             allow = true
//         }, delay)
//     }
// }


// const run = throttle(() => {
//     console.log("Running...")
// }, 2000)

// run() 
// run() 
// run() 


// run()