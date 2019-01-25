(function() {
    // 1.
    var countdown = function(length) {
        while (length > 0) {
            console.log('Start in ' + length);
            length--;
        }
        console.log('START!');
    };

    countdown(10);
    // countdown();

    // 2.
    var numbers = [0, 42, -1];
    console.log(Math.min.apply(Math, numbers));

    // 3.
    var allTheNumbers = [23, 3.14];
    allTheNumbers.push.apply(allTheNumbers, numbers);
    console.log(allTheNumbers);

    // 4.
    var weatherForecast = [0, -4, -10];
    var today = weatherForecast[0];
    var tomorrow = weatherForecast[1];
    var dayAfterTomorrow = weatherForecast[2];
    console.log(today, tomorrow, dayAfterTomorrow);

    // 5.
    var now = { temperature: 0, cloudy: false };
    var temperature = now.temperature;
    var cloudy = now.cloudy;
    console.log(
        'Es sind' +
            temperature +
            '°C' +
            'und der Himmel ist' +
            (cloudy ? 'bewölkt' : 'nicht bewölkt.')
    );
})();
