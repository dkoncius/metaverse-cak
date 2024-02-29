const buttons = document.querySelectorAll("button")
const hoverSound = new Audio("sounds/hover-sound.mp3");
const clickSound = new Audio("sounds/click-sound.mp3");
const audioButton = document.querySelector(".audio-button")
const closeButtons = document.querySelectorAll(".close")
const tabs = document.querySelectorAll(".tab")
const header = document.querySelector("header")
let soundEnabled = false

for(let button of closeButtons){
    
    button.addEventListener("click", function(){
        for(let tab of tabs) {
            tab.classList.add("hide")
        }
    
        header.classList.remove("hide")
    })

}

for(let i = 0;  i < buttons.length; i++){
    // Hover function
    buttons[i].addEventListener("mouseover", function(){
        if(soundEnabled){
            hoverSound.currentTime = 0;
            hoverSound.play();
        }
    })

    // Click function
    buttons[i].addEventListener("click", function(){
        header.classList.add("hide")
        tabs[i].classList.remove("hide")

        // Tab animation
        tabs[i].style.opacity = 0
        tabs[i].style.transition = "0.3s"

        setTimeout(function(){
            tabs[i].style.opacity = 1
        }, 100)

        if(soundEnabled){
            clickSound.currentTime = 0;
            clickSound.play();
        }
    })
}

// Mute and unmute audio
audioButton.addEventListener("click", function(){
    if(soundEnabled) {
        audioButton.src = "assets/audio-mute.png"
        soundEnabled = false
    } else {
        audioButton.src = "assets/audio.png"
        soundEnabled = true
    }

    console.log(soundEnabled)
})


// Animation
const intro = document.querySelector(".intro")

setTimeout(function(){
    intro.style.height = "200px"
}, 1000)

setTimeout(function(){
    intro.style.opacity = 1
}, 1400)