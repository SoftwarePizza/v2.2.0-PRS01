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
{block name='product_miniature_item'}
<article id="product-{$product.id_product}" class="product-miniature js-product-miniature product-grid col-sm-4" data-id="product-{$product.id_product}" data-id-product="{$product.id_product}" data-id-product-attribute="{$product.id_product_attribute}">
<div class="thumbnail-container {if {hook h='displayTtproductImageHover' id_product=$product.id_product home='medium_default' large='large_default'}} hover-image{/if}">
		<div class="ttproduct-image col-sm-5">
		{block name='product_thumbnail'}
				{if $product.cover}
					<a href="{$product.canonical_url}" class="thumbnail product-thumbnail">
						<img
							class="ttproduct-img1"
							src = "{$product.cover.bySize.home_default.url}"
							alt = "{if !empty($product.cover.legend)}{$product.cover.legend}{else}{$product.name|truncate:150:'...'}{/if}"
							data-full-size-image-url = "{$product.cover.large.url}" width="{$product.cover.bySize.home_default.width}"
height="{$product.cover.bySize.home_default.height}"
						>
					{if {hook h='displayTtproductImageHover' id_product=$product.id_product home='home_default' large='large_default'}}
						<div class="loader"></div>
						{/if}
						{hook h="displayTtproductImageHover" id_product=$product.id_product home='home_default' large='large_default'}
					</a>
				{else}
					<a href="{$product.canonical_url}" class="thumbnail product-thumbnail">
						<img
							class="ttproduct-img1"
							src = "{$urls.no_picture_image.bySize.home_default.url}"
						>
					</a>
					
				{/if}
			{/block}
		  
          {block name='product_availability'}
					{if $product.show_availability && $product.availability_message}
					  {if $product.availability == 'unavailable'}
					  	<div class="product_unavailable">
                          <div class="label_out-of-stock">                                               
					       <span>OUT OF STOCK</span>
					  </div>
                          </div>
						{/if}
					{/if}
   			 {/block}
          
			{block name='product_flags'}
				<ul class="product-flags">
					{foreach from=$product.flags item=flag}
						<li class="{$flag.type}">{$flag.label}</li>
					{/foreach}
				</ul>
			{/block}
						
		</div>
		
		<div class="ttproduct-desc col-sm-7">
			<div class="product-description">
				   {block name='product_name'}
					  {if $page.page_name == 'index'}
						<h3 class="h3 product-title"><a href="{$product.canonical_url}">{$product.name|truncate:99:'...'}</a></h3>
					  {else}
						<h3 class="h3 product-title"><a href="{$product.canonical_url}">{$product.name|truncate:99:'...'}</a></h3>
					  {/if}
					{/block}
				{block name='product_description_short'}
					<div class="product-desc-short">{$product.description_short|strip_tags:'UTF-8'|truncate:199:'...' nofilter}</div>
				{/block}
			</div>
							{block name='product_reviews'}
					{hook h='displayProductListReviews' product=$product}
				{/block}
				<div class="highlighted-informations{if !$product.main_variants} no-variants{/if} hidden-sm-down">
				{block name='product_variants'}
					{if $product.main_variants}
						{include file='catalog/_partials/variant-links.tpl' variants=$product.main_variants}
					{/if}
				{/block}
				</div>

				{block name='product_price_and_shipping'}
					{if $product.show_price}
						<div class="product-price-and-shipping">
							<span class="price">{$product.price}</span>
							{if $product.has_discount}
								{hook h='displayProductPriceBlock' product=$product type="old_price"}
								{if $product.discount_type === 'percentage'}
									 <span class="discount-percentage discount-product">{$product.discount_percentage}</span>
								{elseif $product.discount_type === 'amount'}
									 <span class="discount-amount discount-product">{$product.discount_amount_to_display}</span>
								{/if}
								<span class="regular-price">{$product.regular_price}</span>
							{/if}
							{hook h='displayProductPriceBlock' product=$product type="before_price"}
							{hook h='displayProductPriceBlock' product=$product type='unit_price'}
							{hook h='displayProductPriceBlock' product=$product type='weight'}
						</div>
					{/if}
				{/block}
				
				<div class="tt-button-container">
				<div class="tt-button">
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
					<a href="#" class="btn select-btn btn-primary btn-default js-quick-view" data-link-action="quickview" data-toggle="tooltip" title="Select Options"><i class="material-icons add_to_cart_icon">trending_flat</i>{l s='Select Option' d='Shop.Theme.Actions'}</a>
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
						<button class="button add-to-cart add-to-cart-disable btn btn-default" disabled title="{l s='Out of stock' d='Shop.Theme.Actions'}">
							<i class='material-icons-outlined add_to_cart_icon'>shopping_cart</i>
							{l s='Out Of Stock' d='Shop.Theme.Actions'}
						</button>
					{/if}
					</form>
				{/if}
				</div>
			</div>
							<div class="ttproducthover">
				{hook h='displayTtWishListButton' product=$product}
				{hook h='displayTtCompareButton' product=$product}
				{block name='quick_view'}
						<a href="#" class="quick-view btn btn-primary" data-link-action="quickview" title="{l s='Quick view' d='Shop.Theme.Actions'}">
						<i class='material-icons-outlined'>visibility</i>
						<span class="loading"><i class="material-icons">cached</i></span>
						</a>
				{/block}
			</div>
			
		</div>
	</div>
</article>
{/block}