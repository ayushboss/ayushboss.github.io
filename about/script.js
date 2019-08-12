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
			console.log(childSnapshot.key + " " + childSnapshot.val());
		});
	});
}


readDataSnapshot();
attemptAtReadingAllChildren();