# exact-linspace

[MATLAB-inspired](https://www.mathworks.com/help/matlab/ref/linspace.html) function to create linearly spaced values.

## Importing this function

### Node Modules

- Run `npm install exact-linspace --save`
- Add an import to the npm package `import linspace from 'exact-linspace';`
- Then you can use the function in your code.

### CDN

- Put the following script tag `<script src='https://cdn.jsdelivr.net/npm/exact-linspace@1/dist/exact-linspace.umd.min.js'></script>` in the head of your index.html
- Then you can use the function in your code.

## API

```javascript
ys = linspace(x1, x2);
ys = linspace(x1, x2, n);
```

The function takes the following arguments:

- `x1`: First endpoint.
- `x2`: Second endpoint.
- `n`: Total number of values. Defaults to `100`.

It returns an array of `n` values between `x1` and `x2` including the endpoints.

## Examples

It returns `n` evenly spaced values:

```javascript
var ys = linspace(-5, 5, 7);
console.log(ys);
// expected output: Array [-5.0000, -3.3333, -1.6667, 0, 1.6667, 3.3333, 5.0000]
```

It returns a descending array if `x2` is less than `x1`:

```javascript
var ys = linspace(3, -2, 6);
console.log(ys);
// expected output: Array [3, 2, 1, 0, -1, -2]
```

It returns 100 values by default:

```javascript
var ys = linspace(1, 100);
console.log(ys);
// expected output: Array [1, 2, 3, ..., 98, 99, 100]
```

It returns `x2` if `n` is equal to one:

```javascript
var ys = linspace(-7, 2, 1);
console.log(ys);
// expected output: Array [2]
```

It returns an empty array if `n` is less than or equal to zero:

```javascript
var ys = linspace(2, 4, -1);
console.log(ys);
// expected output: Array []
```

It rounds down `n` if `n` is not an integer:

```javascript
var ys = linspace(4, 6, 3.14);
console.log(ys);
// expected output: Array [4, 5, 6]
```

## NPM scripts

- `npm install`: Install dependencies
- `npm test`: Run test suite
- `npm start`: Run `npm run build` in watch mode
- `npm run test:watch`: Run test suite in [interactive watch mode](http://facebook.github.io/jest/docs/cli.html#watch)
- `npm run test:prod`: Run linting and generate coverage
- `npm run build`: Generate bundles and typings, create docs
- `npm run lint`: Lints code
