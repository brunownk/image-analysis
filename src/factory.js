const aws = require('aws-sdk')
const Handler = require('./handler')

const reko = new aws.Rekognition()
const translator = new aws.Translate()

const handler = new Handler({
  rekoSvc: reko,
  translatorSvc: translator
})

// o bind serve para assegurar que o contexto o this é a instância do handler
module.exports = handler.main.bind(handler)