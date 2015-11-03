define(function(require, exports, module) { // jshint ignore:line
    'use strict';

    var $ = require('jQuery');
    var slick = require('slick');

    /**
     * Initial application setup. Runs once upon every page load.
     *
     * @class App
     * @constructor
     */
    var App = function() {
        this.init();
    };

    var proto = App.prototype;

    /**
     * Initializes the application and kicks off loading of prerequisites.
     *
     * @method init
     * @private
     */
    proto.init = function() {
        // Create your views here
        
        var $carousel = $('.js-carousel');

        $carousel.slick({
            dots: true,
            speed: 500
        });

        $(document).ready(function() {
            this.loadCustomFonts();
        }.bind(this));
    };

    proto.loadCustomFonts = function() {
        window.WebFontConfig = {
            google: { families: [ 'Roboto:400,100italic,100,300,300italic,400italic,500,500italic,700,700italic,900,900italic:latin' ] }
        };

        (function() {
            var wf = document.createElement('script');
            wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
            wf.type = 'text/javascript';
            wf.async = 'true';
    
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(wf, s);
        })();
    }

    return App;

});