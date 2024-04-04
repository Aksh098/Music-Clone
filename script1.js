console.log("Welcome to spotify");

//initialize the variables

let songIndex = 0;
let audioElement = new Audio('Baarishon mein.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Baarishon Mein - Darshan Raval", filePath: "Baarishon mein.mp3", coverPath: "dzcover/cover1.jpg" },
    { songName: "Mehrama - Darshan Raval", filePath: "Mehrama.mp3", coverPath: "dzcover/cover2.jpg" },
    { songName: "Tu Mileya - Darshan Raval", filePath: "Tu Mileya.mp3", coverPath: "dzcover/cover3.jpg" },
    { songName: "Tera Zikr - Darshan Raval", filePath: "Tera Zikr.mp3", coverPath: "dzcover/cover4.jpg" },
    { songName: "Rabba Mehar Kari - Darshan Raval", filePath: "Rabba Mehar Kari.mp3", coverPath: "dzcover/cover5.jpg" },
    { songName: "Dil Mera Blast - Darshan Raval", filePath: "Dil Mera Blast.mp3", coverPath: "dzcover/cover6.jpg" },
    { songName: "Duniya Chhor Doon - Darshan Raval", filePath: "Duniya Chhor Doon.mp3", coverPath: "dzcover/cover7.jpg" },
    { songName: "Ek Tarfa - Darshan Raval", filePath: "Ek Tarfa.mp3", coverPath: "dzcover/cover8.jpg" },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

//handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    Progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = Progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = '${songIndex+1}.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
        masterSongName.innerText = songs[songIndex].songName;
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if(songIndex >= 9) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = '${songIndex+1}.mp3';
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', () => {
    if(songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    audioElement.src = '${songIndex+1}.mp3';
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})