/* FRETE */

/* VALOR FRETES POR REGIÃO */
/*Nordeste*/
const nordeste = 45;
/* const AL = 45
const CE = 45
const BA = 45
const MA = 45
const RN = 45
const PE = 45
const PI = 45
const PB = 45
const SE = 45 */

/* Norte */
const norte = 40;
/* const AC = 40
const RO = 40
const RR = 40
const AP = 40
const AM = 40
const PA = 40
const TO = 40 */

/* Centro-oeste */
const centroOeste = 25;
/* const GO = 25
const MT = 25
const MS = 25
const DF = 25 */

/* Sudeste */
const sudeste = 10;
const SP = "Grátis";
/* const ES = "Grátis"
const MG = "Grátis"
const RJ = "Grátis" */

/* Sul */
const sul = 20;
/* const RS = 20
const PR = 20
const SC = 20 */

function calculaFrete() {
  const cep = document.getElementById("cep").value;
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  console.log(cep);
  document.getElementById("cep").value = "";

  fetch(url)
    .then((resposta) => {
      return resposta.json();
    })
    .then((endereco) => {
      console.log(endereco);

      /* FRETE PARA O NORDESTE */
      if (
        endereco.uf == "AL" ||
        endereco.uf == "CE" ||
        endereco.uf == "BA" ||
        endereco.uf == "MA" ||
        endereco.uf == "RN" ||
        endereco.uf == "PE" ||
        endereco.uf == "PI" ||
        endereco.uf == "PB" ||
        endereco.uf == "SE"
      ) {
        document.getElementById("frete").innerHTML =
          "O valor do frete é R$" + nordeste + ",00 reais";

        /* FRETE PARA O NORTE */
      }
      if (
        endereco.uf == "AC" ||
        endereco.uf == "RO" ||
        endereco.uf == "RR" ||
        endereco.uf == "AP" ||
        endereco.uf == "AM" ||
        endereco.uf == "PA" ||
        endereco.uf == "TO"
      ) {
        document.getElementById("frete").innerHTML =
          "O valor do frete é R$" + norte + ",00 reais";

        /* FRETE PARA O CENTRO-OESTE */
      }
      if (
        endereco.uf == "GO" ||
        endereco.uf == "MT" ||
        endereco.uf == "MS" ||
        endereco.uf == "DF"
      ) {
        document.getElementById("frete").innerHTML =
          "O valor do frete é R$" + centroOeste + ",00 reais";

        /* FRETE PARA O SUDESTE */
      }
      if (endereco.uf == "ES" || endereco.uf == "MG" || endereco.uf == "RJ") {
        document.getElementById("frete").innerHTML =
          "O valor do frete é R$" + sudeste + ",00 reais.";
      }
      if (endereco.uf == "SP") {
        document.getElementById("frete").innerHTML = "O valor do frete é " + SP;
      }
      /* FRETE PARA O SUL */
      if (endereco.uf == "RS" || endereco.uf == "PR" || endereco.uf == "SC") {
        document.getElementById("frete").innerHTML =
          "O valor do frete é R$" + sul + ",00 reais";
      }
    });
}

/* FIM FRETE */

function calculaFrete() {
  const cep = document.getElementById("cep").value;
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  console.log(cep);
  document.getElementById("cep").value = "";

  fetch(url)
    .then((resposta) => {
      return resposta.json();
    })
    .then((endereco) => {
      console.log(endereco);

      // Crie um objeto com os valores de frete para cada estado
      const fretePorEstado = {
        CE: 45,
        AL: 45,
        BA: 45,
        MA: 45,
        RN: 45,
        PE: 45,
        PI: 45,
        PB: 45,
        SE: 45,

        AC: 40,
        RO: 40,
        RR: 40,
        AP: 40,
        AM: 40,
        PA: 40,
        TO: 40,

        GO: 25,
        MT: 25,
        MS: 25,
        DF: 25,

        ES: 10,
        SP: "Grátis",
        MG: 10,
        RJ: 10,

        RS: 20,
        PR: 20,
        SC: 20,
      };

      const totalFrete = fretePorEstado[endereco.uf] || 0;

      // Atualize o elemento HTML com o valor total do frete
      document.getElementById("frete").innerHTML =
        totalFrete > 0
          ? "O valor do frete é R$" + totalFrete + ",00 reais"
          : "Frete Grátis";

      // Obtenha o preço do produto
      const precoProduto = parseFloat(
        document.getElementById("dolar").innerHTML
      );

      // Calcule o valor total (produto + frete)
      document.getElementById(conversao0);
      const valorTotal = precoProduto * conversao0 + totalFrete;

      // Atualize o elemento HTML com o valor total do produto + frete
      document.getElementById("totalProdutoFrete").innerHTML =
        "Total (Produto + Frete): R$" + valorTotal.toFixed(2);
    });
}
