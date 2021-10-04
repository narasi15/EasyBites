// Countries
var country_arr = new Array("Australia", "Brazil", "Canada", "Chile", "Czech Republic", "India", 
	"Indonesia", "Ireland", "Italy", "Lebanon", "Malaysia", "New Zealand",  "Philippines", "Poland", 
	"Portugal", "Qatar", "Singapore", "Slovakia", "South Africa", "Sri Lanka", "Turkey", 
	"United Arab Emirates", "United Kingdom", "USA");

// States
var s_a = new Array();
s_a[0] = "";
s_a[1] = "Adelaide|Ballarat|Bendigo|Brisbane|Cairns|Canberra|City of Mandurah|City of Rockingham|Darwin|Geelong|Melbourne|Mornington Peninsula|Perth|Sydney|Tasmania|Toowoomba|Townsville|Wollongong";
s_a[2] = "Brasília|Porto Alegre|Rio de Janeiro|Salvador|São Paulo";
s_a[3] = "Abbotsford, British Columbia|Airdrie|Banff|Barrie|Brandon, Manitoba|Brantford|Calgary|Cambridge, Ontario|Chilliwack|Dartmouth|Edmonton|Fredericton|Gatineau Region|Grande Prairie|Greater Sudbury|Guelph|Halifax|Hamilton, Ontario|Kingston, Ontario|Kitchener, Ontario|Lethbridge|London, Ontario|Medicine Hat|Metro Vancouver|Moncton|Montreal|Niagara Falls|Ottawa|Penticton|Peterborough, Ontario|Prince George|Quebec City|Red Deer|Regina|Saanich|Saskatoon|St Catharines|Ste-Foy|St John’s|Stratford, Ontario|Thunder Bay|Toronto|Vernon, British Columbia|Victoria|Waterloo, Ontario|Westshore|Whistler|Windsor|Winnipeg";
s_a[4] = "Santiago";
s_a[5] = "Beroun|Brno|České Budějovice|Frýdek-Místek|Havířov|Hradec Králové|Karlovy Vary|Kladno|Kolín|Liberec|Litoměřice|Mělník|Mladá Boleslav|Nový Jičín|Olomouc|Ostrava|Pardubice|Plzeň|Poděbrady|Prague|Teplice|Třinec|Ústí nad Labem";
s_a[6] = "Agra|Ahmedabad|Allahabad|Amritsar|Aurangabad|Bengaluru|Bhopal|Bhubaneswar|Chandigarh|Chennai|Coimbatore|Dehradun|Delhi NCR|Goa|Guwahati|Hyderabad|Indore|Jaipur|Kanpur|Kochi|Kolkata|Lucknow|Ludhiana|Mangalore|Mumbai|Mysore|Nagpur|Nashik|Patna|Puducherry|Pune|Ranchi|Surat|Udaipur|Vadodara|Varanasi|Visakhapatnam";
s_a[7] = "Bali|Bandung|Jakarta";
s_a[8] = "Dublin|Wicklow";
s_a[9] = "Milan|Rome";
s_a[10] = "Beirut";
s_a[11] = "Kuala Lumpur|Selangor";
s_a[12] = "Auckland|Christchurch|Dunedin|Hamilton|Napier Hastings|Nelson|New Plymouth|Palmerston North|Queenstown|Rotorua|Tauranga|Wellington";
s_a[13] = "Cebu|Laguna|Metro Manila|Rizal";
s_a[14] = "Białystok|Bydgoszcz|Częstochowa|Gdańsk|Gdynia|Katowice|Kraków|Łódź|Lublin|Poznań|Rzeszów|Sopot|Szczecin|Toruń|Warsaw|Wrocław|Zakopane";
s_a[15] = "Greater Lisbon|Porto";
s_a[16] = "Doha";
s_a[17] = "Singapore";
s_a[18] = "Banská Bystrica|Bratislava|Košice|Nitra|Prešov|Prievidza|Trenčín|Trnava|Žilina";
s_a[19] = "Bloemfontein|Cape Town|Dullstroom|Durban|Grahamstown|Garden Route|Hartbeespoort|Johannesburg|Nelspruit|Pretoria|Sun City";
s_a[20] = "Colombo";
s_a[21] = "Adana|Ankara|Antalya|Bodrum|Bursa|Bozcaada|Çeşme|Eskisehir|Gaziantep|Istanbul|Izmir|Izmit|Konya";
s_a[22] = "Abu Dhabi|Ajman|Al Ain|Dubai|Fujairah|Ras al-Khaimah|Sharjah|Umm al Quwain";
s_a[23] = "Belfast|Birmingham|Dundee, Scotland|East Midlands|East of England|Edinburgh|Glasgow|Liverpool|London|Manchester|North East England|North West England|South East England|South West England|Wales|West Midlands|West Yorkshire|Yorkshire";
s_a[24] = "Abilene|Acton|Addison|Agua Dulce|Alameda|Albany, New York|Alhambra|Allen|Alondra Park|Amarillo|Antioch|Arcadia|Arlington|Artesia|Auburn|Austin|Avacado Heights|Azusa|Bakersfield|Baldwin Park|Beaumont|Bedford|Bell|Bellevue|Bellflower|Bell Gardens|Bellingham|Berkeley|Beverly Hills|Binghamton|Boerne|Bothell|Bremerton|Brentwood|Brownsville|Buffalo|Burbank|Burien|Burleson|Burlingame|Caldwell County|Campbell|Carrollton|Carson|Castaic|Cedar Park|Centralia|Cerritos|Charter Oak|Chico, California|Citrus|Claremont|Commerce|Concord|Corpus Christi|College Station|Compton|Covina|Cudahy|Culver City|Cupertino|Dallas|Daly City|Danville|Del Aire|Desert View Highlands|Downey|Duarte|Dublin, California|Duncanville/DeSoto|East Los Angeles|East Pasadena|East Rancho Dominguez|East San Gabriel|East Whittier|El Centro|Elizabeth Lake|El Monte|El Paso|El Segundo|Emeryville|Euless|Eureka, California|Everest|Farmers Branch|Fairfield|Federal Way|Fremont|Finger Lakes Region|Florence-Graham|Fort Worth|Fresno|Frisco|Gardena|Garland|Georgetown|Gig Harbor|Glendale|Glendora|Glens Falls/Queensbury|Grand Prairie|Grapevine|Grass Valley|Haltom City|Hawaiian Gardens|Hawthorne|Hayward|Hermosa Beach|Houston|Hudson Valley|Huntington Park|Hurst|Industry|Inglewood|Inland Empire|Irving|Irwindale|Issaquah|Keller|Jamestown, New York State|Kennewick|Kent|Kerrville|Killeen|Kirkland|La Crescenta-Montrose|Ladera Heights|Lafayette/Orinda|Lakewood|Lake George|Lake Hughes|Lake Los Angeles|Lakewood|La Mirada|Lancaster, California|La Puente|Laredo|Las Vegas|Lennox|Leona Valley|Lewisville/Flower Mound|Littlerock|Livermore|Long Beach|Long Island|Longview|Longview, Washington State|Los Angeles|Los Gatos|Lubbock|Lufkin|Lynnwood|Lynwood|Marina del Rey|Manhattan|Mansfield|Marysville|Mayflower Village|Maywood|McAllen|McKinney|Menlo Park|Merced|Mesquite|Middletown|Milpitas|Monrovia|Montebello|Monterey Bay|Monterey Park|Morgan Hill|Mountain View|Nacogdoches|Napa|Newark|New Braunfels|New York City|North Richland Hills/Richland|Norwalk|Novato|Oakland|Odessa|Olympia|Orange County|Palmdale|Palm Springs|Palo Alto|Palos Verdes Estates|Pasadena|Pasco|Plano|Plattsburgh|Pleasant Hill|Pleasanton|Petaluma|Pico Rivera|Pomona|Puyallup|Quartz Hill|Redding|Redmond|Redwood City|Reno|Renton|Redondo Beach|Richardson|Richland, Washington State|Richmond-San Pablo|Rochester, New York|Rockridge/Temescal|Rockwall|Rohnert Park|Rolling Hills Estates|Rosemead|Round Rock|Rowland Heights|Sacramento|San Angelo|San Antonio|Santa Barbara|San Bruno|San Carlos|San Diego|San Fernando|San Francisco|San Gabriel|San Jose|San Leandro|San Mateo|San Marcos|San Marino|San Pasqual|Santa Clara|Santa Clarita|Santa Fe Springs|Santa Maria|Santa Monica|Santa Rosa|San Rafael|San Ramon|Seatac|Seattle|Sherman, Texas|Sierra Madre|Signal Hill|Silverdale|Sonoma|South El Monte|South Gate|South San Francisco|Spokane|Stevenson Ranch|Stockton|Stone Oak|Southlake|South Pasadena|South San Gabriel|South San Jose Hills|South Whittier|Sunnyvale|Sun Village|Syracuse|Tacoma|Temecula|Temple City|Texarkana, Texas|Topanga|Torrance|Tukwila|Turlock|Tyler|Victoria|Waco|Weatherford, Texas|Union City|Utica|Valinda|Vallejo|Vancouver|Ventura County|Vernon|Victorville|View Park-Windsor Hills|Vincent|Visalia|Walla Walla|Walnut|Walnut Creek|Walnut Park|Washington DC|Watertown, New York State|Wenatchee|West Athens|West Carson|West Covina|Westchester|West Hollywood|Westlake Village|Westmont|West Puente Valley|West Rancho Dominguez|West Whittier-Los Nietos|Whittier|Wichita Falls|Willowbrook|Yakima";

$(document).ready(function() {

    populateCountries('country', 'citystate');
    

});

function populateStates(countryElementId, stateElementId) {

    var selectedCountryIndex = document.getElementById(countryElementId).selectedIndex;

    var stateElement = document.getElementById(stateElementId);

    stateElement.length = 0; // Fixed by Julian Woods
    stateElement.options[0] = new Option('Select City/State', '');
    stateElement.selectedIndex = 0;

    var state_arr = s_a[selectedCountryIndex].split("|");

    for (var i = 0; i < state_arr.length; i++) {
        stateElement.options[stateElement.length] = new Option(state_arr[i], state_arr[i]);
    }
}

function populateCountries(countryElementId, stateElementId) {
    // given the id of the <select> tag as function argument, it inserts <option> tags
    console.log('here1');
    var countryElement = document.getElementById(countryElementId);
    //countryElement.length = 0;
    countryElement.options[0] = new Option('Select Country', '-1');
    countryElement.selectedIndex = 0;
    for (var i = 0; i < country_arr.length; i++) {
        countryElement.options[countryElement.length] = new Option(country_arr[i], country_arr[i]);
    }

    // Assigned all countries. Now assign event listener for the states.

    if (stateElementId) {
        countryElement.onchange = function () {
            populateStates(countryElementId, stateElementId);
        };
    }
}