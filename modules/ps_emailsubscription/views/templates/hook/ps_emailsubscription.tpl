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
<<<<<<< HEAD
<div id="newslatter" class="col-sm-12">
<div class="block_newsletter">
  <div class="row">
	<div class="tt-content col-sm-12">
	<div class="news-img col-sm-12">
			<img alt="news-img" src="{$urls.img_url}/news-amegra.jpg" width="200" height="40" />
	</div>
    <h4 class="tt-title">{l s='Sign Up For Newsletter' d='Shop.Theme.Global'}</h4>
	<h4><span class="tt-subtitle">{l s='To get Latests Updates and News' d='Shop.Theme.Global'}</span></h4>
	</div>
    <div class="block_content col-sm-12">
      <form action="{$urls.pages.index}#footer" method="post">
        <div class="row">
		       <div class="ttinput_newsletter">
			    <div class="input-wrapper">
              <input
				  name="email"
				  type="email"
				  value="{$value}"
				  placeholder="{l s='Your email address' d='Shop.Forms.Labels'}"
				>
			</div>
=======
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
>>>>>>> master
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
<<<<<<< HEAD
			 
            <input type="hidden" name="action" value="0">
            <div class="clearfix"></div>
          </div>
        </div>
      </form>
    </div>
	<div class="col-xs-12">
=======
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
>>>>>>> master
              {if $conditions}
                <p class="news_desc">{$conditions}</p>
              {/if}
              {if $msg}
                <p class="alert {if $nw_error}alert-danger{else}alert-success{/if}">
                  {$msg}
				  <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">�</span> </button>
                </p>
              {/if}
			  {hook h='displayNewsletterRegistration'}
			  {if isset($id_module)}
				  {hook h='displayGDPRConsent' id_module=$id_module}
			  {/if}
          </div>
<<<<<<< HEAD
  </div>
</div>
=======
      </form>
	</div>
	</div>
>>>>>>> master
</div>