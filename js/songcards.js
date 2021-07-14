document.addEventListener("DOMContentLoaded", function(e){
const homeButton = document.querySelector("#home");
const songsButton = document.querySelector("#songs");
const coursesButton = document.querySelector("#courses");
const welcome = document.querySelector(".welcome");
const songlist = document.querySelector(".songlist");
const songlistWrapper = document.querySelector(".songlist .content-wrapper")
const courses = document.querySelector(".courses")
const getSongs = async function () {
    const res = await fetch ("https://gist.githubusercontent.com/gerardguydavis/3469c29b9bbb3017bd2c873f21434009/raw/389c00c5b2301e5626ed27ae7c5eecf46c9970c6/songlist.json");
    const songData = await res.json();
    for (let song of songData) {
        songsData.push(song);
    }
    showSongs(songData);
}
const songsData = []
console.log(songsData);

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
    const songSubTitle = document.createElement("p");
    const songArtist = document.createElement("p");
    const songSubArtist = document.createElement("p");
    const difficulties = document.createElement("div");

    songWrap.className = "content-wrapper";
    card.className = "normal-song";
    songArticle.className = "song";
    jacket.className = "jacket";
    songInfo.className = "song-info";
    genre.className = "genre";
    songTitle.className = "song-title";
    songSubTitle.className = "subtitle";
    songArtist.className = "song-artist";
    songSubArtist.className = "sub-artist";
    difficulties.className = "difficulties";

    card.style.zIndex=i--;
    card.addEventListener("mouseover", function () {
        card.style.zIndex=100;
        playSample(`${song.songId}`)
    });
    card.addEventListener("mouseout", function() {
        stopSample(`${song.songId}`)
        i = 99;
        for (song of songsData) {
            card.style.zIndex=i--;
        }
    });

    card.classList.add = `song-pack-${song.songPack}`
    jacket.innerHTML = `<img ${song.jacket}>`;
    genre.innerText = `${song.genre}`;
    songTitle.innerText = `${song.songTitle}`;
    songSubTitle.innerText = `${song.subTitle}`;
    songArtist.innerText = `${song.songArtist}`;
    songSubArtist.innerText = `${song.subArtist}`;
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

    if (song.subTitle === 0) {
        if (song.subArtist === 0) {
        songInfo.append(genre, songTitle, songArtist, difficulties);
        } else if (song.subArtist !== 0) {
        songInfo.append(genre, songTitle, songArtist, songSubArtist, difficulties)
        }
    }
    else if (song.subTitle !== 0) {
        songTitle.classList.add("hassub");
        songArtist.classList.add("subabove");
        if (song.subArtist === 0) {
        songInfo.append(genre, songTitle, songSubTitle, songArtist, difficulties);
        } else if (song.subArtist !== 0) {
        songInfo.append(genre, songTitle, songSubTitle, songArtist, songSubArtist, difficulties);
        }
    }
    songArticle.append(jacket, songInfo);
    card.append(songArticle);
    songWrap.append(card);
    songlist.append(songWrap);
}
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
});