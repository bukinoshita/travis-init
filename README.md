# travis-init

> Add TravisCI to your project

## Install

```bash
$ npm install --save trvs-init
```

## Usage

```js
import travisInit from 'travis-init'

travisInit()
  .then(res => console.log(res))

// => .travis.yml created
```

## API
### travisInit(language, version)

#### language
Type: `string`<br/>
Options: for now we only support `node_js`<br/>
Default: `node_js`<br/>
Optional

#### version
Type: `string`<br/>
Options:<br/>
- `node` - latest stable Node.js release<br/>
- `iojs` - latest stable io.js release<br/>
- `6` - latest 6.x release<br/>
- `5` - latest 5.x release<br/>
- `4` - latest 4.x release<br/>

Default: `6`<br/>
Optional

## Why

I used to use Codeship as Continuos Integration in all my projects. It worked well for me but then I started to focus a lot in Open Source by creating node libraries. Some awesome people started contributing and helping my libraries and then I learned that [Codeship doesn't run pull requests](https://twitter.com/BuKinoshita/status/837529887141318656) from other person that isn't on the project. [I had to add TravisCI to all my Open Source projects](https://github.com/bukinoshita?tab=overview&from=2017-03-03) in case I receive a new pull request, I want to make sure that all tests are running. It was a pain, so I decide to create travis-init. Happy Ending :heart: :tada:

## License
[MIT](https://github.com/bukinoshita/travis-init/blob/master/LICENSE) &copy; Bu Kinoshita
