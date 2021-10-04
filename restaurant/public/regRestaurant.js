$(document).ready(function() {
	$('#register-restaurant').on('submit', function(e) {
		e.preventDefault();
		
		var name = $('#name').val();
		var loc = $('#loc').val();
		var email = $('#email').val();
		var username = $('#username').val();
		var password = $('#password').val();
		var confirm = $('#confirm').val();
		var restid = $('#restid').val();

		var checkUsername = 0;

		// check if password is equal to confirm 
		if(password != confirm) {
			document.getElementById("check").innerHTML = "<span style='color: red;'>Password and confirm don't match!</span>";
		}

		// make sure the user name has not already been chosen by another user in database
		else if(checkUsername != 1) {
			var exists = 0;

			$.ajax({
			url: "https://api.mlab.com/api/1/databases/easybites/collections/restaurants?apiKey=BVhAvkK6LEcUOvFiQ9Axe4IqJWXvCAt9"
			}).done(function(data) {

				$.each(data, function(key, data) {
					if(data.username == username) {		// if there is a username that already exists
						exists = 1;
						document.getElementById("taken").innerHTML = "<span style='color: red;'>Username taken! Please choose another one.</span>";
					}
				});

				if(exists != 1) {

					$.ajax({
						url: "https://api.mlab.com/api/1/databases/easybites/collections/restaurants?apiKey=BVhAvkK6LEcUOvFiQ9Axe4IqJWXvCAt9", 
							data: JSON.stringify({
				"name": name, 
				"loc": loc, 
				"email": email, 
				"username": username, 
				"password": password, 
				"confirm": confirm, 
				"restid": restid
						}), 
					type: "POST", 
					contentType: "application/json", 
						success: function(data) {
							var link = "restaurantDashboard.html?username=";
							link += username;
							link += "&id=";
							link += restid;
							window.location.href=link
				
						}, 
						error: function(xhr, status, err) {
						console.log(err);
						}
					});


				}
			});	

		}

	});
});