(self.webpackChunktorch_theatre_productions_website=self.webpackChunktorch_theatre_productions_website||[]).push([[883],{7178:function(e,t,n){"use strict";var r,o=n(9953),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},966:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,s,l;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof a.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof a.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!i(e[s[u]],a[s[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4793:function(e){"use strict";e.exports=Object.assign},8168:function(e,t,n){"use strict";n.r(t),n.d(t,{InstaDiv:function(){return ve},default:function(){return Ee}});var r,o,i,a,c=n(3267),u=n(9953),s=n(796),l=n.p+"static/randjposter-1d808e1671fe8e453897e415f44ce292.jpg",f=n(6702),p=n(7778),d=n(7225),h=n.n(d),m=n(7178),y=n.n(m),g=n(966),b=n.n(g),w=n(4793),v=n.n(w),T="bodyAttributes",E="htmlAttributes",C="titleAttributes",O={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},A=(Object.keys(O).map((function(e){return O[e]})),"charset"),S="cssText",j="href",k="http-equiv",P="innerHTML",I="itemprop",x="name",L="property",M="rel",N="src",_="target",R={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},D="defaultTitle",q="defer",F="encodeSpecialCharacters",B="onChangeClientState",H="titleTemplate",Y=Object.keys(R).reduce((function(e,t){return e[R[t]]=t,e}),{}),U=[O.NOSCRIPT,O.SCRIPT,O.STYLE],z="data-react-helmet",K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},G=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},X=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},$=function(e){var t=te(e,O.TITLE),n=te(e,H);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=te(e,D);return t||r||void 0},Q=function(e){return te(e,B)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return V({},e,t)}),{})},Z=function(e,t){return t.filter((function(e){return void 0!==e[O.BASE]})).map((function(e){return e[O.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},ee=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ae("Helmet: "+e+' should be of type "Array". Instead found type "'+K(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||n===M&&"canonical"===e[n].toLowerCase()||u===M&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==P&&c!==S&&c!==I||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=v()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},te=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},ne=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){ne(e)}),0)}),re=function(e){return clearTimeout(e)},oe="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ne:n.g.requestAnimationFrame||ne,ie="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||re:n.g.cancelAnimationFrame||re,ae=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ce=null,ue=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;fe(O.BODY,r),fe(O.HTML,o),le(f,p);var d={baseTag:pe(O.BASE,n),linkTags:pe(O.LINK,i),metaTags:pe(O.META,a),noscriptTags:pe(O.NOSCRIPT,c),scriptTags:pe(O.SCRIPT,s),styleTags:pe(O.STYLE,l)},h={},m={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(m[e]=d[e].oldTags)})),t&&t(),u(e,h,m)},se=function(e){return Array.isArray(e)?e.join(""):e},le=function(e,t){void 0!==e&&document.title!==e&&(document.title=se(e)),fe(O.TITLE,t)},fe=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(z),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(z):n.getAttribute(z)!==a.join(",")&&n.setAttribute(z,a.join(","))}},pe=function(e,t){var n=document.head||document.querySelector(O.HEAD),r=n.querySelectorAll(e+"["+z+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===P)n.innerHTML=t.innerHTML;else if(r===S)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(z,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},de=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},he=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[R[n]||n]=e[n],t}),t)},me=function(e,t,n){switch(e){case O.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[z]=!0,o=he(n,r),[u.createElement(O.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=de(n),i=se(t);return o?"<"+e+" "+z+'="true" '+o+">"+X(i,r)+"</"+e+">":"<"+e+" "+z+'="true">'+X(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case T:case E:return{toComponent:function(){return he(t)},toString:function(){return de(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[z]=!0,r);return Object.keys(t).forEach((function(e){var n=R[e]||e;if(n===P||n===S){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),u.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===P||e===S)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+X(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===U.indexOf(e);return t+"<"+e+" "+z+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},ye=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:me(O.BASE,t,r),bodyAttributes:me(T,n,r),htmlAttributes:me(E,o,r),link:me(O.LINK,i,r),meta:me(O.META,a,r),noscript:me(O.NOSCRIPT,c,r),script:me(O.SCRIPT,u,r),style:me(O.STYLE,s,r),title:me(O.TITLE,{title:f,titleAttributes:p},r)}},ge=y()((function(e){return{baseTag:Z([j,_],e),bodyAttributes:J(T,e),defer:te(e,q),encode:te(e,F),htmlAttributes:J(E,e),linkTags:ee(O.LINK,[M,j],e),metaTags:ee(O.META,[x,A,k,L,I],e),noscriptTags:ee(O.NOSCRIPT,[P],e),onChangeClientState:Q(e),scriptTags:ee(O.SCRIPT,[N,P],e),styleTags:ee(O.STYLE,[S],e),title:$(e),titleAttributes:J(C,e)}}),(function(e){ce&&ie(ce),e.defer?ce=oe((function(){ue(e,(function(){ce=null}))})):(ue(e),ce=null)}),ye)((function(){return null})),be=(o=ge,a=i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!b()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case O.SCRIPT:case O.NOSCRIPT:return{innerHTML:t};case O.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return V({},r,((t={})[n.type]=[].concat(r[n.type]||[],[V({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case O.TITLE:return V({},o,((t={})[r.type]=a,t.titleAttributes=V({},i),t));case O.BODY:return V({},o,{bodyAttributes:V({},i)});case O.HTML:return V({},o,{htmlAttributes:V({},i)})}return V({},o,((n={})[r.type]=V({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=V({},t);return Object.keys(e).forEach((function(t){var r;n=V({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return u.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[Y[n]||n]=e[n],t}),t)}(W(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case O.LINK:case O.META:case O.NOSCRIPT:case O.SCRIPT:case O.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=W(e,["children"]),r=V({},n);return t&&(r=this.mapChildrenToProps(t,r)),u.createElement(o,r)},G(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(u.Component),i.propTypes={base:h().object,bodyAttributes:h().object,children:h().oneOfType([h().arrayOf(h().node),h().node]),defaultTitle:h().string,defer:h().bool,encodeSpecialCharacters:h().bool,htmlAttributes:h().object,link:h().arrayOf(h().object),meta:h().arrayOf(h().object),noscript:h().arrayOf(h().object),onChangeClientState:h().func,script:h().arrayOf(h().object),style:h().arrayOf(h().object),title:h().string,titleAttributes:h().object,titleTemplate:h().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=ye({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);be.renderStatic=be.rewind;var we=be;const ve=f.default.div.withConfig({displayName:"furtherReading__InstaDiv",componentId:"sc-rxpn6r-0"})(["display:flex;justify-content:center;margin:","rem ","rem ","rem;"],p.r.padding.top,-2*p.r.padding.left,p.r.padding.top);function Te(e){const t=Object.assign({h2:"h2",p:"p",em:"em",a:"a"},(0,c.ah)(),e.components);return u.createElement(u.Fragment,null,u.createElement(t.h2,null,"Interviews with Cast"),"\n",u.createElement(u.Fragment,null,u.createElement(we,null,u.createElement("script",{src:"https://instagram.com/embed"})),u.createElement(ve,null,u.createElement(s.InstagramEmbed,{url:"https://www.instagram.com/p/CtOapjTo3e-/",width:"100%"})),u.createElement(ve,null,u.createElement(s.InstagramEmbed,{url:"https://www.instagram.com/p/CtUGlC2oFXS/",width:"100%"})),u.createElement(ve,null,u.createElement(s.InstagramEmbed,{url:"https://www.instagram.com/p/CtYt1nuImGj/",width:"100%"})),u.createElement(ve,null,u.createElement(s.InstagramEmbed,{url:"https://www.instagram.com/p/CtkUhdoN0Xx/",width:"100%"}))),"\n",u.createElement(t.h2,null,"Further Reading"),"\n",u.createElement(t.p,null,'"',u.createElement(t.em,null,"Let's not forget how far we have come"),'" - Mark Gatiss'),"\n",u.createElement(t.p,null,u.createElement(t.a,{href:"https://nickhernbooksblog.com/2017/07/27/lets-not-forget-how-far-we-have-come-mark-gatiss-on-remembering-gay-history-in-queers/"},"Click here to read an interview with\r\nMark Gatiss on remembering gay history in\r\nQueers")),"\n",u.createElement(t.p,null,"Facts and figures quoted throughout the programme taken from ",u.createElement(t.a,{href:"https://www.stonewall.org.uk/cy/lgbtq-facts-and-figures"},"this source.")),"\n",u.createElement(t.h2,null,"Other shows"),"\n",u.createElement("a",{href:"https://www.oxfordcastleandprison.co.uk/events/event/romeo-juliet/"},u.createElement("img",{src:l})))}var Ee=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,c.ah)(),e.components);return t?u.createElement(t,e,u.createElement(Te,e)):Te(e)}},7778:function(e,t,n){"use strict";n.d(t,{r:function(){return r}});const r={background:"#0c0c0d",foreground:"hsl(29, 72%, 95%)",padding:{top:1.45,left:1.0875},get defaultPadding(){return this.padding.top+"rem "+this.padding.left+"rem "+this.padding.top+"rem"},get doublePadding(){return 2*this.padding.top+"rem "+2*this.padding.left+"rem "+2*this.padding.top+"rem"},get reversePadding(){return-1*this.padding.top+"rem "+-1*this.padding.left+"rem "+-1*this.padding.top+"rem"},get reverseDoublePadding(){return-2*this.padding.top+"rem "+-2*this.padding.left+"rem "+-2*this.padding.top+"rem"}}}}]);
//# sourceMappingURL=059a926c0dade881bf169bc613c3c98611965556-629ff652d3883be45a5b.js.map