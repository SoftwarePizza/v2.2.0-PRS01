/**
 * 2007-2022 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
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
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2022 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
*/
$(document).ready(function() {
	if($( window ).width() >= 992) {
		$( ".tt-menu-horizontal .ttmenu-content .menu-content > li.parent" ).hover(function() {
		$('body').toggleClass('menu-open'); 	
		});
	}
	$('.title-menu-mobile,.menu-content').click(function(event) { 
		$('body').addClass('menu-open'); 
		$('.ttmenu-content').addClass("open"); 
		event.stopPropagation();
	});
	$(document).click(function(){
		$('.ttmenu-content').removeClass('open');
		$('body').removeClass('menu-open');
	}); 
	$('.tt-menu-horizontal .ttmenu-content span.menu-close').click(function(){
		$('.ttmenu-content').removeClass('open');
		$('body').removeClass('menu-open');
	}); 
}); 
function responsivesearch() {
    if ($(document).width() <= 991) {
        $('#search_widget').each(function() {
    $(this).insertAfter($(this).parent().parent().parent().find("#_mobile_user_info"))});
    } else if ($(document).width() >= 992) {
       $('#search_widget').each(function() {
    $(this).insertAfter($(this).parent().parent().parent().find("#_desktop_user_info"))});
    }
}
$(document).ready(function() {
    responsivesearch();
});
$(window).resize(function() {
    responsivesearch();
});		

$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.icon-drop-mobile');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.tt-sub-menu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#tt-menu-horizontal'), false);
});
