var database = firebase.database();
var list = document.getElementById('post_list_cardview');
var recent_posts = document.getElementById('recent_posts');
var l = 0;

function updateViewCount() {
	database.ref('/visit_count').set({
		visit_count: l + 1
	});
}

function readingAllChildren() {

	database.ref('/visit_count').once('value').then(function(snapshot) {
		l = snapshot.val().visit_count;
		console.log("view count: " + l);
		updateViewCount();

		var viewCountParagraph = document.getElementById("view_count_p");
		viewCountParagraph.appendChild(document.createTextNode("View Count: " + l.toString()));
	})

	return database.ref('/posts').once('value').then(function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
			var link = document.createElement('a');
			//link.href= "../blog/posts/" + childSnapshot.key + ".html";
			var card = document.createElement('div');

			var rDate = childSnapshot.val().date;
			
			var entry = document.createElement('a');

			entry.style.fontSize = "24px";
			
			entry.href="blog/posts/" + childSnapshot.key + "/" + childSnapshot.key + ".html";
			
			var tag = document.createElement('a');
			var subEntry = document.createElement('p');
			var dateEntry = document.createElement('p');
			var tagC = document.createElement('div');

			entry.appendChild(document.createTextNode(childSnapshot.val().title));
			subEntry.appendChild(document.createTextNode('\n' + childSnapshot.val().description));
			dateEntry.appendChild(document.createTextNode('\n' + rDate));
			tag.appendChild(document.createTextNode('\n' + "Bosnia"));

			entry.style.color = "#7cafc2";

			entry.style.paddingTop = "10px";
			tag.style.paddingLeft = "10px";
			//subEntry.style.paddingLeft = "10px";
			subEntry.style.paddingTop = "5px";
			dateEntry.style.paddingRight = "10px";

			tag.style.color = "grey";

			tag.href = "https://cnn.com";
			tag.style.textDecoration = "none";

			tagC.style.backgroundColor = "#282828";
			tagC.style.borderRadius = "5px";
			//tagC.style.padding = "2px 6px";
			//tagC.style.margin = "0 4px";
			tagC.style.width = "70px";

			tagC.appendChild(tag);

			dateEntry.style.cssFloat = "right";

			card.appendChild(dateEntry);
			card.appendChild(entry);
			card.appendChild(tagC);
			card.appendChild(subEntry);
			//card.appendChild(document.createElement('hr'));
			//card.style.border = "thin dashed white";

			link.appendChild(card);

			var h = document.createElement('hr');
			h.style.color = "white";

			link.appendChild(h);

			link.style.textDecoration = "none";
			link.style.color = "white";

			recent_posts.appendChild(link);
		});
	});
}
readingAllChildren();