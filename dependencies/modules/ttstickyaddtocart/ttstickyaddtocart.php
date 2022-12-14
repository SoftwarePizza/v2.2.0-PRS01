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
*  @author PrestaShop SA <contact@prestashop.com>
*  @copyright  2007-2022 PrestaShop SA

*  @license    http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*/

if (!defined('_PS_VERSION_')) {
    exit;
}
//
class Ttstickyaddtocart extends Module
{
    const PREFIX = "ttsatc_";
   
    protected $animate = array(
            'none',
            'bounce',
            'flash',
            'pulse',
            'rubberBand',
            'shake',
            'swing',
            'tada',
            'wobble',
            'jello',
            'heartBeat'
        );

    public function __construct()
    {
        $this->name = 'ttstickyaddtocart';
        $this->tab = 'front_office_features';
        $this->version = '1.0.1';
        $this->author = 'Templatetrip';
        $this->need_instance = 0;
        $this->ps_versions_compliancy = array('min' => '1.7', 'max' => _PS_VERSION_);
        $this->bootstrap = true;
        $this->module_key = '3055eb6b3d11b3cfa639f5e487f494a3';

        parent::__construct();

        $this->displayName = $this->l('TT - Sticky add to cart');
        $this->description = $this->l('Display sticky add to cart bar to quick buy on product page.');

        $this->confirmUninstall = $this->l('Are you sure you want to uninstall?');
    }

    public function install()
    {
        Configuration::updateValue('display_sticky_add_to_cart', 1);
       
        return parent::install()
                && $this->registerHook('displayHeader')
                && $this->registerHook('displayFooterProduct')
                && $this->registerHook('backOfficeHeader');
    }

    public function uninstall()
    {
        $paramList = $this->getParamList();
        $this->deleteParams($paramList);

        return parent::uninstall();
    }

    public function getParamList()
    {
        return array(
            'display_sticky_add_to_cart',
        );
    }

    public function getParam($key, $id_lang = 0)
    {
        return Configuration::get($key, $id_lang);
    }

    protected function deleteParams($keys)
    {
        foreach ($keys as $key) {
            $this->deleteParam($key);
        }
    }

    protected function deleteParam($key)
    {
        return Configuration::deleteByName($key);
    }

    protected function updateParam($key, $value)
    {
        return Configuration::updateValue($key, $value);
    }
   
    public function getConfig()
    {
        $config = array();
        $paramList = $this->getParamList();
        foreach ($paramList as $key) {
            $config[$key] = $this->getParam($key);
        }
        return $config;
    }
    /// CONTENT

    public function getContent()
    {
        $output = null;

        if (Tools::isSubmit('submit'.$this->name)) {
            $output = $this->getSubmitOutput();
        }
        return $output.$this->displayForm();
    }

    protected function getSubmitOutput()
    {
        $params = array();
        $paramList = $this->getParamList();

        foreach ($paramList as $key) {
            $params[$key] = Tools::getValue($key);
        }

        foreach ($paramList as $key) {
            $this->updateParam($key, $params[$key]);
        }

        return $this->displayConfirmation($this->l('Settings updated'));
    }


    public function displayForm()
    {
        $default_lang = (int)Configuration::get('PS_LANG_DEFAULT');
        $fields_form = array();
       
        $animateFormated = array();
        foreach ($this->animate as $item) {
            $animateFormated[] = array(
                                    'id' => $item,
                                    'name' => $item,
                                );
        }
      


        $fields_form[0]['form'] = array(
            'legend' => array(
                'title' => $this->l('Settings'),
            ),
            'input' => array(

                array(
                    'type' => 'switch',
                    'label' => $this->l('Display sticky add to cart'),
                    'name' => 'display_sticky_add_to_cart',
                    'values' => array(
                        array(
                            'id' => 'is_enabled_on',
                            'value' => 1
                        ),
                        array(
                            'id' => 'is_enabled_off',
                            'value' => 0
                        )
                    ),
                ),
               
            ),
            'submit' => array(
                'title' => $this->l('Save'),
            )
        );

        $helper = new HelperForm();

        $helper->module = $this;
        $helper->name_controller = $this->name;
        $helper->token = Tools::getAdminTokenLite('AdminModules');
        $helper->currentIndex = AdminController::$currentIndex.'&configure='.$this->name;

        $helper->default_form_language = $default_lang;
        $helper->allow_employee_form_lang = $default_lang;

        $helper->title = $this->displayName;
        $helper->show_toolbar = true;
        $helper->toolbar_scroll = true;
        $helper->submit_action = 'submit'.$this->name;
        $helper->toolbar_btn = array(
            'save' =>
                array(
                    'desc' => $this->l('Save'),
                    'href' => AdminController::$currentIndex.'&configure='.$this->name.'&save'.$this->name.
                        '&token='.Tools::getAdminTokenLite('AdminModules'),
                ),
            'back' => array(
                'href' => AdminController::$currentIndex.'&token='.Tools::getAdminTokenLite('AdminModules'),
                'desc' => $this->l('Back to list')
            )
        );
      


        $paramList = $this->getParamList();

        foreach ($paramList as $key) {
            $helper->fields_value[$key] = $this->getParam($key);
        }

        return $helper->generateForm($fields_form);
    }
   
    public function hookBackOfficeHeader($params)
    {
        if (in_array($this->name, array(Tools::getValue('configure', ''), Tools::getValue('module_name', '')))) {
            $this->context->controller->addJquery();
            $this->context->controller->addJS($this->_path.'views/js/back.js');
        }
    }

    public function hookDisplayHeader($params)
    {
        if (Tools::getValue('controller') == 'product' && !(bool)Configuration::isCatalogMode() && Configuration::get('display_sticky_add_to_cart')) {
            $config = array();
            $paramList = $this->getParamList();
            foreach ($paramList as $key) {
                $config[$key] = $this->getParam($key);
            }

            $this->context->smarty->assign('config', Tools::jsonEncode($config));
       
            $this->context->controller->addCSS($this->_path .'views/css/'.$this->name.'.css', 'all');
            $this->context->controller->addCSS($this->_path .'views/css/animate.css');
            $this->context->controller->addJS($this->_path .'views/js/front.js');
            return $this->display(__FILE__, 'views/templates/front/js_header.tpl');
        }
    }

    public function hookDisplayFooterProduct($params)
    {
        if (!isset($params['product']) || !(($params['product'] instanceof PrestaShop\PrestaShop\Adapter\Presenter\Product\ProductLazyArray) || is_array($params['product']))) {
            return 'The $product does not exist or it has incorrect type';
        }
       
        $productObj = new Product($params['product']['id_product']);
        $product = $this->productPrepare($productObj, $params['product']['id_product_attribute'], $params['product']['quantity']);
  

        //    Standart
            $product_full = Product::getProductProperties($this->context->language->id, $product);
            $attributesGroups = $this->assignAttributesGroups($productObj, $product_full);
        if (isset($attributesGroups['groups'])) {
            $this->context->smarty->assign('groups', $attributesGroups['groups']);
        } else {
            $this->context->smarty->assign('groups', array());
        }
       
        $orderOutOfStock = (bool)Configuration::get('PS_STOCK_MANAGEMENT') && !Product::isAvailableWhenOutOfStock($product['out_of_stock']);
       
        $this->context->smarty->assign(array(
            'cover' => $params['product']['cover'],
            'product' => $params['product'],
            'config' => $this->getConfig(),
           
            'cart' => $this->context->link->getPageLink('cart'),
            'token' => Tools::getToken(false),
           
            'productId' => (int) $productObj->id,
            'id_product_attribute' => $params['product']['id_product_attribute'],

            'order_out_of_stock' => $orderOutOfStock,
           
            'quantity' => $product['quantity'],
            'quantity_wanted' => $product['quantity_wanted'],
            'minimal_quantity' => $product['minimal_quantity'],
            'availableForOrder' => intval($product['availableForOrder']),
        ));
       
        if (!(bool)Configuration::isCatalogMode() && Configuration::get('display_sticky_add_to_cart')) {
            return $this->display(__FILE__, 'views/templates/front/tt-sticky-add-to-cart.tpl');
        }
    }
   
    protected function isColor($string)
    {
        $string = htmlspecialchars($string);
        $customvalarray = str_split('#0123456789aAbBcCdDeEfF');
        foreach (str_split($string) as $val) {
            if (!in_array($val, $customvalarray)) {
                return false;
            }
        }
        return true;
    }
    /// SYSTEM
    protected function isNewSystem()
    {
        return !$this->isOldSystem();
    }

    protected function isOldSystem()
    {
        return version_compare(_PS_VERSION_, '1.7.0.0', '<');
    }
    public function attributeCombinationForSelect($attributeCombinations, $productObj)
    {
        $productsAttr = array();
        foreach ($attributeCombinations as $attributeCombination) {
            $product = $this->productPrepare($productObj, $attributeCombination['id_product_attribute']);
            $prices = $this->getPrices($productObj, $product);
            $productsAttr[$attributeCombination['id_product_attribute']]['availableForOrder'] = $product['availableForOrder'];
            $productsAttr[$attributeCombination['id_product_attribute']]['default_on'] = (int)$attributeCombination['default_on'];
            $productsAttr[$attributeCombination['id_product_attribute']]['prices'] = $prices;
            $productsAttr[$attributeCombination['id_product_attribute']]['comb'][] = $attributeCombination;
        }
        return $productsAttr;
    }
    public function getPrices($productObj, $product)
    {
        $prices = array();
        $taxConfiguration = new TaxConfiguration();
        if ($taxConfiguration->includeTaxes()) {
            $price = $productObj->getPrice(true, $product['id_product_attribute'], 2);
            $prices['regular_price_amount'] = $productObj->getPriceWithoutReduct(true, $product['id_product_attribute'], 2);
        } else {
            $price = $productObj->getPrice(false, $product['id_product_attribute'], 2);
            $prices['regular_price_amount'] = $productObj->getPriceWithoutReduct(false, $product['id_product_attribute'], 2);
        }
        $productProperties = Product::getProductProperties($this->context->language->id, $product, $this->context);
        if ($productProperties['specific_prices']) {
             $prices['has_discount'] = (0 != $productProperties['reduction']);
            $prices['discount_type'] = $productProperties['specific_prices']['reduction_type'];
            $prices['discount_percentage'] = -round(100 * $productProperties['specific_prices']['reduction']).'%';
            $prices['discount_percentage_absolute'] = round(100 * $productProperties['specific_prices']['reduction']).'%';
            $prices['discount_amount'] = Tools::displayPrice($productProperties['reduction']);
            $prices['regular_price'] = Tools::displayPrice($productProperties['price_without_reduction']);
        }
        $prices['price_amount'] = $price;
        $prices['price'] = Tools::displayPrice($price);
        return $prices;
    }
    public function productPrepare($productObj, $id_product_attribute = false, $quantity = '')
    {
        $productObj->loadStockData();
        $product = (array)$productObj;
        $product['id_product_attribute'] = $this->getIdProductAttributeByRequestOrGroup($productObj, $productObj->id);

        if ($id_product_attribute | (!$product['id_product_attribute'] && $id_product_attribute)) {
            $product['id_product_attribute'] = $id_product_attribute;
        }
        $product['images'] = $productObj->getImages($this->context->language->id);
        $product['id_product'] = (int) $productObj->id;
        $product['out_of_stock'] = (int) $productObj->out_of_stock;
        $product['new'] = (int) $productObj->new;
        $product['id_category_default'] = '';
        $product['link_rewrite'] = $this->checkLinkRewrite($productObj->link_rewrite);
        $product['ean13'] = $productObj->ean13;
        $product['price'] = $productObj->price;
        $product['wholesale_price'] = $productObj->wholesale_price;
        $product['unit_price_ratio'] = $productObj->unit_price_ratio;
        if ($quantity !== '') {
            $product['quantity'] = $quantity;
        } else {
            $product['quantity'] = Product::getQuantity(
                (int) $productObj->id,
                (int) $product['id_product_attribute'],
                isset($product['cache_is_pack']) ? $product['cache_is_pack'] : null
            );
        }
        $product['minimal_quantity'] = $this->getProductMinimalQuantity($productObj, $product);
        $product['quantity_wanted'] = $this->getRequiredQuantity($productObj, $product);
        $product['availableForOrder'] = $this->isAvailableForOrder($product);
       
        return $product;
    }
    public function isAvailableForOrder($product)
    {
        $availableForOrder = true;
        if ((bool)Configuration::get('PS_STOCK_MANAGEMENT') &&
        !Product::isAvailableWhenOutOfStock($product['out_of_stock']) &&
        isset($product['quantity_wanted']) && ($product['quantity'] <= 0 || $product['quantity'] < $product['quantity_wanted'])
        ) {
            $availableForOrder = false;
        }
        $customization_required = false;
        if (isset($product['customizable']) && $product['customizable'] && Customization::isFeatureActive()) {
            if (count(Product::getRequiredCustomizableFieldsStatic((int)$product['id_product']))) {
                $customization_required = true;
            }
        }
        if ($customization_required) {
            $availableForOrder = false;
        }
        return $availableForOrder;
    }
    /**
     * Assign template vars related to attribute groups and colors.
     */
    public function assignAttributesGroups($product, $product_for_template = null)
    {
        $colors = array();
        $groups = array();
        $this->combinations = array();
        // @todo (RM) should only get groups and not all declination ?
        $attributes_groups = $product->getAttributesGroups($this->context->language->id);
        if (is_array($attributes_groups) && $attributes_groups) {
            $combination_images = $product->getCombinationImages($this->context->language->id);
            $combination_prices_set = array();
            foreach ($attributes_groups as $k => $row) {
                // Color management
                if (isset($row['is_color_group']) && $row['is_color_group'] && (isset($row['attribute_color']) && $row['attribute_color']) || (file_exists(_PS_COL_IMG_DIR_ . $row['id_attribute'] . '.jpg'))) {
                    $colors[$row['id_attribute']]['value'] = $row['attribute_color'];
                    $colors[$row['id_attribute']]['name'] = $row['attribute_name'];
                    if (!isset($colors[$row['id_attribute']]['attributes_quantity'])) {
                        $colors[$row['id_attribute']]['attributes_quantity'] = 0;
                    }
                    $colors[$row['id_attribute']]['attributes_quantity'] += (int) $row['quantity'];
                }
                if (!isset($groups[$row['id_attribute_group']])) {
                    $groups[$row['id_attribute_group']] = array(
                        'group_name' => $row['group_name'],
                        'name' => $row['public_group_name'],
                        'group_type' => $row['group_type'],
                        'default' => -1,
                    );
                }
                $groups[$row['id_attribute_group']]['attributes'][$row['id_attribute']] = array(
                    'name' => $row['attribute_name'],
                    'html_color_code' => $row['attribute_color'],
                    'texture' => (@filemtime(_PS_COL_IMG_DIR_ . $row['id_attribute'] . '.jpg')) ? _THEME_COL_DIR_ . $row['id_attribute'] . '.jpg' : '',
                    'selected' => (isset($product_for_template['attributes'][$row['id_attribute_group']]['id_attribute']) && $product_for_template['attributes'][$row['id_attribute_group']]['id_attribute'] == $row['id_attribute']) ? true : false,
                );
                //$product.attributes.$id_attribute_group.id_attribute eq $id_attribute
                if ($row['default_on'] && $groups[$row['id_attribute_group']]['default'] == -1) {
                    $groups[$row['id_attribute_group']]['default'] = (int) $row['id_attribute'];
                }
                if (!isset($groups[$row['id_attribute_group']]['attributes_quantity'][$row['id_attribute']])) {
                    $groups[$row['id_attribute_group']]['attributes_quantity'][$row['id_attribute']] = 0;
                }
                $groups[$row['id_attribute_group']]['attributes_quantity'][$row['id_attribute']] += (int) $row['quantity'];
                $this->combinations[$row['id_product_attribute']]['attributes_values'][$row['id_attribute_group']] = $row['attribute_name'];
                $this->combinations[$row['id_product_attribute']]['attributes'][] = (int) $row['id_attribute'];
                $this->combinations[$row['id_product_attribute']]['price'] = (float) $row['price'];
                // Call getPriceStatic in order to set $combination_specific_price
                if (!isset($combination_prices_set[(int) $row['id_product_attribute']])) {
                    $combination_specific_price = null;
                    Product::getPriceStatic((int) $product->id, false, $row['id_product_attribute'], 6, null, false, true, 1, false, null, null, null, $combination_specific_price);
                    $combination_prices_set[(int) $row['id_product_attribute']] = true;
                    $this->combinations[$row['id_product_attribute']]['specific_price'] = $combination_specific_price;
                }
                $this->combinations[$row['id_product_attribute']]['ecotax'] = (float) $row['ecotax'];
                $this->combinations[$row['id_product_attribute']]['weight'] = (float) $row['weight'];
                $this->combinations[$row['id_product_attribute']]['quantity'] = (int) $row['quantity'];
                $this->combinations[$row['id_product_attribute']]['reference'] = $row['reference'];
                $this->combinations[$row['id_product_attribute']]['unit_impact'] = $row['unit_price_impact'];
                $this->combinations[$row['id_product_attribute']]['minimal_quantity'] = $row['minimal_quantity'];
                if ($row['available_date'] != '0000-00-00' && Validate::isDate($row['available_date'])) {
                    $this->combinations[$row['id_product_attribute']]['available_date'] = $row['available_date'];
                    $this->combinations[$row['id_product_attribute']]['date_formatted'] = Tools::displayDate($row['available_date']);
                } else {
                    $this->combinations[$row['id_product_attribute']]['available_date'] = $this->combinations[$row['id_product_attribute']]['date_formatted'] = '';
                }
                if (!isset($combination_images[$row['id_product_attribute']][0]['id_image'])) {
                    $this->combinations[$row['id_product_attribute']]['id_image'] = -1;
                } else {
                    $this->combinations[$row['id_product_attribute']]['id_image'] = (int) $combination_images[$row['id_product_attribute']][0]['id_image'];
                }
            }
            // wash attributes list depending on available attributes depending on selected preceding attributes
            $current_selected_attributes = array();
            $count = 0;
            foreach ($groups as &$group) {
                ++$count;
                if ($count > 1) {
                    //find attributes of current group, having a possible combination with current selected
                    $id_product_attributes = array(0);
                    $query = 'SELECT pac.`id_product_attribute`
                        FROM `' . _DB_PREFIX_ . 'product_attribute_combination` pac
                        INNER JOIN `' . _DB_PREFIX_ . 'product_attribute` pa ON pa.id_product_attribute = pac.id_product_attribute
                        WHERE id_product = ' . (int)$product->id . ' AND id_attribute IN (' . implode(',', array_map('intval', $current_selected_attributes)) . ')
                        GROUP BY id_product_attribute
                        HAVING COUNT(id_product) = ' . count($current_selected_attributes);
                    if ($results = Db::getInstance()->executeS($query)) {
                        foreach ($results as $row) {
                            $id_product_attributes[] = $row['id_product_attribute'];
                        }
                    }
                    $id_attributes = Db::getInstance()->executeS('SELECT `id_attribute` FROM `' . _DB_PREFIX_ . 'product_attribute_combination` pac2
                        WHERE `id_product_attribute` IN (' . implode(',', array_map('intval', $id_product_attributes)) . ')
                        AND id_attribute NOT IN (' . implode(',', array_map('intval', $current_selected_attributes)) . ')');
                    foreach ($id_attributes as $k => $row) {
                        $id_attributes[$k] = (int) $row['id_attribute'];
                    }
                    foreach ($group['attributes'] as $key => $attribute) {
                        if (!in_array((int) $key, $id_attributes)) {
                            unset($group['attributes'][$key]);
                            unset($group['attributes_quantity'][$key]);
                        }
                    }
                }
                //find selected attribute or first of group
                $index = 0;
                $current_selected_attribute = 0;
                foreach ($group['attributes'] as $key => $attribute) {
                    if ($index === 0) {
                        $current_selected_attribute = $key;
                    }
                    if ($attribute['selected']) {
                        $current_selected_attribute = $key;
                        break;
                    }
                }
                if ($current_selected_attribute > 0) {
                    $current_selected_attributes[] = $current_selected_attribute;
                }
            }
            // wash attributes list (if some attributes are unavailables and if allowed to wash it)
            if (!Product::isAvailableWhenOutOfStock($product->out_of_stock) && Configuration::get('PS_DISP_UNAVAILABLE_ATTR') == 0) {
                foreach ($groups as &$group) {
                    foreach ($group['attributes_quantity'] as $key => &$quantity) {
                        if ($quantity <= 0) {
                            unset($group['attributes'][$key]);
                        }
                    }
                }
                foreach ($colors as $key => $color) {
                    if ($color['attributes_quantity'] <= 0) {
                        unset($colors[$key]);
                    }
                }
            }
            foreach ($this->combinations as $id_product_attribute => $comb) {
                $attribute_list = '';
                foreach ($comb['attributes'] as $id_attribute) {
                    $attribute_list .= '\'' . (int) $id_attribute . '\',';
                }
                $attribute_list = rtrim($attribute_list, ',');
                $this->combinations[$id_product_attribute]['list'] = $attribute_list;
            }

            $return = array();
            $return['groups'] = $groups;
             $return['combinations'] = $this->combinations;
            $return['combination_images'] = $combination_images;
            return $return;
        } else {
            return array();
        }
    }
       
    private function getIdProductAttributeByGroup($id_product)
    {
        $groups = Tools::getValue('group');
      

        if (empty($groups)) {
            return null;
        }

        return (int) $this->getIdProductAttributeByIdAttributes(
            $id_product,
            $groups,
            true
        );
    }
   
    public static function getIdProductAttributeByIdAttributes($idProduct, $idAttributes, $findBest = false)
    {
        $idProduct = (int) $idProduct;

        if (!is_array($idAttributes) && is_numeric($idAttributes)) {
            $idAttributes = array((int) $idAttributes);
        }

        if (!is_array($idAttributes) || empty($idAttributes)) {
            throw new PrestaShopException(
                sprintf(
                    'Invalid parameter $idAttributes with value: "%s"',
                    print_r($idAttributes, true)
                )
            );
        }

        $idAttributesImploded = implode(',', array_map('intval', $idAttributes));
        $idProductAttribute = Db::getInstance()->getValue('
            SELECT
                pac.`id_product_attribute`
            FROM
                `' . _DB_PREFIX_ . 'product_attribute_combination` pac
                INNER JOIN `' . _DB_PREFIX_ . 'product_attribute` pa ON pa.id_product_attribute = pac.id_product_attribute
            WHERE
                pa.id_product = ' . (int)$idProduct . '
                AND pac.id_attribute IN (' .pSQL($idAttributesImploded) . ')
            GROUP BY
                pac.`id_product_attribute`
            HAVING
                COUNT(pa.id_product) = ' . count($idAttributes));

        if ($idProductAttribute === false && $findBest) {
            //find the best possible combination
            //first we order $idAttributes by the group position
            $orderred = array();
            $result = Db::getInstance()->executeS('
                SELECT
                    a.`id_attribute`
                FROM
                    `' . _DB_PREFIX_ . 'attribute` a
                    INNER JOIN `' . _DB_PREFIX_ . 'attribute_group` g ON a.`id_attribute_group` = g.`id_attribute_group`
                WHERE
                    a.`id_attribute` IN (' .pSQL($idAttributesImploded) . ')
                ORDER BY
                    g.`position` ASC');

            foreach ($result as $row) {
                $orderred[] = $row['id_attribute'];
            }

            while ($idProductAttribute === false && count($orderred) > 0) {
                array_pop($orderred);
                $idProductAttribute = Db::getInstance()->getValue('
                    SELECT
                        pac.`id_product_attribute`
                    FROM
                        `' . _DB_PREFIX_ . 'product_attribute_combination` pac
                        INNER JOIN `' . _DB_PREFIX_ . 'product_attribute` pa ON pa.id_product_attribute = pac.id_product_attribute
                    WHERE
                        pa.id_product = ' . (int) $idProduct . '
                        AND pac.id_attribute IN (' . implode(',', array_map('intval', $orderred)) . ')
                    GROUP BY
                        pac.id_product_attribute
                    HAVING
                        COUNT(pa.id_product) = ' . count($orderred));
            }
        }

        if (empty($idProductAttribute)) {
            throw new PrestaShopObjectNotFoundException('Can not retrieve the id_product_attribute');
        }

        return $idProductAttribute;
    }
   
   
    public function getIdProductAttributeByRequestOrGroup($product, $id_product)
    {
        $requestedIdProductAttribute = (int) Tools::getValue('id_product_attribute');
       
        $groupIdProductAttribute = $this->getIdProductAttributeByGroup($id_product);
        $requestedIdProductAttribute = null !== $groupIdProductAttribute ? $groupIdProductAttribute : $requestedIdProductAttribute;
       
        return $this->tryToGetAvailableIdProductAttribute($product, $requestedIdProductAttribute);
    }
   
   
    public function tryToGetAvailableIdProductAttribute($product, $checkedIdProductAttribute)
    {
        if (!Configuration::get('PS_DISP_UNAVAILABLE_ATTR')) {
            $availableProductAttributes = array_filter(
                $product->getAttributeCombinations(),
                function ($elem) {
                    return $elem['quantity'] > 0;
                }
            );

            $availableProductAttribute = array_filter(
                $availableProductAttributes,
                function ($elem) use ($checkedIdProductAttribute) {
                    return $elem['id_product_attribute'] == $checkedIdProductAttribute;
                }
            );

            if (empty($availableProductAttribute) && count($availableProductAttributes)) {
                return (int) array_shift($availableProductAttributes)['id_product_attribute'];
            }
        }

        return $checkedIdProductAttribute;
    }
   
    public function findProductCombinationById($product, $combinationId)
    {
        $foundCombination = null;
        $combinations = $product->getAttributesGroups($this->context->language->id);
        foreach ($combinations as $combination) {
            if ((int) ($combination['id_product_attribute']) === $combinationId) {
                $foundCombination = $combination;

                break;
            }
        }

        return $foundCombination;
    }
   
    public function getProductMinimalQuantity($product, $productArray)
    {
        $minimal_quantity = 1;
       
        if ($productArray['id_product_attribute']) {
            $combination = $this->findProductCombinationById($product, $productArray['id_product_attribute']);
            if ($combination['minimal_quantity']) {
                $minimal_quantity = $combination['minimal_quantity'];
            }
        } else {
            $minimal_quantity = $product->minimal_quantity;
        }

        return $minimal_quantity;
    }
   
    /**
     * @param $product
     *
     * @return int
     */
    public function getRequiredQuantity($product, $productArray)
    {
        $requiredQuantity = (int) Tools::getValue('quantity_wanted', $this->getProductMinimalQuantity($product, $productArray));
        if ($requiredQuantity < $productArray['minimal_quantity']) {
            $requiredQuantity = $productArray['minimal_quantity'];
        }

        return $requiredQuantity;
    }
   
    public function getAttributesGroups($id_lang, $id_product, $groupIdProductAttribute = '')
    {
        if (!Combination::isFeatureActive()) {
            return array();
        }
        $filterByGroupIdProductAttribute = '';
        if ($groupIdProductAttribute != '') {
            $filterByGroupIdProductAttribute = 'AND pac.`id_product_attribute` = ' . (int) $groupIdProductAttribute . '';
        }
       
        $sql = 'SELECT ag.`id_attribute_group`, ag.`is_color_group`, agl.`name` AS group_name, agl.`public_name` AS public_group_name,
                    a.`id_attribute`, al.`name` AS attribute_name, a.`color` AS attribute_color, product_attribute_shop.`id_product_attribute`,
                    IFNULL(stock.quantity, 0) as quantity, product_attribute_shop.`price`, product_attribute_shop.`ecotax`, product_attribute_shop.`weight`,
                    product_attribute_shop.`default_on`, pa.`reference`, product_attribute_shop.`unit_price_impact`,
                    product_attribute_shop.`minimal_quantity`, product_attribute_shop.`available_date`, ag.`group_type`
                FROM `' . _DB_PREFIX_ . 'product_attribute` pa
                ' . Shop::addSqlAssociation('product_attribute', 'pa') . '
                ' . Product::sqlStock('pa', 'pa') . '
                LEFT JOIN `' . _DB_PREFIX_ . 'product_attribute_combination` pac ON (pac.`id_product_attribute` = pa.`id_product_attribute`)
                LEFT JOIN `' . _DB_PREFIX_ . 'attribute` a ON (a.`id_attribute` = pac.`id_attribute`)
                LEFT JOIN `' . _DB_PREFIX_ . 'attribute_group` ag ON (ag.`id_attribute_group` = a.`id_attribute_group`)
                LEFT JOIN `' . _DB_PREFIX_ . 'attribute_lang` al ON (a.`id_attribute` = al.`id_attribute`)
                LEFT JOIN `' . _DB_PREFIX_ . 'attribute_group_lang` agl ON (ag.`id_attribute_group` = agl.`id_attribute_group`)
                ' . Shop::addSqlAssociation('attribute', 'a') . '
                WHERE pa.`id_product` = ' . (int) $id_product . '
                    AND al.`id_lang` = ' . (int) $id_lang . '
                    AND agl.`id_lang` = ' . (int) $id_lang . '
                    ' . pSQL($filterByGroupIdProductAttribute) . '
                GROUP BY id_attribute_group, id_product_attribute
                ORDER BY ag.`position` ASC, a.`position` ASC, agl.`name` ASC';

        return Db::getInstance()->executeS($sql);
    }
    /**
     * Allow to check if $link_rewrite is an array or not and only return a valid value
     *
     * @param array|string $link_rewrite
     *
     * @return string
     */
    public function checkLinkRewrite($link_rewrite)
    {
        $link_rewrite = $link_rewrite;

        if (is_array($link_rewrite)) {
            $filteredArray = array_filter($link_rewrite);
            $link_rewrite = current($filteredArray);
        }

        return $link_rewrite;
    }
}
