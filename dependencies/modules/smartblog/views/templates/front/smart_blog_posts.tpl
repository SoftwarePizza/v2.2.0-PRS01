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
 
<h3 class="title"><span>{$blg_title}</span></h3>
<div id="smartblogcat" class="block {$blg_class}">
    {foreach from=$postcategory item=post}
        <article class=" single_blog_post cat_post p_bottom_20 m_bottom_30 clearfix col-sm-{$per_column}" id="smartblogpost-{$post.id_post}">
            {assign var="options" value=null}
            {$options.id_post = $post.id_post}
            {$options.slug = $post.link_rewrite}
            {assign var="catlink" value=null}
            {$catlink.id_category = $post.id_category}
            {$catlink.slug = $post.cat_link_rewrite}
            <figure class="post_thumbnail m_bottom_20">
                <a title="{$post.meta_title}" href="{smartblog::GetSmartBlogLink('smartblog_post',$options)}" class="imageFeaturedLink">
                    <img  alt="{$post.meta_title}" src="{$link->getMediaLink($smart_module_dir)}/smartblog/views/img/{$post.post_img}-{$image_type}.jpg" class="img-responsive" loading="lazy">
                </a>
                <div class="blog_mask">
                    <div class="mask_content">
                        <a title="{$post.meta_title}" href="{$link->getMediaLink($smart_module_dir)}/smartblog/views/img/{$post.post_img}.jpg" class="post_lightbox"><i class="icon-resize-full"></i></a>
                        <a title="{$post.meta_title}" href="{smartblog::GetSmartBlogLink('smartblog_post',$options)}" class="imageFeaturedLink"><i class="icon-link"></i></a>
                    </div>
                </div>
            </figure>
            <h3 class="post_title m_bottom_0"><a title="{$post.meta_title}" href='{smartblog::GetSmartBlogLink('smartblog_post',$options)}'>{$post.meta_title}</a></h3>
            <div class="post_meta m_bottom_30">
                <span class="post_meta_date"><label>{l s='Posted on' mod='smartblog'}</label> <a title="{$post.meta_title}" href="{smartblog::GetSmartBlogLink('smartblog_post',$options)}">{$post.created|date_format:"%B %e, %Y"} <label>{l s='at' mod='smartblog'}</label> {$post.created|date_format:"%r"}</a></span>
                <span><label>{l s='by ' mod='smartblog'}</label> {$post.firstname}  {$post.lastname}</span>
                <span><label>{l s='/' mod='smartblog'}</label> <a href="{smartblog::GetSmartBlogLink('smartblog_category',$catlink)}">{$post.cat_name}</a></span>
                <span><label>{l s='/' mod='smartblog'}</label>{l s=' views' mod='smartblog'} ({$post.viewed})</span>
            </div>       
            <div class="blog_post_details m_bottom_20">
                {$post.short_description}
            </div>
            <div class="blog_post_read_more f_right">
                {assign var="options" value=null}
                {$options.id_post = $post.id_post}  
                {$options.slug = $post.link_rewrite} 
                <a class="button" href="{smartblog::GetSmartBlogLink('smartblog_post',$options)}" title="{$post.meta_title}">{l s='Read more' mod='smartblog'}</a>
            </div>
        </article> 
    {/foreach}
</div>
