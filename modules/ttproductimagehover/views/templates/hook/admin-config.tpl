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

{if $setting_updated}
    <div class="alert alert-success">{l s='Setting updated' mod='ttproductimagehover'}</div>
{/if}
<form class="defaultForm form-horizontal" enctype="multipart/form-data" method="post" action="{$postUrl}">
    <div class="panel">
        <div class="panel-heading"><i class="icon-cogs"></i> {l s='Setting' mod='ttproductimagehover'}</div>
        
        <div class="form-wrapper">
            <div class="form-group">
                <label class="control-label col-lg-3" for="transition-effect">{l s='Transition effect' mod='ttproductimagehover'}</label>
                <div class="col-lg-9">
                    <select id="transition-effect" class="fixed-width-xl" name="TT_PI_TRANSITION_EFFECT">
                        {foreach from=$effects item='effect'}
                            <option {if $effect.id == $TT_PI_TRANSITION_EFFECT}selected="selected"{/if} value="{$effect.id}">{$effect.name}</option>
                        {/foreach}
                    </select>
                </div>
            </div>
        </div>
        <div class="panel-footer">
            <button class="btn btn-default pull-right" name="submitUpdate" id="module_form_submit_btn" value="1" type="submit">
    		  <i class="process-icon-save"></i> {l s='Save' mod='ttproductimagehover'}
    	    </button>																								
        </div>
    </div>
</form>