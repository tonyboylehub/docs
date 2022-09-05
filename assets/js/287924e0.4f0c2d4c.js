"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5092],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=d(n),h=i,m=s["".concat(l,".").concat(h)]||s[h]||u[h]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},27878:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return d}});var a=n(83117),i=(n(67294),n(3905));const r={sidebar_label:"7. Update the Candy Machine"},o="Update the Candy Machine",c={unversionedId:"deprecated/candy-machine-js-cli/update",id:"deprecated/candy-machine-js-cli/update",title:"Update the Candy Machine",description:"Most configuration settings can be updated in a CMv2 with a single command, except:",source:"@site/docs/06-deprecated/00-candy-machine-js-cli/06-update.md",sourceDirName:"06-deprecated/00-candy-machine-js-cli",slug:"/deprecated/candy-machine-js-cli/update",permalink:"/deprecated/candy-machine-js-cli/update",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/06-deprecated/00-candy-machine-js-cli/06-update.md",tags:[],version:"current",lastUpdatedAt:1662398114,formattedLastUpdatedAt:"Sep 5, 2022",sidebarPosition:6,frontMatter:{sidebar_label:"7. Update the Candy Machine"},sidebar:"sidebar",previous:{title:"6. Mint Tokens",permalink:"/deprecated/candy-machine-js-cli/mint-tokens"},next:{title:"8. Withdraw Rent",permalink:"/deprecated/candy-machine-js-cli/withdraw"}},l={},d=[{value:"Update Settings",id:"update-settings",level:2},{value:"Update Authority",id:"update-authority",level:2},{value:"Show Settings",id:"show-settings",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"update-the-candy-machine"},"Update the Candy Machine"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Most")," configuration settings can be updated in a ",(0,i.kt)("inlineCode",{parentName:"p"},"CMv2")," with a single command, except:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"number")," of items in the Candy Machine can only be updated when ",(0,i.kt)("inlineCode",{parentName:"p"},"hiddenSettings")," are being used.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"switching to use ",(0,i.kt)("inlineCode",{parentName:"p"},"hiddenSettings")," is only possible if the ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," of items is equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),". After the switch, you will be able to update the ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," of items."))),(0,i.kt)("p",null,"In case you require to change the ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," of items after creating a ",(0,i.kt)("inlineCode",{parentName:"p"},"CMv2")," without ",(0,i.kt)("inlineCode",{parentName:"p"},"hiddenSettings"),", you can withdraw rent of your current ",(0,i.kt)("inlineCode",{parentName:"p"},"CMv2")," and then create a new one. "),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"You need to be careful when updating a live Candy Machine, since setting a wrong value will immediately affect its functionality.")),(0,i.kt)("h2",{id:"update-settings"},"Update Settings"),(0,i.kt)("p",null,"You will need to prepare a config file with the updated setting values. For example, if we want to change the mint price from the original value of ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"0.5")," SOL and keep all other values unchanged, we would modify our ",(0,i.kt)("inlineCode",{parentName:"p"},"config.json")," file to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "price": 0.5,\n    "number": 10,\n    "gatekeeper": null,\n    "solTreasuryAccount": "<YOUR WALLET ADDRESS>",\n    "splTokenAccount": null,\n    "splToken": null,\n    "goLiveDate": "25 Dec 2021 00:00:00 GMT",\n    "endSettings": null,\n    "whitelistMintSettings": null,\n    "hiddenSettings": null,\n    "storage": "arweave",\n    "ipfsInfuraProjectId": null,\n    "ipfsInfuraSecret": null,\n    "awsS3Bucket": null,\n    "noRetainAuthority": false,\n    "noMutable": false\n}\n')),(0,i.kt)("p",null,"With the updated config file, we need to run the ",(0,i.kt)("inlineCode",{parentName:"p"},"update_candy_machine")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ts-node ~/deprecated-clis/src/candy-machine-v2-cli.ts update_candy_machine \\\n    -e devnet \\\n    -k ~/.config/solana/devnet.json \\\n    -cp config.json \\\n    -c example\n")),(0,i.kt)("p",null,"If successful, the command will output the message with the update transaction confirmation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"update_candy_machine finished 2zT344ZjS5FSJFsZRYE7Yu7Fg9sBtDQESSzPv1kNGezP7Mx8vDbf8geDQGvC3iMdbfo2GWCdPrZbsq58ZwmQ8136\n")),(0,i.kt)("h2",{id:"update-authority"},"Update Authority"),(0,i.kt)("p",null,"You can also update the authority of the Candy Machine, which is equivalent to giving away the control of the Candy Machine."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ts-node ~/deprecated-clis/src/candy-machine-v2-cli.ts update_candy_machine \\\n    -e devnet \\\n    -k ~/.config/solana/devnet.json \\\n    -cp config.json \\\n    -c example \\\n    --new-authority 7idYCnwadSG8quKNr2qqtt2WVTGy8xwTF5uFvAuHyY1g\n")),(0,i.kt)("p",null,"The command above transfers the authority of the Candy Machine to the wallet ",(0,i.kt)("inlineCode",{parentName:"p"},"7idYCnwadSG8quKNr2qqtt2WVTGy8xwTF5uFvAuHyY1g"),". After this point, only the owner of that wallet can operate the Candy Machine."),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"This operation is irreversible, once you change the authority of the Candy Machine, you will lose the right to operate it.")),(0,i.kt)("h2",{id:"show-settings"},"Show Settings"),(0,i.kt)("p",null,"To verify your updates were successful, you can run the ",(0,i.kt)("inlineCode",{parentName:"p"},"show")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ts-node ~/deprecated-clis/src/candy-machine-v2-cli.ts show \\\n    -e devnet \\\n    -k ~/.config/solana/devnet.json \\\n    -c example\n")),(0,i.kt)("p",null,"This will get the candy machine settings and print them to the console."))}u.isMDXComponent=!0}}]);