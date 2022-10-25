{*
* 2007-2022 PrestaShop
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
* @author    PrestaShop SA <contact@prestashop.com>
* @copyright 2007-2022 PrestaShop SA
* @license   http://addons.prestashop.com/en/content/12-terms-and-conditions-of-use
* International Registered Trademark & Property of PrestaShop SA
*}
<div class="panel right-panel">
    <form id="buylaterConf" method="post" action="#" class="form-horizontal">
        <div class="buylaterContent">
            <h3>{l s='Create a cookie banner' mod='ttcookiebanner'}</h3>

            {* START COOKIE BANNER POSITION *}
            <div class="form-group">
                <div class="col-xs-12 col-sm-12 col-md-5 col-lg-3">
                    <div class="text-right">
                        <label class="boldtext control-label">{l s='Select cookie banner positions' mod='ttcookiebanner'}</label>
                    </div>
                </div>
                <div class="col-lg-9">
                    <select id="cookie-style" class="fixed-width-xl" name="TT_COOKIE_STYLE">
                        {foreach from=$cookies item='cookie'}
                            <option {if $cookie.id == $TT_COOKIE_STYLE}selected="selected"{/if} value="{$cookie.id}">{$cookie.name}</option>
                        {/foreach}
                    </select>
                </div>
            </div>
            {* END COOKIE BANNER POSITION *}

            {* START COOKIE BANNER TEXT *}
            {foreach from=$languages item=language}
                {if $languages|count > 1}
                    <div class="translatable-field lang-{$language.id_lang|escape:'htmlall':'UTF-8'}" {if $language.id_lang != $defaultFormLanguage}style="display:none"{/if}>
                {/if}
                <div class="form-group">
                    <div class="col-xs-12 col-sm-12 col-md-5 col-lg-3">
                        <div class="text-right">
                            <label for="buylater_title_text" class="control-label">
                                    {l s='Add your text' mod='ttcookiebanner'}
                            </label>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-7 col-lg-4">
                        <textarea class="TT-TEXT" required="required" name="TT-TEXT-{$language.id_lang|escape:'htmlall':'UTF-8'}" text="{$TT_TEXT[$language.id_lang]|escape:'htmlall':'UTF-8'}" rows="8" cols="80">{$TT_TEXT[$language.id_lang]|escape:'htmlall':'UTF-8'}</textarea>
                        <div class="help-block">
                            {l s='Maximum character recommendes in total : 300 for the best quality on desktop and smartphones' mod='ttcookiebanner'}
                        </div>
                    </div>
                    {if $languages|count > 1}
                        <div class="col-xs-12 col-sm-12 col-md-7 col-lg-3">
                            <button type="button" class="btn btn-default dropdown-toggle" tabindex="-1" data-toggle="dropdown">
                                {$language.iso_code|escape:'htmlall':'UTF-8'}
                                <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu">
                                {foreach from=$languages item=lang}
                                <li><a class="currentLang" data-id="{$lang.id_lang|escape:'htmlall':'UTF-8'}" href="javascript:hideOtherLanguage({$lang.id_lang|escape:'htmlall':'UTF-8'});" tabindex="-1">{$lang.name|escape:'htmlall':'UTF-8'}</a></li>
                                {/foreach}
                            </ul>
                        </div>
                    {/if}
                </div>
                {if $languages|count > 1}
                    </div>
                {/if}
            {/foreach}
            {* END COOKIE BANNER TEXT *}

            {* START COOKIE BANNER MORE INFORMATION LINK PAGE *}
            {foreach from=$languages item=language}
                {if $languages|count > 1}
                    <div class="translatable-field lang-{$language.id_lang|escape:'htmlall':'UTF-8'}" {if $language.id_lang != $defaultFormLanguage}style="display:none"{/if}>
                {/if}
                <div class="form-group">
                    <div class="col-xs-12 col-sm-12 col-md-5 col-lg-3">
                        <div class="text-right">
                            <label for="buylater_title_text" class="control-label">
                                    {l s='More information link text' mod='ttcookiebanner'}
                            </label>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-7 col-lg-3">
                        <input class="TT-LINK-TEXT" required="required" type="text" value="{$TT_LINK_TEXT[$language.id_lang]|escape:'htmlall':'UTF-8'}" name="TT-LINK-TEXT-{$language.id_lang|escape:'htmlall':'UTF-8'}" placeholder="{l s='More information here' mod='ttcookiebanner'}">
                    </div>
                    {if $languages|count > 1}
                        <div class="col-xs-12 col-sm-12 col-md-7 col-lg-3">
                            <button type="button" class="btn btn-default dropdown-toggle" tabindex="-1" data-toggle="dropdown">
                                {$language.iso_code|escape:'htmlall':'UTF-8'}
                                <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu">
                                {foreach from=$languages item=lang}
                                <li><a class="currentLang" data-id="{$lang.id_lang|escape:'htmlall':'UTF-8'}" href="javascript:hideOtherLanguage({$lang.id_lang|escape:'htmlall':'UTF-8'});" tabindex="-1">{$lang.name|escape:'htmlall':'UTF-8'}</a></li>
                                {/foreach}
                            </ul>
                        </div>
                    {/if}
                </div>
                {if $languages|count > 1}
                    </div>
                {/if}
            {/foreach}
            {* END COOKIE BANNER MORE INFORMATION LINK PAGE *}

            {* START COOKIE BANNER CMS *}
            <div class="form-group">
                <div class="col-xs-12 col-sm-12 col-md-5 col-lg-3">
                    <div class="text-right">
                        <label class="boldtext control-label">{l s='More information CMS page' mod='ttcookiebanner'}</label>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-7 col-lg-2">
                    <select class="" name="TT-CMS" id="TT-CMS">
                        {foreach from=$cms key='key' item='page'}
                            <option value="{$cms.$key.id_cms|escape:'htmlall':'UTF-8'}" {if $TT_CMS eq $cms.$key.id_cms}selected{/if}>{$cms.$key.meta_title|escape:'htmlall':'UTF-8'}</option>
                        {/foreach}
                    </select>
                </div>
            </div>
            {* END COOKIE BANNER CMS *}

            {* START COOKIE BANNER ACCEPT BUTTON TEXT *}
            {foreach from=$languages item=language}
                {if $languages|count > 1}
                    <div class="translatable-field lang-{$language.id_lang|escape:'htmlall':'UTF-8'}" {if $language.id_lang != $defaultFormLanguage}style="display:none"{/if}>
                {/if}
                <div class="form-group">
                    <div class="col-xs-12 col-sm-12 col-md-5 col-lg-3">
                        <div class="text-right">
                            <label for="buylater_button_title_text" class="control-label">
                                    {l s='Accept button text' mod='ttcookiebanner'}
                            </label>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-7 col-lg-3">
                        <input class="TT-BUTTON-TEXT" required="required" type="text" value="{$TT_BUTTON_TEXT[$language.id_lang]|escape:'htmlall':'UTF-8'}" name="TT-BUTTON-TEXT-{$language.id_lang|escape:'htmlall':'UTF-8'}" placeholder="{l s='I accept' mod='ttcookiebanner'}">
                    </div>
                    {if $languages|count > 1}
                        <div class="col-xs-12 col-sm-12 col-md-7 col-lg-3">
                            <button type="button" class="btn btn-default dropdown-toggle" tabindex="-1" data-toggle="dropdown">
                                {$language.iso_code|escape:'htmlall':'UTF-8'}
                                <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu">
                                {foreach from=$languages item=lang}
                                <li><a class="currentLang" data-id="{$lang.id_lang|escape:'htmlall':'UTF-8'}" href="javascript:hideOtherLanguage({$lang.id_lang|escape:'htmlall':'UTF-8'});" tabindex="-1">{$lang.name|escape:'htmlall':'UTF-8'}</a></li>
                                {/foreach}
                            </ul>
                        </div>
                    {/if}
                </div>
                {if $languages|count > 1}
                    </div>
                {/if}
            {/foreach}
            {* END COOKIE BANNER ACCEPT BUTTON TEXT *}

            {* START COOKIE BANNER LOOP *}
            <div class="form-group">
                <div class="col-xs-12 col-sm-12 col-md-5 col-lg-3">
                    <div class="text-right">
                        <label class="control-label">
                                {l s='Redisplay cookie banner every ' mod='ttcookiebanner'}
                        </label>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-7 col-lg-1">
                    <input class="cookiebanner-font-size" required="required" value="{$TT_FONT_LOOP|escape:'htmlall':'UTF-8'}" type="number" name="TT-FONT-LOOP" min="0" max="13">
                </div>
                <div class="col-xs-12 col-sm-12 col-md-5 col-lg-3">
                    <div class="tt-month-left">
                        <label class="control-label">
                                {l s='months' mod='ttcookiebanner'}
                        </label>
                    </div>
                </div>
            </div>
            {* END COOKIE BANNER LOOP *}
        </div>
        <div class="panel-footer">
            <button type="submit" value="1" id="submitCookieBannerModule" name="submitCookieBannerModule" class="btn btn-default pull-right">
                <i class="process-icon-save"></i> {l s='Save' mod='ttcookiebanner'}
            </button>
        </div>
    </form>
</div>

<div id="cookiebanner-container" class="eupopup-container">
    <div class="eupopup-head"></div>
        <div class="eupopup-body container">
            <div class="eupopup-body-text" style="display: inline;">
            </div>
            <div class="eupopup-body-link" style="display: inline;">
                <a id="learn_more" href="" target="_blank" class="eupopup-learn-more">test</a>
            </div>
            <div class="eupopup-buttons">
                <button type="button" class="eupopup-button eupopup-button_1"></button>
                <div class="clearfix"></div>
            </div>
        </div>
    <a href="#" class="eupopup-closebutton"><i class="fa fa-close"></i></a>
</div>
