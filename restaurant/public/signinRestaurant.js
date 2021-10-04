$(document).ready(function() {
	$('#restaurant-signin').on('submit', function(e) {
		e.preventDefault();
		
		var username = $('#inputEmail').val();
		var password = $('#inputPassword').val();

		var exist = 0;


		$.ajax({
			url: "https://api.mlab.com/api/1/databases/easybites/collections/restaurants?apiKey=BVhAvkK6LEcUOvFiQ9Axe4IqJWXvCAt9"
			}).done(function(data) {

				$.each(data, function(key, data) {
					if(data.username == username && data.password == password) {
						exist = 1;
						var link = "restaurantDashboard.html?username=";
						link += username;
						link += "&id=";
						var restid = data.restid;
						link += restid;
						window.location.href=link
						
					}
					

				});
				if(exist == 0) {
					document.getElementById("check").innerHTML = "<span style='color: red;'>Incorrect username or password!</span>";
						
				}

			});
		});

});	

