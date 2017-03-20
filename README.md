# travis-init

> Add TravisCI to your project

[![Build Status](https://travis-ci.org/bukinoshita/travis-init.svg?branch=master)](https://travis-ci.org/bukinoshita/travis-init)

## Install

```bash
$ npm install --save travis-init
```

## Usage

```js
import travisInit from 'travis-init'

const opts = {language: 'node_js', versions: ['6', '4']}

travisInit(opts).then(res => console.log(res))

// => .travis.yml created
```

## API
### travisInit(options)

#### options
Type: `object`

Should contain `language` and `versions`

#### language
Type: `string`<br/>
Options: for now we only support `node_js`<br/>
Optional

#### versions
Type: `array`<br/>
Options:<br/>
- `node` - latest stable Node.js release<br/>
- `iojs` - latest stable io.js release<br/>
- `7` - latest 7.x release<br/>
- `6` - latest 6.x release<br/>
- `5` - latest 5.x release<br/>
- `4` - latest 4.x release<br/>

Optional

## License
[MIT](https://github.com/bukinoshita/travis-init/blob/master/LICENSE) &copy; Bu Kinoshita
