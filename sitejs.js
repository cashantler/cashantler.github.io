function resizeIframe(obj) {
	obj.style.height = 0;
	obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
	obj.style.width = 0;
	obj.style.width = obj.contentWindow.document.body.scrollWidth + 'px';
}

function cashtext() {
	//var about = document.getElementById('about');
	//var links = document.getElementById('links');
	var rand = Math.floor(Math.random() * (7 - 1) + 1);
	switch(rand)
		{
			case(1):
				document.getElementById("text").innerHTML = document.getElementById("text").innerHTML + "\n$$";
				break
			case(2):
				document.getElementById("text").innerHTML = document.getElementById("text").innerHTML + "$$$$$$$$$$";
				break
			case(3):
				document.getElementById("text").innerHTML = document.getElementById("text").innerHTML + "\n$$$$$$$";
				break
			case(4):
				document.getElementById("text").innerHTML = document.getElementById("text").innerHTML + "$$$$$$$";
				break
			case(5):
				document.getElementById("text").innerHTML = document.getElementById("text").innerHTML + "\n$$$$$$";
				break
			default:
				document.getElementById("text").innerHTML = document.getElementById("text").innerHTML + "$";
				break

		}
}
