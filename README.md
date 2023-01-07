# @localtools/base64

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/localtools/nodejs-base64/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/localtools/nodejs-base64/tree/main)
[![codecov](https://codecov.io/gh/localtools/nodejs-base64/branch/main/graph/badge.svg?token=I19QZWD095)](https://codecov.io/gh/localtools/nodejs-base64)

[![Running Code Coverage](https://github.com/localtools/nodejs-base64/actions/workflows/coverage.yml/badge.svg)](https://github.com/localtools/nodejs-base64/actions/workflows/coverage.yml)

[![Node.js build and publish package](https://github.com/localtools/nodejs-base64/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/localtools/nodejs-base64/actions/workflows/npm-publish.yml)

[![Node.js build and publish package on GitHub Registry](https://github.com/localtools/nodejs-base64/actions/workflows/github-npm-publish.yml/badge.svg)](https://github.com/localtools/nodejs-base64/actions/workflows/github-npm-publish.yml)

A Node.js library for encoding and decoding text as Base64.

## Installation

To install `@localtools/base64`, run the following command:

```ts
npm install @localtools/base64
```

## Usage

To use `@localtools/base64`, import the `Base64` class and call its `encode` and `decode` methods:

```ts
import { Base64 } from '@localtools/base64';

const encodedText = Base64.encode({ text: 'hello world' });
console.log(encodedText); // Outputs: "aGVsbG8gd29ybGQ="

const decodedText = Base64.decode({ base64Text: encodedText });
console.log(decodedText); // Outputs: "hello world"
```

The `encode` method takes an object with a `text` field, and returns the Base64 encoding of the text. The `decode` method takes an object with a `base64Text` field, and returns the text represented by the Base64 encoding.

## API

### `Base64.encode(args: EncodeArgs): string`

Encodes a text string as a Base64 string.

#### Parameters

- `args` (`EncodeArgs`): An object with the following fields:
  - `text` (`string`): The text to encode.
  - `encoding` (`string`): The encoding to use. Defaults to `'base64'`.
  - `start` (`number`): The index of the first character in the text to encode. Defaults to `0`.
  - `end` (`number`): The index of the last character in the text to encode. Defaults to `text.length`.

#### Returns

A Base64-encoded string.

### `Base64.decode(args: DecodeArgs): string`

Decodes a Base64 string as a text string.

#### Parameters

- `args` (`DecodeArgs`): An object with the following fields:
  - `base64Text` (`string`): The Base64 string to decode.
  - `fromEncoding` (`string`): The encoding of the Base64 string. Defaults to `'base64'`.
  - `outputEncoding` (`string`): The encoding to use for the output text. Defaults to `'utf8'`.

#### Returns

The text represented by the Base64 string.

## 📝 License

Copyright © 2023 [LocalTools](https://github.com/localtools).<br />
This project is [MIT](LICENSE) licensed.
