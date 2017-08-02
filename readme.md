# nicobar

> Javascript package for theming layouts.

[![NPM Version](https://img.shields.io/npm/v/nicobar.svg)](https://www.npmjs.org/package/nicobar)
[![Build Status](https://travis-ci.org/jeffersonmourak/nicobar.svg?branch=master)](https://travis-ci.org/jeffersonmourak/nicobar)

## Install
Make sure you have `node` and `npm` installed.

`$ npm install nicobar`

## Using
### Vanilla JS
Create or update your code as normal using your CSS, but if something have to be changed, use CSS Custom properties to set a variable.

**Like this**
```css
.some-class {
   display: inline-block;
   background: var(--background, #f00);  
}
```

then in JS your code.

```javascript
nicobar.set('.some-class', { background: '#0f0' });
```

you can use it how many times you want.

**nicobar.set(target, data)**
the `set` method accept `String` or `HTMLElement` (for while).
and the `data` is a `Object` with key as custom-property name.

### React
Inject nicobar in your project
```javascript
import nicobar from 'nicobar'
// or
const nicobar = require('nicobar');
```
then init on your component
**Component Constructor**
```javascript
class MyComponent extends react {
  constructor() {
    ...
    this.nicobar = nicobar.init(this);
    ...
  }
}
when it is done you can run nicobar on your component when you want.

```javascript
...
this.nicobar.set({ variables });
...
```

## Contributing

1. Fork
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Submit a pull request

>Feature branch (`git checkout -b my-new-feature`) | commit (`git commit -m 'Add some feature'`) | push (`git push origin my-new-feature`).

## License

[MIT License](http://opensource.org/licenses/MIT)
