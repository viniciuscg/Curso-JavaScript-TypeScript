function calcular() {
    var peso = document.getElementById("peso").value
    var altura = document.getElementById("altura").value
    altura = parseFloat(altura)
    peso = parseFloat(peso)    
    var m = peso / (altura * altura)
    var i = ""; 
    

    if (m < 16){
        i = 'Abaixo do peso muito grave';
    } else if (m > 16 && m < 16.99) {
        i = 'Abaixo do peso grave';
    } else if (m > 17 && m < 18.49) {
        i = 'Abaixo do peso';
    } else if (m > 18.50 && m < 24.99) {
        i = 'Peso normal';
    } else if (m > 24 && m < 29.99) {
        i = 'Sobrepeso';
    } else if (m > 30 && m < 34.99) {
        i = 'Obesidade de primeiro grau';
    } else if (m > 35 && m < 39.99) {
        i = 'Obesidade de segundo grau'; 
    } else if (m > 40) {
        i = 'Obesidade de terceiro grau';
    }
    document.getElementById('msg').innerHTML = i + ' ' + m.toFixed(2)


}