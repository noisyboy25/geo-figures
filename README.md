# geo-figures

![npm (scoped)](https://img.shields.io/npm/v/@noisyboy25/geo-figures)

Example TS library for geometric figures

## Installation

```bash
npm i @noisyboy25/geo-figures
```

## Example

```ts
import { Triangle, Rectangle, Circle } from '@noisyboy25/geo-figures';

const t = new Triangle(3, 4, 5);
console.log(t.area());
// 6

const r = new Rectangle(10, 2);
console.log(r.area());
// 20

const c = new Circle(2);
console.log(c.diameter());
// 4
```

## Docs

[Pages](https://noisyboy25.github.io/geo-figures/)
