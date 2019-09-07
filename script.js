// MUSIC PLAYER
var player = document.getElementById('player');
var audioSrc = document.getElementById('audioSrc');
var audioPlayer = document.getElementById('audio_player');
var playlist = document.getElementsByClassName('playBtn');
var title = document.getElementById('title');

var playTrack = document.getElementById('play');
var pauseTrack = document.getElementById('pause');
/*
btn1.addEventListener('click', play);
btn2.addEventListener('click', play);
*/

//LOOP THROUGH SONGS AND ADD EVENTLTISTNER
for(i = 0; i < playlist.length; i++){
    playlist[i].innerHTML = playlist[i].value;
    playlist[i].addEventListener('click', play);

}

console.log(playlist.length);



function play(){
    audioSrc.src = this.value;
    console.log(audioSrc.src);
    title.innerHTML = this.value;
    audioPlayer.load();
    audioPlayer.play();
}

playTrack.addEventListener('click', function(){
    audioPlayer.play();
});

pauseTrack.addEventListener('click', function(){
    audioPlayer.pause();
});
