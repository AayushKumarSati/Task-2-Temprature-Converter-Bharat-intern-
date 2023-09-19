const tempCalculator = () => {
    const inputTemp = document.getElementById('temp-1').value;
    const tempSelected = document.getElementById('temp_cal');
    const valueTemp = temp_cal.options[tempSelected.selectedIndex].value;

    //Celsius To Fahrenhiet covert;

    const celsToFah = (cels) => {
        let fahrenheit = ((cels * 9 / 5) + 32).toFixed(1);
        return fahrenheit;

    }



    //Fahrenheit to celsius Convert;
    const fahToCels = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;

    }



    if (valueTemp == 'cels') {

        document.getElementById("result").innerHTML = celsToFah(inputTemp) + "&#176; Fahrenhiet";

    }

    else {
        document.getElementById("result").innerHTML = fahToCels(inputTemp) + "&#176; celsius";

    }

}