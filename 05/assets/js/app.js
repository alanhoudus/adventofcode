const app = {
    init: function () {
        app.loopThroughArray();
    },

    loopThroughArray: function () {

        let gammaRate = '';
        let epsilonRate = '';
        let totalOne = 0;
        let totalTwo = 0;
        let totalThree = 0;
        let totalFour = 0;
        let totalFive = 0;
        let totalSix = 0;
        let totalSeven = 0;
        let totalEight = 0;
        let totalNine = 0;
        let totalTen = 0;
        let totalEleven = 0;
        let totalTwelve = 0;

        for (let index = 0; index < array.power.length; index++) {

            // Split the index in an array
            array.power[index].split(' ');

            // Set each first number in a variable
            totalOne += parseInt(array.power[index][0]);
            totalTwo += parseInt(array.power[index][1]);
            totalThree += parseInt(array.power[index][2]);
            totalFour += parseInt(array.power[index][3]);
            totalFive += parseInt(array.power[index][4]);
            totalSix += parseInt(array.power[index][5]);
            totalSeven += parseInt(array.power[index][6]);
            totalEight += parseInt(array.power[index][7]);
            totalNine += parseInt(array.power[index][8]);
            totalTen += parseInt(array.power[index][9]);
            totalEleven += parseInt(array.power[index][10]);
            totalTwelve += parseInt(array.power[index][11]);
        }

        // Not well done but it works, if they are more 1s than 0s, than the total should be higher than half or equal to half of the array length, then the first binary number is a 1. If it's lower than the first binary number is a 0.
        if (totalOne >= array.power.length / 2) {
            gammaRate += '1';
        } else {
            gammaRate += '0';
        }
        if (totalOne <= array.power.length / 2) {
            epsilonRate += '1';
        } else {
            epsilonRate += '0';
        }

        if (totalTwo >= array.power.length / 2) {
            gammaRate += '1';
        } else {
            gammaRate += '0';
        }
        if (totalTwo <= array.power.length / 2) {
            epsilonRate += '1';
        } else {
            epsilonRate += '0';
        }

        if (totalThree >= array.power.length / 2) {
            gammaRate += '1';
        } else {
            gammaRate += '0';
        }
        if (totalThree <= array.power.length / 2) {
            epsilonRate += '1';
        } else {
            epsilonRate += '0';
        }

        if (totalFour >= array.power.length / 2) {
            gammaRate += '1';
        } else {
            gammaRate += '0';
        }
        if (totalFour <= array.power.length / 2) {
            epsilonRate += '1';
        } else {
            epsilonRate += '0';
        }

        if (totalFive >= array.power.length / 2) {
            gammaRate += '1';
        } else {
            gammaRate += '0';
        }
        if (totalFive <= array.power.length / 2) {
            epsilonRate += '1';
        } else {
            epsilonRate += '0';
        }

        if (totalSix >= array.power.length / 2) {
            gammaRate += '1';
        } else {
            gammaRate += '0';
        }
        if (totalSix <= array.power.length / 2) {
            epsilonRate += '1';
        } else {
            epsilonRate += '0';
        }

        if (totalSeven >= array.power.length / 2) {
            gammaRate += '1';
        } else {
            gammaRate += '0';
        }
        if (totalSeven <= array.power.length / 2) {
            epsilonRate += '1';
        } else {
            epsilonRate += '0';
        }

        if (totalEight >= array.power.length / 2) {
            gammaRate += '1';
        } else {
            gammaRate += '0';
        }
        if (totalEight <= array.power.length / 2) {
            epsilonRate += '1';
        } else {
            epsilonRate += '0';
        }

        if (totalNine >= array.power.length / 2) {
            gammaRate += '1';
        } else {
            gammaRate += '0';
        }
        if (totalNine <= array.power.length / 2) {
            epsilonRate += '1';
        } else {
            epsilonRate += '0';
        }

        if (totalTen >= array.power.length / 2) {
            gammaRate += '1';
        } else {
            gammaRate += '0';
        }
        if (totalTen <= array.power.length / 2) {
            epsilonRate += '1';
        } else {
            epsilonRate += '0';
        }

        if (totalEleven >= array.power.length / 2) {
            gammaRate += '1';
        } else {
            gammaRate += '0';
        }
        if (totalEleven <= array.power.length / 2) {
            epsilonRate += '1';
        } else {
            epsilonRate += '0';
        }

        if (totalTwelve >= array.power.length / 2) {
            gammaRate += '1';
        } else {
            gammaRate += '0';
        }
        if (totalTwelve <= array.power.length / 2) {
            epsilonRate += '1';
        } else {
            epsilonRate += '0';
        }

        // Add the gamma and epsilon rate to the DOM
        const gamma = document.querySelector('.gamma');
        gamma.textContent += gammaRate;
        const epsilon = document.querySelector('.epsilon');
        epsilon.textContent += epsilonRate;
    }
}

window.addEventListener('DOMContentLoaded', app.init);