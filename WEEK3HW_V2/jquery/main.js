var city = 'MANHATTAN';
var state = 'NY';
var APIKey ='6929fe5e202db6f6';
var temp_c = 0;
var temp_cool = 15;
var temp_normal = 23;
var setLocation = function(){

getWeather();

};


var loadWeather = function(parsed_json){

if(parsed_json['response']['error']){
	alert(parsed_json['response']['error']['description']);
	return; 
};
	
	var thisCity = parsed_json['location']['city'];
 	var thisState = parsed_json['location']['state'];
	var temp_f = parsed_json['current_observation']['temp_f'];
    
	var weather = parsed_json['current_observation']['weather'];    
	var icon = parsed_json['current_observation']['icon_url']; 
 
 	temp_c = parsed_json['current_observation']['temp_c'];

	$('#state').text('state : ' + thisState);
	$('#city').text('city : ' + thisCity);
	$('#temperature_f').text(temp_f);
	$('#temperature_c').text(temp_c);
	$('.weather').text(weather);
	$('.weatherIcon').html('<img src="' + icon + '">');

};


var getWeather = function(){
	$.ajax({
		url : 'http://api.wunderground.com/api/6929fe5e202db6f6/forecast/geolookup/conditions/q/' + state + '/' + city + '.json',
		dataType : "jsonp",
		success : function(parsed_json){
  				 loadWeather(parsed_json);
  		}
	});


};

var  changeDisplay = function(imgName, chld) {

	 	var selectedEffect = 'slow';
        chld.attr('src',  imgName );
        $( "#taskList" ).fadeIn(1000);
      
}

var  findCloth = function() {
	var strTemp = '';
	var img1 = $('#ShowPic1_1');
	var img2 = $('#ShowPic1_2');
	var img3 = $('#ShowPic1_3');
	var img4 = $('#ShowPic1_4');
	var img5 = $('#ShowPic2_1');
	var img6 = $('#ShowPic2_2');
	var img7 = $('#ShowPic2_3');
	var img8 = $('#ShowPic2_4');
	var img9 = $('#ShowPic3_1');
	var img10 = $('#ShowPic3_2');
	var img11 = $('#ShowPic3_3');
	var img12 = $('#ShowPic3_4');
	var img13 = $('#ShowPic4_1');
	var img14 = $('#ShowPic4_2');
	var img15 = $('#ShowPic4_3');
	var img16 = $('#ShowPic4_4');
	
	
 	if (temp_c <= temp_cool){
 		strTemp = 'cool';
 	}else if (temp_c <= temp_normal){
 		strTemp = 'normal';
	}else{
		strTemp = 'hot';
	}
	 
	changeDisplay( 'images/' + strTemp +'/1/1.jpg', img1);
	changeDisplay( 'images/' + strTemp +'/1/2.jpg', img2);
	changeDisplay( 'images/' + strTemp +'/1/3.jpg', img3);
	changeDisplay( 'images/' + strTemp +'/1/4.jpg', img4);

	changeDisplay( 'images/' + strTemp +'/2/1.jpg', img5);
	changeDisplay( 'images/' + strTemp +'/2/2.jpg', img6);
	changeDisplay( 'images/' + strTemp +'/2/3.jpg', img7);
	changeDisplay( 'images/' + strTemp +'/2/4.jpg', img8);
	


	changeDisplay( 'images/' + strTemp +'/3/1.jpg', img9);
	changeDisplay( 'images/' + strTemp +'/3/2.jpg', img10);
	changeDisplay( 'images/' + strTemp +'/3/3.jpg', img11);
	changeDisplay( 'images/' + strTemp +'/3/4.jpg', img12);

	changeDisplay( 'images/' + strTemp +'/4/1.jpg', img13);
	changeDisplay( 'images/' + strTemp +'/4/2.jpg', img14);
	changeDisplay( 'images/' + strTemp +'/4/3.jpg', img15);
	changeDisplay( 'images/' + strTemp +'/4/4.jpg', img16);
}

 var  pad = function(n){
        return (n < 10) ? '0' + n : n;
  }

 var  updateValue = function(){
    var dt = new Date();
    
	$('#hour').text(pad(dt.getHours()));
	$('#min').text(pad(dt.getMinutes()));
	$('#second').text(pad(dt.getSeconds()));
	$('.date').text(pad(dt.getDate()));
	$('.month').text(pad(dt.getMonth()+1));
	$('.year').text(pad(dt.getFullYear()));
 }

setInterval(function() {
	setLocation();
   	updateValue();
}, 1000);

//init

var init = function(){

setLocation();

  $('#slides').slidesjs({
        width: 300,
        height: 300,
        navigation: false
      });

  $('#slides2').slidesjs({
        width: 300,
        height: 300,
        navigation: false
      });

  $('#slides3').slidesjs({
        width: 300,
        height: 300,
        navigation: false
      });

  $('#slides4').slidesjs({
        width: 300,
        height: 300,
        navigation: false
      });

$( "#taskList" ).hide();

updateValue();

$('#submitButton').on('click',function(e){
	e.preventDefault();
	findCloth();
});
 
};

$(document).ready(init); 