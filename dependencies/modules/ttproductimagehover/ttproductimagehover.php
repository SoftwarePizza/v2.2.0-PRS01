<?php
/**
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
*  @author    PrestaShop SA <contact@prestashop.com>
*  @copyright 2007-2022 PrestaShop SA
*  @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*/

if (!defined('_PS_VERSION_')) {
    exit;
}

use PrestaShop\PrestaShop\Adapter\Image\ImageRetriever;

class TtProductImageHover extends Module
{
    public function __construct()
    {
        $this->name = 'ttproductimagehover';
        $this->tab = 'front_office_features';
        $this->version = '1.0.1';
        $this->author = 'TemplateTrip';
        $this->need_instance = 0;
        $this->bootstrap = true;
        parent::__construct();
        $this->displayName = $this->l('TT - Product image hover');
        $this->description = $this->l('Display second product image on product hover');
        $this->ps_versions_compliancy = array('min' => '1.7.0.0', 'max' => _PS_VERSION_);
    }
    public function install()
    {
         return parent::install() && $this->registerHook('displayTtproductImageHover') && $this->registerHook('displayHeader');;
    }
	 public function hookDisplayHeader()
    {
        $this->context->controller->addCSS(($this->_path).'views/css/'.$this->name.'.css', 'all');
        $this->context->controller->addJS($this->_path .'views/js/front.js');
    }
	public function getContent()
    {
        if(Tools::isSubmit('submitUpdate'))
        {
            Configuration::updateValue('TT_PI_TRANSITION_EFFECT', Tools::strtolower(trim(Tools::getValue('TT_PI_TRANSITION_EFFECT'))));
        }
        if(version_compare(_PS_VERSION_, '1.7.0', '>='))
            $postUrl = $this->context->link->getAdminLink('AdminModules', true).'&configure='.$this->name.'&tab_module='.$this->tab.'&module_name='.$this->name;
        else
            $postUrl = AdminController::$currentIndex.'&configure='.$this->name.'&token='.Tools::getAdminTokenLite('AdminModules');
        
        $this->smarty->assign(            
            array(
                'postUrl' => $postUrl,
                'effects' => array(
                    array(
                        'id' => 'zoom',
                        'name' => $this->l('Zoom')
                    ),
                    array(
                        'id' => 'fade',
                        'name' => $this->l('Fade')
                    ),
                    array(
                        'id' => 'vertical_scrolling_bottom_to_top',
                        'name' => $this->l('Vertical Scrolling  Bottom To Top')
                    ),
                    array(
                        'id' => 'vertical_scrolling_top_to_bottom',
                        'name' => $this->l('Vertical Scrolling Top To Bottom')
                    ),                    
                    array(
                        'id' => 'horizontal_scrolling_left_to_right',
                        'name' => $this->l('Horizontal Scrolling Left To Right')
                    ),
                    array(
                        'id' => 'horizontal_scrolling_right_to_left',
                        'name' => $this->l('Horizontal Scrolling Right To Left')
                    )
                ),
                'TT_PI_TRANSITION_EFFECT' => Configuration::get('TT_PI_TRANSITION_EFFECT'),
                'setting_updated' => Tools::isSubmit('submitUpdate') ? true : false,
            )
        );        
        return $this->display(__FILE__, 'admin-config.tpl');
    }
    public function hookDisplayTtproductImageHover($params)
    {
		if (!$this->isCached('image.tpl')) {
            $id_lang = $this->context->language->id;
            $id_shop = $this->context->shop->id;
            $obj = new Product((int) ($params['id_product']), false, $id_lang, $id_shop);
            $images = $obj->getImages($this->context->language->id);
            $total_image = count($images);
            $_images = array();
            if (!empty($images)) {
                foreach ($images as $image) {
                    if (!$image['cover']) {
                        $_images[] = $obj->id . '-' . $image['id_image'];
                    }
                }
            }
            if ($total_image > 1) {
                $this->smarty->assign(array(
                'home_image' => $this->context->link->getImageLink($obj->link_rewrite, $_images[0], $params['home']),
                'large_image' => $this->context->link->getImageLink($obj->link_rewrite, $_images[0], $params['large'])
                 ));
            }
        }
        $this->smarty->assign(array('TT_PI_TRANSITION_EFFECT' => Configuration::get('TT_PI_TRANSITION_EFFECT')));
        if ($total_image > 1) {
            return $this->display(__FILE__, 'image.tpl');
        }
    }
}
