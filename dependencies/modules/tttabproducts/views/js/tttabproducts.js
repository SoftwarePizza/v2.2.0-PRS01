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
jQuery(document).ready(function($) {
	var ttTabproducts = $(".home-tab .productTab-item ");
	ttTabproducts.owlCarousel({
			dots: false,
			nav : false,
			responsive:{
				0:{
					items:1,
				},
				481:{
					items:2,
				},
				543:{
					items:2,
				},
				768:{
					items:3,
				},
				1200:{
					items:4,
				}
			}
		});
	      $(".tthometab_prev").click(function(){
			ttTabproducts.trigger('prev.owl.carousel',[700]);
	  })
	  $(".tthometab_next").click(function(){
		 	ttTabproducts.trigger('next.owl.carousel',[700]);
	  })

		checkClasses();
		ttTabproducts.on('translated.owl.carousel', function(event) {
			checkClasses();
		});

		function checkClasses(){
			$('.home-tab .tab_content').each(function(){
				var total = $(this).find('.owl-stage .owl-item.active').length;
				$(this).find('.owl-item').removeClass('firstActiveItem');
				$(this).find('.owl-item').removeClass('lastActiveItem');
				$(this).find('.owl-item.active').each(function(index){
					if (index === 0) { $(this).addClass('firstActiveItem'); }
					if (index === total - 1 && total>1) {
						$(this).addClass('lastActiveItem');
					}
				}) 
			});
		}
		$(".tab_content").hide();
	$(".tab_content:first").show(); 
	$("ul.tabs_slider li ").click(function() {
		$("ul.tabs_slider li").removeClass("active");
		$(this).addClass("active");
		$(".tab_content").hide();
		var activeTab = $(this).attr("rel"); 
		$("#"+activeTab) .fadeIn();   
	});
});
