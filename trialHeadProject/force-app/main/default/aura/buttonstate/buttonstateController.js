({
 /**
 * Webkul Software.
 *
 * @category Webkul
 * @author Webkul
 * @copyright Copyright (c) 2010-2017 Webkul Software Private Limited (https://webkul.com)
 * @license https://store.webkul.com/license.html
 */
 handleClick : function (cmp, event, helper) {
 var buttonstate = cmp.get('v.buttonstate');
 cmp.set('v.buttonstate', !buttonstate);
 },
    
 handleToggle : function (cmp, event) {
 var enableWifi = cmp.get("v.enableWifi");
 cmp.set("v.enableWifi", !enableWifi);
 }
})