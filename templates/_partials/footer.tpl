{**
 * 2007-2018 PrestaShop
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
 * @copyright 2007-2018 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 *}
 <div class="footer-top">
<div class="container">
  <div class="row">
    {block name='hook_footer_before'}
      {hook h='displayFooterBefore'}
    {/block}
  </div>
  </div>
</div>
<div class="footer-container">
  <div class="container">
    <div class="row">
      {block name='hook_footer'}
        {hook h='displayFooter'}
      {/block}
    </div>
    <div class="row">
      {block name='hook_footer_after'}
        {hook h='displayFooterAfter'}
      {/block}
    </div>
  </div>
</div>
<div class="bottom-footer">
	<div class="container">    
	 <div class="row">
      <div class="col-md-12">
        <p class="text-sm-center">
          {block name='copyright_link'}
            <a class="_blank" href="https://www.prestashop.com" rel="nofollow" target="_blank">
              {l s='%copyright% %year% - Ecommerce software by %prestashop%' sprintf=['%prestashop%' => 'PrestaShop™', '%year%' => 'Y'|date, '%copyright%' => '©'] d='Shop.Theme.Global'}
            </a>
          {/block}
        </p>
      </div>
	  </div>
	  </div>
</div>
<div class="backtotop-img">
	<a href="#" class="goToTop show" title="Back to top"> <i class="material-icons arrow-up"></i></a>
	</div>
<a class="goToTop ttbox-img show" href="#"> </a>

<span itemscope itemtype="https://schema.org/Store">
    <meta itemprop="name" content="Amegra Sp. z o.o. Sp. k.">
    <meta itemprop="image" content="https://amegra.pl/img/amegra-logo-1601359789.jpg">
    <meta itemprop="logo" content="https://amegra.pl/img/amegra-logo-1601359789.jpg">
    <link itemprop="url" href="https://amegra.pl/">
    <span>
    <span itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
      <meta itemprop="streetAddress" content="Kaczorowa 26"/>
      <meta itemprop="addressLocality" content="Warszawa"/>
      <meta itemprop="postalCode" content="03-046"/>		
    </span>
    <span itemprop="location" itemscope itemtype="https://schema.org/Place">
      <link itemprop="hasMap" href="https://g.page/amegra?share">
      <span itemprop="geo" itemscope itemtype="https://schema.org/GeoCoordinates">
        <meta itemprop="latitude" content="52.32241629999998" />
        <meta itemprop="longitude" content="21.014549500000005" />
      </span>
    </span>
  </span>
    <meta itemprop="sameAs" content="https://www.facebook.com/galplast"/>
    <meta itemprop="sameAs" content="https://www.instagram.com/amegra_dodziergania/?hl=pl"/>
    <meta itemprop="openingHours" content="Pn-Pt 08:00-16:00"/>
    <meta itemprop="telephone" content="+48885885435"/>
</span>