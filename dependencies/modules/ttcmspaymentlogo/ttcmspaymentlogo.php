<?php
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.md.
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
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 */
 
if (!defined('_PS_VERSION_')) {
    exit;
}

use PrestaShop\PrestaShop\Core\Module\WidgetInterface;

require_once _PS_MODULE_DIR_ . 'ttcmspaymentlogo/classes/ttcmspaymentlogoinfo.php';

class TtCmspaymentlogo extends Module implements WidgetInterface
{
    // Equivalent module on PrestaShop 1.6, sharing the same data
    const MODULE_17 = 'blockcmsinfo';

    private $templateFile;

    public function __construct()
    {
        $this->name = 'ttcmspaymentlogo';
        $this->tab = 'front_office_features';
        $this->author = 'TemplateTrip';
        $this->version = '1.0.1';
        $this->need_instance = 0;

        $this->bootstrap = true;
        parent::__construct();

        Shop::addTableAssociation('ttcmspaymentlogoinfo', ['type' => 'shop']);

        $this->displayName = $this->l('TT - CMS Paymentlogo block');
        $this->description = $this->l('Integrates custom text blocks anywhere in your store front.');

        $this->ps_versions_compliancy = ['min' => '1.7', 'max' => _PS_VERSION_];

        $this->templateFile = 'module:ttcmspaymentlogo/views/templates/hook/ttcmspaymentlogo.tpl';
    }


    public function install()
    {
         // Remove 1.6 equivalent module to avoid DB issues
        if (Module::isInstalled(self::MODULE_17)) {
            return $this->installFrom17Version();
        }

        return $this->runInstallSteps()
            && $this->installFixtures();
    }

    public function runInstallSteps()
    {
        return parent::install()
            && $this->installDB()
			&& $this->registerHook('displayHeader')
            && $this->registerHook('displayFooterAfter')
            && $this->registerHook('actionShopDataDuplication');
    }

    public function installFrom17Version()
    {
        require_once _PS_MODULE_DIR_.$this->name.'/classes/MigrateData.php';
        $migration = new MigrateData();
        $migration->retrieveOldData();

        $oldModule = Module::getInstanceByName(self::MODULE_17);
        if ($oldModule) {
            $oldModule->uninstall();
        }
        return $this->uninstallDB()
            && $this->runInstallSteps()
            && $migration->insertData();
    }

    public function uninstall()
    {
        return parent::uninstall() && $this->uninstallDB();
    }

    public function installDB()
    {
        $return = true;
        $return &= Db::getInstance()->execute('
                CREATE TABLE IF NOT EXISTS `' . _DB_PREFIX_ . 'ttcmspaymentlogoinfo` (
                `id_ttcmspaymentlogoinfo` INT UNSIGNED NOT NULL AUTO_INCREMENT,
                PRIMARY KEY (`id_ttcmspaymentlogoinfo`)
            ) ENGINE=' . _MYSQL_ENGINE_ . ' DEFAULT CHARSET=utf8 ;');

        $return &= Db::getInstance()->execute('
                CREATE TABLE IF NOT EXISTS `' . _DB_PREFIX_ . 'ttcmspaymentlogoinfo_shop` (
                `id_ttcmspaymentlogoinfo` INT(10) UNSIGNED NOT NULL,
                `id_shop` INT(10) UNSIGNED NOT NULL,
                PRIMARY KEY (`id_ttcmspaymentlogoinfo`, `id_shop`)
            ) ENGINE=' . _MYSQL_ENGINE_ . ' DEFAULT CHARSET=utf8 ;');

        $return &= Db::getInstance()->execute('
                CREATE TABLE IF NOT EXISTS `' . _DB_PREFIX_ . 'ttcmspaymentlogoinfo_lang` (
                `id_ttcmspaymentlogoinfo` INT UNSIGNED NOT NULL,
                `id_shop` INT(10) UNSIGNED NOT NULL,
                `id_lang` INT(10) UNSIGNED NOT NULL ,
                `text` text NOT NULL,
                PRIMARY KEY (`id_ttcmspaymentlogoinfo`, `id_lang`, `id_shop`)
            ) ENGINE=' . _MYSQL_ENGINE_ . ' DEFAULT CHARSET=utf8 ;');

        return $return;
    }

    public function uninstallDB($drop_table = true)
    {
        $ret = true;
        if ($drop_table) {
            $ret &= Db::getInstance()->execute('DROP TABLE IF EXISTS `' . _DB_PREFIX_ . 'ttcmspaymentlogoinfo`')
                && Db::getInstance()->execute('DROP TABLE IF EXISTS `' . _DB_PREFIX_ . 'ttcmspaymentlogoinfo_shop`')
                && Db::getInstance()->execute('DROP TABLE IF EXISTS `' . _DB_PREFIX_ . 'ttcmspaymentlogoinfo_lang`');
        }

        return $ret;
    }

    public function getContent()
    {
        $output = '';

        if (Tools::isSubmit('savettcmspaymentlogo')) {
            if (!Tools::getValue('text_' . (int) Configuration::get('PS_LANG_DEFAULT'), false)) {
                $output = $this->displayError($this->l('Please fill out all fields.'));
            } else {
                $update = $this->processSaveCustomText();

                if (!$update) {
                    $output = '<div class="alert alert-danger conf error">'
                        . $this->l('An error occurred on saving.')
                        . '</div>';
                }
                $this->_clearCache($this->templateFile);
            }
        }
        return $output . $this->renderForm();
    }

    public function processSaveCustomText()
    {
        $info = new ttcmspaymentlogoinfo(Tools::getValue('id_ttcmspaymentlogoinfo', 1));
        $shops = Tools::getValue('checkBoxShopAsso_configuration', [$this->context->shop->id]);
        $text = [];
        $languages = Language::getLanguages(false);

        foreach ($languages as $lang) {
            $text[$lang['id_lang']] = (string) Tools::getValue('text_' . $lang['id_lang']);
        }

        $saved = true;
        foreach ($shops as $shop) {
            Shop::setContext(Shop::CONTEXT_SHOP, $shop);
            $info->text = $text;
            $saved &= $info->save();
        }

        return $saved;
    }

    protected function renderForm()
    {
        $default_lang = (int) Configuration::get('PS_LANG_DEFAULT');

        $fields_form = [
            'tinymce' => true,
            'legend' => [
                'title' => $this->l('CMS block'),
            ],
            'input' => [
                'id_ttcmspaymentlogoinfo' => [
                    'type' => 'hidden',
                    'name' => 'id_ttcmspaymentlogoinfo',
                ],
                'content' => [
                    'type' => 'textarea',
                    'label' => $this->l('Text block'),
                    'lang' => true,
                    'name' => 'text',
                    'cols' => 40,
                    'rows' => 10,
                    'class' => 'rte',
                    'autoload_rte' => true,
                ],
            ],
            'submit' => [
                'title' => $this->l('Save'),
            ],
            'buttons' => [
                [
                    'href' => AdminController::$currentIndex . '&configure=' . $this->name . '&token=' . Tools::getAdminTokenLite('AdminModules'),
                    'title' => $this->l('Back to list'),
                    'icon' => 'process-icon-back',
                ],
            ],
        ];

        if (Shop::isFeatureActive() && Tools::getValue('id_ttcmspaymentlogoinfo') == false) {
            $fields_form['input'][] = [
                'type' => 'shop',
                'label' => $this->l('Shop association'),
                'name' => 'checkBoxShopAsso_theme',
            ];
        }

        $helper = new HelperForm();
        $helper->module = $this;
        $helper->name_controller = 'ttcmspaymentlogo';
        $helper->identifier = $this->identifier;
        $helper->token = Tools::getAdminTokenLite('AdminModules');
        foreach (Language::getLanguages(false) as $lang) {
            $helper->languages[] = [
                'id_lang' => $lang['id_lang'],
                'iso_code' => $lang['iso_code'],
                'name' => $lang['name'],
                'is_default' => ($default_lang == $lang['id_lang'] ? 1 : 0),
            ];
        }

        $helper->currentIndex = AdminController::$currentIndex . '&configure=' . $this->name;
        $helper->default_form_language = $default_lang;
        $helper->allow_employee_form_lang = $default_lang;
        $helper->toolbar_scroll = true;
        $helper->title = $this->displayName;
        $helper->submit_action = 'savettcmspaymentlogo';

        $helper->fields_value = $this->getFormValues();

        return $helper->generateForm([['form' => $fields_form]]);
    }

    public function getFormValues()
    {
        $fields_value = [];
        $idShop = $this->context->shop->id;
        $idInfo = ttcmspaymentlogoinfo::getCustomTextIdByShop($idShop);

        Shop::setContext(Shop::CONTEXT_SHOP, $idShop);

        foreach (Language::getLanguages(false) as $lang) {
            $info = new ttcmspaymentlogoinfo((int)$idInfo);
            $fields_value['text'][(int)$lang['id_lang']] = $info->text[(int)$lang['id_lang']];
        }
        $fields_value['id_ttcmspaymentlogoinfo'] = $idInfo;

        return $fields_value;
    }
    public function hookDisplayHeader()
    {
        $this->context->controller->addCSS($this->_path .'views/css/'.$this->name.'.css', 'all');
    }
    public function renderWidget($hookName = null, array $configuration = [])
    {
        if (!$this->isCached($this->templateFile, $this->getCacheId('ttcmspaymentlogo'))) {
            $this->smarty->assign($this->getWidgetVariables($hookName, $configuration));
        }

        return $this->fetch($this->templateFile, $this->getCacheId('ttcmspaymentlogo'));
    }

    public function getWidgetVariables($hookName = null, array $configuration = [])
    {
        $sql = 'SELECT * FROM `' . _DB_PREFIX_ . 'ttcmspaymentlogoinfo_lang`
            WHERE `id_lang` = ' . (int) $this->context->language->id . ' AND  `id_shop` = ' . (int) $this->context->shop->id;

        return [
            'cms_infos' => Db::getInstance()->getRow($sql),
        ];
    }


    public function installFixtures()
    {
        $return = true;
        $tabTexts = array(
            array(
                'text' => '&nbsp;'
            ),
        );

        $shopsIds = Shop::getShops(true, null, true);
        $languages = Language::getLanguages(false);
        $text = array();

        foreach ($tabTexts as $tab) {
            $ttcmspaymentlogoinfo = new ttcmspaymentlogoinfo();
            foreach ($languages as $lang) {
                $text[$lang['id_lang']] = $tab['text'];
            }
            $ttcmspaymentlogoinfo->text = $text;
            $return &= $ttcmspaymentlogoinfo->add();
        }

        if ($return && sizeof($shopsIds) > 1) {
            foreach ($shopsIds as $idShop) {
                Shop::setContext(Shop::CONTEXT_SHOP, $idShop);
                $ttcmspaymentlogoinfo->text = $text;
                $return &= $ttcmspaymentlogoinfo->save();
            }
        }

        return $return;
    }
    /**
     * Add CustomText when adding a new Shop
     *
     * @param array $params
     */
    public function hookActionShopDataDuplication($params)
    {
        if ($infoId = ttcmspaymentlogoinfo::getCustomTextIdByShop($params['old_id_shop'])) {
            Shop::setContext(Shop::CONTEXT_SHOP, $params['old_id_shop']);
            $oldInfo = new ttcmspaymentlogoinfo($infoId);

            Shop::setContext(Shop::CONTEXT_SHOP, $params['new_id_shop']);
            $newInfo = new ttcmspaymentlogoinfo($infoId, null, $params['new_id_shop']);
            $newInfo->text = $oldInfo->text;

            $newInfo->save();
        }
    }
}
