"use strict";(self.webpackChunkquai_docs=self.webpackChunkquai_docs||[]).push([[9627],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=i.createContext({}),d=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=d(e.components);return i.createElement(c.Provider,{value:n},e.children)},l="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=d(t),p=o,f=l["".concat(c,".").concat(p)]||l[p]||h[p]||r;return t?i.createElement(f,a(a({ref:n},u),{},{components:t})):i.createElement(f,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[l]="string"==typeof e?e:o,a[1]=s;for(var d=2;d<r;d++)a[d]=t[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},310:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=t(7462),o=(t(7294),t(3905));const r={title:"Coordinating Infinite Execution Shards",description:"How Quai Network organizes many chains into one network.",slug:"/infinite-execution-shards",hide_table_of_contents:!1,sidebar_position:3},a="Coordinating Infinite Execution Shards",s={unversionedId:"learn/advanced-introduction/poem/infinite-execution-shards/infinite-execution-shards",id:"learn/advanced-introduction/poem/infinite-execution-shards/infinite-execution-shards",title:"Coordinating Infinite Execution Shards",description:"How Quai Network organizes many chains into one network.",source:"@site/docs/learn/advanced-introduction/poem/infinite-execution-shards/infinite-execution-shards.md",sourceDirName:"learn/advanced-introduction/poem/infinite-execution-shards",slug:"/infinite-execution-shards",permalink:"/docs/infinite-execution-shards",draft:!1,editUrl:"https://github.com/dominant-strategies/quai-docs/tree/main/docs/learn/advanced-introduction/poem/infinite-execution-shards/infinite-execution-shards.md",tags:[],version:"current",lastUpdatedBy:"Juuddi",lastUpdatedAt:1692116968,formattedLastUpdatedAt:"Aug 15, 2023",sidebarPosition:3,frontMatter:{title:"Coordinating Infinite Execution Shards",description:"How Quai Network organizes many chains into one network.",slug:"/infinite-execution-shards",hide_table_of_contents:!1,sidebar_position:3},sidebar:"learnSidebar",previous:{title:"Statistical Finality",permalink:"/docs/statistical-finality"},next:{title:"Dynamic Sharding",permalink:"/docs/dynamic-sharding"}},c={},d=[],u={toc:d},l="wrapper";function h(e){let{components:n,...t}=e;return(0,o.kt)(l,(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"coordinating-infinite-execution-shards"},"Coordinating Infinite Execution Shards"),(0,o.kt)("p",null,"Proof-of-Work (PoW) systems, despite their inefficiencies, have been processing transactions and remained coordinated for over 15 years. However, when trying to coordinate multiple work-based blockchains or execution threads simultaneously, the time delay introduced by PoW becomes a significant issue."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The need for time to establish consensus imposes a lower limit on how quickly chains can be coordinated"),". Even in a closely interconnected system, coordination can't happen more frequently than this time limit. For instance, if a single-chain context takes an average of 1 second to reach consensus but needs up to 1,000 seconds in case of fork resolution, cross-chain coordination can only occur every 1,000 seconds or more. The ability to infinitely increase the number of execution shards in a system relies on having zero-time consensus. If consensus isn't immediate, there's a hard limit on the number of execution shards a network can coordinate."),(0,o.kt)("p",null,"Proof-of-Entropy-Minima (PoEM) offers a solution with its deterministic fork resolution, based on ",(0,o.kt)("a",{parentName:"p",href:"./intrinsic-block-weight"},"intrinsic block weight"),". This allows nodes running the PoEM consensus mechanism to instantly pick the correct chain tip across various execution shards. This ensures all blockchains within the system stay synchronized and work towards a common objective. ",(0,o.kt)("strong",{parentName:"p"},"PoEM's deterministic method for head selection ensures that all nodes can quickly agree on the canonical chain for each execution shard, reducing the time required to synchronize and validate transactions across the whole network. By removing the time-based nature of fork resolution from consensus, PoEM provides the necessary structure for coordinating infinite execution shards"),"."),(0,o.kt)("p",null,"PoEM's ability to coordinate an infinite number of execution shards greatly improves the scalability of distributed ledger technology. ",(0,o.kt)("strong",{parentName:"p"},"As the demand for Quai transactions increases, PoEM can efficiently manage a growing number of chains or execution shards without compromising network security, performance, or reliability. This capability allows networks like Quai, based on PoEM, to support a broad range of applications and use cases that need high throughput and low latency, while maintaining a robust and secure consensus mechanism"),"."),(0,o.kt)("p",null,"Quai Network utilizes a ",(0,o.kt)("a",{parentName:"p",href:"/docs/dynamic-sharding"},"dynamic sharding")," algorithm to facilitate the continuous addition of execution shards in a decentralized manner to meet demand. ",(0,o.kt)("strong",{parentName:"p"},"Unlike existing blockchain networks that compromise security or per-shard processing capacity as they add shards, the only tradeoff to adding additional execution shards to Quai Network is an increase in ",(0,o.kt)("a",{parentName:"strong",href:"/docs/dynamic-sharding"},"time to global settlement")),"."))}h.isMDXComponent=!0}}]);