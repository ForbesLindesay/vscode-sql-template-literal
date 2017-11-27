# vscode-sql-template-literal

[![Greenkeeper badge](https://badges.greenkeeper.io/ForbesLindesay/vscode-sql-template-literal.svg)](https://greenkeeper.io/)

Syntax highlighting for code like:

```js
const query = sql`SELECT * FROM users`;
```

## Publishing

May require token, stored in last pass. Go to
https://forbeslindesay.visualstudio.com/_details/security/tokens if token needs
regenerating.

```
npm install -g vsce
vsce publish
```
