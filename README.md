# ring

Your average array made cyclical by using [`Proxy`](https://kangax.github.io/compat-table/es6/#test-Proxy)

```js
import ring from '@ricardomatias/ring';

const AM7 = [ 'A', 'C', 'E', 'G' ];
const am7 = ring(AM7);

const first = am7[0]; // 'A'
const firstAgain = am7[4]; // 'A'
const firstYetAgain = am7[-4]; // 'A'

AM7 === am7 // => false
```

## Install

Use [npm](https://npmjs.com/) to install.

```sh
npm install @ricardomatias/ring --save
```

## Usage

#### `ring([Array])`

Returns a new *proxied* array. Provides access to all the native `Array` methods and properties.


## License

MIT, see [LICENSE.md](http://github.com/ricardomatias/ring/blob/master/LICENSE.md) for details.
