// ==UserScript==
// @name         Skjul af danske betalingsartikler
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Vil sætte opacity lav for at markere hvilke artikler der er betalingsartikler som man alligevel ikke har adgang til
// @author       Anders Kvist
// @license      https://raw.githubusercontent.com/anderskvist/TM-SkjulDanskeBetalingsartikler/master/LICENSE
// @icon         https://raw.githubusercontent.com/anderskvist/TM-SkjulDanskeBetalingsartikler/master/icon.png
// @homepage     https://github.com/anderskvist/TM-SkjulDanskeBetalingsartikler
// @supportURL   https://github.com/anderskvist/TM-SkjulDanskeBetalingsartikler/issues
// @include      https://nordjyske.dk/
// @include      https://ekstrabladet.dk/
// @include      https://ing.dk/
// @include      https://www.berlingske.dk/
// @include      https://jyllands-posten.dk/


// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var hostname = window.location.host;

    var opacity = 0.05;

    switch(hostname) {
        case "ekstrabladet.dk":
        case "nordjyske.dk":
        case "jyllands-posten.dk":
            var elements = document.getElementsByTagName("a");

            for(var i = 0, l = elements.length; i < l; i++) {
                var element = elements[i];
                if (element.href.match("https://.*/(plus|premium)/.*") != null) {
                    element.parentNode.style.opacity=opacity.toString();
                }
            }
        break;
        case "ing.dk":
            elements = document.getElementsByTagName("a");

            for(i = 0, l = elements.length; i < l; i++) {
                element = elements[i];
                if (element.classList.contains("plus-label-container")) {
                    element.parentNode.style.opacity=opacity.toString();
                }
            }
        break;
        case "www.berlingske.dk":
            elements = document.getElementsByTagName("article");

            for(i = 0, l = elements.length; i < l; i++) {
                element = elements[i];
                if (element.classList.contains("dre-item--feature-premium")) {
                    element.style.opacity=opacity.toString();
                }
            }
        break;
    }

})();
