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

    proto.loadCustomFonts = function() {}

    return App;

});