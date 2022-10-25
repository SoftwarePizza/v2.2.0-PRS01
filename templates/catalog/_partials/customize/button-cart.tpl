{**
 * 2007-2022 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/osl-3.0.php
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
 * @license   http://opensource.org/licenses/osl-3.0.php Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 *}

<div class="tt-button-container">
	{if !$configuration.is_catalog}
		<form action="{$urls.pages.cart}" method="post" class="add-to-cart-or-refresh">
			<div class="product-quantity {if !$product.add_to_cart_url}disabled{/if}" style="display:none;">
				<input type="number" name="id_product" value="{$product.id_product}" class="product_page_product_id">
				<input type="number" name="id_customization" value="0" class="product_customization_id">
				<input type="hidden" name="token" value="{$static_token}" class="tt-token">
                <button type="button" onclick="qtyminus('{$product.id_product}');" class="form-control quantity-nav btnminus dis-">
                </button>
                <input name="qty" class="addhqty form-control atc_qty" type="number" value="1" min="1" max="999" data-id="input-quantity-{$product.id_product}">
                <button type="button" onclick="qtyplus('{$product.id_product}')" class="form-control quantity-nav btnplus">
                </button>
			</div>
			{if $product.quantity > 0 && $product.quantity >= $product.minimal_quantity || $product.allow_oosp}
			{if $product.attributes}
				<a href="{$product.link}" class="btn select-btn btn-primary btn-default" data-toggle="tooltip" title="Select Options"><i class="material-icons add_to_cart_icon">trending_flat</i>{l s='Select Option' d='Shop.Theme.Actions'}</a>
				{else}
				<button class="add-to-cart btn btn-primary" data-button-action="add-to-cart" title="{l s='Add To Cart' d='Shop.Theme.Actions'}" {if !$product.add_to_cart_url}
              disabled
            {/if}>
					<i class='material-icons-outlined add_to_cart_icon'>shopping_cart</i>
					<span class="loading"><i class='material-icons'>cached</i></span>
					{l s='Add To Cart' d='Shop.Theme.Actions'}
				</button>
				{/if}
			{else}
				<button class="button add-to-cart add-to-cart-disable btn btn-default" title="{l s='Out of stock' d='Shop.Theme.Actions'}">
				<i class='material-icons-outlined add_to_cart_icon'>shopping_cart</i>
				{l s='Out Of Stock' d='Shop.Theme.Actions'}
			</button>
			{/if}
		</form>
	{/if}
</div>

