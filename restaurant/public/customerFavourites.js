$(document).ready(function() {
	console.log("ready!");
    var username = "";
	var params = getParams();
    username += params[1];
    
    exist = [785,321,421,129,343,194,127,824,356,925,25,125,467]
    
    // Restaurant IDs:  Hakata Ramen:100  Queen Margherita Pizza: 110
    // const restID = $("select").val()//parseInt(getID());   // Manually set restIDs to test specific menus
    
    // POSTs orders to the Database and uploads to Order Queue
    $("#add").submit(function(e) {
        e.preventDefault();
        restID = $("select").val()
        buildOrder(restID);
    });

    // if profile button was clicked
    $('#profilebtn').on('click', function(e) {
    e.preventDefault();
        var link = "customerProfile.html?username=";
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

    // if history button was clicked
    $('#historybtn').on('click', function(e) {
    e.preventDefault();
        var link = "customerHistory.html?username=";
            link += username;
            window.location.href=link
 
    });

	$('#go').on('click', function() {
        $('#menu').show()
        var restID = $("select").val()
        document.getElementById('menuArea').innerHTML=""
        buildMenu(restID);
        
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

// Retrieves restaurant restID
function getID(){
    var idx = document.URL.indexOf('?');

    var idx2 = document.URL.indexOf('&');
    console.log(idx)
    var params = new Array();
    if (idx != -1) {
        var pairs = document.URL.substring(idx+1, document.URL.length).split('=');
        rID = pairs[2];
        return rID;
    }
    else {
        console.log("Error : URL malformed");
    }
}

// Builds restaurant restID's Order Menu for Phone Orders
function buildMenu(restID) {
    $.get('restaurants/' + restID, function (data) {
        let parent = $('#menuArea');
        parent.append($("<h3>").text(data.name)).append($("<hr>"))
        let menu = data.menu;
        for(let i = 0; i < menu.length; i++) {
            parent.append($("<h4>").text(menu[i].category))
            let itemObj = menu[i].items
            for(let j = 0; j < itemObj.length; j++) {
                parent.append($(
                    "<select id=" + itemObj[j].item + " name='groupSize'>\
                        <option class='item' value='0'>0</option>\
                        <option class='item' value='1'>1</option>\
                        <option class='item' value='2'>2</option>\
                        <option class='item' value='3'>3</option>\
                        <option class='item' value='4'>4</option>\
                        <option class='item' value='5'>5</option>\
                        <option class='item' value='6'>6</option>\
                        <option class='item' value='7'>7</option>"))
                        .append(itemObj[j].item).append($('<br>'));

            }
            
            parent.append($("<hr>"))
        }
    });
};

// Takes the restaurant menu and reads in customer info and selected items processes it to database. 
function buildOrder(restID) {
    $.get('restaurants/' + restID, function (data) {
        
        let orderArray = []
        
        // Generate table and orderIDs -- For demo purposes only - a better algorithm would meet the needs of each restaurant 
        existingOID = [785,321,421,129,343,194,127,824,356,925,25,125,467]  //Current outstanding orders in database
        assignOID = Math.floor((Math.random() * 999) + 1)
        // Ensure the generated orderID is unique
        while(($.inArray(assignOID, existingOID)) == 1) {
            assignOID = Math.floor((Math.random() * 999) + 1)
        }
        //alert(while($.inArray(assignOID, existingOID) !- -1)
        assignTable = Math.floor((Math.random() * 20) + 1)

        
        // For Debugging: commented out the alerts step by step to see how the restaurantAPI document is being extracted
        //(uncomment) alert(data.menu[0])  //--Returns the restaurantAPI Object
        let menuObj = data.menu  //
       
        // alert(menuObj)  //--Returns 3 menu objects: ie for restID:110 --> [Pizza] [SideOrders] [Drinks]
        for(let i = 0; i < menuObj.length; i++) {
            
            let categoryObj = menuObj[i].items
            // alert(categoryObj) // returns 4 [Pizza] objects.
            
            for(let j = 0; j < categoryObj.length; j++) {
                itemObj = categoryObj[j].item
                // alert(itemObj)                       // returns the ITEMS in each category
                // alert($("#" + itemObj).val())        // returns the QUANTITY ordered/selected 

                if($("#" + itemObj).val() != 0) {       // If the item has a QUANTITY value of 0, exclude from order.
                       //create data entries to push to the orderArray
                        data = { 'quantity': $("#" + itemObj).val(), 'item': itemObj }
                       
                        // alert(data)  // what a data entry looks like
                        orderArray.push(data)

                        // alert(orderArray[0].item)   // returns the array with objects inserted
                }
            }
        }
        // Post customer order to the database.
        post = {
            'custID': getParams()[1],
            'restID': restID,
            'orderID': assignOID,
            'groupSize': parseInt($('#groupSize').val()),
            'table': assignTable,
            'order':orderArray 
        }
        $.post('/addOrder/'+ restID, post)
        location.reload(true)
    });
}

