document.addEventListener('DOMContentLoaded', function() {
     function convertCelsiusToFahrenheit (celsius) {
          return (celsius * 9 / 5) + 32;
     }
     
     function convertFahrenheitToCelsius(fahrenheit) {
          return (fahrenheit - 32) * 5 / 9;
     }
     
     function updateTemperature (inputId, value) {
          if (isNaN(value)) {
               if (inputId === 'celsius') {
                    document.getElementById('fahrenheit').value = '';
               } else {
                    document.getElementById('celsius').value = '';
               }
          } else {
               let convertedValue;
               if (inputId === 'celsius') {
                    convertedValue = convertCelsiusToFahrenheit(value);
                    document.getElementById('fahrenheit').value = convertedValue.toFixed(4);
               } else {
                    convertedValue = convertFahrenheitToCelsius(value);
                    document.getElementById('celsius').value = convertedValue.toFixed(4);
               }
          }
     }
     
     document.getElementById('celsius').addEventListener('input', function() {
          updateTemperature('celsius', this.value);
     });
     
     document.getElementById('fahrenheit').addEventListener('input', function() {
          updateTemperature('fahrenheit', this.value);
     });

});