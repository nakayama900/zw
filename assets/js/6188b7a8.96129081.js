"use strict";(self.webpackChunkzi_wiki_pages=self.webpackChunkzi_wiki_pages||[]).push([[2375],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2556:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"test",title:"\ud83d\udca0 Test",description:"Annex - Test documentation",keywords:["annex","test","zsh","z-shell","zi"]},l=void 0,c={unversionedId:"ecosystem/annexes/test",id:"ecosystem/annexes/test",title:"\ud83d\udca0 Test",description:"Annex - Test documentation",source:"@site/docs/ecosystem/annexes/01_9_test.md",sourceDirName:"ecosystem/annexes",slug:"/ecosystem/annexes/test",permalink:"/docs/ecosystem/annexes/test",editUrl:"https://github.com/z-shell/zw/tree/main/docs/ecosystem/annexes/01_9_test.md",tags:[],version:"current",lastUpdatedBy:"Salvydas Lukosius",lastUpdatedAt:1641761287,formattedLastUpdatedAt:"1/9/2022",frontMatter:{id:"test",title:"\ud83d\udca0 Test",description:"Annex - Test documentation",keywords:["annex","test","zsh","z-shell","zi"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udca0 Rust",permalink:"/docs/ecosystem/annexes/rust"},next:{title:"\ud83d\udce6 Quick overview",permalink:"/docs/ecosystem/packages"}},p=[{value:"Configuration",id:"configuration",children:[{value:"Examples",id:"examples",children:[],level:3}],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/z-shell/z-a-test"},"Test")," annex runs tests (via ",(0,i.kt)("inlineCode",{parentName:"p"},"make test"),", for example) \u2013 if it finds any of them \u2013 after installing and updating a plugin or snippet. Simply load it like any other plugin to make it active:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"zi light z-shell/z-a-test\n")),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"To run the tests in a verbose mode, issue:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"zstyle :zi:annex:test quiet 0\n")),(0,i.kt)("p",null,"before installing or updating the plugin. To skip tests for a single plugin, add ",(0,i.kt)("inlineCode",{parentName:"p"},"notest")," ice:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"zi ice notest\nzi load \u2026\n")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Example activation in the default quiet mode:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/z-shell/z-a-test/main/images/z-p-test-1.png",alt:"z-a-test activation"})),(0,i.kt)("p",null,"Example activation in non-quiet mode:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/z-shell/z-a-test/main/images/z-p-test-2.png",alt:"z-a-test activation"})))}m.isMDXComponent=!0}}]);