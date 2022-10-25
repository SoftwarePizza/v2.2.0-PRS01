<?php
/**
* 2022 Anvanto
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
*  @author Anvanto (anvantoco@gmail.com)
*  @copyright  2022 anvanto.com

*  @license    http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
 */

class TtstickyaddtocartajaxModuleFrontController extends ModuleFrontController
{
    public function initContent()
    {
        $result = array();
        if (Tools::isSubmit('action')) {
            $actionName = Tools::getValue('action', '') . 'Action';
            if (method_exists($this, $actionName)) {
                $result = $this->$actionName();
            }
        }

        die(Tools::jsonEncode($result));
    }
    public function getProductAttributesAction()
    {
        if (Tools::getValue('token') != Tools::getToken(false)) {
            Tools::redirect('index.php?controller=404');
        }
        $productId = (int) Tools::getValue('id_product');
        $this->product = new Product($productId);
        $product = $this->module->productPrepare($this->product);
        $product_full = Product::getProductProperties($this->context->language->id, $product);
        $attributesGroups = $this->module->assignAttributesGroups($this->product, $product_full);
        // Prices
        $prices = $this->module->getPrices($this->product, $product);
        // Images
        if ($attributesGroups['combinations'][$product['id_product_attribute']]['id_image'] == '-1') {
            $cover_id = $this->product->getCover($productId);
            if (isset($cover_id['id_image'])) {
                $cover_id = (int)$cover_id['id_image'];
            }
        } else {
             $cover_id = $attributesGroups['combinations'][$product['id_product_attribute']]['id_image'];
        }
        $productImages = array();
        $coverImage = array();
        if ($attributesGroups['combination_images']) {
            foreach ($attributesGroups['combination_images'] as $images) {
                foreach ($images as $image) {
                    if ($image['id_product_attribute'] == $product['id_product_attribute']) {
                        $productImages['home'][$image['id_image']] = Context::getContext()->link->getImageLink($product['link_rewrite'], $image['id_image'], ImageType::getFormattedName('home'));
                    }
                    if ($image['id_image'] == $cover_id) {
                        $coverImage['home'][$image['id_image']] = Context::getContext()->link->getImageLink($product['link_rewrite'], $image['id_image'], ImageType::getFormattedName('home'));
                    }
                }
            }
        }
        if (count($productImages)<1) {
            $productImages = $coverImage;
        }
        $variants = '';
        if ($this->module->getParam('type_view') != 'select') {
            $this->context->smarty->assign('config', $this->module->getConfig());
            if (isset($attributesGroups['groups'])) {
                $this->context->smarty->assign('groups', $attributesGroups['groups']);
            }
            $variants = $this->module->display($this->module->name, 'product-variants.tpl');
        }
        $orderOutOfStock = (bool)Configuration::get('PS_STOCK_MANAGEMENT') && !Product::isAvailableWhenOutOfStock($product['out_of_stock']);
        $return = array(
            'cover_id' => $cover_id,
            'prices' => $prices,
            'id_product_attribute' => $product['id_product_attribute'], // it needs for some functions
            'order_out_of_stock' => $orderOutOfStock,
            'quantity' => $product['quantity'],
            'quantity_wanted' => $product['quantity_wanted'],
            'minimal_quantity' => $product['minimal_quantity'],
            'availableForOrder' => intval($product['availableForOrder']),
            'token' => Tools::getToken(false),
        );
        if ($variants != '') {
            $return['variants'] = $variants;
        }
        if (count($productImages)>0) {
            $return['images'] = $productImages;
        }
        die(Tools::jsonEncode($return));
    }
}