// making the first promis function
function waitForPeriodOfTimeWithPromise(milliseconds) { // creating parent function that runs the whole thing. 
    return new Promise((resolve, reject) => {  // resolve means that when it's called, it's complete //first promise
        setTimeout(() => { // wait for time
            resolve() // then reolve. call the wait callback stuff. later stuff.  
        }, milliseconds);
    })
}

waitForPeriodOfTimeWithPromise(1500) // function with the promise. 
.then(() => turnPageBlue()) // standard function
.then(() => waitForPeriodOfTimeWithPromise(2000))
.then(() => writeSomethingOnPage())
.then(() => waitForPeriodOfTimeWithPromise(2200))
.then(() => turnPagePink())
.catch((error) => {
    // here's what i want to do with my error
    console.error(error);
})

// the page to turn blue after 1500 milliseconds



// page to write something 2000 milliseconds


// page to turn pink after 2200 milliseconds