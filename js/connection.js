
(function($, myFunctions) {

	var apiWeather = "clave";

	$.ajax({
		url: apiWeather
	})
	.done(function( searchResultsData ) {

		var weatherPalamos = searchResultsData.list;
		console.log(weatherPalamos);
		var weatherDay = '';
		var weatherOfWeek = '';
		var dayText = moment().locale("ca").format('LL');
		var toDay = moment().format('L');
		var concat='';

		var day = '<div class="to-day">' + dayText + '</div>';
		myFunctions.putDataInHtml(day);

		toDay = toDay.substr(3, 2);

		$.each ( weatherPalamos, function ( index, oWeatherPalamos) {
			concat += myFunctions.weatherOfDay(weatherDay,  weatherOfWeek , toDay, oWeatherPalamos);
			
		});
		myFunctions.putDataInHtml(concat);
	});

})(jQuery, myFunctions);