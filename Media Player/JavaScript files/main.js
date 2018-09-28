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

var audio = document.getElementsByClassName("audio_button");
var i;

for (i = 0; i < audio.length; i++) {
    audio[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var audiocontent = this.nextElementSibling;
        if (audiocontent.div.audio_content.display === "block") {
            audiocontent.div.audio_content.display = "none";
        } else {
            audiocontent.div.audio_content.display = "block";

        }
    });
}