var database = firebase.database();
function readDataSnapshot() {
	return database.ref('/posts').once('value').then(function(snapshot) {
		var testNumber = snapshot.val().test;
		console.log(testNumber);
	});
}

function attemptAtReadingAllChildren() {
	return database.ref('/posts').once('value').then(function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
			console.log(childSnapshot.val().title + "\n" + childSnapshot.val().description + "\n" + childSnapshot.val().content);
		});
	});
}


readDataSnapshot();
attemptAtReadingAllChildren();