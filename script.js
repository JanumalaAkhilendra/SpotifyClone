console.log('welcome to spotify')
//Initialize the variables
let songIndex = 0 ;
let audioElement = new Audio("playlist/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let progressbar = document.getElementById("progressbar");
let songitem = Array.from(document.getElementsByClassName("itemnumbers"));

let songs =[
    {songname:'malam-pitta',filepath:"playlist/1.mp3", coverpath:"covers/1.jpg"},
    {songname:'Cold [NEFFEX]',filepath:"playlist/2.mp3", coverpath:"covers/2.jpg"},
    {songname:'Dochestha',filepath:"playlist/3.mp3", coverpath:"covers/3.jpg"},
    {songname:'Freak Pilla',filepath:"playlist/4.mp3", coverpath:"covers/4.jpg"},
    {songname:'Hey Akhil',filepath:"playlist/5.mp3", coverpath:"covers/5.jpg"},
    {songname:'Mehbooba',filepath:"playlist/6.mp3", coverpath:"covers/6.jpg"},
    {songname:'Ninnu Chudakunda',filepath:"playlist/7.mp3", coverpath:"covers/7.jpg"},
    {songname:'Padessavae',filepath:"playlist/8.mp3", coverpath:"covers/8.jpg"},
    {songname:'Raavana',filepath:"playlist/9.mp3", coverpath:"covers/9.jpg"},
    {songname:'Swing Zara',filepath:"playlist/10.mp3", coverpath:"covers/10.jpg"},
];


songitem.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
});    


//listen to events
function playmusic(){
    console.log("clicked");
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');    
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add('fa-play');
    }
};


audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressbar.value = progress;
})

progressbar.addEventListener('change',()=>{
    audioElement.currentTime = progressbar.value * audioElement.duration/100;
})

const makeallplays = ()=>{
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
        element.classList.add("fa-play");
        element.classList.remove("fa-pause");
    })
}


Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        makeallplays();
        audioElement.src = `playlist/${songIndex+1}.mp3`;
        audioElement.currentTime =0;
        audioElement.play();
        element.classList.remove("fa-play");
        element.classList.add('fa-pause');
        
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src = `playlist/${songIndex+1}.mp3`;
    audioElement.currentTime =0;
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add('fa-pause');

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src = `playlist/${songIndex+1}.mp3`;
    audioElement.currentTime =0;
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add('fa-pause');

})

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
