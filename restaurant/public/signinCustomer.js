$(document).ready(function() {
	$('#customer-signin').on('submit', function(e) {
		e.preventDefault();
		 
		var username = $('#username').val();
		var password = $('#password').val();
		var exist = 0;

		$.ajax({
			url: "https://api.mlab.com/api/1/databases/easybites/collections/customers?apiKey=BVhAvkK6LEcUOvFiQ9Axe4IqJWXvCAt9"
			}).done(function(data) {

				$.each(data, function(key, data) {
					if(data.username == username && data.password == password) {
						exist = 1;
						var link = "customerDashboard.html?username=";
						link += username;
						window.location.href=link
					}
					

				});
				if(exist == 0) {
					document.getElementById("check").innerHTML = "<span style='color: red;'>Incorrect username or password!</span>";
				}
				

			});
		});

});	

function getProfile() {
	$.ajax({
		url: "https://api.mlab.com/api/1/databases/easybites/collections/customers?apiKey=BVhAvkK6LEcUOvFiQ9Axe4IqJWXvCAt9"
	}).done(function(data) {
		

		var output = '<div>';
		$.each(data, function(key, data) {
				output += '<div class="well well-lg">';
				output += '<h3>' + data.name +'</h3>';
				output += '<p>' + data.username + '</p>'
				output += '</div>';
	
		
		});
		output += '</div>';
		$('#profile').html(output);

		});

}

