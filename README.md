Find Licenses
=============

> *A little utility to find all the dependencies (including licenses) for a Node/Bower project*

Command Line
------------

Install it:

    npm install --global find-licenses

Then use it like this:

    usage: find-licences [path-to-project] [options]

       -C, --CSV   Output as Comma Separated Values
       -h, --help  This help

       NOTE: Without path-to-project, it will check the current directory.

Node Module
-----------

Calling the function returned by the module with a path returns an [RxJS](https://github.com/Reactive-Extensions/RxJS) [Observable](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/observable.md) to do with as you please, with every package in both bower and npm will be emitted to the returned Observable.

    var licensesSource = require('find-licenses').findLicenses(pathToProject);

    licensesSource.filter(function(e) {
      return e.licenses.indexOf('MIT') !== -1;
    }).subscribe(function(pkg) {
        console.log(pkg);
    });

    // Might return something like:
    /* npm:
      {
        type: 'npm',
        name: 'bower-json',
        version: '0.4.0',
        licenses: [ 'MIT' ],
        repository: 'https://github.com/bower/json'
      }
    */

    /* bower:
      {
        type: 'bower',
        name: 'es5-shim',
        version: '3.1.1'
        licenses: [ 'MIT' ],
        repository: 'git+ssh://git@github.com/es-shims/es5-shim',
        homepage: 'https://github.com/es-shims/es5-shim',
      }
    */

If you're not feeling brave enough to venture into the world of [Reactive Programming](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754), don't worry: just use the old fashioned Node callback method:

    require('find-licenses').findLicenses(pathToProject, function(error, arrayOfAllTheResults) {
      if (error) throw error;

      console.log(arrayOfAllTheResults);
    });

## License

(The MIT License)

Copyright (c) 2015 Skedans &lt;dev@skedans.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
