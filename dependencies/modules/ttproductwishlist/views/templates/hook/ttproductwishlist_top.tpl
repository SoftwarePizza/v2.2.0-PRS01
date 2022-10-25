{*
*  @author    TemplateTrip
*  @copyright 2015-2021 TemplateTrip. All Rights Reserved.
*  @license   http://www.gnu.org/licenses/gpl-2.0.html GNU/GPL
*}
<li class="top-wishlist" id="top-wishlist">
    <a class="wishtlist_top" href="{$link->getModuleLink('ttproductwishlist', 'mywishlist', array(), true)|escape:'html':'UTF-8'}" title="{l s='Wishlists' mod='ttproductwishlist'}" rel="nofollow">
        <i class="material-icons">favorite_border</i><span class="wishlist-name">{l s='Wishlist' mod='ttproductwishlist'}</span><span class="cart-wishlist-number"> ({$count_product})</span>
    </a>
</li>