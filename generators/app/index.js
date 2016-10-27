'use strict';

var generators = require('yeoman-generator');
var yosay      = require('yosay');

module.exports = generators.Base.extend({

    initializing: function () {
        this.composeWith(
            'npm-init',
            {
                options: {
                    version: "0.0.0",
                    'skip-main': true,
                    main: "gulpfile.js",
                    'skip-test': true,
                    test: "npm run build",
                    scripts: {
                        prestart: "npm install",
                        start: "gulp --dev",
                        prebuild: "npm install",
                        build: "gulp",
                        test: "npm run build",
                        version: "npm test",
                        postversion: "git push && git push --tags"
                    }
                }
            },
            {
                local: require.resolve('generator-npm-init/app')
            });
    },

    prompting: function () {
        var done = this.async();
        this.log(yosay('Welcome to the Fabricator Starter generator!'));
        done();
    },

    writing: function () {
        this.fs.copy(
            this.templatePath('gulpfile.js'),
            this.destinationPath('gulpfile.js')
        );
        this.fs.copy(
            this.templatePath('fabricator.json'),
            this.destinationPath('fabricator.json')
        );
        this.fs.copy(
            this.templatePath('toolkit.json'),
            this.destinationPath('toolkit.json')
        );
        this.fs.copy(
            this.templatePath('src/assets/scripts/toolkit.js'),
            this.destinationPath('src/assets/scripts/toolkit.js')
        );
        this.fs.copy(
            this.templatePath('src/assets/styles/toolkit.scss'),
            this.destinationPath('src/assets/styles/toolkit.scss')
        );
        this.fs.copy(
            this.templatePath('src/materials/atoms/01-text/01-typography.hbs'),
            this.destinationPath('src/materials/atoms/01-text/01-typography.hbs')
        );
    },

    install: function () {
        this.npmInstall([
            'fabricator-builder',
            'gulp',
            'gulp-util'
        ], {
            'save-dev': true
        });
    },

    end: function () {
        var done = this.async();
        this.log(yosay('Your toolkit has been created!'));
        done();
    }
});
