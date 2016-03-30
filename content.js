function getVideo()
{
	var vid = document.getElementsByClassName("xm2-mp4")[0];
	window.location.href = vid.src.replace("http", "https");
}

window.onload = function(){if(confirm("Do you want to download this video?"))getVideo();};