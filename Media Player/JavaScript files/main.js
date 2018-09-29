var video = document.getElementsByClassName("video_button");
var i;

for (i = 0; i < video.length; i++) {
    video[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var videocontent = this.nextElementSibling;
        if (videocontent.div.video_content.display === "block") {
            videocontent.div.video_content.display = "none";
        } else {
            videocontent.div.video_content.display = "block";
        }
    });
}

var vid = document.getElementById("#video1")

function playpause() {
    if (vid.play)
        vid.pause();
    else
        vid.play();
}

function fullscreen() {
    if (vid.width === 1100)
        vid.width = 1300;
    else
        vid.width = 1100;
}

var aud = document.getElementById("audio1");

function play_pause() {
    if (!aud.paused)
        aud.pause();
    else
        aud.play();
}