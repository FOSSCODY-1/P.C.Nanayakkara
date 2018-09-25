var video = document.getElementsByClassName("video_button");
var i;

for (i = 0; i < video.length; i++) {
    video[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var videocontent = this.nextElementSibling;
        if (videocontent.style.display === "block") {
            videocontent.style.display = "none";
        } else {
            videocontent.style.display = "block";
        }
    });
}

var audio = document.getElementsByClassName("audio_button");
var i;

for (i = 0; i < video.length; i++) {
    audio[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var audiocontent = this.nextElementSibling;
        if (audiocontent.style.display === "block") {
            audiocontent.style.display = "none";
        } else {
            videocontent.style.display = "block";
        }
    });
}