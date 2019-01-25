(function() {
    // 1.
    const countdown = (length: number = 5): void => {
        while (length > 0) {
            console.log(`Start in ${length}`);
            length--;
        }
        console.log('START!');
    };

    countdown(3);
    countdown();

    // 2.
    const numbers = [0, 42, -1];
    console.log(Math.min(...numbers));

    // 3.
    const allTheNumbers = [23, 3.14];
    allTheNumbers.push(...numbers);
    console.log(allTheNumbers);

    // 4.
    const weatherForecast = [0, -4, -10];
    const [today, tomorrow, dayAfterTomorrow] = weatherForecast;
    console.log(today, tomorrow, dayAfterTomorrow);

    // 5.
    const now = { temperature: 0, cloudy: false };
    const { temperature, cloudy } = now;
    console.log(
        `Es sind ${temperature} °C und der Himmel ist ${
            cloudy ? 'bewölkt' : 'nicht bewölkt'
        }`
    );
})();
