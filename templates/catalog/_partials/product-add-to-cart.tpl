{**
 * 2007-2022 PrestaShop and Contributors
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
 * needs please refer to https://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2022 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 *}
<div class="product-add-to-cart js-product-add-to-cart">
  {if !$configuration.is_catalog}
    <span class="control-label">{l s='Quantity' d='Shop.Theme.Catalog'}</span>

    {block name='product_quantity'}
      <div class="product-quantity clearfix">
        <div class="qty">
          <input
            type="number"
            name="qty"
            id="quantity_wanted"
            inputmode="numeric"
            pattern="[0-9]*"
            {if $product.quantity_wanted}
              value="{$product.quantity_wanted}"
              min="{$product.minimal_quantity}"
            {else}
              value="1"
              min="1"
            {/if}
            class="input-group"
            aria-label="{l s='Quantity' d='Shop.Theme.Actions'}"
          >
        </div>

        <div class="add">
          <button
            class="btn btn-primary add-to-cart"
            data-button-action="add-to-cart"
            type="submit"
            {if !$product.add_to_cart_url}
              disabled
            {/if}
          >
           {if $product.quantity > 0 && $product.quantity >= $product.minimal_quantity || $product.allow_oosp}
            <i class="material-icons-outlined shopping-cart">&#xE547;</i>
            {l s='Add to cart' d='Shop.Theme.Actions'}
            {else}
            {l s='Out of stock' d='Shop.Theme.Actions'}
        {/if}
          </button>
          {if $product.add_to_cart_url}
		{if $product.quantity > 0 && $product.quantity >= $product.minimal_quantity || $product.allow_oosp}
		<a href="{$urls.pages.order}" class="checkout-btn btn-secondary">
		<i class="material-icons shopping-cart">&#xe15e;</i>
		{l s='Buy Now' d='Shop.Theme.Actions'}
		</a>
		{/if}
		{/if}
        </div>

        {hook h='displayProductActions' product=$product}
      </div>
    {/block}
    {hook h='displayProductCountdown' product=$product}
    {block name='product_availability'}
        {if $product.show_availability && $product.availability_message}
      <span id="product-availability" class="js-product-availability">
          {if $product.availability == 'available'}
            <i class="material-icons rtl-no-flip product-available">&#xE5CA;</i>
          {elseif $product.availability == 'last_remaining_items'}
            <i class="material-icons product-last-items">&#xE002;</i>
          {else}
            <i class="material-icons product-unavailable">&#xE14B;</i>
          {/if}
          {$product.availability_message}
      </span>
        {/if}
    {/block}
	{hook h='displayTtCompareButton' product=$product}
	{hook h='displayTtWishlistButton' product=$product}
	{hook h='displaySizeguide'}
	{if $product.minimal_quantity > 1}
    {block name='product_minimal_quantity'}
      <p class="product-minimal-quantity js-product-minimal-quantity">
        
          {l
          s='The minimum purchase order quantity for the product is %quantity%.'
          d='Shop.Theme.Checkout'
          sprintf=['%quantity%' => $product.minimal_quantity]
          }
        
      </p>
    {/block}
    {/if}
  {/if}
</div>
