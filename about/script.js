var database = firebase.database();
var list = document.getElementById('post_list_cardview');
var recent_posts = document.getElementById('recent_posts');

function readingAllChildren() {
	return database.ref('/posts').once('value').then(function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
			var card = document.createElement('div');

			console.log(childSnapshot.val().title + "\n" + childSnapshot.val().description + "\n" + childSnapshot.val().content);
			var entry = document.createElement('p');
			var subEntry = document.createElement('p');
			entry.appendChild(document.createTextNode(childSnapshot.val().title));
			subEntry.appendChild(document.createTextNode('\n' + childSnapshot.val().description));
			card.appendChild(entry);
			card.appendChild(subEntry);

			card.style.border = "thick solid #FFFFFF"

			recent_posts.appendChild(card);
			recent_posts.appendChild(document.createElement('hr'))
		});
	});
}
readingAllChildren();