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
define('_MODULE_SMARTBLOG_DIR_', _PS_MODULE_DIR_. 'smartblog/views/img/');
require_once(dirname(__FILE__) . '/classes/BlogCategory.php');
require_once(dirname(__FILE__) . '/classes/Blogcomment.php');
require_once(dirname(__FILE__) . '/classes/BlogPostCategory.php');
require_once(dirname(__FILE__) . '/classes/BlogTag.php');
require_once(dirname(__FILE__) . '/classes/SmartBlogPost.php');
require_once(dirname(__FILE__) . '/classes/BlogImageType.php');
require_once(dirname(__FILE__) . '/controllers/admin/AdminAboutUsController.php');

class SmartBlog extends Module
{
    public $nrl;
    public $crl;
    public $erl;
    public $capl;
    public $warl;
    public $sucl;

    public function __construct()
    {
        $this->name = 'smartblog';
        $this->tab = 'front_office_features';
        $this->version = '2.0.2';
        $this->author = 'SmartDataSoft';
        $this->need_upgrade = true;
        $this->controllers = array('archive', 'category', 'details', 'search', 'tagpost');
        $this->secure_key = Tools::encrypt($this->name);
        $this->smart_shop_id = Context::getContext()->shop->id;
        $this->bootstrap = true;
        parent::__construct();

        $this->nrl = $this->l('Name is required');
        $this->crl = $this->l('Comment must be between 25 and 1500 characters!');
        $this->erl = $this->l('E-mail address not valid !');
        $this->capl = $this->l('Captcha is not valid');
        $this->warl = $this->l('Warning: Please check required form bellow!');
        $this->sucl = $this->l('Your comment successfully submitted.');

        $this->displayName = $this->l('Smart Blog');
        $this->description = $this->l('The Most Powerfull Presta shop Blog  Module - by smartdatasoft');
        $this->confirmUninstall = $this->l('Are you sure you want to delete your details ?');
    }

    public function install()
    {
        Configuration::updateGlobalValue('smartpostperpage', '5');
        Configuration::updateGlobalValue('smartshowauthor', '1');
        Configuration::updateGlobalValue('smartmainblogurl', 'smartblog');
        Configuration::updateGlobalValue('smartusehtml', '1');
        Configuration::updateGlobalValue('smartshowauthorstyle', '1');
        Configuration::updateGlobalValue('smartenablecomment', '1');
        Configuration::updateGlobalValue('smartcaptchaoption', '1');
        Configuration::updateGlobalValue('smartshowviewed', '1');
        Configuration::updateGlobalValue('smartshownoimg', '1');
        Configuration::updateGlobalValue('smartshowcolumn', '3');
        Configuration::updateGlobalValue('smartacceptcomment', '1');
        Configuration::updateGlobalValue('smartcustomcss', '');
        Configuration::updateGlobalValue('smartdisablecatimg', '1');
        Configuration::updateGlobalValue('smartblogmetatitle', 'Smart Bolg Title');
        Configuration::updateGlobalValue('smartblogmetakeyword', 'smart,blog,smartblog,prestashop blog,prestashop,blog');
        Configuration::updateGlobalValue('smartblogmetadescrip', 'Prestashop powerfull blog site developing module. It has hundrade of extra plugins. This module developed by SmartDataSoft.com');
        $this->addquickaccess();
        if (!parent::install() || !$this->registerHook('displayHeader')
            || !$this->registerHook('moduleRoutes')
            || !$this->registerHook('displayBackOfficeHeader')
            ) {
            return false;
        }
        $sql = array();

        require_once(dirname(__FILE__) . '/sql/install.php');

        foreach ($sql as $sq) :
            if (!Db::getInstance()->Execute($sq)) {
                return false;
            }
        endforeach;

        $this->CreateSmartBlogTabs();
        $this->SampleDataInstall();

        return true;
    }

    public function hookdisplayBackOfficeHeader()
    {
        $this->smarty->assign(array(
            'smartmodules_dir' => __PS_BASE_URI__
        ));
        return $this->display(__FILE__, 'views/templates/admin/addjs.tpl');
    }

    public function SmartHookInsert()
    {
        $hookvalue = array();
        require_once(dirname(__FILE__) . '/sql/addhook.php');
        foreach ($hookvalue as $hkv) {
            $hookid = Hook::getIdByName($hkv['name']);
            if (!$hookid) {
                $add_hook = new Hook();
                $add_hook->name = $hkv['name'];
                $add_hook->title = $hkv['title'];
                $add_hook->description = $hkv['description'];
                $add_hook->position = $hkv['position'];
                $add_hook->live_edit  = $hkv['live_edit'];
                $add_hook->add();
                $hookid = $add_hook->id;
                if (!$hookid) {
                    return false;
                }
            } else {
                $up_hook = new Hook($hookid);
                $up_hook->update();
            }
        }
        return true;
    }

    public function uninstall()
    {
        if (!parent::uninstall() ||
            !Configuration::deleteByName('smartblogmetatitle') ||
            !Configuration::deleteByName('smartblogmetakeyword') ||
            !Configuration::deleteByName('smartblogmetadescrip') ||
            !Configuration::deleteByName('smartpostperpage') ||
            !Configuration::deleteByName('smartacceptcomment') ||
            !Configuration::deleteByName('smartusehtml') ||
            !Configuration::deleteByName('smartcaptchaoption') ||
            !Configuration::deleteByName('smartshowviewed') ||
            !Configuration::deleteByName('smartdisablecatimg') ||
            !Configuration::deleteByName('smartenablecomment') ||
            !Configuration::deleteByName('smartmainblogurl') ||
            !Configuration::deleteByName('smartshowcolumn') ||
            !Configuration::deleteByName('smartshowauthorstyle') ||
            !Configuration::deleteByName('smartcustomcss') ||
            !Configuration::deleteByName('smartshownoimg') ||
            !Configuration::deleteByName('smartshowauthor')
        ) {
            return false;
        }

        $idtabs = array();

        require_once(dirname(__FILE__) . '/sql/uninstall_tab.php');
        foreach ($idtabs as $tabid) :
            if ($tabid) {
                $tab = new Tab($tabid);
                $tab->delete();
            }
        endforeach;
        
        $sql = array();
        require_once(dirname(__FILE__) . '/sql/uninstall.php');
        foreach ($sql as $s) :
            if (!Db::getInstance()->Execute($s)) {
                return false;
            }
        endforeach;

        $this->deletequickaccess();
        return true;
    }

    public function SmartHookDelete()
    {
        $hookvalue = array();
        require_once(dirname(__FILE__) . '/sql/addhook.php');
        foreach ($hookvalue as $hkv) {
            $hookid = Hook::getIdByName($hkv['name']);
            if ($hookid) {
                $dlt_hook = new Hook($hookid);
                $dlt_hook->delete();
            }
        }
    }

    public function hookModuleRoutes()
    {
        $alias = Configuration::get('smartmainblogurl');
        $usehtml = (int)Configuration::get('smartusehtml');
        if ($usehtml != 0) {
            $html = '.html';
        } else {
            $html = '';
        }
        $my_link = array(
            'smartblog' => array(
                'controller' => 'category',
                'rule' => $alias.$html,
                'keywords' => array(),
                'params' => array(
                    'fc' => 'module',
                    'module' => 'smartblog',
                ),
            ),
            'smartblog_list' => array(
                'controller' => 'category',
                'rule' => $alias.'/category'.$html,
                'keywords' => array(),
                'params' => array(
                    'fc' => 'module',
                    'module' => 'smartblog',
                ),
            ),
            'smartblog_list_module' => array(
                'controller' => 'category',
                'rule' => 'module/'.$alias.'/category'.$html,
                'keywords' => array(),
                'params' => array(
                    'fc' => 'module',
                    'module' => 'smartblog',
                ),
            ),
            'smartblog_list_pagination' => array(
                'controller' => 'category',
                'rule' =>       $alias.'/category/page/{page}'.$html,
                'keywords' => array(
                    'page' =>   array('regexp' => '[_a-zA-Z0-9-\pL]*', 'param' => 'page'),
                ),
                'params' => array(
                    'fc' => 'module',
                    'module' => 'smartblog',
                ),
            ),
            'smartblog_pagination' => array(
                'controller' => 'category',
                'rule' =>       $alias.'/page/{page}'.$html,
                'keywords' => array(
                    'page' =>   array('regexp' => '[_a-zA-Z0-9-\pL]*', 'param' => 'page'),
                ),
                'params' => array(
                    'fc' => 'module',
                    'module' => 'smartblog',
                ),
            ),
            'smartblog_category' => array(
                'controller' => 'category',
                'rule' =>        $alias.'/category/{id_category}_{slug}'.$html,
                'keywords' => array(
                    'id_category' =>    array('regexp' => '[_a-zA-Z0-9-\pL]*', 'param' => 'id_category'),
                    'slug'       =>   array('regexp' => '[_a-zA-Z0-9-\pL]*'),
                ),
                'params' => array(
                    'fc' => 'module',
                    'module' => 'smartblog',
                ),
            ),
            'smartblog_category_pagination' => array(
                'controller' => 'category',
                'rule' =>       $alias.'/category/{id_category}_{slug}/page/{page}'.$html,
                'keywords' => array(
                    'id_category' =>    array('regexp' => '[_a-zA-Z0-9-\pL]*', 'param' => 'id_category'),
                    'page' =>        array('regexp' => '[_a-zA-Z0-9-\pL]*', 'param' => 'page'),
                    'slug'       =>   array('regexp' => '[_a-zA-Z0-9-\pL]*'),
                ),
                'params' => array(
                    'fc' => 'module',
                    'module' => 'smartblog',
                ),
            ),
            'smartblog_cat_page_mod' => array(
                'controller' => 'category',
                'rule' =>       'module/'.$alias.'/category/{id_category}_{slug}/page/{page}'.$html,
                'keywords' => array(
                    'id_category' =>    array('regexp' => '[_a-zA-Z0-9-\pL]*', 'param' => 'id_category'),
                    'page' =>        array('regexp' => '[_a-zA-Z0-9-\pL]*', 'param' => 'page'),
                    'slug'       =>   array('regexp' => '[_a-zA-Z0-9-\pL]*'),
                ),
                'params' => array(
                    'fc' => 'module',
                    'module' => 'smartblog',
                ),
            ),
            'smartblog_post' => array(
                'controller' => 'details',
                'rule' =>       $alias.'/{id_post}_{slug}'.$html,
                'keywords' => array(
                    'id_post' =>    array('regexp' => '[_a-zA-Z0-9-\pL]*', 'param' => 'id_post'),
                    'slug'       =>   array('regexp' => '[_a-zA-Z0-9-\pL]*'),
                ),
                'params' => array(
                    'fc' => 'module',
                    'module' => 'smartblog',
                ),
            ),
            'smartblog_search' => array(
                'controller' => 'search',
                'rule' => $alias.'/search'.$html,
                'keywords' => array(),
                'params' => array(
                    'fc' => 'module',
                    'module' => 'smartblog',
                ),
            ),
            'smartblog_tag' => array(
                'controller' => 'tagpost',
                'rule' => $alias.'/tag/{tag}'.$html,
                'keywords' => array(
                    'tag' =>   array('regexp' => '[_a-zA-Z0-9-\pL]*', 'param' => 'tag'),
                ),
                'params' => array(
                    'fc' => 'module',
                    'module' => 'smartblog',
                ),
            ),
            'smartblog_search_pagination' => array(
                'controller' => 'search',
                'rule' =>       $alias.'/search/page/{page}'.$html,
                'keywords' => array(
                    'page' =>   array('regexp' => '[_a-zA-Z0-9-\pL]*', 'param' => 'page'),
                ),
                'params' => array(
                    'fc' => 'module',
                    'module' => 'smartblog',
                ),
            ),
            'smartblog_archive' => array(
                'controller' => 'archive',
                'rule' => $alias.'/archive'.$html,
                'keywords' => array(),
                'params' => array(
                    'fc' => 'module',
                    'module' => 'smartblog',
                ),
            ),
            'smartblog_archive_pagination' => array(
                'controller' => 'archive',
                'rule' =>       $alias.'/archive/page/{page}'.$html,
                'keywords' => array(
                    'page' =>   array('regexp' => '[_a-zA-Z0-9-\pL]*', 'param' => 'page'),
                ),
                'params' => array(
                    'fc' => 'module',
                    'module' => 'smartblog',
                ),
            ),
            'smartblog_month' => array(
                'controller' => 'archive',
                'rule' =>       $alias.'/archive/{year}/{month}'.$html,
                'keywords' => array(
                    'year' =>    array('regexp' => '[_a-zA-Z0-9-\pL]*', 'param' => 'year'),
                    'month' =>    array('regexp' => '[_a-zA-Z0-9-\pL]*', 'param' => 'month'),
                ),
                'params' => array(
                    'fc' => 'module',
                    'module' => 'smartblog',
                ),
            ),
            'smartblog_month_pagination' => array(
                'controller' => 'archive',
                'rule' =>       $alias.'/archive/{year}/{month}/page/{page}'.$html,
                'keywords' => array(
                    'year' =>    array('regexp' => '[_a-zA-Z0-9-\pL]*', 'param' => 'year'),
                    'month' =>    array('regexp' => '[_a-zA-Z0-9-\pL]*', 'param' => 'month'),
                    'page' =>   array('regexp' => '[_a-zA-Z0-9-\pL]*', 'param' => 'page'),
                ),
                'params' => array(
                    'fc' => 'module',
                    'module' => 'smartblog',
                ),
            ),
            'smartblog_year' => array(
                'controller' => 'archive',
                'rule' =>       $alias.'/archive/{year}'.$html,
                'keywords' => array(
                    'year' =>    array('regexp' => '[_a-zA-Z0-9-\pL]*', 'param' => 'year'),
                ),
                'params' => array(
                    'fc' => 'module',
                    'module' => 'smartblog',
                ),
            ),
            'smartblog_year_pagination' => array(
                'controller' => 'archive',
                'rule' =>       $alias.'/archive/{year}/page/{page}'.$html,
                'keywords' => array(
                    'year' =>    array('regexp' => '[_a-zA-Z0-9-\pL]*', 'param' => 'year'),
                    'page' =>   array('regexp' => '[_a-zA-Z0-9-\pL]*', 'param' => 'page'),
                ),
                'params' => array(
                    'fc' => 'module',
                    'module' => 'smartblog',
                ),
            ),
        );
        return $my_link;
    }

    public function hookDisplayHeader()
    {
        $base_url = $this->context->shop->getBaseURL(true, true);
        Media::addJsDef(array('baseDir' => $base_url));
        $this->smarty->assignGlobal('smart_module_dir', _MODULE_DIR_);
        $this->context->controller->registerJavascript('modules-smartblog', 'modules/'.$this->name.'/views/js/smartblog.js', array('position' => 'bottom', 'priority' => 150));
    }

    private function CreateSmartBlogTabs()
    {
        $langs = Language::getLanguages();
        $parentTabID = Tab::getIdFromClassName('AdminSmartBlogMenu');
        if ($parentTabID) {
            $parentTab = new Tab($parentTabID);
        } else {
            $parentTab = new Tab();
            $parentTab->active = 1;
            $parentTab->name = array();
            $parentTab->class_name = "AdminSmartBlogMenu";
            foreach (Language::getLanguages() as $lang) {
                $parentTab->name[$lang['id_lang']] = "SMARTBLOG";
            }
            $parentTab->id_parent = 0;
            $parentTab->module = $this->name;
            $parentTab->add();
        }

        $smarttab = new Tab();
        $smarttab->class_name = "AdminSmartBlog";
        $smarttab->module = "";
        $smarttab->id_parent = $parentTab->id;
        $smarttab->icon = "content_paste";
        foreach ($langs as $l) {
            $smarttab->name[$l['id_lang']] = $this->l('Blog');
        }
        $smarttab->save();
        $tab_id = $smarttab->id;
        @copy(dirname(__FILE__)."/views/img/AdminSmartBlog.gif", _PS_ROOT_DIR_."/img/t/AdminSmartBlog.gif");
        $tabvalue = array();
        require_once(dirname(__FILE__) . '/sql/install_tab.php');
        foreach ($tabvalue as $tab) {
            $newtab = new Tab();
            $newtab->class_name = $tab['class_name'];
            $newtab->id_parent = $tab_id;
            $newtab->module = $tab['module'];
            foreach ($langs as $l) {
                $newtab->name[$l['id_lang']] = $this->l($tab['name']);
            }
            $newtab->save();
        }
        return true;
    }

    public function getContent()
    {
        $html = '';
        if (Tools::isSubmit('savesmartblog')) {
            Configuration::updateValue('smartblogmetatitle', Tools::getvalue('smartblogmetatitle'));
            Configuration::updateValue('smartenablecomment', Tools::getvalue('smartenablecomment'));
            Configuration::updateValue('smartblogmetakeyword', Tools::getvalue('smartblogmetakeyword'));
            Configuration::updateValue('smartblogmetadescrip', Tools::getvalue('smartblogmetadescrip'));
            Configuration::updateValue('smartpostperpage', Tools::getvalue('smartpostperpage'));
            Configuration::updateValue('smartacceptcomment', Tools::getvalue('smartacceptcomment'));
            Configuration::updateValue('smartcaptchaoption', Tools::getvalue('smartcaptchaoption'));
            Configuration::updateValue('smartshowviewed', Tools::getvalue('smartshowviewed'));
            Configuration::updateValue('smartdisablecatimg', Tools::getvalue('smartdisablecatimg'));
            Configuration::updateValue('smartshowauthorstyle', Tools::getvalue('smartshowauthorstyle'));
            Configuration::updateValue('smartshowauthor', Tools::getvalue('smartshowauthor'));
            Configuration::updateValue('smartshowcolumn', Tools::getvalue('smartshowcolumn'));
            Configuration::updateValue('smartmainblogurl', Tools::getvalue('smartmainblogurl'));
            Configuration::updateValue('smartusehtml', Tools::getvalue('smartusehtml'));
            Configuration::updateValue('smartshownoimg', Tools::getvalue('smartshownoimg'));
            Configuration::updateValue('smartcustomcss', Tools::getvalue('smartcustomcss'), true);
            $this->processImageUpload($_FILES);
            $html = $this->displayConfirmation($this->l('The settings have been updated successfully.'));
            $helper = $this->settingForm();
            $html .= $helper->generateForm($this->fields_form);
            $helper = $this->regenerateform();
            $html .= $helper->generateForm($this->fields_form);
            $auc = new AdminAboutUsController();
            $html .= '<fieldset class="width3" id="smartdatasoft-content">
                <style>               
                #smartdatasoft-content { 
                    padding: 0;
                    width: 99%;
                    padding-left: 1.3em;
                    background: white;
                }
                </style></fieldset>
                <script type="text/javascript">
                    $.post(
                    "ajax-tab.php",
                    {
                        tab: \'AdminAboutUs\',
                        token: \''.$auc->token.'\',
                        ajax: \'1\',
                        action:\'GetSmartThemes\',
                        page:\'themes\'
                    }, function(a){
                        $("#smartdatasoft-content").html("<legend><img src=\'../img/admin/prestastore.gif\' class=\'middle\' />Live from SmartDataSoft Addons!</legend>"+a);
                    });
                </script>';
            return $html;
        } elseif (Tools::isSubmit('generateimage')) {
            if (Tools::getvalue('isdeleteoldthumblr') != 1) {
                BlogImageType::imageGenerate();
                $html = $this->displayConfirmation($this->l('Generate New Thumblr Succesfully.'));
                $helper = $this->settingForm();
                $html .= $helper->generateForm($this->fields_form);
                $helper = $this->regenerateform();
                $html .= $helper->generateForm($this->fields_form);
                $auc = new AdminAboutUsController();
                $html .= '<fieldset class="width3" id="smartdatasoft-content">
                    <style>
                    #smartdatasoft-content { 
                            padding: 0;
                            width: 99%;
                            padding-left: 1.3em;
                            background: white;
                        }
                    </style></fieldset>
                    <script type="text/javascript">
                        $.post(
                        "ajax-tab.php",
                        {
                            tab: \'AdminAboutUs\',
                            token: \''.$auc->token.'\',
                            ajax: \'1\',
                            action:\'GetSmartThemes\',
                            page:\'themes\'
                        }, function(a){
                            $("#smartdatasoft-content").html("<legend><img src=\'../img/admin/prestastore.gif\' class=\'middle\' />Live from SmartDataSoft Addons!</legend>"+a);
                        });
                    </script>';
                return $html;
            } else {
                BlogImageType::imageDelete();
                BlogImageType::imageGenerate();
                $html = $this->displayConfirmation($this->l('Delete Old Image and Generate New Thumblr Succesfully.'));
                $helper = $this->settingForm();
                $html .= $helper->generateForm($this->fields_form);
                $helper = $this->regenerateform();
                $html .= $helper->generateForm($this->fields_form);
                $auc = new AdminAboutUsController();
                $html .= '<fieldset class="width3" id="smartdatasoft-content">
                    <style>               
                    #smartdatasoft-content { 
                        padding: 0;
                        width: 99%;
                        padding-left: 1.3em;
                        background: white;
                    }
                    </style></fieldset>
                    <script type="text/javascript">
                        $.post(
                        "ajax-tab.php",
                        {
                            tab: \'AdminAboutUs\',
                            token: \''.$auc->token.'\',
                            ajax: \'1\',
                            action:\'GetSmartThemes\',
                            page:\'themes\'
                        }, function(a){
                            $("#smartdatasoft-content").html("<legend><img src=\'../img/admin/prestastore.gif\' class=\'middle\' />Live from SmartDataSoft Addons!</legend>"+a);
                        });
                    </script>';
                return $html;
            }
        } else {
            $helper = $this->settingForm();
            $this->context->smarty->assign(array(
                'modules_dir' => _MODULE_DIR_
                ));
            $html .= $helper->generateForm($this->fields_form);
            $helper = $this->regenerateform();
            $html .= $helper->generateForm($this->fields_form);
            $auc = new AdminAboutUsController();
            $html .= '<fieldset class="width3" id="smartdatasoft-content">
                <style>               
                #smartdatasoft-content { 
                        padding: 0;
                        width: 99%;
                        padding-left: 1.3em;
                        background: white;
                    }
                </style></fieldset>
                <script type="text/javascript">
                    $.post(
                    "ajax-tab.php",
                    {
                        tab: \'AdminAboutUs\',
                        token: \''.$auc->token.'\',
                        ajax: \'1\',
                        action:\'GetSmartThemes\',
                        page:\'themes\'
                    }, function(a){
                        $("#smartdatasoft-content").html("<legend><img src=\'../img/admin/prestastore.gif\' class=\'middle\' />Live from SmartDataSoft Addons!</legend>"+a);
                    });
                </script>';
            return $html;
        }
    }

    public function settingForm()
    {
        $blog_url = smartblog::GetSmartBlogLink('smartblog');
        $img_desc = '';
        $img_desc .= ''.$this->l('Upload a Avatar from your computer.<br/>N.B : Only jpg image is allowed');
        $img_desc .= '<br/><img style="clear:both;border:1px solid black;" alt="" src="'.__PS_BASE_URI__.'modules/smartblog/views/img/avatar/avatar.jpg" height="100" width="100"/><br />';
        $default_lang = (int) Configuration::get('PS_LANG_DEFAULT');
        $this->fields_form[0]['form'] = array(
            'legend' => array(
                'title' => $this->l('Setting'),
            ),
            'input' => array(
                array(
                    'type' => 'text',
                    'label' => $this->l('Meta Title'),
                    'name' => 'smartblogmetatitle',
                    'size' => 70,
                    'required' => true
                ),
                array(
                    'type' => 'text',
                    'label' => $this->l('Meta Keyword'),
                    'name' => 'smartblogmetakeyword',
                    'size' => 70,
                    'required' => true
                ),
                array(
                    'type' => 'textarea',
                    'label' => $this->l('Meta Description'),
                    'name' => 'smartblogmetadescrip',
                    'rows' => 7,
                    'cols' => 66,
                    'required' => true
                ),
                array(
                    'type' => 'text',
                    'label' => $this->l('Main Blog Url'),
                    'name' => 'smartmainblogurl',
                    'size' => 15,
                    'required' => true,
                    'desc'=> '<p class="alert alert-info"><a href="'.$blog_url.'">'.$blog_url.'</a></p>'
                ),
                array(
                    'type' => 'radio',
                    'label' => $this->l('Use .html with Friendly Url'),
                    'name' => 'smartusehtml',
                    'required' => false,
                    'class' => 't',
                    'is_bool' => true,
                    'values' => array(
                        array(
                            'id' => 'smartusehtml',
                            'value' => 1,
                            'label' => $this->l('Enabled')
                        ),
                        array(
                            'id' => 'smartusehtml',
                            'value' => 0,
                            'label' => $this->l('Disabled')
                        )
                    )
                ),
                array(
                    'type' => 'text',
                    'label' => $this->l('Number of posts per page'),
                    'name' => 'smartpostperpage',
                    'size' => 15,
                    'required' => true
                ),
                array(
                    'type' => 'radio',
                    'label' => $this->l('Auto accepted comment'),
                    'name' => 'smartacceptcomment',
                    'required' => false,
                    'class' => 't',
                    'is_bool' => true,
                    'values' => array(
                        array(
                            'id' => 'smartacceptcomment',
                            'value' => 1,
                            'label' => $this->l('Enabled')
                        ),
                        array(
                            'id' => 'smartacceptcomment',
                            'value' => 0,
                            'label' => $this->l('Disabled')
                        )
                    )
                ),
                array(
                    'type' => 'radio',
                    'label' => $this->l('Enable Captcha'),
                    'name' => 'smartcaptchaoption',
                    'required' => false,
                    'class' => 't',
                    'is_bool' => true,
                    'values' => array(
                        array(
                            'id' => 'smartcaptchaoption',
                            'value' => 1,
                            'label' => $this->l('Enabled')
                        ),
                        array(
                            'id' => 'smartcaptchaoption',
                            'value' => 0,
                            'label' => $this->l('Disabled')
                        )
                    )
                ),
                array(
                    'type' => 'radio',
                    'label' => $this->l('Enable Comment'),
                    'name' => 'smartenablecomment',
                    'required' => false,
                    'class' => 't',
                    'is_bool' => true,
                    'values' => array(
                        array(
                            'id' => 'smartenablecomment',
                            'value' => 1,
                            'label' => $this->l('Enabled')
                        ),
                        array(
                            'id' => 'smartenablecomment',
                            'value' => 0,
                            'label' => $this->l('Disabled')
                        )
                    )
                ),
                array(
                    'type' => 'radio',
                    'label' => $this->l('Show Author Name'),
                    'name' => 'smartshowauthor',
                    'required' => false,
                    'class' => 't',
                    'is_bool' => true,
                    'values' => array(
                        array(
                            'id' => 'smartshowauthor',
                            'value' => 1,
                            'label' => $this->l('Enabled')
                        ),
                        array(
                            'id' => 'smartshowauthor',
                            'value' => 0,
                            'label' => $this->l('Disabled')
                        )
                    )
                ),
                array(
                    'type' => 'radio',
                    'label' => $this->l('Show Post Viewed'),
                    'name' => 'smartshowviewed',
                    'required' => false,
                    'class' => 't',
                    'is_bool' => true,
                    'values' => array(
                        array(
                            'id' => 'smartshowviewed',
                            'value' => 1,
                            'label' => $this->l('Enabled')
                        ),
                        array(
                            'id' => 'smartshowviewed',
                            'value' => 0,
                            'label' => $this->l('Disabled')
                        )
                    )
                ),
                array(
                    'type' => 'radio',
                    'label' => $this->l('Show Author Name Style'),
                    'name' => 'smartshowauthorstyle',
                    'required' => false,
                    'class' => 't',
                    'values' => array(
                        array(
                            'id' => 'smartshowauthorstyle',
                            'value' => 1,
                            'label' => $this->l('First Name, Last Name')
                        ),
                        array(
                            'id' => 'smartshowauthorstyle',
                            'value' => 0,
                            'label' => $this->l('Last Name, First Name')
                        )
                    )
                ),
                array(
                    'type' => 'file',
                    'label' => $this->l('AVATAR Image:'),
                    'name' => 'avatar',
                    'display_image' => false,
                    'desc' => $img_desc
                ),
                array(
                    'type' => 'radio',
                    'label' => $this->l('Show No Image'),
                    'name' => 'smartshownoimg',
                    'required' => false,
                    'class' => 't',
                    'is_bool' => true,
                    'values' => array(
                        array(
                            'id' => 'smartshownoimg',
                            'value' => 1,
                            'label' => $this->l('Enabled')
                        ),
                        array(
                            'id' => 'smartshownoimg',
                            'value' => 0,
                            'label' => $this->l('Disabled')
                        )
                    )
                ),
                array(
                    'type' => 'radio',
                    'label' => $this->l('Show Category'),
                    'name' => 'smartdisablecatimg',
                    'required' => false,
                    'class' => 't',
                    'desc'=>'Show category image and description on category page',
                    'is_bool' => true,
                    'values' => array(
                        array(
                            'id' => 'smartdisablecatimg',
                            'value' => 1,
                            'label' => $this->l('Enabled')
                        ),
                        array(
                            'id' => 'smartdisablecatimg',
                            'value' => 0,
                            'label' => $this->l('Disabled')
                        )
                    )
                ),
                array(
                    'type' => 'radio',
                    'label' => $this->l('Blog Page Column Setting'),
                    'name' => 'smartshowcolumn',
                    'required' => false,
                    'class' => 't',
                    'values' => array(
                        array(
                            'id' => 'smartshowcolumn',
                            'value' => 0,
                            'label' => $this->l('Use Both SmartBlog Column')
                        ),
                        array(
                            'id' => 'smartshowcolumn',
                            'value' => 1,
                            'label' => $this->l('Use Only SmartBlog Left Column')
                        ),
                        array(
                            'id' => 'smartshowcolumn',
                            'value' => 2,
                            'label' => $this->l('Use Only SmartBlog Right Column')
                        ),
                        array(
                            'id' => 'smartshowcolumn',
                            'value' => 3,
                            'label' => $this->l('Use Prestashop Column')
                        )
                    )
                ),
                array(
                    'type' => 'textarea',
                    'label' => $this->l('Custom CSS'),
                    'name' => 'smartcustomcss',
                    'rows' => 7,
                    'cols' => 66,
                    'required' => false
                ),
            ),
            'submit' => array(
                'title' => $this->l('Save'),
                'class' => 'button'
            )
        );

        $helper = new HelperForm();
        $helper->module = $this;
        $helper->name_controller = $this->name;
        $helper->token = Tools::getAdminTokenLite('AdminModules');
        $helper->currentIndex = AdminController::$currentIndex . '&configure=' . $this->name;
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
                'href' => AdminController::$currentIndex . '&configure=' . $this->name . '&save'.$this->name.'token=' . Tools::getAdminTokenLite('AdminModules'),
            )
        );
        $helper->default_form_language = $default_lang;
        $helper->allow_employee_form_lang = $default_lang;
        $helper->title = $this->displayName;
        $helper->show_toolbar = true;
        $helper->toolbar_scroll = true;
        $helper->submit_action = 'save'.$this->name;

        $helper->fields_value['smartpostperpage'] = Configuration::get('smartpostperpage');
        $helper->fields_value['smartacceptcomment'] = Configuration::get('smartacceptcomment');
        $helper->fields_value['smartshowauthorstyle'] = Configuration::get('smartshowauthorstyle');
        $helper->fields_value['smartshowauthor'] = Configuration::get('smartshowauthor');
        $helper->fields_value['smartmainblogurl'] = Configuration::get('smartmainblogurl');
        $helper->fields_value['smartusehtml'] = Configuration::get('smartusehtml');
        $helper->fields_value['smartshowcolumn'] = Configuration::get('smartshowcolumn');
        $helper->fields_value['smartblogmetakeyword'] = Configuration::get('smartblogmetakeyword');
        $helper->fields_value['smartblogmetatitle'] = Configuration::get('smartblogmetatitle');
        $helper->fields_value['smartblogmetadescrip'] = Configuration::get('smartblogmetadescrip');
        $helper->fields_value['smartshowviewed'] = Configuration::get('smartshowviewed');
        $helper->fields_value['smartdisablecatimg'] = Configuration::get('smartdisablecatimg');
        $helper->fields_value['smartenablecomment'] = Configuration::get('smartenablecomment');
        $helper->fields_value['smartcustomcss'] = Configuration::get('smartcustomcss');
        $helper->fields_value['smartshownoimg'] = Configuration::get('smartshownoimg');
        $helper->fields_value['smartcaptchaoption'] = Configuration::get('smartcaptchaoption');
        return $helper;
    }

    protected function regenerateform()
    {
        $default_lang = (int)Configuration::get('PS_LANG_DEFAULT');
        $this->fields_form[0]['form'] = array(
            'legend' => array(
                'title' => $this->l('Blog Thumblr Configuration'),
            ),
            'input' => array(
                array(
                    'type' => 'radio',
                    'label' => $this->l('Delete Old Thumblr'),
                    'name' => 'isdeleteoldthumblr',
                    'required' => false,
                    'class' => 't',
                    'is_bool' => true,
                    'values' => array(
                        array(
                            'id' => 'isdeleteoldthumblr',
                            'value' => 1,
                            'label' => $this->l('Enabled')
                        ),
                        array(
                            'id' => 'isdeleteoldthumblr',
                            'value' => 0,
                            'label' => $this->l('Disabled')
                        )
                    )
                )
            ),
            'submit' => array(
                'title' => $this->l('Re Generate Thumblr'),
                'class' => 'button'
            )
        );

        $helper = new HelperForm();
        $helper->module = $this;
        $helper->name_controller = $this->name;
        $helper->token = Tools::getAdminTokenLite('AdminModules');
        foreach (Language::getLanguages(false) as $lang) {
            $helper->languages[] = array(
                'id_lang' => $lang['id_lang'],
                'iso_code' => $lang['iso_code'],
                'name' => $lang['name'],
                'is_default' => ($default_lang == $lang['id_lang'] ? 1 : 0)
            );
        }
        $helper->currentIndex = AdminController::$currentIndex . '&configure=' . $this->name;
        $helper->default_form_language = $default_lang;
        $helper->allow_employee_form_lang = $default_lang;
        $helper->toolbar_scroll = true;
        $helper->show_toolbar = false;
        $helper->submit_action = 'generateimage';
        $helper->fields_value['isdeleteoldthumblr'] = Configuration::get('isdeleteoldthumblr');
        return $helper;
    }

    public function processImageUpload($FILES)
    {
        if (isset($FILES['avatar']) && isset($FILES['avatar']['tmp_name']) && !empty($FILES['avatar']['tmp_name'])) {
            if (ImageManager::validateUpload($FILES['avatar'], 4000000)) {
                return $this->displayError($this->l('Invalid image'));
            } else {
                $ext = Tools::substr($FILES['avatar']['name'], strrpos($FILES['avatar']['name'], '.') + 1);
                $file_name = 'avatar.' . $ext;
                $path = _PS_MODULE_DIR_ .'smartblog/views/img/avatar/' . $file_name;
                if (!move_uploaded_file($FILES['avatar']['tmp_name'], $path)) {
                    return $this->displayError($this->l('An error occurred while attempting to upload the file.'));
                } else {
                    $author_types = BlogImageType::getImageAllType('author');
                    foreach ($author_types as $image_type) {
                        $dir = _PS_MODULE_DIR_ .'smartblog/views/img/avatar/avatar-'.Tools::stripslashes($image_type['type_name']).'.jpg';
                        if (file_exists($dir)) {
                            unlink($dir);
                        }
                    }
                    $images_types = BlogImageType::getImageAllType('author');
                    foreach ($images_types as $image_type) {
                        ImageManager::resize($path, _PS_MODULE_DIR_ .'smartblog/views/img/avatar/avatar-'.Tools::stripslashes($image_type['type_name']).'.jpg', (int)$image_type['width'], (int)$image_type['height']);
                    }
                }
            }
        }
    }

    public function SampleDataInstall()
    {
        $damisql = "INSERT INTO "._DB_PREFIX_."smart_blog_category (id_parent,active) VALUES (0,1);";
        Db::getInstance()->execute($damisql);

        $damisq1l = "INSERT INTO "._DB_PREFIX_."smart_blog_category_shop (id_smart_blog_category,id_shop) VALUES (1,'".(int)$this->smart_shop_id."');";
        Db::getInstance()->execute($damisq1l);
        
        $languages = Language::getLanguages(false);
        foreach ($languages as $language) {
            $damisql2 = "INSERT INTO "._DB_PREFIX_."smart_blog_category_lang (id_smart_blog_category,meta_title,id_lang,link_rewrite) VALUES (1,'Uncategories','".(int)$language['id_lang']."','uncategories');";
            Db::getInstance()->execute($damisql2);
        }
        for ($i = 1; $i <= 5; $i++) {
            Db::getInstance()->Execute('
                INSERT INTO `'._DB_PREFIX_.'smart_blog_post`(`id_author`, `id_category`, `position`, `active`, `available`, `created`, `viewed`, `comment_status`, `post_type`) 
                VALUES(1,1,0,1,1,"'.Date('y-m-d H:i:s').'",0,1,0)');
        }

        $languages = Language::getLanguages(false);
        for ($i = 1; $i <= 5; $i++) {
            if ($i==1) :
                $title='Lorem ipsum dolor sit amet';
                $slug='lorem-ipsum-dolor-sit-amet';
                $des='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.';
            elseif ($i==2) :
                $title='Upon of seasons earth dominion';
                $slug='upon-of-seasons-earth-dominion';
                $des='Nascetur ridiculus mus upon of seasons earth dominion. Gathering brought light, creeping there saying. The lesser appear without very darkness seasons saw be. Dry cattle. Man very third.';
            elseif ($i==3) :
                $title='Scelerisque vestibulum urna';
                $slug='scelerisque-vestibulum-urna';
                $des='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';
            elseif ($i==4) :
                $title='Nec intellegat deseruisse te';
                $slug='nec-intellegat-deseruisse-te';
                $des='Mea stet putent sadipscing an. Per prima equidem cu, sit cu ullum democritum, tibique tacimates no usu. Falli audire ad vis, sea quando civibus placerat in. Cu utamur tritani argumentum pro, sed ne novum viderer.';
            elseif ($i==5) :
                $title='Viderer voluptatum te eum';
                $slug='viderer-voluptatum-te-eum';
                $des='Ei has mutat solum. Fugit atomorum efficiantur an vim, te mea diceret democritum referrentur, et altera aliquid mea. Sed illud dictas placerat ex, vel ea nihil recusabo consectetuer. Est et utamur similique, pro repudiare gubergren in.';
            endif;
            foreach ($languages as $language) {
                if (!Db::getInstance()->Execute('
                  INSERT INTO `' . _DB_PREFIX_ . 'smart_blog_post_lang`(`id_smart_blog_post`,`id_lang`,`meta_title`,`meta_description`,`short_description`,`content`,`link_rewrite`)
                  VALUES(' . $i . ',' . (int) $language['id_lang'] . ', 
                  "' . htmlspecialchars($title) . '", 
                  "' . htmlspecialchars($des) . '","' . Tools::substr($des, 0, 200) . '","' . htmlspecialchars($des) . '","' . $slug . '"
               )')) {
                    return false;
                }
            }
        }
        for ($i = 1; $i <= 5; $i++) {
            Db::getInstance()->Execute('
                INSERT INTO `'._DB_PREFIX_.'smart_blog_post_shop`(`id_smart_blog_post`, `id_shop`) 
                VALUES('.$i.','.(int)$this->smart_shop_id.')');
        }
        for ($i=1; $i <= 7; $i++) {
            if ($i==1) :
                $type_name = 'home-default';
                $width = '370';
                $height = '240';
                $type = 'post';
            elseif ($i==2) :
                $type_name = 'home-small';
                $width = '100';
                $height = '53';
                $type = 'post';
            elseif ($i==3) :
                $type_name = 'single-default';
                $width = '870';
                $height = '564';
                $type = 'post';
            elseif ($i==4) :
                $type_name = 'home-small';
                $width = '100';
                $height = '23';
                $type = 'Category';
            elseif ($i==5) :
                $type_name = 'home-default';
                $width = '350';
                $height = '80';
                $type = 'Category';
            elseif ($i==6) :
                $type_name = 'single-default';
                $width = '870';
                $height = '200';
                $type = 'Category';
            elseif ($i==7) :
                $type_name = 'author-default';
                $width = '54';
                $height = '54';
                $type = 'Author';
            endif;
            $damiimgtype = "INSERT INTO "._DB_PREFIX_."smart_blog_imagetype (type_name,width,height,type,active) VALUES ('".pSQL($type_name)."','".(int)$width."','".(int)$height."','".pSQL($type)."',1);";
            Db::getInstance()->execute($damiimgtype);
        }
        return true;
    }

    public static function GetSmartBlogUrl()
    {
        $ssl_enable = Configuration::get('PS_SSL_ENABLED');
        $id_lang = (int)Context::getContext()->language->id;
        $id_shop = (int)Context::getContext()->shop->id;
        $rewrite_set = (int)Configuration::get('PS_REWRITING_SETTINGS');
        $ssl = null;
        static $force_ssl = null;
        if ($ssl === null) {
            if ($force_ssl === null) {
                $force_ssl = (Configuration::get('PS_SSL_ENABLED') && Configuration::get('PS_SSL_ENABLED_EVERYWHERE'));
            }
            $ssl = $force_ssl;
        }

        if (Configuration::get('PS_MULTISHOP_FEATURE_ACTIVE') && $id_shop !== null) {
            $shop = new Shop($id_shop);
        } else {
            $shop = Context::getContext()->shop;
        }
        $base = ($ssl == 1 && $ssl_enable == 1) ? 'https://'.$shop->domain_ssl : 'http://'.$shop->domain;
        $langUrl = Language::getIsoById($id_lang).'/';
        if ((!$rewrite_set && in_array($id_shop, array((int)Context::getContext()->shop->id,  null))) || !Language::isMultiLanguageActivated($id_shop) || !(int)Configuration::get('PS_REWRITING_SETTINGS', null, null, $id_shop)) {
            $langUrl = '';
        }

        return $base.$shop->getBaseURI().$langUrl;
    }

    public static function GetSmartBlogLink($rewrite = 'smartblog', $params = null, $id_lang = null)
    {
        $url = smartblog::GetSmartBlogUrl();
        $dispatcher = Dispatcher::getInstance();
        $id_lang = (int)Context::getContext()->language->id;
        $force_routes = (bool)Configuration::get('PS_REWRITING_SETTINGS');
        if ($params != null) {
            return $url.$dispatcher->createUrl($rewrite, $id_lang, $params, $force_routes);
        } else {
            $params = array();
            return $url.$dispatcher->createUrl($rewrite, $id_lang, $params, $force_routes);
        }
    }

    public function addquickaccess()
    {
        $link = new Link();
        $qa = new QuickAccess();
        $qa->link = $link->getAdminLink('AdminModules').'&configure=smartblog';
        $languages = Language::getLanguages(false);
        foreach ($languages as $language) {
            $qa->name[$language['id_lang']] = 'Smart Blog Setting';
        }
        $qa->new_window = '0';
        if ($qa->save()) {
            Configuration::updateValue('smartblog_quick_access', $qa->id);
        }
    }

    public function deletequickaccess()
    {
        $qa = new QuickAccess(Configuration::get('smartblog_quick_access'));
        $qa->delete();
    }
}
