# generator-js-lib [![Build Status](https://secure.travis-ci.org/sebastiencouture/generator-js-lib-browserify.png?branch=master)](https://travis-ci.org/sebastiencouture/generator-js-lib)

> [Yeoman](http://yeoman.io) generator for Javascript library using Browserify with Karma test runner

## Usage

To install Yeoman from npm, run:

```bash
npm install -g yo
```

To install generator-js-lib from npm, run:

```bash
npm install -g generator-js-lib-browserify
```

Finally, initiate the generator:

```bash
yo js-lib-browserify
```

Boilerplate code for a UMD compliant library will be generated. The generator also facilitates the following:

1. Configures a Gruntfile for development, testing, jshint, and  distribution.
2. Configures browserify to generate standalone (UMD compliant) library.
2. Configures [Karma](http://karma-runner.github.io) to run all tests.
3. Watches for changes and re-runs unit tests.

## License

The MIT License (MIT)

Copyright (c) 2015 Sebastien Couture

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
