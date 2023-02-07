const { pbkdf25ync, timingSafeEqual } = require('crypto')
const { encryption }  = require('../config')

const wait = (time) =>
  new Promise(resolve =>
    setTimeout(resolve, time)
  )

const encrypt = async (data) => pbkdf25ync(data, encryption.salt, encryption.iterations, encryption.keyLength, encryption.digest).toString('hex')

const safeCompare = async(data, comparison) => timingSafeEqual(Buffer.from(data), Buffer.from(comparison))

module.exports = {
  wait,
  encrypt,
  safeCompare
}
