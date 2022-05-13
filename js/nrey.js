let getlistURL = "https://raw.githubusercontent.com/Nytuo/MPPC/main/urls.json";
fetch(getlistURL).then((response) => {
	return response.json();
}).then((data) => {
	var urls = data
	document.cookie = "userID=252299";
	var AllOthers = []
	setTimeout(() => {
		console.log("here")
		document.querySelectorAll('.userpicture').forEach(function (el) {
			let currentID = el.src.match(/25[0-9]{4}/g)
			console.log(currentID)
			if (!el.classList.contains("reyged")) {
				console.log(urls[currentID])
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
	}, 1000)

	function getCookie(cname) {
		let name = cname + "=";
		let decodedCookie = decodeURIComponent(document.cookie);
		let ca = decodedCookie.split(';');
		for (let i = 0; i < ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}
});