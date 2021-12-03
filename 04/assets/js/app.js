const app = {
    init: function () {
        app.loopThroughArray();
    },

    loopThroughArray: function () {

        // Set a horizontal and vertical position and an aim for the submarine
        let horizontalPosition = 0;
        let verticalPosition = 0;
        let aim = 0;

        // Loop through each index of the array
        for (let index = 0; index < array.position.length; index++) {

            // Set the current index in a variable
            let currentIndex = array.position[index];
            // Split the current index
            let splitIndex = currentIndex.split(' ');

            // If the instruction is forward
            if (splitIndex[0] == 'forward') {

                // Depth is modified by the aim
                let forwardMovement = parseInt(splitIndex[1]) * aim;
                verticalPosition += forwardMovement;

                // Add the int movement to the position
                horizontalPosition += parseInt(splitIndex[1]);
            }
            // If the instruction is up
            if (splitIndex[0] == 'up') {
                // Add the int to the aim
                aim -= parseInt(splitIndex[1])
            }
            // If the instruction is down
            if (splitIndex[0] == 'down') {
                // Add the int to the aim
                aim += parseInt(splitIndex[1])
            }

        }

        // Add the counter to the DOM
        const positionElement = document.querySelector('.position');
        positionElement.textContent += verticalPosition * horizontalPosition;

    }


}

window.addEventListener('DOMContentLoaded', app.init);