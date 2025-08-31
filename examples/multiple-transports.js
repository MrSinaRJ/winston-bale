/*
 * Multiple transports, different chats, different options.
 */

const winston = require('winston')
const BaleLogger = require('../lib/winston-bale')

const logger = winston.createLogger({
  transports: [
    new BaleLogger({
      name: 'error-channel',
      token: 'BALE_TOKEN',
      chatId: 'CHAT_ID',
      level: 'error',
      unique: true
    }),
    new BaleLogger({
      name: 'info-channel',
      token: 'BALE_TOKEN',
      chatId: 'CHAT_ID',
      level: 'info',
      unique: true,
      disableNotification: true
    })
  ]
})

logger.error('All work and no play makes Jack a dull boy.')
logger.info('Come play with us, Danny. Forever... and ever... and ever.')
