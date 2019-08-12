var database = firebase.database();
var list = document.getElementById('post_list_cardview');

function readingAllChildren() {
	return database.ref('/posts').once('value').then(function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
			console.log(childSnapshot.val().title + "\n" + childSnapshot.val().description + "\n" + childSnapshot.val().content);
			var entry = document.createElement('li');
			var subEntry = document.createElement('li');
			entry.appendChild(document.createTextNode(childSnapshot.val().title));
			subEntry.appendChild(document.createTextNode('\n' + childSnapshot.val().description));
			entry.appendChild(subEntry);
			list.appendChild(entry);
		});
	});
}
readingAllChildren();