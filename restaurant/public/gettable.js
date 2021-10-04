$(window).on("load", function() {

    var $loader = $(".loader");
    $loader.find(".loading").fadeOut();
    $loader.fadeOut("slow");
});

function createTable(data){
        // similar to enumerate in python
        $.each(data['restaurants'],function(i,item){
            if(item['restaurant'].price_range == 2) {
                    wait = 'long';
                }
                else {
                    wait = 'short';
                }
            t.row.add( [
                wait,
                item['restaurant'].user_rating.aggregate_rating,
                item['restaurant'].name,
                item['restaurant'].cuisines,
                item['restaurant'].price_range,
                item['restaurant'].location.locality
            ] ).draw( false );
        });
    }
function success() { 
   console.log("Printing the test function.");
};

function getCityID(city, callback) {
    var url = 'https://developers.zomato.com/api/v2.1/cities?q='+ city;

        // get city id
        $.ajax({
            type:'GET',
                url: url,
                headers: {
                    'Accept': 'application/json',
                    'user-key': '678a7e22aaa72e35763425e5a04486c1'
                    //'user-key': 'c8359b08a483e286a7c3f5d04e40ba2c'
                },
                success: function(data) {
                    var count = 0;
                    var city_ID = data['location_suggestions'][0].id;
                    console.log("i am id " + city_ID);
                    
                    callback(city_ID)
//                   
                }
            });
    
}


$(document).ready(function() {
    

    var t = $('#datatable').DataTable({
        "order": [[ 0, "desc" ]],
        iDisplayLength: 50,    
        sPagination: "full_numbers",
        // bStateSave: true,
         sScorollX: "900px", 
         sScrollY: "510px",
    });
    
     
     $('#favourite').on( 'click', function () {
       
        $('#ramen').show();
    });
    
    

    $('#resultsbtn').on('click', function () {
        
        var city = $('#citystate').val(); // get the selected city
       
        var city_ID = getCityID(city,function(city_ID) {
   
        	console.log("City ID: " + city_ID);
       
     

        $('.navbar-toggler').click();
        $('.navbar-toggle').click();
        t.clear().draw();
        
        document.getElementById("resto").innerHTML = "Restaurants In " + city
        
        
        for (var i = 0; i < 10; i=i+1) {
            
            $.ajax({
                type:'GET',
                url: 'https://developers.zomato.com/api/v2.1/search?city_id='+ city_ID +'&sort=rating&start='+ i +'&count=20',
                headers: {
                    'Accept': 'application/json',
                    'user-key': '678a7e22aaa72e35763425e5a04486c1'
                    //'user-key': 'c8359b08a483e286a7c3f5d04e40ba2c'
                },
                success: function(data) {
                    // similar to enumerate in python
                    $.each(data['restaurants'],function(i,item){
                        if(item['restaurant'].price_range == 2) {
                                wait = 'long';
                            }
                            else {
                                wait = 'short';
                            }
                            
                        t.row.add( [
                            wait,
                            item['restaurant'].user_rating.aggregate_rating,
                            data = '<a href="' + item['restaurant'].url +'">' + item['restaurant'].name + '</a>',
                            item['restaurant'].cuisines,
                            item['restaurant'].price_range,
                            item['restaurant'].location.locality
                        ] ).draw( false );
                    });
                }
            });
            $('#dtable').show();
        }
         });
    });
    
    
});
