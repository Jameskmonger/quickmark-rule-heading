# quickmark-rule-heading

Heading text matching rule for [quickmark](https://github.com/jameskmonger/quickmark).

## Usage

```javascript
const heading = require('quickmark-rule-heading');

heading('# Team members');
// {
//     original: '# Team members',
//     parsed: 'Team members',
//     depth: 1
// }



heading('#### Houses for sale');
// {
//     original: '#### Houses for sale',
//     parsed: 'Houses for sale',
//     depth: 4
// }



heading('not a heading');
// undefined
```

## License

[MIT](LICENSE)
