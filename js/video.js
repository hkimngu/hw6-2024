var video = document.querySelector(".video");

window.addEventListener("load", function() {
	console.log("Good job opening the window");

	video.autoplay = false;
	console.log("Auto play is set to false");

	video.loop = false;
	console.log("Loop is set to false");
});

document.querySelector("#play").addEventListener("click", function() {
    console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
    video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate - 0.1;
	console.log("Slow down video");
	console.log("Speed is", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate + 0.1;
	console.log("Speed up video");
	console.log("Speed is", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime = video.currentTime + 10;
	if (video.currentTime == video.duration) {
		video.currentTime = video.currentTime - video.duration;
	};
	console.log("Skip ahead");
	console.log("Current video time is", video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		document.querySelector('#mute').innerHTML = "Mute";
	}
	else {
		video.muted = true;
		document.querySelector('#mute').innerHTML = "Unmute";
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	video.volume = document.getElementById("slider").value / 100;
	document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";
	console.log("volume", video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
    document.querySelector(".video").classList.add('oldSchool');
});

document.querySelector("#orig").addEventListener("click", function() {
    document.querySelector(".video").classList.remove('oldSchool');
});




