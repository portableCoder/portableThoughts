(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[873],{5272:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/thoughts/[id]",function(){return c(6105)}])},2680:function(a,b,c){"use strict";c.d(b,{Z:function(){return o}});var d=c(1799),e=c(603),f=c(5893),g=c(7294),h=c(2585),i=c(3750),j=function(a){var b=a.onChange,c=a.checked,d=a.className;return(0,f.jsx)("div",{className:"".concat(d," dark:bg-transparent  w-16 h-16 rounded-md flex items-center justify-center transform transition-all duration-200 dark:text-white text-black ").concat(c?"rotate-45":"rotate-0","  "),children:(0,f.jsxs)("button",{className:"w-min h-min",onClick:function(){b&&b(c)},children:[" ",(0,f.jsx)("i",{className:"",children:c?(0,f.jsx)(i.aQ_,{}):(0,f.jsx)(i.gxG,{})})]})})},k={dark:{bg:"#111216",color:"white"},light:{bg:"#f8fafc",color:"black"}},l="theme",m=function(a){var b=function(a){localStorage.setItem(l,a)},c=(0,g.useState)(),d=c[0],e=c[1];return(0,g.useEffect)(function(){e(localStorage.getItem(l)||"dark")},[]),(0,g.useEffect)(function(){d&&(b(d),"dark"===d?document.body.classList.add("dark"):document.body.classList.remove("dark"),a&&(document.body.style.backgroundColor=k[d].bg))},[d]),[d,e]},n="portableThoughts",o=function(){var a,b=(0,e.Z)(m(!0),2),c=b[0],i=b[1],l=(0,g.useState)(!0),o=l[0],p=l[1],q=(0,g.useState)({text:"",index:0,rev:!1}),r=q[0],s=q[1];return(0,g.useEffect)(function(){var a=setInterval(function(){p(function(a){return!a})},500),b=setInterval(function(){s(function(a){var b=(0,d.Z)({},a),c=b.text,e=b.rev,f=b.index;return e?(c=c.slice(0,-1),--f<0&&(f=0,c="",e=!1)):(c+=n.charAt(f),++f>n.length&&(f=n.length-1,e=!0)),{text:c,rev:e,index:f}})},400);return function(){clearInterval(a),clearInterval(b)}},[]),(0,f.jsxs)("header",{style:{backgroundColor:(null===(a=k[c])|| void 0===a?void 0:a.bg)||k.dark.bg},className:"flex justify-between w-full text-xl md:text-3xl font-bold py-1 px-3 md:py-2 md:px-6 text-black dark:text-white ",children:[(0,f.jsxs)("div",{className:"flex items-center justify-center gap-x-1",children:[(0,f.jsx)("i",{className:"m-auto md:my-0 hover:animate-bounce",children:(0,f.jsx)(h.AZJ,{})}),(0,f.jsxs)("h1",{className:"hover:animate-pulse flex ",children:[r.text,o&&(0,f.jsx)("p",{className:"text-green-500",children:"_"})," "]})]}),(0,f.jsx)(j,{checked:"dark"===c,onChange:function(a){"dark"===c?i("light"):i("dark")}})]})}},5913:function(a,b,c){"use strict";c.d(b,{Z:function(){return f}});var d=c(7294),e=function(){return window.innerWidth<=768},f=function(a,b){var c,f,g;return(f=(c=(0,d.useState)())[0],g=c[1],(0,d.useEffect)(function(){f||g(e());var a=function(){g(e())};return window.addEventListener("resize",a),function(){window.removeEventListener("resize",a)}},[]),f)?a:b}},6105:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return B},default:function(){return C}});var d=c(5893),e=c(7294),f=c(8817),g=c(5843),h=c(1296),i=c.n(h),j=c(5913),k=c(9008),l=c.n(k),m=c(9920),n=c(1799),o=c(9396),p=c(9534),q=c(603),r=c(5396),s=c(4415),t=c(8526),u=c(9623),v=c(547),w=c(717),x=Object.entries({javascript:t.Z,typescript:u.Z,tsx:v.Z,jsx:w.Z});x.forEach(function(a){var b=(0,q.Z)(a,2),c=b[0],d=b[1];return r.Z.registerLanguage(c,d)});var y={code:function(a){a.node;var b=a.inline,c=a.className,e=a.children,f=(0,p.Z)(a,["node","inline","className","children"]),g=/language-(\w+)/.exec(c||"");return!b&&g?(0,d.jsx)(r.Z,(0,o.Z)((0,n.Z)({className:"".concat(c||""," not-prose h-1/2 rounded-md mx-0"),style:s.Z,language:g[1],PreTag:"div"},f),{children:String(e).replace(/\n$/,"")})):(0,d.jsx)("code",(0,o.Z)((0,n.Z)({},f),{children:e}))}},z=c(436),A=c(2680),B=!0,C=function(a){var b=a.pageContext,c=(0,j.Z)("35vh","75vh"),h=b.title,k=(b.date,b.md),n=b.description,o=b.image,p=(0,e.useState)(0),q=p[0],r=p[1],s=(0,m.useSpring)({width:q}),t=i()(function(a){var b,c=window.scrollY,d=document.body.clientHeight;r(Math.round(100*(c/(d-window.innerHeight)))*window.innerWidth/100)},150);return(0,e.useEffect)(function(){return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}},[]),(0,d.jsxs)("main",{className:"w-screen h-full text-black dark:text-white overflow-x-hidden",children:[(0,d.jsxs)(l(),{children:[(0,d.jsx)(z.Z,{}),(0,d.jsx)("title",{children:"portableThoughts - ".concat(h||"Not found..")}),(0,d.jsx)("meta",{property:"og:title",content:h}),(0,d.jsx)("meta",{property:"og:description",content:n}),(0,d.jsx)("meta",{property:"og:image",content:o})]}),(0,d.jsxs)("div",{className:"fixed top-0 left-0 w-full",children:[(0,d.jsx)(A.Z,{}),(0,d.jsx)(m.animated.div,{style:s,className:"w-full h-2 bg-gradient-to-r from-red-500 to-orange-500"})]}),(0,d.jsxs)("div",{className:"sm:p-6 p-8 md+:px-20 md:px-56 markdown-body my-16",children:[(0,d.jsx)("div",{className:"text-4xl text-center w-full text-black dark:text-white",children:(0,d.jsxs)("h1",{children:[h," "]})}),(0,d.jsx)("div",{style:{height:c},className:" w-full my-4 mb-28 -z-0",children:(0,d.jsx)("img",{alt:"blogImage",src:o||"",className:"w-full md:w-3/4 mx-auto h-full object-cover"})}),(0,d.jsx)(f.D,{components:y,skipHtml:!0,className:"max-w-none w-full md:w-3/4 prose-pre:bg-transparent prose-pre:mx-0 prose-pre:px-0 prose-pre:p-0 prose-pre:m-0 overflow-x-hidden mx-auto h-full dark:text-white text-black prose sm:prose-sm prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl prose-neutral prose-lime dark:prose-invert ",remarkPlugins:[g.Z],children:"# ".concat(n," \n")+k||0})]})]})}}},function(a){a.O(0,[980,13,920,458,774,888,179],function(){var b;return a(a.s=5272)}),_N_E=a.O()}])