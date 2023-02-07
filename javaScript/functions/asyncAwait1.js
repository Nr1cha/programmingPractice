// https://swapi.dev/api/people1
// old example

// ========
// Example With Callback Hell
// ========

// the page to turn blue after 1500 milliseconds

// page to write something 2000 milliseconds


// page to turn pink after 2200 milliseconds

function waitForPeriodOfTimeWithCallback(milliseconds, somethingToRun) { // creating parent function that runs the whole thing. 
    setTimeout(somethingToRun, milliseconds); // adding a time delay to the parameters 
}

// CALLBACK HELL EXAMPLE / CALLBACK PYRAMID
// CALLING THE FUNCTIONS FROM ABOVE
waitForPeriodOfTimeWithCallback(1500, () => {
    turnPageBlue()
    waitForPeriodOfTimeWithCallback(2000, () => {
        writeSomethingOnPage()
        waitForPeriodOfTimeWithCallback(2200, () => {
            turnPagePink();
        })
    })
})

// ======================================


// ======================================


