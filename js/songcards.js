document.addEventListener("DOMContentLoaded", function(e){
const homeButton = document.querySelector("#home");
const songsButton = document.querySelector("#songs");
const coursesButton = document.querySelector("#courses");
const welcome = document.querySelector(".welcome");
const songlist = document.querySelector(".songlist");
const songlistWrapper = document.querySelector(".songlist .content-wrapper")
const courses = document.querySelector(".courses")
const getSongs = async function () {
    const res = await fetch ("https://gist.githubusercontent.com/gerardguydavis/3469c29b9bbb3017bd2c873f21434009/raw/3e1a8c8df66252ff2a47ba6b308882c55fdd1bee/songlist.json");
    const songData = await res.json();
    for (let song of songData) {
        songsData.push(song);
    }
    showSongs(songData);
}
const songsData = [];

getSongs();

const showSongs = function (songsData) {
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
    const songSample = document.getElementById(`${song.sampleId}`)

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

    /*function playSample(song) {
        let thisSound=this.sample;
        thisSound.play(this.sample);
    }

    function stopSample(song) {
        const thisSound=this.sample;
        thisSound.pause(this.sample);
        thisSound.currentTime = 0;
    }*/

    /*card.setAttribute("onmouseenter", "`playSample('${songSample}')");
    card.setAttribute("onmouseleave", "`stopSample('${songSample}')`");*/
    card.style.zIndex=i--;
    card.addEventListener("mouseover", function () {
        card.style.zIndex=100;
        songSample.play;
    });
    card.addEventListener("mouseout", function() {
        i = 99;
        for (song of songsData) {
            card.style.zIndex=i--;
        }
        songSample.pause;
        songSample.currentTime = 0;
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

   let songTitleTest = song.songTitle;
   let songSubTitleTest = song.subTitle;
   let songArtistTest = song.songArtist;
   let songTitleCount = songTitleTest.toString().split("");
   let songSubTitleCount = songSubTitleTest.toString().split("");
   let songArtistCount = songArtistTest.toString().split("");
   let titleLength = songTitleCount.length;
   let subLength = songSubTitleCount.length;
   let artistLength = songArtistCount.length;

   if (titleLength > 22) {
       genre.classList.add("long-title");
   }

   if (subLength > 20) {
       songSubTitle.classList.add("long-subTitle");
   }

   if (artistLength > 22) {
       genre.classList.add("long-title");
   }

   if (songSubTitle.classList.contains("long-subTitle")) {
    if (genre.classList.contains("long-title")) {
        songTitle.classList.add("wordy");
    }
}

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

/*function stopSample(soundobj) {
    const thisSound=document.getElementById(soundobj);
    thisSound.pause();
    thisSound.currentTime = 0;
}*/

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