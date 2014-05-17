/*! nice Validator 0.7.0
 * (c) 2012-2014 Jony Zhang <zj86@live.cn>, MIT Licensed
 * http://niceue.com/validator/
 */
!function(e,t){"use strict";function i(n,r){var s=this;return!s instanceof i?new i(n,r):(s.$el=e(n),s._init(n,r),t)}function n(e,t){var i=t?t===!0?this:t:n.prototype;if(z(e))for(var r in e)i[r]=s(e[r])}function r(e,t){var i=t?t===!0?this:t:r.prototype;if(z(e))for(var n in e){if(!e[n])return;i[n]=e[n]}}function s(t){switch(e.type(t)){case"function":return t;case"array":return function(e){return t[0].test(e.value)||t[1]||!1};case"regexp":return function(e){return t.test(e.value)}}}function a(t){var i="";return e.map(t.split(" "),function(e){i+=","+("#"===e.charAt(0)?e:'[name="'+e+'"]')}),i.substring(1)}function l(t){var i;if(t&&t.tagName){switch(t.tagName){case"INPUT":case"SELECT":case"TEXTAREA":case"BUTTON":case"FIELDSET":i=t.form||e(t).closest("."+k);break;case"FORM":i=t;break;default:i=e(t).closest("."+k)}return e(i).data(h)||e(i)[h]().data(h)}}function u(e){var t,i=e.currentTarget;i.form&&null===K(i.form,j)&&(t=l(i),t?(t._parse(i),t["_"+e.type](e)):K(i,A,null))}function o(i,n){var r=e.trim(K(i,A+"-"+n));if(r)return r=Function("return "+r)(),r?s(r):t}function d(e,t,i,n){var r=t.msg,s=t._r;return z(r)&&(r=r[s]),Q(r)||(r=K(e,F+"-"+s)||K(e,F)||i||(n?Q(n)?n:n[s]:"")),r}function c(e){var t;return e&&(t=H.exec(e)),t?t[1]:""}function f(e){return"INPUT"===e.tagName&&"checkbox"===e.type||"radio"===e.type}function g(e){return Date.parse(e.replace(/\.|\-/g,"/"))}var p,m,h="validator",v="."+h,_=".rule",y=".field",b=".form",k="nice-"+h,w="n-ok",M="n-error",O="n-tip",x="n-loading",$="msg-box",C="aria-required",V="aria-invalid",A="data-rule",F="data-msg",T="data-tip",R="data-ok",S="data-target",E="data-inputstatus",j="novalidate",q=":verifiable",N=/(!?)\s?(\w+)(?:\[\s*(.*?\]?)\s*\]|\(\s*(.*?\)?)\s*\))?\s*(;|\||&)?/g,D=/(\w+)(?:\[\s*(.*?\]?)\s*\]|\(\s*(.*?\)?)\s*\))?/,I=/(?:([^:;\(\[]*):)?(.*)/,U=/[^\x00-\xff]/g,H=/^.*(top|right|bottom|left).*$/,L=/(?:(post|get):)?(.+)/i,P=/<|>/g,W=e.noop,B=e.proxy,X=e.isFunction,J=e.isArray,Q=function(e){return"string"==typeof e},z=function(e){return e&&"[object Object]"===Object.prototype.toString.call(e)},G=!window.XMLHttpRequest,K=function(e,i,n){return n===t?e.getAttribute(i):(null===n?e.removeAttribute(i):e.setAttribute(i,""+n),t)},Y=window.console||{log:W,info:W},Z={debug:0,timely:1,theme:"default",ignore:"",focusInvalid:!0,beforeSubmit:W,validClass:"n-valid",invalidClass:"n-invalid",msgWrapper:"span",msgMaker:function(e){var t,i={error:M,ok:w,tip:O,loading:x}[e.type];return t='<span class="msg-wrap '+i+'" role="alert">',t+=e.arrow+e.icon+'<span class="n-msg">'+e.msg+"</span>",t+="</span>"},msgIcon:'<span class="n-icon"></span>',msgArrow:"",msgClass:"",defaultMsg:"{0} is not valid.",loadingMsg:"Validating..."},et={"default":{formClass:"n-default",msgClass:"n-right",showOk:""}};e.fn[h]=function(t){var n=this,r=arguments;return n.is(":input")?n:(!n.is("form")&&(n=this.find("form")),!n.length&&(n=this),n.each(function(){var n=e(this).data(h);if(n)if(Q(t)){if("_"===t.charAt(0))return;n[t].apply(n,Array.prototype.slice.call(r,1))}else t&&(n._reset(!0),n._init(this,t));else new i(this,t)}),this)},e.fn.isValid=function(e,t){var i,n=l(this[0]),r=X(e);return n?(n.checkOnly=!!t,i=n._multiValidate(this.is(":input")?this:this.find(q),function(t){r&&e.call(null,t),n.checkOnly=!1}),r?this:i):!0},e.expr[":"].verifiable=function(e){var t=e.nodeName.toLowerCase();return("input"===t&&!{submit:1,button:1,reset:1,image:1}[e.type]||"select"===t||"textarea"===t)&&e.disabled===!1},i.prototype={_init:function(i,s){var l,u,o,d=this;if(X(s)&&(s={valid:s}),s=s||{},o=K(i,"data-"+h+"-option"),o=o&&"{"===o.charAt(0)?Function("return "+o)():{},u=et[s.theme||o.theme||Z.theme],l=d.options=e.extend({},Z,u,o,d.options,s),d.rules=new n(l.rules,!0),d.messages=new r(l.messages,!0),d.elements=d.elements||{},d.deferred={},d.errors={},d.fields={},d._initFields(l.fields),J(l.groups)&&e.map(l.groups,function(i){return Q(i.fields)&&X(i.callback)?(i.$elems=d.$el.find(a(i.fields)),e.map(i.fields.split(" "),function(e){d.fields[e]=d.fields[e]||{},d.fields[e].group=i}),t):null}),d.msgOpt={type:"error",pos:c(l.msgClass),wrapper:l.msgWrapper,cls:l.msgClass,style:l.msgStyle,icon:l.msgIcon,arrow:l.msgArrow,show:l.msgShow,hide:l.msgHide},d.isAjaxSubmit=!1,l.valid||null===K(i,"action"))d.isAjaxSubmit=!0;else{var f=e[e._data?"_data":"data"](i,"events");f&&f.valid&&e.map(f.valid,function(e){return-1!==e.namespace.indexOf("form")?1:null}).length&&(d.isAjaxSubmit=!0)}d.$el.data(h)||(d.$el.data(h,d).addClass(k+" "+l.formClass).on("submit"+v+" validate"+v,B(d,"_submit")).on("reset"+v,B(d,"_reset")).on("showtip"+v,B(d,"_showTip")).on("validated"+y+v,q,B(d,"_validatedField")).on("validated"+_+v,q,B(d,"_validatedRule")).on("focusin"+v+" click"+v+" showtip"+v,q,B(d,"_focusin")).on("focusout"+v+" validate"+v,q,B(d,"_focusout")),l.timely>=2&&d.$el.on("keyup"+v+" paste"+v,q,B(d,"_focusout")).on("click"+v,":radio,:checkbox",B(d,"_click")).on("change"+v,'select,input[type="file"]',B(d,"_click")),d._novalidate=K(i,j),K(i,j,j))},_initFields:function(t){var i=this;z(t)&&e.each(t,function(e,t){if(null===t){var n=i.elements[e];n&&i._resetElement(n,!0),delete i.fields[e]}else i.fields[e]=Q(t)?{rule:t}:t}),i.$el.find(q).each(function(){i._parse(this)})},_parse:function(e){var t,i=this,n=e.name,r=K(e,A);r&&K(e,A,null),(e.id&&"#"+e.id in i.fields||!e.name)&&(n="#"+e.id),n&&(t=i.fields[n]||{},t.key=n,t.old={},t.rule=t.rule||r||"",t.rule&&(t.rule.match(/match|checked/)&&(t.must=!0),-1!==t.rule.indexOf("required")&&(t.required=!0,K(e,C,!0)),("timely"in t&&!t.timely||!i.options.timely)&&K(e,"notimely",!0),Q(t.target)&&K(e,S,t.target),Q(t.tip)&&K(e,T,t.tip),i.fields[n]=i._parseRule(t)))},_parseRule:function(e){var i=I.exec(e.rule);if(i)return e._i=0,i[1]&&(e.display=i[1]),i[2]&&(e.rules=[],i[2].replace(N,function(){var i=arguments;i[3]=i[3]||i[4],e.rules.push({not:"!"===i[1],method:i[2],params:i[3]?i[3].split(", "):t,or:"|"===i[5]})})),e},_multiValidate:function(i,n){var r=this,s=r.options;return r._multiValid=!0,s.ignore&&(i=i.not(s.ignore)),i.each(function(e,i){var n=r.getField(i);return n&&(r._validate(i,n),!r._multiValid&&s.stopOnError)?!1:t}),e.when.apply(null,e.map(r.deferred,function(e){return e})).done(function(){n.call(r,r._multiValid)}),e.isEmptyObject(r.deferred)?r._multiValid:t},_submit:function(i){var n=this,r=n.options,s=i.target,a="submit"===i.type;return m||"validate"===i.type&&n.$el[0]!==s?(m=!1,t):n.submiting||r.beforeSubmit.call(n,s)===!1?(i.preventDefault(),t):(r.debug&&Y.log("\n"+i.type),n._reset(),n.submiting=!0,n.isValid=t,n._multiValidate(n.$el.find(q),function(t){var i,l=t||2===r.debug?"valid":"invalid";t||(r.focusInvalid&&n.$el.find(":input["+V+'="true"]:first').focus(),i=e.map(n.errors,function(e){return e})),n.submiting=!1,X(r[l])&&r[l].call(n,s,i),n.$el.trigger(l+b,[s,i]),t&&!n.isAjaxSubmit&&a&&(m=!0,p&&p.name?p.click():s.submit())}),(!n.isValid||n.isAjaxSubmit)&&i.preventDefault(),t)},_reset:function(e){var t=this;t.errors={},e&&t.$el.find(q).each(function(e,i){t._resetElement(i)})},_resetElement:function(t,i){var n=this.options;e(t).removeClass(n.validClass+" "+n.invalidClass),this.hideMsg(t),i&&K(t,C,null)},_focusin:function(t){var i,n=this,r=n.options,s=t.target;if("showtip"!==t.type){if(n.submiting)return;if("error"===K(s,E))r.focusCleanup&&(e(s).removeClass(r.invalidClass),n.hideMsg(s));else if(""!==s.value)return}i=K(s,T),i&&n.showMsg(s,{type:"tip",msg:i})},_focusout:function(t,i){var n,r,s=this,a=s.options,l=t.target,u=t.type,o=0;if(!i&&"paste"!==u){if("validate"===u)r=!0;else{if(K(l,"notimely"))return;if(a.timely>=2&&"keyup"!==u)return}if(a.ignore&&e(l).is(a.ignore))return;if("keyup"===u){var d=t.keyCode,c={8:1,9:1,16:1,32:1,46:1};if(9===d&&!l.value)return;if(48>d&&!c[d])return;o=a.timely>=100?a.timely:500}}n=s.getField(l),n&&(o?(n._t&&clearTimeout(n._t),n._t=setTimeout(function(){s._validate(l,n,r)},o)):s._validate(l,n,r))},_click:function(e){this._focusout(e,!0)},_showTip:function(e){var t=this;t.$el[0]===e.target&&t.$el.find(q+"["+T+"]").each(function(){t.showMsg(this,{msg:K(this,T),type:"tip"})})},_validatedField:function(t,i,n){var r=this,s=r.options,a=t.target,l=n.isValid=i.isValid=!!n.isValid,u=l?"valid":"invalid";n.key=i.key,n.rule=i._r,l?n.type="ok":(r.submiting&&(r.errors[i.key]=n.msg),r._multiValid=!1),i.old.value=a.value,i.old.id=a.id,r.elements[i.key]=a,r.$el[0].isValid=r.isValid=l?r.isFormValid():l,r.checkOnly||(X(i[u])&&i[u].call(r,a,n),e(a).attr(V,l?null:!0).removeClass(l?s.invalidClass:s.validClass).addClass(n.skip?"":l?s.validClass:s.invalidClass).trigger(u+y,[n,r]),r.$el.triggerHandler("validation",[n,r]),(i.msgMaker||s.msgMaker)&&r[n.showOk||n.msg?"showMsg":"hideMsg"](a,n,i))},_validatedRule:function(i,n,r,s){n=n||o.getField(f),s=s||{};var a,l,u,o=this,c=o.options,f=i.target,g=n._r,p=!1;if(null===r)return e(f).trigger("validated"+y,[n,{isValid:!0,skip:!0}]),t;if(r===!0||r===t||""===r?p=!0:Q(r)?a=r:z(r)&&(r.error?a=r.error:(a=r.ok,p=!0)),n.rules&&(l=n.rules[n._i],l.not&&(a=t,p="required"===g||!p),l.or))if(p)for(;n._i<n.rules.length&&n.rules[n._i].or;)n._i++;else u=!0;u||(p?(s.isValid=p,c.showOk!==!1&&(Q(a)||(Q(n.ok)?a=n.ok:Q(K(f,R))?a=K(f,R):Q(c.showOk)&&(a=c.showOk)),Q(a)&&(s.showOk=p,s.msg=a)),e(f).trigger("valid"+_,[g,s.msg])):(s.msg=(d(f,n,a,o.messages[g])||Z.defaultMsg).replace("{0}",n.display||""),e(f).trigger("invalid"+_,[g,s.msg]))),c.debug&&Y.log("   "+n._i+": "+g+" => "+(p||s.msg||p)),u||p&&n._i<n.rules.length-1?(n._i++,o._checkRule(f,n)):(n._i=0,e(f).trigger("validated"+y,[n,s]))},_checkRule:function(i,n){var r,s,a=this,l=n.key,u=n.rules[n._i],d=u.method,c=u.params;a.submiting&&a.deferred[l]||(s=n.old,n._r=d,r=!n.must&&s.ret!==t&&s.rule===u&&s.id===i.id&&i.value&&s.value===i.value?s.ret:(o(i,d)||a.rules[d]||W).call(a,i,c,n),z(r)&&X(r.then)?(a.deferred[l]=r,!a.checkOnly&&a.showMsg(i,{type:"loading",msg:a.options.loadingMsg},n),r.then(function(r,l,o){var d,c=o.responseText,f=n.dataFilter||a.options.dataFilter;"json"===this.dataType?c=r:"{"===c.charAt(0)&&(c=e.parseJSON(c)||{}),X(f)||(f=function(e){return Q(e)||z(e)&&("error"in e||"ok"in e)?e:t}),d=f(c),d===t&&(d=f(c.data)),s.rule=u,s.ret=d,e(i).trigger("validated"+_,[n,d])},function(t,r){e(i).trigger("validated"+_,[n,r])}).always(function(){delete a.deferred[l]}),n.isValid=t):e(i).trigger("validated"+_,[n,r]))},_validate:function(i,n){if(!i.disabled&&null===K(i,j)){var r,s=this,a=e(i),l={},u=n.group,o=n.isValid=!0;if(n.rules||s._parse(i),s.options.debug&&Y.info(n.key),u&&(r=u.callback.call(s,u.$elems),r!==t&&(s.hideMsg(u.target,{},n),r===!0?r=t:(n._i=0,n._r="group",o=!1,s.hideMsg(i,{},n),e.extend(l,u)))),o&&!n.required&&!n.must&&!i.value){if("tip"===K(i,E))return;if(!f(i))return a.trigger("validated"+y,[n,{isValid:!0}]),t}r!==t?a.trigger("validated"+_,[n,r,l]):n.rule&&s._checkRule(i,n)}},test:function(e,i){var n,r,s,a=this,l=D.exec(i);return l&&(r=l[1],r in a.rules&&(s=l[2]||l[3],s=s?s.split(", "):t,n=a.rules[r].call(a,e,s))),n===!0||n===t||null===n},getRangeMsg:function(e,t,i,n){if(t){var r=this,s=r.messages[i]||"",a=t[0].split("~"),l=a[0],u=a[1],o="rg",d=[""],c=+e===+e;if(2===a.length){if(l&&u){if(c&&e>=+l&&+u>=e)return!0;d=d.concat(a)}else if(l&&!u){if(c&&e>=+l)return!0;d.push(l),o="gt"}else if(!l&&u){if(c&&+u>=e)return!0;d.push(u),o="lt"}}else{if(e===+l)return!0;d.push(l),o="eq"}return s&&(n&&s[o+n]&&(o+=n),d[0]=s[o]),r.renderMsg.apply(null,d)}},renderMsg:function(){var e=arguments,t=e[0],i=e.length;if(t){for(;--i;)t=t.replace("{"+i+"}",e[i]);return t}},_getMsgOpt:function(t){return e.extend({},this.msgOpt,Q(t)?{msg:t}:t)},_getMsgDOM:function(t,i){var n,r,s,a=e(t);if(a.is(":input")?(s=i.target||K(t,S),s&&(s=this.$el.find(s),s.length&&(s.is(":input")?t=s.get(0):n=s)),n||(r=!f(t)&&t.id?t.id:t.name,n=this.$el.find(i.wrapper+"."+$+'[for="'+r+'"]'))):n=a,!n.length)if(a=this.$el.find(s||t),n=e("<"+i.wrapper+">").attr({"class":$+(i.cls?" "+i.cls:""),style:i.style||"","for":r}),f(t)){var l=a.parent();n.appendTo(l.is("label")?l.parent():l)}else n[i.pos&&"right"!==i.pos?"insertBefore":"insertAfter"](a);return n},showMsg:function(t,i,n){var r=this;if(i=r._getMsgOpt(i),i.msg||i.showOk){t=e(t).get(0),e(t).is(q)&&(K(t,E,i.type),n=n||r.getField(t),n&&(i.style=n.msgStyle||i.style,i.cls=n.msgClass||i.cls,i.wrapper=n.msgWrapper||i.wrapper));var s=r._getMsgDOM(t,i),a=s[0].className;!H.test(a)&&s.addClass(i.cls),G&&"bottom"===i.pos&&(s[0].style.marginTop=e(t).outerHeight()+"px"),s.html(((n||{}).msgMaker||r.options.msgMaker).call(r,i)),s[0].style.display="",X(i.show)&&i.show.call(r,s,i.type)}},hideMsg:function(t,i,n){var r=this;t=e(t).get(0),i=r._getMsgOpt(i),e(t).is(q)&&(K(t,E,null),K(t,V,null),n=n||r.getField(t),n&&(i.wrapper=n.msgWrapper||i.wrapper));var s=r._getMsgDOM(t,i);s.length&&(X(i.hide)?i.hide.call(r,s,i.type):s[0].style.display="none")},mapMsg:function(t){var i=this;e.each(t,function(e,t){var n=i.elements[e]||i.$el.find(':input[name="'+e+'"]')[0];i.showMsg(n,t)})},setMsg:function(e){new r(e,this.messages)},setRule:function(t){new n(t,this.rules),e.map(this.fields,function(e){e.old={}})},getField:function(e){var t,i=this;return t=e.id&&"#"+e.id in i.fields||!e.name?"#"+e.id:e.name,K(e,A)&&i._parse(e),i.fields[t]},setField:function(e,t){var i={};Q(e)?i[e]=t:z(e)&&(i=e),this._initFields(i)},isFormValid:function(){var e=this.fields;for(var t in e)if(!e[t].isValid)return e[t].isValid;return!0},holdSubmit:function(e){this.submiting=e===t||e},cleanUp:function(){this._reset(1)},destroy:function(){this._reset(1),this.$el.off(v).removeData(h),K(this.$el[0],j,this._novalidate)}},e(document).on("focusin",":input["+A+"]",function(e){u(e)}).on("click","input,button",function(e){var t=this,i=t.name;if(t.form)if("submit"===t.type)p=t,null!==K(t,j)&&(m=!0);else if(i&&f(t)){var n=t.form.elements[i];n.length&&(n=n[0]),K(n,A)&&u(e)}}).on("submit validate","form",function(t){if(null===K(this,j)){var i,n=e(this);n.data(h)||(i=n[h]().data(h),e.isEmptyObject(i.fields)?(K(this,j,j),n.off(v).removeData(h)):i._submit(t))}}),new n({required:function(t,i){var n=e.trim(t.value),r=!0;if(i)if(1===i.length){if(!n&&!this.test(t,i[0]))return K(t,C,null),null;K(t,C,!0)}else"not"===i[0]&&e.map(i.slice(1),function(t){n===e.trim(t)&&(r=!1)});return r&&!!n},integer:function(e,t){var i,n="0|",r="[1-9]\\d*",s=t?t[0]:"*";switch(s){case"+":i=r;break;case"-":i="-"+r;break;case"+0":i=n+r;break;case"-0":i=n+"-"+r;break;default:i=n+"-?"+r}return i="^(?:"+i+")$",RegExp(i).test(e.value)||this.messages.integer[s]},match:function(t,i,n){if(i){var r,s,a,l,u,o,d,c=this,f="eq";if(1===i.length?a=i[0]:(f=i[0],a=i[1]),u="#"===a.charAt(0)?a:':input[name="'+a+'"]',o=c.$el.find(u)[0]){if(d=c.getField(o),r=t.value,s=o.value,n._match||(c.$el.on("valid"+y+v,u,function(){e(t).trigger("validate")}),n._match=d._match=1),!n.required&&""===r&&""===s)return null;if(i[2]&&("date"===i[2]?(r=g(r),s=g(s)):"time"===i[2]&&(r=+r.replace(":",""),s=+s.replace(":",""))),"eq"!==f&&!isNaN(+r)&&isNaN(+s))return!0;switch(l=c.messages.match[f].replace("{1}",d.display||a),f){case"lt":return+s>+r||l;case"lte":return+s>=+r||l;case"gte":return+r>=+s||l;case"gt":return+r>+s||l;case"neq":return r!==s||l;default:return r===s||l}}}},range:function(e,t){return this.getRangeMsg(+e.value,t,"range")},checked:function(t,i,n){if(f(t)){var r,s,a=this;return s=a.$el.find('input[name="'+t.name+'"]').filter(function(){var t=this;return!r&&f(t)&&(r=t),!t.disabled&&t.checked&&e(t).is(":visible")}).length,i?a.getRangeMsg(s,i,"checked"):!!s||d(r,n,"")||a.messages.required}},length:function(e,t){if(t){var i=e.value,n=(t[1]?i.replace(U,"xx"):i).length;return"~"===t[0].charAt(0)&&(t[0]="0"+t[0]),this.getRangeMsg(n,t,"length",t[1]?"_2":"")}},remote:function(t,i){if(i){var n,r=this,s=L.exec(i[0]),a=s[2],l=(s[1]||"POST").toUpperCase(),u={};return u[t.name]=t.value,i[1]&&e.map(i.slice(1),function(t){var i,n=t.split(":");t=e.trim(n[0]),i=e.trim(n[1]||"")||t,u[t]=r.$el.find("#"===i.charAt(0)?i:':input[name="'+i+'"]').val()}),u=e.param(u),"POST"===l&&(n=a.indexOf("?"),-1!==n&&(u+="&"+a.substring(n+1,a.length),a=a.substring(0,n))),e.ajax({url:a,type:l,data:u,cache:!1})}},filter:function(e,t){e.value=e.value.replace(t?RegExp("["+t[0]+"]","gm"):P,"")}}),i.config=function(t){e.each(t,function(e,t){"rules"===e?new n(t):"messages"===e?new r(t):Z[e]=t})},i.setTheme=function(t,i){z(t)?e.each(t,function(e,t){et[e]=t}):Q(t)&&z(i)&&(et[t]=i)},e[h]=i}(jQuery);
