let t;function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},s={},o=n.parcelRequired7c6;null==o&&((o=function(t){if(t in i)return i[t].exports;if(t in s){var e=s[t];delete s[t];var n={id:t,exports:{}};return i[t]=n,e.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){s[t]=e},n.parcelRequired7c6=o),o("bUb57"),o("ghT7p"),o("dTazW"),o("2shzp");var r={};r=new URL(o("kyEFX").resolve("1yVwl"),import.meta.url).toString();var a={};a=new URL(o("kyEFX").resolve("fIBw5"),import.meta.url).toString();var u={};u=new URL(o("kyEFX").resolve("fSsri"),import.meta.url).toString();var c={};function l(t){return t.map(({_id:t,title:n,book_image:i="./images/book_default/book_default.jpg",author:s,description:o,list_name:l,buy_links:p})=>(o||(o="Sorry, but this book does not have an accessible description. Try reading it on the website of one of the shops"),window.innerWidth<768&&o.length>=25&&(o=o.slice(0,50)+"<span> ...</span>"),`<li class="shopping-list-card"><img class="shopping-list-img" src="${i}" alt="${n}" />
          
            <div class="shopping-list-description-thumb">
              <div >
                <h2 class="title-book shopping-title-book">${n}</h2>
                <h3 class="shopping-list__subtitle ">${l}</h3>
                <p class="description">${o}</p>
              </div>
              <div class="shopping-list-thumb">
                <span class="author">${s.split(",")[0]}</span>
                <ul class="shopping-list-store">
                <li > 
                 <a href="${p.filter(({name:t})=>"Amazon"===t)[0].url}" target="_blank"><img style="height:16px " src="${e(r)}" class="darkFilter" alt="Amazon"/>

</a>
</li>
<li> 
  <a href="${p.filter(({name:t})=>"Apple Books"===t)[0].url}" target="_blank"><img style="height:16px " src="${e(a)}" alt="Apple Books" />
</a>
</li>
<li> 
<a href="${p.filter(({name:t})=>"Bookshop"===t)[0].url}" target="_blank"><img style="height:16px "  src="${e(u)}" alt="logo Book-block" /></a>
</li></ul>
                </div>
              </div>
            </div>
            <button type="button" data-id="${t}" class="shopping-list-btn-del js-trash js-trash-id "><svg class="trash js-trash">
  <use class="js-trash" href="${e(c)}#trash"></use>
</svg> 
</button> 
          </li>
`)).join("")}c=new URL(o("kyEFX").resolve("lp5u4"),import.meta.url).toString();var p=o("bMROy"),f={};f=new URL(o("kyEFX").resolve("axSJb"),import.meta.url).toString();var h={};window,h=function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e||4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,(function(e){return t[e]}).bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){"use strict";t.exports=function(t,e){var n,i,s,o,r=Object.prototype.hasOwnProperty;for(s=1,o=arguments.length;s<o;s+=1)for(i in n=arguments[s])r.call(n,i)&&(t[i]=n[i]);return t}},function(t,e,n){"use strict";t.exports=function(t){return void 0===t}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Array}},function(t,e,n){"use strict";var i=n(2),s=n(17),o=n(6);t.exports=function(t,e,n){i(t)?s(t,e,n):o(t,e,n)}},function(t,e,n){"use strict";t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Function}},function(t,e,n){"use strict";t.exports=function(t,e,n){var i;for(i in n=n||null,t)if(t.hasOwnProperty(i)&&!1===e.call(n,t[i],i,t))break}},function(t,e,n){"use strict";var i=n(18),s=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&i(n,t),e.hasOwnProperty("static")&&(s(n,e.static),delete e.static),s(n.prototype,e),n}},function(t,e,n){"use strict";var i=n(2);t.exports=function(t,e,n){var s,o;if(n=n||0,!i(e))return -1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(o=e.length,s=n;n>=0&&s<o;s+=1)if(e[s]===t)return s;return -1}},function(t,e,n){"use strict";var i=n(29),s=n(30),o=n(5);t.exports={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),s=o(t)?t(e):i(t,e);return n.innerHTML=s,n.firstChild},bind:function(t,e){var n,i=Array.prototype.slice;return t.bind?t.bind.apply(t,i.call(arguments,1)):(n=i.call(arguments,2),function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){s("pagination","UA-129987462-1")}}},function(t,e,n){"use strict";n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){"use strict";var i=n(13),s=n(7),o=n(0),r=n(1),a=n(20),u=n(9),c={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},l=s({init:function(t,e){this._options=o({},c,e),this._currentPage=0,this._view=new a(t,this._options,u.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&u.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){return Math.ceil(this._options.totalItems/this._options.itemsPerPage)||1},_getPageIndex:function(t){return this._options.centerAlign?Math.min(Math.max(t-Math.floor(this._options.visiblePages/2),1),this._getLastPage()-this._options.visiblePages+1):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e=this.getCurrentPage();return"prev"===t?e-1:e+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===t;return this._options.centerAlign?i?e-1:e+n:i?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.min(t=Math.max(t,1),e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),i=this._getPageIndex(t),s=this._getPageIndex(n),o=this._getEdge(t);return e.leftPageNumber=o.left,e.rightPageNumber=o.right,e.prevMore=i>1,e.nextMore=i<s,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,i=this._getLastPage(),s=this._options.visiblePages,o=this._getPageIndex(t);return this._options.centerAlign?(n=(e=Math.max(t-Math.floor(s/2),1))+s-1)>i&&(e=Math.max(i-s+1,1),n=i):(e=(o-1)*s+1,n=Math.min(n=o*s,i)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){r(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(l),t.exports=l},function(t,e,n){"use strict";var i=n(0),s=n(14),o=n(4),r=n(16),a=n(2),u=n(5),c=n(3),l=/\s+/g;function p(){this.events=null,this.contexts=null}p.mixin=function(t){i(t.prototype,p.prototype)},p.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},p.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},p.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},p.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return -1},p.prototype._memorizeContext=function(t){var e,n;s(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},p.prototype._forgetContext=function(t){var e,n;s(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},p.prototype._bindEvent=function(t,e,n){var i=this._safeEvent(t);this._memorizeContext(n),i.push(this._getHandlerItem(e,n))},p.prototype.on=function(t,e,n){var i=this;o(t)?c(t=t.split(l),function(t){i._bindEvent(t,e,n)}):r(t)&&(n=e,c(t,function(t,e){i.on(e,t,n)}))},p.prototype.once=function(t,e,n){var i=this;if(r(t)){n=e,c(t,function(t,e){i.once(e,t,n)});return}this.on(t,function s(){e.apply(n,arguments),i.off(t,s,n)},n)},p.prototype._spliceMatches=function(t,e){var n,i=0;if(a(t))for(n=t.length;i<n;i+=1)!0===e(t[i])&&(t.splice(i,1),n-=1,i-=1)},p.prototype._matchHandler=function(t){var e=this;return function(n){var i=t===n.handler;return i&&e._forgetContext(n.context),i}},p.prototype._matchContext=function(t){var e=this;return function(n){var i=t===n.context;return i&&e._forgetContext(n.context),i}},p.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(i){var s=t===i.handler,o=e===i.context,r=s&&o;return r&&n._forgetContext(i.context),r}},p.prototype._offByEventName=function(t,e){var n=this,i=u(e),s=n._matchHandler(e);c(t=t.split(l),function(t){var e=n._safeEvent(t);i?n._spliceMatches(e,s):(c(e,function(t){n._forgetContext(t.context)}),n.events[t]=[])})},p.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);c(this._safeEvent(),function(t){e._spliceMatches(t,n)})},p.prototype._offByObject=function(t,e){var n,i=this;0>this._indexOfContext(t)?c(t,function(t,e){i.off(e,t)}):o(e)?(n=this._matchContext(t),i._spliceMatches(this._safeEvent(e),n)):u(e)?(n=this._matchHandlerAndContext(e,t),c(this._safeEvent(),function(t){i._spliceMatches(t,n)})):(n=this._matchContext(t),c(this._safeEvent(),function(t){i._spliceMatches(t,n)}))},p.prototype.off=function(t,e){o(t)?this._offByEventName(t,e):arguments.length?u(t)?this._offByHandler(t):r(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},p.prototype.fire=function(t){this.invoke.apply(this,arguments)},p.prototype.invoke=function(t){var e,n,i,s;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),i=0;e[i];){if(!1===(s=e[i]).handler.apply(s.context,n))return!1;i+=1}return!0},p.prototype.hasListener=function(t){return this.getListenerLength(t)>0},p.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=p},function(t,e,n){"use strict";var i=n(1),s=n(15);t.exports=function(t){return!i(t)&&!s(t)}},function(t,e,n){"use strict";t.exports=function(t){return null===t}},function(t,e,n){"use strict";t.exports=function(t){return t===Object(t)}},function(t,e,n){"use strict";t.exports=function(t,e,n){var i=0,s=t.length;for(n=n||null;i<s&&!1!==e.call(n,t[i],i,t);i+=1);}},function(t,e,n){"use strict";var i=n(19);t.exports=function(t,e){var n=i(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){"use strict";t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){"use strict";var i=n(3),s=n(7),o=n(21),r=n(22),a=n(24),u=n(25),c=n(0),l=n(4),p=n(28),f=n(9),h={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},d=["first","prev","next","last"],g=["prev","next"],v=s({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=c({},h,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(l(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!p(t))throw Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){i(d,function(t){this._buttons[t]=f.createElementByTemplate(this._template.moveButton,{type:t})},this)},_setDisabledMoveButtons:function(){i(d,function(t){var e="disabled"+f.capitalizeFirstLetter(t);this._buttons[e]=f.createElementByTemplate(this._template.disabledMoveButton,{type:t})},this)},_setMoreButtons:function(){i(g,function(t){this._buttons[t+"More"]=f.createElementByTemplate(this._template.moreButton,{type:t})},this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(u(e=this._buttons.prevMore,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(u(e=this._buttons.nextMore,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,i=t.leftPageNumber,s=t.rightPageNumber;for(n=i;n<=s;n+=1)n===t.page?e=f.createElementByTemplate(this._template.currentPage,{page:n}):(e=f.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==i||t.prevMore||u(e,this._firstItemClassName),n!==s||t.nextMore||u(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){r(this._getContainerElement(),"click",function(e){var n,i,s=o(e);a(e),(i=this._getButtonType(s))||(n=this._getPageNumber(s)),t(i,n)},this)},_getButtonType:function(t){var e;return i(this._buttons,function(n,i){return!f.isContained(t,n)||(e=i,!1)},this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(e=this._enabledPageElements[n],f.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,function(t,e){this._buttons[e]=t.cloneNode(!0)},this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=v},function(t,e,n){"use strict";t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){"use strict";var i=n(4),s=n(3),o=n(23);function r(t,e,n,i){var r,a;function u(e){n.call(i||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,u):"attachEvent"in t&&t.attachEvent("on"+e,u),r=o(t,e),a=!1,s(r,function(t){return t.handler!==n||(a=!0,!1)}),a||r.push({handler:n,wrappedHandler:u})}t.exports=function(t,e,n,o){if(i(e)){s(e.split(/\s+/g),function(e){r(t,e,n,o)});return}s(e,function(e,i){r(t,i,e,n)})}},function(t,e,n){"use strict";var i="_feEventKey";t.exports=function(t,e){var n,s=t[i];return s||(s=t[i]={}),(n=s[e])||(n=s[e]=[]),n}},function(t,e,n){"use strict";t.exports=function(t){if(t.preventDefault){t.preventDefault();return}t.returnValue=!1}},function(t,e,n){"use strict";var i=n(3),s=n(8),o=n(26),r=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),a=t.classList,u=[];if(a){i(n,function(e){t.classList.add(e)});return}(e=o(t))&&(n=[].concat(e.split(/\s+/),n)),i(n,function(t){0>s(t,u)&&u.push(t)}),r(t,u)}},function(t,e,n){"use strict";var i=n(1);t.exports=function(t){return t&&t.className?i(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){"use strict";var i=n(2),s=n(1);t.exports=function(t,e){if(e=(e=i(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),s(t.className.baseVal)){t.className=e;return}t.className.baseVal=e}},function(t,e,n){"use strict";t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!!(t&&t.nodeType)}},function(t,e,n){"use strict";var i=n(8),s=n(3),o=n(2),r=n(4),a=n(0),u=/{{\s?|\s?}}/g,c=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,l=/\[\s?|\s?\]/,p=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,f=/\./,h=/^["']\w+["']$/,d=/"|'/g,g=/^-?\d+\.?\d*$/,v={if:function(t,e,n){var i,o,r,a,u=(i=[t],o=[],r=0,a=0,s(e,function(t,n){0===t.indexOf("if")?r+=1:"/if"===t?r-=1:r||0!==t.indexOf("elseif")&&"else"!==t||(i.push("else"===t?["true"]:t.split(" ").slice(1)),o.push(e.slice(a,n)),a=n+1)}),o.push(e.slice(a)),{exps:i,sourcesInsideIf:o}),c=!1,l="";return s(u.exps,function(t,e){return(c=y(t,n))&&(l=x(u.sourcesInsideIf[e],n)),!c}),l},each:function(t,e,n){var i=y(t,n),r=o(i)?"@index":"@key",u={},c="";return s(i,function(t,i){u[r]=i,u["@this"]=t,a(n,u),c+=x(e.slice(),n)}),c},with:function(t,e,n){var s=i("as",t),o=t[s+1],r=y(t.slice(0,s),n),u={};return u[o]=r,x(e,a(n,u))||""}},_=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,i,s=[],o=0;for(e.global||(e=RegExp(e,"g")),n=e.exec(t);null!==n;)i=n.index,s.push(t.slice(o,i)),o=i+n[0].length,n=e.exec(t);return s.push(t.slice(o)),s};function m(t,e){var n,i=e[t];return"true"===t?i=!0:"false"===t?i=!1:h.test(t)?i=t.replace(d,""):c.test(t)?i=m((n=t.split(l))[0],e)[m(n[1],e)]:p.test(t)?i=m((n=t.split(f))[0],e)[n[1]]:g.test(t)&&(i=parseFloat(t)),i}function y(t,e){var n,i,o=m(t[0],e);return o instanceof Function?(n=t.slice(1),i=[],s(n,function(t){i.push(m(t,e))}),o.apply(null,i)):o}function x(t,e){for(var n,i,s,o=1,a=t[1];r(a);)v[i=(n=a.split(" "))[0]]?(s=function(t,e,n){for(var i,s,o,a=v[t],u=1,c=2,l=e[2];u&&r(l);)0===l.indexOf(t)?u+=1:0===l.indexOf("/"+t)&&(u-=1,o=c),c+=2,l=e[c];if(u)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=a(e[0].split(" ").slice(1),(i=o,(s=e.splice(1,i-0)).pop(),s),n),e}(i,t.splice(o,t.length-o),e),t=t.concat(s)):t[o]=y(n,e),o+=2,a=t[o];return t.join("")}t.exports=function(t,e){return x(_(t,u),e)}},function(t,e,n){"use strict";var i=n(1),s=n(31);t.exports=function(t,e){var n=location.hostname,o="TOAST UI "+t+" for "+n+": Statistics",r=window.localStorage.getItem(o);(i(window.tui)||!1!==window.tui.usageStatistics)&&(!r||new Date().getTime()-r>6048e5)&&(window.localStorage.setItem(o,new Date().getTime()),setTimeout(function(){("interactive"===document.readyState||"complete"===document.readyState)&&s("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})},1e3))}},function(t,e,n){"use strict";var i=n(6);t.exports=function(t,e){var n=document.createElement("img"),s="";return i(e,function(t,e){s+="&"+e+"="+t}),s=s.substring(1),n.src=t+"?"+s,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}]);var d=o("iQIUW");const g=JSON.parse(localStorage.getItem("savedBooks"));let v=1,_=3;window.innerWidth<768&&(_=2);const m={totalItems:g.length,itemsPerPage:_,visiblePages:_};var y=o("ctMCH");function x(e){let{target:n}=e;if(!n.classList.contains("js-trash"))return;let i=n.dataset.id??n.closest(".js-trash-id").dataset.id,s=M.findIndex(({_id:t})=>t===i);if(-1!==s){M.splice(s,1),localStorage.setItem("savedBooks",JSON.stringify(M));let e=JSON.parse(localStorage.getItem("savedBooks"));if(function(e){if(e<=3){t=null;try{let t=document.querySelector("#tui-pagination-container");t.remove()}catch(t){1===e&&(0,d.Notify).info("There is one book in your shopping cart."),(2===e||3===e)&&(0,d.Notify).info(`There are ${e} books in your shopping cart.`)}}else t.setTotalItems(e)}(e.length),(0,y.setCounterCard)(),!M.length)return b();E.innerHTML=l(M)}}function b(){E.innerHTML=`<div class="is-empty">
  <p class="text-empty">This page is empty, add some books and proceed to order.</p>
  <img src="${e(f)}" alt=""/></div>
`,E.removeEventListener("click",x)}var P=o("bUb57"),d=o("iQIUW");const E=document.querySelector(".js-list-books");document.querySelector(".home");const C=document.querySelector(".shopping-list");let M=null;window.innerWidth<768?(0,p.isActivePage).call(P.shopListMobEl):(0,p.isActivePage).call(C);try{(M=JSON.parse(localStorage.getItem("savedBooks")))&&M.length?(E.innerHTML=l(M),g.length>3&&(E.insertAdjacentHTML("afterend",'<div id="tui-pagination-container" class="tui-pagination"></div>'),t=new(e(h))("#tui-pagination-container",m),document.querySelector("#tui-pagination-container").addEventListener("click",()=>{t.getCurrentPage()!==v&&(v=t.getCurrentPage(),E.innerHTML=l(function(){let e=JSON.parse(localStorage.getItem("savedBooks")),n=t.getCurrentPage();return e.splice(3*n-3,3)}()))})),E.addEventListener("click",x)):b()}catch(t){(0,d.Notify).warning("Sorry, failed to load information")}o("gjiCh"),o("h8wPa");
//# sourceMappingURL=shopinglist.c0904c0e.js.map
