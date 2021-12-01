var app = {
    init: function() {
        app.loopThroughArray();
    },

    loopThroughArray: function() {

        let increasedMesurement = 0;
        

        for (let index = 0; index < array.measurement.length; index++) {
            
            if(array.measurement[index+1] > array.measurement[index]){
                increasedMesurement++;
            }
        }
        
        const counterElement = document.querySelector('.counter');
        counterElement.textContent += increasedMesurement;
    }
}

window.addEventListener("DOMContentLoaded", app.init);