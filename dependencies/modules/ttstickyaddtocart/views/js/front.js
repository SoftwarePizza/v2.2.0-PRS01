/**
* 2022 Anvanto
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
*  @author Anvanto (anvantoco@gmail.com)
*  @copyright  2022 anvanto.com

*  @license    http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*/

(function ($, window, undefined) {
	'use strict';
	
	resizeProduct();
	
	$(document).ajaxSuccess(function() {
		resizeProduct();
	});
	
	function resizeProduct(){
		$('.js-product-miniature').each( function(){
			var marginBottom = $(this).find('.add_to_cart_sticky').height()+40+'px'
			$(this).find('.thumbnail-container').css('margin-bottom', marginBottom);		
		});
	}

	$(document).on('change','.add_to_cart_sticky [data-product-attribute], .ttstickyAddToCart-select select', function() {
		
		var self = this;
		
		getData($(this).closest('.ttstickyAddToCartForm').serialize(), function(data){ 			
			isAvailableForOrder($(self).closest('.ttstickyAddToCartForm').find('.js-ttstickyAddToCart-add-to-cart'), data);
			setMaxQty($(self).closest('.ttstickyAddToCartForm').find('.ttstickyAddToCart-qty'), data);
			setMinQty($(self).closest('.ttstickyAddToCartForm').find('.ttstickyAddToCart-qty'), data);			
			setPrices($('.ttstickyAddToCart-product-price-and-shipping'), $('.ttstickyAddToCart-price-price'), data);
 			setImages($('.js-ttstickyAddToCart-image'), data);
			setVariants(self, data);
		});
	});

	$(document).on('click','.ttstickyAddToCart-dropdown-menu li', function() {
		
		var self = this;
				
		if (attributeGroups){
			generateInputs($(this).closest('.ttstickyAddToCartForm'), parseInt($('.js-ttstickyAddToCart').attr('data-id-product')), $(this).data('value'));
		}		

		getData($(this).closest('.ttstickyAddToCartForm').serialize(), function(data){ 
			isAvailableForOrder($(self).closest('.ttstickyAddToCartForm').find('.js-ttstickyAddToCart-add-to-cart'), data);
			setMaxQty($(self).closest('.ttstickyAddToCartForm').find('.ttstickyAddToCart-qty'), data);
			setMinQty($(self).closest('.ttstickyAddToCartForm').find('.ttstickyAddToCart-qty'), data);
			setPrices($('.ttstickyAddToCart-product-price-and-shipping'), $('.ttstickyAddToCart-price-price'), data);
 			setImages($('.js-ttstickyAddToCart-image'), data);
		});
	}); 
	
 	
	
	$(document).on('input','.ttstickyAddToCart-qty', function() {
		changeButInput(this);
	});
	
	
function changeButInput(self){
	var val = parseInt($(self).val());
	var max = parseInt($(self).attr('data-max'));
	var addToCart = $(self).closest('.ttstickyAddToCartForm').find('.js-ttstickyAddToCart-add-to-cart');
	var addToCartStatus = parseInt(addToCart.attr('data-status'));

	if (max && val > max){
		addToCart.attr('disabled', 'disabled');
	} else if (addToCartStatus){
		addToCart.removeAttr('disabled');
	} else {
		addToCart.attr('disabled', 'disabled');
	}
}
	
	

function getData(dataUrl, callback){	
	$.ajax({
		type: "POST",
		url: ttstickyaddtocart.controller,
		async: false,
		data: dataUrl + '&action=getProductAttributes',
		dataType: 'json',
	}).done(function(data){
		callback(data);
	});
}

function generateInputs(ttstickyAddToCartForm, productId, attrebuteID){
	$('.ttstickyAddToCart-hiddeninputs').remove();
	
	$.each(attributeGroups[productId][attrebuteID], function(index, value) {
		ttstickyAddToCartForm.append("<input name='group[" + value['id_attribute_group'] + "]' value='" + value['id_attribute'] + "' type='hidden' class='ttstickyAddToCart-hiddeninputs' />");
	});
}
	
function isAvailableForOrder(addToCart, data){
	if (!data.availableForOrder){
		addToCart.attr('disabled', 'disabled');
	} else {
		addToCart.removeAttr('disabled');
	}
	addToCart.attr('data-status', data.availableForOrder);
}

function setVariants(self, data){
	if (data.variants){
		$(self).closest('.js-ttstickyAddToCart-standart').html(data.variants);
	}
}
	
 function setMaxQty(qty, data){
	if (data.order_out_of_stock){
		qty.attr('data-max', data.quantity);
	} else {
		qty.removeAttr('data-max');
	}
}
	
function setMinQty(qty, data){
	if (data.minimal_quantity){
		qty.attr('min', data.minimal_quantity).val(data.minimal_quantity);
	}
}
	
function setPrices(priceContainer, price, data){
	priceContainer.find('.ttstickyAddToCart-regular-price').remove();
	if (data.prices.regular_price){
		priceContainer.prepend('<span class="ttstickyAddToCart-regular-price regular-price">'+data.prices.regular_price+'</span>');
	}
	
	price.html(data.prices.price);
}	

function setImages(img, data){
	if (data.images){
		img.attr('src', data.images.home[data.cover_id]);
	}
}

})(jQuery, window);

$(document).ready(function () {
	
	selectFilling();
	
	$(document).ajaxSuccess(function() {
		selectFilling();
	});

	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".add_to_cart_sticky .ttstickyAddToCart-product-selectbox"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
			&& div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.removeClass('open'); // скрываем его
		}
	});
	$(document).on('click','.ttstickyAddToCart-dropdown-toggler', function() {
		$(this).parents('.ttstickyAddToCart-dropdown').toggleClass('open');
	});
	
	$(document).on('click','.ttstickyAddToCart-dropdown-menu', function() {
		$(this).parents('.ttstickyAddToCart-dropdown').toggleClass('open');
	});

	$(document).on('click','.js-ttstickyAddToCart-product-selectbox li', function() {
		$(this).parents('.js-ttstickyAddToCart-product-selectbox').find('.js-ttstickyAddToCart-filter-option').text($(this).children('.js-ttstickyAddToCart-text').text());
		$(this).parents('.js-ttstickyAddToCart-select').find('option').removeAttr('selected');
		$(this).parents('.js-ttstickyAddToCart-select').find('option').eq($(this).index()).attr('selected','');
	});

	$(document).on('mouseleave', '.add_to_cart_sticky', function() {
		$('.ttstickyAddToCart-dropdown').removeClass('open');

	});

	function selectFilling(){
		$('.js-ttstickyAddToCart-product-selectbox li.selected').each(function() {
			let item = $(this).parents('.js-ttstickyAddToCart-product-selectbox').find('.js-ttstickyAddToCart-filter-option');
			if (!item.hasClass('selected')) {
				item.text($(this).children('.js-ttstickyAddToCart-text').text());
				item.addClass('selected');
			}
		});
	}

	$('<div class="quantity-nav"><div class="quantity-button quantity-up"><i class="material-icons">keyboard_arrow_up</i></div>' +
		'<div class="quantity-button quantity-down"><i class="material-icons">keyboard_arrow_down</i></div></div>').insertAfter('#ttstickyAddToCart_qty');
	$('.ttstickyAddToCart-qty-container').each(function() {
		var spinner = jQuery(this),
			input = spinner.find('input[type="number"]'),
			btnUp = spinner.find('.quantity-up'),
			btnDown = spinner.find('.quantity-down'),
			min = input.attr('min'),
			max = input.attr('max');

		btnUp.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

		btnDown.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
	});

	let scrollStart = ($('.product-add-to-cart .add-to-cart').offset().top + $('.product-add-to-cart .add-to-cart').height() + 20);
	stickyScroll(scrollStart);
	$(window).scroll(function(){
		stickyScroll(scrollStart);
	})
	$(document).ready(function() {
	  stickyScroll(scrollStart);
	});
	$(window).resize(function() {
	  stickyScroll(scrollStart);
	});
    $(function() {
        if ($('.add_to_cart_sticky .btn').data('animation')) {
            setInterval(function() {
                var animationName = 'animated '+$('.add_to_cart_sticky .btn').data('animation');
                var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                $('.add_to_cart_sticky .btn').addClass(animationName).one(animationend, function() {
                    $(this).removeClass(animationName);
                });
            }, $('.add_to_cart_sticky .btn').data('interval'));
        }
    });
});

function stickyScroll (scrollStart) {
	if($(window).scrollTop() > scrollStart && $('.add_to_cart_sticky').attr('data-hidden') == 1){
		$('.add_to_cart_sticky').attr('data-hidden',0);
		$('.add_to_cart_sticky').addClass("fixed");
	} 
	else if($(window).scrollTop() < scrollStart && $('.add_to_cart_sticky').attr('data-hidden') == 0) {
		$('.add_to_cart_sticky').attr('data-hidden',1);
		$('.add_to_cart_sticky').removeClass("fixed");
	}
	else if($(window).scrollTop() == $(document).height() - $(window).height()) {
		$('.add_to_cart_sticky').attr('data-hidden',1);
		$('.add_to_cart_sticky').removeClass("fixed");
	}
}
