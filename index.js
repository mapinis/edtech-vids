var Metalsmith = require('metalsmith')
var pug = require('metalsmith-pug')
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var ignore = require('metalsmith-ignore');

new Metalsmith(__dirname)
    .metadata({
        title: "edtech-vids",
        description: "Metalsmith site for tutorial vids",
        generator: "Metalsmith",
        url: "No url"
     })
     .source('./src')
     .destination('./build')
     .clean(false)
     .use(markdown)
     .use(pug({
        useMetadata: true,
        pretty: false,
        locals: {
            postname: 'what\'s a post name'
        }}))
     .use(layouts({
        engine: 'pug',
        directory: 'layouts'
      }))
     .build(function(err, files) {
        if (err) { throw err; }
     });