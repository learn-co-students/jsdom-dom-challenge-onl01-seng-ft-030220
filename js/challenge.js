let counter = document.querySelector("#counter");
let minusButton = document.querySelector("#minus");
let plusButton = document.querySelector("#plus");
let heart = document.querySelector("#heart");
let pauseButton = document.querySelector("#pause");
let likes = document.querySelector(".likes");
let commentsList = document.querySelector("#list");
let commentForm = document.querySelector("#comment-form");
let commentInput = document.querySelector("#comment-input");
let submitButton = document.querySelector("#submit");


// counter
let ticker = setInterval(function() {
    counter.innerText ++
}, 1000);

function startClock() {
    let ticker = setInterval(function() {
        counter.innerText ++
    }, 1000);
}




// incrementing counter
plusButton.addEventListener("click", ()=> {
    counter.innerText ++
});

// decrementing counter
minusButton.addEventListener("click", ()=> {
    counter.innerText --
});



// let paused = false
// pauseButton.addEventListener("click", ()=> {
    
//     if(paused === false) {
//         clearInterval(ticker)
//         pauseButton.innerText = "resume"
//         paused = true
 
//     } else {
//         ticker
//         pauseButton.innerText = "pause"
//         paused = false
   
//         // ticker
//     }
// });

// pauseButton.addEventListener("click", ()=> {
//     function isPaused(n) {
//         return n % 2 != 0;
//     }

//     buttonPressCounter ++

//     if isPaused(buttonPressCounter) {
//         window.clearInterval(ticker)
//         pauseButton.innerText = "resume"
//     }
// });

pauseButton.addEventListener("click", ()=> {
    if (pauseButton.innerText === "pause") {
        pauseButton.innerText = "resume"
        clearInterval(ticker)
    } else {
        ticker = setInterval(function() {
            counter.innerText++;
        }, 1000);
        pauseButton.innerText = "pause"
    }

});

