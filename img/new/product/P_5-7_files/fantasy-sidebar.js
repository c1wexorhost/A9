(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{237:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.i18n,i=t.atmSecurityToken,s=l.extend({attrs:{mods:{contact:{id:"contact",title:e["toolbar.contact.title"],hover_title:e["toolbar.contact.title"],popup_style:"balloon",domdot_id:3301,domdot_ext:"other=Toolbar-Contact",zone:"main",init:function(t){for(var o,n,a=f(".J-brief-info-key"),s=f(".J-brief-info-val"),r=a.length>s.length?s.length:a.length,c=[],l=0;l<r;l++)c.push({attrName:f.trim(a.eq(l).text()),attrValue:f.trim(s.eq(l).text())});var d=t.getPopupContainer();d.addClass("sidebar-contact-supplier-wrap"),t.ver?d.append('<div class="sidebar-pop-content-body"></div>'):(d.html('<div class="sidebar-pop-content-title">'.concat(e["toolbar.contact.title"],'<a href="javascript:void(0)" class="sidebar-contact-supplier-close" data-role="closeContactSupplier"></a></div><div class="sidebar-pop-content-body"></div>')),d.find("[data-role=closeContactSupplier]").on("click",(function(){t.close()})));var u=!/\.alibaba\.com$/.test(location.hostname);new p({umidToken:this.get("umidToken"),sourceID:this.get("detailId"),sourceID_f:this.get("detailEncryptId"),secATMId:this.get("contactEncryptId"),_csrf_token_:u?"":this.get("uniqueToken"),_host_token_:this.get("crossDomainToken"),language:(null===(o=window.currentLocale)||void 0===o||null===(n=o.toLocaleLowerCase())||void 0===n?void 0:n.replace("_","-"))||"en",mloca:"form_en_detail",container:d.find(".sidebar-pop-content-body"),domain:1,fobPriceContainer:"#J-fob-text",productAttrs:c,sidebar:t,chatToken:i})}},chat:{id:"chat",title:e["toolbar.chat.title"],hover_title:e["rightAction.chat"],popup_style:"none",domdot_id:3302,domdot_ext:"other=Toolbar-Chat",zone:"main",init:function(t){t.setIcon(f('<i class="side-ico-chat"></i>')),t.setIconHover(f('<i class="side-ico-hv-chat"></i>')),u(t,{uid:this.get("contactEncryptId"),pid:this.get("detailId"),bizId:this.get("detailId"),bizType:"1",from:"1_ATM",contactid:this.get("contactEncryptId"),contactname:this.get("contactName"),contactimg:this.get("photoUrl"),productid:this.get("detailId"),"is-new-webatm":!0,chatToken:i},(function(i){i=i||{},t.el.addClass("sidebar-chat"),"OFFLINE"===i.status&&(t.el.addClass(i.class),t.setTitleBoth("<div>".concat(e["toolbar.chat.offlineTitle"],"</div>")))}))}},survey:{id:"survey",title:"Survey",hover_title:e["intl-straw.merchantOnline.survey"],popup_style:"none",zone:"footer",priority:70,init:function(t){t.setIcon('<i class="side-ico-survey"></i>'),t.setIconHover('<i class="side-ico-hv-survey"></i>'),t.el.click((function(){var t;c&&c.dotstat(10570),window.open("https://survey.alibaba.com/apps/zhiliao/FhrIRFb6J?cna=".concat((t="cna",decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*".concat(encodeURIComponent(t).replace(/[\-\.\+\*]/g,"\\$&"),"\\s*\\=\\s*([^;]*).*$)|^.*$")),"$1"))||null),"&mbr_id=").concat(a.default.getMemberSeq()))}))}},gototop:{id:"gototop",title:"GotoTop",popup_style:"none",background_color:"#f8f9fd",zone:"footer",priority:800,init:function(t){t.setIconBoth('<i class="side-ico-gotop"></i>'),t.el.click((function(){c.dotstat(10569),f("html,body").animate({scrollTop:0},400)}))}},browsing:{id:"browsing",title:e["toolbar.browsing.title"],hover_title:e["toolbar.browsing.title"],popup_style:"fullsize",zone:"extra",priority:50,init:function(t){t.setIcon('<i class="side-ico-history"></i>'),t.setIconHover('<i class="side-ico-hv-history"></i>');var e=new d({detailId:this.get("detailId"),parentNode:t.getPopupContainer()});t.el.click((function(){m.show(),m.on("LOGIN_SUCCESS",(function(){e.render()}))}))}}},bartypes:{small:[0,1580],normal:[1580,-1]}},initialize:function(t){s.superclass.initialize.call(this,t),this.set("config",t);var e=this._sidebar=new h;this._addMods();var i=this.get("bartypes");e.initialize({bartypes:i,spm_data:"toolbar"})},_addMods:function(){var t=this.get("productIsMarketGoods"),e=this.get("mods")||{};for(var i in e)t&&"contact"===i||Object.hasOwnProperty.call(e,i)&&(e[i]&&e[i].init&&(e[i].init=e[i].init.bind(this)),this._sidebar.addModule(e[i]));window._toolbarReady=(new Date).getTime()}});return(0,o.useEffect)((function(){new s(t)}),[]),n.default.createElement(n.default.Fragment,null)};var o=i(0),n=r(o);i(641);var a=r(i(282)),s=r(i(642));function r(t){return t&&t.__esModule?t:{default:t}}var c=i(371),l=i(62),d=i(646),p=i(657),u=i(707),h=i(710),f=i(36);var m=new s.default({members:"both",locale:"en_US",align:{selfXY:["50%",-200],baseXY:["50%",0]}})},641:function(t,e,i){},646:function(t,e,i){"use strict";var o=i(36),n=i(298),a=i(269),s=i(651),r=i(652),c=i(654),l=i(655),d=i(656),p=a.extend({Implements:n,templateHelpers:c,attrs:{template:l,model:new r,totalItems:0,selectedItems:0,maxCount:20,listContainer:"[data-role=item-list]",selectAll:"[data-role=select-all]",selectItem:"input[name=id]",selectCount:"[data-role=selected-count]",totalCount:"[data-role=total-count]",contactBtn:"[data-role=contactSupplier]",feedbackTip:"[data-role=history-feedback]",feedbackContent:"[data-role=feedback-content]",fetchApi:"/event/app/toolbar/queryBrowseHistory.htm",deleteApi:"/event/app/toolbar/deleteBrowseHistory.htm",contactSupplierUrl:"//message.alibaba.com/msgsend/contact.htm?action=contact_action&domain=1&id={{ids}}&id_f={{idfs}}&mloca=main_en_detail_toolbarHistory",i18n:{value:s,setter:function(t){t=t||{};var e={},i=/^intl-\w+\./;for(var o in t){if(!i.test(o))return t;e[String(o).replace(i,"")]=t[o]}return e}},fetchError:{value:"",getter:function(){return(this.get("i18n")||{})["widget.commonToolbar.history.fetchError"]}},removeError:{value:"",getter:function(){return(this.get("i18n")||{})["widget.commonToolbar.history.removeError"]}}},events:{"change [data-role=select-all]":"selectAll","change input[name=id]":"selectItem","click [data-role=clear-selected]":"clearSelected","click [data-role=contactSupplier]":"contactSupplier"},initialize:function(){var t=this;this.after("initAttrs",(function(){t.get("model").set({detailId:this.get("detailId"),maxCount:this.get("maxCount"),fetchApi:this.get("fetchApi"),deleteApi:this.get("deleteApi"),i18n:this.get("i18n")},{silent:!0})})),p.superclass.initialize.apply(this,arguments)},setup:function(){var t=this;this.on("change:selectedItems",this.updateSelectedNum.bind(this));var e=this.get("model");e.on("change",(function(e){e=e||{},t.set("totalItems",e.totalCount),t.set("selectedItems",0),t.renderItemList({productBrowseHistory:e})})),this.after("render",(function(){e.find().fail((function(){t.showError(t.get("fetchError"),-1)}))}))},renderItemList:function(){var t=this.compile(d);this.$(this.get("listContainer")).html(t)},selectAll:function(t){var e=o(t.currentTarget).prop("checked"),i=e?this.get("totalItems"):0;this.$(this.get("selectItem")).prop("checked",e),this.set("selectedItems",i)},selectItem:function(t){var e=this.get("selectedItems");e=o(t.currentTarget).prop("checked")?e+1:e-1,this.set("selectedItems",e)},updateSelectedNum:function(t){var e=this.$(this.get("selectCount")),i=this.$(this.get("selectAll")),o=this.$(this.get("contactBtn"));e.html(t),t&&t==this.get("totalItems")?i.prop("checked",!0):i.prop("checked",!1),t>0?o.removeClass("disabled").removeAttr("disabled"):o.addClass("disabled").attr("disabled","disabled")},clearSelected:function(){var t=[],e=this;this.$(this.get("selectItem")).filter(":checked").each((function(){t.push(o(this).val())})),t.length&&this.get("model").remove(t).fail((function(){e.showError(e.get("removeError"))}))},contactSupplier:function(){var t=[],e=[];this.$(this.get("selectItem")).filter(":checked").each((function(){var i=o(this);t.push(i.val()),e.push(i.data("idf"))}));var i=this.compile(this.get("contactSupplierUrl"),{ids:t.join(),idfs:e.join()});window.open(i)},showError:function(t,e){if(t){var i=this.$(this.get("feedbackTip"));if(i.find(this.get("feedbackContent")).html(t),i.show(),e<0)return;setTimeout((function(){i.animate({opacity:0},1e3,(function(){i.css("opacity",1),i.hide()}))}),Number(e)||2e3)}}});t.exports=p},651:function(t,e,i){"use strict";t.exports={"widget.commonToolbar.history.latestRecords":"Latest 20 records","widget.commonToolbar.history.clearSelection":"Clear","widget.commonToolbar.history.contactSupplier":"Contact Supplier","widget.commonToolbar.history.fobPrice":"FOB Price","widget.commonToolbar.history.noData":"Sorry, no browsing history yet!","widget.commonToolbar.history.selectAll":"All","widget.commonToolbar.history.fetchError":"Items load failed, you can try again later.","widget.commonToolbar.history.removeError":"Items remove failed, you can try again later."}},652:function(t,e,i){"use strict";var o=a(i(653)),n=a(i(282));function a(t){return t&&t.__esModule?t:{default:t}}function s(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return r(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}var c=i(62),l=i(36);var d=function(){return(0,o.default)("mtop.alibaba.intl.buyer.base.history.product",{buyerKey:n.default.getMemberId(),extendsId:n.default.getMemberId(),language:n.default.getBuyerLocale().split(/[_-]/)[0],pageSize:10})},p=c.extend({attrs:{productBrowseHistory:null,maxCount:0,i18n:{},detailId:"",fetchApi:"",deleteApi:""},initialize:function(t){p.superclass.initialize.call(this,t);var e=this;this.on("change:productBrowseHistory",(function(t){e.trigger("change",l.extend(!0,{},t))}))},find:function(){var t=this,e=l.Deferred(),i=[d(),d()];return Promise.all(i).then((function(i){if(i.length>0){var o,n,a=i.map((function(t){if(200===Number(t.code))return s(t.data)}));t.set("productBrowseHistory",(o=[]).concat.apply(o,s(a)),{override:!0}),e.resolve(l.extend(!0,{},(n=[]).concat.apply(n,s(a))))}else e.reject(i)})),e.promise()},remove:function(t){var e=this,i=l.Deferred();return this.find().then((function(){e._remove(t).then((function(t){i.resolve(t)}),(function(t){i.reject(t)}))})),i.promise()},_remove:function(t){var e=this,i=l.extend(!0,{},this.get("productBrowseHistory")),a=l.Deferred();if(!t)return a.resolve(i);t=[].concat(t);var s=i||[],r=[],c=[];return l.each(s,(function(e,i){var o,n,a,s=Number(i.productId)||i.productId;i&&(o=s,n=t,a=!1,l.each(n,(function(){if(o==this)return a=!0,!1})),!a)&&(c.push(s),r.push(i))})),(0,o.default)("mtop.alibaba.intl.buyer.base.history.product.delete",{buyerKey:n.default.getMemberId(),extendsId:n.default.getMemberId(),prodIdList:t.join(",")}).then((function(t){var i=t.code;200===Number(i)?(e.set("productBrowseHistory",r,{override:!0}),a.resolve(l.extend(!0,{},r))):a.reject(t)})),a.promise()},toJSON:function(){var t={};for(var e in this.attrs)this.attrs.hasOwnProperty(e)&&(t[e]=this.get(e));return t}});t.exports=p},653:function(t,e,i){"use strict";function o(t,e,i,o,n,a,s){try{var r=t[a](s),c=r.value}catch(t){return void i(t)}r.done?e(c):Promise.resolve(c).then(o,n)}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t,e=(t=regeneratorRuntime.mark((function t(e,i){var o,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return window.lib.mtop.config.prefix="acs",window.location.href.indexOf("taobao")>0?(window.lib.mtop.config.subDomain="wapa",window.lib.mtop.config.mainDomain="taobao.com"):(window.lib.mtop.config.subDomain="m",window.lib.mtop.config.mainDomain="alibaba.com"),t.next=4,window.lib.mtop.request({api:e,v:"1.0",H5Request:!0,data:JSON.stringify(i),appKey:"24889839",ecode:0});case 4:return o=t.sent,n=o.data,t.abrupt("return",n.target||n);case 7:case"end":return t.stop()}}),t)})),function(){var e=this,i=arguments;return new Promise((function(n,a){var s=t.apply(e,i);function r(t){o(s,n,a,r,c,"next",t)}function c(t){o(s,n,a,r,c,"throw",t)}r(void 0)}))});return function(t,i){return e.apply(this,arguments)}}();e.default=n},654:function(t,e,i){"use strict";t.exports={sidebar_getValue:function(t,e){return(t||{})[e]||""}}},655:function(t,e){t.exports='<div class="sidebar-history">\n    <div class="history-header util-clearfix">\n        <div class="select-all-box ui2-checkbox ui2-checkbox-system util-left">\n            <label class="ui2-checkbox-system-label">\n                <input class="ui2-checkbox-system-val" type="checkbox" data-role="select-all">\n                <span class="ui2-checkbox-system-txt">{{sidebar_getValue i18n "widget.commonToolbar.history.selectAll"}}</span>\n            </label>\n        </div>\n        <a href="javascript:;" class="ui2-button ui2-button-link link-normal util-left" data-role="clear-selected">{{sidebar_getValue i18n "widget.commonToolbar.history.clearSelection"}}</a>\n    </div>\n    <div class="history-list" data-role="item-list"></div>\n    <div class="history-footer">\n        <button class="ui2-button ui2-button-primary ui2-button-medium disabled contact-button" disabled data-role="contactSupplier" data-domdot="id:3301,ext:\'other=history\'">{{sidebar_getValue i18n "widget.commonToolbar.history.contactSupplier"}}</button>\n    </div>\n    <div class="history-feedback ui2-feedback ui2-feedback-small ui2-feedback-error ui2-feedback-hasbg" data-role="history-feedback">\n        <i class="ui2-icon ui2-icon-error"></i>\n        <div class="ui2-feedback-content" data-role="feedback-content"></div>\n    </div>\n</div>\n'},656:function(t,e){t.exports='{{#if productBrowseHistory.length}}\n<div class="product-items">\n    {{#each productBrowseHistory}}\n    <div class="product-item util-clearfix">\n        <div class="selector util-left">\n            <input type="checkbox" name="id" value="{{productId}}" data-idf="{{productSecurityId}}" />\n        </div>\n        <div class="product-image util-valign util-left">\n            <a class="util-valign-ctn" href="{{productUrl}}" target="_blank" title="{{title}}">\n                {{#if image}}\n                <img class="util-valign-inner" src="{{image}}" />\n                {{else}}\n                <img class="util-valign-inner" src="//is.alicdn.com/images/eng/no_photo_w250h250.gif" />\n                {{/if}}\n            </a>\n        </div>\n        <div class="product-info-wrap util-left">\n            <div class="product-name">\n                <a href="{{productUrl}}" class="link-normal" target="_blank" title="{{title}}">\n                    {{title}}\n                </a>\n            </div>\n            {{#if price}}\n            <div class="product-price">\n                {{price}}\n            </div>\n            {{/if}}\n            {{#if minOrder}}\n            <div class="product-min-order">\n                <span class="min-order-count">{{minOrder}}</span>\n            </div>\n            {{/if}}\n        </div>\n    </div>\n    {{/each}}\n</div>\n{{else}}\n<div class="no-data">\n    {{sidebar_getValue i18n "widget.commonToolbar.history.noData"}}\n</div>\n{{/if}}\n'},707:function(t,e,i){"use strict";var o=i(36),n=i(864).default,a=i(709),s="".concat(location.protocol,"//atmgateway-client.alibaba.com/atmgateway/get_portrait.htm?memberId="),r=/^(?:1_GLP|1_ATM|1_ZTC|1_SO_GLP|1_SO_ATM|2_P_SO_ATM|2_WB_DETAIL|2_ATM_DETAIL|1_GLOBAL_ATM)$/,c=/^(?:2_GLP|2_ATM|2_ZD|2_SO_GLP|2_SO_ATM|2_P_SO_GLP|2_ZTC|2_WB_COMPANY|2_GLOBAL_ATM)$/;t.exports=function(t,e,i){var l=t.el;for(var d in e)l.attr("data-".concat(d),e[d]);l.attr("id","sidebar-chat-now");var p,u,h,f,m="";e.pid_f?(p=e.from,u=e.pid,h=e.pid_f,f=0,r.test(p)&&(p="1"),c.test(p)&&(p="2"),m="0"===p?"".concat(location.protocol,"//message.alibaba.com/msgsend/contact.htm?action=contact_action&req_page=feedback.init&domain=0&tracelog=tmofflinefeedback0610&id=").concat(u,"&id_f=").concat(h):"100"===p?"".concat(location.protocol,"//message.alibaba.com/msgsend/contact.htm?action=contact_action&chkContactIds=").concat(u,"&chkContactIds_f=").concat(h):1===f?"".concat(location.protocol,"//message.alibaba.com/msgsend/contact.htm?action=contact_action&req_page=feedback.init&domain=").concat(p,"&tracelog=tmofflinefeedback0610&id=").concat(u,"&isWholesale=1&id_f=").concat(h):"".concat(location.protocol,"//message.alibaba.com/msgsend/contact.htm?action=contact_action&req_page=feedback.init&domain=").concat(p,"&tracelog=tmofflinefeedback0610&id=").concat(u,"&id_f=").concat(h)):m=function(t,e,i){return r.test(t)&&(t="1"),c.test(t)&&(t="2"),"0"===t?"".concat(location.protocol,"//message.alibaba.com/msgsend/contact.htm?action=contact_action&req_page=feedback.init&domain=0&tracelog=tmofflinefeedback0610&id=").concat(e):"100"===t?"".concat(location.protocol,"//message.alibaba.com/msgsend/contact.htm?action=contact_action&chkContactIds=").concat(e):1===i?"".concat(location.protocol,"//message.alibaba.com/msgsend/contact.htm?action=contact_action&req_page=feedback.init&domain=").concat(t,"&tracelog=tmofflinefeedback0610&id=").concat(e,"&isWholesale=1"):"".concat(location.protocol,"//message.alibaba.com/msgsend/contact.htm?action=contact_action&req_page=feedback.init&domain=").concat(t,"&tracelog=tmofflinefeedback0610&id=").concat(e)}(e.from,e.pid,0),l.attr("data-supplier-url",m),l.attr("data-sceneType","detail"),function(t,e,i){var n=new Image;n.src=s+encodeURIComponent(e),n.onload=function(){var e="sidebar-chat-head";i&&(e+=" offline");var a='<img class="'.concat(e,'" src="').concat(n.src,'">');t.setIcon(o(a)),t.setIconHover(o(a)),n=null}}(t,e.uid,!1),a.isFunction(i)&&i(),n.renderList(l,{scene:{fromPage:"product_detail",bizType:"sidebar"}})}},710:function(t,e,i){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var n=i(36),a=i(39),s=function(t){if("rtl"===n("html").attr("dir"))switch(t){case"left":return"right";case"right":return"left";default:return t}return t},r=function(){};r.prototype={initAttrs:function(t){this._attrs=n.extend({},this.attrs,t||{})},get:function(t){return this._attrs[t]},set:function(t,e){this._attrs[t]=e},inited:!1,modulesConfig:[],attrs:{css:"",bartypes:{small:[0,1231],normal:[1232,-1],bottom:!1},rtlClass:".ns-biz-ml-rtl",spm_data:"",fixSidebarType:"",_typeFixed:!1,_hasPoped:!1,_type:"",_status:"close",_activeMod:null,_ver:1,defaultShowPopup:!1},_domRender:function(){if(!this._el){this._el=n('<div id="J-ali-sidebar" '.concat(""==this.get("spm_data")?"":'data-spm="'.concat(this.get("spm_data"),'"'),' class="clearfix">')+'<div class="sidebar-middle"><div class="sidebar-main"></div><div class="sidebar-extra"></div></div><div class="sidebar-footer"></div></div>'),this._el_middle=this._el.find(".sidebar-middle"),this._el_main=this._el.find(".sidebar-main"),this._el_extra=this._el.find(".sidebar-extra"),this._el_footer=this._el.find(".sidebar-footer"),n(this.get("rtlClass")).length>0&&this._el.addClass("side-rtl");var t=n(this.get("container"));t=t.length?t:n("body"),this._el.appendTo(t)}},_initBodyClick:function(t){n("body").bind("click",(function(e){if("popup"==t.get("_status")&&!n(e.target).closest("#J-ali-sidebar").length){var i=t.get("_activeMod");if(i){if(i.blur_ignore&&n(e.target).closest(i.blur_ignore).length)return;i.trigger("close",i)}}}))},_getHeadCfg:function(){return{id:"sidebar_header_btn",popup_style:"none",zone:"header",init:function(t){switch(t.getSidebarType()){case"small":t.setIcon(n('<i class="side-ico-expand"></i>')),t.setIconHover(n('<i class="side-ico-hv-expand"></i>'));break;case"normal":t.setIcon(n('<i class="side-ico-collapse"></i>')),t.setIconHover(n('<i class="side-ico-hv-collapse"></i>'))}t.on("typeChange",(function(e){switch(e){case"small":t.setIcon(n('<i class="side-ico-expand"></i>')),t.setIconHover(n('<i class="side-ico-hv-expand"></i>'));break;case"normal":t.setIcon(n('<i class="side-ico-collapse"></i>')),t.setIconHover(n('<i class="side-ico-hv-collapse"></i>'))}})),t.on("click",(function(){"popup"==t.status?t.setSidebarType("normal"):"close"==t.status&&t.setSidebarType("small")}))}}},_initMod:function(t){var e=this;t.status="close",t._firstPop=!1,t.popup_style=t.popup_style||"none",t._inited=!1,t.domdot_ext=t.domdot_ext||"",a.mixTo(t),t.on("click",this._itemClick.bind(this)),t.el.on("click",(function(){e._dotstat("event=click|mod=".concat(t.id,"|status=").concat(t.status,"|").concat(t.domdot_ext),t.domdot_id),t.trigger("click",t)})),t.on("close",this._itemClose.bind(this)),t.on("popup",this._itemPopup.bind(this)),t.on("popupPositionChange",this._renewPopupPosition.bind(t)),t.el.on("mouseover",(function(){t.trigger("mouseover",t)})),t.el.on("mouseout",(function(){t.trigger("mouseout",t)})),t.setSidebarType=function(t){e.set("_typeFixed",!0),e._setBarType(t)},t.setIcon=function(e){var i=t.el.find(".sidebar-mod-icon-def"),o=n(e).clone();return i.empty(),i.append(o),o},t.setIconHover=function(e){var i=t.el.find(".sidebar-mod-icon-hover"),o=n(e).clone();return i.empty(),i.append(o),o},t.setIconBoth=function(e){return[t.setIcon(e),t.setIconHover(e)]},t.setTitle=function(e){var i=t.el.find(".sidebar-mod-name"),o=n(e).clone();return i.empty(),i.append(o),o},t.setTitleHover=function(e){var i=t.el.find(".sidebar-mod-hover-name"),o=n(e).clone();return i.empty(),i.append(o),o},t.setTitleBoth=function(e){return[t.setTitle(e),t.setTitleHover(e)]},t.getSidebarType=function(){return e.get("_type")},t.getIconContainer=function(){return t.el.find(".sidebar-icon")},t.getPopupContainer=function(){return t.popel},t.getModContainer=function(){return t.el},t.showMsgSign=function(e){var i=t.el.find(".sidebar-mod-icon-reddot");if(e>0){e=e>99?99:e;var o=n('<span class="dot-number"></span>').html(e);i.html(o).addClass("reddot-with-number")}i.show()},t.clearMsgSign=function(){t.el.find(".sidebar-mod-icon-reddot").removeClass("reddot-with-number").hide()},t.renewPopupPosition=function(){e._renewPopupPosition(t)},t.close=function(){e._itemClose(t)},t.popup=function(){e._itemPopup(t)},t.sendMsg=function(t,i,o){var n=e._getMod(t);n&&n.trigger(i,o)},t.getScreenRect=function(){var t={top:0,right:0,bottom:0,left:0},i=e.getScrollPos();return t.top=i.top,t.right=i.left+n(window).width(),t.bottom=i.top+n(window).height(),t.left=i.left,t},t.getPosition=function(){var e=t.getScreenRect(),i=t.el.offset();return i.viewtop=i.top,i.viewleft=i.left,i.top=i.viewtop-e.top,i.left=i.viewleft-e.left,i.width=t.el.outerWidth(),i.height=t.el.outerHeight(),i.viewrect=e,i},"balloon"==t.popup_style?t.popel.find(".sidebar-balloon-close").click((function(){t.trigger("close",t)})):"fullsize"==t.popup_style&&t.popel.find(".sidebar-fullsize-close").click((function(){t.trigger("close",t)})),t._init=function(i){t.ver=e.get("_ver"),t.init&&t.init(t,i),e._handleDrag()},this._mods.push(t),t.defaultShowPopup&&this._itemClick(t)},_getMod:function(t){var e;for(e=this._mods.length-1;e>=0;e--)if(this._mods[e].id==t)return this._mods[e]},_callModsInit:function(){var t,e;for(t=this._mods.length-1;t>=0;t--)(e=this._mods[t])._inited||(e.async_mod?i(711).async(e.async_mod,e._init):(e.init&&e.init(e),this._handleDrag()),e._inited=!0)},_renewPopupPosition:function(t){var e=(t=t||this).getScreenRect(),i=t.getPosition(),o=t.getSidebarType();if(t.popel)if("bottom"!=o){if(t.el.parents(".ns-biz-ml-rtl").length>0?(t.popel.css(s("left"),"".concat(i.width,"px")),t.popel.css(s("right"),"auto")):(t.popel.css(s("right"),"".concat(i.width,"px")),t.popel.css(s("left"),"auto")),"balloon"==t.popup_style){var n=0;t.balloon_offset&&t.balloon_offset[t.getSidebarType()]&&(n=t.balloon_offset[t.getSidebarType()][1]),e.bottom-i.viewtop>t.popel.outerHeight()+n?(n+=i.top,t.popel.css("top","".concat(n,"px")),t.popel.css("bottom","auto")):(t.popel.css("top","auto"),t.popel.css("bottom","0px"))}}else{var a=i.viewrect.bottom-i.viewtop;if(t.popel.css("bottom","".concat(a,"px")),"balloon"==t.popup_style){var r=i.viewrect.right-i.viewrect.left-(t.popel.outerWidth()/2+i.width/2+i.viewleft);r>0?t.popel.css("right","".concat(r,"px")):t.popel.css("right","0px")}}},_itemClick:function(t){"popup"==t.status?t.trigger("close",t):"close"==t.status&&t.trigger("popup",t)},_itemClose:function(t){t.status="close","none"!=t.popup_style&&(t.el.removeClass("sidebar-popup"),t.el.removeClass(t.popup_style),t.el.removeClass("withtitle"),t!==this.get("_activeMod")&&null!==this.get("_activeMod")||this.set("_status","close"),t.popel.hide()),t&&t.onClose&&"function"==typeof t.onClose&&t.onClose(t)},_itemPopup:function(t){if(t.status="popup","none"!=t.popup_style){t.el.addClass("sidebar-popup"),t.el.addClass(t.popup_style),t.popup_need_title&&t.el.addClass("withtitle");var e=this.get("_activeMod");this.set("_activeMod",t),"popup"==this.get("_status")&&t!==e&&null!==e&&e.trigger("close",e),this.set("_status","popup"),t.popel.show(),"balloon"==t.popup_style&&t.trigger("popupPositionChange"),t._firstPop||(t._firstPop=!0,t.trigger("firstPopup"))}t&&t.onPopup&&"function"==typeof t.onPopup&&t.onPopup(t)},_insertItem:function(t,e,i){for(var o,n=t.children(),a=0,s=n.length;a<s;a++)if((o=n.eq(a).filter("[data-priority]").attr("data-priority")||n.eq(a).find("[data-priority]").attr("data-priority"))&&o>e)return void n.eq(a).before(i);i.appendTo(t)},_renderItems:function(t,e){var i,o,a;for(i=0,o=t.length;i<o;i++){switch((a=t[i]).priority=a.priority||100*(e+i),a.el=this._getItemWrap(a),a.zone){case"extra":this._insertItem(this._el_extra,a.priority,a.el);break;case"footer":this._insertItem(this._el_footer,a.priority,a.el);break;case"main":this._insertItem(this._el_main,a.priority,a.el)}!1!==a.popup_need_title&&(a.popup_need_title=!0),"balloon"==t[i].popup_style?(a.popel=n('<div class="sidebar-popup-container sidebar-balloon" style="display:none;"></div>'),a.popel_title=n('<div class="sidebar-balloon-title"><span>'.concat(t[i].title,'</span><i class="sidebar-balloon-close"></i></div>')),a.popup_need_title&&a.popel.append(a.popel_title),this._el.append(a.popel)):"fullsize"==t[i].popup_style&&(a.popel=n('<div class="sidebar-popup-container sidebar-fullsize" style="display:none;"></div>'),a.popel_title=n('<div class="sidebar-fullsize-title"><span>'.concat(t[i].title,'</span><i class="sidebar-fullsize-close"></i></div>')),a.popup_need_title&&a.popel.append(a.popel_title),this._el.append(a.popel)),this._initMod(a)}},_getItemWrap:function(t){var e="";void 0!==t.background_color&&("bottom"!=this._getBarType()?e+="background-color:".concat(t.background_color,";left:0;right:0;width:100%;"):e+="background-color:".concat(t.background_color,";top:0;height:30px;padding-top:0;")),void 0!==t.inline_css&&(e+=t.inline_css);var i=n('<div class="sidebar-module" '.concat(""==e?"":'style="'.concat(e,'"'),' data-priority="').concat(t.priority||0,'"></div>'));e="",void 0!==t.arr_inline_css&&(e+=t.arr_inline_css);var a=n('<i class="sidebar-arr" '.concat(""==e?"":'style="'.concat(e,'"'),"></i>"));i.append(a);var s=n('<div class="sidebar-icon"></div>');if(s.append(n('<div class="sidebar-mod-icon-def"><i class="side-ico-dummy"></i></div>')),s.append(n('<div class="sidebar-mod-icon-hover"><i class="side-ico-dummy"></i></div>')),"object"===o(t.msg_sign)?s.append(t.msg_sign):"string"==typeof t.msg_sign?s.append(n(t.msg_sign)):s.append(n('<div class="sidebar-mod-icon-reddot"></div>')),i.append(s),t.title){var r=n('<div class="sidebar-mod-name">'.concat(t.title||"","</div>"));i.append(r)}if(t.hover_title){var c=n('<div class="sidebar-mod-hover-name">'.concat(t.hover_title,"</div>"));i.append(c)}return i},_getBarType:function(){var t,e=n(window).width(),i=this.get("bartypes");if(1==i.bottom)return"bottom";for(t in i)if(e>i[t][0]&&(e<i[t][1]||i[t][1]<0))return t;return"normal"},_setBorderTop:function(t,e){"none"==e?t.css("border-top","none"):t.css("border-top","1px solid ".concat(e))},_triggerItem:function(t,e){for(var i=0;i<this._mods.length;i++)this._mods[i].trigger(t,e)},_getZoneModNumber:function(t){for(var e=this.modulesConfig,i=0,o=e.length-1;o>=0;o--)e[o].zone==t&&i++;return i},_setBarType:function(t){n(window).height();switch(this._el.removeClass("bar-normal"),this._el.removeClass("bar-small"),this._el.removeClass("bar-bottom"),this._el_middle.css("margin-top","0"),this._setBorderTop(this._el_extra,"none"),t){case"normal":case"small":this._el.addClass("bar-small"),this._getZoneModNumber("main")>0&&this._getZoneModNumber("extra")>0&&this._setBorderTop(this._el_extra,"#dae2ed");break;case"bottom":this._el.addClass("bar-bottom");break;default:this._el.addClass("bar-".concat(t))}this.get("_type")!=t&&(this._triggerItem("typeChange",t),this.set("_type",t)),this.get("_activeMod")&&this.get("_activeMod").trigger("popupPositionChange")},_handleDrag:function(){this.get("_typeFixed")?this._setBarType(this.get("_type")):this._setBarType(this._getBarType()),this.get("_activeMod")&&this.get("_activeMod").trigger("popupPositionChange")},_isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},_dotstat:function(t,e){var i=e||24269,o="ext=";window.dmtrack&&0!=i&&(o+="bartype=".concat(this.get("_type")),t&&(o+="|".concat(t)),dmtrack.dotstat(i,o))},getScrollPos:function(){var t=n(window);return{left:t.scrollLeft(),top:t.scrollTop()}},initialize:function(t){var e=this;if(this.initAttrs(t),!this.inited){this._mods=[],this._domRender(),this._initBodyClick(this),n(window).resize((function(t){e._handleDrag()})),this.inited=!0;var i=this.get("fixSidebarType");i?(this.set("_typeFixed",!0),this._setBarType(i)):this.addModule(this._getHeadCfg(),!0),this._dotstat("event=showbar")}},addModule:function(t,e){var i,o,n,a=[];e=e||!1;for(this._isArray(t)||(t=[t]),i=t.length-1;i>=0;i--){var s=t[i];for(o=(n=this.modulesConfig).length-1;o>=0&&n[o].id!=s.id;o--);o<0&&(a.push(s),this.modulesConfig.push(s))}e?(this._renderItems(this.modulesConfig,1),this._callModsInit()):this.inited&&(this._renderItems(a,this.modulesConfig.length-a.length),this._callModsInit())}},t.exports=r},711:function(t,e){function i(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}i.keys=function(){return[]},i.resolve=i,t.exports=i,i.id=711}}]);