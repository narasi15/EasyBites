var username = "";

$(document).ready(function() {
	console.log("ready!");
  
	var params = getParams();
    username += params[1];
    getProfile();


    // if easybites button was clicked
    $('#easybites').on('click', function(e) {
    e.preventDefault();
        var link = "customerDashboard.html?username=";
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

     sessionStorage.removeItem('currentUserId');
    $('#submitbtn').on('click', function(e) {
      e.preventDefault();

      var name = $('#name').val();
      var email = $('#email').val();
      //var username = $('#username').val();
      var password = $('#password').val();
      var confirm = $('#password').val();
      var address = $('#address').val();
      var city = $('#city').val();
      var state = $('#state').val();
      var zip = $('#zip').val();
      var cname = $('#cname').val();
      var ccnum = $('#ccnum').val();
      var expmonth = $('#expmonth').val();
      var expyear = $('#expyear').val();
      var cvv = $('#cvv').val();

      if(sessionStorage.getItem('currentUserId') != null) {
        console.log("is id!");
        var id = sessionStorage.getItem('currentUserId');
        var url = 'https://api.mlab.com/api/1/databases/easybites/collections/customers/'+id+'?apiKey=BVhAvkK6LEcUOvFiQ9Axe4IqJWXvCAt9';
        var type = 'PUT';
      }

      else {
        var url = 'https://api.mlab.com/api/1/databases/easybites/collections/customers?apiKey=BVhAvkK6LEcUOvFiQ9Axe4IqJWXvCAt9';
        var type = 'POST';
      }

      $.ajax({
        url: url, 
        data: JSON.stringify({
          "name": name, 
          "email": email, 
          "username": username, 
          "password": password, 
          "confirm": password, 
          "adr": address, 
          "city": city, 
          "state": state,
          "zip": zip, 
          "cname": cname, 
          "ccnum": ccnum, 
          "expmonth": expmonth,  
          "expyear": expyear, 
          "cvv": cvv

        }), 
        type: type, 
        contentType: "application/json", 
        success: function(data) {
          window.location.href="customerProfile.html?username=" + username
        }, 
        error: function(xhr, status, err) {
          console.log(err);
        }
      })
    

    });


    $('body').on('click', '#editProfile', function(e) {
      e.preventDefault();
      sessionStorage.setItem('currentUserId', $(this).data('id'));
      
      $('#name').val($(this).data('name'));
      $('#email').val($(this).data('email'));
      $('#username').val($(this).data('username'));
      $('#password').val($(this).data('password'));
      //$('#confirm').val($(this).data('confirm'));
      $('#address').val($(this).data('adr'));
      $('#city').val($(this).data('city'));
      $('#state').val($(this).data('state'));
      $('#zip').val($(this).data('zip'));
      $('#cname').val($(this).data('cname'));
      $('#ccnum').val($(this).data('ccnum'));
      $('#expmonth').val($(this).data('expmonth'));
      $('#expyear').val($(this).data('expyear'));
      $('#cvv').val($(this).data('cvv'));

      var submitbutton = '<input id="submitbtn" name="submit" type="submit" value="Submit">';
      $('#submitbtn').html(submitbutton);

      });
});	

function getProfile() {
	$.ajax({
		url: "https://api.mlab.com/api/1/databases/easybites/collections/customers?apiKey=BVhAvkK6LEcUOvFiQ9Axe4IqJWXvCAt9"
	}).done(function(data) {
		
		var output = '<div>';
		$.each(data, function(key, data) {
      if(data.username == username) {
        

        output += '<div align="centre" class="well">';
        output += '<p> <strong> Name:</strong> ' + data.name+'</p>';
        output += '<p> <strong> Email:</strong> ' + data.email+'</p>';
        output += '<p> <strong> Username:</strong> ' + data.username+'</p>';
        output += '<p> <strong> Password:</strong> ' + data.password+'</p>';
        output += '<p> <strong> Confirm:</strong> ' + data.confirm+'</p>';
        output += '<p> <strong> Address:</strong> ' + data.adr+'</p>';
        output += '<p> <strong> City:</strong> ' + data.city+'</p>';
        output += '<p> <strong> State:</strong> ' + data.state+'</p>';
        output += '<p> <strong> Zip:</strong> ' + data.zip+'</p>';
        output += '<p> <strong> Card Name:</strong> ' + data.cname+'</p>';
        output += '<p> <strong> Credit Card Number:</strong> ' + data.ccnum+'</p>';
        output += '<p> <strong> Expiry Month:</strong> ' + data.expmonth+'</p>';
        output += '<p> <strong> Expiry Year:</strong> ' + data.expyear+'</p>';
        output += '<p> <strong> CVV:</strong> ' + data.cvv+'</p>';
        output += '<a id="editProfile" href="" data-id="'+data._id.$oid+'" data-name="'+ data.name+'" data-email="'+ data.email+'" data-username="'+ data.username+'" data-password="'+ data.password+'" data-confirm="'+ data.confirm+'" data-adr="'+ data.adr+'" data-city="'+ data.city+'" data-state="'+ data.state+'" data-zip="'+ data.zip+'" data-cname="'+ data.cname+'" data-ccnum="'+ data.ccnum+'" data-expmonth="'+ data.expmonth+'" data-expyear="'+ data.expyear+'" data-cvv="'+ data.cvv+'">Edit</a>';
        output += '</div>';
      }
			
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
    
}

