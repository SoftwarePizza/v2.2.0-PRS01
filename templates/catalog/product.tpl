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
{extends file=$layout}

{block name='head_seo' prepend}
  <link rel="canonical" href="{$product.canonical_url}">
{/block}

{block name='head' append}
  <meta property="og:type" content="product">
  {if $product.cover}
    <meta property="og:image" content="{$product.cover.large.url}">
  {/if}
  {if $product.show_price}
    <meta property="product:pretax_price:amount" content="{$product.price_tax_exc}">
    <meta property="product:pretax_price:currency" content="{$currency.iso_code}">
    <meta property="product:price:amount" content="{$product.price_amount}">
    <meta property="product:price:currency" content="{$currency.iso_code}">
  {/if}
  {if isset($product.weight) && ($product.weight != 0)}
  <meta property="product:weight:value" content="{$product.weight}">
  <meta property="product:weight:units" content="{$product.weight_unit}">
  {/if}
{/block}

{block name='head_microdata_special'}
  {include file='_partials/microdata/product-jsonld.tpl'}
{/block}

{block name='content'}

  <section id="main" class="container">
      <div class="row"> 
	<div class="product-container js-product-container">
      <div class="col-md-5 pb-left-column">
        {block name='page_content_container'}
          <section class="page-content" id="content">
            {block name='page_content'}

              {block name='product_cover_thumbnails'}
                {include file='catalog/_partials/product-cover-thumbnails.tpl'}
              {/block}
              <div class="scroll-box-arrows">
                <i class="material-icons left">&#xE314;</i>
                <i class="material-icons right">&#xE315;</i>
              </div>

            {/block}
          </section>
        {/block}
        </div>
        <div class="col-md-7 pb-right-column">    
          {block name='page_header_container'}
            {block name='page_header'}
              <h1 class="h1 tt-producttitle">{block name='page_title'}{$product.name}{/block}</h1>
            {/block}
          {/block}
		      {if isset($product_manufacturer->id)}
      <div class="product-manufacturer col-xs-2 col-sm-2">
        {if isset($manufacturer_image_url)}
          <a href="{$product_brand_url}">
            <img src="{$manufacturer_image_url}" class="img img-thumbnail manufacturer-logo" alt="{$product_manufacturer->name}" loading="lazy">
          </a>
        {else}
          <label class="label">{l s='Brand' d='Shop.Theme.Catalog'}</label>
          <span>
            <a href="{$product_brand_url}">{$product_manufacturer->name}</a>
          </span>
        {/if}
      </div>
    {/if}
		  	{block name='product_comment'}
				{capture name='displayTtProductExtra'}{hook h='displayTtProductExtra'}{/capture}
				{if $smarty.capture.displayTtProductExtra}
				{$smarty.capture.displayTtProductExtra nofilter}
				{/if}
			{/block}
		    {block name='product_additional_info'}
                    {include file='catalog/_partials/product-additional-info.tpl'}
            {/block}

          {block name='product_prices'}
            {include file='catalog/_partials/product-prices.tpl'}
          {/block}
          <div class="product-information col-xs-10 col-sm-10">
            {block name='product_description_short'}
              <div id="product-description-short-{$product.id}">{$product.description_short nofilter}</div>
            {/block}

            {if $product.is_customizable && count($product.customizations.fields)}
              {block name='product_customization'}
                {include file="catalog/_partials/product-customization.tpl" customizations=$product.customizations}
              {/block}
            {/if}

            <div class="product-actions js-product-actions">
              {block name='product_buy'}
                <form action="{$urls.pages.cart}" method="post" id="add-to-cart-or-refresh">
                  <input type="hidden" name="token" value="{$static_token}">
                  <input type="hidden" name="id_product" value="{$product.id}" id="product_page_product_id">
                 <input type="hidden" name="id_customization" value="{$product.id_customization}" id="product_customization_id" class="js-product-customization-id">

                  {block name='product_variants'}
                    {include file='catalog/_partials/product-variants.tpl'}
                  {/block}

                  {block name='product_pack'}
                    {if $packItems}
                      <section class="product-pack">
                        <h3 class="h4">{l s='This pack contains' d='Shop.Theme.Catalog'}</h3>
                        {foreach from=$packItems item="product_pack"}
                          {block name='product_miniature'}
                            {include file='catalog/_partials/miniatures/pack-product.tpl' product=$product_pack showPackProductsPrice=$product.show_price}
                          {/block}
                        {/foreach}
                    </section>
                    {/if}
                  {/block}

                  {block name='product_discounts'}
                    {include file='catalog/_partials/product-discounts.tpl'}
                  {/block}

                  {block name='product_add_to_cart'}
                    {include file='catalog/_partials/product-add-to-cart.tpl'}
                  {/block}

			 {* Input to refresh product HTML removed, block kept for compatibility with themes *}
							
				 {block name='product_refresh'}{/block}
	                 </form>
              {/block}

            </div>

            {block name='hook_display_reassurance'}
              {hook h='displayReassurance'}
            {/block}

           
        </div>
      </div>
	 </div>
	  </div>
	  <div class="ttproductpagetab">
	 {block name='product_tabs'}
	 			<div class="tabs">
					<ul class="nav nav-tabs" role="tablist">
					  {if $product.description}
						<li class="nav-item">
						   <a
							 class="tab-title{if $product.description} active js-product-nav-active{/if}"
							 data-toggle="tab"
							 href="#description"
							 role="tab"
							 aria-controls="description"
							 {if $product.description} aria-selected="true"{/if}>{l s='Description' d='Shop.Theme.Catalog'}</a>
						</li>
					  {/if}
					  <li class="nav-item">
						<a
						  class="tab-title{if !$product.description} active js-product-nav-active{/if}"
						  data-toggle="tab"
						  href="#product-details"
						  role="tab"
						  aria-controls="product-details"
						  {if !$product.description} aria-selected="true"{/if}>{l s='Product Details' d='Shop.Theme.Catalog'}</a>
					  </li>
					  {if $product.attachments}
						<li class="nav-item">
						  <a
							class="tab-title"
							data-toggle="tab"
							href="#attachments"
							role="tab"
							aria-controls="attachments">{l s='Attachments' d='Shop.Theme.Catalog'}</a>
						</li>
					  {/if}
					  {foreach from=$product.extraContent item=extra key=extraKey}
						<li class="nav-item">
						  <a
							class="tab-title"
							data-toggle="tab"
							href="#extra-{$extraKey}"
							role="tab"
							aria-controls="extra-{$extraKey}">{$extra.title}</a>
						</li>
					  {/foreach}
					  {hook h="displayProductTab"}
					</ul>
                <div class="tab-content" id="tab-content">
                 <div class="tab-pane fade in{if $product.description} active js-product-tab-active{/if}" id="description" role="tabpanel">
                   {block name='product_description'}
                     <div class="product-description">{$product.description nofilter}</div>
                   {/block}
                 </div>

                 {block name='product_details'}
                   {include file='catalog/_partials/product-details.tpl'}
                 {/block}

                 {block name='product_attachments'}
                   {if $product.attachments}
                    <div class="tab-pane fade in" id="attachments" role="tabpanel">
                       <section class="product-attachments">
                         <h3 class="h5 text-uppercase">{l s='Download' d='Shop.Theme.Actions'}</h3>
                         {foreach from=$product.attachments item=attachment}
                           <div class="attachment">
                             <h4><a href="{url entity='attachment' params=['id_attachment' => $attachment.id_attachment]}">{$attachment.name}</a></h4>
                             <p>{$attachment.description}</p
                             ><a href="{url entity='attachment' params=['id_attachment' => $attachment.id_attachment]}">
                               {l s='Download' d='Shop.Theme.Actions'} ({$attachment.file_size_formatted})
                             </a>
                           </div>
                         {/foreach}
                       </section>
                     </div>
                   {/if}
                 {/block}

                 {foreach from=$product.extraContent item=extra key=extraKey}
                 <div class="tab-pane fade in {$extra.attr.class}" id="extra-{$extraKey}" role="tabpanel" {foreach $extra.attr as $key => $val} {$key}="{$val}"{/foreach}>
                   {$extra.content nofilter}
                 </div>
                 {/foreach}
				 {hook h="displayProductTabContent"}
              </div>  
				</div>
          {/block}
		  </div>
		  
				 {block name='product_comment_tab_content'}
					{capture name='displayTtProductTabContent'}{hook h='displayTtProductTabContent'}{/capture}
					{if $smarty.capture.displayTtProductTabContent}
						{$smarty.capture.displayTtProductTabContent nofilter}
					{/if}
				{/block}
    {block name='product_footer'}
      {hook h='displayFooterProduct' product=$product category=$category}
    {/block}
				
    

    {block name='product_images_modal'}
      {include file='catalog/_partials/product-images-modal.tpl'}
    {/block}

    {block name='page_footer_container'}
      <footer class="page-footer">
        {block name='page_footer'}
        {/block}
      </footer>
    {/block}
  </section>

{block name='product_accessories'}
      {if $accessories}
        <section class="product-accessories clearfix">
          <h3 class="tt-title">{l s='YOU MIGHT ALSO LIKE' d='Shop.Theme.Catalog'}</h3>
          <div class="container">
		  <div class="row">
          <div class="products">
            {foreach from=$accessories item="product_accessory"}
              {block name='product_miniature'}
                {include file='catalog/_partials/miniatures/product.tpl' product=$product_accessory}
              {/block}
            {/foreach}
          </div>
          </div>
		  </div>
        </section>
      {/if}
    {/block}
{/block}
