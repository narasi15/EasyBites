function getParams(){
      var idx = document.URL.indexOf('?');
      var idx2 = document.URL.indexOf('&');
      var params = new Array();
      if (idx != -1) {
          var pairs = document.URL.substring(idx+1, document.URL.length).split('=');
          params[0] = pairs[0];

          var pairs2 = pairs[1].split('&');

          params[1] = pairs2[0];
          console.log(params[1]);


      }
      return params;
      /*
      params = getParams();
      username = params[1];
      $('#stuff').html(username);
      console.log("username is" + username);*/
}

$(document).ready(function() {
	console.log("ready!");
	var params = getParams();
    username = params[1];
    capitalize = username.charAt(0).toUpperCase() + username.slice(1);

    $('#stuff').html("Welcome " + capitalize + "!");
    console.log("username is" + capitalize);

});	

