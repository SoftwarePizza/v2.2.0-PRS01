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
<div id="newslatter">
<div class="container">
	<div class="tt-content col-sm-6">
		<i class="material-icons-outlined mail">mail</i>
		<div class="tt-description">
    <h2 class="h2 tt-title">{l s='SUBSCRIBE TO NEWSLETTER' d='Shop.Theme.Global'}</h2>
	</div>
	</div>
    <div class="block_content col-sm-6">
      <form action="{$urls.pages.index}#footer" method="post">
            <input
              class="btn btn-primary float-xs-right hidden-xs-down"
              name="submitNewsletter"
              type="submit"
              value="{l s='Subscribe' d='Shop.Theme.Actions'}"
            >
            <input
              class="btn btn-primary float-xs-right hidden-sm-up"
              name="submitNewsletter"
              type="submit"
              value="{l s='OK' d='Shop.Theme.Actions'}"
            >
			 <div class="input-wrapper">
			<input
				 name="email"
				 type="email"
				 value="{$value}"
				 placeholder="{l s='Your email address' d='Shop.Forms.Labels'}"
				 >
	 			</div>
            <input type="hidden" name="action" value="0">
            <div class="clearfix"></div>
          <div class="col-xs-12 msg">
              {if $conditions}
                <p class="news_desc">{$conditions}</p>
              {/if}
              {if $msg}
                <p class="alert {if $nw_error}alert-danger{else}alert-success{/if}">
                  {$msg}
				  <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">???</span> </button>
                </p>
              {/if}
			  {hook h='displayNewsletterRegistration'}
			  {if isset($id_module)}
				  {hook h='displayGDPRConsent' id_module=$id_module}
			  {/if}
          </div>
      </form>
	</div>
	</div>
</div>