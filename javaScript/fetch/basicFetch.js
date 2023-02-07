// from https://javascript.info/fetch
let promise = fetch("https://www.google.com/");

// if (response.ok) { // if HTTP-status is 200-299
//     // get the response body (the method explained below)
//     console.log("this is a test");
//     console.log(promise);
//     let json = await response.json();
//   } else {
//     console.log("this is a test");
//     console.log(promise);
//     alert("HTTP-Error: " + response.status);
//   } 