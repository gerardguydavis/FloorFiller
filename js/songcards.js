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