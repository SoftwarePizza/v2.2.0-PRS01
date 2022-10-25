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
use PrestaShop\PrestaShop\Adapter\Translator;
use PrestaShop\PrestaShop\Adapter\LegacyContext;
use PrestaShop\PrestaShop\Core\Product\Search\ProductSearchContext;
use PrestaShop\PrestaShop\Core\Product\Search\ProductSearchQuery;
use PrestaShop\PrestaShop\Core\Product\Search\SortOrder;
use PrestaShop\PrestaShop\Adapter\BestSales\BestSalesProductSearchProvider;

class Tttabproducts extends Module implements WidgetInterface
{
    private $_postErrors  = array();
    private $_html = '';
    public function __construct()
    {
        $this->name         = 'tttabproducts';
        $this->tab             = 'front_office_features';
        $this->version         = '1.0.1';
        $this->author         = 'Templatetrip';
        $this->secure_key = Tools::encrypt($this->name);
        $this->bootstrap = true;
        
        parent :: __construct();
        
        $this->displayName     = $this->l('TT - Product Tabs');
        $this->description     = $this->l('Display Product Tabs On Home Page.');
        $this->ps_versions_compliancy = array('min' => '1.7', 'max' => _PS_VERSION_);
        $this->templateFile = 'module:tttabproducts/views/templates/hook/tttabproducts.tpl';
    }
    public function install()
    {
        Configuration::updateValue('TT_HOME_PRODUCTTAB_SALE', 0);
        Configuration::updateValue('TT_HOME_PRODUCTTAB_NEW', 1);
        Configuration::updateValue('TT_HOME_PRODUCTTAB_FEATURE', 1);
        Configuration::updateValue('TT_HOME_PRODUCTTAB_SELLER', 1);
        Configuration::updateValue('TT_HOME_PRODUCTTAB_RANDOMIZE', true);
        Configuration::updateValue('TT_HOME_PRODUCTTAB_ITEMS', 10);
        return parent :: install()
            && $this->registerHook('displayHome')
            && $this->registerHook('header');
    }
    public function uninstall()
    {
        $this->_clearCache('tttabproducts.tpl');
        if (!parent::uninstall() ||
            !Configuration::deleteByName('TT_HOME_PRODUCTTAB_ITEMS')) {
            return false;
        }
        return parent::uninstall();
    }
    public function psversion()
    {
        $version=_PS_VERSION_;
        $exp=$explode=explode(".", $version);
        return $exp[1];
    }
    public function hookHeader($params)
    {
           $config = $this->getConfigFieldsValues();
            Media::addJsDef(
                array(
                    'TT_HOME_PRODUCTTAB_ITEMS' => $config['TT_HOME_PRODUCTTAB_ITEMS'],
                 )
            );
            $this->context->controller->addJS($this->_path.'views/js/tttabproducts.js');
            $this->context->controller->addCSS($this->_path.'views/css/'.$this->name.'.css', 'all');
    }
    protected function getBestSellers()
    {
        if (Configuration::get('PS_CATALOG_MODE')) {
            return false;
        }
        $searchProvider = new BestSalesProductSearchProvider(
            $this->context->getTranslator()
        );
        $context = new ProductSearchContext($this->context);
        $query = new ProductSearchQuery();
        $nProducts = (int) Configuration::get('PS_BLOCK_BESTSELLERS_TO_DISPLAY');
        $query
            ->setResultsPerPage($nProducts)
            ->setPage(1)
        ;
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
        $products_for_template = [];
        foreach ($result->getProducts() as $rawProduct) {
            $products_for_template[] = $presenter->present(
                $presentationSettings,
                $assembler->assembleProduct($rawProduct),
                $this->context->language
            );
        }
        return $products_for_template;
    }
    public function getProducts($params = null, $type = null)
    {
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
        $nb = Configuration::get('TT_HOME_PRODUCTTAB_ITEMS');
        if ($type == 1) {
            //New Products
             $products = Product::getNewProducts((int) $this->context->language->id, 0, $nb);
        } elseif ($type == 2) {
            //Feature Products
             $query = new ProductSearchQuery();
               $query
                ->setResultsPerPage($nb)
                ->setPage(1)
            ;
        
            $query->setSortOrder(new SortOrder('product', 'position', 'asc'));
            
            $context = new ProductSearchContext($this->context);
            $category = new Category((int) Configuration::get('HOME_FEATURED_CAT'));
            if (!$category) {
                $category = 2;
            }
            $searchProvider = new CategoryProductSearchProvider(
                $this->context->getTranslator(),
                $category
            );
            $result  = $searchProvider->runQuery(
                $context,
                $query
            );
            $products = $result->getProducts();
        } elseif ($type == 3) {
            //Bestseller Products
            $products = $this->getBestSellers();
        } elseif ($type ==4) {
            //Sale Products
            $products = Product::getPricesDrop((int)$this->context->cookie->id_lang, 0, ((int)$nb ? $nb : 2000), false);
        }
        $products_for_template = [];
        if ($type == 3) {
            $products_for_template = $products;
        } elseif (isset($products) && $products) {
            foreach ($products as $rawProduct) {
                     $products_for_template[] = $presenter->present(
                         $presentationSettings,
                         $assembler->assembleProduct($rawProduct),
                         $this->context->language
                     );
            }
        }
        return $products_for_template;
    }
    // Hook Home
    public function renderWidget($hookName = null, array $configuration = [])
    {
            $variables = $this->getWidgetVariables($hookName, $configuration);
        if (empty($variables)) {
            return false;
        }
            $this->smarty->assign($variables);
        return $this->fetch($this->templateFile);
    }
    public function getWidgetVariables($hookName = null, array $configuration = [])
    {
         $nb = Configuration::get($this->name . '_p_limit');
        $category = new Category(Context::getContext()->shop->getCategory(), (int) Context::getContext()->language->id);
        $params = null;
        $ttTabproducts = array();
        if ((int) Configuration::get('TT_HOME_PRODUCTTAB_NEW')) {
            $newProducts = $this->getProducts($params, 1);
            $ttTabproducts[] = array('id'=>'new_product', 'name' => $this->l('New Arrival'), 'productInfo' => $newProducts);
        }
        if ((int) Configuration::get('TT_HOME_PRODUCTTAB_FEATURE')) {
            $featureProduct = $this->getProducts($params, 2);
            $ttTabproducts[] = array('id'=>'feature_product','name' => $this->l('Featured Items'), 'productInfo' =>  $featureProduct);
        }
        if ((int) Configuration::get('TT_HOME_PRODUCTTAB_SELLER')) {
            $bestseller =  $this->getProducts($params, 3);
            $ttTabproducts[] = array('id'=>'besseller_product','name' => $this->l('Bestseller'), 'productInfo' =>  $bestseller);
        }
        if ((int) Configuration::get('TT_HOME_PRODUCTTAB_SALE')) {
            $specialProducts = $this->getProducts($params, 4);
            ProductSale::fillProductSales();
            $ttTabproducts[] = array('id'=> 'special_product','name' => $this->l('Specials'), 'productInfo' =>  $specialProducts);
        }

        $options = $this->getConfigFieldsValues();
        $this->smarty->assign(array(
            'add_prod_display' => Configuration::get('PS_ATTRIBUTE_CATEGORY_DISPLAY'),
            'tab_effect' => Configuration::get($this->name . '_tab_effect'),
        ));
        if (count($ttTabproducts) <1) {
            return;
        }
        $this->context->smarty->assign('ttTabproducts', $ttTabproducts);
        $this->context->smarty->assign('config', $options);
        return $ttTabproducts;
    }

    public function getContent()
    {
        $output = '';

        if (Tools::isSubmit('submitTtTabProduct')) {

			$ttProductNbr = Tools::getValue('TT_HOME_PRODUCTTAB_ITEMS');
            if (!$ttProductNbr || empty($ttProductNbr)) {
                $output .= $this->displayError($this->l('Please complete the "products to display" field.'));
            } elseif (0 === (int)$ttProductNbr) {
                $output .= $this->displayError($this->l('Invalid number.'));
            } else {
			    Configuration::updateValue('TT_HOME_PRODUCTTAB_ITEMS', (int)$ttProductNbr);
				
				$this->_clearCache('*');
				
	            if (!sizeof($this->_postErrors)) {
    	            $this->_postProcess();
        	        $output .= $this->displayConfirmation($this->l('The settings have been updated.'));
				}
            }
        }
        return $output.$this->_displayForm();
    }

    public function getSelectOptionsHtml($options = null, $name = null, $selected = null)
    {
        $html = "";
        $html .='<select name =' . $name . ' style="width:130px">';
        if (count($options) > 0) {
            foreach ($options as $key => $val) {
                if (trim($key) == trim($selected)) {
                    $html .='<option value=' . $key . ' selected="selected">' . $val . '</option>';
                } else {
                    $html .='<option value=' . $key . '>' . $val . '</option>';
                }
            }
        }
        $html .= '</select>';
        return $html;
    }
    private function _postProcess()
    {
                Configuration::updateValue('TT_HOME_PRODUCTTAB_SALE', Tools::getValue('TT_HOME_PRODUCTTAB_SALE'));
                Configuration::updateValue('TT_HOME_PRODUCTTAB_NEW', Tools::getValue('TT_HOME_PRODUCTTAB_NEW'));
                Configuration::updateValue('TT_HOME_PRODUCTTAB_FEATURE', Tools::getValue('TT_HOME_PRODUCTTAB_FEATURE'));
                Configuration::updateValue('TT_HOME_PRODUCTTAB_SELLER', Tools::getValue('TT_HOME_PRODUCTTAB_SELLER'));
                Configuration::updateValue('TT_HOME_PRODUCTTAB_ITEMS', Tools::getValue('TT_HOME_PRODUCTTAB_ITEMS'));
    }
    public function _displayForm()
    {
        $fields_form = array(
            'form' => array(
                'legend' => array(
                    'title' => $this->l('Settings'),
                    'icon' => 'icon-cogs'
                ),
                'input' => array(
                    array(
                        'type' => 'switch',
                        'label' => $this->l('Show New'),
                        'name' => 'TT_HOME_PRODUCTTAB_NEW',
                        'desc' => $this->l('Show New product hon Home page.'),
                        'values' => array(
                            array(
                                'id' => 'active_on',
                                'value' => 1,
                                'label' => $this->l('Enabled')
                            ),
                            array(
                                'id' => 'active_off',
                                'value' => 0,
                                'label' => $this->l('Disabled')
                            )
                        ),
                    ),
                    array(
                        'type' => 'switch',
                        'label' => $this->l('Show Featured'),
                        'name' => 'TT_HOME_PRODUCTTAB_FEATURE',
                        'desc' => $this->l('Show Featured product hon Home page.'),
                        'values' => array(
                            array(
                                'id' => 'active_on',
                                'value' => 1,
                                'label' => $this->l('Enabled')
                            ),
                            array(
                                'id' => 'active_off',
                                'value' => 0,
                                'label' => $this->l('Disabled')
                            )
                        ),
                    ),
                    array(
                        'type' => 'switch',
                        'label' => $this->l('Show Bestseller'),
                        'name' => 'TT_HOME_PRODUCTTAB_SELLER',
                        'desc' => $this->l('Show Bestseller product hon Home page.'),
                        'values' => array(
                            array(
                                'id' => 'active_on',
                                'value' => 1,
                                'label' => $this->l('Enabled')
                            ),
                            array(
                                'id' => 'active_off',
                                'value' => 0,
                                'label' => $this->l('Disabled')
                            )
                        ),
                    ),
                    array(
                        'type' => 'switch',
                        'label' => $this->l('Show Specials'),
                        'name' => 'TT_HOME_PRODUCTTAB_SALE',
                        'desc' => $this->l('Show sale product hon Home page.'),
                        'values' => array(
                            array(
                                'id' => 'active_on',
                                'value' => 1,
                                'label' => $this->l('Enabled')
                            ),
                            array(
                                'id' => 'active_off',
                                'value' => 0,
                                'label' => $this->l('Disabled')
                            )
                        ),
                    ),
                    array(
                        'type' => 'text',
                        'label' => $this->l('Products to display'),
                        'name' => 'TT_HOME_PRODUCTTAB_ITEMS',
                    ),
                ),
                'submit' => array(
                    'title' => $this->l('Save'),
                )
            ),
        );
        $helper = new HelperForm();
        $helper->show_toolbar = false;
        $helper->table =  $this->table;
        $lang = new Language((int)Configuration::get('PS_LANG_DEFAULT'));
        $helper->default_form_language = $lang->id;
        $helper->allow_employee_form_lang = Configuration::get('PS_BO_ALLOW_EMPLOYEE_FORM_LANG') ? Configuration::get('PS_BO_ALLOW_EMPLOYEE_FORM_LANG') : 0;
        $helper->identifier = $this->identifier;
        $helper->submit_action = 'submitTtTabProduct';
        $helper->currentIndex = $this->context->link->getAdminLink('AdminModules', false).'&configure='.$this->name.'&tab_module='.$this->tab.'&module_name='.$this->name;
        $helper->token = Tools::getAdminTokenLite('AdminModules');
        $helper->tpl_vars = array(
            'fields_value' => $this->getConfigFieldsValues(),
            'languages' => $this->context->controller->getLanguages(),
            'id_language' => $this->context->language->id
        );
        return $helper->generateForm(array($fields_form));
    }
    public function getConfigFieldsValues()
    {
        return array(
            'TT_HOME_PRODUCTTAB_NBR' => Tools::getValue('TT_HOME_PRODUCTTAB_NBR', (int) Configuration::get('TT_HOME_PRODUCTTAB_NBR')),
            'TT_HOME_PRODUCTTAB_NEW' => Tools::getValue('TT_HOME_PRODUCTTAB_NEW', (int) Configuration::get('TT_HOME_PRODUCTTAB_NEW')),
            'TT_HOME_PRODUCTTAB_SALE' => Tools::getValue('TT_HOME_PRODUCTTAB_SALE', (bool) Configuration::get('TT_HOME_PRODUCTTAB_SALE')),
            'TT_HOME_PRODUCTTAB_FEATURE' => Tools::getValue('TT_HOME_PRODUCTTAB_FEATURE', (bool) Configuration::get('TT_HOME_PRODUCTTAB_FEATURE')),
            'TT_HOME_PRODUCTTAB_SELLER' => Tools::getValue('TT_HOME_PRODUCTTAB_SELLER', (bool) Configuration::get('TT_HOME_PRODUCTTAB_SELLER')),
            'TT_HOME_PRODUCTTAB_ITEMS' => Tools::getValue('TT_HOME_PRODUCTTAB_ITEMS', (int) Configuration::get('TT_HOME_PRODUCTTAB_ITEMS')),
        );
    }
    private function _installHookCustomer()
    {
        $hookspos = array(
                'tabsProducts',
            );
        foreach ($hookspos as $hook) {
            if (Hook::getIdByName($hook)) {
            } else {
                $new_hook = new Hook();
                $new_hook->name = pSQL($hook);
                $new_hook->title = pSQL($hook);
                $new_hook->add();
                $id_hook = $new_hook->id;
            }
        }
        return true;
    }
    public static function getBestSales($id_lang, $page_number = 0, $nb_products = 10, $order_by = null, $order_way = null)
    {
        if ($page_number < 0) {
            $page_number = 0;
        }
        if ($nb_products < 1) {
            $nb_products = 10;
        }
        $final_order_by = $order_by;
        $order_table = '';
        if (is_null($order_by) || $order_by == 'position' || $order_by == 'price') {
            $order_by = 'sales';
        }
        if ($order_by == 'date_add' || $order_by == 'date_upd') {
            $order_table = 'product_shop';
        }
        if (is_null($order_way) || $order_by == 'sales') {
            $order_way = 'DESC';
        }
        $groups = FrontController::getCurrentCustomerGroups();
        $sql_groups = (count($groups) ? 'IN ('.implode(',', $groups).')' : '= 1');
        $interval = Validate::isUnsignedInt(Configuration::get('PS_NB_DAYS_NEW_PRODUCT')) ? Configuration::get('PS_NB_DAYS_NEW_PRODUCT') : 2000;
        
        $prefix = '';
        if ($order_by == 'date_add') {
            $prefix = 'p.';
        }
        $sql = 'SELECT p.*, product_shop.*, stock.out_of_stock, IFnull(stock.quantity, 0) as quantity,
                    pl.`description`, pl.`description_short`, pl.`link_rewrite`, pl.`meta_description`,
                    pl.`meta_keywords`, pl.`meta_title`, pl.`name`,
                    m.`name` as manufacturer_name, p.`id_manufacturer` as id_manufacturer,
                    MAX(image_shop.`id_image`) id_image, il.`legend`,
                    ps.`quantity` as sales, t.`rate`, pl.`meta_keywords`, pl.`meta_title`, pl.`meta_description`,
                    DATEDIFF(p.`date_add`, DATE_SUB(NOW(),
                    INTERVAL '.$interval.' DAY)) > 0 as new
                FROM `'._DB_PREFIX_.'product_sale` ps
                LEFT JOIN `'._DB_PREFIX_.'product` p ON ps.`id_product` = p.`id_product`
                '.Shop::addSqlAssociation('product', 'p', false).'
                LEFT JOIN `'._DB_PREFIX_.'product_lang` pl
                    ON p.`id_product` = pl.`id_product`
                    AND pl.`id_lang` = '.(int)$id_lang.Shop::addSqlRestrictionOnLang('pl').'
                LEFT JOIN `'._DB_PREFIX_.'image` i ON (i.`id_product` = p.`id_product`)'.
                Shop::addSqlAssociation('image', 'i', false, 'image_shop.cover=1').'
                LEFT JOIN `'._DB_PREFIX_.'image_lang` il ON (i.`id_image` = il.`id_image` AND il.`id_lang` = '.(int)$id_lang.')
                LEFT JOIN `'._DB_PREFIX_.'manufacturer` m ON (m.`id_manufacturer` = p.`id_manufacturer`)
                LEFT JOIN `'._DB_PREFIX_.'tax_rule` tr ON (product_shop.`id_tax_rules_group` = tr.`id_tax_rules_group`)
                    AND tr.`id_country` = '.(int)Context::getContext()->country->id.'
                    AND tr.`id_state` = 0
                LEFT JOIN `'._DB_PREFIX_.'tax` t ON (t.`id_tax` = tr.`id_tax`)
                '.Product::sqlStock('p').'
                WHERE product_shop.`active` = 1
                    AND product_shop.`visibility` != \'none\'
                    AND p.`id_product` IN (
                        SELECT cp.`id_product`
                        FROM `'._DB_PREFIX_.'category_group` cg
                        LEFT JOIN `'._DB_PREFIX_.'category_product` cp ON (cp.`id_category` = cg.`id_category`)
                        WHERE cg.`id_group` '.$sql_groups.'
                    )
                GROUP BY product_shop.id_product
                ORDER BY '.(!empty($order_table) ? '`'.pSQL($order_table).'`.' : '').'`'.pSQL($order_by).'` '.pSQL($order_way).'
                LIMIT '.(int)($page_number * $nb_products).', '.(int)$nb_products;
        $result = Db::getInstance(_PS_USE_SQL_SLAVE_)->executeS($sql);
        if ($final_order_by == 'price') {
            Tools::orderbyPrice($result, $order_way);
        }
        if (!$result) {
            return false;
        }
        return Product::getProductsProperties($id_lang, $result);
    }
}
