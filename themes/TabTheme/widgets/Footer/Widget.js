// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"themes/TabTheme/widgets/Footer/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:themes/TabTheme/widgets/Footer/Widget.html":'\x3cdiv class\x3d"jimu-widget-footer jimu-footer jimu-main-background" data-a11y-label-by\x3d"tab_foot_label tab_foot_desc"\x3e\r\n\t\x3cdiv class\x3d"screen-readers-only" data-a11y-label-id\x3d"tab_foot_label"\x3e${label}\x3c/div\x3e\r\n\t\x3cdiv class\x3d"footer-widget-copyright" data-a11y-label-id\x3d"tab_foot_desc"\x3e${nls.appCopyright}\x3c/div\x3e\r\n\x3c/div\x3e',
"url:themes/TabTheme/widgets/Footer/css/style.css":".jimu-widget-footer{height: 100%; overflow: hidden; margin-left: 0px; margin-top: 0; width: 100%; outline-offset: -2px !important;}.jimu-widget-footer .footer-widget-copyright{max-width: 800px; color:#fff; font-size: 12px; text-align: center; line-height: 24px; margin-left: auto; margin-right: auto;}","*now":function(a){a(['dojo/i18n!*preload*themes/TabTheme/widgets/Footer/nls/Widget*["ar","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]'])},
"*noref":1}});define(["dojo/_base/declare","jimu/BaseWidget"],function(a,b){return a([b],{postMixInProperties:function(){this.inherited(arguments);this.isRenderIdForAttrs=!0}})});