var video = document.getElementsByClassName("video_button");
var i;

for (i = 0; i < video.length; i++) {
    video[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var videocontent = this.nextElementSibling;
        if (videocontent.stylesheet.display === "block") {
            videocontent.stylesheet.display = "none";
        } else {
            videocontent.stylesheet.display = "block";
        }
    });
}

var audio = document.getElementsByClassName("audio_button");
var i;

for (i = 0; i < audio.length; i++) {
    audio[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var audiocontent = this.nextElementSibling;
        if (audiocontent.stylesheet.display === "block") {
            audiocontent.stylesheet.display = "none";
        } else {
            audiocontent.stylesheet.display = "block";
        }
    });
}