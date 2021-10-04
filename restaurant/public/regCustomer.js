$(document).ready(function() {
	$('#register-customer').on('submit', function(e) {
		e.preventDefault();		
		
		var name = $('#name').val();
		var email = $('#email').val();
		var username = $('#username').val();
		var password = $('#password').val();
		var confirm = $('#confirm').val();
		var adr = $('#adr').val();
		var city = $('#city').val();
		var state = $('#state').val();
		var zip = $('#zip').val();
		var cname = $('#cname').val();
		var ccnum = $('#ccnum').val();
		var expmonth = $('#expmonth').val();
		var expyear = $('#expyear').val();
		var cvv = $('#cvv').val();

		var checkUsername = 0;

		// check if password is equal to confirm 
		if(password != confirm) {
			document.getElementById("check").innerHTML = "<span style='color: red;'>Password and confirm don't match!</span>";
		}

		// make sure the user name has not already been chosen by another user in database
		else if(checkUsername != 1) {
			var exists = 0;

			$.ajax({
			url: "https://api.mlab.com/api/1/databases/easybites/collections/customers?apiKey=BVhAvkK6LEcUOvFiQ9Axe4IqJWXvCAt9"
			}).done(function(data) {

				$.each(data, function(key, data) {
					if(data.username == username) {		// if there is a username that already exists
						exists = 1;
						document.getElementById("taken").innerHTML = "<span style='color: red;'>Username taken! Please choose another one.</span>";
					}
				});

				if(exists != 1) {

					$.ajax({
						url: "https://api.mlab.com/api/1/databases/easybites/collections/customers?apiKey=BVhAvkK6LEcUOvFiQ9Axe4IqJWXvCAt9", 
							data: JSON.stringify({
				"name": name, 
				"email": email, 
				"username": username, 
				"password": password, 
				"confirm": confirm,
				"adr": adr, 
				"city": city, 
				"state": state, 
				"zip": zip, 
				"cname": cname, 
				"ccnum": ccnum, 
				"expmonth": expmonth, 
				"expyear": expyear,
				"cvv": cvv
						}), 
					type: "POST", 
					contentType: "application/json", 
						success: function(data) {
							var link = "customerDashboard.html?username=";
							link += username;
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
