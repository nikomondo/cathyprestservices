/*!
 *
 *  Web Starter Kit
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
/* eslint-env browser */
(function() {
    $(window).scroll(function() { //Au scroll dans la fenetre on déclenche la fonction
        if ($(this).scrollTop() > 700) { //si on a défilé de plus de 150px du haut vers le bas
            $('#navmenu').addClass("fixNavigation").removeClass('hidden'); //on ajoute la classe "fixNavigation" à <div id="navigation">
        } else {
            $('#navmenu').removeClass("fixNavigation").addClass('hidden'); //sinon on retire la classe "fixNavigation" à <div id="navigation">
        }
    });
})();
