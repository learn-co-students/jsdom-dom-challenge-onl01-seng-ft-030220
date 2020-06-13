document.addEventListener("DOMContentLoaded", function() {
  const plus = document.getElementById("plus")
  const minus = document.getElementById("minus")
  const heart = document.getElementById("heart")
  const counter = document.getElementById("counter")
  const likes = document.getElementsByClassName("likes")
  const commentForm = document.getElementById("comment-form")
  let comment = document.getElementById("list")
  const submit = document.getElementById("submit")
  let pause = document.getElementById("pause")
  let paused = false
  function startCounter() {
      return setInterval(increaseCounter, 1000)
  }
  let currentTimer = startCounter()
  /*toggle state */
  function toggleState(){
  plus.disabled === false ? plus.disabled = true : plus.disabled = false
  minus.disabled === false ? minus.disabled = true : minus.disabled = false
  heart.disabled === false ? heart.disabled = true : heart.disabled = false
  likes.disabled === false ? likes.disabled = true : likes.disabled = false
  }
  pause.addEventListener("click", function(e){
      if (paused){
          toggleState()
          currentTimer = startCounter()
          e.target.innerHTML = "Paused"
          paused = false
      } else {
          toggleState()
          clearInterval(currentTimer)
          e.target.innerHTML = "Resume"
          paused = true
      }
  })
  function increaseCounter(){
      const timeCounter = parseInt(counter.innerText)
      counter.innerHTML = timeCounter +1
      renderLikes()
  }
  plus.addEventListener("click", function(e){
      increaseCounter()
      renderLikes()
  })
  function decreaseCounter(){
      const timeCounter = parseInt(counter.innerText)
      counter.innerHTML = timeCounter -1
  }
  minus.addEventListener("click", function(e){
      decreaseCounter()
  })
  commentForm.addEventListener("submit", function(e){
      e.preventDefault()
      let commentInput = document.getElementById("comment-input")
      let newComment = document.createElement("p")
      newComment.innerHTML = `${commentInput.value}`
      comment.appendChild(newComment)
      commentInput.value = ""
  })

  const numOfTimes = {}

  heart.addEventListener("click", (e) => {
    const count = counter.innerText
    if (!numOfTimes[count]) {
        numOfTimes[count] = 1 
    } else {
        numOfTimes[count]++
    }
  })

  function renderLikes() {
    const count = counter.innerText
    const str = numOfTimes[count] ? numOfTimes[count] : 0
    likes[0].innerText = `${count} was liked ${str} time(s).`
  }

})

//   like.addEventListener("click", (e) => {
//     let count = counter.innerText;
//     let numOfTimes = 1
//     let likes = document.getElementsByClassName("likes");
//     if(likes[0].innerText.includes(count)) {
//       numOfTimes++;
//       likes[0].innerText = `${count} was liked ${numOfTimes} time(s).`;
//     } else {
//       likes.innerHTML += `<li> ${count} was liked ${numOfTimes} time(s).`;
//     }
//   });

// what is innerHTML vs innerText
// https://medium.com/better-programming/whats-best-innertext-vs-innerhtml-vs-textcontent-903ebc43a3fc
// https://www.w3schools.com/jsref/prop_select_disabled.asp
// functions fors
// increasing
// decreasing
// starting counter when page hit
// add event list for increasing and decreasing
// add event listener for Pause - toggle state
// like button - toggle state
// form for comment - grab data from all fields and append to page
// if plus.disabled === false
// plus.disbaled = true : plus.disabled = false



// FEATURE 1 - A Counter that increases by 1 each second
// 1) As a user, I should see the timer increment every second once the page has loaded.
// DOOOOONNE 


// FEATURE 2 - Plus and Minus buttons that increment or decrement the counter
// 2) As a user, I can manually increment and decrement the counter using the plus and minus buttons.
// 4) As a user, I can pause the counter, which should
//         pause the counter
//         disable all buttons except the pause button
//         the pause button should then show the text "resume."
//         When 'resume' is clicked, it should restart the counter and re-enable the buttons.


// FEATURE 3 - A 'like' button (❤️) that adds a 'like' for the number that is currently displayed by the timer
// 3) As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.


// FEATURE 4 - A comment box that adds comments when submitted
// 5) As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."



// setTimeout setInterval clearinterval

