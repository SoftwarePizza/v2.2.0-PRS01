{*
*  @author    TemplateTrip
*  @copyright 2015-2021 TemplateTrip. All Rights Reserved.
*  @license   http://www.gnu.org/licenses/gpl-2.0.html GNU/GPL
*}
	<a class="add_to_compare btn btn-primary{if $added} checked{/if}" href="#" data-id-product="{$id_product}" data-dismiss="modal" title="{if $added}{l s='Remove from Compare' mod='ttcompare'}{else}{l s='Add to Compare' mod='ttcompare'}{/if}">
		<i class="material-icons compare_icon">equalizer</i>
		<span class="loading"><i class="material-icons">cached</i></span>
		<span>{l s='Add to Compare' mod='ttcompare'}</span>
	</a>