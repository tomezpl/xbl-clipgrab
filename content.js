function getVideo()
{
	var vid = document.getElementsByClassName("xm2-mp4")[0];
	window.location.href = vid.src.replace("http:", "https:");
}

var interval = setInterval(pageHasLoaded, 3000);

window.onload = pageHasLoaded;

function pageHasLoaded(){
	if(document.getElementsByClassName("xm2-mp4")[0].src.indexOf("gameclipscontent-") == -1)
	{
		interval = setInterval(3000, pageHasLoaded);
	}
	else
	{
		if(confirm("Do you want to download this video?"))
			getVideo();
		else
			clearInterval(interval);
	}
}