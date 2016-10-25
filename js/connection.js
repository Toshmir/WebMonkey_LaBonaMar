
(function($, myFunctions) {

	var apiWeather = "http://api.openweathermap.org/data/2.5/forecast?id=3114566&units=metric&appid=3102fdf7e6472b4b16f09fd702ce9a7d";

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