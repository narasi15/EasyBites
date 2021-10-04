$(document).ready(function() {
	console.log("ready!");
  	var username = "";
	var params = getParams();
    username += params[1];

	$('#queue').show()
        document.getElementById('orderList').innerHTML=""
        buildList(110);
        
        
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

    // if easybites button was clicked
    $('#easybites').on('click', function(e) {
    e.preventDefault();
        var link = "customerDashboard.html?username=";
            link += username;
            window.location.href=link


    });

	// Removes fulfilled orders
    $("#removeOrder").submit(function (e) {
        e.preventDefault();
        let num = $('input:text').val();
        $.ajax({
            url: '/remove/' + num,
            type: 'DELETE',
            success: function result() {
                // reload("#removeOrder")
                document.getElementById('orderList').innerHTML=""
                buildList(110)
                document.getElementById("removeNum").value= "";
                location.reload(true);
            }
        });

    });
    

});	

// Builds the Order Queue
function buildList(restID) {
    $.get('orders', function (data) {
    	custID = getParams()[1]
        let parent = $('#orderList');
        for (let i = 0; i < data.length; i++) {
            if(data[i].custID == custID) {

                let tmp = $("<h5 id=orderItem value=i>")
                .text("[Order:" +  data[i].orderID +
                "]:- Partys of " + data[i].groupSize +" --- Table:" + data[i].table +  
                " --- Name:" + data[i].custID);
                tmp.html(tmp.html().replace(/\n/g,'<br/>'));
                parent.append(tmp);
                
                let orderObj = data[i].order
                
                for(let j = 0; j < orderObj.length; j++) {
                	let item1 = $("<h5 id=orderItem value=i>")
                	.text("Qty:" + orderObj[j].quantity + ".........." + orderObj[j].item);
                	parent.append(item1);
                }
           		parent.append($("<br><hr>"))
            }
        }
    });
};


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

