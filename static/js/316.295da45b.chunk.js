(self.webpackChunkfitpeo=self.webpackChunkfitpeo||[]).push([[316],{316:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(152),o=n(791),i=n(584);function a(e,t){0!==Math.abs(t.deltaX)||Math.abs(t.deltaY)<15?t.stopPropagation():t.deltaY<0?e.scrollNext():t.deltaY>0&&e.scrollPrev()}var l=function(e){e.preventDefault&&e.preventDefault(),e.returnValue=!1},u=function(){document&&document.removeEventListener("wheel",l,!1)};var s=function(){var e=o.useState(!1),t=(0,r.Z)(e,2),n=t[0],i=t[1];return o.useEffect((function(){return n?document&&document.addEventListener("wheel",l,{passive:!1}):u(),u}),[n]),{disableScroll:o.useCallback((function(){return i(!0)}),[]),enableScroll:o.useCallback((function(){return i(!1)}),[])}},c=n(126),d=n(184);function f(e){var t=e.children,n=e.disabled,r=e.onClick;return(0,d.jsx)("button",{disabled:n,onClick:r,style:{cursor:"pointer",display:"flex",flexDirection:"column",justifyContent:"center",right:"1%",opacity:n?"0":"1",userSelect:"none"},children:t})}function p(){var e=o.useContext(i.VisibilityContext),t=e.isFirstItemVisible,n=e.scrollPrev,a=e.visibleItemsWithoutSeparators,l=e.initComplete,u=o.useState(!l||l&&t),s=(0,r.Z)(u,2),p=s[0],v=s[1];return o.useEffect((function(){a.length&&v(t)}),[t,a]),(0,d.jsx)(f,{disabled:p,onClick:function(){return n()},children:(0,d.jsx)(c.pjk,{className:"text-2xl font-semibold text-zinc-900"})})}function v(){var e=o.useContext(i.VisibilityContext),t=e.isLastItemVisible,n=e.scrollNext,a=e.visibleItemsWithoutSeparators,l=o.useState(!a.length&&t),u=(0,r.Z)(l,2),s=u[0],p=u[1];return o.useEffect((function(){a.length&&p(t)}),[t,a]),(0,d.jsx)(f,{disabled:s,onClick:function(){return n()},children:(0,d.jsx)(c.fmn,{className:"text-2xl font-semibold text-zinc-900"})})}function h(e){var t=e.vid,n=(e.title,e.itemId);o.useContext(i.VisibilityContext).isItemVisible(n);return(0,d.jsx)("div",{role:"button",style:{display:"inline-block",margin:"0 10px",width:"300px",userSelect:"none"},tabIndex:0,className:"card",children:(0,d.jsx)("div",{children:(0,d.jsx)("iframe",{title:"Wall",className:"w-full h-full ",src:t,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})})}var m=JSON.parse('[{"id":1,"name":"Stranger Things","video":"https://www.youtube.com/embed/sBEvEcpnG7k","genre":["Horror","Sci-fi","TV Series"],"plot":"After the mysterious and sudden vanishing of a young boy, the people of a small town begin to uncover secrets of a government lab, portals to another world and sinister monsters"},{"id":2,"name":"Detective Conan","video":"https://www.youtube.com/embed/5DcWtjrYcFI","genre":["Drama","Thriller","TV Series"],"plot":"The cases of a detective whose physical age was chemically reversed to that of a prepubescent boy but must hide his true mental development. Shinichi Kudo, a seventeen year old master detective, had it all."},{"id":3,"name":"Day Shift | Jamie Foxx, Dave Franco, and Snoop Dogg","video":"https://www.youtube.com/embed/cdyuHqIyNm8","genre":["Horror","Sci-fi","TV Series"],"plot":"Ek aisa game jismein koi rules nahi, koi haar nahi, koi jeet nahi. Jaadugar, streaming from 15th July, only on Netflix!"},{"id":4,"name":"The Gray Man","video":"https://www.youtube.com/embed/BmllggGO4pM","genre":["Drama","Thriller","TV Series"],"plot":"The cases of a detective whose physical age was chemically reversed to that of a prepubescent boy but must hide his true mental development. Shinichi Kudo, a seventeen year old master detective, had it all."},{"id":5,"name":"Tekken Bloodline","video":"https://www.youtube.com/embed/WTc2xXcJFwU","genre":["Horror","Sci-fi","TV Series"],"plot":"After the mysterious and sudden vanishing of a young boy, the people of a small town begin to uncover secrets of a government lab, portals to another world and sinister monsters"},{"id":6,"name":"The Beast","video":"https://www.youtube.com/embed/P-E-IGQCsPo","genre":["Drama","Thriller","TV Series"],"plot":"The cases of a detective whose physical age was chemically reversed to that of a prepubescent boy but must hide his true mental development. Shinichi Kudo, a seventeen year old master detective, had it all."},{"id":7,"name":"Kung Fu Panda: The Dragon Knight","video":"https://www.youtube.com/embed/gnprhsRHSZg","genre":["Horror","Sci-fi","TV Series"],"plot":"Ek aisa game jismein koi rules nahi, koi haar nahi, koi jeet nahi. Jaadugar, streaming from 15th July, only on Netflix!"},{"id":8,"name":"The Imperfects","video":"https://www.youtube.com/embed/aEs2ziTArdk","genre":["Drama","Thriller","TV Series"],"plot":"The cases of a detective whose physical age was chemically reversed to that of a prepubescent boy but must hide his true mental development. Shinichi Kudo, a seventeen year old master detective, had it all."},{"id":9,"name":"Guilty","video":"https://www.youtube.com/embed/6sQ85MrpOPI","genre":["Horror","Sci-fi","TV Series"],"plot":"After the mysterious and sudden vanishing of a young boy, the people of a small town begin to uncover secrets of a government lab, portals to another world and sinister monsters"},{"id":10,"name":"Cyberpunk","video":"https://www.youtube.com/embed/OifiVCnFKzM","genre":["Drama","Thriller","TV Series"],"plot":"The cases of a detective whose physical age was chemically reversed to that of a prepubescent boy but must hide his true mental development. Shinichi Kudo, a seventeen year old master detective, had it all."}]'),y=JSON.parse('[{"id":1,"name":"Jaadugar","video":"https://www.youtube.com/embed/i7yFiUio0u0","genre":["Horror","Sci-fi","TV Series"],"plot":"After the mysterious and sudden vanishing of a young boy, the people of a small town begin to uncover secrets of a government lab, portals to another world and sinister monsters"},{"id":2,"name":"Dark","video":"https://www.youtube.com/embed/0VEczNVW6tY","genre":["Drama","Thriller","TV Series"],"plot":"The cases of a detective whose physical age was chemically reversed to that of a prepubescent boy but must hide his true mental development. Shinichi Kudo, a seventeen year old master detective, had it all."},{"id":3,"name":"Our Planet","video":"https://www.youtube.com/embed/9FqwhW0B3tY","genre":["Horror","Sci-fi","TV Series"],"plot":"Ek aisa game jismein koi rules nahi, koi haar nahi, koi jeet nahi. Jaadugar, streaming from 15th July, only on Netflix!"},{"id":4,"name":"Brigton","video":"https://www.youtube.com/embed/gpv7ayf_tyE","genre":["Drama","Thriller","TV Series"],"plot":"The cases of a detective whose physical age was chemically reversed to that of a prepubescent boy but must hide his true mental development. Shinichi Kudo, a seventeen year old master detective, had it all."},{"id":5,"name":"One Piece Live Action","video":"https://www.youtube.com/embed/RFO_0Nbv9rQ","genre":["Horror","Sci-fi","TV Series"],"plot":"After the mysterious and sudden vanishing of a young boy, the people of a small town begin to uncover secrets of a government lab, portals to another world and sinister monsters"},{"id":6,"name":"The Beast","video":"https://www.youtube.com/embed/P-E-IGQCsPo","genre":["Drama","Thriller","TV Series"],"plot":"The cases of a detective whose physical age was chemically reversed to that of a prepubescent boy but must hide his true mental development. Shinichi Kudo, a seventeen year old master detective, had it all."},{"id":7,"name":"Kung Fu Panda: The Dragon Knight","video":"https://www.youtube.com/embed/gnprhsRHSZg","genre":["Horror","Sci-fi","TV Series"],"plot":"Ek aisa game jismein koi rules nahi, koi haar nahi, koi jeet nahi. Jaadugar, streaming from 15th July, only on Netflix!"},{"id":8,"name":"The Imperfects","video":"https://www.youtube.com/embed/aEs2ziTArdk","genre":["Drama","Thriller","TV Series"],"plot":"The cases of a detective whose physical age was chemically reversed to that of a prepubescent boy but must hide his true mental development. Shinichi Kudo, a seventeen year old master detective, had it all."},{"id":9,"name":"Guilty","video":"https://www.youtube.com/embed/6sQ85MrpOPI","genre":["Horror","Sci-fi","TV Series"],"plot":"After the mysterious and sudden vanishing of a young boy, the people of a small town begin to uncover secrets of a government lab, portals to another world and sinister monsters"},{"id":10,"name":"Cyberpunk","video":"https://www.youtube.com/embed/OifiVCnFKzM","genre":["Drama","Thriller","TV Series"],"plot":"The cases of a detective whose physical age was chemically reversed to that of a prepubescent boy but must hide his true mental development. Shinichi Kudo, a seventeen year old master detective, had it all."}]');function b(e){var t=e.name,n=t.replaceAll(" ","").toLowerCase();console.log(n);var l=(0,o.useState)((function(){return Array(10).fill(0).map((function(e,t){return{id:(r=t,"".concat("test").concat(r)),vid:"trending"===n?m[t].video:y[t].video};var r}))})),u=(0,r.Z)(l,1)[0],c=s(),f=c.disableScroll,b=c.enableScroll;return(0,d.jsxs)("div",{className:"px-2 pt-4",id:"".concat(n),children:[(0,d.jsx)("h1",{className:"pl-8 text-2xl font-bold my-4",children:t}),(0,d.jsx)("div",{onMouseEnter:f,onMouseLeave:b,children:(0,d.jsx)(i.ScrollMenu,{LeftArrow:p,RightArrow:v,onWheel:a,children:u.map((function(e){var t=e.vid,n=e.id;return(0,d.jsx)(h,{vid:t,title:n,itemId:n},n)}))})})]})}},584:function(e,t,n){var r=n(690).default,o=n(728).default,i=n(588).default,a=n(808).default,l=n(655).default,u=n(389).default,s=n(496).default,c=n(861).default,d=n(424).default,f=n(416).default;!function(e,t){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var p=n(t);!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".react-horizontal-scrolling-menu--scroll-container {\n  display: flex;\n  height: max-content;\n  overflow-y: hidden;\n  position: relative;\n  width: 100%;\n}\n\n.react-horizontal-scrolling-menu--inner-wrapper {\n  display: flex;\n  overflow-y: hidden;\n}\n\n.react-horizontal-scrolling-menu--wrapper {\n  display: flex;\n  flex-direction: column;\n}\n\n.react-horizontal-scrolling-menu--header, .react-horizontal-scrolling-menu--footer {\n  width: 100%;\n}\n\n.react-horizontal-scrolling-menu--arrow-left, .react-horizontal-scrolling-menu--arrow-right {\ndisplay: flex;\n}\n");var v="react-horizontal-scrolling-menu",h="-separator",m="".concat(v,"--separator"),y="".concat(v,"--item"),b="".concat(v,"--scroll-container"),x="".concat(v,"--wrapper"),g="".concat(v,"--inner-wrapper"),w="".concat(v,"--header"),S="".concat(v,"--arrow-left"),_="".concat(v,"--arrow-right"),M="".concat(v,"--footer"),T="itemId",k="data-key",C="data-index",E=Object.freeze({__proto__:null,rootClassName:v,separatorString:h,separatorClassName:m,itemClassName:y,scrollContainerClassName:b,wrapperClassName:x,innerWrapperClassName:g,headerClassName:w,arrowLeftClassName:S,arrowRightClassName:_,footerClassName:M,id:T,dataKeyAttribute:k,dataIndexAttribute:C});function I(e){var t=e.className,n=void 0===t?"":t,r=e.children,o=e.onScroll,i=void 0===o?function(){}:o,a=e.scrollRef,l=p.default.useMemo((function(){return"".concat(b," ").concat(n)}),[n]);return p.default.createElement("div",{className:l,onScroll:i,ref:a},r)}var j,N=p.default.memo((function(e){var t,n=e.className,r=e.id,o=e.index,i=e.refs,a=p.default.useRef(null);return i[o]=a,p.default.createElement("div",Object.assign({className:n},(f(t={},k,r),f(t,C,o),t),{ref:a}))})),O=p.default.memo((function(e){var t,n=e.children,r=e.className,o=e.id,i=e.index,a=e.refs,l=p.default.useRef(null);return a[String(i)]=l,p.default.createElement("div",Object.assign({className:r},(f(t={},k,o),f(t,C,i),t),{ref:l}),n)}));function V(e){return"object"==typeof e&&null!=e&&1===e.nodeType}function A(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function P(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var n=getComputedStyle(e,null);return A(n.overflowY,t)||A(n.overflowX,t)||function(e){var t=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}}(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)}(e)}return!1}function D(e,t,n,r,o,i,a,l){return i<e&&a>t||i>e&&a<t?0:i<=e&&l<=n||a>=t&&l>=n?i-e-r:a>t&&l<n||i<e&&l>n?a-t+o:0}function R(e,t){var n=window,r=t.scrollMode,o=t.block,i=t.inline,a=t.boundary,l=t.skipOverflowHiddenElements,u="function"==typeof a?a:function(e){return e!==a};if(!V(e))throw new TypeError("Invalid target");for(var s=document.scrollingElement||document.documentElement,c=[],d=e;V(d)&&u(d);){if((d=d.parentElement)===s){c.push(d);break}null!=d&&d===document.body&&P(d)&&!P(document.documentElement)||null!=d&&P(d,l)&&c.push(d)}for(var f=n.visualViewport?n.visualViewport.width:innerWidth,p=n.visualViewport?n.visualViewport.height:innerHeight,v=window.scrollX||pageXOffset,h=window.scrollY||pageYOffset,m=e.getBoundingClientRect(),y=m.height,b=m.width,x=m.top,g=m.right,w=m.bottom,S=m.left,_="start"===o||"nearest"===o?x:"end"===o?w:x+y/2,M="center"===i?S+b/2:"end"===i?g:S,T=[],k=0;k<c.length;k++){var C=c[k],E=C.getBoundingClientRect(),I=E.height,j=E.width,N=E.top,O=E.right,A=E.bottom,R=E.left;if("if-needed"===r&&x>=0&&S>=0&&w<=p&&g<=f&&x>=N&&w<=A&&S>=R&&g<=O)return T;var W=getComputedStyle(C),B=parseInt(W.borderLeftWidth,10),H=parseInt(W.borderTopWidth,10),F=parseInt(W.borderRightWidth,10),L=parseInt(W.borderBottomWidth,10),K=0,z=0,J="offsetWidth"in C?C.offsetWidth-C.clientWidth-B-F:0,Y="offsetHeight"in C?C.offsetHeight-C.clientHeight-H-L:0;if(s===C)K="start"===o?_:"end"===o?_-p:"nearest"===o?D(h,h+p,p,H,L,h+_,h+_+y,y):_-p/2,z="start"===i?M:"center"===i?M-f/2:"end"===i?M-f:D(v,v+f,f,B,F,v+M,v+M+b,b),K=Math.max(0,K+h),z=Math.max(0,z+v);else{K="start"===o?_-N-H:"end"===o?_-A+L+Y:"nearest"===o?D(N,A,I,H,L+Y,_,_+y,y):_-(N+I/2)+Y/2,z="start"===i?M-R-B:"center"===i?M-(R+j/2)+J/2:"end"===i?M-O+F+J:D(R,O,j,B,F+J,M,M+b,b);var X=C.scrollLeft,G=C.scrollTop;_+=G-(K=Math.max(0,Math.min(G+K,C.scrollHeight-I+Y))),M+=X-(z=Math.max(0,Math.min(X+z,C.scrollWidth-j+J)))}T.push({el:C,top:K,left:z})}return T}function W(e){return e===Object(e)&&0!==Object.keys(e).length}function B(e,t){var n=e.isConnected||e.ownerDocument.documentElement.contains(e);if(W(t)&&"function"==typeof t.behavior)return t.behavior(n?R(e,t):[]);if(n){var r=function(e){return!1===e?{block:"end",inline:"nearest"}:W(e)?e:{block:"start",inline:"nearest"}}(t);return function(e,t){void 0===t&&(t="auto");var n="scrollBehavior"in document.body.style;e.forEach((function(e){var r=e.el,o=e.top,i=e.left;r.scroll&&n?r.scroll({top:o,left:i,behavior:t}):(r.scrollTop=o,r.scrollLeft=i)}))}(R(e,r),r.behavior)}}var H=function(){return j||(j="performance"in window?performance.now.bind(performance):Date.now),j()};function F(e){var t=H(),n=Math.min((t-e.startTime)/e.duration,1),r=e.ease(n),o=e.startX+(e.x-e.startX)*r,i=e.startY+(e.y-e.startY)*r;e.method(o,i),o!==e.x||i!==e.y?requestAnimationFrame((function(){return F(e)})):e.cb()}function L(e,t,n,r,o,i){var a,l,u,s;void 0===r&&(r=600),void 0===o&&(o=function(e){return 1+--e*e*e*e*e}),a=e,l=e.scrollLeft,u=e.scrollTop,s=function(t,n){e.scrollLeft=Math.ceil(t),e.scrollTop=Math.ceil(n)},F({scrollable:a,method:s,startTime:H(),startX:l,startY:u,x:t,y:n,duration:r,ease:o,cb:i})}var K=function(e,t){var n=t||{};return function(e){return e&&!e.behavior||"smooth"===e.behavior}(n)?B(e,{block:n.block,inline:n.inline,scrollMode:n.scrollMode,boundary:n.boundary,behavior:function(e){return Promise.all(e.reduce((function(e,t){var r=t.el,o=t.left,i=t.top,a=r.scrollLeft,l=r.scrollTop;return a===o&&l===i?e:[].concat(e,[new Promise((function(e){return L(r,o,i,n.duration,n.ease,(function(){return e({el:r,left:[a,o],top:[l,i]})}))}))])}),[]))}}):Promise.resolve(B(e,t))};function z(e,t,n,r,o){var i,a,l=(null===(a=null===(i=e)||void 0===i?void 0:i.entry)||void 0===a?void 0:a.target)||e,u=t||"smooth";return l&&K(l,Object.assign({behavior:u,inline:n||"end",block:r||"nearest",duration:500},o))}var J=function(e){return document.querySelector("[data-key='".concat(e,"']"))},Y=function(e){return document.querySelector("[data-index='".concat(e,"']"))};function X(e){return p.default.isValidElement(e)&&e||"function"==typeof e&&p.default.createElement(e,null)||null}var G=function(e){return e.filter((function(e){return!new RegExp(".*-separator$").test(e)}))},q=function(e){var t,n,r;return(null===(n=null===(t=e)||void 0===t?void 0:t.props)||void 0===n?void 0:n[T])||String((null===(r=e)||void 0===r?void 0:r.key)||"").replace(/^\.\$/,"")};function U(e){var t=e.children,n=e.itemClassName,r=void 0===n?"":n,o=e.refs,i=e.separatorClassName,a=void 0===i?"":i,l=p.default.Children.toArray(t).filter(Boolean),u=l.length,s=p.default.useMemo((function(){return"".concat(y," ").concat(r)}),[r]),c=p.default.useMemo((function(){return"".concat(m," ").concat(a)}),[a]);return p.default.createElement(p.default.Fragment,null,l.map((function(e,t){var n=q(e),r=n+h,i=t+1===u;return[p.default.createElement(O,{className:s,id:n,key:"menuItem__"+n,refs:o,index:t},e),!i&&p.default.createElement(N,{className:c,id:r,refs:o,key:r,index:t+.1})]})))}var Z="undefined"!=typeof window?p.default.useLayoutEffect:p.default.useEffect;function Q(e){var t=e.items,n=e.itemsChanged,r=e.refs,o=e.options,i=p.default.useRef(),a=p.default.useState([]),l=d(a,2),u=l[0],s=l[1],f=p.default.useRef(+setTimeout((function(){}),0)),v=p.default.useCallback((function(e){t.set(function(e,t){return c(e).map((function(e){var n,r,o=e.target,i=(null===(n=null==o?void 0:o.dataset)||void 0===n?void 0:n.key)||"";return[i,{index:String((null===(r=null==o?void 0:o.dataset)||void 0===r?void 0:r.index)||""),key:i,entry:e,visible:e.intersectionRatio>=t.ratio}]}))}(e,o)),clearTimeout(f.current),f.current=+setTimeout((function(){return requestAnimationFrame((function(){s((function(e){var n=t.getVisible().map((function(e){return e[1].key}));return JSON.stringify(e)!==JSON.stringify(n)?n:e}))}))}),o.throttle)}),[t,o]);return Z((function(){var e=function(e){return Object.values(e).map((function(e){return e.current})).filter(Boolean)}(r),t=i.current||new IntersectionObserver(v,o);return i.current=t,e.forEach((function(e){return t.observe(e)})),function(){clearTimeout(f.current),t.disconnect(),i.current=void 0}}),[v,n,o,r]),{visibleItems:u}}function $(e,t){var n=p.default.useState(""),r=d(n,2),o=r[0],i=r[1],a=p.default.useMemo((function(){return t=e,p.default.Children.toArray(t).map(q).filter(Boolean);var t}),[e]);return p.default.useEffect((function(){var e=a.filter(Boolean).join("");t.toItemsWithoutSeparators().filter((function(e){return!a.includes(e)})).forEach((function(e){var n,r,o=(null===(n=t.last())||void 0===n?void 0:n.key)===e&&(null===(r=t.prev(e))||void 0===r?void 0:r.key)||"";t.delete(o),t.delete("".concat(e,"-separator")),t.delete(e)})),i(e)}),[a,t]),o}var ee=function(e){l(n,e);var t=u(n);function n(){return r(this,n),t.apply(this,arguments)}return o(n,[{key:"toArr",value:function(){return this.sort(c(this))}},{key:"toItems",value:function(){return this.toArr().map((function(e){return d(e,1)[0]}))}},{key:"toItemsWithoutSeparators",value:function(){return G(this.toItems())}},{key:"toItemsKeys",value:function(){return this.toItems()}},{key:"sort",value:function(e){return e.sort((function(e,t){var n=d(e,2)[1],r=d(t,2)[1];return+n.index-+r.index}))}},{key:"set",value:function(e,t){var r=this;return Array.isArray(e)?this.sort(e).forEach((function(e){var t=d(e,2),o=t[0],l=t[1];i(a(n.prototype),"set",r).call(r,o,l)})):i(a(n.prototype),"set",this).call(this,e,t),this}},{key:"first",value:function(){var e;return null===(e=this.toArr()[0])||void 0===e?void 0:e[1]}},{key:"last",value:function(){var e,t;return null===(t=null===(e=this.toArr().slice(-1))||void 0===e?void 0:e[0])||void 0===t?void 0:t[1]}},{key:"filter",value:function(e){return this.toArr().filter(e)}},{key:"find",value:function(e){return this.toArr().find(e)}},{key:"findIndex",value:function(e){return this.toArr().findIndex(e)}},{key:"prev",value:function(e){var t,n=this.toArr(),r=n.findIndex((function(t){var n=d(t,2),r=n[0],o=n[1];return r===e||o===e}));return-1!==r?null===(t=n[r-1])||void 0===t?void 0:t[1]:void 0}},{key:"next",value:function(e){var t,n=this.toArr(),r=n.findIndex((function(t){var n=d(t,2),r=n[0],o=n[1];return r===e||o===e}));return-1!==r?null===(t=n[r+1])||void 0===t?void 0:t[1]:void 0}},{key:"getVisible",value:function(){return this.filter((function(e){return e[1].visible}))}}]),n}(s(Map)),te={ratio:.9,rootMargin:"5px",threshold:[.05,.5,.75,.95],throttle:100},ne=p.default.createContext({}),re=function(e){return e.reduce((function(e,t){return e.concat(t).concat("".concat(t,"-separator"))}),[]).slice(0,-1)};e.ScrollMenu=function(e){var t=e.LeftArrow,n=e.RightArrow,r=e.children,o=e.Header,i=e.Footer,a=e.transitionDuration,l=void 0===a?500:a,u=e.transitionEase,s=e.transitionBehavior,c=e.onInit,f=void 0===c?function(){}:c,v=e.onUpdate,h=void 0===v?function(){}:v,m=e.onMouseDown,y=e.onMouseUp,b=e.onMouseMove,T=e.onScroll,k=void 0===T?function(){}:T,C=e.onWheel,E=void 0===C?function(){}:C,j=e.options,N=void 0===j?te:j,O=e.scrollContainerClassName,V=void 0===O?"":O,A=e.itemClassName,P=void 0===A?"":A,D=e.separatorClassName,R=void 0===D?"":D,W=e.wrapperClassName,B=void 0===W?"":W,H=e.apiRef,F=void 0===H?{current:{}}:H,L=X(t),K=X(n),q=X(o),Z=X(i),re=p.default.useRef(null),oe=p.default.useState({}),ie=d(oe,1)[0],ae=p.default.useMemo((function(){return Object.assign(Object.assign(Object.assign({},te),N),{root:re.current})}),[N,re.current]),le=p.default.useRef(new ee).current,ue=$(r,le),se=Q({items:le,itemsChanged:ue,options:ae,refs:ie}).visibleItems,ce=!!se.length,de=p.default.useMemo((function(){return function(e){var t,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],o=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,a=G(r),l=!!(null===(t=e.first())||void 0===t?void 0:t.visible),u=!!(null===(n=e.last())||void 0===n?void 0:n.visible),s=function(t){var n;return null===(n=e.find((function(e){return e[1].key===String(t)})))||void 0===n?void 0:n[1]},c=function(){var t,n;return e.prev(null===(n=null===(t=e.getVisible())||void 0===t?void 0:t[0])||void 0===n?void 0:n[1])},d=function(){var t,n,r,o;return e.next(null===(o=null===(r=null===(n=null===(t=e.getVisible())||void 0===t?void 0:t.slice)||void 0===n?void 0:n.call(t,-1))||void 0===r?void 0:r[0])||void 0===o?void 0:o[1])};return{getItemById:s,getItemElementById:J,getItemByIndex:function(t){var n;return null===(n=e.find((function(e){return String(e[1].index)===String(t)})))||void 0===n?void 0:n[1]},getItemElementByIndex:Y,getNextItem:d,getPrevItem:c,isFirstItemVisible:l,isItemVisible:function(e){return r.includes(e)},isLastItem:function(t){return e.last()===s(t)},isLastItemVisible:u,scrollNext:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=r.duration,l=r.ease,u=r.boundary,s=void 0===u?null==o?void 0:o.current:u,c=null!=e?e:null==i?void 0:i.behavior;return z(d(),c,t||"start",n||"nearest",{boundary:s,duration:null!=a?a:null==i?void 0:i.duration,ease:null!=l?l:null==i?void 0:i.ease})},scrollPrev:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=r.duration,l=r.ease,u=r.boundary,s=void 0===u?null==o?void 0:o.current:u,d=null!=e?e:null==i?void 0:i.behavior;return z(c(),d,t||"end",n||"nearest",{boundary:s,duration:null!=a?a:null==i?void 0:i.duration,ease:null!=l?l:null==i?void 0:i.ease})},scrollToItem:function(e,t,n,r,a){var l,u;return z(e,null!=t?t:null==i?void 0:i.behavior,n,r,Object.assign(Object.assign({boundary:null==o?void 0:o.current},a),{duration:null!==(l=null==a?void 0:a.duration)&&void 0!==l?l:null==i?void 0:i.duration,ease:null!==(u=null==a?void 0:a.ease)&&void 0!==u?u:null==i?void 0:i.ease}))},visibleItems:r,visibleItemsWithoutSeparators:a}}(le,se,re,{duration:l,ease:u,behavior:s})}),[le,se,ue]),fe=p.default.useCallback((function(){return Object.assign(Object.assign({},de),{initComplete:ce,items:le,visibleItems:se,scrollContainer:re})}),[de,ce,le,se,re]),pe=p.default.useState(fe),ve=d(pe,2),he=ve[0],me=ve[1];!function(e){var t=e.cb,n=void 0===t?function(){}:t,r=e.condition,o=e.hash;p.default.useEffect((function(){r&&n()}),[o,r])}({cb:function(){return h(he)},condition:function(e){var t=e.cb,n=e.condition,r=p.default.useState(!1),o=d(r,2),i=o[0],a=o[1];return p.default.useEffect((function(){n&&!i&&(a(!0),t())}),[n,i]),i}({cb:function(){return f(he)},condition:ce}),hash:JSON.stringify(se.concat(String(null==he?void 0:he.isFirstItemVisible)).concat(String(null==he?void 0:he.isLastItemVisible)))}),p.default.useEffect((function(){return me(fe())}),[fe]),F.current=he;var ye=p.default.useCallback((function(e){return k(he,e)}),[k,he]),be=p.default.useCallback((function(e){return E(he,e)}),[E,he]),xe=p.default.useMemo((function(){return"".concat(x," ").concat(B)}),[B]);return p.default.createElement("div",{className:xe,onWheel:be,onMouseDown:null==m?void 0:m(he),onMouseUp:null==y?void 0:y(he),onMouseMove:null==b?void 0:b(he)},p.default.createElement(ne.Provider,{value:he},p.default.createElement("div",{className:w},q),p.default.createElement("div",{className:g},p.default.createElement("div",{className:S},L),p.default.createElement(I,{className:V,onScroll:ye,scrollRef:re},p.default.createElement(U,{refs:ie,itemClassName:P,separatorClassName:R},r)),p.default.createElement("div",{className:_},K)),p.default.createElement("div",{className:M},Z)))},e.VisibilityContext=ne,e.constants=E,e.getItemsPos=function(e){var t,n=function(e){return e.filter((function(e,t,n){var r=0===t,o=t===n.length-1,i=new RegExp(h).test(e);return!((r||o)&&i)}))}(e),r=n[Math.floor(n.length/2)];return{first:null==n?void 0:n[0],center:r,last:null===(t=n.slice(-1))||void 0===t?void 0:t[0]}},e.slidingWindow=function(e,t){var n=G(e),r=G(t);return{prev:function(){return re(function(e,t){var n=e.findIndex((function(e){return e===(null==t?void 0:t[0])})),r=t.length,o=n-r,i=o<0,a=i?0:o,l=e.slice(a,i?r:n);return l.length===r?l:e.slice(n,r)}(n,r))},next:function(){return re(function(e,t){var n=e.findIndex((function(e){var n;return e===(null===(n=t.slice(-1))||void 0===n?void 0:n[0])})),r=t.length,o=n+r+1,i=o>e.length-1,a=i?e.length-1:o,l=e.slice(i?a-r+1:n+1,a);return l.length===r?l:e.slice(e.length-r,e.length+r)}(n,r))}}},Object.defineProperty(e,"__esModule",{value:!0})}(t,n(791))},897:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.__esModule=!0,e.exports.default=e.exports},372:function(e){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},405:function(e,t,n){var r=n(897);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.__esModule=!0,e.exports.default=e.exports},115:function(e){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},690:function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},515:function(e,t,n){var r=n(15),o=n(617);function i(t,n,a){return o()?(e.exports=i=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=i=function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&r(i,n.prototype),i},e.exports.__esModule=!0,e.exports.default=e.exports),i.apply(null,arguments)}e.exports=i,e.exports.__esModule=!0,e.exports.default=e.exports},728:function(e){function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},389:function(e,t,n){var r=n(808),o=n(617),i=n(993);e.exports=function(e){var t=o();return function(){var n,o=r(e);if(t){var a=r(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return i(this,n)}},e.exports.__esModule=!0,e.exports.default=e.exports},416:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},588:function(e,t,n){var r=n(753);function o(){return"undefined"!==typeof Reflect&&Reflect.get?(e.exports=o=Reflect.get.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=o=function(e,t,n){var o=r(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(arguments.length<3?e:n):i.value}},e.exports.__esModule=!0,e.exports.default=e.exports),o.apply(this,arguments)}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},808:function(e){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},655:function(e,t,n){var r=n(15);e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&r(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},35:function(e){e.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")},e.exports.__esModule=!0,e.exports.default=e.exports},617:function(e){e.exports=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},498:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},872:function(e){e.exports=function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}},e.exports.__esModule=!0,e.exports.default=e.exports},218:function(e){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},993:function(e,t,n){var r=n(698).default,o=n(115);e.exports=function(e,t){if(t&&("object"===r(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},15:function(e){function t(n,r){return e.exports=t=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n,r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},424:function(e,t,n){var r=n(372),o=n(872),i=n(116),a=n(218);e.exports=function(e,t){return r(e)||o(e,t)||i(e,t)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},753:function(e,t,n){var r=n(808);e.exports=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r(e)););return e},e.exports.__esModule=!0,e.exports.default=e.exports},861:function(e,t,n){var r=n(405),o=n(498),i=n(116),a=n(281);e.exports=function(e){return r(e)||o(e)||i(e)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},698:function(e){function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},116:function(e,t,n){var r=n(897);e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},496:function(e,t,n){var r=n(808),o=n(15),i=n(35),a=n(515);function l(t){var n="function"===typeof Map?new Map:void 0;return e.exports=l=function(e){if(null===e||!i(e))return e;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof n){if(n.has(e))return n.get(e);n.set(e,t)}function t(){return a(e,arguments,r(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),o(t,e)},e.exports.__esModule=!0,e.exports.default=e.exports,l(t)}e.exports=l,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=316.295da45b.chunk.js.map