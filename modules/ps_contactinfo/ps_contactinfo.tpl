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

<div class="block-contact contact-rich col-md-3 links">
<h3 class="hidden-sm-down">{l s='Store information' d='Shop.Theme.Global'}</h3>
	<div  class="title clearfix hidden-md-up" data-toggle="collapse" data-target="#contact-footer">
  	<span class="h3 block-contact-title">{l s='Store information' d='Shop.Theme.Global'}</span>
	 <span class="float-xs-right">
          <span class="navbar-toggler collapse-icons">
            <i class="material-icons add">&#xE145;</i>
            <i class="material-icons remove">&#xE15B;</i>
          </span>
	</span>
  </div>
    <ul id="contact-footer" class="collapse">
	  <li class="block">
		<div class="icon"><i class="material-icons">&#xE55F;</i></div>
		  <div class="data">{$contact_infos.address.formatted nofilter}</div>
		  </li>
	{if $contact_infos.phone}
	  <li class="block">
		<div class="data">
	  	       <a href="tel:{$contact_infos.phone}"> <div class="icon"><i class="material-icons">&#xE0CD;</i></div>
        {* [1][/1] is for a HTML tag. *}
        <span class="title">{l s='Call us:</span> [1]%phone%[/1]'
          sprintf=[
          '[1]' => '<span>',
          '[/1]' => '</span>',
          '%phone%' => $contact_infos.phone
          ]
          d='Shop.Theme.Global'
        }</a>
	  </div>
	  </li>
	  {/if}
	  {if $contact_infos.fax}
	  	  <li class="block">
		<div class="icon"><i class="material-icons">&#xE0DF;</i></div>
				<div class="data">
        {* [1][/1] is for a HTML tag. *}
        <span class="title">{l
          s='Fax:</span> [1]%fax%[/1]'
          sprintf=[
            '[1]' => '<span>',
            '[/1]' => '</span>',
            '%fax%' => $contact_infos.fax
          ]
          d='Shop.Theme.Global'
        }
	  </div>
	  </li>
	  {/if}
	  {if $contact_infos.email}
	  <li class="block">
		<div class="data">
	  		<div class="icon"><i class="material-icons">&#xE158;</i></div>
        {* [1][/1] is for a HTML tag. *}
       <span class="title">{l s='Email us:' d='Shop.Theme.Global'}</span>
        {mailto address=$contact_infos.email encode="javascript"}
	  </div>
	  </li>
	  {/if}
	  </ul>
</div>
