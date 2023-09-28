/* CONERSÃO DÓLAR */

window.onload = function () {

    fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL').then(resposta => {
        return resposta.json()
    }).then(economia => {

        /* Card 1 */
        valor = document.getElementById("dolar").innerHTML

        conversao = economia.USDBRL.bid * valor;
        conversao0 = economia.USDBRL.bid
        

        const total = Number(conversao.toFixed(2));

        document.getElementById("real").innerHTML = "US$" + valor + ",00 equivale a R$" + total
        
            

        /* Card 2 */
        valor2 = document.getElementById("dolar2").innerHTML

        conversao2 = economia.USDBRL.bid * valor2;

        const total2 = Number(conversao2.toFixed(2));

        document.getElementById("real2").innerHTML = "US$" + valor2 + ",00 equivale a R$" + total2


        /* Card 3 */
        valor3 = document.getElementById("dolar3").innerHTML

        conversao3 = economia.USDBRL.bid * valor3;

        const total3 = Number(conversao3.toFixed(2));

        document.getElementById("real3").innerHTML = "US$" + valor3 + ",00 equivale a R$" + total3

        /* Card 4 */
        valor4 = document.getElementById("dolar4").innerHTML

        conversao4 = economia.USDBRL.bid * valor4;

        const total4 = Number(conversao4.toFixed(2));

        document.getElementById("real4").innerHTML = "US$" + valor4 + ",00 equivale a R$" + total4

        /* Card 5 */
        valor5 = document.getElementById("dolar5").innerHTML

        conversao5 = economia.USDBRL.bid * valor5;

        const total5 = Number(conversao5.toFixed(2));

        document.getElementById("real5").innerHTML = "US$" + valor5 + ",00 equivale a R$" + total5

        /* Card 6 */
        valor6 = document.getElementById("dolar6").innerHTML

        conversao6 = economia.USDBRL.bid * valor6;

        const total6 = Number(conversao6.toFixed(2));

        document.getElementById("real6").innerHTML = "US$" + valor6 + ",00 equivale a R$" + total6
    })
};

/* FIM CONERSÃO DÓLAR */


/* Total a pagar */

/* FIM Total a pagar */