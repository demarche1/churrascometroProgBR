const carnePorHoraHomem = 200 // gramas
const carnePorHoraMulher = 100 // gramas
const cervejaPorHora = 2 // latas
const bebidaPorPessoa = 1 //litro

let totalCarne = null

let carneBovina = null
let linguica = null
let frango = null

function calcularCarne(){
    carneBovina = totalCarne * 50 / 100
    linguica = totalCarne * 30 / 100
    frango = totalCarne * 20 / 100
}

function mostrarResultado(carneBovina,linguica,frango,totalCerveja,totalBebida){
     // Mostrando resultados carnes
     if(carneBovina / 1000 > 1){ 
       document.getElementById("resultado_carneBovina").innerHTML = "Carne Bovina: " + (carneBovina / 1000).toFixed(2) + "KG"
     }
     else{
       document.getElementById("resultado_carneBovina").innerHTML = "Carne Bovina: " + (carneBovina / 1000).toFixed(3) + "KG"
     }

     if(linguica / 1000 > 1){
       document.getElementById("resultado_linguica").innerHTML = "Linguiça: " + (linguica / 1000).toFixed(2) + "KG"
     }
     else{
       document.getElementById("resultado_linguica").innerHTML = "Linguiça: " + (linguica / 1000).toFixed(3) + "KG"
     }

     if(frango / 1000 > 1){
       document.getElementById("resultado_frango").innerHTML = "Frango: " + (frango / 1000).toFixed(2) + "KG"
     }
     else{
       document.getElementById("resultado_frango").innerHTML = "Frango: " + (frango / 1000).toFixed(3) + "KG"
     }

     // Mostrando resultado cervejas
     document.getElementById("resultado_ceveja").innerHTML = "Cerveja: " + totalCerveja + " Latas"

     // Mostrando resultado bebidas
     document.getElementById("resultado_bebidas").innerHTML = "Bebidas(Agua,Refrigerante,Suco): " + Math.round(totalBebida) + " Litros "
}




function calcular(){
   let homens = Number(document.getElementById("homens_input").value)
   let mulheres = Number(document.getElementById("mulheres_input").value)
   let criancas = Number(document.getElementById("criancas_input").value)
   let horas = Number(document.getElementById("horas_input").value)
   calcularCarne()
    if(horas > 4){
         // Calculo da Carne 
         let totalCarneHomens = homens * carnePorHoraHomem * 4 + homens * (carnePorHoraHomem / 2) * (horas - 4)
         let totalCarneMulheres = mulheres * carnePorHoraMulher * 4 + mulheres * (carnePorHoraMulher / 2) * (horas - 4)
         let totalCarneCriancas = criancas * carnePorHoraMulher * 4 + criancas * (carnePorHoraMulher / 3) * (horas - 4)
         totalCarne = totalCarneHomens + totalCarneMulheres + totalCarneCriancas
         calcularCarne()

        // Calculo da Cerveja
        let totalCervejaHomens = homens * cervejaPorHora * 4 + homens * (cervejaPorHora / 2) * (horas - 4)
        let totalCervejaMulheres = mulheres * cervejaPorHora * 4 + mulheres * (cervejaPorHora / 2) * (horas - 4)
        let totalCerveja = totalCervejaHomens + totalCervejaMulheres

        // Calculo da babida
        let totalBebida = (homens + mulheres + criancas) * bebidaPorPessoa
        
        // Mostrando Resultado
        mostrarResultado(carneBovina,linguica,frango,totalCerveja,totalBebida)

     
   }
    else{
         // Calculo da Carne 
         let totalCarneHomens = homens * carnePorHoraHomem * horas
         let totalCarneMulheres = mulheres * carnePorHoraMulher * horas
         let totalCarneCriancas = criancas * carnePorHoraMulher * horas
         totalCarne = totalCarneHomens + totalCarneMulheres + totalCarneCriancas
         calcularCarne()
        
        // Calculo da Cerveja
        let totalCervejaHomens = homens * cervejaPorHora * horas
        let totalCervejaMulheres = mulheres * cervejaPorHora * horas
        let totalCerveja = totalCervejaHomens + totalCervejaMulheres
        
        // Calculo da babida
        let totalBebida = homens + mulheres + criancas * bebidaPorPessoa

        // Mostrando Resultado
        mostrarResultado(carneBovina,linguica,frango,totalCerveja,totalBebida)
   }

}

document.getElementById("button").addEventListener("click", calcular)