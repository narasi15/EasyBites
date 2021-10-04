$(document).ready(function() {
	console.log("ready!");
  var username = "";
	var params = getParams();
    username += params[1];
    capitalize = username.charAt(0).toUpperCase() + username.slice(1);
    $('#stuff').html("Welcome " + capitalize + "!");
    console.log("username is" + capitalize);


    // if profile button was clicked
    $('#profilebtn').on('click', function(e) {
    e.preventDefault();
        var link = "customerProfile.html?username=";
            link += username;
            window.location.href=link


    });

    // if favourites button was clicked
    $('#favouritesbtn').on('click', function(e) {
    e.preventDefault();
        var link = "customerFavourites.html?username=";
            link += username;
            window.location.href=link


    });

    // if history button was clicked
    $('#historybtn').on('click', function(e) {
    e.preventDefault();
        var link = "customerHistory.html?username=";
            link += username;
            window.location.href=link


    });




});	

function getProfile() {
	$.ajax({
		url: "https://api.mlab.com/api/1/databases/easybites/collections/customers?apiKey=BVhAvkK6LEcUOvFiQ9Axe4IqJWXvCAt9"
	}).done(function(data) {
		
		var output = '<div>';
		$.each(data, function(key, data) {
			output += '<div class="well">';
			output += '<h3>' + data.name+'</h3>';
			output += '</div>';
		});
		output += '</div>';
		$('#profile').html(output);

		});

}

function getParams(){
      var idx = document.URL.indexOf('?');
      var params = new Array();
      if (idx != -1) {
          var pairs = document.URL.substring(idx+1, document.URL.length).split('=');
          params[0] = pairs[0];
          params[1] = pairs[1];

      }
      return params;
      /*
      }
      params = getParams();
      username = params[1];
      $('#stuff').html(username);
      console.log("username is" + username);*/
}

