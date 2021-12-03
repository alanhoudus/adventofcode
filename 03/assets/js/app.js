const app = {
    init: function () {
        app.loopThroughArray();
    },

    loopThroughArray: function () {

        // Set a horizontal and vertical position for the submarine
        let horizontalPosition = 0;
        let verticalPosition = 0;

        // Loop through each index of the array
        for (let index = 0; index < array.position.length; index++) {

            // Set the current index in a variable
            let currentIndex = array.position[index];
            // Split the current index
            let splitIndex = currentIndex.split(' ');

            // If the instruction is forward
            if (splitIndex[0] == 'forward') {
                // Add the int movement to the correspondent position
                horizontalPosition += parseInt(splitIndex[1])
            }
            // If the instruction is up
            if (splitIndex[0] == 'up') {
                // Add the int movement to the correspondent position
                verticalPosition -= parseInt(splitIndex[1])
            }
            // If the instruction is down
            if (splitIndex[0] == 'down') {
                // Add the int movement to the correspondent position
                verticalPosition += parseInt(splitIndex[1])
            }

        }

        // Add the counter to the DOM
        const positionElement = document.querySelector('.position');
        positionElement.textContent += verticalPosition * horizontalPosition;

    }

}

window.addEventListener("DOMContentLoaded", app.init);