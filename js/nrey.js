document.cookie = "userID=252298";
setTimeout(() => {
	console.log("here")
	document.querySelectorAll('.userpicture').forEach(function (el) {
		console.log('REYged');
		if (!el.classList.contains("reyged")) {
			console.log(document.cookie[document.cookie.indexOf("userID")])
			var image = "https://lms.univ-cotedazur.fr/pluginfile.php/"+getCookie("userID")+"/user/icon/fordson/f3"
			var width = el.offsetWidth;
			var height = el.offsetHeight;
			el.classList.add("reyged");
			el.setAttribute("src", image);
			el.style.width = width + "px";
			el.style.height = height + "px";
		}

	});
}, 1000)

function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for(let i = 0; i <ca.length; i++) {
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
