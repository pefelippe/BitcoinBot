const Twitter = require("twitter")
const config = require("./config")
const api = new Twitter(config)
const axios = require("axios")

const delayMin = 1000 * 60; // minuto
const delayMax = 1000 * 60 * 60 * 24 // dia

// Função para gerar o tweet
function gerarTweet()
{
  axios.get(config.urlBTC)
  .then(e => {
    console.log(e.data)
    var tweet = {
      status : `
      COTAÇÃO BITCOIN
      Valor atual : R$ ${e.data.ticker.last}
      Valor Max do dia: R$ ${e.data.ticker.high}
      Valor Min do dia: R$ ${e.data.ticker.low}`
    }

    api.post('statuses/update', tweet, data => console.log(data));
  })
}

setInterval(gerarTweet, delayMin)

