{**
* 2007-2022 PrestaShop
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
*  @author PrestaShop SA <contact@prestashop.com>
*  @copyright  2007-2022 PrestaShop SA
*  @license    http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*}

 <section class="brands aos-init aos-animate" data-aos="fade-up">
 <div class="container">
	<h2 class="h2 products-section-title tt-title">{l s='Brands' mod='ttbrandlogo'}</h2>
	{if $brands}
	 <ul id="ttbrandlogo-carousel" class="product_list">
		{foreach from=$brands item=brand name=brand_list}
		{if $smarty.foreach.brand_list.index == $brand_items}
		{break}
		{/if}
	<li class="brand-image">
		<a href="{$link->getmanufacturerLink($brand['id_manufacturer'], $brand['link_rewrite'])}" title="{$brand.name}">
			<img src="{$link->getManufacturerImageLink($brand['id_manufacturer'])}" alt="{$brand.name}" loading="lazy" />
		</a>
	{if $brandname}
		<h3 class="h3 product-title">
			<a class="product-name"  href="{$link->getmanufacturerLink($brand['id_manufacturer'], $brand['link_rewrite'])}" title="{$brand.name}">{$brand.name}</a>
		</h3>
	{/if}
	</li>
	{/foreach}
	</ul>
	{else}
	<p>{l s='No brand' mod='ttbrandlogo'}</p>
	{/if}
</div>
</section>