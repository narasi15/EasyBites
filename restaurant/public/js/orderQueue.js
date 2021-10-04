
// Builds the Order Queue
function buildList(restID) {
    $.get('orders', function (data) {
        // output = JSON.parse(data)
        let parent = $('#orderList');
        let custIDS = []
        for (let i = 0; i < data.length; i++) {
            if(data[i].restID ) {
                custIDS.push(data[i].custID)
                let tmp = $("<h5 id=orderItem value=i>")
                .text("[Order:" +  data[i].orderID +
                "]:- Party of " + data[i].groupSize +" --- Table:" + data[i].table +  
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

// Builds the Order Menu from Database for restaurant restID
function buildMenu(restID) {
    $.get('restaurants/' + restID, function (data) {
        let parent = $('#menuArea');
        parent.append($("<h2>").text(data.name)).append($("<hr>"))
        let menu = data.menu;
        for(let i = 0; i < menu.length; i++) {
            parent.append($("<h4>").text(menu[i].category))
            let itemObj = menu[i].items
            for(let j = 0; j < itemObj.length; j++) {
                parent.append($(
                    "<select id=" + itemObj[j].item + " name='groupSize'>\
                        <option value='0'>0</option>\
                        <option value='1'>1</option>\
                        <option value='2'>2</option>\
                        <option value='3'>3</option>\
                        <option value='4'>4</option>\
                        <option value='5'>5</option>\
                        <option value='6'>6</option>\
                        <option value='7'>7</option>"))
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
        assignTable = Math.floor((Math.random() * 20) + 1)
        assignOID = Math.floor((Math.random() * 999) + 1)
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
            'custID': $('#custID').val(),
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

$(document).ready(function() {
    // Restaurant IDs:  Hakata Ramen:100  Queen Margherita Pizza: 110
    const restID = parseInt(getID());   // Manually set restIDs to test specific menus
    
    $("#addOrder").submit(function (e) {
        e.preventDefault();
        let num = $('input:text').val();
        $.ajax({
            url: '/addOrder/' + num,
            type: 'POST',
            success: function result() {
                location.reload(true);
                
            }
        });

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
                $('#profits').hide()
                $('#queue').show()
                document.getElementById('orderList').innerHTML=""
                buildList(restID)
                document.getElementById("removeNum").value= "";
            }
        });

    });
    
    // Builds a current list of orders for restaurant restID.
    let clicked = false;
    $('#orderQueue').on('click', function() {
        $('#reserve').hide()
        $('#dashBoard').hide()
        $('#profits').hide()
        $('#queue').show()
        document.getElementById('orderList').innerHTML=""
        buildList(restID);
    	
    });

    // Shows Profits
    $(document).on('click', '#profit', function() {
        $('#reserve').hide()
        $('#dashBoard').hide()
        $('#queue').hide()
        $('#profits').show(2000)

    });

    // Builds restaurant restID's Order Menu for Phone Orders
    $(document).on('click', '#phone', function() {
        $('#dashBoard').hide()
        $('#queue').hide()
        $('#profits').hide()
        $('#reserve').show()
        document.getElementById('menuArea').innerHTML=""
        buildMenu(restID);
    });


    // POSTs orders to the Database and uploads to Order Queue
    $("#add").submit(function(e) {
        e.preventDefault();
        buildOrder(restID);
    });
});