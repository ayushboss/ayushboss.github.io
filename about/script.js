var database = firebase.database();
var list = document.getElementById('post_list_cardview');

function readingAllChildren() {
	return database.ref('/posts').once('value').then(function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
			console.log(childSnapshot.val().title + "\n" + childSnapshot.val().description + "\n" + childSnapshot.val().content);
			var entry = document.createElement('li');
			entry.appendChild(document.createTextNode(childSnapshot.val().title));
			entry.appendChild(document.createTextNode(childSnapshot.val().description));
			document.getElementById('post_list_cardview').appendChild(entry);
		});
	});
}

readingAllChildren();

// NEED TO CREATE SOME SORT OF CARD VIEW TO DISPLAY POSTS!!!