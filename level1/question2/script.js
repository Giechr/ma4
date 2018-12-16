$(function() {
	$.getJSON('https://jsonplaceholder.typicode.com/todos', 
	
	function (data) {
		
		var template = $('#dataTemplate') .html();
		var html = Mustache.to_html(template, data);
		$('#toDoo').html(html);

		var details = document.getElementById('toDoo');
		details.innerHTML += "<span>ID: " + data.id + " </span>";
		details.innerHTML += "<span>User ID:   " + data.userId + " </span>";
		details.innerHTML += "<span>Title: " + data.title + " </span>";
		details.innerHTML += "<span>Completed:   " + data.completed + " </span>";
		 	console.log(data);

			
	});
});
