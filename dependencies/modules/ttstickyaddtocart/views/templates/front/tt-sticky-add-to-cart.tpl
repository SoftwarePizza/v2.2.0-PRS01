{**
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
 *}
 
<div class="js-ttstickyAddToCart add_to_cart_sticky" data-id-product="{$product.id_product}" data-hidden="1">
<form method="post" class="ttstickyAddToCartForm" action="{$cart|escape:'htmlall':'UTF-8'}">
<input name="token" value="{$token|escape:'htmlall':'UTF-8'}" type="hidden">
<input name="id_product" value="{$productId|escape:'htmlall':'UTF-8'}" type="hidden">
{*<input name="id_customization" value="0" placeholder="" type="hidden"> *}
<input name="qty" type="hidden" value="{$minimal_quantity|escape:'htmlall':'UTF-8'}" min="{$minimal_quantity|escape:'htmlall':'UTF-8'}">
		
	<div class="container">
		<div class="sticky-product">
            <div class="sticky-image col-xs-3 col-xl-1">
               <img class="js-ttstickyAddToCart-image ttstickyAddToCart-image" src="{$cover.small.url}" alt="" title="" loading="lazy" />
            </div>

            <div class="ttstickyAddToCart-price col-xs-5 col-xl-3">
                <h3 class="product-title">{$product.name|truncate:30:'...'}</h3>
                <div class="ttstickyAddToCart-product-price-and-shipping product-price-and-shipping">
					{if $product.has_discount}
                    <span class="ttstickyAddToCart-regular-price regular-price">{$product.regular_price}</span>
					{/if}
                    <span class="ttstickyAddToCart-price-price price">{$product.price}</span>
                </div>

            </div>

            <div class="col-xs-4 col-xl-5 ttstickyAddToCart-standart">
                <div class="js-ttstickyAddToCart-standart">
                    {include file='./product-variants.tpl'}
                </div>
            </div>
			
            <div class="ttstickyAddToCart-btnadd col-xl-3 col-xs-4">

                {if isset($configuration.is_catalog) AND !$configuration.is_catalog}
                <div class="ttstickyAddToCart-qty-add clearfix">

                    <div class="ttstickyAddToCart-qty-container ttstickyAddToCart-qty-container">
                      <input id="ttstickyAddToCart_qty" type="number" name="qty" value="{$minimal_quantity|escape:'htmlall':'UTF-8'}" class="input-group form-control ttstickyAddToCart-qty" min="{$minimal_quantity|escape:'htmlall':'UTF-8'}" {if $order_out_of_stock} data-max="{$quantity|escape:'htmlall':'UTF-8'}" {/if} aria-label="Quantity" style="display: block;" >
                    </div>

                    <div class="ttstickyAddToCart-add ">
                      <button class="btn btn-primary js-ttstickyAddToCart-add-to-cart" data-button-action="add-to-cart" type="submit" {if $availableForOrder !='1'} disabled="disabled"{/if} data-status="{$availableForOrder}">
                        {if $product.quantity > 0 && $product.quantity >= $product.minimal_quantity || $product.allow_oosp}
                            <i class="material-icons-outlined shopping-cart">&#xE547;</i>
                            {l s='Add to cart' d='Shop.Theme.Actions'}
                            {else}
							<i class="material-icons-outlined shopping-cart">&#xE547;</i>
                            {l s='Out of stock' d='Shop.Theme.Actions'}
                        {/if}
                      </button>
                    </div>
                </div>
                {/if}
            </div>
			</div>
	</div>
</form>	
</div>