# Vite.js

[![Build Status](https://www.travis-ci.org/vitelabs/vite.js.svg?branch=master)](https://www.travis-ci.org/vitelabs/vite.js) [![Coverage Status](https://coveralls.io/repos/github/vitelabs/vite.js/badge.svg?branch=master)](https://coveralls.io/github/vitelabs/vite.js?branch=master)

## Prerequisites

* node.js
* npm

## Building (gulp)

`npm run build`

## Testing (mocha) 

1. `npm run rpc`
2. `npm run test`


## Starting

1. `npm install`
2. Configure eslint in your editor, rules like '.eslintrc'.

### Branch naming rules

* Develop on branch 'dev/{version}/{function name}'
* Test on branch 'test'
* Fixed version on branch 'dev/{version}'

> Notice: development branch split from `dev/{last_version}`. If `dev/{last_version}` is not exist, split from `master`

#### Examples

` 'dev/2.0.0/utf8' from 'dev/1.0.0' || 'master' `