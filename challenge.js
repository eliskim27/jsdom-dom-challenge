// all constants
    const counter = document.getElementById('counter')
    const minus = document.getElementById('minus')
    const plus = document.getElementById('plus')
    const heart = document.getElementById('heart')
    const pause = document.getElementById('pause')
    const likesList = document.getElementsByClassName('likes')[0]
    const commentForm = document.getElementById('comment-form')
    const commentList = document.getElementById('list')

    let likesObj = {}

// starts counter
let timer = setInterval(function(){
    counter.innerText = parseInt(counter.innerText) + 1
},1000);

// plus, minus, heart, pause
document.body.addEventListener('click',function(e){
    // minus (cant go below 0)
    if (e.target.id === 'minus'){
        if (counter.innerText === "0"){
        } else {
            counter.innerText = parseInt(counter.innerText) - 1
        }
    // plus
    } else if (e.target.id === 'plus'){
        counter.innerText = parseInt(counter.innerText) + 1
    // heart
    } else if (e.target.id === 'heart'){
        createLike(e)
        // pause
    } else if (e.target.id === 'pause'){
        pauseCounter(timer)
    } else if (e.target.id === 'resume'){
        resumeCounter(timer)
    }
})

// like button
function createLike(e){
    if (Object.keys(likesObj).includes(counter.innerText)){
        likesObj[`${counter.innerText}`] += 1
        let likedLi = document.querySelector(`li[data-number="${counter.innerText}"`)
        console.log(likedLi)
        likedLi.innerText = `${counter.innerText} has been liked ${likesObj[`${counter.innerText}`]} times`
    } else {
        likesObj[`${counter.innerText}`] = 1
        let newLi = document.createElement('li')
        newLi.dataset.number = `${counter.innerText}`
        newLi.innerText = `${counter.innerText} has been liked ${likesObj[`${counter.innerText}`]} time`
        likesList.append(newLi)
    }
}

function pauseCounter(timer){
        clearInterval(timer)
        minus.disabled = true
        plus.disabled = true
        heart.disabled = true
        pause.innerText = "resume"
        pause.id = "resume"
}

function resumeCounter(timer){
    timer = setInterval(function(){
        counter.innerText = parseInt(counter.innerText) + 1
    },1000);
    minus.disabled = false
    plus.disabled = false
    heart.disabled = false
    pause.innerText = "pause"
    pause.id = "pause"
}

// add comment
commentForm.addEventListener('submit', function (e){
    e.preventDefault()
    let userInput = document.getElementById('comment-input')
    let newComment = document.createElement('p')
    if (userInput.value === ""){
    } else {
        newComment.innerText = `- ${userInput.value}`
        commentList.append(newComment)
    }
    commentForm.reset()
})