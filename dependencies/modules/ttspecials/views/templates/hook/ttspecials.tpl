{*
* 2007-2019 PrestaShop
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
*  @copyright  2007-2019 PrestaShop SA
*  @license    http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*}
{assign var="tt_cnt" value="1"}
{assign var="tt_total" value="0"}
{foreach from=$products item="product"}
	{$tt_total = $tt_total+1}
{/foreach}

<section class="ttspecial-products clearfix bottom-to-top hb-animate-element">
<div class="container">
  <h3 class="tt-title">{l s='Special Products' mod='tt_specials'}</h3>
  <span class="ttspecial-subtitle">{l s='special items in this season' mod='ttspecials'}</span>
  <div class="ttspecial-list container">
  <div class="row">
  <div class="products">
    {foreach from=$products item="product"}
	{if $tt_total > 6}
				<!-- Start TemplateTrip 2 product slide code -->
				{if $tt_cnt % 2 != 0}
				<ul>
					<li class="specialli">
						<ul>
						<li>
				{/if}
			{/if}
				<!-- End TemplateTrip 2 product slide code -->
      {include file="catalog/_partials/miniatures/product.tpl" product=$product}
	  <!-- Start TemplateTrip 2 product slide code -->
			{if $tt_total > 6}
				{if $tt_cnt % 2 == 0}
						</li>
						</ul>
					</li>
					</ul>
				{/if}
				{/if}

				{$tt_cnt = $tt_cnt+1}
		<!-- End TemplateTrip 2 product slide code -->
    {/foreach}
	{if $tt_total > 6}
			{if $tt_cnt % 2 == 0}
					</li>
					</ul>
				</li>
				</ul>
			{/if}
		{/if}
  </div>
  </div>
  </div>
  {if $tt_total > 3}
	<div class="customNavigation">
		<a class="btn prev ttspecial_prev">{l s='Prev' mod='ttspecials'}</a>
		<a class="btn next ttspecial_next">{l s='Next' mod='ttspecials'}</a>
	</div>
 {/if}
   <div class="allproduct"><a href="{$allSpecialProductsLink}">{l s='All sale products'  mod='ttspecials'}</a></div>
   </div>
</section>