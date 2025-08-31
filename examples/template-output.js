/*
 * Using template output.
 */

const logger = require('winston')
const BaleLogger = require('../lib/winston-bale')

logger.add(
  new BaleLogger({
    token: 'BALE_TOKEN',
    chatId: 'CHAT_ID',
    level: 'error',
    unique: true,
    template: '[{level}] [{message}] [{metadata.name}] [{metadata.surname}]'
  })
)

logger.log({
  level: 'error',
  message: 'Redrum. Redrum. Redrum.',
  metadata: { name: 'Danny', surname: 'Torrance' }
})

// Output: [error] [Redrum. Redrum. Redrum.] [Danny] [Torrance]
