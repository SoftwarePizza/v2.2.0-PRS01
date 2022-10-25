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

<section class="new-products clearfix mt-3">
  <h1 class="h1 products-section-title text-uppercase">{l s='New products' d='Shop.Theme.Catalog'}</h1>
  <div class="title clearfix hidden-md-up" data-target="#new-product" data-toggle="collapse">
    <span class="h3 text-uppercase">{l s='New products' d='Shop.Theme.Catalog'}</span>
    <span class="float-xs-right">
      <span class="navbar-toggler collapse-icons">
        <i class="material-icons add">&#xE145;</i>
        <i class="material-icons remove">&#xE15B;</i>
      </span>
    </span>
  </div>
  <div id="new-product" class="collapse toggle">
	<div class="products">
		{assign var="tt_cnt" value="1"}
		{assign var="tt_total" value=$products|count}
		{foreach from=$products item="product"}
		{if $tt_total >= 3}
				<!-- Start TemplateTrip 3 product slide code -->
				{if $tt_cnt % 3 == 1}
				<ul>
					<li class="new">
					{/if}
				{/if}
				<!-- End TemplateTrip 3 product slide code -->
		  {include file="catalog/_partials/miniatures/leftproduct.tpl" product=$product}
				  <!-- Start TemplateTrip 3 product slide code -->
				{if $tt_total >= 3}
					{if $tt_cnt % 3 == 0}
							</li>
							</ul>
					{/if}
					{/if}
	
					{$tt_cnt = $tt_cnt+1}
			<!-- End TemplateTrip 3 product slide code -->
		{/foreach}
		{if $tt_total >= 3}
			{if $tt_cnt % 3 == 0}
					</li>
					</ul>
			{/if}
		{/if}
  	</div>
  <a class="all-product-link float-xs-left float-md-right h4" href="{$allNewProductsLink}">
  {l s='All new products' d='Shop.Theme.Catalog'}<i class="material-icons">&#xE315;</i>
  </a>
  </div>
</section>

