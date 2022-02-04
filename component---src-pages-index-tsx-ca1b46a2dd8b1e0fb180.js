"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[691],{1046:function(e,t,n){n.d(t,{w_:function(){return s}});var r=n(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=r.createContext&&r.createContext(a),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},c.apply(this,arguments)},i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function o(e){return e&&e.map((function(e,t){return r.createElement(e.tag,c({key:t},e.attr),o(e.child))}))}function s(e){return function(t){return r.createElement(u,c({attr:c({},e.attr)},t),o(e.child))}}function u(e){var t=function(t){var n,a=e.attr,l=e.size,o=e.title,s=i(e,["attr","size","title"]),u=l||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,s,{className:n,style:c(c({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),o&&r.createElement("title",null,o),e.children)};return void 0!==l?r.createElement(l.Consumer,null,(function(e){return t(e)})):t(a)}},6282:function(e,t,n){var r=n(2847),a=n(5444),l=n(7294),c=n(1279),i=n(9379),o=(0,r.default)({resolved:{},chunkName:function(){return"AnimateOnView"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:function(){return Promise.all([n.e(351),n.e(587)]).then(n.bind(n,3667))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 3667}}),s=function(e){var t=e.onClick,n=e.link,r=e.description,s=e.title,u=e.image,m=e.className,d=e.date,f=e.intersectionOptions,h=(0,i.Z)("25vh","45vh");return l.createElement(o,{intersectionOptions:f,inViewStyle:{opacity:1,translateY:-25},exitViewStyle:{opacity:0,translateY:0},className:" outline-slate-300 shadow-md dark:bg-transparent w-full h-full  outline outline-1 dark:outline-neutral-800 rounded rounded-l-md rounded-r-md  relative duration-200 "+m},l.createElement("div",{style:{height:h}},l.createElement("img",{alt:"blog-image",className:"h-full rounded-tl-md rounded-tr-md rounded-bl-none rounded-br-none w-full object-cover",src:u})),l.createElement("div",{className:"flex flex-col text-black  dark:text-white p-4 "},l.createElement("div",{className:"flex flex-col  whitespace-nowrap"},l.createElement("h1",{className:"text-2xl md:text-3xl"},s),l.createElement("p",{className:"text-gray-500 dark:text-gray-300"},d)),l.createElement("p",{className:"text-xl text-black dark:text-gray-300"},r),l.createElement("div",{className:"w-full flex justify-end"},l.createElement(a.Link,{onClick:t,className:" text-2xl px-6 py-2 -my-1 -mx-2 flex gap-x-2 items-center justify-center",to:n},"Read..",l.createElement(c.mGl,null)))))};t.Z=s},5799:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var r=n(5444),a=n(7294),l=n(782),c=n(1852),i=function(e){var t=e.onChange,n=e.checked,r=e.className;return a.createElement("div",{className:r+" dark:bg-transparent  w-16 h-16 rounded-md flex items-center justify-center transform transition-all duration-200 dark:text-white text-black "+(n?"rotate-45":"rotate-0")+"  "},a.createElement("button",{className:"w-min h-min",onClick:function(){t(n)}}," ",a.createElement("i",{className:""},n?a.createElement(c.aQ_,null):a.createElement(c.gxG,null))))},o=n(6886),s=function(){var e=(0,o.Z)(!0),t=e[0],n=e[1];return a.createElement("header",{className:"flex justify-between w-full text-xl md:text-3xl font-bold py-1 px-3  md:py-2 md:px-6 text-black dark:text-white "},a.createElement("div",{className:"flex items-center justify-center gap-x-1"},a.createElement("i",{className:"m-auto md:my-0"},a.createElement(l.AZJ,null)),a.createElement("h1",null,"portableThoughts")),a.createElement(i,{checked:"dark"===t,onChange:function(e){n("dark"===t?"light":"dark")}}))},u=JSON.parse('[{"image":"https://github.com/portableCoder/Wordly/raw/main/source/react.gif","date":"01/02/2022","title":"How I Created A CLI-Based Wordle Clone With React","description":"Meet wordly","md":"https://raw.githubusercontent.com/portableCoder/portableThoughts/main/blog/thought1.md"}]'),m=function(e){var t=(0,a.useState)(!1),n=t[0],r=t[1];return a.createElement("img",Object.assign({},e,{onLoad:function(e){r(!0)},className:"transition-all duration-300 "+e.className+"  "+(n?"opacity-100":" opacity-0")}))},d=n(1279),f=n(9379),h=n(6282);var p=function(e){return function(e,t,n){return e.replace(new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"g"),n)}(e,"-"," ")},v=function(e){return"/thoughts/"+(e=p(e)).split(" ").join("-").toLocaleLowerCase()+"/"},x=function(e){var t=e.text;return a.createElement("div",{className:"w-full py-6 relative -my-2"},a.createElement("div",{className:"w-full h-full flex  z-50 text-3xl  p-2 my-16 "},t))},g=function(){return a.createElement("div",{className:"w-full h-full my-16 flex flex-col md:grid grid-cols-2 gap-3 gap-y-16 md:gap-6 py-16 px-3 justify-center items-center overflow-y-hidden"},a.createElement("div",{className:"md:col-span-2 col-span-1"},a.createElement(x,{text:u.length>1?"Read more":"Oops.. that's all for now"})),u.map((function(e,t){return t>0&&a.createElement(h.Z,{intersectionOptions:{triggerOnce:!0,threshold:0},className:"w-full mx-auto",description:e.description,image:e.image,date:e.date,title:e.title,link:v(e.title),key:t})})))},y=n(5414),E=function(e){var t=(0,f.Z)(void 0,"80vh"),n=(0,o.Z)(!0);n[0],n[1];return a.createElement("main",{className:"h-full w-screen text-black  dark:text-white px-3  md+:px-12 md:px-20"},a.createElement(y.q,null,a.createElement("title",null,"portableThoughts")),a.createElement(s,null),a.createElement("div",{style:{height:t},className:"flex flex-col md:grid grid-cols-6 h-screen md:h-auto justify-center -my-16 md:-my-0"},a.createElement("div",{className:"col-span-4 p-2 "},a.createElement(m,{style:{height:t?"70vh":"40vh"},alt:"mainImage",src:u[0].image,className:"w-full object-cover rounded-md "})),a.createElement("div",{style:{height:t?"70vh":"30vh"},className:"col-span-2 p-2"},a.createElement("div",{className:" text-gray-500 dark:text-gray-300"},u[0].date),a.createElement("div",{className:"text-3xl"},u[0].title),a.createElement("div",{className:"text-xl"},u[0].description),a.createElement("div",{className:"w-full flex justify-end items-end h-full "},a.createElement("button",{className:"rounded-md my-8 md:my-28  h-16  bg-sky-500  w-full md:w-min  px-6 whitespace-nowrap py-3 text-xl md:text-2xl transition-all duration-500 hover:bg-green-500 text-white  "},a.createElement(r.Link,{className:"flex justify-center items-center gap-x-2",to:v(u[0].title)}," Read ",a.createElement(d.Jed,null)))))),a.createElement(g,null))}},9379:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),a=function(){return window.innerWidth<=768};var l=function(e,t){return function(){var e=(0,r.useState)(),t=e[0],n=e[1];return(0,r.useEffect)((function(){t||n(a());var e=function(){n(a())};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),t}()?e:t}},6886:function(e,t,n){var r=n(7294),a={dark:{bg:"#111216",color:"white"},light:{bg:"#f8fafc",color:"black"}},l="theme";t.Z=function(e){var t=(0,r.useState)(),n=t[0],c=t[1];return(0,r.useEffect)((function(){var e;c((e=localStorage.getItem(l),console.log(e),e||"dark"))}),[]),(0,r.useEffect)((function(){n&&(!function(e){localStorage.setItem(l,e)}(n),"dark"===n?document.body.classList.add("dark"):document.body.classList.remove("dark"),e&&(document.body.style.backgroundColor=a[n].bg))}),[n]),[n,c]}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-ca1b46a2dd8b1e0fb180.js.map