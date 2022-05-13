let getlistURL = "https://raw.githubusercontent.com/Nytuo/MPPC/main/urls.json";
fetch(getlistURL).then((response) => {
	return response.json();
}).then((data) => {
	var urls = data
	var ID = document.createElement("p");
	ID.innerHTML = "ID: " + document.querySelector(".userpicture").src.match(/25[0-9]{4}/g);
	ID.style.backgroundColor = "rgba(0,0,0,0.5)";
	ID.style.color = "white";
	ID.style.position = "fixed";
	ID.style.top = "97vh";
	ID.style.left = "95vw";
	ID.style.zIndex = "9999";
	document.body.appendChild(ID);
		document.querySelectorAll('.userpicture').forEach(function (el) {
			if (!el.classList.contains("reyged")) {
				let currentID = el.src.match(/25[0-9]{4}/g)
				if (urls[currentID] != undefined) {
					var image = urls[currentID]
					var width = el.offsetWidth;
					var height = el.offsetHeight;
					el.classList.add("reyged");
					el.setAttribute("src", image);
					el.style.width = width + "px";
					el.style.height = height + "px";
				}
			}
		});
});