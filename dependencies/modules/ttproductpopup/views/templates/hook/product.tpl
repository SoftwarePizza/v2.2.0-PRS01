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
 
{block name='product_miniature_item'}
<article class="product-miniature js-product-miniature" data-id="product-{$product.id_product}" data-id-product="{$product.id_product}" data-id-product-attribute="{$product.id_product_attribute}" itemscope itemtype="http://schema.org/Product">
	<div class="thumbnail-container">
		<div class="ttproduct-image col-sm-4">
			{block name='product_thumbnail'}
				{if $product.cover}
					<a href="{$product.canonical_url}" class="thumbnail product-thumbnail">
						<img
							class="ttproduct-img1"
							src = "{$product.cover.bySize.small_default.url}"
							alt = "{if !empty($product.cover.legend)}{$product.cover.legend}{else}{$product.name|truncate:150:'...'}{/if}"
							loading="lazy" 
						>
					</a>
				{else}
					<a href="{$product.canonical_url}" class="thumbnail product-thumbnail">
						<img
							class="ttproduct-img1"
							src = "{$urls.no_picture_image.bySize.home_default.url}"
							loading="lazy" 
						>
					</a>
					
				{/if}
			{/block}		
		</div>
		
		<div class="ttproduct-desc col-sm-8">
			<div class="product-description">
							 <h5 class="cat-name">{$product.category|escape:'html':'UTF-8'}</h5>

				{block name='product_name'}
				  {if $page.page_name == 'index'}
					<span class="h3 product-title text-capitalize"><a href="{$product.canonical_url}">{$product.name|truncate:30:'...'}</a></span>
				  {else}
					<span class="h3 product-title text-capitalize"><a href="{$product.canonical_url}">{$product.name|truncate:30:'...'}</a></span>
				  {/if}
				{/block}
				{block name='product_price_and_shipping'}
					{if $product.show_price}
						<div class="product-price-and-shipping" itemscope itemtype="https://schema.org/Offer">
							{hook h='displayProductPriceBlock' product=$product type="before_price"}
							<span class="sr-only">{l s='Price' d='Shop.Theme.Catalog'}</span>
							<span class="price" content="{$product.price_amount}">{$product.price}</span>
							{hook h='displayProductPriceBlock' product=$product type='unit_price'}
							{hook h='displayProductPriceBlock' product=$product type='weight'}
							{if $product.has_discount}
								{if $product.discount_type === 'percentage'}
								 <span class="discount-percentage discount-product">{$product.discount_percentage}</span>
								{elseif $product.discount_type === 'amount'}
								 <span class="discount-amount discount-product">{$product.discount_amount_to_display}</span>
								{/if}
										{hook h='displayProductPriceBlock' product=$product type="old_price"}
								<span class="sr-only">{l s='Regular price' d='Shop.Theme.Catalog'}</span>
								<span class="regular-price">{$product.regular_price}</span>
							{/if}
						</div>
					{/if}
				{/block}
				<div class="ttproductattributes-add">
				<form action="{$urls.pages.cart}" method="post">
                        <input type="hidden" name="id_product" value="{$product.id_product}">
                        <input type="hidden" name="qty" value="1">
                        {if !empty($product.is_customizable) && count($product.customizations.fields)}
                        <input type="hidden" name="id_customization" value="{$product.id_customization}" id="product_customization_id">
                        {/if}
                        <input type="hidden" name="token" value="{$static_token}">
					<button class="btn btn-primary js-ttproductattributes-add-to-cart" data-button-action="add-to-cart" type="submit" {if !$product.add_to_cart_url} disabled="disabled"{/if} title="{l s='Add to cart' d='Shop.Theme.Actions'}">
						{if $product.quantity > 0 && $product.quantity >= $product.minimal_quantity || $product.allow_oosp}
                            {l s='Add to cart' d='Shop.Theme.Actions'}
                            {else}
                            {l s='Out of stock' d='Shop.Theme.Actions'}
                        {/if}
					</button>
					</form>
				</div>
			{hook h='displayProductCountdown' product=$product}
				
			</div>			
		</div>
	</div>
</article>
{/block}