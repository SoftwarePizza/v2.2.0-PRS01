{*
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
{assign var="tt_cnt" value="1"}
{assign var="tt_total" value="0"}
{foreach from=$products item="product"}
	{$tt_total = $tt_total+1}
{/foreach}

<div class="ttspecial-products col-sm-4 clearfix aos-init aos-animate" data-aos="fade-up">
<div class="container">
<div class="row">
<h2 class="h2 tt-title">{l s='SPECIAL PRODUCTS' mod='ttspecials'}</h2>
<h4 class="h4 tt-subtitle">{l s='Trending Furniture In This Season' mod='ttspecials'}</h4>
  <div class="products">
    {foreach from=$products item="product"}
      {include file="catalog/_partials/miniatures/ttproduct.tpl" product=$product}
    {/foreach}
  </div>
  </div>
</div>
        {if $tt_total > 3 and $tt_total < 8 or $tt_total > 8}
	<div class="customNavigation">
		<a class="btn prev ttspecial_prev">{l s='PREV' mod='ttspecials'}</a>
		<a class="btn next ttspecial_next">{l s='NEXT' mod='ttspecials'}</a>
	</div>
	{/if}

   <div class="allproduct"><a href="{$allSpecialProductsLink}">{l s='All sale products'  mod='ttspecials'}</a></div>
</div>
