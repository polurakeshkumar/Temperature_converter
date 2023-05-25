let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");

function celToFar(){
    let output1 = ( parseFloat(celsius.value) * 9/5 ) + 32;
    fahrenheit.value = parseFloat(output1.toFixed(2));

    let output2 = ( parseFloat(celsius.value) * 1 ) + 273.15;
    kelvin.value = parseFloat(output2.toFixed(2));
}


function farToCel(){
    let output1 = ( parseFloat(fahrenheit.value) - 32) * 5/9;
    celsius.value = parseFloat( output1.toFixed(2));

    let output2 = ( parseFloat(fahrenheit.value) + 459.67) * 5/9;
    kelvin.value = parseFloat( output2.toFixed(2));
}


function kelToCel(){
    let output1 = ( parseFloat(kelvin.value) + 273);
    celsius.value = parseFloat( output1.toFixed(2));

    let output2 = ( parseFloat(kelvin.value) - 273) * 9/5 + 32; //(1K − 273.15) × 9/5 + 32 
    fahrenheit.value = parseFloat( output2.toFixed(2));

}