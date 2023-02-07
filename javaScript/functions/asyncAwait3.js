// setting up the time to wait. 
function waitForPeriodOfTimeWithPromise(milliseconds) { // creating parent function that runs the whole thing. 
    return new Promise((resolve, reject) => {  // resolve means that when it's called, it's complete //first promise
        setTimeout(() => { // wait for time
            resolve() // then reolve. call the wait callback stuff. later stuff.  
        }, milliseconds);
    })
}

// setting up the order and defining the pace for it to run.
async function main() {
    await waitForPeriodOfTimeWithPromise(1500);
    turnPagePink();
    await waitForPeriodOfTimeWithPromise(2000);
    writeSomethingOnPage();
    await waitForPeriodOfTimeWithPromise(2200);
    turnPageBlue();
}

main();
// function turnPageBlue() {
//     document.body.style.background = 'blue';
// }

// function writeSomethingOnPage() { // making new function
//     document.body.innerHTML = 'writing something on page'; // add text on page
// }

// function turnPagePink() { // creating new function
//     document.body.style.background = 'pink'; // what the function does
// }