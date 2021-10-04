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
	
    $('#home').on( 'click', function () {
        $('#topImages').show();
        $('#dtable').hide();
        $('#hold').hide();
        document.getElementById('hold').innerHTML = '';
        $('#signinfo').show();
        
        $('.navbar-toggler').click();
        $('.navbar-toggle').click();
	});

	$('#concept').on( 'click', function () {
        $('#topImages').hide();
        $('#dtable').hide();
        $('#signinfo').hide();
        $('#hold').show();
		document.getElementById('hold').innerHTML = document.getElementById('market').innerHTML;
        $('.navbar-toggler').click();
        $('.navbar-toggle').click();
	});

    
    $('#about').on( 'click', function () {
        $('#topImages').hide();
        $('#dtable').hide();
        $('#signinfo').hide();
        $('#hold').show();
    	document.getElementById('hold').innerHTML = document.getElementById('aboutus').innerHTML;
        $('.navbar-toggler').click();
        $('.navbar-toggle').click();

	});

	$('#toronto').on( 'click', function () {
        $('#topImages').hide();
        $('#hold').hide();
        $('#signinfo').hide();
		
        $('.navbar-toggler').click();
        $('.navbar-toggle').click();
        t.clear().draw();
        document.getElementById("resto").innerHTML = "Restaurants In Toronto"
		for (var i = 0; i < 10; i=i+1) {
            $.ajax({
                type:'GET',
                url: 'https://developers.zomato.com/api/v2.1/search?city_id=89&sort=rating&start='+ i +'&count=20',
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

    $('#montreal').on( 'click', function () {
    	//$('#holder').remove();
        $('#topImages').hide();
        $('#hold').hide();
        $('#signinfo').hide();

		$('#dtable').show();
        $('.navbar-toggler').click();
        $('.navbar-toggle').click();
        t.clear().draw();
        document.getElementById("resto").innerHTML = "Restaurants In Montreal"
		for (var i = 0; i < 10; i=i+1) {
            $.ajax({
                type:'GET',
                url: 'https://developers.zomato.com/api/v2.1/search?city_id=294&sort=rating&start='+ i +'&count=20',
                headers: {
                    'Accept': 'application/json',
                    'user-key': '678a7e22aaa72e35763425e5a04486c1'
                },
                success:function(data){
                    // similar to enumerate in python
                    $.each(data['restaurants'],function(i,item){
                        if(item['restaurant'].price_range == 1) {
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
        }
	});
    
    $('#vancouver').on( 'click', function () {
    	//$('#holder').remove();
        $('#topImages').hide();
        $('#hold').hide();
        $('#signinfo').hide();
		$('#dtable').show();
        $('.navbar-toggler').click();
        $('.navbar-toggle').click();
        t.clear().draw();
        document.getElementById("resto").innerHTML = "Restaurants In Vancouver"
		for (var i = 0; i < 10; i=i+1) {
            $.ajax({
                type:'GET',
                url: 'https://developers.zomato.com/api/v2.1/search?city_id=256&sort=rating&start='+ i +'&count=20',
                headers: {
                    'Accept': 'application/json',
                    'user-key': '678a7e22aaa72e35763425e5a04486c1'
                },
                success:function(data){
                    // similar to enumerate in python
                    $.each(data['restaurants'],function(i,item){
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
        }
	});
});
