document.addEventListener("DOMContentLoaded", function(e){
const homeButton = document.querySelector("#home");
const songsButton = document.querySelector("#songs");
const coursesButton = document.querySelector("#courses");
const welcome = document.querySelector(".welcome");
const songlist = document.querySelector(".songlist");
const songlistWrapper = document.querySelector(".songlist .content-wrapper")
const courses = document.querySelector(".courses")
const getSongs = async function () {
    const res = await fetch ("https://gist.githubusercontent.com/gerardguydavis/3469c29b9bbb3017bd2c873f21434009/raw/3440f4120a565bb8938df9284a140361cde8704c/songlist.json");
    const songData = await res.json();
    for (let song of songData) {
        songsData.push(song);
    }
    showSongs(songData);
}
const songsData = []
console.log(songsData);

/*const createSong = function () {
    const createCard = document.createElement("a");
    createCard.setAttribute("onmouseenter", `playSample('${song.songId}')`);
    createCard.setAttribute("onmouseleave", `stopSample('${song.songId}')`);
    createCard.className = "normal-song";
    const createSongArticle = document.createElement("article");
    createSongArticle.className = "song";
    const createJacket = document.createElement("figure");
    createJacket.className = "jacket";
    const createSongInfo = document.createElement("div");
    createSongInfo.className = "song-info";
    const createGenre = document.createElement("p");
    createGenre.className = "genre";
    const createSongTitle = document.createElement("p");
    createSongTitle.className = "song-title";
    const createSongArtist = document.createElement("p");
    createSongArtist.className = "song-artist";
    const createDifficulties = document.createElement("div");
    createDifficulties.className = "difficulties";
}*/

getSongs();

const showSongs = function (songData) {
    for (let song of songsData) {
    let i = 99;
    const songWrap = document.createElement("div")
    const card = document.createElement("a");
    const songArticle = document.createElement("article");
    const jacket = document.createElement("figure");
    const songInfo = document.createElement("div");
    const genre = document.createElement("p");
    const songTitle = document.createElement("p");
    const songArtist = document.createElement("p");
    const difficulties = document.createElement("div");

    songWrap.className = "content-wrapper";
    card.className = "normal-song";
    songArticle.className = "song";
    jacket.className = "jacket";
    songInfo.className = "song-info";
    genre.className = "genre";
    songTitle.className = "song-title";
    songArtist.className = "song-artist";
    difficulties.className = "difficulties";

    card.setAttribute("onmouseenter", `playSample('${song.songId}')`);
    card.setAttribute("onmouseleave", `stopSample('${song.songId}')`);
    card.style.zIndex=i--;
    card.addEventListener("mouseover", function () {
        card.style.zIndex=100;
    });
    card.addEventListener("mouseout", function() {
        i = 99;
        for (song of songsData) {
            card.style.zIndex=i--;
        }
    });

    card.classList.add = `song-pack-${song.songPack}`
    jacket.innerHTML = `<img ${song.jacket}>`;
    genre.innerText = `${song.genre}`;
    songTitle.innerText = `${song.songTitle}`;
    songArtist.innerText = `${song.songArtist}`;
    difficulties.innerHTML = `<div class="light">
    <p class="level-name">Fresh</p>
    <p class="level-rank">${song.fresh}</p>
  </div>
  <div class="standard">
    <p class="level-name">Funky</p>
    <p class="level-rank">${song.funky}</p>
  </div>
  <div class="heavy">
    <p class="level-name">Fever</p>
    <p class="level-rank">${song.fever}</p>
  </div>
  <div class="oni">
    <p class="level-name">Frenzy</p>
    <p class="level-rank">${song.frenzy}</p>
  </div>`

    songInfo.append(genre, songTitle, songArtist, difficulties);
    songArticle.append(jacket, songInfo);
    card.append(songArticle);
    songWrap.append(card);
    songlist.append(songWrap);
}
}

const songCards = [];
//let collection = document.getElementsByClassName("normal-song");
/*let i = 99;
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
}*/

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
});