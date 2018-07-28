/*
jQWidgets v6.0.0 (2018-July)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

(function(a){a.jqx.jqxWidget("jqxPasswordInput","",{});a.extend(a.jqx._jqxPasswordInput.prototype,{defineInstance:function(){var b={width:null,height:null,disabled:false,rtl:false,placeHolder:null,showStrength:false,showStrengthPosition:"right",maxLength:null,minLength:null,showPasswordIcon:true,strengthTypeRenderer:null,passwordStrength:null,changeType:null,hint:true,localization:{passwordStrengthString:"Password strength",tooShort:"Too short",weak:"Weak",fair:"Fair",good:"Good",strong:"Strong",showPasswordString:"Show Password"},strengthColors:{tooShort:"rgb(170, 0, 51)",weak:"rgb(170, 0, 51)",fair:"rgb(255, 204, 51)",good:"rgb(45, 152, 243)",strong:"rgb(118, 194, 97)"}};if(this===a.jqx._jqxPasswordInput.prototype){return b}a.extend(true,this,b);return b},createInstance:function(){var b=this;b._inDOM=document.body.contains(b.element);b.render()},render:function(){var e=this;var d=a.jqx.browser.browser;var g=a.jqx.browser.version;this._browserCheck=d!="msie"||(g!="7.0"&&g!="8.0");this.widgetID=e.element.id;var b="Invalid input type. Please set the type attribute of the input element to password.";if(this.element.getAttribute("type")!="password"){throw b}this.input=this.element;if(e.isMaterialized()){var j=a("<div></div>");j.addClass(e.toThemeProperty("jqx-input-group"));this.host.after(j);var i=this.element;var c=this.host.data();j.append(i);var h=a("<label></label");if(this.hint){h[0].innerHTML=this.placeHolder}h.addClass(e.toThemeProperty("jqx-input-label"));j.append(h);var f=a("<span></span>");j.append(f);f.addClass(e.toThemeProperty("jqx-input-bar"));j[0].id=this.element.id;this.element.removeAttribute("id");j[0].style=this.element.style;e.input=e.element;this.element.style="";this.bar=f;this.label=h;this.host=j;this.element=j[0];this.host.data(c);var e=this;if(e.template){e.bar.addClass(e.toThemeProperty("jqx-"+e.template));e.label.addClass(e.toThemeProperty("jqx-"+e.template))}}e._hidden=true;e._setTheme();e._setAttributes();e._showPassword();e._showStrength();a.jqx.utilities.resize(this.host,function(){if(!e._inDOM){var k=e.element.parentNode;if(e.element.nextSibling){k.insertBefore(e.icon,e.element.nextSibling)}else{k.appendChild(e.icon)}e._inDOM=true;return}if(e.element===document.activeElement||e.isMaterialized()){e._positionIcon();if(e.showStrength){e.host.jqxTooltip("close")}}})},refresh:function(c){var b=this;if(c){return}b.removeHandler(b.host,"change.passwordinput"+b.widgetID);b.removeHandler(b.host,"focus.passwordinput"+b.widgetID);b.removeHandler(b.host,"blur.passwordinput"+b.widgetID);b.removeHandler(b.host,"click.passwordinput"+b.widgetID);b.removeHandler(b.host,"keyup.passwordinput"+b.widgetID);b.removeHandler(b.icon,"mousedown.passwordinput"+b.widgetID);b.removeHandler(a(document),"mouseup.passwordinput"+b.widgetID);b.removeHandler(a(document),"mousedown.passwordinput"+b.widgetID);b._setAttributes();b._setTheme();b._showPassword();b._showStrength()},val:function(d){var c=this,e=c.input.value,b="placeholder" in c.input;if(a.isEmptyObject(d)&&d!==""){if(!b&&e===c.placeHolder){e=""}return e}else{if(b&&d===e){return}if(!b){if(d===""){if(e!==c.placeHolder){c.input.value=c.placeHolder;c.input.setAttribute("type","text")}return}else{c.input.setAttribute("type","password")}}c.input.value=d;if(c.showStrength===true){c._evaluateStrength()}}},propertyChangedHandler:function(b,c,e,d){if(c==="theme"){a.jqx.utilities.setTheme(e,d,b.host);return}if(c=="disabled"){if(b.disabled){b.element.setAttribute("disabled","disabled");b.element.className+=" "+b.toThemeProperty("jqx-fill-state-disabled")}else{b.host.removeAttr("disabled");b.host.removeClass(b.toThemeProperty("jqx-fill-state-disabled"))}return}if(c=="placeHolder"){if(this._browserCheck){if("placeholder" in this.element){b.element.setAttribute("placeholder",b.placeHolder)}else{if(b.input.value===""){b.input.setAttribute("type","text");b.input.value=d}else{if(b.input.value==e){b.input.value=d}}}}}else{this.refresh()}},resize:function(c,b){this.width=c;this.height=b;if(this.width!=null&&this.width.toString().indexOf("px")!=-1){this.element.style.width=this.width}else{if(this.width!=undefined&&!isNaN(this.width)){this.element.style.width=this.width+"px"}}if(this.height!=null&&this.height.toString().indexOf("px")!=-1){this.element.style.height=this.height}else{if(this.height!=undefined&&!isNaN(this.height)){this.element.style.height=this.height+"px"}}},_setAttributes:function(){var b=this;var c=b.element;if(this.width!=null&&this.width.toString().indexOf("px")!=-1){this.element.style.width=this.width}else{if(this.width!=undefined&&!isNaN(this.width)){this.element.style.width=this.width+"px"}}if(this.height!=null&&this.height.toString().indexOf("px")!=-1){this.element.style.height=this.height}else{if(this.height!=undefined&&!isNaN(this.height)){this.element.style.height=this.height+"px"}}if(this.height!=null&&this.height.toString().indexOf("%")!=-1){this.element.style.height=this.height}if(this.width!=null&&this.width.toString().indexOf("%")!=-1){this.element.style.width=this.width}if(b.maxLength){c.setAttribute("maxlength",b.maxLength)}if(b.minLength){c.setAttribute("minLength",b.minLength)}if(b.placeHolder&&b._browserCheck){if("placeholder" in b.element){c.setAttribute("placeholder",b.placeHolder)}else{if(c.value===""){c.setAttribute("type","text");c.value=b.placeHolder}}}if(b.disabled){c.setAttribute("disabled","disabled");c.className+=" "+this.toThemeProperty("jqx-fill-state-disabled")}else{c.removeAttribute("disabled");b.host.removeClass(b.toThemeProperty("jqx-fill-state-disabled"))}var d=false;b.addHandler(c,"change.passwordinput"+b.widgetID,function(e){if(!d){e.preventDefault();e.stopPropagation();d=true;b._raiseEvent();d=false}b._refreshPlaceHolder()});b.addHandler(c,"click.passwordinput"+b.widgetID,function(){if(b.showPasswordIcon&&b.icon){b.icon.style.display="inline";b._positionIcon()}});b.interval=null;b.addHandler(c,"keydown.passwordinput"+b.widgetID,function(){b.changeType="keyboard";if(b.showPasswordIcon&&b.icon){if(b.interval){clearInterval(b.interval)}var e=0;b.interval=setInterval(function(){if(b.icon.style.display!="none"){b._positionIcon();e++;if(e>5){clearInterval(b.interval)}}else{clearInterval(b.interval)}},100)}});b.addHandler(c,"focus.passwordinput"+b.widgetID,function(){b._focused=true;c.className+=" "+b.toThemeProperty("jqx-fill-state-focus");if(b.placeHolder&&b._browserCheck&&!("placeholder" in b.element)&&c.value==b.placeHolder){c.value="";if(b._hidden){c.setAttribute("type","password")}}if(b.val().length>0){if(b.showStrength){var e=b.host.jqxTooltip("content");if(e){b.host.jqxTooltip("open")}}}if(b.showPasswordIcon&&b.icon){b.icon.style.display="inline";b._positionIcon()}});b.addHandler(c,"blur.passwordinput"+b.widgetID,function(){b._focused=false;b.host.removeClass(b.toThemeProperty("jqx-fill-state-focus"));if(b.placeHolder&&b._browserCheck&&!("placeholder" in b.input)&&c.value===""){b.input.value=b.placeHolder;b.input.setAttribute("type","text")}if(b.showPasswordIcon&&b._browserCheck){if(b.rtl===false){b.host.removeClass(b.toThemeProperty("jqx-passwordinput-password-icon-ltr"))}else{b.host.removeClass(b.toThemeProperty("jqx-passwordinput-password-icon-rtl"))}}if(b.showStrength){b.host.jqxTooltip("close")}if(b.showPasswordIcon&&b.icon){b.icon.style.display="none"}})},_refreshPlaceHolder:function(){var b=this;if(!b.isMaterialized()){if("placeholder" in this.input&&!(a.jqx.browser.msie&&a.jqx.browser.version<9)){b.input.setAttribute("placeHolder",b.placeHolder)}else{if(b.input.value===""){b.input.value=b.placeHolder}}}if(b.input.value!==""){b.element.setAttribute("hint",true)}else{b.element.removeAttribute("hint")}if(b.label){b.label.innerHTML=b.placeHolder}},destroy:function(){if(this.host.jqxTooltip){this.host.jqxTooltip("destroy")}this.host.remove()},_setTheme:function(){var c=this,b="jqx-widget jqx-widget-content jqx-input jqx-input-widget jqx-rc-all";if(c.rtl){b+=" jqx-rtl";c.element.style.direction="rtl"}else{c.host.removeClass(c.toThemeProperty("jqx-rtl"));c.element.style.direction="ltr"}c.element.className+=" "+c.toThemeProperty(b)},_showPassword:function(){if(this.showPasswordIcon&&this._browserCheck){var h=this,g=document.createElement("span"),d=".passwordinput"+h.widgetID;g.setAttribute("tabindex",-1);g.setAttribute("hasfocus",false);g.setAttribute("title",h.localization.showPasswordString);g.style.position="absolute";g.style.display="none";g.className=h.toThemeProperty("jqx-passwordinput-password-icon");var c=h.element.parentNode;if(c){if(h.element.nextSibling){c.insertBefore(g,h.element.nextSibling)}else{c.appendChild(g)}}h.icon=g;h._positionIcon();var f=function(){h.element.setAttribute("type","password");if(h.input){h.input.setAttribute("type","password")}h._hidden=true};var b=function(){if(h._hidden===false){f()}else{if(h._hidden){h.element.setAttribute("type","text");if(h.input){h.input.setAttribute("type","text")}h._hidden=false}}};var e=a.jqx.mobile.isTouchDevice();if(e){h.addHandler(h.icon,"mousedown"+d,function(){b();return false})}else{h.addHandler(h.icon,"mousedown"+d,function(){b();return false});h.addHandler(a(document),"mouseup"+d,function(){f();return false});h.addHandler(a(document),"mousedown"+d,function(){if(h._focused){f()}})}}},_positionIcon:function(){var c=this.host.offset(),b=this.element.offsetWidth,e=this.element.offsetHeight,d=a(this.icon);if(this.rtl){d.offset({top:parseInt(c.top+e/2-10/2,10),left:c.left+2})}else{d.offset({top:parseInt(c.top+e/2-10/2,10),left:c.left+b-18})}},_showStrength:function(){var e=this;if(e.showStrength){if(e.host.jqxTooltip){var d=e.widgetID+"Strength",c=d+"Value",j=d+"Indicator";var f;if(!e.strengthTypeRenderer){f='<div style="width: 220px;"><div><span style="font-weight: bold;">'+e.localization.passwordStrengthString+': </span><span id="'+c+'"></span></div><div id="'+j+'"></div></div>'}else{var i=e.input.value;if(!("placeholder" in e.input)&&e._browserCheck&&i==e.placeHolder){i=""}e._countCharacters();var g=e.localization.tooShort;var b=e.strengthTypeRenderer(i,{letters:e.letters,numbers:e.numbers,specialKeys:e.specials},g);f=b}e.host.jqxTooltip({theme:e.theme,position:e.showStrengthPosition,content:f,trigger:"none",autoHide:false,rtl:e.rtl});if(!e.strengthTypeRenderer){var h=document.getElementById(j);document.getElementById(c).innerHTML=e.localization.tooShort;h.className+=" jqx-passwordinput-password-strength-inicator";h.style.backgroundColor=e.strengthColors.tooShort;if(e.rtl===false){h.style["float"]="left"}else{h.style["float"]="right"}}e._checkStrength()}else{throw new Error("jqxPasswordInput: Missing reference to jqxtooltip.js")}}},_checkStrength:function(){var b=this;b.addHandler(b.host,"keyup.passwordinput"+b.widgetID,function(){b._evaluateStrength()})},_raiseEvent:function(){var c=new a.Event("change");c.args={type:this.changeType};this.changeType=null;c.owner=this;var b=this.host.trigger(c);return b},_evaluateStrength:function(){var g=this;var k=g.input.value;var d=k.length;g._countCharacters();if(d>0){if(g.showStrength){var e=!g.host.jqxTooltip("opened");if(e){g.host.jqxTooltip("open")}}}var i=g.letters+g.numbers+2*g.specials+g.letters*g.numbers/2+d;var h;if(d<8){h=g.localization.tooShort}else{if(i<20){h=g.localization.weak}else{if(i<30){h=g.localization.fair}else{if(i<40){h=g.localization.good}else{h=g.localization.strong}}}}var c;if(g.strengthTypeRenderer){c=g.strengthTypeRenderer(k,{letters:g.letters,numbers:g.numbers,specialKeys:g.specials},h);g.host.jqxTooltip({content:c})}else{if(g.passwordStrength){c=g.passwordStrength(k,{letters:g.letters,numbers:g.numbers,specialKeys:g.specials},h);a.each(g.localization,function(){var l=this;if(c==l){h=c;return false}})}document.getElementById(g.widgetID+"StrengthValue").innerHTML=h;var f=document.getElementById(g.widgetID+"StrengthIndicator"),b,j;switch(h){case g.localization.tooShort:b="20%";j=g.strengthColors.tooShort;break;case g.localization.weak:b="40%";j=g.strengthColors.weak;break;case g.localization.fair:b="60%";j=g.strengthColors.fair;break;case g.localization.good:b="80%";j=g.strengthColors.good;break;case g.localization.strong:b="100%";j=g.strengthColors.strong;break}f.style.width=b;f.style.backgroundColor=j}},_countCharacters:function(){var g=this;g.letters=0;g.numbers=0;g.specials=0;var d="<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";var b=g.input.value;var f=b.length;for(var c=0;c<f;c++){var h=b.charAt(c);var e=b.charCodeAt(c);if((e>64&&e<91)||(e>96&&e<123)||(e>127&&e<155)||(e>159&&e<166)){g.letters+=1;continue}if(isNaN(h)===false){g.numbers+=1;continue}if(d.indexOf(h)!=-1){g.specials+=1;continue}}},_toPx:function(b){if(typeof b==="number"){return b+"px"}else{return b}}})})(jqxBaseFramework);

