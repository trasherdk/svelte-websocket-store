[![Svelte v3](https://img.shields.io/badge/svelte-v3-orange.svg)](https://svelte.dev)
[![npm](https://img.shields.io/npm/v/svelte-websocket-store.svg)](https://www.npmjs.com/package/svelte-websocket-store)
[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
[![minified size](https://badgen.net/bundlephobia/min/svelte-websocket-store)](https://bundlephobia.com/result?p=svelte-websocket-store)
[![downloads](http://img.shields.io/npm/dm/svelte-websocket-store.svg?style=flat-square)](https://npmjs.org/package/svelte-websocket-store)
[![GitHub Issues](https://img.shields.io/github/issues/arlac77/svelte-websocket-store.svg?style=flat-square)](https://github.com/arlac77/svelte-websocket-store/issues)
[![Build Status](https://secure.travis-ci.org/arlac77/svelte-websocket-store.png)](http://travis-ci.org/arlac77/svelte-websocket-store)
[![Greenkeeper](https://badges.greenkeeper.io/arlac77/svelte-websocket-store.svg)](https://greenkeeper.io/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/arlac77/svelte-websocket-store)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Known Vulnerabilities](https://snyk.io/test/github/arlac77/svelte-websocket-store/badge.svg)](https://snyk.io/test/github/arlac77/svelte-websocket-store)

# svelte-websocket-store

Svelte store with a websocket backend

```js
import { websocketStore } from 'svelte-websocket-store';

const initialValue = { };
export const myStore = websocketStore("wss://mydomain.com/ws1", initialValue, ['option 1', 'option 2']);


// send JSON to websocket server
$myStore = { content: "to be saved", other_values: "all" };


// receive JSON from server (push)
let response = $myStore;

```

# API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

## Table of Contents


# install

With [npm](http://npmjs.org) do:

```shell
npm install svelte-websocket-store
```

With [yarn](https://yarnpkg.com) do:

```shell
yarn add svelte-websocket-store
```

# license

BSD-2-Clause
