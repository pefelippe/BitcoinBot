var Twitter = require("twitter")
var config = require("./config")
const axios = require("axios")

var T = new Twitter(config)

// Gerar Tweet sobre a Cotação atual do BTC.
axios.get(config.urlBTC)
.then(e=> {
  var tweet = {
    status : "Valor do Bitcoin: R$ " + e.data.ticker.last
  }

  T.post('statuses/update', tweet, tweeted)

})

// Callback
function tweeted (err, data, response){
  console.log(data)
}
