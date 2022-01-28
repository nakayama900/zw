"use strict";(self.webpackChunkzi_wiki_pages=self.webpackChunkzi_wiki_pages||[]).push([[3604],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(n),h=i,k=c["".concat(d,".").concat(h)]||c[h]||m[h]||r;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},869:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),i=n(6775),r="apiTable_e8hp";var l=(0,a.forwardRef)((function(e,t){var n=e.name,r=e.children,l=function(e){for(var t=e;(0,a.isValidElement)(t);)t=a.Children.toArray(t.props.children)[0];return t}(r),o=n?n+"-"+l:l,d="#"+o,p=(0,i.k6)();return a.createElement("tr",{id:o,tabIndex:0,ref:p.location.hash===d?t:void 0,onClick:function(){p.push(d)},onKeyDown:function(e){"Enter"===e.key&&p.push(d)}},r.props.children)}));function o(e){var t=e.children,n=e.name,i=a.Children.toArray(t.props.children),o=i[0],d=i[1],p=(0,a.useRef)(null);(0,a.useEffect)((function(){var e;null==(e=p.current)||e.focus()}),[p]);var s=a.Children.map(d.props.children,(function(e){return a.createElement(l,{name:n,ref:p},e)}));return a.createElement("table",{className:r},o,a.createElement("tbody",null,s))}},7792:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return m},default:function(){return h}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l=n(869),o=["components"],d={slug:"/gallery/collection",title:"\ud83d\udd3a Collection Guide",sidebar_position:1,image:"/img/z-shell_501x501.png",description:"The gallery of invocations",keywords:["collection","zsh","z-shell","zi"]},p=void 0,s={unversionedId:"gallery/collection/01_1_collection",id:"gallery/collection/01_1_collection",title:"\ud83d\udd3a Collection Guide",description:"The gallery of invocations",source:"@site/docs/gallery/collection/01_1_collection.md",sourceDirName:"gallery/collection",slug:"/gallery/collection",permalink:"/docs/gallery/collection",editUrl:"https://github.com/z-shell/zw/tree/main/docs/gallery/collection/01_1_collection.md",tags:[],version:"current",lastUpdatedBy:"Salvydas Lukosius",lastUpdatedAt:1642322710,formattedLastUpdatedAt:"1/16/2022",sidebarPosition:1,frontMatter:{slug:"/gallery/collection",title:"\ud83d\udd3a Collection Guide",sidebar_position:1,image:"/img/z-shell_501x501.png",description:"The gallery of invocations",keywords:["collection","zsh","z-shell","zi"]},sidebar:"tutorialSidebar",previous:{title:"Statistics & Benchmark",permalink:"/docs/guides/benchmark"},next:{title:"\ud83d\udd3a Programs",permalink:"/docs/gallery/collection/programs"}},m=[{value:"Header pefixed tags",id:"header-pefixed-tags",children:[],level:2},{value:"Quick overview of invocations",id:"quick-overview-of-invocations",children:[{value:"Minimal",id:"minimal",children:[{value:"With Turbo mode and with for syntax",id:"with-turbo-mode-and-with-for-syntax",children:[],level:4},{value:"Without using Turbo mode and without the for syntax",id:"without-using-turbo-mode-and-without-the-for-syntax",children:[],level:4}],level:3},{value:"Oh-My-Zsh",id:"oh-my-zsh",children:[{value:"With Turbo mode and for syntax",id:"with-turbo-mode-and-for-syntax",children:[],level:4},{value:"Without Turbo and for syntax",id:"without-turbo-and-for-syntax",children:[],level:4}],level:3},{value:"LS_COLORS",id:"ls_colors",children:[],level:3},{value:"Direnv",id:"direnv",children:[],level:3},{value:"Compiling programs",id:"compiling-programs",children:[],level:3}],level:2}],c={toc:m};function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Some installations may require additional functionally, it can be done by installing required annexes as meta plugin:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"zi light-mode for z-shell/z-a-meta-plugins @annexes\n")),(0,r.kt)("p",{parentName:"div"},"More info: ",(0,r.kt)("a",{parentName:"p",href:"/docs/ecosystem/annexes"},"ecosystem/annexes")))),(0,r.kt)("h2",{id:"header-pefixed-tags"},"Header pefixed tags"),(0,r.kt)("p",null,"For the ",(0,r.kt)("a",{parentName:"p",href:"https://z-shell.pages.dev/search/?q=GH-R"},"search"),", prefixed tags helps as minimal description to the visible results."),(0,r.kt)(l.Z,{mdxType:"APITable"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Tag name"),(0,r.kt)("th",{parentName:"tr",align:null},"Install type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GH-R"),(0,r.kt)("td",{parentName:"tr",align:null},"GitHub release")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SC"),(0,r.kt)("td",{parentName:"tr",align:null},"Script")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"B"),(0,r.kt)("td",{parentName:"tr",align:null},"Build")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RA"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/ecosystem/annexes/rust"},"Rust Annex"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"THP"),(0,r.kt)("td",{parentName:"tr",align:null},"Theme / Prompt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"COMP"),(0,r.kt)("td",{parentName:"tr",align:null},"Completion"))))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Additional installation methods")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/ecosystem/annexes/meta-plugins"},"Meta plugins")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/ecosystem/packages"},"Packages"))))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/z-shell/zi/issues/new/choose"},"Report issues")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/z-shell/zi/discussions/categories/ideas"},"Suggestions"))),(0,r.kt)("p",{parentName:"div"},"Any contributions you make will benefit everybody else and are greatly appreciated."))),(0,r.kt)("h2",{id:"quick-overview-of-invocations"},"Quick overview of invocations"),(0,r.kt)("h3",{id:"minimal"},"Minimal"),(0,r.kt)("h4",{id:"with-turbo-mode-and-with-for-syntax"},"With ",(0,r.kt)("a",{parentName:"h4",href:"../getting_started/overview#turbo-mode-zsh--53"},"Turbo mode")," and with ",(0,r.kt)("a",{parentName:"h4",href:"/docs/guides/syntax#the-for-syntax"},(0,r.kt)("inlineCode",{parentName:"a"},"for"))," syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"{1} title=~/.zshrc","{1}":!0,title:"~/.zshrc"},'zi wait lucid light-mode for \\\n  atinit"zicompinit; zicdreplay" \\\n    z-shell/F-Sy-H \\\n  atload"_zsh_autosuggest_start" \\\n    zsh-users/zsh-autosuggestions \\\n  blockf atpull\'zi creinstall -q .\' \\\n    zsh-users/zsh-completions\n')),(0,r.kt)(l.Z,{mdxType:"APITable"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"wait")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0Load 0 seconds (about 5 ms exactly) after prompt (",(0,r.kt)("a",{parentName:"td",href:"/docs/getting_started/overview#turbo-mode-zsh--53"},"Turbo mode"),").")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lucid")),(0,r.kt)("td",{parentName:"tr",align:"left"},'Silence the under-prompt messages ("',(0,r.kt)("inlineCode",{parentName:"td"},"Loaded {name of the plugin}"),'").')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"light-mode")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Load the plugin in ",(0,r.kt)("inlineCode",{parentName:"td"},"light")," mode, in which the tracking of plugin (i.e. activity report gathering, accessible via the ",(0,r.kt)("inlineCode",{parentName:"td"},"zi report {plugin-name}")," subcommand) is being disabled; note that for Turbo mode, the performance gains are almost ",(0,r.kt)("inlineCode",{parentName:"td"},"0"),", so in this mode, you can load all plugins with the tracking, i.e.: the ",(0,r.kt)("inlineCode",{parentName:"td"},"light-mode")," ice can be removed from the command.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"atpull'\u2026'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Execute after updating the plugin \u2013 the command in the ice will install any new completions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"atinit'\u2026'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Execute code before loading plugin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"atload'\u2026'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Execute code after loading plugin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"zicompinit")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Equals to\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"autoload compinit; compinit"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"zicdreplay")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Execute ",(0,r.kt)("inlineCode",{parentName:"td"},"compdef \u2026")," calls that plugins did \u2013\xa0they were recorded, so that ",(0,r.kt)("inlineCode",{parentName:"td"},"compinit")," can be called later (",(0,r.kt)("inlineCode",{parentName:"td"},"compinit")," provides the ",(0,r.kt)("inlineCode",{parentName:"td"},"compdef")," function, so it must be ran before issuing the taken-over ",(0,r.kt)("inlineCode",{parentName:"td"},"compdef"),"s with ",(0,r.kt)("inlineCode",{parentName:"td"},"zicdreplay"),")."))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"syntax-highlighting plugins (like ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/z-shell/F-Sy-H"},"F-Sy-H")," or ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/zsh-users/zsh-syntax-highlighting"},"zsh-syntax-highlighting"),") theoretically expect to be loaded last, even after the completion initialization (i.e. ",(0,r.kt)("inlineCode",{parentName:"li"},"compinit")," function), however, in practice, you just have to ensure that such plugin is loaded after plugins that are issuing ",(0,r.kt)("inlineCode",{parentName:"li"},"compdef")," \u2013 which basically means completions that aren't using the underscore-starting function file; the completion initialization still has to be performed before syntax-highlighting plugin, hence the ",(0,r.kt)("inlineCode",{parentName:"li"},"atinit'\u2026'")," ice, which will load ",(0,r.kt)("inlineCode",{parentName:"li"},"compinit")," right before loading the plugin,"),(0,r.kt)("li",{parentName:"ul"},"the syntax-highlighting and suggestions plugins are loaded early for a better user experience.")),(0,r.kt)("h4",{id:"without-using-turbo-mode-and-without-the-for-syntax"},"Without using ",(0,r.kt)("a",{parentName:"h4",href:"/docs/getting_started/overview#turbo-mode-zsh--53"},"Turbo mode")," and without the ",(0,r.kt)("a",{parentName:"h4",href:"/docs/guides/syntax#the-for-syntax"},(0,r.kt)("inlineCode",{parentName:"a"},"for"))," syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"zi ice blockf atpull'zi creinstall -q .'\nzi light zsh-users/zsh-completions\n\n(\u2026)\n\nautoload compinit\ncompinit\n\n(\u2026)\n\nzi light z-shell/F-Sy-H\nzi light zsh-users/zsh-autosuggestions\n")),(0,r.kt)("p",null,"Without ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting_started/overview#turbo-mode-zsh--53"},"Turbo")," the syntax-highlighting plugin can be loaded at the end, as it doesn't make any difference (the prompt will appear after loading all objects, anyway)."),(0,r.kt)("h3",{id:"oh-my-zsh"},"Oh-My-Zsh"),(0,r.kt)("h4",{id:"with-turbo-mode-and-for-syntax"},"With ",(0,r.kt)("a",{parentName:"h4",href:"/docs/getting_started/overview#turbo-mode-zsh--53"},"Turbo mode")," and ",(0,r.kt)("a",{parentName:"h4",href:"/docs/guides/syntax#the-for-syntax"},(0,r.kt)("inlineCode",{parentName:"a"},"for"))," syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# A.\nsetopt promptsubst\n\n# B.\nzi wait lucid for \\\n  OMZL::git.zsh \\\n  atload"unalias grv" \\\n  OMZP::git\n\nPS1="READY >" # provide a simple prompt till the theme loads\n\n# C.\nzi wait\'!\' lucid for \\\n  OMZL::prompt_info_functions.zsh \\\n  OMZT::gnzh\n\n# D.\nzi wait lucid for \\\n  atinit"zicompinit; zicdreplay" \\\n  z-shell/fast-syntax-highlighting \\\n  OMZP::colored-man-pages \\\n  as"completion" \\\n  OMZP::docker/_docker\n')),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"A")," - Most themes use this option."),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"B")," - OMZ themes use this library and some other use also the plugin. It provides many aliases \u2013 ",(0,r.kt)("inlineCode",{parentName:"p"},"atload'\u2026'")," shows how to disable some of them (e.g.: to use program ",(0,r.kt)("inlineCode",{parentName:"p"},"rgburke/grv"),")."),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"C")," - Set OMZ theme. Loaded separately because the theme needs the ",(0,r.kt)("inlineCode",{parentName:"p"},"!")," passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"wait")," ice to reset the prompt after loading the snippet in Turbo."),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"D")," - Some plugins: a) syntax-highlighting, loaded possibly early for a better user experience), b) example functional plugin, c) Docker completion."))),(0,r.kt)("p",null,"Above setup loads everything after prompt, because of preceding ",(0,r.kt)("inlineCode",{parentName:"p"},"wait")," ice. That is called ",(0,r.kt)("strong",{parentName:"p"},"Turbo mode"),", it shortens Zsh startup time by ",(0,r.kt)("u",null,"50%-80%"),", e.g. instead of 200 ms, it'll be getting your shell started up after ",(0,r.kt)("strong",{parentName:"p"},"40 ms"),"."),(0,r.kt)("h4",{id:"without-turbo-and-for-syntax"},"Without ",(0,r.kt)("a",{parentName:"h4",href:"/docs/getting_started/overview#turbo-mode-zsh--53"},"Turbo")," and ",(0,r.kt)("a",{parentName:"h4",href:"/docs/guides/syntax#the-for-syntax"},(0,r.kt)("inlineCode",{parentName:"a"},"for"))," syntax"),(0,r.kt)("p",null,"The same setup using the classic syntax and without Turbo mode (prompt will be initially set like in typical, normal setup \u2013 ",(0,r.kt)("strong",{parentName:"p"},"you can remove ",(0,r.kt)("inlineCode",{parentName:"strong"},"wait")," only from the theme plugin")," and its dependencies to have the same effect while still using Turbo for everything remaining):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# A.\nsetopt promptsubst\n\n# B.\nzi snippet OMZL::git.zsh\n\n# C.\nzi ice atload"unalias grv"\nzi snippet OMZP::git\n\n# D.\nzi for OMZL::prompt_info_functions.zsh OMZT::gnzh\n\n# E.\nzi snippet OMZP::colored-man-pages\n\n# F.\nzi ice as"completion"\nzi snippet OMZP::docker/_docker\n\n# G.\nzi ice atinit"zicompinit; zicdreplay"\nzi light z-shell/F-Sy-H\n')),(0,r.kt)("p",null,"In general, ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting_started/overview#turbo-mode-zsh--53"},"Turbo")," can be optionally enabled only for a subset of plugins or for all plugins."),(0,r.kt)("h3",{id:"ls_colors"},"LS_COLORS"),(0,r.kt)("p",null,"A repository ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/trapd00r/LS_COLORS"},"trapd00r/LS_COLORS")," provides a file with color definitions for GNU ",(0,r.kt)("inlineCode",{parentName:"p"},"ls")," command (and also for ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ogham/exa"},"ogham/exa"),"."),(0,r.kt)("p",null,"Typically one does ",(0,r.kt)("inlineCode",{parentName:"p"},"eval $( dircolors -b $HOME/LS_COLORS)")," to process this file and set the environment for ",(0,r.kt)("inlineCode",{parentName:"p"},"ls"),". However this means ",(0,r.kt)("inlineCode",{parentName:"p"},"dircolors")," is run every shell startup."),(0,r.kt)("p",null,"This costs much time because a fork has to be done and the program (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"dircolors"),") binary needs to be loaded and executed, and because ",(0,r.kt)("inlineCode",{parentName:"p"},"dircolors")," loads the colors' definitions and processes them. Following ZI invocation solves this problem:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"zi ice atclone'dircolors -b LS_COLORS > clrs.zsh' \\\n  atpull'%atclone' pick\"clrs.zsh\" nocompile'!' \\\n  atload'zstyle \":completion:*\" list-colors \u201c${(s.:.)LS_COLORS}\u201d'\nzi light trapd00r/LS_COLORS\n")),(0,r.kt)(l.Z,{mdxType:"APITable"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"atclone'\u2026'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Generate shell script, but instead of passing it to ",(0,r.kt)("inlineCode",{parentName:"td"},"eval"),", save it to file. The ",(0,r.kt)("inlineCode",{parentName:"td"},"atclone'\u2026'")," is being ran on the ",(0,r.kt)("strong",{parentName:"td"},"installation")," while the ",(0,r.kt)("inlineCode",{parentName:"td"},"atpull'\u2026'")," hook is being run on an ",(0,r.kt)("strong",{parentName:"td"},"update")," of the ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/trapd00r/LS_COLORS"},(0,r.kt)("strong",{parentName:"a"},"trapd00r/LS_COLORS"))," plugin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"atpull'%atclone'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Do the same at any update of the plugin the ",(0,r.kt)("inlineCode",{parentName:"td"},"%atclone")," is just a special string that denotes the ",(0,r.kt)("inlineCode",{parentName:"td"},"atclone'\u2026'")," hook and is copied onto the ",(0,r.kt)("inlineCode",{parentName:"td"},"atpull'\u2026'")," hook.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'pick"clrs.zsh"')),(0,r.kt)("td",{parentName:"tr",align:"left"},"Source the previously generated file ",(0,r.kt)("inlineCode",{parentName:"td"},"clrs.zsh"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nocompile'!'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Invokes compilation ",(0,r.kt)("strong",{parentName:"td"},"after")," the ",(0,r.kt)("inlineCode",{parentName:"td"},"atclone'\u2026'")," ",(0,r.kt)("a",{parentName:"td",href:"/docs/guides/ice-modifiers"},"ice-modifier")," (the exclamation mark causes this).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"atload'\u2026'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Additionally sets up the Zsh completion to use the colors provided by the trapd00r package."))))),(0,r.kt)("p",null,"This way, except for the plugin installation and update, ",(0,r.kt)("inlineCode",{parentName:"p"},"dircolors")," isn't ran, just normal sourcing is done. The everyday sourced file (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"clrs.zsh"),") is even being compiled to speed up the loading."),(0,r.kt)("h3",{id:"direnv"},"Direnv"),(0,r.kt)("p",null,"The project ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/direnv/direnv"},(0,r.kt)("strong",{parentName:"a"},"direnv/direnv"))," registers itself in Z shell to modify the environment on directory change. This registration is most often done by ",(0,r.kt)("inlineCode",{parentName:"p"},'eval "$(direnv hook zsh)"')," added to zshrc."),(0,r.kt)("p",null,"The drawback of this standard procedure is that the ",(0,r.kt)("inlineCode",{parentName:"p"},"direnv")," binary is run on every shell startup and significantly slows it down. ZI allows to solve this in the following way:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"zi as\"program\" make'!' atclone'./direnv hook zsh > zhook.zsh' \\\n  atpull'%atclone' pick\"direnv\" src\"zhook.zsh\" for \\\n    direnv/direnv\n")),(0,r.kt)(l.Z,{mdxType:"APITable"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"make'!'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Compile ",(0,r.kt)("inlineCode",{parentName:"td"},"direnv")," (it's written in Go lang); the exclamation mark means: run the ",(0,r.kt)("inlineCode",{parentName:"td"},"make")," first, before ",(0,r.kt)("inlineCode",{parentName:"td"},"atclone'\u2026'")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"atpull'\u2026'")," hooks.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"atclone'\u2026'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Initially (right after installing the plugin) generate the registration code and save it to ",(0,r.kt)("inlineCode",{parentName:"td"},"zhook.zsh")," (instead of passing to ",(0,r.kt)("inlineCode",{parentName:"td"},"eval"),").")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"atpull'%atclone'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Regenerate the registration code also on update. The ",(0,r.kt)("inlineCode",{parentName:"td"},"atclone'\u2026'")," runs on ",(0,r.kt)("strong",{parentName:"td"},"installation")," while ",(0,r.kt)("inlineCode",{parentName:"td"},"atpull'\u2026'")," runs on ",(0,r.kt)("strong",{parentName:"td"},"update")," of the plugin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"src'zhook.zsh'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Load (",(0,r.kt)("inlineCode",{parentName:"td"},"source"),") the generated registration code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pick'direnv'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Ensure ",(0,r.kt)("inlineCode",{parentName:"td"},"+x")," permission on the binary")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"as'program'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The plugin is a program, there's no main file to the source."))))),(0,r.kt)("p",null,"This way registration code is generated once every installation and update, to then be simply sourced without running ",(0,r.kt)("inlineCode",{parentName:"p"},"direnv"),"."),(0,r.kt)("p",null,"The project is also available as a binary ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/direnv/direnv/releases/"},"Github releases"),". This distribution can be installed by:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'zi from"gh-r" as"program" mv"direnv* -> direnv" \\\n  atclone\'./direnv hook zsh > zhook.zsh\' atpull\'%atclone\' \\\n  pick"direnv" src="zhook.zsh" for \\\n    direnv/direnv\n')),(0,r.kt)(l.Z,{mdxType:"APITable"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"from'gh-r'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Install from ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/direnv/direnv/releases/"},"Github releases"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mv'direnv* -> direnv'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"After installation, rename ",(0,r.kt)("inlineCode",{parentName:"td"},"direnv.linux-386")," or similar file to ",(0,r.kt)("inlineCode",{parentName:"td"},"direnv"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"atclone'\u2026'"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"atpull'\u2026'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"As in previous example")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pick'direnv'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"As in previous example.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"as'program'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"As in previous example"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"zi ice as\"program\" make'!' atclone'./direnv hook zsh > zhook.zsh' \\\n  atpull'%atclone' src\"zhook.zsh\"\nzi light direnv/direnv\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"make'!'")," \u2013 execute ",(0,r.kt)("inlineCode",{parentName:"li"},"make")," before ",(0,r.kt)("inlineCode",{parentName:"li"},"atclone'\u2026'")," and before ",(0,r.kt)("inlineCode",{parentName:"li"},"atpull'\u2026'")," (see ",(0,r.kt)("inlineCode",{parentName:"li"},"make")," above),"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src'zhook.zsh'")," \u2013\xa0source file ",(0,r.kt)("inlineCode",{parentName:"li"},"zhook.zsh"),".")),(0,r.kt)("p",null,"In general, Direnv works by hooking up to Zsh. The code that does this is provided by program ",(0,r.kt)("inlineCode",{parentName:"p"},"direnv")," (built by ",(0,r.kt)("inlineCode",{parentName:"p"},"make'\u2026'"),"). Above ",(0,r.kt)("inlineCode",{parentName:"p"},"atclone'\u2026'")," puts this code into file ",(0,r.kt)("inlineCode",{parentName:"p"},"zhook.zsh"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"src''")," sources it. This way ",(0,r.kt)("inlineCode",{parentName:"p"},"direnv hook zsh")," is executed only on clone and update, and Zsh starts faster."),(0,r.kt)("h3",{id:"compiling-programs"},"Compiling programs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'zi ice as"program" atclone"rm -f src/auto/config.cache; ./configure" \\\n  atpull"%atclone" make pick"src/vim"\nzi light vim/vim\n')),(0,r.kt)(l.Z,{mdxType:"APITable"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"as'program'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add file selected by ",(0,r.kt)("inlineCode",{parentName:"td"},"pick'\u2026'")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"$PATH"),", and do not source it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"atclone'\u2026'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Execute code\xa0after downloading.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"atpull'%atclone'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Execute the same code ",(0,r.kt)("inlineCode",{parentName:"td"},"atclone'\u2026'")," is given, but after successful update.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"make")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0Run ",(0,r.kt)("inlineCode",{parentName:"td"},"make")," after ",(0,r.kt)("inlineCode",{parentName:"td"},"atclone'\u2026'")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"atpull'\u2026'")," (note: ",(0,r.kt)("inlineCode",{parentName:"td"},"make'!'")," will execute before them).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pick'src/vim'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set executable flag on ",(0,r.kt)("inlineCode",{parentName:"td"},"src/vim"),", hint that ",(0,r.kt)("inlineCode",{parentName:"td"},"src/")," should be added to ",(0,r.kt)("inlineCode",{parentName:"td"},"$PATH"),"."))))),(0,r.kt)("p",null,"The same but with ",(0,r.kt)("strong",{parentName:"p"},"installation")," (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"make install")," is being run) under ",(0,r.kt)("inlineCode",{parentName:"p"},"$ZPFX")," (",(0,r.kt)("inlineCode",{parentName:"p"},"~/.zi/polaris")," by default):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"zi ice as'program' atclone'rm -f src/auto/config.cache; \\\n  ./configure --prefix=$ZPFX' atpull'%atclone' make'all install' pick'$ZPFX/bin/vim'\nzi light vim/vim\n")),(0,r.kt)(l.Z,{mdxType:"APITable"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"as'program'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"As above.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"atclone'\u2026'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"As above ",(0,r.kt)("strong",{parentName:"td"},"plus")," pass ",(0,r.kt)("inlineCode",{parentName:"td"},"--prefix=$ZPFX")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"./configure"),", to set the installation directory.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"atpull'%atclone'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"As above.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"make")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0As above, but also run the ",(0,r.kt)("inlineCode",{parentName:"td"},"install")," target.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pick'src/vim'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"as above, but for different path (",(0,r.kt)("inlineCode",{parentName:"td"},"$ZPFX/bin/vim"),")."))))))}h.isMDXComponent=!0}}]);