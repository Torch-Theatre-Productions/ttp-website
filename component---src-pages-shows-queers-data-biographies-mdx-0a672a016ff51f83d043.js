(self.webpackChunktorch_theatre_productions_website=self.webpackChunktorch_theatre_productions_website||[]).push([[604,228,575,129,653],{5023:function(e,t,n){"use strict";n.r(t);var r=n(3267),i=n(9953),o=n(4013),a=n(1288);function l(e){const t=Object.assign({h1:"h1"},(0,r.ah)(),e.components);return i.createElement(i.Fragment,null,i.createElement(t.h1,null,"Biographies"),"\n",i.createElement(t.h1,null,"Directors"),"\n",i.createElement(i.Fragment,null,i.createElement(o.default,{category:"Directors"}),i.createElement(a.default,{num:2})),"\n",i.createElement(t.h1,null,"Cast - Set A"),"\n",i.createElement(o.default,{category:"Set A"}),"\n",i.createElement(t.h1,null,"Cast - Set B"),"\n",i.createElement(i.Fragment,null,i.createElement(o.default,{category:"Set B"}),i.createElement(a.default,{num:3})),"\n",i.createElement(t.h1,null,"Production"),"\n",i.createElement(o.default,{category:"Production"}))}t.default=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?i.createElement(t,e,i.createElement(l,e)):l(e)}},7677:function(e,t,n){"use strict";n.r(t);var r=n(9953),i=n(6702);const o=i.styled.img.withConfig({displayName:"Bio__BioImage",componentId:"sc-1vpkxab-0"})(["height:7rem;width:7rem;object-fit:cover;border-radius:50%;image-rendering:crisp-edges;filter:grayscale(1);"]),a=i.styled.div.withConfig({displayName:"Bio__NameAndImageHeader",componentId:"sc-1vpkxab-1"})(["display:flex;gap:2rem;align-items:center;h2{margin-bottom:0;}"]);t.default=e=>{let{name:t,role:n,image:i,roleIn:l,bio:d}=e;const c=Array.isArray(n)?n.join(", "):n,s=Array.isArray(l)?l.join(", "):l;return r.createElement(r.Fragment,null,r.createElement(a,null,i&&r.createElement(o,{src:i}),r.createElement("div",null,r.createElement("h2",null,t),r.createElement("p",null,r.createElement("b",null,c),r.createElement("span",null,s?r.createElement("span",null," - ",r.createElement("i",null,s)):void 0)))),d||void 0)}},7778:function(e,t,n){"use strict";n.d(t,{r:function(){return r}});const r={background:"#0c0c0d",foreground:"hsl(29, 72%, 95%)",padding:{top:1.45,left:1.0875},get defaultPadding(){return this.padding.top+"rem "+this.padding.left+"rem "+this.padding.top+"rem"},get doublePadding(){return 2*this.padding.top+"rem "+2*this.padding.left+"rem "+2*this.padding.top+"rem"},get reversePadding(){return-1*this.padding.top+"rem "+-1*this.padding.left+"rem "+-1*this.padding.top+"rem"},get reverseDoublePadding(){return-2*this.padding.top+"rem "+-2*this.padding.left+"rem "+-2*this.padding.top+"rem"}}},4013:function(e,t,n){"use strict";n.r(t);var r=n(9953),i=n(7677),o=n(822),a=n(347);const l=n(2608),d=l.reduce(((e,t)=>(t.bio&&(e[t.name]=r.lazy((()=>n(4311)("./"+t.bio)))),e)),{});t.default=e=>{let{category:t}=e;const n=(0,o.K2)("1713226034").headshots.edges.reduce(((e,t)=>{let{node:{name:n,publicURL:r}}=t;return e[n]=r,e}),{});return l.filter((e=>e.category==t)).map((e=>({...e,image:e.image?n[e.image]:void 0}))).map((e=>{const t=d[e.name];return r.createElement(a.QueersSection,{key:e.name},r.createElement(i.default,Object.assign({},e,{bio:t?r.createElement(t,null):void 0})))}))}},1288:function(e,t,n){"use strict";n.r(t);var r=n(9953),i=n(6702),o=n(7778);const a=i.default.blockquote.withConfig({displayName:"QueersQuote__QuoteWrapper",componentId:"sc-eo3xsc-0"})(["position:relative;background-color:","aa;border-radius:0 2rem 2rem 0;border:none;border-left:5px solid ",';quotes:"“" "”";font-family:Georgia,"Times New Roman",Times,serif;line-height:1.5rem;text-align:center;font-style:italic;margin-left:-',"rem;margin-right:-","rem;margin-left:0;margin-right:0;padding:",";& *:first-child{position:relative;margin-top:","rem;margin-bottom:","rem;}& *:first-child:before,& *:first-child:after{content:open-quote;position:absolute;font-weight:bold;font-style:initial;font-size:100px;}& *:first-child:before{top:-","rem;left:","rem;}& *:first-child:after{content:close-quote;position:absolute;right:","rem;bottom:-","rem;}&& a{display:block;margin:0;text-align:right;}"],o.r.background,o.r.foreground,o.r.padding.left,o.r.padding.left,o.r.defaultPadding,3*o.r.padding.top,3*o.r.padding.top,1.5*o.r.padding.top,.25*o.r.padding.left,.25*o.r.padding.left,3*o.r.padding.top),l=n(7336);t.default=e=>r.createElement(a,null,r.createElement("p",null,l[e.num]),r.createElement("a",{href:"https://www.stonewall.org.uk/cy/lgbtq-facts-and-figures"},"stonewall.org.uk"))},347:function(e,t,n){"use strict";n.r(t),n.d(t,{QueersSection:function(){return o}});var r=n(6702),i=n(7778);const o=r.default.div.withConfig({displayName:"QueersSection",componentId:"sc-okb41l-0"})(["padding-top:","rem;&:nth-of-type(2n - 1){background:",";margin-left:","rem;padding-left:","rem;margin-right:","rem;padding-right:","rem;padding-top:","rem;padding-bottom:","rem;clip-path:polygon(0 0,100% 2rem,100% calc(100% - 2rem),0% 100%);}& + *:not(&){&,*{margin-top:","rem;}}"],i.r.padding.top,i.r.background,-2*i.r.padding.left,2*i.r.padding.left,-2*i.r.padding.left,2*i.r.padding.left,2*i.r.padding.top,2*i.r.padding.top,2*i.r.padding.top);t.default=o},4311:function(e,t,n){var r={"./bios":[2608,3],"./bios.json":[2608,3],"./chris":[5571,9,243],"./chris.jpg":[9443,9,443],"./chris.md":[5571,9,243],"./david":[7206,9,236],"./david.jpg":[1212,9,212],"./david.md":[7206,9,236],"./gavin":[1029,9,115],"./gavin.md":[1029,9,115],"./glen":[6366,9,978],"./glen.jpg":[5905,9,905],"./glen.md":[6366,9,978],"./nathan":[3802,9,76,113],"./nathan.jpg":[5553,9,553],"./nathan.mdx":[3802,9,76,113],"./niamh":[3626,9,623],"./niamh.jpg":[2803,9,803],"./niamh.md":[3626,9,623],"./robert":[8190,9,147],"./robert.jpg":[2346,9,346],"./robert.md":[8190,9,147],"./simon":[5975,9,572],"./simon.jpg":[6954,9,954],"./simon.md":[5975,9,572],"./victoria":[6859,9,675],"./victoria.jpg":[4167,9,167],"./victoria.md":[6859,9,675],"./wayne":[4209,9,292],"./wayne.jpg":[392,9,392],"./wayne.md":[4209,9,292],"./will":[741,9,687],"./will.md":[741,9,687]};function i(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],i=t[0];return Promise.all(t.slice(2).map(n.e)).then((function(){return n.t(i,16|t[1])}))}i.keys=function(){return Object.keys(r)},i.id=4311,e.exports=i},3267:function(e,t,n){"use strict";n.d(t,{ah:function(){return o}});var r=n(9953);const i=r.createContext({});function o(e){const t=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}},2608:function(e){"use strict";e.exports=JSON.parse('[{"name":"Wayne T Brown","image":"wayne","role":"Director","roleIn":["I Miss the War","The Perfect Gentleman"],"bio":"wayne.md","category":"Directors"},{"name":"Simon Tavener","image":"simon","role":"Director","roleIn":["Missing Alice","Something Borrowed"],"bio":"simon.md","category":"Directors"},{"name":"Glen Young","image":"glen","role":"Director","roleIn":["The Man on the Platform","More Anger"],"bio":"glen.md","category":"Directors"},{"name":"Nathan Peter Grassi","image":"nathan","role":"Perce","roleIn":"The Man on the Platform","bio":"nathan.mdx","category":"Set A"},{"name":"Victoria Wilson","image":"victoria","role":["Producer","Alice"],"roleIn":"Missing Alice","bio":"victoria.md","category":"Set A"},{"name":"Robert Bristow","image":"robert","role":"Jack","roleIn":"I Miss the War","bio":"robert.md","category":"Set A"},{"name":"Niamh Simpson","image":"niamh","role":"Bobby","roleIn":"The Perfect Gentleman","bio":"niamh.md","category":"Set B"},{"name":"Chris Johnstone","image":"chris","role":["Producer","Phil"],"roleIn":"More Anger","bio":"chris.md","category":"Set B"},{"name":"David Guthrie","image":"david","role":"Steve","roleIn":"Something Borrowed","bio":"david.md","category":"Set B"},{"name":"Will Penington","role":"Lighting and Sound Designer","bio":"will.md","category":"Production"},{"name":"Gavin Wilson","role":"Stage Manager","bio":"gavin.md","category":"Production"}]')},7336:function(e){"use strict";e.exports=JSON.parse('["Seven in ten trans people (70%) report being impacted by transphobia when accessing general health services.","Only half of lesbian, gay and bi people (46 per cent) and trans people (47 per cent) feel able to be open about their sexual orientation or gender identity to everyone in their family.","70 countries criminalise same-sex relationships. The death penalty for same-sex relationships is either ‘allowed’, or evidence of its existence occurs, in 11 of these countries.","Two-thirds (64%) of LGBTQ+ people have experienced anti-LGBT+ violence or abuse.","In more than half the world, LGBT people may not be protected from discrimination by workplace law.","Two in five LGBT pupils (40%) are never taught anything about LGBT issues at school.","One third (34%) of Black, Asian and minority ethnic LGBT people have experienced a hate crime or incident in the past twelve months, compared to one in five white LGBT people (20%).","Almost one in five LGBT staff (18%) have been the target of negative comments or conduct from work colleagues because they’re LGBT.","More than a quarter of LGBT students (28%) say they were excluded by other students for being LGBT."]')}}]);
//# sourceMappingURL=component---src-pages-shows-queers-data-biographies-mdx-0a672a016ff51f83d043.js.map