const convertToCelsius = function(fahrenheitVal)
{
    return Math.round(((fahrenheitVal - 32) * (5/9)) * 10) / 10;
};

const convertToFahrenheit = function(celsiusVal)
{
    return Math.round((celsiusVal * (9/5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit
};