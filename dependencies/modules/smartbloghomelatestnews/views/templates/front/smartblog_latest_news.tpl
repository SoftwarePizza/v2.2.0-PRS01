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

{assign var="tt_cnt" value="1"}
{assign var="tt_total" value="0"}
 {foreach from=$view_data item=post}
	{$tt_total = $tt_total+1}
{/foreach}

<div id="smartblog_block" class="block products_block  aos-init aos-animate clearfix col-md-6" data-aos="fade-up">
<div class="smartblog">
        {if isset($smartshowhometitle) && $smartshowhometitle}
				<h2 class="homepage-heading">
					<a href="{smartblog::GetSmartBlogLink('smartblog')}" class="tt-title">{l s='LATEST NEWS' mod='smartbloghomelatestnews'}</a>
				</h2>
				<h3 class="tt-subtitle">Trending Furniture In This Season</h3>
        {/if}

        <div class="sdsblog-box-content block_content">
            {if isset($view_data) AND !empty($view_data)}
                {assign var='i' value=1}
                <div id="smartblog-carousel" class="owl-carousel product_list">
                    {foreach from=$view_data item=post}
                        {assign var="options" value=null}
                        {$options.id_post = $post.id}
                        {$options.slug = $post.link_rewrite}
                        {if $tt_total >=2}
                        <!-- Start TemplateTrip 2 product slide code -->
                            {if $tt_cnt % 2 != 0}
                                <ul>
                                    <li class="blogli">
                                {/if}
                            {/if}
                        <!-- End TemplateTrip 2 product slide code -->
                            <div class="blog_post col-sm-12">
                                <div class="news_module_image_holder col-sm-4 col-xs-4">
                                    <a href="{smartblog::GetSmartBlogLink('smartblog_post',$options)}">
                                        <img alt="{$post.title}" class="feat_img_small" src="{$link->getMediaLink($smart_module_dir)}/smartblog/views/img/{$post.post_img}-home-default.jpg" loading="lazy">
                                        <span class="blog-hover"></span>
                                    </a>
                                    <span class="blogicons">
                                        <a title="Click to view Full Image" href="{$link->getMediaLink($smart_module_dir)}/smartblog/views/img/{$post.post_img}-single-default.jpg" data-lightbox="example-set" class="icon zoom">&nbsp;</a>
                                    </span>
                                </div>
                                <div class="blog_content col-sm-8 col-xs-8">
                                        <h4 class="sds_post_title"><a href="{smartblog::GetSmartBlogLink('smartblog_post',$options)}">{$post.title|escape:'htmlall':'UTF-8'|truncate:25:'...'}</a></h4>
										 <span class="blog_date">
										 	<i class="material-icons calendar">&#xE916;</i>
											<span class="day_month">{$post.date_added|date_format:"%b"}</span>
											<span class="date_inner">
											<span class="day_date">{$post.date_added|date_format:"%e"}</span>
												<span class="day_year">{$post.date_added|date_format:"%Y"}</span>
											</span>
										</span>
                                        <p class="desc">
                                            {$post.short_description|escape:'htmlall':'UTF-8'|truncate:90:'...'}
                                        </p>
										<div class="read_more">
											<a title="Click to view Read More" href="{smartblog::GetSmartBlogLink('smartblog_post',$options)}" class="icon readmore">{l s='read more!' mod='smartbloghomelatestnews'}</a>
										</div>
                                </div>
                            </div>
                        <!-- Start TemplateTrip 2 product slide code -->
                        {if $tt_total >= 2}
                            {if $tt_cnt % 2 == 0}
                                </li>
                                </ul>
                            {/if}
                        {/if}
                        {$tt_cnt = $tt_cnt+1}
                        <!-- End TemplateTrip 2 product slide code -->
                            {$i=$i+1}
                        {/foreach}
                </div>
            {/if}
        </div>
        {if $tt_total > 3}
    		<div class="customNavigation">
    			<a class="btn prev ttblog_prev">Prev</a>
    			<a class="btn next ttblog_next">Next</a>
    		</div>
    		{/if}
</div>
</div>
