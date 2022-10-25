<?php
/**
* 2007-2022 PrestaShop
*
* NTTICE OF LICENSE
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

class Ttcookiebanner extends Module
{
    protected $config_form = false;
    protected $front_controller = null;

    public function __construct()
    {
        $this->name = 'ttcookiebanner';
        $this->tab = 'front_office_features';
        $this->version = '1.0.1';
        $this->author = 'TemplateTrip';
        $this->need_instance = 0;

        $this->module_key = '7c707e5791af499b0fb5983803599bb3';
        $this->author_address = '0x64aa3c1e4034d07015f639b0e171b0d7b27d01aa';

        $link = new Link();
        $this->front_controller = $link->getModuleLink($this->name, 'FrontAjaxCookiebanner', array(), true);
        $this->bootstrap = true;

        parent::__construct();

        $this->output = '';

        $this->displayName = $this->l('TT - Cookie Banner');
        $this->description = $this->l('This module allows you to display a cookie banner on your website');

        $this->js_path = $this->_path.'views/js/';
        $this->css_path = $this->_path.'views/css/';
        $this->img_path = $this->_path.'views/img/';
        $this->logo_path = $this->_path.'logo.png';
        $this->docs_path = $this->_path.'docs/';
        $this->module_path = $this->_path;

        $this->confirmUninstall = $this->l('Are you sure you want to uninstall this module?');
        $this->ps_versions_compliancy = array('min' => '1.7', 'max' => _PS_VERSION_);
    }

    /**
     * Don't forget to create update methods if needed:
     * http://doc.prestashop.com/display/PS16/Enabling+the+Auto-Update
     */
    public function install()
    {
        $languages = Language::getLanguages(false);

        //Configuration::updateValue('TT-POSITION', 'bottom');
        Configuration::updateValue('TT-FONT-LOOP', '1');
        Configuration::updateValue('TT_COOKIE_STYLE', 'cookie_style1');
        Configuration::updateValue('TT-CMS', '2');
        $now = new \DateTime('now');
        Configuration::updateValue('TT_COOKIE_BANNER_DATE_INSTALL', $now->format('Y-m-d H:i:s'));

        $values = array();
        foreach ($languages as $lang) {
            switch ($lang['iso_code']) {
                case 'en':
                    $values['TT-TEXT'][$lang['id_lang']] = 'To give you the best possible experience, this site uses cookies. Using your site means your agree to our use of cookies. We have published a new cookies policy, which you should need to find out more about the cookies we use.';
                    $values['TT-LINK-TEXT'][$lang['id_lang']] = 'View cookies policy.';
                    $values['TT-BUTTON-TEXT'][$lang['id_lang']] = 'Accept';
                    break;
                case 'gb':
                    $values['TT-TEXT'][$lang['id_lang']] = 'To give you the best possible experience, this site uses cookies. Using your site means your agree to our use of cookies. We have published a new cookies policy, which you should need to find out more about the cookies we use.';
                    $values['TT-LINK-TEXT'][$lang['id_lang']] = 'View cookies policy.';
                    $values['TT-BUTTON-TEXT'][$lang['id_lang']] = 'Accept';
                    break;
                case 'fr':
                    $values['TT-TEXT'][$lang['id_lang']] = 'En poursuivant votre navigation sur ce site, vous acceptez l\'utilisation de Cookies pour vous proposer des publicités ciblées adaptées à vos centres d\'intérêts et réaliser des statistiques de visites.';
                    $values['TT-LINK-TEXT'][$lang['id_lang']] = 'En savoir plus.';
                    $values['TT-BUTTON-TEXT'][$lang['id_lang']] = 'Accepter';
                    break;
                case 'qc':
                    $values['TT-TEXT'][$lang['id_lang']] = 'En poursuivant votre navigation sur ce site, vous acceptez l\'utilisation de Cookies pour vous proposer des publicités ciblées adaptées à vos centres d\'intérêts et réaliser des statistiques de visites.';
                    $values['TT-LINK-TEXT'][$lang['id_lang']] = 'En savoir plus.';
                    $values['TT-BUTTON-TEXT'][$lang['id_lang']] = 'Accepter';
                    break;
                case 'es':
                    $values['TT-TEXT'][$lang['id_lang']] = 'Para mejorar al máximo tu experiencia, esta web utiliza cookies. Si utilizas la web significa que estás de acuerdo con que usemos cookies. Hemos publicado una nueva política de cookies, que deberás leer para entender mejor cuáles son las cookies que utilizamos.';
                    $values['TT-LINK-TEXT'][$lang['id_lang']] = 'Ver la política de cookies.';
                    $values['TT-BUTTON-TEXT'][$lang['id_lang']] = 'Ok';
                    break;
                case 'mx':
                    $values['TT-TEXT'][$lang['id_lang']] = 'Para mejorar al máximo tu experiencia, esta web utiliza cookies. Si utilizas la web significa que estás de acuerdo con que usemos cookies. Hemos publicado una nueva política de cookies, que deberás leer para entender mejor cuáles son las cookies que utilizamos.';
                    $values['TT-LINK-TEXT'][$lang['id_lang']] = 'Ver la política de cookies.';
                    $values['TT-BUTTON-TEXT'][$lang['id_lang']] = 'Ok';
                    break;
                case 'ag':
                    $values['TT-TEXT'][$lang['id_lang']] = 'Para mejorar al máximo tu experiencia, esta web utiliza cookies. Si utilizas la web significa que estás de acuerdo con que usemos cookies. Hemos publicado una nueva política de cookies, que deberás leer para entender mejor cuáles son las cookies que utilizamos.';
                    $values['TT-LINK-TEXT'][$lang['id_lang']] = 'Ver la política de cookies.';
                    $values['TT-BUTTON-TEXT'][$lang['id_lang']] = 'Ok';
                    break;
                case 'cb':
                    $values['TT-TEXT'][$lang['id_lang']] = 'Para mejorar al máximo tu experiencia, esta web utiliza cookies. Si utilizas la web significa que estás de acuerdo con que usemos cookies. Hemos publicado una nueva política de cookies, que deberás leer para entender mejor cuáles son las cookies que utilizamos.';
                    $values['TT-LINK-TEXT'][$lang['id_lang']] = 'Ver la política de cookies.';
                    $values['TT-BUTTON-TEXT'][$lang['id_lang']] = 'Ok';
                    break;
                case 'it':
                    $values['TT-TEXT'][$lang['id_lang']] = 'Per offrirti la miglior esperienza possibile, questo sito utilizza i cookie. Utilizzando il sito acconsenti all\'uso dei cookie. Abbiamo pubblicato una nuova informativa sui cookie, dove puoi trovare maggiori informazioni sui cookie che utilizziamo.';
                    $values['TT-LINK-TEXT'][$lang['id_lang']] = 'Vedi l\'informativa sui cookie.';
                    $values['TT-BUTTON-TEXT'][$lang['id_lang']] = 'Ok';
                    break;
                case 'de':
                    $values['TT-TEXT'][$lang['id_lang']] = 'Um Ihnen das bestmögliche Kundenerlebnis zu bieten, nutzt diese Seite Cookies. Indem Sie Ihre Seite nutzen, erklären Sie sich mit der Verwendung von Cookies einverstanden. Wir haben neue Cookies-Richtlinien veröffentlicht, in denen Sie mehr über die Cookies, die wir nutzen, erfahren können.';
                    $values['TT-LINK-TEXT'][$lang['id_lang']] = 'Cookies-Richtlinien lesen.';
                    $values['TT-BUTTON-TEXT'][$lang['id_lang']] = 'Ok';
                    break;
                case 'nl':
                    $values['TT-TEXT'][$lang['id_lang']] = 'Deze site gebruikt cookies voor een optimale gebruikerservaring. Als u onze website gebruikt gaan we ervan uit dat u akkoord gaat met ons gebruik van cookies. We hebben een nieuw cookiebeleid gepubliceerd dat u kunt raadplegen voor meer informatie over de gebruikte cookies.';
                    $values['TT-LINK-TEXT'][$lang['id_lang']] = 'Cookiebeleid nalezen.';
                    $values['TT-BUTTON-TEXT'][$lang['id_lang']] = 'Ok';
                    break;
                case 'pl':
                    $values['TT-TEXT'][$lang['id_lang']] = 'Niniejsza witryna korzysta z plików cookies, by umożliwić Ci jak największą wygodę korzystania. Dalsze korzystanie z niej oznacza, że wyrażasz zgodę na używanie tych plików. Opublikowaliśmy nowe zasady dotyczące plików cookies, w których dowiesz się więcej na ich temat.';
                    $values['TT-LINK-TEXT'][$lang['id_lang']] = 'Przeczytaj zasady dotyczące plików cookies.';
                    $values['TT-BUTTON-TEXT'][$lang['id_lang']] = 'Ok';
                    break;
                case 'pt':
                    $values['TT-TEXT'][$lang['id_lang']] = 'Para que você tenha a melhor experiência possível, este site usa cookies. O uso deste site significa que você concorda com a nossa utilização de cookies. Publicamos uma nova política de cookies, onde você pode saber mais sobre os cookies que utilizamos.';
                    $values['TT-LINK-TEXT'][$lang['id_lang']] = 'Veja a política de cookies.';
                    $values['TT-BUTTON-TEXT'][$lang['id_lang']] = 'Ok';
                    break;
                case 'br':
                    $values['TT-TEXT'][$lang['id_lang']] = 'Para que você tenha a melhor experiência possível, este site usa cookies. O uso deste site significa que você concorda com a nossa utilização de cookies. Publicamos uma nova política de cookies, onde você pode saber mais sobre os cookies que utilizamos.';
                    $values['TT-LINK-TEXT'][$lang['id_lang']] = 'Veja a política de cookies.';
                    $values['TT-BUTTON-TEXT'][$lang['id_lang']] = 'Ok';
                    break;
                default:
                    $values['TT-TEXT'][$lang['id_lang']] = 'To give you the best possible experience, this site uses cookies. Using your site means your agree to our use of cookies. We have published a new cookies policy, which you should need to find out more about the cookies we use.';
                    $values['TT-LINK-TEXT'][$lang['id_lang']] = 'View cookies policy.';
                    $values['TT-BUTTON-TEXT'][$lang['id_lang']] = 'Ok';
                    break;
            }
        }

        Configuration::updateValue('TT-TEXT', $values['TT-TEXT']);
        Configuration::updateValue('TT-LINK-TEXT', $values['TT-LINK-TEXT']);
        Configuration::updateValue('TT-BUTTON-TEXT', $values['TT-BUTTON-TEXT']);

        if (parent::install() && $this->registerHook('displayCookie') && $this->registerHook('header')) {
            return true;
        } else {
            $this->_errors[] = $this->l('There was an error during the installation.
                Please contact us through Addons website');
            return false;
        }
    }

    public function uninstall()
    {
        //Configuration::deleteByName('TT-POSITION');
        Configuration::deleteByName('TT_COOKIE_STYLE');
        Configuration::deleteByName('TT-FONT-LOOP');
        Configuration::deleteByName('TT-CMS');
        Configuration::deleteByName('TT-TEXT');
        Configuration::deleteByName('TT-LINK-TEXT');
        Configuration::deleteByName('TT-BUTTON-TEXT');
        Configuration::deleteByName('TT_COOKIE_BANNER_DATE_INSTALL');

        return parent::uninstall();
    }

    public function loadAsset()
    {
        $_controller = Context::getContext()->controller;
        // Load CSS
        $css = array(
            $this->css_path.'back.css',
            $this->css_path.'cookie.css',
        );

        $this->context->controller->addCSS($css, 'all');

        // Load JS
        $jss = array(
            $this->js_path.'back.js',
        );

        $this->context->controller->addJS($jss);

        // Clean memory
        unset($jss, $css);
    }

    /**
     * Load the configuration form
     */
    public function getContent()
    {
        $this->loadAsset();
        $this->postProcess();

        $id_lang = $this->context->language->id;
        $id_shop = $this->context->shop->id;

        $cms_link_page = Context::getContext()->link->getAdminLink('AdminCmsContent');

        // API FAQ Update
        include_once('classes/APIFAQClass.php');
        $api = new APIFAQ();
        $faq = $api->getData($this->module_key, $this->version);

        $languages = Language::getLanguages(false);

        $CMS = CMS::getCMSPages($id_lang, null, true, $id_shop);

        $values = array();
        foreach ($languages as $lang) {
            $values['TT-TEXT'][$lang['id_lang']] = Configuration::get('TT-TEXT', $lang['id_lang']);
            $values['TT-LINK-TEXT'][$lang['id_lang']] = Configuration::get('TT-LINK-TEXT', $lang['id_lang']);
            $values['TT-BUTTON-TEXT'][$lang['id_lang']] = Configuration::get('TT-BUTTON-TEXT', $lang['id_lang']);
        }

        //get readme
        $iso_lang = Language::getIsoById($id_lang);
        $readme = $this->docs_path.'readme_'.$iso_lang.'.pdf';

        //get readme
        $iso_lang = Language::getIsoById($id_lang);
        $doc = $this->docs_path.'doc_'.$iso_lang.'.pdf';

        $baseUrl = _PS_BASE_URL_;

        $showRateModule = \DateTime::createFromFormat('Y-m-d H:i:s', \Configuration::get('TT_COOKIE_BANNER_DATE_INSTALL'));
        $now = new \DateTime('now');
        $showRateModule = (int)$now->diff($showRateModule)->format('%a') > 7 && (int)$now->diff($showRateModule)->format('%a') < 92;

        $this->context->smarty->assign(array(
            'baseUrl' => $baseUrl,
            'id_lang' => $id_lang,
            'module_name' => $this->name,
            'module_version' => $this->version,
            'apifaq' => $faq,
            'readme' => $readme,
            'doc' => $doc,
            'module_display' => $this->displayName,
            'module_path' => $this->module_path,
            'logo_path' => $this->logo_path,
            'img_path' => $this->img_path,
            'CMS_LINK' => $cms_link_page,
            'languages' => $this->context->controller->getLanguages(),
            'defaultFormLanguage' => (int) $this->context->employee->id_lang,
            'cms' => $CMS,
            'img' => $this->img_path,
            //'TT_POSITION' => Configuration::get('TT-POSITION'),
            'cookies' => array(
                    array(
                        'id' => 'cookie_style1',
                        'name' => $this->l('Display On Bottom Footer')
                    ),
                    array(
                        'id' => 'cookie_style2',
                        'name' => $this->l('Display On Left Fix')
                    ),
                    array(
                        'id' => 'cookie_style3',
                        'name' => $this->l('Display On Right Fix')
                    ),
                    array(
                        'id' => 'cookie_style4',
                        'name' => $this->l('Display On Bottom Footer Fix')
                    )
                ),
            'TT_COOKIE_STYLE' => Configuration::get('TT_COOKIE_STYLE'),
            'TT_FONT_LOOP' => Configuration::get('TT-FONT-LOOP'),
            'TT_CMS' => Configuration::get('TT-CMS'),
            'TT_TEXT' => $values['TT-TEXT'],
            'TT_LINK_TEXT' => $values['TT-LINK-TEXT'],
            'TT_BUTTON_TEXT' => $values['TT-BUTTON-TEXT'],
            'ps_version' => (bool)version_compare(_PS_VERSION_, '1.7', '>'),
            'showRateModule' => $showRateModule,
            'currentLangIsoCode' => $this->context->language->iso_code,
        ));

        $this->output .= $this->context->smarty->fetch($this->local_path.'views/templates/admin/configure.tpl');

        return $this->output;
    }

    public function postProcess()
    {
        if (Tools::isSubmit('submitCookieBannerModule')) {
            $languages = Language::getLanguages(false);
            $values = array();

           // $TT_POSITION = pSQL(Tools::getValue('TT-POSITION'));
           // Configuration::updateValue('TT-POSITION', $TT_POSITION);
            $TT_CMS = (int)Tools::getValue('TT-CMS');
            Configuration::updateValue('TT-CMS', $TT_CMS);

            $TT_FONT_LOOP = (int)Tools::getValue('TT-FONT-LOOP');
            Configuration::updateValue('TT-FONT-LOOP', $TT_FONT_LOOP);
            $TT_COOKIE_STYLE = pSQL(Tools::getValue('TT_COOKIE_STYLE'));
            Configuration::updateValue('TT_COOKIE_STYLE', $TT_COOKIE_STYLE);

            foreach ($languages as $lang) {
                $values['TT_TEXT'][$lang['id_lang']] = pSQL(Tools::getValue('TT-TEXT-'.$lang['id_lang'].''));
                $values['TT_LINK_TEXT'][$lang['id_lang']] = pSQL(Tools::getValue('TT-LINK-TEXT-'.$lang['id_lang'].''));
                $values['TT_BUTTON_TEXT'][$lang['id_lang']] = pSQL(Tools::getValue('TT-BUTTON-TEXT-'.$lang['id_lang'].''));
            }

            Configuration::updateValue('TT-TEXT', $values['TT_TEXT']);
            Configuration::updateValue('TT-LINK-TEXT', $values['TT_LINK_TEXT']);
            Configuration::updateValue('TT-BUTTON-TEXT', $values['TT_BUTTON_TEXT']);

            $this->output .= $this->displayConfirmation($this->l('Successful update !'));
        }
    }

    public function hookHeader($params)
    {
        $controller = Context::getContext();
        // Load CSS
        $css = array(
            $this->css_path.'cookie.css',
        );
        $controller->controller->addCSS($css, 'all');

        // Load JS
        $jss = array(
            $this->js_path.'cookie.js',
            $this->js_path.'initCookiebanner.js',
        );

        $controller->controller->addJS($jss);

        $current_language = Context::getContext()->language->id;
        $languages = Language::getLanguages(true);

        $values = array();
        foreach ($languages as $lang) {
            $values['TT-TEXT'][$lang['id_lang']] = Configuration::get('TT-TEXT', $lang['id_lang']);
            $values['TT-LINK-TEXT'][$lang['id_lang']] = Configuration::get('TT-LINK-TEXT', $lang['id_lang']);
            $values['TT-BUTTON-TEXT'][$lang['id_lang']] = Configuration::get('TT-BUTTON-TEXT', $lang['id_lang']);
        }

        $CMS_ID = Configuration::get('TT-CMS');
        $CMS_URL = $this->context->link->getCMSLink($CMS_ID);

        $this->context->smarty->assign(array(
            'current_language' => $current_language,
            'languages' => $languages,
            //'TT_POSITION' => Configuration::get('TT-POSITION'),
            'TT_COOKIE_STYLE' => Configuration::get('TT_COOKIE_STYLE'),
            'TT_FONT_LOOP' => Configuration::get('TT-FONT-LOOP'),
            'TT_CMS_URL' => $CMS_URL,
            'TT_TEXT' => $values['TT-TEXT'],
            'TT_LINK_TEXT' => $values['TT-LINK-TEXT'],
            'TT_BUTTON_TEXT' => $values['TT-BUTTON-TEXT'],

        ));

        return $this->display(__FILE__, 'views/templates/hook/header.tpl');
    }

    public function hexToRgb($hex, $alpha = false)
    {
        $rgb = array();
        $hex      = str_replace('#', '', $hex);
        $length   = Tools::strlen($hex);
        $rgb['r'] = hexdec($length == 6 ? Tools::substr($hex, 0, 2) : ($length == 3 ? str_repeat(Tools::substr($hex, 0, 1), 2) : 0));
        $rgb['g'] = hexdec($length == 6 ? Tools::substr($hex, 2, 2) : ($length == 3 ? str_repeat(Tools::substr($hex, 1, 1), 2) : 0));
        $rgb['b'] = hexdec($length == 6 ? Tools::substr($hex, 4, 2) : ($length == 3 ? str_repeat(Tools::substr($hex, 2, 1), 2) : 0));
        if ($alpha) {
            $rgb['a'] = $alpha;
        }
        return implode(array_keys($rgb)) . '(' . implode(', ', $rgb) . ')';
    }
}
