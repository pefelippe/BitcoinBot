const axios = require("axios")

var today = new Date();
console.log(today.getDate())
// responsável por POSTAR o tweet
function postarTweet(bot, tweet){
  console.log("Postando Tweet");
  // bot.post('statuses/update', tweet, data => console.log(data))
  console.log(tweet)
}

// responsável por GERAR o tweet que será postado
function tweetarCotacaoBitcoin(bot){
  const urlBTC = "https://www.mercadobitcoin.net/api/BTC/ticker/";

  axios.get(urlBTC)
  .then(e => {
    var tweet = {
      status : `
      COTAÇÃO BITCOIN - ${today}
      Valor atual : R$ ${e.data.ticker.last}
      Valor Max do dia: R$ ${e.data.ticker.high}
      Valor Min do dia: R$ ${e.data.ticker.low}`
    }

    postarTweet(bot, tweet); 

  })
}

// responsável pelo SCHEDULE dos tweets
function scheduleCotacaoBitcoin(bot, timeout = 0){
    if(timeout !== 0){
        setInterval(() => tweetarCotacaoBitcoin(bot), timeout)
    }
    else{
      tweetarCotacaoBitcoin(bot)
    }
}


// EXPORTS
exports.postarTweet= postarTweet;
exports.cotacaoBitcoin = scheduleCotacaoBitcoin;
