# pandoc-bin [![Build Status](https://travis-ci.org/JonnyBurger/pandoc-bin.svg?branch=master)](https://travis-ci.org/JonnyBurger/pandoc-bin)

> Super easy format conversions in node using pandoc. No additional installations needed. macOS and Linux supported.

## Install

```
$ npm install --save pandoc-bin
```


## Usage

```js
const pandoc = require('pandoc-bin');

await pandoc({input: '*yo*'});
//=> '<p><em>yo</em></p>'

await pandoc(['--from=html', '--to=latex'], {input: 'e = mc<sup>2</sup>'})
//=> 'e = mc\\textsuperscript{2}'
```

# Warning
The binary included in this module is >80MB. You may experience slower `npm install`'s.

## API

### pandoc(input, [arguments], [options])

The API is the same as [execa](https://github.com/sindresorhus/execa). Go to the project to see how to use ut.

## License

MIT © [Jonny Burger](http://jonny.io)
