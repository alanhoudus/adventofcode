const app = {
    init: function () {
        app.loopThroughArray();
    },

    loopThroughArray: function () {

        // Set a counter measuring each increase
        let increasedMesurement = 0;

        // Loop through each index of the array
        for (let index = 0; index < array.measurement.length; index++) {

            // If index x+1 is higher than current index, the measurement was increased
            if (array.measurement[index + 1] > array.measurement[index]) {
                // Increment the counter
                increasedMesurement++;
            }
        }

        // Add the counter to the DOM
        const counterElement = document.querySelector('.counter');
        counterElement.textContent += increasedMesurement;
    }
}

window.addEventListener("DOMContentLoaded", app.init);