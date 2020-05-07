const Twitter = require("twitter")
const config = require("./config.js")
const T = new Twitter(config)

module.exports = T;