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
 
class TtSizeguideInfo extends ObjectModel
{
    /**
     * Identifier of CustomText
     *
     * @var int
     */
    public $id_ttsizeguideinfo;

    /**
     * HTML format of CustomText values
     *
     * @var array
     */
    public $text;

    /**
     * @see ObjectModel::$definition
     */
    public static $definition = [
        'table' => 'ttsizeguideinfo',
        'primary' => 'id_ttsizeguideinfo',
        'multilang' => true,
        'multilang_shop' => true,
        'fields' => [
            'id_ttsizeguideinfo' => ['type' => self::TYPE_NOTHING, 'validate' => 'isUnsignedId'],
            // Lang fields
            'text' => ['type' => self::TYPE_HTML, 'lang' => true, 'validate' => 'isCleanHtml', 'required' => true],
        ],
    ];

    /**
     * Return the CustomText ID By shop ID
     *
     * @param int $shopId
     *
     * @return bool|int
     */
    public static function getCustomTextIdByShop($shopId)
    {
        $sql = 'SELECT i.`id_ttsizeguideinfo` FROM `' . _DB_PREFIX_ . 'ttsizeguideinfo` i
		LEFT JOIN `' . _DB_PREFIX_ . 'ttsizeguideinfo_shop` ish ON ish.`id_ttsizeguideinfo` = i.`id_ttsizeguideinfo`
		WHERE ish.`id_shop` = ' . (int) $shopId;

        if ($result = Db::getInstance()->executeS($sql)) {
            return (int) reset($result)['id_ttsizeguideinfo'];
        }

        return false;
    }
}
