"use strict";(self.webpackChunkquai_docs=self.webpackChunkquai_docs||[]).push([[1663],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),p=r,f=u["".concat(l,".").concat(p)]||u[p]||g[p]||o;return t?i.createElement(f,a(a({ref:n},d),{},{components:t})):i.createElement(f,a({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4893:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=t(7462),r=(t(7294),t(3905));const o={title:"Energy Efficiency",description:"How Quai Network efficiently uses energy.",slug:"/energy-efficiency",hide_table_of_contents:!1,sidebar_position:2},a="Energy Efficiency",s={unversionedId:"learn/advanced-introduction/merged-mining/energy-efficiency",id:"learn/advanced-introduction/merged-mining/energy-efficiency",title:"Energy Efficiency",description:"How Quai Network efficiently uses energy.",source:"@site/docs/learn/advanced-introduction/merged-mining/energy-efficiency.mdx",sourceDirName:"learn/advanced-introduction/merged-mining",slug:"/energy-efficiency",permalink:"/energy-efficiency",draft:!1,editUrl:"https://github.com/dominant-strategies/quai-docs/tree/main/docs/learn/advanced-introduction/merged-mining/energy-efficiency.mdx",tags:[],version:"current",lastUpdatedBy:"Juuddi",lastUpdatedAt:1692116968,formattedLastUpdatedAt:"Aug 15, 2023",sidebarPosition:2,frontMatter:{title:"Energy Efficiency",description:"How Quai Network efficiently uses energy.",slug:"/energy-efficiency",hide_table_of_contents:!1,sidebar_position:2},sidebar:"learnSidebar",previous:{title:"Coincident Blocks",permalink:"/coincident-blocks"},next:{title:"Merge-Mined Parachains",permalink:"/parachains"}},l={},c=[{value:"Optimized Energy Usage",id:"optimized-energy-usage",level:2},{value:"Environmental Benefits of Proof-of-Work",id:"environmental-benefits-of-proof-of-work",level:2},{value:"Incentivizes Renewable Energy Use",id:"incentivizes-renewable-energy-use",level:3},{value:"Incentivizes Energy Innovation",id:"incentivizes-energy-innovation",level:3},{value:"*Energy Calculation",id:"energy-calculation",level:2}],d={toc:c},u="wrapper";function g(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"energy-efficiency"},"Energy Efficiency"),(0,r.kt)("p",null,"Quai Network has heavily optimized energy usage when compared to other Proof-of-Work alternatives. Quai reduces energy expenditure per transaction to be approximately 10,000 times lower than Bitcoin","*"," by increasing the throughput of the network and allowing miners to reuse and optimize hashpower with merged mining. Quai reconciles the environmental inefficiencies of Proof-of-Work through a novel combination of the PoEM consensus mechanism, sharding, and merged mining while retaining PoW's unmatched security guarantees."),(0,r.kt)("p",null,"Further, Proof-of-Work has already been proven to be a powerful incentive for meaningful environmental impact by supporting renewable energy grids and incentivizing the economic use of stranded energy."),(0,r.kt)("h2",{id:"optimized-energy-usage"},"Optimized Energy Usage"),(0,r.kt)("p",null,"The process of generating a hash requires energy. Quai miners optimize energy usage by reusing hashes across many chains. In traditional blockchains, each completed hash is compared against a single difficulty threshold. In Quai Network, each completed hash is compared against three Quai blockchains simultaneously, providing 10,000+ times more throughput capacity than Bitcoin without increasing the energy usage or damaging the security guarantees of Proof-of-Work. Further, Quai Network minimizes the amount of wasted hash/energy in uncle/orphan blocks by minimizing latency and ensuring consistency prior to consensus."),(0,r.kt)("p",null,"Energy expenditure is the only known objectively verifiable mechanism to link the security and scarcity of a currency to the constraints of the physical world. The scarcity of rare Earth metals is protected only by the limited profitability of expending energy to physically extract those metals from the Earth or space. The scarcity of fiat currencies is ensured by indirect energy spends in the form of politics, bureaucracies, and armed conflict.\nQuai Network seeks not to eliminate the intrinsic link between energy and scarcity, but rather to optimize energy expenditure to minimize per transaction energy costs and maximize overall utility."),(0,r.kt)("h2",{id:"environmental-benefits-of-proof-of-work"},"Environmental Benefits of Proof-of-Work"),(0,r.kt)("p",null,"Proof-of-Work creates strong incentives that align miners and the global environment. This relationship is commonly misunderstood and misrepresented due to the differences between Proof-of-Work mining and other profitable uses of energy.\nFinding the cheapest possible sources of energy is integral to the profitability of miners. Critically, Proof-of-Work mining does not require reliable or consistent energy, and thus exists in a different energy market than traditional methods of energy consumption. When Proof-of-Work's ability to operate and achieve profitability using unreliable sources of energy is combined with the strong incentive for miners to minimize their energy costs, powerful new incentives emerge."),(0,r.kt)("h3",{id:"incentivizes-renewable-energy-use"},"Incentivizes Renewable Energy Use"),(0,r.kt)("p",null,"Proof-of-Work mining incentivizes the use and development of renewable energy in electrical grids. The integration of renewable energy into electrical grids results in the production of intermittent energy. This intermittent energy can be challenging for grid administrators to accommodate:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'"The difficulty associated with integrating variable sources of electricity stems from the fact that the power grid was designed around the concept of large, controllable electric generators. Today, the grid operator uses a three-phase planning process to ensure power plants produce the right amount of electricity at the right time to consistently and reliably meet electric demand. Because the grid has very little storage capacity, the balance between electricity supply and demand must be maintained at all times to avoid a blackout or other cascading problem.\nIntermittent renewables are challenging because they disrupt the conventional methods for planning the daily operation of the electric grid. Their power fluctuates over multiple time horizons, forcing the grid operator to adjust its day-ahead, hour-ahead, and real-time operating procedures."')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://blogs.scientificamerican.com/plugged-in/renewable-energy-intermittency-explained-challenges-solutions-and-opportunities/"},"Scientific American, 2015")),(0,r.kt)("p",null,"Proof-of-Work mining addresses this issue by providing a highly flexible mechanism of profitably consuming intermittent energy. Proof-of-Work not only removes one of the largest barriers to the widespread integration of renewable energies, but turns this barrier into a profitable side-effect."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'"Crypto-asset mining operations can quickly decrease the amount of electricity used by scaling back or switching off mining rigs. Bitcoin miners can participate in utility and grid operator programs that pay major electricity users to decrease consumptions during times of peak grid stress, or to balance supply and demand \u2014 a process called demand response. On July 11, 2022, high temperatures and high projected electricity demand caused ERCOT to declare a grid emergency event, and bitcoin miners using 1 GW of power reportedly responded to ERCOT\u2019s demand response request and reduced mining power usage."')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.whitehouse.gov/wp-content/uploads/2022/09/09-2022-Crypto-Assets-and-Climate-Report.pdf"},"The White House, 2022")),(0,r.kt)("p",null,"Additionally, as renewable energies surpass fossil fuels in cost-effectiveness, miners will be incentivized to mine at locations where renewable energies are cheapest and most plentiful. This feedback loop will result in an increased economic incentive to develop renewable energies around the world, as electrical grids are able to both sustain these renewable energy integrations and attract economic development from the highly mobile mining industry.\nIncentivizes Unreliable/Stranded Energy Use\nProof-of-Work mining incentivizes the capture and profitable use of stranded energy. Stranded energy refers to energy resources that cannot be economically developed or utilized due to lack of infrastructure or other barriers. Stranded energy resources that are not developed can also lead to environmental degradation if not managed properly, such as leakage of methane from landfills."),(0,r.kt)("p",null,"Currently, many international and national regulatory agencies require the venting or flaring of this stranded energy, often methane, to mitigate environmental impact. Flaring and venting stranded energy still has a significant negative impact on the environment, leading regulators to search for an alternative:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'"The ',"[Department of Energy's Flaring and Venting Reduction Research & Development Activities]",' report highlights the need for effective and efficient modular technologies that are inexpensive to build and can be easily moved from one well to another. Ideally, these technologies would be capable of converting various natural gas and chemical compositions into products that have value not only in the larger commercial marketplace, but also at the well site or at nearby market centers."')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.energy.gov/fecm/articles/doe-flaring-and-venting-rd-reducing-emissions-and-developing-valuable-low-carbon"},"Department of Energy, 2021")),(0,r.kt)("p",null,"Proof-of-Work offers a modular, portable, and profitable mechanism to incentivize the conversion of cheap stranded energy into value. The use of Proof-of-Work to capture stranded energy has a significantly reduced environmental impact when compared to venting/flaring. Proof-of-Work creates a direct incentive to create value out of stranded energy that would otherwise cause environmental damage as it is flared/vented into the atmosphere."),(0,r.kt)("h3",{id:"incentivizes-energy-innovation"},"Incentivizes Energy Innovation"),(0,r.kt)("p",null,"Proof-of-Work, by its very nature, incentivizes constant innovation and advancements in energy creation and distribution. Proof-of-Work miners exist in an everlasting competition to discover and utilize the most efficient method of producing energy."),(0,r.kt)("p",null,"Due to the inherent and ever-increasing scarcity of non-renewable energies, renewable energies have much more potential to provide the cheap energy that miners need. As renewables surpass fossil fuels as a cheaper and more sustainable method of energy production, the incentivized competition amongst miners will further drive the development and exploration of renewable energies with the goal of achieving ever-decreasing costs of energy."),(0,r.kt)("p",null,"This incentive can already be seen playing out in the real world by observing the energy sources of Bitcoin miners:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'"The survey findings estimate that on average 39 per cent of proof-of-work mining is powered by renewable energy, primarily hydroelectric energy. Understanding the energy source of mining is important because electricity costs account for the majority of hashers\' operational expenditures - albeit with some variability across world regions - and hashers have long competed on accessing the cheapest energy source."')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.jbs.cam.ac.uk/faculty-research/centres/alternative-finance/publications/3rd-global-cryptoasset-benchmarking-study/"},"University of Cambridge, 2020")),(0,r.kt)("p",null,"More recently, in 2021, the ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=JPai5uoN2tg&themeRefresh=1"},"Bitcoin Mining Counsel")," estimates that with no environmentally-focused incentives other than Proof-of-Work, approximately 57% of Bitcoin miners primarily utilize renewable energies on their own accord. This trend can be expected to continue as ongoing development and investments in renewable technologies continue to drive the cost of renewable energy down."),(0,r.kt)("h2",{id:"energy-calculation"},"*","Energy Calculation"),(0,r.kt)("p",null,"This calculation makes the following assumptions:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The complete set of Quai miners utilize the same amount of annual energy as the complete set of Bitcoin miners."),(0,r.kt)("li",{parentName:"ol"},"Both the Bitcoin Network and Quai Network are operating at maximum throughput (5 TPS for Bitcoin, 50,000 TPS for Quai).")),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://digiconomist.net/bitcoin-energy-consumption"},"Estimated Annual Bitcoin Energy Use: 76,730,000,000 KWh")),(0,r.kt)("p",null,"Bitcoin Annual TXs Confirmed at Max Load: ",(0,r.kt)("a",{parentName:"p",href:"https://www.blockchain.com/explorer/charts/transactions-per-second"},"5 TPS")," ","*"," 31,536,000 seconds in a year = 157,680,000 TXs."),(0,r.kt)("p",null,"Bitcoin Energy Use/Single TX at Max Load: 76,730,000,000 KWh / 157,680,000 TXs = ~486.62 KWh per TX at max load."),(0,r.kt)("br",null),(0,r.kt)("p",null,"Annual Quai Energy Use (assumed for sake of comparison): 76,730,000,000 KWh"),(0,r.kt)("p",null,"Quai Annual TXs Confirmed at Max Load: 50,000 TPS ","*"," 31,536,000 seconds in a year = 1,576,800,000,000 TXs."),(0,r.kt)("p",null,"Quai Energy Use/Single TX at Max Load: 76,730,000,000 KWh / 1,576,800,000,000 transactions = ~0.05 KWh per TX at max load."))}g.isMDXComponent=!0}}]);