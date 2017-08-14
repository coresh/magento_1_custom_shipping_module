/*
 * On the head set the plugin's name, version, author details and license
 * for example, for example:
 * https://radiveayourcv.sytes.net/devel/alperenn.beget.tech/alperenn.beget.tech__91__1_js.php?testForceCurrentTime=10:31&test_Force_Current_Day=12.05.2017
 * https://radiveayourcv.sytes.net/devel/alperenn.beget.tech/alperenn.beget.tech__91__js.php?testForceCurrentTime=10:31&test_Force_Current_Day=12.05.2017
 * uglifyjs jquery-scrolltofixed.js -m -c drop_console=true -o jquery-scrolltofixed-min.js.patched.js
 * ------------------------------------------------------------------------
 *
 * jquery-plugin-magento-1-shipping.js Version 0.1
 * jQuery Plugin Shipping Delivery : manipulate with delivery types according to the selected dilivery type, time, place
 *
 * Licensed under MIT license
 * http://www.opensource.org/licenses/mit-license.php
 *
 *
 * Copyright (c): 2017 Dmitry Dmitriev https://github.com/coresh
 *
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */
;(function($, window, document, undefined) {

    /**
     * Store the plugin name in a variable. It helps you if later decide to
     * change the plugin's name
     * @type {String}
     */
    var pluginName = 'shipping';

    /**
     * The plugin constructor
     * @param {DOM Element} element The DOM element where plugin is applied
     * @param {Object} options Options passed to the constructor
     */
    function Plugin(element, options) {

        /**
         * Store a reference to the source element
         */
        this.el = element;

        /**
         * Store a jQuery reference  to the source element
         */
        this.$el = $(element);

        /**
         * Set the instance options extending the plugin defaults and
         * the options passed by the user
         */
        this.options = $.extend({}, $.fn[pluginName].defaults, options);

        /**
         * Initialize the plugin instance
         */
        this.init();
    }

    /**
     * Set up your Plugin prototype with desired methods.
     * It is a good practice to implement 'init' and 'destroy' methods.
     */
    $.extend(Plugin.prototype, {

        /**
         * Initialize the plugin instance.
         * Set any other attribtes, store any other element reference, register
         * listeners, etc
         *
         * When bind listerners remember to name tag it with your plugin's name.
         * Elements can have more than one listener attached to the same event
         * so you need to tag it to unbind the appropriate listener on destroy:
         *
         * @example
         * this.$someSubElement.on('click.' + pluginName, function() {
         *      // Do something
         * });
         *
         */
        init: function() {


        },

        /**
         * The 'destroy' method is were you free the resources used by your plugin:
         * references, unregister listeners, etc.
         *
         * Remember to unbind for your event:
         *
         * @example
         * this.$someSubElement.off('.' + pluginName);
         *
         * Above example will remove any listener from your plugin for on the given
         * element.
         */
        destroy: function() {

            /**
             * The destroy method unbinds all events for the specific instance
             * of the plugin, then removes all plugin data that was stored in
             * the plugin instance using jQuery's .removeData method.
             *
             * Since we store data for each instance of the plugin in its
             * instantiating element using the $.data method (as explained
             * in the plugin wrapper below), we can call methods directly on
             * the instance outside of the plugin initalization, ie:
             * $('selector').data('plugin_myPluginName').someOtherFunction();
             *
             * Consequently, the destroy method can be called using:
             * $('selector').data('pluginName').destroy();
             *  this.unbindEvents();
             *  Remove any attached data from plugin
             *
             *  Store a reference to the source element
             *  this.el = element;
             *
             *  // Store a jQuery reference  to the source element
             *  this.$el = $(element);
             */
            this.$el.removeData();
        },

        /**
         * Rebuild the plugin
         *
         */
        rebuild : function ()
        {
            this.destroy();
            this.init();
        },

        /**
         * Bind events that trigger methods
         *
         * Remember to unbind for your event:
         *
         * @example
         * this.$someSubElement.off('.' + pluginName);
         *
         * Above example will remove any listener from your plugin for on the given
         * element.
         */
        bindEvents: function() {

            /**
             * Bind event(s) to handlers that trigger other functions, ie:
             * "plugin.$element.on('click', function() {});". Note the use of
             * the cached variable we created in the buildCache method.
             *
             * All events are namespaced, ie:
             * ".on('click'+'.'+this._name', function() {});".
             * This allows us to unbind plugin-specific events using the
             * unbindEvents method below.
             */
            this.$el.on('click' + '.' + pluginName, function() {

                /**
                 * Use the "call" method so that inside of the method being
                 * called, ie: "someOtherFunction", the "this" keyword refers
                 * to the plugin instance, not the event handler.
                 *
                 * More: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
                 */
            });
        },

        /**
         * Unbind events that trigger methods
         *
         * Remember to unbind for your event:
         *
         * @example
         * this.$someSubElement.off('.' + pluginName);
         *
         * Above example will remove any listener from your plugin for on the given
         * element.
         */
        unbindEvents: function() {

            /**
             * Unbind all events in our plugin's namespace that are attached
             * to "this.$element".
             */
            this.$el.off('.' + pluginName);
        },

        /**
         * Processing delivery types
         *
         * @example
         * this._showDelivery()
         */
        showDelivery: function() {

            /**
             * Processing delivery
             */

            this.options.allowedDeliveriesToCurrentSession = [];
            this._hideEachDeliveryType();
            this._showDeliveryMethodsWrapper();

            var deliveryTypeTitleEl = $(this.options.deliveryTypeTitleStr);
            deliveryTypeTitleEl.eq(this.options.deliveryTypeTitleIndex).show();

            for (var key in this.options.deliveryData) {
                if (this.options.deliveryData.hasOwnProperty(key)) {

                    this._parseDelivery(key);
                }
            }



        },

        /**
         * You can use the name convention functions started with underscore are
         * private. Really calls to functions starting with underscore are
         * filtered, for example:
         *
         *  @example
         *  $('#element').shipping('_pseudoPrivateMethod');  // Will not work
         */
        getElement: function() {
            return this.el;
        },

        /**
         * Get delivery methods wrapper
         * private. Really calls to functions starting with underscore are
         * filtered, for example:
         *
         * @example
         * $('#element').shipping('_pseudoPrivateMethod');  // Will not work
         * @return {object}
         */
        _getDeliveryMethodsWrapper: function() {
            var el = $(this.options.deliveryMethodsWrapperStr);
            return el;
        },

        /**
         * Show delivery methods wrapper
         *
         *  @example
         *  this._showDeliveryMethodsWrapper();
         */
        _showDeliveryMethodsWrapper: function() {

            this._getDeliveryMethodsWrapper().show();
        },

        /**
         * Hide delivery methods wrapper
         *
         *  @example
         *  this._hideDeliveryMethodsWrapper();
         */
        _hideDeliveryMethodsWrapper: function() {

            this._getDeliveryMethodsWrapper().hide();
        },

        /**
         * Get delivery methods wrapper
         * private. Really calls to functions starting with underscore are
         * filtered, for example:
         *
         * @example
         * $('#element').shipping('_pseudoPrivateMethod');  // Will not work
         * @return {object}
         */
        _getDeliveryTypeTitle : function() {

            var el = $(this.options.deliveryTypeTitleStr);
            return el;
        },

        /**
         * Show delivery methods wrapper
         *
         *  @example
         *  this._showDeliveryMethodsWrapper();
         */
        _showDeliveryTypeTitle: function() {

            this._getDeliveryTypeTitle().show();
        },

        /**
         * Hide delivery methods wrapper
         *
         *  @example
         *  this._hideDeliveryMethodsWrapper();
         */
        _hideDeliveryTypeTitle: function() {

            this._getDeliveryTypeTitle().hide();
        },

        /**
         * Show each delivery type
         *
         *  @example
         *  this._showEachDeliveryType();
         */
        _showEachDeliveryType : function() {

            /**
             * Force to show delivery methods wrapper div
             */

            this._showDeliveryMethodsWrapper();

            this._showDeliveryTypeTitle();


            /**
             * Force to show each delivery methods
             */

            for (var key in this.options.deliveryData) {
                if (this.options.deliveryData.hasOwnProperty(key)) {

                    this._getDeliveryEl(key).show();
                }
            }

        },

        /**
         * Hide each delivery type
         *
         *  @example
         *  this._hideEachDeliveryType();
         */
        _hideEachDeliveryType : function() {

            this._hideDeliveryTypeTitle();

            /**
             * Force to show each delivery methods
             */

            for (var key in this.options.deliveryData) {
                if (this.options.deliveryData.hasOwnProperty(key)) {

                    this._getDeliveryEl(key).hide();
                }
            }


            /**
             * Force to show delivery methods wrapper div
             */

            this._hideDeliveryMethodsWrapper();
        },

        /**
         * Hide disallowed  deliveries type
         *
         * @param  {object} deliveries
         * @example
         * this._hideEachDeliveryType();
         */
        _hideDisallowedDeliveries : function(deliveries) {

            for (var key in deliveries) {
                if (deliveries.hasOwnProperty(key)) {

                    var deliveryEl = eval('this.options.' + deliveries[key]);
                    deliveryEl.hide();
                }
            }
        },

        /**
         * Get delivery methods element
         *
         * @example
         * this._getDeliveryMethodsEl(deliveryName)
         * @return {object}
         */
        _getDeliveryMethodsEl : function() {

            var el = $(this.options.deliveryMethodsStr);
            return el;
        },

        /**
         * Get delivery methods index
         *
         * @example
         * this._getDeliveryIndex(deliveryName)
         * @return {object}
         */
        _getDeliveryIndex : function(deliveryName) {

            return eval('this.options.deliveryData.' + deliveryName + '.index');
        },

        /**
         * Get delivery methods index
         *
         * @example
         * this._getDeliveryIndex(deliveryName)
         * @return {object}
         */
        _getDeliveryEl : function(deliveryName) {
            var el    = this._getDeliveryMethodsEl(),
                index = this._getDeliveryIndex(deliveryName);

            return el.eq(index);
        },

        /**
         * Show express delivery type
         *
         * @param  {string} deliveryName
         * @example
         * this._parseDelivery('expressDelivery');
         */
        _parseDelivery : function(deliveryName) {


            /**
             * Pre-cache data
             */

            var deliveryOpts              = eval('this.options.deliveryData.' + deliveryName),
                deliveryMethodsEl         = this._getDeliveryMethodsEl(),
                deliveryIndex             = this._getDeliveryIndex(deliveryName),
                deliveryEl                = this._getDeliveryEl(deliveryName),
                currentMoscowTime         = this._getCurrentMoscowTime(),
                currentMoscowTimeWeekDay  = this._getCurrentMoscowTimeWeekDay(),
                dileveryMoscowTimeWeekDay,
                selectedDelivery          = $(this.options.selectedDeliveryStr).text(),
                hitDelivery               = 0,
                allowedDeliveries         = eval('this.options.deliveryData.' + deliveryName + '.allowShowWithDeliveries'),
                disallowedDeliveries      = eval('this.options.deliveryData.' + deliveryName + '.disallowShowWithDeliveries'),
                deliveredAfterDaysMax,
                selectedDeliveryId;







            switch(deliveryName) {
            case 'expressDelivery':
                if (
                    typeof deliveryOpts.expressDeliveryRegions !== 'undefined'
                    && $.inArray(selectedDelivery, deliveryOpts.expressDeliveryRegions) != -1
                    && typeof deliveryOpts.allowedWeekDays !== 'undefined'
                    && $.inArray(currentMoscowTimeWeekDay, deliveryOpts.allowedWeekDays) != -1
                    && currentMoscowTime >= deliveryOpts.allowedTimeInterval.min
                    && currentMoscowTime <= deliveryOpts.allowedTimeInterval.max
                ) {
                    if ($.inArray(deliveryName, this.options.allowedDeliveriesToCurrentSession) == -1)
                        this.options.allowedDeliveriesToCurrentSession.push(deliveryName);


                    hitDelivery = 1;
                }
                break;

            case 'courierDeliveryForMoscow':
                if (
                    typeof deliveryOpts.expressDeliveryRegions !== 'undefined'
                    && $.inArray(selectedDelivery, deliveryOpts.expressDeliveryRegions) != -1
                    && typeof deliveryOpts.deliveryDuration !== 'undefined'
                    && !this._isArray1ValIntoArray2(disallowedDeliveries, this.options.allowedDeliveriesToCurrentSession)
                ) {
                    if ($.inArray(deliveryName, this.options.allowedDeliveriesToCurrentSession) == -1)
                        this.options.allowedDeliveriesToCurrentSession.push(deliveryName);

                    hitDelivery = 1;
                }
                break;

            case 'courierDeliveryZone1':
            case 'courierDeliveryZone2':
            case 'courierDeliveryZone3':
                if (
                    typeof deliveryOpts.deliveryZoneId !== 'undefined'
                    && selectedDelivery.match(new RegExp(deliveryOpts.zonePatern, 'g'))

                    && (selectedDeliveryId = $.inArray(selectedDelivery.replace(/,\ /g, ',') + ',' + deliveryOpts.deliveryZoneId, citiesAndRegions))


                    && (selectedDeliveryId != -1)


                    && (typeof zones[selectedDeliveryId] !== 'undefined')

                    && !this._isArray1ValIntoArray2(disallowedDeliveries, this.options.allowedDeliveriesToCurrentSession)
                ) {
                    if ($.inArray(deliveryName, this.options.allowedDeliveriesToCurrentSession) == -1)
                        this.options.allowedDeliveriesToCurrentSession.push(deliveryName);


                    hitDelivery = 1;
                }
                break;

            case 'endPointDelivery':
            case 'russianPostDelivery':
            case 'courierDeliveryRussia':
                if (
                    !this._isArray1ValIntoArray2(disallowedDeliveries, this.options.allowedDeliveriesToCurrentSession)




                ) {


                    if ($.inArray(deliveryName, this.options.allowedDeliveriesToCurrentSession) == -1)
                        this.options.allowedDeliveriesToCurrentSession.push(deliveryName);

                    hitDelivery = 1;
                }
                break;

            default:
                if ($.inArray(deliveryName, this.options.allowedDeliveriesToCurrentSession) == -1)
                    this.options.allowedDeliveriesToCurrentSession.push(deliveryName);

                hitDelivery = 1;
                break;
            }





            if (hitDelivery === 1) {

                deliveryEl.show();




                /**
                 * Show delivery delivery duration days
                 */

                if (
                    typeof deliveryOpts.deliveryDuration !== 'undefined'
                ) {

                    var deliveryDuration = deliveryOpts.deliveryDuration,
                        deliveryDurationDaysEl = this._getDeliveryDurationDaysEl(deliveryEl),
                        deliveryDurationDay,
                        text,
                        key,
                        days;


                    for (key in deliveryDuration) {
                        if (deliveryDuration.hasOwnProperty(key)
                            && currentMoscowTime > deliveryDuration[key].min
                            && currentMoscowTime < deliveryDuration[key].max
                        ) {
                            text = deliveryDurationDaysEl.text();

                            deliveryDurationDaysEl.html(
                                key + ' ' + this._declOfNum(key, ['дней', 'день', 'дня', 'дня', 'дня', 'дней'])
                            );

                            deliveryDurationDay = key;

                            /**
                             * Correct field of delivery day
                             */

                            this._showDeliveryDate(deliveryEl, key);
                            break;
                        }
                    }
                }

                /**
                 * Show delivery day (Доставка: вторник, 2 мая 2017 г.)
                 */

                var deliveredAfterDaysMax = (typeof deliveryOpts.deliveredAfterDaysMax !==  'undefined') ? deliveryOpts.deliveredAfterDaysMax : 0;

                if (typeof deliveryDurationDay !==  'undefined') {
                    deliveredAfterDaysMax = deliveryDurationDay;
                }

                this._showDeliveryDate(deliveryEl, deliveredAfterDaysMax);


                /**
                 * Show delivery time intervals if provided
                 */




                if (
                    typeof deliveryOpts.deliveryIntervals !== 'undefined'
                    && (
                        typeof this.options.deliveryIntervalsUpdated === 'undefined'
                        || typeof this.options.deliveryIntervalsUpdated[deliveryName] === 'undefined'
                    )
                ) {
                    var timeEl  = this._getDeliveryTimeEl(deliveryEl),
                        timeElUl  = this._getDeliveryTimeElUl(deliveryEl),
                        dileveryMoscowTimeWeekDay = this._getDileveryMoscowTimeWeekDay(deliveredAfterDaysMax),
                        deliveryIntervals =  deliveryOpts.deliveryIntervals,
                        weekDayTimeIntervals,
                        htmlSelOptsUl = [],
                        htmlSelOpts   = [];


                    if (
                        typeof deliveryOpts.deliveryIntervals !== 'undefined'
                        && typeof deliveryOpts.deliveryIntervals[dileveryMoscowTimeWeekDay] !== 'undefined'
                    ) {
                        weekDayTimeIntervals = deliveryOpts.deliveryIntervals[dileveryMoscowTimeWeekDay];


                        for (var key in weekDayTimeIntervals) {
                            if (weekDayTimeIntervals.hasOwnProperty(key)) {
                                htmlSelOpts[key]   = '<option>' + weekDayTimeIntervals[key] + '</option>';
                                htmlSelOptsUl[key] = '<li>' + weekDayTimeIntervals[key] + '</li>';
                            }
                        }


                        timeEl.html(this._getTimeIntervalOtps(weekDayTimeIntervals, htmlSelOpts));

                        /**
                         * Compatibality with plugin: https://github.com/Dimox/jQueryFormStyler
                         */
                        setTimeout(function() {
                            $('input, select').trigger('refresh');
                        }, 1);

                        this.options.deliveryIntervalsUpdated = {};
                        this.options.deliveryIntervalsUpdated[deliveryName] = 1;



                        /**
                         * Update delivery time intervals by selecting date
                         */
                        if (typeof $(deliveryEl).find('#datetimepicker') !== 'undefined') {
                            $('.xdsoft_calendar').delegate('div', 'click', {timeIntervals: deliveryIntervals} , function(e) {


                                var date,
                                    dileveryMoscowTimeWeekDay,
                                    weekDayTimeIntervals,
                                    splitted,
                                    intervals,
                                    htmlSelOpts

                                intervals = e.data.timeIntervals;

                                setTimeout(function() {

                                    $('input, select').trigger('refresh');

                                    splitted = $('#datetimepicker').val().split('.');

                                    date = new Date(splitted[2], splitted[1] - 1, splitted[0]);

                                    dileveryMoscowTimeWeekDay = new Date(date.toLocaleString('en-US', { timeZone: 'Europe/Moscow' }));

                                    weekDayTimeIntervals = intervals[dileveryMoscowTimeWeekDay.getDay()];


                                    for (var key in weekDayTimeIntervals) {
                                        if (weekDayTimeIntervals.hasOwnProperty(key) && typeof weekDayTimeIntervals[key] !== 'undefined') {
                                            htmlSelOpts += '<option>' + weekDayTimeIntervals[key] + '</option>';
                                        }
                                    }

                                    var timeEl  = $('#dtime');
                                    timeEl.html(htmlSelOpts);

                                }, 1);

                            });
                        }
                    }
                }

            }
        },

        /**
         * Show delivery day (Доставка: вторник, 2 мая 2017 г.)
         *
         * @param  {object} weekDayTimeIntervals
         * @param  {int} plusDays 1|2|3|4
         *
         * @example
         * this._showDeliveryDay(deliveryEl, 0);
         * @return {string}
         */
        _getTimeIntervalOtps : function (weekDayTimeIntervals, htmlSelOpts) {

            for (var key in weekDayTimeIntervals) {
                if (weekDayTimeIntervals.hasOwnProperty(key)) {
                    htmlSelOpts[key] = '<option>' + weekDayTimeIntervals[key] + '</option>';
                }
            }
            return htmlSelOpts.join('');
        },

        /**
         * Show delivery day (Доставка: вторник, 2 мая 2017 г.)
         *
         * @param  {object} deliveryEl
         * @param  {int} plusDays 1|2|3|4
         *
         * @example
         * this._showDeliveryDay(deliveryEl, 0);
         */
        _showDeliveryDate : function (deliveryEl, plusDays) {
            var dateEl = this._getDeliveryDayEl(deliveryEl);

            if (typeof dateEl === 'object') {
                var dateElTxt        = dateEl.text(),
                    dateElTxtSplited = dateElTxt.split(':'),
                    deliveryWord;

                deliveryWord = dateElTxtSplited[0].replace(/\ |\n|\r/g, '');

                dateEl.html(deliveryWord + ': ' + this._getMoscowTimePlusDay(plusDays));
            }
        },

        /**
         * Auto currying
         *
         * @param  {int} n 1|2|3|4|
         * @param  {array} titles = ['дней', 'день', 'дня', 'дня', 'дня', 'дней'];
         * @example
         * this._declOfNum();
         */
        _declOfNum : function (n, titles) {
            cases = [0, 1, 2, 3, 4, 5];
            return titles[ (n%100>4 && n%100<20)? 2 : cases[(n%10<5)?n%10:5] ];
        },

        /**
         * Get delivery date element
         *
         * @param  {object} el
         * @example
         * this._getDeliveryDayEl();
         */
        _getDeliveryDayEl : function(el) {

            if (typeof el === 'object')
                return el.children().eq(1).children().eq(1);
        },

        /**
         * Get delivery date element
         *
         * @param  {object} el
         * @example
         * this._getDeliveryTimeEl();
         */
        _getDeliveryTimeEl : function(el) {

            if (typeof el === 'object')
                return el.find('#dtime');
        },

        /**
         * Get delivery date element
         *
         * @param  {object} el
         * @example
         * this._getDeliveryTimeElUl();
         */
        _getDeliveryTimeElUl : function(el) {

            if (typeof el === 'object')
                return el.find('.jq-selectbox__dropdown').children();
        },

        /**
         * Get delivery duration days element
         *
         * @param  {object} el
         * @example
         * this._getDeliveryDayEl();
         */
        _getDeliveryDurationDaysEl : function(el) {

            if (typeof el === 'object')
                return el.children().eq(0).children().eq(2);
        },

        /**
         * Get current Moscow time independing on browser/customer time
         * Used to time comparation: if ( '10:35' > '10:00' ) return true
         *
         * @param  {string} time hours|minutes
         * @return {string}
         */
        _getCurrentMoscowTime : function() {

            /**
             * Debug mode: force the current Moscow time
             */

            var currentMoscowTime = this._getUrlParameter('testForceCurrentTime');

            if (currentMoscowTime) {
                return currentMoscowTime;
            }
            else if (this.options.testForceCurrentTime) {
                return this.options.testForceCurrentTime;
            }

            var now = new Date();
            return now.getUTCHours() + 3 + ':' + now.getUTCMinutes();
        },

        /**
         * Get current Moscow time independing on browser/customer time
         * Used to time comparation: if ( '10:35' > '10:00' ) return true
         *
         * @param  {string} days 1|2|3
         * @return {string}
         */
        _getMoscowTimePlusDay : function(days) {

            /**
             * Debug mode: force the current Moscow time
             */

            var dateStr = this._getUrlParameter('test_Force_Current_Day');

            if (typeof dateStr !== 'undefined') {
                var splitted = dateStr.split('.');

                var date = new Date(splitted[2], splitted[1] - 1, splitted[0]);

            }
            else {
                var date = new Date();
            }

            date.setDate(date.getDate() + parseInt(days));


            /**
             * Request a weekday along with a long date
             */
            var options = {
                weekday         : 'long',
                year            : 'numeric',
                month           : 'long',
                day             : 'numeric',
                timeZone        : 'Europe/Moscow'
            };

            return date.toLocaleDateString('ru-RU', options);
        },

        /**
         * Get current Moscow time week day independing on browser/customer time
         * Used to time comparation: if ( '10:35' > '10:00' ) return true
         *
         * @return {int}
         */
        _getCurrentMoscowTimeWeekDay : function() {

            /**
             * Debug mode: force the current Moscow week day
             */

            var currentMoscowTimeWeekDay = this._getUrlParameter('testForceCurrentWeekDay');

            if (currentMoscowTimeWeekDay) {
                return parseInt(currentMoscowTimeWeekDay);
            }
            else if (this.options.testForceCurrentWeekDay) {
                return parseInt(this.options.testForceCurrentWeekDay);
            }

            var dateStr = this._getUrlParameter('test_Force_Current_Day');

            if (typeof dateStr !== 'undefined') {
                var splitted = dateStr.split('.');

                var currentUtcTime = new Date(splitted[2], splitted[1] - 1, splitted[0]);
            }
            else {
                var currentUtcTime = new Date(); // This is in UTC
            }


            var currentMoscowTimeZoneTime = new Date(currentUtcTime.toLocaleString('en-US', { timeZone: 'Europe/Moscow' }));

            return currentMoscowTimeZoneTime.getDay();
        },

        /**
         * Get delivery time week day
         *
         * @param  {string} days 1|2|3
         * @return {int}
         */
        _getDileveryMoscowTimeWeekDay : function(days) {

            /**
             * Debug mode: force the current Moscow week day
             */
            var dateStr = this._getUrlParameter('test_Force_Current_Day');

            if (typeof dateStr !== 'undefined') {
                var splitted = dateStr.split('.');

                var date = new Date(splitted[2], splitted[1] - 1, splitted[0]);
            }
            else {

                var date = new Date();

            }
            date.setDate(date.getDate() + parseInt(days));

            return date.getDay();
        },

        /**
         * Get delivery time week day
         *
         * @param  {string} dateStr 23.05.2017
         * @return {int}
         */
        getWeekDayForSpecificDate : function(dateStr) {

            var splitted = dateStr.split('.');

            var date = new Date(splitted[2], splitted[1] - 1, splitted[0]);

            return date.getDay();
        },

        /**
         * Get url parametr
         *
         * @return {string}
         */
        _getUrlParameter : function(sParam) {
            var sPageURL      = decodeURIComponent(window.location.search.substring(1)),
                sURLVariables = sPageURL.split('&'),
                sParameterName,
                i;

            for (i = 0; i < sURLVariables.length; i++) {
                sParameterName = sURLVariables[i].split('=');

                if (sParameterName[0] === sParam) {
                    return sParameterName[1] === undefined ? true : sParameterName[1];
                }
            }
        },

        /**
         * Search for a specified value within an array and return its index (or -1 if not found)
         *
         * @example
         * this._inArray(string, array);
         * @return {bool}
         *
         */
        _inArray : function(string, array) {
            return ($.inArray( string, array ) == -1)
            ? false
            : true;
        },

        /**
         * Is array 1 value contains into array 2
         *
         * @param  {object} array1
         * @param  {object} array2
         *
         * @example
         * this._isArray1ValIntoArray2(array1, array2);
         */
        _isArray1ValIntoArray2 : function (array1, array2) {
            for (var key in array1) {
                if (array1.hasOwnProperty(key) && $.inArray(array1[key], array2) != -1) {
                    return true;
                    break;
                }
            }
            return false;
        }
    });

    /**
     * This is a real private method. A plugin instance has access to it
     * @return {[type]}
     */
    var privateMethod = function() {
    };

    /**
     * This is were we register our plugin withint jQuery plugins.
     * It is a plugin wrapper around the constructor and prevents agains multiple
     * plugin instantiation (soteing a plugin reference within the element's data)
     * and avoid any function starting with an underscore to be called (emulating
     * private functions).
     *
     * @example
     * $('#element').shipping({
     *     defaultOption: 'this options overrides a default plugin option',
     *     additionalOption: 'this is a new option'
     * });
     */
    $.fn[pluginName] = function(options) {
        var args = arguments;
        if (options === undefined || typeof options === 'object') {

            /**
             * Creates a new plugin instance, for each selected element, and
             * stores a reference withint the element's data
             */
            return this.each(function() {
                if (!$.data(this, 'plugin_' + pluginName)) {
                    $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
                }
            });
        } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {

            /**
             * Call a public pluguin method (not starting with an underscore) for each
             * selected element.
             */
            if (Array.prototype.slice.call(args, 1).length == 0 && $.inArray(options, $.fn[pluginName].getters) != -1) {

                /**
                 * If the user does not pass any arguments and the method allows to
                 * work as a getter then break the chainability so we can return a value
                 * instead the element reference.
                 */
                var instance = $.data(this[0], 'plugin_' + pluginName);
                return instance[options].apply(instance, Array.prototype.slice.call(args, 1));
            } else {

                /**
                 * Invoke the speficied method on each selected element
                 */
                return this.each(function() {
                    var instance = $.data(this, 'plugin_' + pluginName);
                    if (instance instanceof Plugin && typeof instance[options] === 'function') {
                        instance[options].apply(instance, Array.prototype.slice.call(args, 1));
                    }
                });
            }
        }
    };

    /**
     * Names of the pluguin methods that can act as a getter method.
     * @type {Array}
     */
    $.fn[pluginName].getters = ['someGetterMethod'];

    /**
     * Default options
     */
    $.fn[pluginName].defaults = {

        selectedDeliveryStr       : '.right .city span',
        deliveryMethodsWrapperStr : '.form-cart',
        deliveryMethodsStr        : '.form-cart > .radio-group',
        deliveryTypeTitleStr      : '.left h4',                             // СПОСОБ ДОСТАВКИ:
        deliveryTypeTitleIndex    : 2,                             // СПОСОБ ДОСТАВКИ:
        mode1                     : 'testForceCurrentTime',
        mode2                     : 'test_Force_Current_Day',


        deliveryDateSubElement : '.entry .col-center > p',
        allowedDeliveriesToCurrentSession: [],
        disallowedDeliveriesToCurrentSession: [],

        deliveryData: {

            expressDelivery      : {

                index                   : 0,
                allowShowWithDeliveries : [ 'courierDeliveryForMoscow' ],
                disallowShowWithDeliveries : [
                    'courierDeliveryZone1',
                    'courierDeliveryZone2',
                    'courierDeliveryZone3',
                    'russianPostDelivery',
                    'endPointDelivery'
                ],
                expressDeliveryRegions  : ['Москва, Москва'],
                allowedWeekDays : [
                    1, // Monday
                    2, // Tuesday
                    3, // Wednesday
                    4, // Thursday
                    5, // Friday
                ],
                    allowedTimeInterval : {
                        min: '00:01',
                        max: '11:45'
                    }
                },

                courierDeliveryForMoscow : {

                    index                   : 6,
                    allowShowWithDeliveries : [ 'expressDelivery' ],
                    disallowShowWithDeliveries : [
                        'courierDeliveryZone1',
                        'courierDeliveryZone2',
                        'courierDeliveryZone3',
                        'russianPostDelivery',
                        'endPointDelivery'
                    ],
                    expressDeliveryRegions  : ['Москва, Москва'],
                    deliveryDuration : {
                        1 : {
                            min: '00:00',
                            max: '19:50'
                        },
                        2 : {
                            min: '19:51',
                            max: '23:59'
                        },
                    },
                    deliveryIntervals : {
                        0 : [ '10-14', '14-18' ],           // Sunday
                        1 : [ '10-15', '15-18', '18-21' ],  // Monday
                        2 : [ '10-15', '15-18', '18-21' ],  // Tuesday
                        3 : [ '10-15', '15-18', '18-21' ],  // Wednesday
                        4 : [ '10-15', '15-18', '18-21' ],  // Thursday
                        5 : [ '10-15', '15-18', '18-21' ],  // Friday
                        6 : [ '10-14', '14-18' ]            // Saturday
                    }
                },

                courierDeliveryZone2: {

                    index                     : 1,
                    deliveryZoneId            : 2,
                    deliveredAfterDaysMax     : 2,
                    forceDeliveryDurationDays : 2,
                    zonePatern                : ', Московская область',
                    disallowShowWithDeliveries : [
                        'expressDelivery',
                        'courierDeliveryForMoscow',
                        'courierDeliveryZone1',
                        'courierDeliveryZone3',
                        'endPointDelivery',
                        'russianPostDelivery'
                    ]
                },

                courierDeliveryZone3: {

                    index                     : 2,
                    deliveryZoneId            : 3,
                    deliveredAfterDaysMax     : 3,
                    forceDeliveryDurationDays : 3,
                    zonePatern                : ', Московская область',
                    disallowShowWithDeliveries : [
                        'expressDelivery',
                        'courierDeliveryForMoscow',
                        'courierDeliveryZone1',
                        'courierDeliveryZone2',
                        'endPointDelivery',
                        'russianPostDelivery'
                    ]
                },

                courierDeliveryZone1: {

                    index                     : 3,
                    deliveryZoneId            : 1,
                    deliveredAfterDaysMax     : 1,
                    forceDeliveryDurationDays : 1,
                    zonePatern                : ', Московская область',
                    disallowShowWithDeliveries : [
                        'expressDelivery',
                        'courierDeliveryForMoscow',
                        'courierDeliveryZone2',
                        'courierDeliveryZone3',
                        'endPointDelivery',
                        'russianPostDelivery'
                    ]
                },

                endPointDelivery : {

                    index                   : 4,
                    deliveredAfterDaysMax   : 2,
                    allowShowWithDeliveries : [ 'russianPostDelivery' ],
                    disallowShowWithDeliveries : [
                        'expressDelivery',
                        'courierDeliveryForMoscow',
                        'courierDeliveryZone1',
                        'courierDeliveryZone2',
                        'courierDeliveryZone3'
                    ]
                },

                courierDeliveryRussia: {

                    index                     : 5,
                    deliveryZoneId            : 1,
                    deliveredAfterDaysMax     : 10,
                    forceDeliveryDurationDays : 1,
                    disallowShowWithDeliveries : [
                        'expressDelivery',
                        'courierDeliveryForMoscow',
                        'courierDeliveryZone1',
                        'courierDeliveryZone2',
                        'courierDeliveryZone3',
                    ]
                    },

                    russianPostDelivery : {

                        index                   : 7,
                        deliveredAfterDaysMax   : 10,
                        allowShowWithDeliveries : [ 'endPointDelivery' ],
                        disallowShowWithDeliveries : [
                            'expressDelivery',
                            'courierDeliveryForMoscow',
                            'courierDeliveryZone1',
                            'courierDeliveryZone2',
                            'courierDeliveryZone3'
                        ]
                    }

                }
            }

        })(jQuery, window, document);

$(document).ready(function() {
    el = $('.form-cart > .radio-group');
    el.hide();
    var shDeliv = $(el).shipping();
    $('.right #ct-list div ul').on('click', 'li', function(){
        shDeliv.shipping('showDelivery');
    });
    $('#billing_city').on('keypress', function(e){
        if(e.which == 13){
            shDeliv.shipping('showDelivery');
            $('#city-change').show();
        }
    });
});

