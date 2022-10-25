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
{foreach from=$tt_categories item="item_category"}
{$tt_total = $tt_total+1}
{/foreach}

<div id="tt_category_feature" class="aos-init aos-animate" data-aos="fade-up">
<div class="parallex" data-source-url="{$image_url}/parallax-pattern.png" style="background-image: url('{$image_url}/parallax-pattern.png'); background-position: 50% 49.9473%;">
<div class="container">
	<div class="row">
	<div class="category_feature">
	<div class="tt-titletabcat col-sm-3">
	<div class="tt-title">SHOP BY CATEGORIES</div>
	<h3 class="tt-subtitle">Trending Furniture In This Season</h3>
			<div class="customNavigation">
				<a class="btn prev ttcategoryfeature_prev">{l s='PREV' d='Shop.Theme.Actions'}</a>
				<a class="btn next ttcategoryfeature_next">{l s='NEXT' d='Shop.Theme.Actions'}</a>
			</div>
	</div>
	{if isset($tt_categories) && $tt_categories|@count > 0}
		<div class="list_carousel responsive clearfix col-sm-9">
			<div id="tt_cat_featured" class="product-list">
			{foreach from=$tt_categories item=item_category name=tt_categories}
				{assign var=category value=$item_category.category}
				{if $category->id_category}
				 <div class="item {if $smarty.foreach.item_category.first|intval}first_item{elseif $smarty.foreach.item_category.last|intval}last_item{/if}">
					<div class="content">
						{if isset($tt_config->showimg) && $tt_config->showimg == 1}
								<a href="{$link->getCategoryLink($category->id_category, $category->link_rewrite)|escape:'html':'UTF-8'}" title="{$category->name|escape:'html':'UTF-8'}">
									{if $category->id_image && $item_category.cat_thumb == 1}
										<img src="{$path_ssl|escape:'html':'UTF-8'}img/c/{$category->id_category|intval}_thumb.jpg" alt="" width="370" height="475" loading="lazy"/>
									{elseif $item_category.cat_thumb == 1}
										<img class="replace-2x" src="{$path_ssl|escape:'html':'UTF-8'}img/c/{$category->id_category|intval}_thumb.jpg" alt="" loading="lazy"/>
									{else}
										<img class="replace-2x" src="{$path_ssl|escape:'html':'UTF-8'}img/c/{$iso_code|escape:'html':'UTF-8'}.jpg" alt="" loading="lazy"/>	
									 {/if} 
								</a>
					

						<div class="ttcat-content">
						<div class="ttcat-inner">
							<h4 class="title">
								<a href="{$link->getCategoryLink($category->id_category, $category->link_rewrite)|escape:'html':'UTF-8'}">
									{$category->name|escape:'html':'UTF-8'}
								</a>
							</h4>
						
					
						{if $item_category.sub_cat > 0 && isset($tt_config->showsub) && $tt_config->showsub == 1}
						<div class="sub-cat">
							<ul>
								{assign var="tt_cntlink" value="1"}
								{foreach from = $item_category.sub_cat item=sub_cat name=sub_cat_info}
									{$tt_cntlink = $tt_cntlink+1}
								{/foreach}
							 {foreach from = $item_category.sub_cat item=sub_cat name=sub_cat_info_link}
							{if $smarty.foreach.sub_cat_info_link.iteration > 4} {break}{/if}
									<li>
										<a href="{$link->getCategoryLink($sub_cat.id_category, $sub_cat.link_rewrite)|escape:'html':'UTF-8'}" title="{$sub_cat.name|escape:'html':'UTF-8'}">{$sub_cat.name|escape}</a>
									</li>
								{/foreach}
								{assign var="tt_cntlink" value="1"}
								{foreach from = $item_category.sub_cat item=sub_cat name=sub_cat_info}
									{$tt_cntlink = $tt_cntlink+1}
								{/foreach}
								{if $tt_cntlink > 3}
									<li class="more-link cat-btn btn-primary"><a href="{$link->getCategoryLink($category->id_category, $category->link_rewrite)|escape:'html':'UTF-8'}"><span class="category-viewall">{l s='View All' mod='ttcategoryfeature'}</span></a></li>
								{/if}
							</ul>
						</div>
						{/if}
						</div>
						{/if}
						</div>
					</div>
				 </div>
				  {/if}
			 {/foreach}
			 </div>
	</div>
		{else}
		<p class="alert alert-warning">{l s='There is no category' mod='ttcategoryfeature'}</p>
	{/if}
</div>
</div>
</div>
</div>
</div>
