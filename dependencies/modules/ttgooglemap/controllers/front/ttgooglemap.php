<?php
/**
 * 2015-2022 Bonpresta
 *
 * Bonpresta Google Map
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the General Public License (GPL 2.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/GPL-2.0
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade the module to newer
 * versions in the future.
 *
 *  @author    Bonpresta
 *  @copyright 2015-2022 Bonpresta
 *  @license   http://opensource.org/licenses/GPL-2.0 General Public License (GPL 2.0)
 */

class TtgooglemapGooglemapModuleFrontController extends ModuleFrontController
{
    public function initContent()
    {
        parent::initContent();

        if (_PS_VERSION_ >= 1.7) {
            $this->setTemplate('module:ttgooglemap/views/templates/front/ttgooglemap_1_7.tpl');
        } else {
            $this->setTemplate('ttgooglemap.tpl');
        }
    }
}
