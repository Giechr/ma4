$(function() {
	$.getJSON('https://jsonplaceholder.typicode.com/todos', 
	
	function (data) {
		
		var template = $('#dataTemplate') .html();
		var html = Mustache.to_html(template, data);
		$('#toDoo').html(html);

		var details = document.getElementById('toDoo');
		details.innerHTML += "<span>ID: " + data[1].id + " </span>";
		details.innerHTML += "<span>User ID:   " + data[1].userId + " </span>";
		details.innerHTML += "<span>Title: " + data[1].title + " </span>";
		details.innerHTML += "<span>Completed:   " + data[1].completed + " </span>";
		 	console.log(data);

			
	});
});
