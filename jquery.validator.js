/*! nice Validator 0.8.0
 * (c) 2012-2014 Jony Zhang <zj86@live.cn>, MIT Licensed
 * http://niceue.com/validator/
 */
!function(e){"function"==typeof define&&(define.amd||define.cmd)?define([],function(){return e}):e(jQuery)}(function(e,t){"use strict";function i(t,n){function s(){a._init(a.$el[0],n)}var a=this;return a instanceof i?(a.$el=e(t),void(a.$el.length?i.loading?e(window).on("validatorready",s):s():J(t)&&(Y[t]=n))):new i(t,n)}function n(e,t){if(Q(e)){var i,s=t?t===!0?this:t:n.prototype;for(i in e)m(i)&&(s[i]=a(e[i]))}}function s(e,t){if(Q(e)){var i,n=t?t===!0?this:t:s.prototype;for(i in e)n[i]=e[i]}}function a(t){switch(e.type(t)){case"function":return t;case"array":var i=function(e){return t.msg=t[1],t[0].test(G(e))||t[1]||!1};return i.msg=t[1],i;case"regexp":return function(e){return t.test(G(e))}}}function r(t){var i,n,s;if(t&&t.tagName){switch(t.tagName){case"INPUT":case"SELECT":case"TEXTAREA":case"BUTTON":case"FIELDSET":i=t.form||e(t).closest("."+M);break;case"FORM":i=t;break;default:i=e(t).closest("."+M)}for(n in Y)if(e(i).is(n)){s=Y[n];break}return e(i).data(_)||e(i)[_](s).data(_)}}function l(e,t){var i,n=t||e.currentTarget;n.form&&null===z(n.form,R)&&(i=r(n),i?(i._parse(n),i._focusin(e),t&&i._focusout(e,t)):z(n,V,null))}function o(e,t){var i=W(z(e,V+"-"+t));if(i)return i=new Function("return "+i)(),i?a(i):void 0}function u(e,t,i){var n=t.msg,s=t._r;return Q(n)&&(n=n[s]),J(n)||(n=z(e,C+"-"+s)||z(e,C)||(i?J(i)?i:i[s]:"")),n}function d(e){var t;return e&&(t=B.exec(e)),t&&t[1]}function c(e){return J(e)||Q(e)&&("error"in e||"ok"in e)?e:void 0}function f(e){return"INPUT"===e.tagName&&"checkbox"===e.type||"radio"===e.type}function g(e){return Date.parse(e.replace(/\.|\-/g,"/"))}function m(e){return/^[\w\d]+$/.test(e)}function p(e){return"#"===e.charAt(0)?e.replace(/(:|\.|\[|\])/g,"\\$1"):'[name="'+e+'"]:input'}var h,v,_="validator",y="."+_,w=".rule",k=".field",b=".form",M="nice-"+_,$="msg-box",x="aria-required",O="aria-invalid",V="data-rule",C="data-msg",T="data-tip",A="data-ok",E="data-timely",F="data-target",j="data-must",R="novalidate",N=":verifiable",S=/(&)?(!)?\s?(\w+)(?:\[\s*(.*?\]?)\s*\]|\(\s*(.*?\)?)\s*\))?\s*(;|\||&)?/g,D=/(\w+)(?:\[\s*(.*?\]?)\s*\]|\(\s*(.*?\)?)\s*\))?/,q=/(?:([^:;\(\[]*):)?(.*)/,I=/[^\x00-\xff]/g,B=/^.*(top|right|bottom|left).*$/,L=/(?:(post|get):)?(.+)/i,U=/[<>'"]|(?:&#)(?:0*\d{2,3}|x[A-Z0-9]{2};)|%[A-Z0-9]{2}/gim,H=e.noop,P=e.proxy,W=e.trim,Z=e.isFunction,J=function(e){return"string"==typeof e},Q=function(e){return e&&"[object Object]"===Object.prototype.toString.call(e)},X=document.documentMode||+(navigator.userAgent.match(/MSIE (\d+)/)&&RegExp.$1),z=function(e,i,n){return n===t?e.getAttribute(i):void(null===n?e.removeAttribute(i):e.setAttribute(i,""+n))},G=function(t){return e(t).val()},K=window.console||{log:H,info:H},Y={},et={debug:0,timely:1,theme:"default",ignore:"",focusInvalid:!0,beforeSubmit:H,validClass:"n-valid",invalidClass:"n-invalid",msgWrapper:"span",msgMaker:function(t){var i;return i='<span role="alert" class="msg-wrap n-'+t.type+'">'+t.arrow,t.result?e.each(t.result,function(e,n){i+='<span class="n-'+n.type+'">'+t.icon+'<span class="n-msg">'+n.msg+"</span></span>"}):i+=t.icon+'<span class="n-msg">'+t.msg+"</span>",i+="</span>"},msgArrow:"",msgIcon:'<span class="n-icon"></span>',msgClass:"",defaultMsg:"This field is not valid.",loadingMsg:"Validating..."},tt={"default":{formClass:"n-default",msgClass:"n-right"}};e.fn[_]=function(t){var n=this,s=arguments;return n.is(":input")?n:(!n.is("form")&&(n=this.find("form")),!n.length&&(n=this),n.each(function(){var n=e(this).data(_);if(n)if(J(t)){if("_"===t.charAt(0))return;n[t].apply(n,Array.prototype.slice.call(s,1))}else t&&(n._reset(!0),n._init(this,t));else new i(this,t)}),this)},e.fn.isValid=function(e,t){var i,n,s=r(this[0]),a=Z(e);return s?(s.checkOnly=!!t,n=s.options,i=s._multiValidate(this.is(":input")?this:this.find(N),function(t){t||!n.focusInvalid||s.checkOnly||s.$el.find("["+O+"]:input:first").focus(),a&&e.call(null,t),s.checkOnly=!1}),a?this:i):!0},e.expr[":"].verifiable=function(e){var t=e.nodeName.toLowerCase();return("input"===t&&!{submit:1,button:1,reset:1,image:1}[e.type]||"select"===t||"textarea"===t)&&e.disabled===!1},e.expr[":"].filled=function(e){return!!W(G(e))},i.prototype={_init:function(t,i){var a,r,l,o=this;Z(i)&&(i={valid:i}),i=i||{},l=z(t,"data-"+_+"-option"),l=l&&"{"===l.charAt(0)?new Function("return "+l)():{},r=tt[i.theme||l.theme||et.theme],a=o.options=e.extend({},et,r,o.options,i,l),o.rules=new n(a.rules,!0),o.messages=new s(a.messages,!0),o.elements=o.elements||{},o.deferred={},o.errors={},o.fields={},o._initFields(a.fields),o.msgOpt={type:"error",pos:d(a.msgClass),wrapper:a.msgWrapper,cls:a.msgClass,style:a.msgStyle,arrow:a.msgArrow,icon:a.msgIcon,show:a.msgShow,hide:a.msgHide},J(a.target)&&o.$el.find(a.target).addClass("msg-container"),o.$el.data(_)||(o.$el.data(_,o).addClass(M+" "+a.formClass).on("submit"+y+" validate"+y,P(o,"_submit")).on("reset"+y,P(o,"_reset")).on("showmsg"+y,P(o,"_showmsg")).on("hidemsg"+y,P(o,"_hidemsg")).on("focusin"+y+" click"+y,N,P(o,"_focusin")).on("focusout"+y+" validate"+y,N,P(o,"_focusout")),0!==a.timely&&o.$el.on("keyup"+y+" input"+y,N,P(o,"_focusout")).on("click"+y,":radio,:checkbox","click",P(o,"_focusout")).on("change"+y,'select,input[type="file"]',"change",P(o,"_focusout")),o._novalidate=z(t,R),z(t,R,R))},_guessAjax:function(t){var i=this;if(!(i.isAjaxSubmit=!!i.options.valid)){var n=(e._data||e.data)(t,"events");n&&n.valid&&e.map(n.valid,function(e){return~e.namespace.indexOf("form")?1:null}).length&&(i.isAjaxSubmit=!0)}},_initFields:function(t){var i=this,n=null===t;n&&(t=i.fields),Q(t)&&e.each(t,function(e,t){if(null===t||n){var s=i.elements[e];s&&i._resetElement(s,!0),delete i.fields[e]}else i.fields[e]=J(t)?{rule:t}:t}),i.$el.find(N).each(function(){i._parse(this)})},_parse:function(e){var t,i,n=this,s=e.name,a=z(e,V);a&&z(e,V,null),(e.id&&"#"+e.id in n.fields||!e.name)&&(s="#"+e.id),s&&(t=n.fields[s]||{},t.key=s,t.rule=t.rule||a||"",t.rule&&(t.old={},(null!==z(e,j)||/match\(|checked/.test(t.rule))&&(t.must=!0),~t.rule.indexOf("required")&&(t.required=!0,z(e,x,!0)),"showOk"in t||(t.showOk=n.options.showOk),i=z(e,E),i?t.timely=+i:"timely"in t&&z(e,E,+t.timely),J(t.target)&&z(e,F,t.target),J(t.tip)&&z(e,T,t.tip),n.fields[s]=n._parseRule(t)))},_parseRule:function(i){var n=q.exec(i.rule),s=this.options;if(n)return i._i=0,n[1]&&(i.display=n[1]),!i.display&&s.display&&(i.display=s.display),n[2]&&(i.rules=[],n[2].replace(S,function(){var n=arguments;n[4]=n[4]||n[5],i.rules.push({and:"&"===n[1],not:"!"===n[2],or:"|"===n[6],method:n[3],params:n[4]?e.map(n[4].split(", "),function(e){return W(e)}):t})})),i},_multiValidate:function(i,n){var s=this,a=s.options;return s.hasError=!1,a.ignore&&(i=i.not(a.ignore)),i.each(function(e,t){var i=s.getField(t);return i&&(s._validate(t,i),s.hasError&&a.stopOnError)?!1:void 0}),n&&(s.verifying=!0,e.when.apply(null,e.map(s.deferred,function(e){return e})).done(function(){n.call(s,!s.hasError),s.verifying=!1})),e.isEmptyObject(s.deferred)?!s.hasError:t},_submit:function(i){function n(){var e,t;v=!0,h&&(e=h.name)?(h.name="",t=l.submit,a.$el.append('<input type="hidden" name="'+e+'" value="'+h.value+'">'),t.call(l)):l.submit()}var s,a=this,r=a.options,l=i.target,o=i.isDefaultPrevented();if(i.preventDefault(),!(v&&~(v=!1)||a.submiting||"validate"===i.type&&a.$el[0]!==l||r.beforeSubmit.call(a,l)===!1)){if(a.isAjaxSubmit===t&&a._guessAjax(l),s="submit"===i.type&&!o&&!a.isAjaxSubmit,i.isTrigger&&a.isValid&&s)return void n();r.debug&&K.log("\n<<< "+(i.isTrigger?"trigger: ":"event: ")+i.type),a._reset(),a.submiting=!0,a._multiValidate(a.$el.find(N),function(t){var i,o=t||2===r.debug?"valid":"invalid";t||(r.focusInvalid&&a.$el.find("["+O+'="true"]:input:first').focus(),i=e.map(a.errors,function(e){return e})),a.submiting=!1,a.isValid=t,Z(r[o])&&r[o].call(a,l,i),a.$el.trigger(o+b,[l,i]),r.debug&&K.log(">>> "+o),t&&s&&n()})}},_reset:function(e){var t=this;t.errors={},e&&(t.reseting=!0,t.$el.find(N).each(function(e,i){t._resetElement(i)}),delete t.reseting)},_resetElement:function(t,i){var n=this.options;e(t).removeClass(n.validClass+" "+n.invalidClass),this.hideMsg(t),i&&z(t,x,null)},_getTimely:function(e,t){var i=z(e,E);return null!==i?+i:+t.timely},_focusin:function(t){var i,n,s=this,a=s.options,r=t.target;s.verifying||"click"===t.type&&document.activeElement===r||(a.focusCleanup&&"true"===z(r,O)&&(e(r).removeClass(a.invalidClass),s.hideMsg(r)),n=z(r,T),n?s.showMsg(r,{type:"tip",msg:n}):(i=s._getTimely(r,a),(8===i||9===i)&&s._focusout(t)))},_focusout:function(i,n){var s,a,r,l,o,u,d=this,c=d.options,g=i.target,m=i.type,p="focusin"===m,h="validate"===m,v=d.getField(g),_=0;if(v){if(v._e=m,s=v.old,a=G(g),!h)if(!n&&f(g)&&(n=d.$el.find('input[name="'+g.name+'"]').get(0)),u=d._getTimely(n||g,c),"focusout"===m){if(2===u||8===u){if(!a)return;v.isValid&&!s.showOk?d.hideMsg(g):d._makeMsg(g,v,s)}}else{if(!u||2>u&&!i.data)return;if(r=+new Date,r-(g._ts||0)<100||"keyup"===m&&"input"===g._et)return;if(g._ts=r,g._et=m,"keyup"===m){if(l=i.keyCode,o={8:1,9:1,16:1,32:1,46:1},9===l&&!a)return;if(48>l&&!o[l])return}p||(_=u>=100?u:400)}c.ignore&&e(g).is(c.ignore)||(clearTimeout(v._t),u&&(h||!c.ignoreBlank||a||p)?(v.value=a,u!==t&&(v.timely=u),_?v._t=setTimeout(function(){d._validate(g,v)},_):(h&&(v.old={}),d._validate(g,v))):d.hideMsg(g))}},_showmsg:function(t,i,n){var s=this,a=t.target;e(a).is(":input")?s.showMsg(a,{type:i,msg:n}):"tip"===i&&s.$el.find(N+"["+T+"]",a).each(function(){s.showMsg(this,{type:i,msg:n})})},_hidemsg:function(t){var i=e(t.target);i.is(":input")&&this.hideMsg(i)},_validatedField:function(t,i,n){var s=this,a=s.options,r=i.isValid=n.isValid=!!n.isValid,l=r?"valid":"invalid";n.key=i.key,n.ruleName=i._r,n.id=t.id,n.value=G(t),r?n.type="ok":(s.submiting&&(s.errors[i.key]=n.msg),s.isValid=!1,s.hasError=!0),s.elements[i.key]=n.element=t,s.$el[0].isValid=r?s.isFormValid():r,i.old=n,Z(i[l])&&i[l].call(s,t,n),Z(a.validation)&&a.validation.call(s,t,n),e(t).attr(O,r?null:!0).removeClass(r?a.invalidClass:a.validClass).addClass(n.skip?"":r?a.validClass:a.invalidClass).trigger(l+k,[n,s]),s.$el.triggerHandler("validation",[n,s]),s.checkOnly||s._makeMsg.apply(s,arguments)},_makeMsg:function(t,i,n){(i.msgMaker||this.options.msgMaker)&&(n=e.extend({},n),"focusin"===i._e&&(n.type="tip"),this[n.showOk||n.msg||"tip"===n.type?"showMsg":"hideMsg"](t,n,i))},_validatedRule:function(i,n,s,a){n=n||c.getField(i),a=a||{};var r,l,o,d,c=this,f=c.options,g=n._r,m=n.timely||f.timely,p=9===m||8===m,h=!1;if(null===s)return void c._validatedField(i,n,{isValid:!0,skip:!0});if(s===t?o=!0:s===!0||""===s?h=!0:J(s)?r=s:Q(s)&&(s.error?r=s.error:(r=s.ok,h=!0)),l=n.rules[n._i],l.not&&(r=t,h="required"===g||!h),l.or)if(h)for(;n._i<n.rules.length&&n.rules[n._i].or;)n._i++;else o=!0;else l.and&&(n.isValid||(o=!0));o?h=!0:(h&&n.showOk!==!1&&(d=z(i,A),r=null===d?J(n.ok)?n.ok:r:d,!J(r)&&J(n.showOk)&&(r=n.showOk),J(r)&&(a.showOk=h)),(!h||p)&&(r=(u(i,n,r||l.msg||c.messages[g])||et.defaultMsg).replace(/\{0\|?([^\}]*)\}/,function(){return c._getDisplay(i,n.display)||arguments[1]})),h||(n.isValid=h),a.msg=r,e(i).trigger((h?"valid":"invalid")+w,[g,r])),!p||o&&!l.and||(h||n._m||(n._m=r),n._v=n._v||[],n._v.push({type:h?o?"tip":"ok":"error",msg:r||l.msg})),f.debug&&K.log("   "+n._i+": "+g+" => "+(h||r)),(h||p)&&n._i<n.rules.length-1?(n._i++,c._checkRule(i,n)):(n._i=0,p?(a.isValid=n.isValid,a.result=n._v,a.msg=n._m||"",n.value||"focusin"!==n._e||(a.type="tip")):a.isValid=h,c._validatedField(i,n,a),delete n._m,delete n._v)},_checkRule:function(i,n){var s,a,r,l=this,u=n.key,d=n.rules[n._i],f=d.method,g=G(i),m=d.params;l.submiting&&l.deferred[u]||(r=n.old,n._r=f,r&&!n.must&&d.result!==t&&r.rule===d&&r.id===i.id&&g&&r.value===g?s=d.result:(a=o(i,f)||l.rules[f]||H,s=a.call(l,i,m,n),a.msg&&(d.msg=a.msg)),Q(s)&&Z(s.then)?(l.deferred[u]=s,n.isValid=t,!l.checkOnly&&l.showMsg(i,{type:"loading",msg:l.options.loadingMsg},n),s.then(function(s,a,o){var u,f=o.responseText,g=n.dataFilter||l.options.dataFilter||c;/jsonp?/.test(this.dataType)?f=s:"{"===W(f).charAt(0)&&(f=e.parseJSON(f)),o.settings=this,u=g.call(o,f,i),u===t&&(u=g.call(o,f.data,i)),r.rule=d,d.result=u,l._validatedRule(i,n,u)},function(e,t){l._validatedRule(i,n,l.messages[t]||t)}).always(function(){delete l.deferred[u]})):l._validatedRule(i,n,s))},_validate:function(e,t){if(!e.disabled&&null===z(e,R)){var i=this;if(t=t||i.getField(e),t.isValid=!0,t.rules||i._parse(e),t.rules)return i.options.debug&&K.info(t.key),t.required||t.must||G(e)||f(e)?(i._checkRule(e,t),t.isValid):(i._validatedField(e,t,{isValid:!0}),!0)}},test:function(e,i){var n,s,a,r=this,l=D.exec(i);return l&&(s=l[1],s in r.rules&&(a=l[2]||l[3],a=a?a.split(", "):t,n=r.rules[s].call(r,e,a))),n===!0||n===t||null===n},getRangeMsg:function(e,t,i,n){if(t){var s,a=this,r=i.rules[i._i],l=a.messages[r.method]||"",o=t[0].split("~"),u=o[0],d=o[1],c="rg",f=[""],g=W(e)&&+e===+e;return 2===o.length?u&&d?(g&&e>=+u&&+d>=e&&(s=!0),f=f.concat(o)):u&&!d?(g&&e>=+u&&(s=!0),f.push(u),c="gte"):!u&&d&&(g&&+d>=e&&(s=!0),f.push(d),c="lte"):(e===+u&&(s=!0),f.push(u),c="eq"),l&&(n&&l[c+n]&&(c+=n),f[0]=l[c]),s||(r.msg=a.renderMsg.apply(null,f))}},renderMsg:function(){var e=arguments,t=e[0],i=e.length;if(t){for(;--i;)t=t.replace("{"+i+"}",e[i]);return t}},_getDisplay:function(e,t){return J(t)?t:Z(t)?t.call(this,e):""},_getMsgOpt:function(t){return e.extend({},this.msgOpt,J(t)?{msg:t}:t)},_getMsgDOM:function(t,i){var n,s,a,r,l=e(t);if(l.is(":input")?(a=i.target||z(t,F),a&&(a=Z(a)?a.call(this,t):this.$el.find(a),a.length&&(a.is(":input")?t=a.get(0):a.hasClass($)?n=a:r=a)),n||(s=f(t)&&t.name||!t.id?t.name:t.id,n=this.$el.find(i.wrapper+"."+$+'[for="'+s+'"]'))):n=l,!n.length)if(l=this.$el.find(a||t),n=e("<"+i.wrapper+">").attr({"class":$+(i.cls?" "+i.cls:""),style:i.style||"","for":s}),f(t)){var o=l.parent();n.appendTo(o.is("label")?o.parent():o)}else r?n.appendTo(r):n[i.pos&&"right"!==i.pos?"insertBefore":"insertAfter"](l);return n},showMsg:function(t,i,n){if(t){var s,a,r,l=this,o=l.options;if(Q(t)&&!t.jquery&&!i)return void e.each(t,function(e,t){var i=l.elements[e]||l.$el.find(p(e))[0];l.showMsg(i,t)});i=l._getMsgOpt(i),t=e(t).get(0),i.msg||"error"===i.type||(a=z(t,"data-"+i.type),null!==a&&(i.msg=a)),J(i.msg)&&(e(t).is(N)&&(n=n||l.getField(t),n&&(i.style=n.msgStyle||i.style,i.cls=n.msgClass||i.cls,i.wrapper=n.msgWrapper||i.wrapper,i.target=n.target||o.target)),(s=(n||{}).msgMaker||o.msgMaker)&&(r=l._getMsgDOM(t,i),!B.test(r[0].className)&&r.addClass(i.cls),6===X&&"bottom"===i.pos&&(r[0].style.marginTop=e(t).outerHeight()+"px"),r.html(s.call(l,i))[0].style.display="",Z(i.show)&&i.show.call(l,r,i.type)))}},hideMsg:function(t,i,n){var s,a=this,r=a.options;t=e(t).get(0),i=a._getMsgOpt(i),e(t).is(N)&&(n=n||a.getField(t),n&&((n.isValid||a.reseting)&&z(t,O,null),i.wrapper=n.msgWrapper||i.wrapper,i.target=n.target||r.target)),s=a._getMsgDOM(t,i),s.length&&(Z(i.hide)?i.hide.call(a,s,i.type):(s[0].style.display="none",s[0].innerHTML=null))},getField:function(e){var t,i=this;return t=e.id&&"#"+e.id in i.fields||!e.name?"#"+e.id:e.name,z(e,V)&&i._parse(e),i.fields[t]},setField:function(e,t){var i={};J(e)?i[e]=t:i=e,this._initFields(i)},isFormValid:function(){var e,t=this.fields;for(e in t)if(!t[e].isValid)return t[e].isValid;return!0},holdSubmit:function(e){this.submiting=e===t||e},cleanUp:function(){this._reset(1)},destroy:function(){this._reset(1),this.$el.off(y).removeData(_),z(this.$el[0],R,this._novalidate)}},e(window).on("beforeunload",function(){this.focus()}),e(document).on("focusin","["+V+"]:input",function(e){l(e)}).on("click","input,button",function(e){var t,i,n=this,s=n.name;n.form&&("submit"===n.type?(h=n,t=n.getAttributeNode("formnovalidate"),(t&&null!==t.nodeValue||null!==z(n,R))&&(v=!0)):null===z(n.form,R)&&(s&&f(n)?(i=n.form.elements[s],i.length&&(i=i[0]),z(i,V)&&l(e,i)):l(e)))}).on("submit validate","form",function(t){if(null===z(this,R)){var i,n=e(this);n.data(_)||(i=r(this),e.isEmptyObject(i.fields)?(z(this,R,R),n.off(y).removeData(_)):i._submit(t))}}),new n({required:function(t,i,n){var s=this,a=W(G(t)),r=!0;if(i)if(1===i.length){if(m(i[0])){if(s.rules[i[0]]){if(!a&&!s.test(t,i[0]))return z(t,x,null),null;z(t,x,!0)}}else if(!a&&!e(i[0],s.$el).length)return null}else if("not"===i[0])e.each(i.slice(1),function(){return r=a!==W(this)});else if("from"===i[0]){var l,o=s.$el.find(i[1]),d="_validated_";return r=o.filter(function(){return!!W(G(this))}).length>=(i[2]||1),r?a||(l=null):l=u(o[0],n)||!1,e(t).data(d)||o.data(d,1).each(function(){t!==this&&s._checkRule(this,s.getField(this))}).removeData(d),l}return r&&!!a},integer:function(e,t){var i,n="0|",s="[1-9]\\d*",a=t?t[0]:"*";switch(a){case"+":i=s;break;case"-":i="-"+s;break;case"+0":i=n+s;break;case"-0":i=n+"-"+s;break;default:i=n+"-?"+s}return i="^(?:"+i+")$",new RegExp(i).test(G(e))||this.messages.integer[a]},match:function(t,i,n){if(i){var s,a,r,l,o,u,d,c,f=this,m="eq";if(1===i.length?r=i[0]:(m=i[0],r=i[1]),u=p(r),d=f.$el.find(u)[0]){if(c=f.getField(d),s=G(t),a=G(d),n._match||(f.$el.on("valid"+k+y,u,function(){e(t).trigger("validate")}),n._match=c._match=1),!n.required&&""===s&&""===a)return null;if(o=i[2],o&&(/^date(time)?$/i.test(o)?(s=g(s),a=g(a)):"time"===o&&(s=+s.replace(/:/g,""),a=+a.replace(/:/g,""))),"eq"!==m&&!isNaN(+s)&&isNaN(+a))return!0;switch(l=f.messages.match[m].replace("{1}",f._getDisplay(t,c.display||r)),m){case"lt":return+a>+s||l;case"lte":return+a>=+s||l;case"gte":return+s>=+a||l;case"gt":return+s>+a||l;case"neq":return s!==a||l;default:return s===a||l}}}},range:function(e,t,i){return this.getRangeMsg(G(e),t,i)},checked:function(e,t,i){if(f(e)){var n,s,a=this;return e.name?s=a.$el.find('input[name="'+e.name+'"]').filter(function(){var e=this;return!n&&f(e)&&(n=e),!e.disabled&&e.checked}).length:(n=e,s=n.checked),t?a.getRangeMsg(s,t,i):!!s||u(n,i,"")||a.messages.required}},length:function(e,t,i){var n=G(e),s=(t[1]?n.replace(I,"xx"):n).length;return this.getRangeMsg(s,t,i,t[1]?"_2":"")},remote:function(t,i){if(i){var n,s=this,a=L.exec(i[0]),r={},l="";return r[t.name]=G(t),i[1]&&e.map(i.slice(1),function(e){var t,i;~e.indexOf("=")?l+="&"+e:(t=e.split(":"),e=W(t[0]),i=W(t[1])||e,r[e]=s.$el.find(p(i)).val())}),/^https?:/.test(a[2])&&!~a[2].indexOf(location.host)&&(n="jsonp"),e.ajax({url:a[2],type:a[1]||"POST",data:e.param(r)+l,dataType:n,cache:!1})}},validate:function(t,i){var n="_validated_";i&&!e(t).data(n)&&this.$el.find(e.map(i,function(e){return p(e)}).join(",")).data(n,1).trigger("validate").removeData(n)},filter:function(e,t){var i,n=G(e);i=n.replace(t?new RegExp("["+t[0]+"]","gm"):U,""),i!==n&&(e.value=i)}}),i.config=function(t){e.each(t,function(e,t){"rules"===e?new n(t):"messages"===e?new s(t):et[e]=t})},i.setTheme=function(t,i){Q(t)?e.extend(!0,tt,t):J(t)&&Q(i)&&(tt[t]=e.extend(tt[t],i))},e[_]=i,function(t){var n,s,a,r,l,o,u=document,d=u.getElementsByTagName("script");if(t)s=d[0],n=t.match(/(.*)\/local\/([\w\-]{2,5})\.js/);else for(a=d.length,r=/(.*validator.js)\?.*local=([\w\-]*)/;a--&&!n;)s=d[a],n=(s.hasAttribute?s.src:s.getAttribute("src",4)||"").match(r);n&&(l=n[0].split("/").slice(0,-1).join("/").replace(/\/(local|src)$/,"")+"/",o=u.createElement("link"),o.rel="stylesheet",o.href=l+"jquery.validator.css",s.parentNode.insertBefore(o,s),t||(i.loading=1,o=u.createElement("script"),o.src=l+"local/"+(n[2]||u.documentElement.lang||"en").replace("_","-")+".js",a="onload"in o?"onload":"onreadystatechange",o[a]=function(){(!o.readyState||/loaded|complete/.test(o.readyState))&&(e(window).trigger("validatorready"),delete i.loading,o=o[a]=null)},s.parentNode.insertBefore(o,s)))}(e._VALIDATOR_URI)});