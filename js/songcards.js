const homeButton = document.querySelector("#home");
const songsButton = document.querySelector("#songs");
const coursesButton = document.querySelector("#courses");
const welcome = document.querySelector(".welcome");
const songlist = document.querySelector(".songlist");
const courses = document.querySelector(".courses")
const songCards = []

let collection = document.getElementsByClassName("normal-song");
let i = 99;
for (const card of collection) {
    card.style.zIndex=i--;
    card.addEventListener("mouseover", function () {
        card.style.zIndex=100;
    });
    card.addEventListener("mouseout", function() {
        i = 99;
        for (const card of collection) {
            card.style.zIndex=i--;
        }
    })
}

function playSample(soundobj) {
    let thisSound=document.getElementById(soundobj);
    thisSound.play();
}

function stopSample(soundobj) {
    const thisSound=document.getElementById(soundobj);
    thisSound.pause();
    thisSound.currentTime = 0;
}

homeButton.addEventListener("click", function() {
    if (welcome.classList.contains("hide")) {
        songlist.classList.add("hide");
        courses.classList.add("hide");
        welcome.classList.remove("hide");
    } 
});

songsButton.addEventListener("click", function() {
    if(songlist.classList.contains("hide")) {
        welcome.classList.add("hide");
        courses.classList.add("hide");
        songlist.classList.remove("hide");
    }
})

coursesButton.addEventListener("click", function() {
    if(courses.classList.contains("hide")){
        welcome.classList.add("hide");
        songlist.classList.add("hide");
        courses.classList.remove("hide");
    }
})