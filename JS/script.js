//
// deklarerer variabler
//
let saldo = 5000;
let aksjer = [];
 
let krToyota = 200;
let antallToyotaAksjer = 0
let krTesla = 1000;
let antallTeslaAksjer = 0
let krBMW = 500;
let antallBMWAksjer = 0
 
let selskapAksjer = ["Toyota", "Tesla", "BMW"]
let prisAksjer = [200, 1000, 500]
 
 
//
// kjører dette en gang når siden er lastet inn
//
updateUI();
 
setInterval(updateCarPrices, 300);
 
 
 
 
 
//
// oppretter funksjoner
//
function updateUI(){
    saldo = Math.round(saldo*100)/100
    document.getElementById("viserSaldo").innerText = saldo
    document.getElementById("viserTeslaAksjer").innerText = antallTeslaAksjer
    document.getElementById("viserBMWAksjer").innerText = antallBMWAksjer
    document.getElementById("viserToyotaAksjer").innerText = antallToyotaAksjer
    document.getElementById("viserKrToyota").innerText = krToyota
    document.getElementById("viserKrTesla").innerText = krTesla
    document.getElementById("viserKrBMW").innerText = krBMW
}
 
function buyTesla(){
    if(saldo < krTesla) {
        window.alert("Du har ikke nok penger!")
    }
    else{
        saldo = saldo - krTesla;
        antallTeslaAksjer++;
    }
    updateUI();
}
 
function sellTesla(){
    if(antallTeslaAksjer > 0){
    saldo = saldo + krTesla;
    antallTeslaAksjer--;
    }
    else{
        window.alert("Du har ingen aksjer!")  
    }
    updateUI();
}
 
function buyBMW(){
    if(saldo < krBMW) {
        window.alert("Du har ikke nok penger!")
    }
    else{
        saldo = saldo - krBMW;
        antallBMWAksjer++;
    }
    updateUI();
}
 
function sellBMW(){
    if(antallBMWAksjer > 0){
        saldo = saldo + krBMW;
        antallBMWAksjer--;
        }
        else{
            window.alert("Du har ingen aksjer!")  
        }
    updateUI();
}
 
function buyToyota(){
    if(saldo < krToyota) {
        window.alert("Du har ikke nok penger!")
    }
    else{
        saldo = saldo - krToyota;
        antallToyotaAksjer++;
    }
    updateUI();
}
 
function sellToyota(){
    if(antallToyotaAksjer > 0){
        saldo = saldo + krToyota;
        antallToyotaAksjer--;
        }
        else{
            window.alert("Du har ingen aksjer!")  
        }
    updateUI();
}
 
/*function generateRandomPrice(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
}*/
 
function generateRandomPrice(naverende) {
    endring = Math.random()*100 - 50;
    nypris = Math.round((naverende + endring)*100)/100;
    if (nypris < 0){nypris = 0}
    return nypris;
}
 
 
function updateCarPrices() {
    krTesla = generateRandomPrice(krTesla);  
    krBMW = generateRandomPrice(krBMW);     
    krToyota = generateRandomPrice(krToyota);
 
    updateUI();
 
}
 
 