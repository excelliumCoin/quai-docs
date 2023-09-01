"use strict";(self.webpackChunkquai_docs=self.webpackChunkquai_docs||[]).push([[2066],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),h=l(a),u=i,f=h["".concat(s,".").concat(u)]||h[u]||p[u]||o;return a?n.createElement(f,r(r({ref:t},d),{},{components:a})):n.createElement(f,r({ref:t},d))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[h]="string"==typeof e?e:i,r[1]=c;for(var l=2;l<o;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2180:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=a(7462),i=(a(7294),a(3905));const o={title:"External Transactions (ETXs)",description:"Cross-chain transactions in Quai Network.",slug:"/etxs",hide_table_of_contents:!1},r="External Transactions (ETXs)",c={unversionedId:"learn/advanced-introduction/interoperability/etxs",id:"learn/advanced-introduction/interoperability/etxs",title:"External Transactions (ETXs)",description:"Cross-chain transactions in Quai Network.",source:"@site/docs/learn/advanced-introduction/interoperability/etxs.md",sourceDirName:"learn/advanced-introduction/interoperability",slug:"/etxs",permalink:"/etxs",draft:!1,editUrl:"https://github.com/dominant-strategies/quai-docs/tree/main/docs/learn/advanced-introduction/interoperability/etxs.md",tags:[],version:"current",lastUpdatedBy:"Juuddi",lastUpdatedAt:1692116968,formattedLastUpdatedAt:"Aug 15, 2023",frontMatter:{title:"External Transactions (ETXs)",description:"Cross-chain transactions in Quai Network.",slug:"/etxs",hide_table_of_contents:!1},sidebar:"learnSidebar",previous:{title:"Interoperability",permalink:"/interoperability"},next:{title:"Preliminary Tokenomics",permalink:"/preliminary-tokenomics"}},s={},l=[{value:"Account Initiated ETX",id:"account-initiated-etx",level:2},{value:"Propagate Up The Hierarchy",id:"propagate-up-the-hierarchy",level:3},{value:"Propagate Back Down The Hierarchy",id:"propagate-back-down-the-hierarchy",level:3},{value:"Contract Initiated ETX",id:"contract-initiated-etx",level:2},{value:"Propagate Up The Hierarchy",id:"propagate-up-the-hierarchy-1",level:3},{value:"Propagate Back Down The Hierarchy",id:"propagate-back-down-the-hierarchy-1",level:3},{value:"Forward Propagation of ETX Rollups",id:"forward-propagation-of-etx-rollups",level:2}],d={toc:l},h="wrapper";function p(e){let{components:t,...a}=e;return(0,i.kt)(h,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"external-transactions-etxs"},"External Transactions (ETXs)"),(0,i.kt)("p",null,"An External Transaction (ETX) is a transaction that trustlessly moves state between two Quai chains. ETXs are facilitated by hash linked references between chains. Two new opcodes have been added to the EVM to facilitate contract-based ETXs."),(0,i.kt)("p",null,'The blockchain that the ETX is originally broadcast from is referred to as the "origin chain" of the ETX. The blockchain that the ETX has been sent to is referred to as the "destination chain" of the ETX. All ETXs must travel up the hierarchy from the origin chain to reach a dominant chain of the destination chain. After the ETX has reached a chain dominant to the destination, it must then travel back down the hierarchy into the subordinate destination chain. There are two kinds of ETXs: account initiated and contract initiated.'),(0,i.kt)("p",null,"Two data fields are included in the headers of all Quai blocks that allow ETXs to be forward propagated from the origin chain to coordinate blockchains in the form of rollups. This method of forward propagating ETX rollups reduces the amount of ETXs required to be instantaneously processed at points of coincidence by more than 30x."),(0,i.kt)("h2",{id:"account-initiated-etx"},"Account Initiated ETX"),(0,i.kt)("h3",{id:"propagate-up-the-hierarchy"},"Propagate Up The Hierarchy"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The TX is broadcasted to the origin chain as an internal transaction."),(0,i.kt)("li",{parentName:"ol"},"The TX is mined on the origin chain, removing the balance from the sending address and potentially emitting a number of ETXs."),(0,i.kt)("li",{parentName:"ol"},"The ETX(s) is propagated to dominant peers."),(0,i.kt)("li",{parentName:"ol"},"When a coincident block is found, dominant peers collect all pending ETXs linked through the subordinate manifest."),(0,i.kt)("li",{parentName:"ol"},"If the destination chain still has a dominant chain (i.e. is a Region chain), steps 3 and 4 are repeated.")),(0,i.kt)("h3",{id:"propagate-back-down-the-hierarchy"},"Propagate Back Down The Hierarchy"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"When a coincident block is found, pending ETXs are collected from each hash in each manifest of each block since the last coincident block from the same location."),(0,i.kt)("li",{parentName:"ol"},"All ETXs destined to the current chain or a subordinate chain are identified. These pending ETXs can now be referenced."),(0,i.kt)("li",{parentName:"ol"},"The pending ETXs is propagated to the destination chain, where it is added to a pending ETX set and available to be mined."),(0,i.kt)("li",{parentName:"ol"},"The ETX is included in a block mined on the destination chain, adding the balance to the receiving address.")),(0,i.kt)("h2",{id:"contract-initiated-etx"},"Contract Initiated ETX"),(0,i.kt)("h3",{id:"propagate-up-the-hierarchy-1"},"Propagate Up The Hierarchy"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A contract interaction is initiated, potentially triggering the ISADDRINTERNAL convenience opcode"),(0,i.kt)("li",{parentName:"ol"},"If ISADDRINTERNAL returns FALSE, (or another trigger occurs) a number of ETXs may be emitted from contract by triggering OP_ETX"),(0,i.kt)("li",{parentName:"ol"},"The ETX(s) is propagated to dominant peers."),(0,i.kt)("li",{parentName:"ol"},"When a coincident block is found, dominant peers collect all pending ETXs linked through the subordinate manifest."),(0,i.kt)("li",{parentName:"ol"},"If the destination chain still has a dominant chain (i.e. is a Region chain), steps 3 and 4 are repeated.")),(0,i.kt)("h3",{id:"propagate-back-down-the-hierarchy-1"},"Propagate Back Down The Hierarchy"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"When a coincident block is found, pending ETXs are collected from each hash in each manifest of each block since the last coincident block from the same location."),(0,i.kt)("li",{parentName:"ol"},"All ETXs destined to the current chain or a subordinate chain are identified. These pending ETXs can now be referenced."),(0,i.kt)("li",{parentName:"ol"},"The pending ETXs is propagated to the destination chain, where it is added to a pending ETX set and available to be mined."),(0,i.kt)("li",{parentName:"ol"},"The ETX is included in a block mined on the destination chain, adding the balance to the receiving address.")),(0,i.kt)("h2",{id:"forward-propagation-of-etx-rollups"},"Forward Propagation of ETX Rollups"),(0,i.kt)("p",null,"Each ETX emitted from a Quai block is included in two new data fields in the block header: etxTransactions and extRollupRoot. The etxTransactions field contains a list of hashes. Each hash contained in the etxTransactions field represents a unique ETX emitted from that block. The etxRollupRoot field included in each block header contains a single hash, which represents a cumulative rollup of all ETXs emitted since the previous coincident block."),(0,i.kt)("p",null,"The etxRollupRoot field is propagated to coordinate blockchains at each point of local consensus. This forward propagation enables precomputed state transition sets, which drastically reduce computation times when ETXs are mined into their destination chain. By forward propagating ETX rollups and allowing precomputed state transitions, Quai reduces the amount of computations required to process ETX state transitions at the destination chain by more than 30 times. It is critical to note that precomputed state transitions are not reference-able or canonicalized until a hash linked reference between the origin and destination chain is provided, proving the canonicalization of the emitted ETX."),(0,i.kt)("p",null,"Hash linked references are created in another data field, known as the subordinate block manifest (subManifest). The subManifest data field is empty in all blocks except coincident blocks. The subManifest data field contains a list of all subordinate block hashes produced since the prior coincident block. The subManifest creates a direct, objective reference to all subordinate blocks within each dominant blockchain, creating hash linked references between all Quai Network blockchains. Once this hash linked reference is provided to a coordinate context that has received a precomputed transition set, the ETX is known to be canonical and the state transition becomes reference-able."))}p.isMDXComponent=!0}}]);