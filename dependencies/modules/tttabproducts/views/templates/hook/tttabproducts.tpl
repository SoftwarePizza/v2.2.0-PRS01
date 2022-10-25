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

	<div id="hometab" class="home-tab aos-init aos-animate" data-aos="fade-up">
	<div class="container">
		<div class="row">
		<h2 class="h2 tt-title">{l s='TRENDING PRODUCTS' mod='tttabproducts'}</h2>
		<h4 class="h4 tt-subtitle">{l s='Trending Furniture In This Season' mod='tttabproducts'}</h4>
		<div class="tabs">
			<ul class="tabs_slider nav nav-tabs">
			{$count=0}
			{foreach from=$ttTabproducts item=productTab name=ttTabProducts}
				<li class="nav-item {$productTab.id} item {if $count==0}active{/if}" rel="tab_{$productTab.id}">
					<h3 class="tab-title">{$productTab.name}</h3>
				</li>
				{$count= $count+1}
			{/foreach}	
			</ul>
		</div>

{if $ttTabproducts}
		<div class="home-tab-content" id="home-tab-content">
		{foreach from=$ttTabproducts item=productTab name=ttTabProducts}
			<div id="tab_{$productTab.id}" class="tab_content">

{assign var="tt_cnt" value="1"}
{assign var="tt_total" value=$productTab.productInfo|count}

{if $tt_total == 0}
	<div class="no-products col-sm-12"><p class="alert alert-info">{l s='No Products in current tab at this time.' mod='tttabproducts'}</p></div>
{else}
		<div class="products productTab-item owl-carousel">						
			{foreach from=$productTab.productInfo item=product name=myLoop}
			{if $tt_total >= 8}
			{if $tt_cnt % 2 != 0}
				<ul>
				<li>
			{/if}
			{/if}
				{include file="catalog/_partials/miniatures/product.tpl" product=$product}
			{if $tt_total >= 8}
			{if $tt_cnt % 2 == 0}
				</li>
				</ul>
			{/if}
			{/if}

			{$tt_cnt = $tt_cnt+1}
			{/foreach}

			{if $tt_total >= 8}
			{if $tt_cnt % 2 == 0}
				</li>
				</ul>
			{/if}
			{/if}
		</div>			
{/if}
	{if $tt_total > 4 and $tt_total < 8 or $tt_total > 8}
	<div class="customNavigation">
		<a class="btn prev tthometab_prev">{l s='PREV' mod='tttabproducts'}</a>
		<a class="btn next tthometab_next">{l s='NEXT' mod='tttabproducts'}</a>
	</div>
	{/if}


			</div>
		{/foreach}	
		</div>
 	{else}
		<div class="no-products col-sm-12"><p class="alert alert-warning">{l s='There is no products' mod='tttabproducts'}</p></div>
	 {/if}
		</div>
		</div>
	</div>