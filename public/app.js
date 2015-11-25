
function createObjectComment(){

	var comment = document.getElementById('comment').value;

	var data = JSON.stringify({
  		"text": comment
	});

	var xhr = new XMLHttpRequest();
	xhr.withCredentials = true;

	xhr.addEventListener("readystatechange", function () {
  		if (this.readyState === this.DONE) {
    		console.log(this.responseText);
  		}
	});

	xhr.open("PUT", "https://[yourappid].stamplayapp.com/api/cobject/v1/:cobjectId/:id/comment");
	xhr.setRequestHeader("accept", "application/json");
	xhr.setRequestHeader("content-type", "application/json");
	xhr.send(data);
}