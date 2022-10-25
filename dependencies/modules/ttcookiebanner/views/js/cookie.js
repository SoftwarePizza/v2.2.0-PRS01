/**
* 2007-2022 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author    PrestaShop SA <contact@prestashop.com>
*  @copyright 2007-2022 PrestaShop SA
*  @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*
* Don't forget to prefix your containers with your own identifier
* to avoid any conflicts with others containers.
*/

(function($) {

// for ie9 doesn't support debug console >>>
if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function () { };
// ^^^

$.fn.euCookieLawPopup = (function() {

    var _self = this;

    ///////////////////////////////////////////////////////////////////////////////////////////////
    // PARAMETERS (MODIFY THIS PART) //////////////////////////////////////////////////////////////
    _self.params = {
        cookiePolicyUrl : 'http://www.wimagguc.com/?cookie-policy',
        popupPosition : 'cookie_style1',
        colorStyle : 'default',
        compactStyle : false,
        popupText : 'We use cookies to ensure that we give you the best experience on our website. If you continue without changing your settings, we\'ll assume that you are happy to receive all cookies on this website.',
        buttonContinueTitle : 'Continue',
        buttonLearnmoreTitle : 'Learn&nbsp;more',
        buttonLearnmoreOpenInNewWindow : true,
        agreementExpiresInDays : 30,
        autoAcceptCookiePolicy : false,
        htmlMarkup : null
    };

    ///////////////////////////////////////////////////////////////////////////////////////////////
    // VARIABLES USED BY THE FUNCTION (DON'T MODIFY THIS PART) ////////////////////////////////////
    _self.vars = {
        INITIALISED : false,
        HTML_MARKUP : null,
        COOKIE_NAME : 'tt_cookie'
    };

    ///////////////////////////////////////////////////////////////////////////////////////////////
    // PRIVATE FUNCTIONS FOR MANIPULATING DATA ////////////////////////////////////////////////////

    // Overwrite default parameters if any of those is present
    var parseParameters = function(object, markup, settings) {

        if (object) {
            var className = $(object).attr('class') ? $(object).attr('class') : '';
            if (className.indexOf('eupopup-bottom') > -1) {
                _self.params.popupPosition = 'cookie_style1';
            }
            else if (className.indexOf('eupopup-bottomright') > -1) {
                _self.params.popupPosition = 'cookie_style3';
            }
            else if (className.indexOf('eupopup-bottomleft') > -1) {
                _self.params.popupPosition = 'cookie_style2';
            }
            else if (className.indexOf('eupopup-bottomfix') > -1) {
                _self.params.popupPosition = 'cookie_style4';
            }
            else if (className.indexOf('eupopup-block') > -1) {
                _self.params.popupPosition = 'block';
            }
            if (className.indexOf('eupopup-color-default') > -1) {
                _self.params.colorStyle = 'default';
            }
            else if (className.indexOf('eupopup-color-inverse') > -1) {
                _self.params.colorStyle = 'inverse';
            }
            if (className.indexOf('eupopup-style-compact') > -1) {
                _self.params.compactStyle = true;
            }
        }

        if (markup) {
            _self.params.htmlMarkup = markup;
        }

        if (settings) {
            if (typeof settings.cookiePolicyUrl !== 'undefined') {
                _self.params.cookiePolicyUrl = settings.cookiePolicyUrl;
            }
            if (typeof settings.popupPosition !== 'undefined') {
                _self.params.popupPosition = settings.popupPosition;
            }
            if (typeof settings.colorStyle !== 'undefined') {
                _self.params.colorStyle = settings.colorStyle;
            }
            if (typeof settings.popupText !== 'undefined') {
                _self.params.popupText = settings.popupText;
            }
            if (typeof settings.buttonContinueTitle !== 'undefined') {
                _self.params.buttonContinueTitle = settings.buttonContinueTitle;
            }
            if (typeof settings.buttonLearnmoreTitle !== 'undefined') {
                _self.params.buttonLearnmoreTitle = settings.buttonLearnmoreTitle;
            }
            if (typeof settings.buttonLearnmoreOpenInNewWindow !== 'undefined') {
                _self.params.buttonLearnmoreOpenInNewWindow = settings.buttonLearnmoreOpenInNewWindow;
            }
            if (typeof settings.agreementExpiresInDays !== 'undefined') {
                _self.params.agreementExpiresInDays = settings.agreementExpiresInDays * tt_settings.tt_loop;
            }
            if (typeof settings.autoAcceptCookiePolicy !== 'undefined') {
                _self.params.autoAcceptCookiePolicy = settings.autoAcceptCookiePolicy;
            }
            if (typeof settings.htmlMarkup !== 'undefined') {
                _self.params.htmlMarkup = settings.htmlMarkup;
            }
        }

    };

    var createHtmlMarkup = function() {

        if (_self.params.htmlMarkup) {
            return _self.params.htmlMarkup;
        }

        var html =
            '<div class="eupopup-container' +
                ' eupopup-container-' + _self.params.popupPosition +
                (_self.params.compactStyle ? ' eupopup-style-compact' : '') +
                ' eupopup-color-' + _self.params.colorStyle + '">' +
                    '<div class="eupopup-body container">' + '<div class="eupopup-content">' + _self.params.popupText + ' ' + 
                        '<a href="' + _self.params.cookiePolicyUrl + '"' +
                        (_self.params.buttonLearnmoreOpenInNewWindow ? ' target=_blank ' : '') +
                        ' class="eupopup-learn-more">' + _self.params.buttonLearnmoreTitle + '</a>' + '</div>' +
                        '<div class="eupopup-buttons">' +
                            '<button type="button" class="eupopup-button eupopup-button_1 btn-primary">'+ _self.params.buttonContinueTitle + '</button>' +
                        '</div>' +
                    '</div>' +
            '</div>';

        return html;
    };

    // Storing the consent in a cookie
    var setUserAcceptsCookies = function(consent) {
        var d = new Date();
        var expiresInDays = _self.params.agreementExpiresInDays * 24 * 60 * 60 * 1000;
        d.setTime( d.getTime() + expiresInDays );
        var expires = "expires=" + d.toGMTString();
        document.cookie = _self.vars.COOKIE_NAME + '=' + consent + "; " + expires + ";path=/";

        $(document).trigger("user_cookie_consent_changed", {'consent' : consent});
    };

    // Let's see if we have a consent cookie already
    var userAlreadyAcceptedCookies = function() {
        var userAcceptedCookies = false;
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var c = cookies[i].trim();
            if (c.indexOf(_self.vars.COOKIE_NAME) == 0) {
                userAcceptedCookies = c.substring(_self.vars.COOKIE_NAME.length + 1, c.length);
            }
        }

        return userAcceptedCookies;
    };

    var hideContainer = function() {
        // $('.eupopup-container').slideUp(200);
        $('.eupopup-container').animate({
            opacity: 0,
            height: 0
        }, 200, function() {
            $('.eupopup-container').hide(0);
        });
    };

    ///////////////////////////////////////////////////////////////////////////////////////////////
    // PUBLIC FUNCTIONS  //////////////////////////////////////////////////////////////////////////
    var publicfunc = {

        // INITIALIZE EU COOKIE LAW POPUP /////////////////////////////////////////////////////////
        init : function(settings) {

            parseParameters(
                $(".eupopup").first(),
                $(".eupopup-markup").html(),
                settings);

            // No need to display this if user already accepted the policy
            if (userAlreadyAcceptedCookies()) {
                return;
            }

            // We should initialise only once
            if (_self.vars.INITIALISED) {
                return;
            }
            _self.vars.INITIALISED = true;

            // Markup and event listeners >>>
            _self.vars.HTML_MARKUP = createHtmlMarkup();
			console.log(_self.vars.HTML_MARKUP);

            if ($('.eupopup-block').length > 0) {
                $('.eupopup-block').append(_self.vars.HTML_MARKUP);
            } else {
                $('BODY').append(_self.vars.HTML_MARKUP);
            }

            $('.eupopup-button_1').click(function() {
                setUserAcceptsCookies(true);
                hideContainer();
                return false;
            });
            $('.eupopup-closebutton').click(function() {
                setUserAcceptsCookies(true);
                hideContainer();
                return false;
            });
            // ^^^ Markup and event listeners

            // Ready to start!
            $('.eupopup-container').show();

            // In case it's alright to just display the message once
            if (_self.params.autoAcceptCookiePolicy) {
                setUserAcceptsCookies(true);
            }

        }

    };

    return publicfunc;
});

$(document).ready( function() {
    if ($(".eupopup").length > 0) {
        $(document).euCookieLawPopup().init({
            'info' : 'YOU_CAN_ADD_MORE_SETTINGS_HERE',
            'popupText' : 'We use them to give you the best experience. If you continue using our website, we\'ll assume that you are happy to receive all cookies on this website.'
        });
    }
});

$(document).bind("user_cookie_consent_changed", function(event, object) {
    // console.log("User cookie consent changed: " + $(object).attr('consent') );
});

}(jQuery));
