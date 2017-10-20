// MEDIUM: Using a weather API, fetch and display weather for Charlotte to a 
// webpage that you create. The webpage that you use can either be a simple 
// page that just shows the data you receive from the API, or you can integrate 
// it with your personal website. You should display at a minimum temperature 
// and sky conditions. This API: http://weathers.co/api is free, simple, and 
// doesn't require an account to be created. You can browse other weather APIs 
// here if you would like to use something else: 
// https://www.programmableweb.com/category/weather/api.
  
// MEDIUM (BONUS): Add an input field and button on your page that let's the 
// user enter a city and update the weather to the city of their choosing. 
// Handle errors if a user enters bad input.


// Wait for the entire document to load before running AJAX
$(document).ready(function() {

    $('.submit').click(function() {

        // Set city equal to the user input
        var city = $('.input').val();

        // Get a JSON object back from the open-notify API
        $.getJSON(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=90445acc0fa9221a2080da7e1404bbb2`, function(data) {
        
            // API only gave temperature in Kelvin, so converted to Fahrenheit, for you know, normal people
            temperature = (data.main.temp * 9/5) - 459.67;
    
            // Display temperature and sky conditions in the html
            weatherHTML = `The temperature in ${data.name} is ${temperature.toFixed(2)} degrees. Sky conditions: ${data.weather[0].main}.`;
    
            $('.ajax').html(weatherHTML);
        });

        // Set input field to empty to be ready for next city entry
        $('.input').val('');

        // Handle any AJAX errors and let the user know
        $(document).ajaxError(function() {
            $('.ajax').html('That was not a valid city; please try again. Example: Charlotte');
        });
    });

});