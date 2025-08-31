import TransportStream = require('winston-transport')

declare class WinstonBale extends TransportStream {
  constructor(options: WinstonBale.Options)
}

declare namespace WinstonBale {
  export interface Options {
    /** The Bale messenger bot authentication token. */
    token: string
    /** The Bale messenger chatid you want to send to. */
    chatId: number
    /** The Bale messenger identifier of a message thread to which the message belongs. */
    messageThreadId?: number
    /** The Bale messenger mode for parsing entities in the message text. */
    parseMode?: string
    /** Level of messages that this transport should log. (default "info") */
    level?: string
    /** Whether to log only the declared level and none above. (default false) */
    unique?: boolean
    /** Whether to suppress output. (default false) */
    silent?: boolean
    /** Sends the message silently. (default false) */
    disableNotification?: boolean
    /** ? (default "winston-bale") */
    name?: string
    /** Format output message. (default "[{level}] [message]") */
    template?: string
    /** Format output message by own method. */
    formatMessage?: (params: WinstonBale.FormatOptions, info: any) => string
    /** Handle uncaught exceptions. (default true) */
    handleExceptions?: boolean
    /** Time in ms within which to batch messages together. (default = 0) (0 = disabled) */
    batchingDelay?: number
    /** String with which to join batched messages with (default "\n\n") */
    batchingSeparator?: string
  }

  export interface FormatOptions {
    level: string
    message: string
    metadata: any
  }
}

export = WinstonBale
