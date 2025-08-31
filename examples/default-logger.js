/*
 * Using the default logger.
 */

const logger = require('winston')
const BaleLogger = require('../lib/winston-bale')

logger.add(
  new BaleLogger({
    token: 'BALE_TOKEN',
    chatId: 'CHAT_ID',
    level: 'error',
    unique: true
  })
)

logger.error('Heeere’s Johnny!')
logger.log({ level: 'error', message: 'Heeere’s Johnny!' })
