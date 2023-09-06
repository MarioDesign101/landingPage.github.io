video__aboutUs = document.getElementById('video__aboutUs');
mute = document.getElementById('mute')
volume = document.getElementById('volume')
max = document.getElementById('max')

function playPause () {
   if (video__aboutUs.paused) {
    video__aboutUs.play();
    playPause.innnerHTML = "<i class='bi bi-play-circle-fill'></i>"
   } else {
    video__aboutUs.pause();
    playPause.innnerHTML = "<i class='bi bi-pause-circle-fill'></i>"
   }
}

mute.addEventListener("click", function(){
   if(video__aboutUs.muted){
      video__aboutUs.muted = false;
   } else {
      video__aboutUs.muted = true;
   }
});

volume.addEventListener("change", function(){
   video__aboutUs.volume = volume.value;
});

max.addEventListener("click", function(){
   if(video__aboutUs.requestFullScreen){
      video__aboutUs.requestFullScreen();
   }
   else if(video__aboutUs.mozRequestFullScreen){
      video__aboutUs.mozRequestFullScreen();
   }
   else if (video__aboutUs.webkitRequestFullScreen) {
      video__aboutUs.webkitRequestFullScreen();
   }
});