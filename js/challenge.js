let counter = document.querySelector("#counter")
const plus = document.querySelector("#plus")
const minus = document.querySelector("#minus")
const pause = document.querySelector("#pause")
const love = document.querySelector("#heart")
const submitBtn = document.querySelector("#submit")
const likes = document.querySelector(".likes")

//plus 
plus.addEventListener('click', function(e){
    counter.innerText++;
})


//minus
minus.addEventListener('click', function(e){
    counter.innerText--;
})


// counter every second 
let count = setInterval(function () {
    counter.innerText++; 
}, 1000); 


//pause

pause.addEventListener('click', function(e){
    if (pause.innerText === "pause"){
        pause.innerText = "resume"
        clearInterval(count)
        
        plus.disabled = true;
        minus.disabled = true;
        love.disabled = true; 
        submitBtn.disabled = true;
    }
    else {
        count = setInterval(function () {
            counter.innerText++; 
        }, 1000);
        pause.innerText = "pause"

        plus.disabled = false;
        minus.disabled = false;
        love.disabled = false; 
        submitBtn.disabled = false;
    }

    // love button
    love.addEventListener("click", function(e){
        
        let like = document.createElement('li')
        
        newLike = like.innerText = `${counter.innerText} has been liked`
        likes.appendChild(newLike)
       
    });
    
    // submit comments // button
    submitBtn.addEventListener("click", function(e){
        e.preventDefault();
        let comment = document.querySelector("#comment-form > input[type=text]").value
        commentList.innerHTML += `<li>${comment}</li>`
        document.querySelector("#comment-form").reset();
    });
})