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
use PrestaShop\PrestaShop\Core\Module\WidgetInterface;
use PrestaShop\PrestaShop\Adapter\Category\CategoryProductSearchProvider;
use PrestaShop\PrestaShop\Adapter\Image\ImageRetriever;
use PrestaShop\PrestaShop\Adapter\Product\PriceFormatter;
use PrestaShop\PrestaShop\Core\Product\ProductListingPresenter;
use PrestaShop\PrestaShop\Adapter\Product\ProductColorsRetriever;
use PrestaShop\PrestaShop\Core\Product\Search\ProductSearchContext;
use PrestaShop\PrestaShop\Core\Product\Search\ProductSearchQuery;
use PrestaShop\PrestaShop\Core\Product\Search\SortOrder;
use PrestaShop\PrestaShop\Adapter\BestSales\BestSalesProductSearchProvider;

class TtProductpopup extends Module
{
    protected $config_form = false;
    private $html = '';
    private $type_product = array('Bestsellers Products', 'Featured Products', 'New Products', 'Special Products');
	private $type_product_position = array('Left', 'Right');
    protected $templateFile;

    public function __construct()
    {
        $this->name = 'ttproductpopup';
        $this->tab = 'front_office_features';
        $this->version = '1.0.1';
        $this->author = 'TemplateTrip';
        $this->need_instance = 1;
        $this->bootstrap = true;
        parent::__construct();
        $this->displayName = $this->l('TT - Recommendation Product Popup');
        $this->description = $this->l('Show Product Popup on Front Side');
        $this->ps_versions_compliancy = array('min' => '1.7', 'max' => _PS_VERSION_);
        $this->templateFile = 'module:ttproductpopup/views/templates/hook/';
    }

    public function install()
    {
        $this->installTab();
        if (!parent::install() || !$this->registerHook('displayHeader') || !$this->registerHook('displayAfterBodyOpeningTag')) {
            return false;
        }
        Configuration::updateGlobalValue('ttshowpopup', 0);
        Configuration::updateGlobalValue('ttnumpopup', 5);
        Configuration::updateGlobalValue('TT_POPUP_STYLE','left');
        return true;
    }
    public function uninstall()
    {
        $this->uninstallTab();
        if (!parent::uninstall() || !Configuration::deleteByName('ttshowpopup') || !Configuration::deleteByName('ttnumpopup') || !Configuration::deleteByName('TT_POPUP_STYLE')) {
            return false;
        }
        return true;
    }
    public function installTab()
    {
        $response = true;
        $parentTabID = Tab::getIdFromClassName('AdminProductPopUp');
        if ($parentTabID) {
            $parentTab = new Tab($parentTabID);
        } else {
            $parentTab = new Tab();
            $parentTab->active = 1;
            $parentTab->name = array();
            $parentTab->class_name = "AdminProductPopUp";
            foreach (Language::getLanguages() as $lang) {
                $parentTab->name[$lang['id_lang']] = "ProductPopUp Extension";
            }
            $parentTab->id_parent = 0;
            $parentTab->module = $this->name;
            $response &= $parentTab->add();
        }
        
        $parentTab_2ID = Tab::getIdFromClassName('AdminProductPopUpModules');
        if ($parentTab_2ID) {
            $parentTab_2 = new Tab($parentTab_2ID);
        } else {
            $parentTab_2 = new Tab();
            $parentTab_2->active = 1;
            $parentTab_2->name = array();
            $parentTab_2->class_name = "AdminProductPopUpModules";
            foreach (Language::getLanguages() as $lang) {
                $parentTab_2->name[$lang['id_lang']] = "ProductPopUp Configure";
            }
            $parentTab_2->id_parent = $parentTab->id;
            $parentTab_2->module = $this->name;
            $response &= $parentTab_2->add();
        }
        // Created tab
        $tab = new Tab();
        $tab->active = 1;
        $tab->class_name = 'Admin'.$this->name;
        $tab->name = array();
        foreach (Language::getLanguages() as $lang) {
            $tab->name[$lang['id_lang']] = "Product Popup";
        }
        $tab->id_parent = $parentTab_2->id;
        $tab->module = $this->name;
        $response &= $tab->add();

        return $response;
    }
    public function uninstallTab()
    {
        $id_tab = Tab::getIdFromClassName('Admin'.$this->name);
        $tab = new Tab($id_tab);
        $tab->delete();
        return true;
    }

    public function getContent()
    {
        $html = '';
        if (Tools::isSubmit('save'.$this->name)) {
            Configuration::updateValue('ttshowpopup', Tools::getvalue('ttshowpopup'));
            Configuration::updateValue('ttnumpopup', Tools::getvalue('ttnumpopup'));
            Configuration::updateValue('TT_POPUP_STYLE', Tools::getvalue('TT_POPUP_STYLE'));
            $html = $this->displayConfirmation($this->l('The settings have been updated successfully.'));
            $helper = $this->settingForm();
            $html .= $helper->generateForm($this->fields_form);
            return $html;
        } else {
            $helper = $this->settingForm();
            $html .= $helper->generateForm($this->fields_form);
            return $html;
        }
		$this->_clearCache($this->templateFile);
    }
    public function getTypeProduct()
    {
        $hooks = array();
        foreach ($this->type_product as $key => $type) {
            $hooks[$key]['key'] = $key;
            $hooks[$key]['name'] = $type;
        }
        return $hooks;
    }
	 public function getTypeProductposition()
    {
        $hooks1 = array();
        foreach ($this->type_product_position as $key => $type) {
            $hooks1[$key]['key'] = $key;
            $hooks1[$key]['name'] = $type;
        }
        return $hooks1;
    }
    public function settingForm()
    {
        $default_lang = (int)Configuration::get('PS_LANG_DEFAULT');
        $type_product = $this->getTypeProduct();
		$type_product_position = $this->getTypeProductposition();
        $this->fields_form[0]['form'] = array(
        'legend' => array(
        'title' => $this->l('Product PopUp Controller'),
        ),
        'input' => array(
			array(
                'type' => 'select',
                'label' => $this->l('Select recommendation product position'),
                'name' => 'TT_POPUP_STYLE',
                'options' => array(
                    'query' => $type_product_position,
                    'id' => 'key',
                    'name' => 'name'
                )
            ),
            array(
                'type' => 'select',
                'label' => $this->l('Choose your products'),
                'name' => 'ttshowpopup',
                'options' => array(
                    'query' => $type_product,
                    'id' => 'key',
                    'name' => 'name'
                )
            ),
            array(
                'type' => 'text',
                'label' => $this->l('Number of products to dispay'),
                'name' => 'ttnumpopup',
                'size' => 15,
                'required' => true
            )
        ),
        'submit' => array(
            'title' => $this->l('Submit'),
            'class' => 'btn btn-default pull-right'
        )
        );

        $helper = new HelperForm();
        $helper->module = $this;
        $helper->name_controller = $this->name;
        $helper->token = Tools::getAdminTokenLite('AdminModules');
        $helper->currentIndex = AdminController::$currentIndex.'&configure='.$this->name;
        foreach (Language::getLanguages(false) as $lang) {
            $helper->languages[] = array(
                'id_lang' => $lang['id_lang'],
                'iso_code' => $lang['iso_code'],
                'name' => $lang['name'],
                'is_default' => ($default_lang == $lang['id_lang'] ? 1 : 0)
            );
        }
        $helper->toolbar_btn = array(
        'save' =>
        array(
            'desc' => $this->l('Save'),
            'href' => AdminController::$currentIndex.'&configure='.$this->name.'&save'.$this->name.'token='.Tools::getAdminTokenLite('AdminModules'),
        )
        );

        $helper->default_form_language = $default_lang;
        $helper->allow_employee_form_lang = $default_lang;
        $helper->title = $this->displayName;
        $helper->show_toolbar = true;
        $helper->toolbar_scroll = true;
        $helper->submit_action = 'save'.$this->name;

        $helper->fields_value['ttshowpopup'] = Configuration::get('ttshowpopup');
        $helper->fields_value['ttnumpopup'] = Configuration::get('ttnumpopup');
		$helper->fields_value['TT_POPUP_STYLE'] = Configuration::get('TT_POPUP_STYLE');
        return $helper;
    }
    public function hookdisplayHeader()
    {
        $this->context->controller->registerJavascript('mod-ttprodpopup', 'modules/'.$this->name.'/views/js/ttproductpopup.js', array('position' => 'bottom', 'priority' => 150));
        $this->context->controller->registerStylesheet('mod-ttprodpopup1', 'modules/'.$this->name.'/views/css/ttproductpopup.css', array('media' => 'all', 'priority' => 150));
    }
    public function prevHook()
    {
        $ttshowpopup = Configuration::get('ttshowpopup');
        $nb = (int)Configuration::get('ttnumpopup');
		$ttpositionpopup = Configuration::get('TT_POPUP_STYLE');
        if ($ttshowpopup == 0) {
            $prod_group = array();
            $prod_group['title'] = $this->l('New Arrival');
            $prod_group['class'] = $this->l('tt-new-prod');
            $prod_group['product_list'] = $this->getNewProducts($nb);
        } elseif ($ttshowpopup == 1) {
            $prod_group = array();
            $prod_group['title'] = $this->l('Featured');
            $prod_group['class'] = $this->l('tt-feature-prod');
            $id_cat = (int)Context::getContext()->shop->getCategory();
            $prod_group['product_list'] = $this->getProductFeature($id_cat, $nb);
        } else if ($ttshowpopup == 2) {
            $prod_group = array();
            $prod_group['title'] = $this->l('Bestsellers');
            $prod_group['class'] = $this->l('tt-bestseller-prod');
            $prod_group['product_list'] = $this->getBestSellers($nb);
        } else if ($ttshowpopup == 3) {
            $prod_group = array();
            $prod_group['title'] = $this->l('Special');
            $prod_group['class'] = $this->l('tt-specail-prod');
            $prod_group['product_list'] = $this->getSpecialProducts($nb);
        }
        return $prod_group;
    }
    public function getProductFeature($id_cat, $nProducts)
    {
        $id_shop = (int)$this->context->shop->id;
        $category = new Category($id_cat);

        $searchProvider = new CategoryProductSearchProvider(
            $this->context->getTranslator(),
            $category
        );

        $context = new ProductSearchContext($this->context);

        $query = new ProductSearchQuery();
        $query->setResultsPerPage($nProducts)->setPage(1);

        if (Configuration::get('HOME_FEATURED_RANDOMIZE')) {
            $query->setSortOrder(SortOrder::random());
        } else {
            $query->setSortOrder(new SortOrder('product', 'position', 'asc'));
        }
            $result = $searchProvider->runQuery(
                $context,
                $query
            );

        $assembler = new ProductAssembler($this->context);

        $presenterFactory = new ProductPresenterFactory($this->context);
        $presentationSettings = $presenterFactory->getPresentationSettings();
        $presenter = new ProductListingPresenter(
            new ImageRetriever(
                $this->context->link
            ),
            $this->context->link,
            new PriceFormatter(),
            new ProductColorsRetriever(),
            $this->context->getTranslator()
        );

        $products_for_template = array();

        foreach ($result->getProducts() as $rawProduct) {
            $tmp_prod = $presenter->present(
                $presentationSettings,
                $assembler->assembleProduct($rawProduct),
                $this->context->language
            );
            
            $tt_stock_available = $this->getStockAvailableByProductId($rawProduct['id_product'], $rawProduct['id_product_attribute'], $id_shop);
            $tmp_prod['stock_quantity'] = $tt_stock_available['quantity'];
            $tmp_prod['reserved_quantity'] = $tt_stock_available['reserved_quantity'];
            if ($tmp_prod['stock_quantity'] > 0) {
                $tmp_prod['percent'] = $tmp_prod['stock_quantity']/($tt_stock_available['reserved_quantity'] + $tmp_prod['stock_quantity']) * 100;
            } else {
                $tmp_prod['percent'] = 0;
            }
                $time_ago = $this->timeago($rawProduct['date_upd']);
                $tmp_prod['time_ago'] = $time_ago;
                $products_for_template[] = $tmp_prod;
        }

        return $products_for_template;
    }
    public function timeago($date)
    {
        $timestamp = strtotime($date);
        $strTime = array("second", "minute", "hour", "day", "month", "year");
        $length = array("60","60","24","30","12","10");
        $currentTime = time();
        if ($currentTime >= $timestamp) {
            $diff = time()- $timestamp;
            for ($i = 0; $diff >= $length[$i] && $i < count($length)-1; $i++) {
                $diff = $diff / $length[$i];
            }
            $diff = round($diff);
            return $diff . " " . $strTime[$i] . "(s) ago ";
        }
    }
    protected function getNewProducts($nb)
    {
        $id_shop = (int)$this->context->shop->id;
        if (Configuration::get('PS_CATALOG_MODE')) {
            return false;
        }
        $newProducts = false;

        if (Configuration::get('PS_NB_DAYS_NEW_PRODUCT')) {
            $newProducts = Product::getNewProducts(
                (int)$this->context->language->id,
                0,
                $nb
            );
        }

        $assembler = new ProductAssembler($this->context);
        $presenterFactory = new ProductPresenterFactory($this->context);
        $presentationSettings = $presenterFactory->getPresentationSettings();
        $presenter = new ProductListingPresenter(
            new ImageRetriever(
                $this->context->link
            ),
            $this->context->link,
            new PriceFormatter(),
            new ProductColorsRetriever(),
            $this->context->getTranslator()
        );

        $products_for_template = array();

        if (is_array($newProducts)) {
            foreach ($newProducts as $rawProduct) {
                $tmp_prod = $presenter->present(
                    $presentationSettings,
                    $assembler->assembleProduct($rawProduct),
                    $this->context->language
                );
                $tt_stock_available = $this->getStockAvailableByProductId($rawProduct['id_product'], $rawProduct['id_product_attribute'], $id_shop);
                $tmp_prod['stock_quantity'] = $tt_stock_available['quantity'];
                $tmp_prod['reserved_quantity'] = $tt_stock_available['reserved_quantity'];
                if ($tmp_prod['stock_quantity'] > 0) {
                    $tmp_prod['percent'] = $tmp_prod['stock_quantity']/($tt_stock_available['reserved_quantity'] + $tmp_prod['stock_quantity']) * 100;
                } else {
                    $tmp_prod['percent'] = 0;
                }
                    $time_ago = $this->timeago($rawProduct['date_upd']);
                    $tmp_prod['time_ago'] = $time_ago;
                    $products_for_template[] = $tmp_prod;
            }
        }
        return $products_for_template;
    }

    private function getSpecialProducts($nb)
    {
        $id_shop = (int)$this->context->shop->id;
        $products = Product::getPricesDrop(
            (int)Context::getContext()->language->id,
            0,
            $nb
        );

        $assembler = new ProductAssembler($this->context);

        $presenterFactory = new ProductPresenterFactory($this->context);
        $presentationSettings = $presenterFactory->getPresentationSettings();
        $presenter = new ProductListingPresenter(
            new ImageRetriever(
                $this->context->link
            ),
            $this->context->link,
            new PriceFormatter(),
            new ProductColorsRetriever(),
            $this->context->getTranslator()
        );

        $products_for_template = array();

        if (is_array($products)) {
            foreach ($products as $rawProduct) {
                $tmp_prod = $presenter->present(
                    $presentationSettings,
                    $assembler->assembleProduct($rawProduct),
                    $this->context->language
                );
                $tt_stock_available = $this->getStockAvailableByProductId($rawProduct['id_product'], $rawProduct['id_product_attribute'], $id_shop);
                $tmp_prod['stock_quantity'] = $tt_stock_available['quantity'];
                $tmp_prod['reserved_quantity'] = $tt_stock_available['reserved_quantity'];
                if ($tmp_prod['stock_quantity'] > 0) {
                    $tmp_prod['percent'] = $tmp_prod['stock_quantity']/($tt_stock_available['reserved_quantity'] + $tmp_prod['stock_quantity']) * 100;
                } else {
                    $tmp_prod['percent'] = 0;
                }
                    $time_ago = $this->timeago($rawProduct['date_upd']);
                    $tmp_prod['time_ago'] = $time_ago;
                    $products_for_template[] = $tmp_prod;
            }
        }

        return $products_for_template;
    }
    public function getStockAvailableByProductId($id_product, $id_product_attribute = null, $id_shop = null)
    {
        if (!Validate::isUnsignedId($id_product)) {
            return false;
        }

        $query = new DbQuery();
        $query->select('quantity');
        $query->select('reserved_quantity');
        $query->from('stock_available');
        $query->where('id_product = '.(int)$id_product);

        if ($id_product_attribute !== null) {
            $query->where('id_product_attribute = '.(int)$id_product_attribute);
        }

        $query = StockAvailable::addSqlShopRestriction($query, $id_shop);
        return Db::getInstance(_PS_USE_SQL_SLAVE_)->getRow($query);
    }

    protected function getBestSellers($nb)
    {
        $id_shop = (int)$this->context->shop->id;
        if (Configuration::get('PS_CATALOG_MODE')) {
            return false;
        }
        $searchProvider = new BestSalesProductSearchProvider(
            $this->context->getTranslator()
        );

        $context = new ProductSearchContext($this->context);

        $query = new ProductSearchQuery();

        $query->setResultsPerPage($nb)->setPage(1);

        $query->setSortOrder(SortOrder::random());

        $result = $searchProvider->runQuery(
            $context,
            $query
        );

        $assembler = new ProductAssembler($this->context);

        $presenterFactory = new ProductPresenterFactory($this->context);
        $presentationSettings = $presenterFactory->getPresentationSettings();
        $presenter = new ProductListingPresenter(
            new ImageRetriever(
                $this->context->link
            ),
            $this->context->link,
            new PriceFormatter(),
            new ProductColorsRetriever(),
            $this->context->getTranslator()
        );

        $products_for_template = array();

        foreach ($result->getProducts() as $rawProduct) {
            $tmp_prod = $presenter->present(
                $presentationSettings,
                $assembler->assembleProduct($rawProduct),
                $this->context->language
            );
            
            $tt_stock_available = $this->getStockAvailableByProductId($rawProduct['id_product'], $rawProduct['id_product_attribute'], $id_shop);
            $tmp_prod['stock_quantity'] = $tt_stock_available['quantity'];
            $tmp_prod['reserved_quantity'] = $tt_stock_available['reserved_quantity'];
            if ($tmp_prod['stock_quantity'] > 0) {
                $tmp_prod['percent'] = $tmp_prod['stock_quantity']/($tt_stock_available['reserved_quantity'] + $tmp_prod['stock_quantity']) * 100;
            } else {
                $tmp_prod['percent'] = 0;
            }
            $time_ago = $this->timeago($rawProduct['date_upd']);
            $tmp_prod['time_ago'] = $time_ago;
            $products_for_template[] = $tmp_prod;
        }
        return $products_for_template;
    }
    public function hookdisplayAfterBodyOpeningTag($params)
    {
        $group_prod_fliter = array();
        if (!$this->isCached($this->templateFile.'ttproductpopup_footer.tpl', $this->getCacheId($this->templateFile.'ttproductpopup_footer'))) {
            $group_prod_fliter = $this->prevHook($params);
            if (!isset($group_prod_fliter) || count($group_prod_fliter) <= 0) {
                return false;
            }
            $this->context->smarty->assign(array(
               'group_prod_fliter' => $group_prod_fliter,
			   'TT_POPUP_STYLE' => Configuration::get('TT_POPUP_STYLE'),
            ));
        }
        return $this->display(__FILE__, 'ttproductpopup_footer.tpl', $this->getCacheId($this->templateFile.'ttproductpopup_footer'));
    }
}
