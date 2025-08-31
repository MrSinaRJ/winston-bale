# winston-bale

[![NPM](https://nodei.co/npm/winston-bale.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/winston-bale/)

A [Bale][0] transport for [winston][1].

[![Version npm](https://img.shields.io/npm/v/winston-bale.svg)](https://www.npmjs.com/package/winston-bale)
[![npm Downloads](https://img.shields.io/npm/dw/winston-bale.svg)](https://npmcharts.com/compare/winston-bale?minimal=true)
[![CI Status](https://github.com/MrSinaRJ/winston-bale/actions/workflows/ci.yaml/badge.svg?branch=master)](https://github.com/MrSinaRJ/winston-bale/actions/workflows/ci.yaml)
[![Coverage Status](https://coveralls.io/repos/github/MrSinaRJ/winston-bale/badge.svg?branch=master)](https://coveralls.io/github/MrSinaRJ/winston-bale?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## winston-bale@2

## Caution:
This is an attempt to change Winston Telegram to Winston Bale to support Bale messenger. There is no guarantee that this will work


Installation:
``` sh
$ npm install winston@3
$ npm install winston-bale@2
```

## Looking for `winston-bale@1.x` ?
Documentation below is for `winston-bale@2`. [Read the `winston-bale@1.x` documentation][2].

## Usage
``` js
const logger = require('winston')
const BaleLogger = require('winston-bale')

// or
import BaleLogger from 'winston-bale';

logger.add(new BaleLogger(options))
```

Options:

* `token` The Bale bot authentication token. *[required]*
* `chatId` The Bale chatid you want to send to. *[required]*
* `messageThreadId` The Bale unique identifier of a message thread to which the message belongs. *[optional]*
* `parseMode` The Bale mode for parsing entities in the message text. See [formatting options][4] for more details. *[optional]*
* `level` Level of messages that this transport should log. *[optional]* *[default info]*
* `unique` Whether to log only the declared level and none above. *[boolean]* *[optional]*
* `silent` Whether to suppress output. *[boolean]* *[optional]*
* `disableNotification` Sends the message silently. *[boolean]* *[optional]*
* `template` Format output message. *[string]* *[optional]*
* `formatMessage` Format output message by own method. *[function]* *[optional]*
* `handleExceptions` Handle uncaught exceptions. *[boolean]* *[optional]*
* `batchingDelay` Time in ms within which to batch messages together. *[integer]* *[optional]* *[default 0 or disabled]*
* `batchingSeparator` String with which to join batched messages with *[string]* *[default "\n\n"]*

String template is based on named arguments:
``` js
'{level}' -> level of messages
'{message}' -> text of messages
'{metadata}' -> metadata object of messages
```

## Examples

Follow below steps to run the examples:

``` sh
$ git clone git@github.com:MrSinaRJ/winston-bale.git -b master --single-branch
$ npm install
```

Replace `BALE_TOKEN` and `CHAT_ID` with appropiate values, then run whatever example you want:

``` sh
$ node examples/default-logger.js
```

[0]: https://bale.ai/
[1]: https://github.com/flatiron/winston
[3]: https://github.com/MrSinaRJ/winston-bale/tree/master/examples
[4]: https://docs.bale.ai/
