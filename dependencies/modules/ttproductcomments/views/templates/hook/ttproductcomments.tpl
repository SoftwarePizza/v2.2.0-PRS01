{*
*  @author    Templatetrip
*  @copyright 2015-2022 Templatetrip. All Rights Reserved.
*  @license   http://www.gnu.org/licenses/gpl-2.0.html GNU/GPL
*}
<div id="product-comment">
    <div id="product_comments_block_tab">
	<h3 class="tt-title">{l s='CUSTOMER REVIEWS' mod='ttproductcomments'}</h3>
        {if $comments}
		<div class="comments">
            {if (!$too_early AND ($logged OR $allow_guests))}
                <p class="align_center">
                    <a id="new_comment_tab_btn" class="btn btn-primary open-comment-form" href="javascript:void(0);">
                        <span>{l s='Write your review!' mod='ttproductcomments'}</span>
                    </a>
                </p>
            {/if}
            {foreach from=$comments item=comment}
                {if $comment.content}
                    <div class="comment" itemscope itemtype="https://schema.org/Review">
                            <div class="comment_author">
                                <div class="star_content clearfix" itemscope itemtype="https://schema.org/Rating">
                                    {section name="i" start=0 loop=5 step=1}
                                        {if $comment.grade le $smarty.section.i.index}
                                            <div class="star"></div>
                                        {else}
                                            <div class="star star_on"></div>
                                        {/if}
                                    {/section}
                                    <meta content = "0" />
                                    <meta content = "{$comment.grade|escape:'html':'UTF-8'}" />
                                    <meta content = "5" />
                                </div>
                                <div class="comment_author_infos">
                                    <strong class="author">{$comment.customer_name|escape:'html':'UTF-8'}</strong>
                                    <meta content="{$comment.date_add|escape:'html':'UTF-8'|substr:0:10}" />
                                    <em>{dateFormat date=$comment.date_add|escape:'html':'UTF-8' full=0}</em>
                                </div>
                            </div> <!-- .comment_author -->
                            <div class="comment_details">
                                <p class="title_block">
                                    <strong>{$comment.title}</strong>
                                </p>
                                <p  class="content">{$comment.content}</p>
                                <ul>
                                    {if $comment.total_advice > 0}
                                        <li class="comment_helpful">
                                            {l s='%1$d out of %2$d people found this review useful.' sprintf=[$comment.total_useful,$comment.total_advice] mod='ttproductcomments'}
                                        </li>
                                    {/if}
                                    {if $logged}
                                        {if !$comment.customer_advice && $commentUsefull}
                                            <li>
                                                <div class="comment_helpful">
                                                    {l s='Was this comment useful to you?' mod='ttproductcomments'}
                                                    <button class="usefulness_btn btn btn-default usefull" data-is-usefull="1" data-id-product-comment="{$comment.id_product_comment}">
                                                        <span>{l s='Yes' mod='ttproductcomments'}</span>
                                                    </button>
                                                    <button class="usefulness_btn btn btn-default notusefull" data-is-usefull="0" data-id-product-comment="{$comment.id_product_comment}">
                                                        <span>{l s='No' mod='ttproductcomments'}</span>
                                                    </button>
                                                </div>
                                            </li>
                                        {/if}
                                        {if !$comment.customer_report && $commentReport}
                                            <li>
                                                <span class="report_btn" data-id-product-comment="{$comment.id_product_comment}">
                                                    {l s='Report abuse' mod='ttproductcomments'}
                                                </span>
                                            </li>
                                        {/if}
                                    {/if}
                                </ul>
                            </div><!-- .comment_details -->
                    </div> <!-- .comment -->
                {/if}
            {/foreach}
			</div>
        {else}
            {if (!$too_early AND ($logged OR $allow_guests))}
                <p class="align_center">
                    <a id="new_comment_tab_btn" class="btn btn-primary open-comment-form" href="javascript:void(0);">
                        <span>{l s='Be the first to write your review!' mod='ttproductcomments'}</span>
                    </a>
                </p>
            {else}
                <p class="align_center">{l s='No customer reviews for the moment.' mod='ttproductcomments'}</p>
            {/if}
        {/if}
    </div> <!-- #product_comments_block_tab -->
</div>
<script>
$(document).ready(function() {
var max_elem = 3;
    var comment = $('#product_comments_block_tab .comment');
	var more_comment = "Load More";
	var less_comment = "Load Less";
    if (comment.length > max_elem) {
        $('#product_comments_block_tab .comments').append('<div class="load-more"><span class="btn-primary">'+more_comment+'</span></div>');
    }

    $('#product_comments_block_tab .comments .load-more').click(function() {
        if ($(this).hasClass('active')) {
            comment.each(function(j) {
                if (j >= max_elem) {
                    $(this).slideUp(200);
                }
            });
            $(this).removeClass('active');
            //$(this).children('div').css('display', 'block');
            $('.load-more').html('<span class="btn-primary">'+more_comment+'</span>');
        } else {
            comment.each(function(j) {
                if (j >= max_elem) {
                    $(this).slideDown(200);
                }
            });
            $(this).addClass('active');
            $('.load-more').html('<span class="btn-primary">'+less_comment+'</span>');

        }
    });

    comment.each(function(j) {
        if (j >= max_elem) {
            $(this).css('display', 'none');
        }
    });
});
</script>