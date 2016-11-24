'use strict';

var _          = require('lodash');
var generators = require('yeoman-generator');
var yosay      = require('yosay');

module.exports = generators.Base.extend({

    prompting: function () {
        this.log(yosay('Welcome to the Fabricator Starter generator!'));
        return this.prompt([{
            type   : 'input',
            name   : 'name',
            message: 'name',
            default: this.appname
        }]).then(function (answers) {
            this.config.set('name', answers.name);
        }.bind(this));
    },

    default: function () {
        this.composeWith('npm-init', {
            options: {
                'skip-name': true,
                name: this.config.get('name'),
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
        }, {
            local: require.resolve('generator-npm-init/app')
        });
    },

    writing: function () {
        _.forEach([
            'src/assets/scripts/toolkit.js',
            'src/assets/styles/toolkit.scss',
            'src/materials/atoms/01-text/01-typography.hbs',
            '.editorconfig',
            'fabricator.json',
            'gulpfile.js',
            'README.md',
            'toolkit.json'
        ], function (template) {
            this.fs.copyTpl(
                this.templatePath(template),
                this.destinationPath(template),
                this.config.getAll());
        }.bind(this));
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
