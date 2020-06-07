document.addEventListener('DOMContentLoaded', () => {
  const counter = document.getElementById('counter')
  const pauseButton = document.getElementById('pause')
  let paused = false

  const plusButton = document.getElementById('plus')
  const minusButton = document.getElementById('minus')
  const heartButton = document.getElementById('heart')
  const likes = document.querySelector('ul.likes')

  const comments = document.getElementById('list')
  const commentForm = document.getElementById('comment-form')
  const submitButton = document.getElementById('submit')

  const incrementCounter = () => {
    const current = parseInt(counter.innerHTML)
    counter.innerHTML = current + 1
  }

  const decrementCounter = () => {
    const current = parseInt(counter.innerHTML)
    counter.innerHTML = current - 1
  }

  const startCounter = () => {
    return setInterval(incrementCounter, 1000)
  }

  let interval = startCounter()

  plusButton.addEventListener('click', (e) => {
    incrementCounter()
  })

  minusButton.addEventListener('click', (e) => {
    decrementCounter()
  })

  heartButton.addEventListener('click', (e) => {
    const counterCurrent = parseInt(counter.innerHTML) 
    const like = likes.querySelector(`li[value="${counterCurrent}"]`)
    if (like) {
      const current = parseInt(like.innerHTML.split(' ')[3], 10)
      like.innerHTML = `Number ${counterCurrent} has ${current + 1} likes`
    } else {
      const newLike = document.createElement('li')
      newLike.value = counterCurrent
      newLike.innerText = `Number ${counterCurrent} has 1 like`
      likes.appendChild(newLike)
    }
  })

  const toggleButtons = () => {
    plusButton.disabled === false ? plusButton.disabled = true : plusButton.disabled = false
    minusButton.disabled === false ? minusButton.disabled = true : minusButton.disabled = false
    heartButton.disabled === false ? heartButton.disabled = true : heartButton.disabled = false
    submitButton.disabled === false ? submitButton.disabled = true : submitButton.disabled = false
  }

  pauseButton.addEventListener('click', (e) => {
    if (paused) {
      toggleButtons()
      e.target.innerHTML = 'pause'
      interval = startCounter()
      paused = false
    } else {
      toggleButtons()
      clearInterval(interval)
      e.target.innerHTML = 'resume'
      paused = true
    }
  })

  commentForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const user_field = e.target.querySelector('#user-input')
    const value_field = e.target.querySelector('#comment-input')
    const comment = document.createElement('p')
    comment.innerHTML = `${user_field.value} said: ${value_field.value}`
    comments.appendChild(comment)

    user_field.value = ''
    value_field.value = ''
  })
})