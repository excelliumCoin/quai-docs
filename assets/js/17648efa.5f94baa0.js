"use strict";(self.webpackChunkquai_docs=self.webpackChunkquai_docs||[]).push([[6155],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,k=c["".concat(d,".").concat(m)]||c[m]||p[m]||i;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3793:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={title:"Node Overview",description:"Overview of the implemenation of a Quai Network node.",slug:"/node-overview",hide_table_of_contents:!1,sidebar_position:1},o="Node Overview",l={unversionedId:"participate/run-quai/node-overview/node-overview",id:"participate/run-quai/node-overview/node-overview",title:"Node Overview",description:"Overview of the implemenation of a Quai Network node.",source:"@site/docs/participate/run-quai/node-overview/node-overview.md",sourceDirName:"participate/run-quai/node-overview",slug:"/node-overview",permalink:"/node-overview",draft:!1,editUrl:"https://github.com/dominant-strategies/quai-docs/tree/main/docs/participate/run-quai/node-overview/node-overview.md",tags:[],version:"current",lastUpdatedBy:"Juuddi",lastUpdatedAt:1692220643,formattedLastUpdatedAt:"Aug 16, 2023",sidebarPosition:1,frontMatter:{title:"Node Overview",description:"Overview of the implemenation of a Quai Network node.",slug:"/node-overview",hide_table_of_contents:!1,sidebar_position:1},sidebar:"participateSidebar",previous:{title:"Run Quai",permalink:"/category/run-quai"},next:{title:"Run A Node",permalink:"/run-a-node"}},d={},s=[{value:"Node Types",id:"node-types",level:2},{value:"Full Node",id:"full-node",level:3},{value:"Slice Node",id:"slice-node",level:3},{value:"Extended Slice Node",id:"extended-slice-node",level:3},{value:"Watcher Node",id:"watcher-node",level:3},{value:"Network Optimized Multi-Slice Setup",id:"network-optimized-multi-slice-setup",level:2},{value:"Networking",id:"networking",level:2}],u={toc:s},c="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"node-overview"},"Node Overview"),(0,r.kt)("p",null,"A node is a computer running an instance of Quai that communicates (peers) with other nodes. The web of\ncommunication between nodes makes up Quai Network."),(0,r.kt)("p",null,"Nodes are responsible for validating and propagating transactions across Quai Network. Each node maintains a\ncopy of all or a subset of chains within the network, and handles the computation of state changes when a new\nblock is added to their local copy of the ledger. Nodes uphold the integrity of Quai by ensuring the validity\nand accurate recording of all transactions."),(0,r.kt)("p",null,"There are 4 unique kinds of nodes that exist within Quai Network that manage different subsets of data, serve\ndifferent purposes, and have differing hardware requirements."),(0,r.kt)("h2",{id:"node-types"},"Node Types"),(0,r.kt)("h3",{id:"full-node"},"Full Node"),(0,r.kt)("p",null,"A full node on Quai Network maintains the ledger and generates proposed blocks for mining in all shards. Full\nnodes operate by sending and receiving the latest blocks along with their header data to its peers in the\nnetwork. Full nodes also have the ability to serve requests that query each of the shards through WebSockets\nand HTTP. Currently, full nodes on Quai Network serve as archive nodes since historical state is not pruned."),(0,r.kt)("p",null,"The hardware requirement to run a full node:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fast CPU with 4+ cores"),(0,r.kt)("li",{parentName:"ul"},"16GB+ RAM"),(0,r.kt)("li",{parentName:"ul"},"Fast SSD with at least 100GB free space"),(0,r.kt)("li",{parentName:"ul"},"25+ MBit/sec download Internet service")),(0,r.kt)("h3",{id:"slice-node"},"Slice Node"),(0,r.kt)("p",null,"A slice node on the network is a subset of a full node that validates Prime, a single Region, and a single\nZone. An example of a slice node would be the combination of Prime, Cyprus, and Cyprus1. The benefit to\nrunning a slice node is that a node needs fewer resources. The trade-off is that cross-slice validation is\ndelegated to the peered full nodes or coordinate slices. A slice node is the smallest subset of the network\nthat a node can run and still trustlessly access the network."),(0,r.kt)("p",null,"The hardware requirement to run a full node:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CPU with 2+ cores"),(0,r.kt)("li",{parentName:"ul"},"4GB RAM"),(0,r.kt)("li",{parentName:"ul"},"20GB free storage space to sync"),(0,r.kt)("li",{parentName:"ul"},"8 MBit/sec download Internet service")),(0,r.kt)("h3",{id:"extended-slice-node"},"Extended Slice Node"),(0,r.kt)("p",null,"An extended slice node is a slice node that is also running one or more additional Region or Zone chains\ncoordinate to the selected slice. Extended slice nodes can be beneficial to node operators because it allows\nthem to identify coordinate chain contention more quickly, lowering their uncle rate."),(0,r.kt)("p",null,"Extended slice nodes are not currently a pre-set configuration, however advanced node operators can explore\nthis construction."),(0,r.kt)("h3",{id:"watcher-node"},"Watcher Node"),(0,r.kt)("p",null,"Watcher nodes are Quai Network nodes that observe a single subordinate Quai blockchain. Watcher nodes can be\nuseful for organizations and businesses that are primarily monitoring a single Quai Network context, and are\nnot concerned with coordinate or dominant chains. Watcher nodes are not a trustless way to interact with Quai\nNetwork, as they trust in the benevolence of dominant contexts."),(0,r.kt)("p",null,"Watcher nodes are not currently a pre-set configuration."),(0,r.kt)("h2",{id:"network-optimized-multi-slice-setup"},"Network Optimized Multi-Slice Setup"),(0,r.kt)("p",null,"Quai Network incentivizes miners to self-select a slice to run their nodes which has the lowest peer\nlatencies, thus optimizing network performance and throughput. Miners and nodes optimize latency for the\nfollowing reasons:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Maximize block rewards by minimizing uncle count."),(0,r.kt)("li",{parentName:"ol"},"Decrease network latency by collocating with same slice peers."),(0,r.kt)("li",{parentName:"ol"},"Efficiently distribute network compute across multiple contexts.")),(0,r.kt)("p",null,"To achieve this set up, users will run many individual slice nodes that combine to make a globally distributed\nfull node. These nodes are connected through secure WebSockets and validate an individual slice on the\nrespective instance."),(0,r.kt)("h2",{id:"networking"},"Networking"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Chain Name"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP Port"),(0,r.kt)("th",{parentName:"tr",align:null},"Websocket Port"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Prime"),(0,r.kt)("td",{parentName:"tr",align:null},"8546"),(0,r.kt)("td",{parentName:"tr",align:null},"8547")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cyprus"),(0,r.kt)("td",{parentName:"tr",align:null},"8578"),(0,r.kt)("td",{parentName:"tr",align:null},"8579")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Paxos"),(0,r.kt)("td",{parentName:"tr",align:null},"8580"),(0,r.kt)("td",{parentName:"tr",align:null},"8581")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hydra"),(0,r.kt)("td",{parentName:"tr",align:null},"8582"),(0,r.kt)("td",{parentName:"tr",align:null},"8583")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cyprus 1"),(0,r.kt)("td",{parentName:"tr",align:null},"8610"),(0,r.kt)("td",{parentName:"tr",align:null},"8611")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cyprus 2"),(0,r.kt)("td",{parentName:"tr",align:null},"8542"),(0,r.kt)("td",{parentName:"tr",align:null},"8643")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cyprus 3"),(0,r.kt)("td",{parentName:"tr",align:null},"8674"),(0,r.kt)("td",{parentName:"tr",align:null},"8675")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Paxos 1"),(0,r.kt)("td",{parentName:"tr",align:null},"8512"),(0,r.kt)("td",{parentName:"tr",align:null},"8613")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Paxos 2"),(0,r.kt)("td",{parentName:"tr",align:null},"8544"),(0,r.kt)("td",{parentName:"tr",align:null},"8645")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Paxos 3"),(0,r.kt)("td",{parentName:"tr",align:null},"8576"),(0,r.kt)("td",{parentName:"tr",align:null},"8677")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hydra 1"),(0,r.kt)("td",{parentName:"tr",align:null},"8614"),(0,r.kt)("td",{parentName:"tr",align:null},"8615")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hydra 2"),(0,r.kt)("td",{parentName:"tr",align:null},"8646"),(0,r.kt)("td",{parentName:"tr",align:null},"8647")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hydra 3"),(0,r.kt)("td",{parentName:"tr",align:null},"8678"),(0,r.kt)("td",{parentName:"tr",align:null},"8679")))))}p.isMDXComponent=!0}}]);