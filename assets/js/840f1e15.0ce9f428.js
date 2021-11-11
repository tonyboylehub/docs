"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4247],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8293:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={sidebar_position:1},c="Getting started",s={unversionedId:"development/clients/js-sdk/getting-started",id:"development/clients/js-sdk/getting-started",isDocsHomePage:!1,title:"Getting started",description:"Metaplex JS is a library that allows you to:",source:"@site/docs/development/clients/js-sdk/getting-started.md",sourceDirName:"development/clients/js-sdk",slug:"/development/clients/js-sdk/getting-started",permalink:"/development/clients/js-sdk/getting-started",editUrl:"https://github.com/metaplex/docs/tree/main/docs/development/clients/js-sdk/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"8. Operate Candy Machine Drop",permalink:"/create-candy/operate-cm-drop"},next:{title:"Examples",permalink:"/development/clients/js-sdk/examples"}},d=[{value:"Installation",id:"installation",children:[]},{value:"Your first request",id:"your-first-request",children:[]},{value:"How to retrieve data by other programs?",id:"how-to-retrieve-data-by-other-programs",children:[]}],u={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting started"),(0,o.kt)("p",null,"Metaplex JS is a library that allows you to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Load and Deserialize Accounts"),(0,o.kt)("li",{parentName:"ul"},"Create transactions"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[In development]")," Run Actions (mint NFT, create an auction, and so on)")),(0,o.kt)("p",null,"It works both in NodeJS and Browser."),(0,o.kt)("p",null,"In order to get started with the Metaplex JS library, you'll need to install it and have a Solana wallet to work with."),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("h4",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," version >= 14.17.0 or above (which can be checked by running ",(0,o.kt)("inlineCode",{parentName:"li"},"node -v"),"). You can use ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm"},"nvm")," for managing multiple Node versions on a single machine installed."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://yarnpkg.com/en/"},"Yarn"),". Yarn is a performant package manager for JavaScript and replaces the ",(0,o.kt)("inlineCode",{parentName:"li"},"npm")," client.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @metaplex/js\n")),(0,o.kt)("h3",{id:"your-first-request"},"Your first request"),(0,o.kt)("p",null,"The following code snippet is the most basic one you can use to get Metadata information with this library:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Connection, programs } from '@metaplex/js';\n\nconst connection = new Connection('devnet');\nconst tokenPublicKey = 'Gz3vYbpsB2agTsAwedtvtTkQ1CG9vsioqLW3r9ecNpvZ';\n\nconst run = async () => {\n  try {\n    const ownedMetadata = await programs.metadata.Metadata.load(connection, tokenPublicKey);\n    console.log(ownedMetadata);\n  } catch {\n    console.log('Failed to fetch metadata');\n  }\n};\n\nrun();\n")),(0,o.kt)("p",null,"You should get such response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"Metadata {\n  pubkey: PublicKey {\n    _bn: <BN: ed7cb71bf67ab48e4987e7a3498bfecbe1bac753a43fc8f9fa00ad9289bb78d6>\n  },\n  info: {\n    data: <Buffer 04 3c dd 7f f1 01 5b 30 73 5c 68 52 33 c0 ba 6f f7 90 d7 32 cc ff 87 9f 82 87 2b 6c d1 9a 06 18 0b 64 75 7d 20 c2 d3 ff bc c6 c5 be f5 24 7b 26 8e d5 ... 629 more bytes>,\n    executable: false,\n    lamports: 5616720,\n    owner: PublicKey {\n      _bn: <BN: b7065b1e3d17c45389d527f6b04c3cd58b86c731aa0fdb549b6d1bc03f82946>\n    },\n    rentEpoch: 200\n  },\n  data: MetadataData {\n    key: 4,\n    updateAuthority: '56bMjFLPSvZztdBk7D9g3LYTZNw3ApN6HKwyrQRCrLbL',\n    mint: '7m9gHwaYRd5BGmDedSM7pvEAfakqYbUnuNBhNVgreVB9',\n    data: MetadataDataData {\n      name: 'Cat #3',\n      symbol: '',\n      uri: 'https://arweave.net/APnrDX2KUusunMAH8dz7Dq5UfbiJKDTrOYT2-PNMuDw',\n      sellerFeeBasisPoints: 0,\n      creators: [Array]\n    },\n    primarySaleHappened: 1,\n    isMutable: 0\n  }\n}\n")),(0,o.kt)("p",null,"For the fields that match the on-chain metadata, on-chain information has priority."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pubkey")," - Account public key."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"info")," -  Information describing an account as in ",(0,o.kt)("strong",{parentName:"li"},"@solana/web3.js")," ",(0,o.kt)("a",{parentName:"li",href:"https://solana-labs.github.io/solana-web3.js/modules.html#AccountInfo"},"AccountInfo"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"data")," - Metadata program related data as described in ",(0,o.kt)("a",{parentName:"li",href:"/nft-standard"},"Token Metadata Standard"),".")),(0,o.kt)("h3",{id:"how-to-retrieve-data-by-other-programs"},"How to retrieve data by other programs?"),(0,o.kt)("p",null,"Similarly to Metadata, you can get deserialized accounts for other Metaplex's entities: Account, Metadata, Auction, Vault, AuctionManager, Store."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"await <AccountType>.load(connection, pubkey);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Connection, Account, programs } from '@metaplex/js';\nconst { metaplex: { Store, AuctionManager }, metadata: { Metadata }, auction: { Auction }, vault: { Vault } } = programs;\n\n\nconst connection = new Connection('devnet');\n\n// Metadata\nconst metadata = await Metadata.load(connection, '<pubkey>');\n// Auction\nconst auction = await Auction.load(connection, '<pubkey>');\n// Vault\nconst vault = await Vault.load(connection, '<pubkey>');\n// Metaplex\nconst auctionManager = await AuctionManager.load(connection, '<pubkey>');\nconst store = await Store.load(connection, '<pubkey>');\n")))}p.isMDXComponent=!0}}]);