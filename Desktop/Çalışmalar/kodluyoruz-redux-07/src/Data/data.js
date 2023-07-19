import { completed } from "../Redux/cardSlice"

const data = [
    {
        id: 1,
        img: 'https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/angular2.png',
        status: false,
        name: 'angular',
        completed: false
    },
    {
        id: 2, img: 'https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/vue.png',
        status: false,
        name: 'vue'

        , completed: false
    },
    {
        id: 3, img: 'https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/react.png',
        status: false,
        name: 'react'

        , completed: false
    },
    {
        id: 4,
        img: 'https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/grunt.png',
        status: false,
        name: 'grunt'

        , completed: false
    },
    {
        id: 5, img: 'https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/phantomjs.png',
        status: false,
        name: 'phantomjs',
        completed: false
    },
    {
        id: 6, img: 'https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/ember.png',
        status: false,
        name: 'ember',
        completed: false
    },
    {
        id: 7, img: 'https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/babel.png',
        status: false,
        name: 'babel',
        completed: false
    },
    {
        id: 8, img: 'https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/ionic.png',
        status: false,
        name: 'ionic',
        completed: false
    },
    {
        id: 9, img: 'https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/gulp.png',
        status: false,
        name: 'gulp',
        completed: false
    },
    {
        id: 10,
        img: 'https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/meteor.png',
        status: false,
        name: 'meteor',
        completed: false
    },
    {
        id: 11,
        img: 'https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/yeoman.png',
        status: false,
        name: 'yeoman'

        , completed: false
    },
    {
        id: 12,
        img: 'https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/yarn.png',
        status: false,
        name: 'yarn'

        , completed: false
    },
    {
        id: 13,
        img: 'https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/nodejs.png',
        status: false,
        name: 'nodejs'

        , completed: false
    },
    {
        id: 14,
        img: 'https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/bower.png',
        status: false,
        name: 'bower'

        , completed: false
    },
    {
        id: 15,
        img: 'https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/browserify.png',
        status: false,
        name: 'browserif',
        completed: false
    },
    {
        id: 16,
        img: 'https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/angular2.png',
        status: false,
        name: 'angular'

        , completed: false
    },
    {
        id: 17, img: 'https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/vue.png',
        status: false,
        name: 'vue'

        , completed: false
    },
    {
        id: 18, img: 'https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/react.png',
        status: false,
        name: 'react'

        , completed: false
    },
    {
        id: 19,
        img: 'https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/grunt.png',
        status: false,
        name: 'grunt'

        , completed: false
    },
    {
        id: 20, img: 'https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/phantomjs.png',
        status: false,
        name: 'phantomjs'
        , completed: false
    },
    {
        id: 21, img: 'https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/ember.png',
        status: false,
        name: 'ember'

        , completed: false
    },
    {
        id: 22, img: 'https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/babel.png',
        status: false,
        name: 'babel',
        completed: false
    },
    {
        id: 23, img: 'https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/ionic.png',
        status: false,
        name: 'ionic',
        completed: false
    },
    {
        id: 24, img: 'https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/gulp.png',
        status: false,
        name: 'gulp',
        completed: false
    },
    {
        id: 25,
        img: 'https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/meteor.png',
        status: false,
        name: 'meteor'

        , completed: false
    },
    {
        id: 26,
        img: 'https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/yeoman.png',
        status: false,
        name: 'yeoman'

        , completed: false
    },
    {
        id: 27,
        img: 'https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/yarn.png',
        status: false,
        name: 'yarn'

        , completed: false
    },
    {
        id: 28,
        img: 'https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/nodejs.png',
        status: false,
        name: 'nodejs'

        , completed: false
    },
    {
        id: 29,
        img: 'https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/bower.png',
        status: false,
        name: 'bower'

        , completed: false
    },
    {
        id: 30,
        img: 'https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/browserify.png',
        status: false,
        name: 'browserif'
        , completed: false
    }

]

export default data