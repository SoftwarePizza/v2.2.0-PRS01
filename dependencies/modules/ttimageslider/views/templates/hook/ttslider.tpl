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
{if $page.page_name == 'index'}
{if $tthomeslider.slides}
  <div id="carousel" data-ride="carousel" class="carousel slide homeslider" data-interval="{$tthomeslider.speed}" data-wrap="{(string)$tthomeslider.wrap}" data-pause="{$tthomeslider.pause}">
  <div class="ttloading-bg"></div>
    <ul class="carousel-inner" role="listbox">
      {foreach from=$tthomeslider.slides item=slide name='homeslider'}
        <li class="carousel-item {if $smarty.foreach.homeslider.first}active{/if}" role="option" aria-hidden="{if $smarty.foreach.homeslider.first}false{else}true{/if}">
            <a href="{$slide.url}">
              <img src="{$slide.image_url}" alt="{$slide.legend|escape}" width="1903" height="830">
          </a>
              {if $slide.title || $slide.description}
                <div class="caption col-sm-4">
                   <div class="caption-description">{$slide.description nofilter}</div>
                </div>
              {/if}
        </li>
      {/foreach}
    </ul>
     <div class="direction">
      <a class="left" href="#carousel" role="button" data-slide="prev">
          <i class="material-icons">chevron_left</i>
      </a>
      <a class="right" href="#carousel" role="button" data-slide="next">
          <i class="material-icons">chevron_right</i>
      </a>
    </div>
</div>
{/if}
{/if}