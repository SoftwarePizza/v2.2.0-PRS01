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
<div id="_desktop_user_info">
<<<<<<< HEAD
{if !$logged}
  <a href="{$urls.pages.register}" title="{l s='Register in our store'  d='Shop.Theme.Customeraccount'}" rel="nofollow" class="btn btn-unstyle customRegisterLink">
    <i class="material-icons user">&#xeb3f;</i> {l s='Register' d='Shop.Theme.Actions'}
  </a>
{/if}
<div class="ttuserheading"></div>	
  <ul class="user-info">
=======
<div class="ttuserheading">
</div>	
<ul class="user-info">
>>>>>>> master
    {if $logged}
      <li><a
        class="account"
        href="{$urls.pages.my_account}"
        title="{l s='View my customer account' d='Shop.Theme.Customeraccount'}"
        rel="nofollow"
      >
	<i class="material-icons-outlined logged user">login</i>
        {$customerName}
      </a></li>
      <li><a
        class="logout hidden-sm-down"
        href="{$urls.actions.logout}"
        rel="nofollow"
      >
	<i class="material-icons-outlined user">login</i>
        {l s='Sign out' d='Shop.Theme.Actions'}
      </a></li>
    {else}
      <li><a
        href="{$urls.pages.my_account}"
        title="{l s='Log in to your customer account' d='Shop.Theme.Customeraccount'}"
        rel="nofollow"
      >
	<i class="material-icons-outlined user">login</i>
        {l s='Sign in' d='Shop.Theme.Actions'}
      </a></li>
      <li><a
        href="{$urls.pages.register}"
        title="{l s='Register in our store'  d='Shop.Theme.Customeraccount'}"
        rel="nofollow"
        >
        <i class="material-icons user">&#xeb3f;</i>
        <span class="hidden-sm-down">{l s='Register' d='Shop.Theme.Actions'}</span>
      </a></li>
    {/if}
	{hook h='displayTtCompareHeader'}
      {hook h='displayTtWishlistHeader'}
  </ul>

</div>
