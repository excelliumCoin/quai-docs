"use strict";(self.webpackChunkquai_docs=self.webpackChunkquai_docs||[]).push([[5072],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var m=n.createContext({}),l=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(m.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=l(a),h=s,d=c["".concat(m,".").concat(h)]||c[h]||k[h]||r;return a?n.createElement(d,o(o({ref:t},p),{},{components:a})):n.createElement(d,o({ref:t},p))}));function d(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=h;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[c]="string"==typeof e?e:s,o[1]=i;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5201:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var n=a(7462),s=(a(7294),a(3905));const r={title:"Intrinsic Block Weight",description:"How blocks are measured in Quai Network.",slug:"/intrinsic-block-weight",hide_table_of_contents:!1,sidebar_position:1},o="Intrinsic Block Weight",i={unversionedId:"learn/advanced-introduction/poem/instant-fork-resolution/intrinsic-block-weight",id:"learn/advanced-introduction/poem/instant-fork-resolution/intrinsic-block-weight",title:"Intrinsic Block Weight",description:"How blocks are measured in Quai Network.",source:"@site/docs/learn/advanced-introduction/poem/instant-fork-resolution/intrinsic-block-weight.md",sourceDirName:"learn/advanced-introduction/poem/instant-fork-resolution",slug:"/intrinsic-block-weight",permalink:"/docs/intrinsic-block-weight",draft:!1,editUrl:"https://github.com/dominant-strategies/quai-docs/tree/main/docs/learn/advanced-introduction/poem/instant-fork-resolution/intrinsic-block-weight.md",tags:[],version:"current",lastUpdatedBy:"Juuddi",lastUpdatedAt:1692647052,formattedLastUpdatedAt:"Aug 21, 2023",sidebarPosition:1,frontMatter:{title:"Intrinsic Block Weight",description:"How blocks are measured in Quai Network.",slug:"/intrinsic-block-weight",hide_table_of_contents:!1,sidebar_position:1},sidebar:"learnSidebar",previous:{title:"Instantaneous Fork Resolution",permalink:"/docs/fork-resolution"},next:{title:"Calculating Total Entropy",permalink:"/docs/total-entropy"}},m={},l=[{value:"Calculate Bits of Entropy Removed From System From Intrinsic Block Weight",id:"calculate-bits-of-entropy-removed-from-system-from-intrinsic-block-weight",level:3}],p={toc:l},c="wrapper";function k(e){let{components:t,...r}=e;return(0,s.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"intrinsic-block-weight"},"Intrinsic Block Weight"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Proof-of-Entropy-Minima (PoEM) measures the exact entropy, or randomness, taken out of the system when each block is formed"),". It does this by subtracting the binary log of each block hash (the intrinsic block weight) from the bit field size (maximum length of hash). ",(0,s.kt)("strong",{parentName:"p"},"By measuring intrinsic block weight, PoEM makes sure every decision between blocks can be made quickly and unanimously"),"."),(0,s.kt)("p",null,"In conventional Proof-of-Work systems, block validity is solely determined by whether a block surpasses a difficulty threshold. All blocks that meet this threshold are considered equally valid. This method, however, does not consider the varying amounts of entropy different blocks remove from the system. ",(0,s.kt)("strong",{parentName:"p"},'In reality, each block demands a unique amount of energy expenditure for its creation. One proposed block can always be seen as "heavier" than the others, except in the extremely rare case of a simultaneous block hash collision'),"."),(0,s.kt)("p",null,"Measuring intrinsic block weight gives a more precise view of the actual energy expended when a block is created. By measuring this weight, nodes using the PoEM consensus method can tell any competing blocks apart based on the entropy they remove. Comparing the entropy taken out by each block allows all system nodes to make the same objective decision when picking the next block for the blockchain. ",(0,s.kt)("strong",{parentName:"p"},"Therefore, given the same data, all network nodes will always agree on the same canonical chain"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"PoEMHashOverview",src:a(4217).Z,width:"1500",height:"449"})),(0,s.kt)("h3",{id:"calculate-bits-of-entropy-removed-from-system-from-intrinsic-block-weight"},"Calculate Bits of Entropy Removed From System From Intrinsic Block Weight"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"},"n"))," = Bits of entropy removed from total bit field (approximately: number of leading zeroes found in hash)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"},"l"))," = Total bit field of mining algorithm (simply: length of hash)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"},"H"))," = Intrinsic block weight (simply: block hash)")),(0,s.kt)("div",{className:"math math-display"},(0,s.kt)("span",{parentName:"div",className:"katex-display"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mrow",{parentName:"msub"},(0,s.kt)("mi",{parentName:"mrow"},"log"),(0,s.kt)("mo",{parentName:"mrow"},"\u2061")),(0,s.kt)("mn",{parentName:"msub"},"2")),(0,s.kt)("mrow",{parentName:"mrow"},(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"H"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n = l - \\log_{2}{(H)}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7778em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mop"},(0,s.kt)("span",{parentName:"span",className:"mop"},"lo",(0,s.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g")),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.207em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.4559em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2441em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.08125em"}},"H"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))))))}k.isMDXComponent=!0},4217:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/PoEMHashOverview-ea065d3c423651020df28274698b33ce.png"}}]);