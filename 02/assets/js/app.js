const app = {
    init: function () {
        app.loopThroughArray();
    },

    loopThroughArray: function () {

        // Set a counter measuring each increase
        let increasedMesurement = 0;

        // Loop through each index of the array
        for (let index = 0; index < array.measurement.length - 2; index++) {

            // Put in variable the group to compare
            let firstGroup = array.measurement[index] + array.measurement[index + 1] + array.measurement[index + 2];
            let secondGroup = array.measurement[index + 1] + array.measurement[index + 2] + array.measurement[index + 3]

            // If second is higher than first group check if the last index is defined, if it is, increment
            if (firstGroup < secondGroup) {


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