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
jQuery(document).ready(function () {
	
	$('input[name=ttsatc_display_sticky_add_to_cart]').on('click', function(){
		if ($(this).val() == '1'){
			$('input[name=ttsatc_display_quantity]').parents('.form-group').show();
			$('select[name=ttsatc_effect]').parents('.form-group').show();
			$('input[name=ttsatc_interalEffect]').parents('.form-group').show();
		} else {
			$('input[name=ttsatc_display_quantity]').parents('.form-group').hide();
			$('select[name=ttsatc_effect]').parents('.form-group').hide();
			$('input[name=ttsatc_interalEffect]').parents('.form-group').hide();
		}
	});


});