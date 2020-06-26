(this["webpackJsonpreact-github-calendar-example"]=this["webpackJsonpreact-github-calendar-example"]||[]).push([[0],{23:function(e,t,a){e.exports=a(33)},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),c=a.n(r),o=a(7),i=a(10),u=a.n(i),s=a(16),m=a(6),d=a(5),h=a(20),f=a(9),E=a(11),b=a(18),y=a(17),p=a(19),g=a(12),v=a(13),w=a(8),k=a.n(w);var C="styles_chart__316M8",j="styles_calendar__1PAia",S="styles_loading__1gKsy",x="styles_title__HcRKb";!function(e,t){void 0===t&&(t={});var a=t.insertAt;if(e&&"undefined"!==typeof document){var n=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css","top"===a&&n.firstChild?n.insertBefore(l,n.firstChild):n.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}(".styles_chart__316M8 {\n  margin-bottom: 1rem;\n}\n\n.styles_calendar__1PAia {\n  max-width: 100%;\n  height: auto;\n  margin-bottom: 0.25rem;\n  overflow: visible;\n}\n\n.styles_loading__1gKsy {\n  font-size: 90%;\n}\n\n.styles_title__HcRKb {\n  margin-bottom: 0.5rem;\n  padding-bottom: 0.25rem;\n}\n");var O={background:"transparent",text:"#000",grade4:"#216e39",grade3:"#30a14e",grade2:"#40c463",grade1:"#9be9a8",grade0:"#ebedf0"},z="react-github-calendar";function M(e){var t=Object(n.useRef)(e);return Object(n.useEffect)((function(){t.current=e}),[e]),t.current}var H="https://github-calendar.now.sh/v1/";function _(e,t){return e.contributions.find((function(e){return e.date===t}))}function G(e,t,a){var n=function(e,t,a){var n=new Date,l=a?Object(v.a)(n,1):Object(d.a)("".concat(e,"-01-01")),r=a?n:Object(d.a)("".concat(e,"-12-31")),c=l;0!==Object(E.a)(l)&&(c=Object(f.a)(l,Object(E.a)(l)));for(var o=[];c<=r;){var i=Object(m.a)(c,"yyyy-MM-dd");o.push({date:i,info:_(t,i)}),c=Object(g.a)(c,7)}return o.map((function(e){for(var a=[],n=0;n<=6;n+=1){var l=Object(m.a)(Object(g.a)(Object(d.a)(e.date),n),"yyyy-MM-dd");if(Object(y.a)(Object(d.a)(l),r))break;a.push({date:l,info:_(t,l)})}return a}))}(e,t,a),l=function(e,t){var a=e.slice(0,t?e.length-1:e.length),n=0;return a.reduce((function(e,t,a){var l=Object(d.a)(t[0].date),r=Object(b.a)(l)+1;return r!==n&&!(0===a&&12===r)&&(e.push({x:a,label:Object(m.a)(l,"MMM")}),n=r),e}),[])}(n,a);return{year:e,blocks:n,monthLabels:l,totalCount:a?function(e){var t=e.contributions,a=new Date,n=t.findIndex((function(e){return e.date===Object(m.a)(a,"yyyy-MM-dd")}));if(-1===n)return 0;var l=t.findIndex((function(e){return e.date===Object(m.a)(Object(v.a)(a,1),"yyyy-MM-dd")}));return-1===l&&(l=t.length-1),t.slice(n,l).reduce((function(e,t){return e+t.count}),0)}(t):function(e,t){var a=e.years.find((function(e){return e.year===String(t)}));return a?a.total:0}(t,e)}}function A(){return(A=Object(s.a)(u.a.mark((function e(t){var a,n,l,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.fullYear,n=t.username,l=t.years,e.next=3,fetch(H+n);case 3:return e.next=5,e.sent.json();case 5:if((r=e.sent).years.length){e.next=8;break}throw Error("No data available");case 8:return e.abrupt("return",l.map((function(e){var t=Object(p.a)(Object(d.a)(String(e)),new Date);return G(e,r,t&&a)})));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e,t){return t?"".concat(z,"__").concat(e," ").concat(t):"".concat(z,"__").concat(e)}var T=function(e){var t=e.blockSize,a=void 0===t?12:t,r=e.blockMargin,c=void 0===r?2:r,i=e.children,u=e.color,s=void 0===u?void 0:u,f=e.dateFormat,E=void 0===f?"MMM d, yyyy":f,b=e.fontSize,y=void 0===b?14:b,p=e.fullYear,g=void 0===p||p,v=e.theme,w=void 0===v?void 0:v,H=e.username,_=e.style,G=void 0===_?{}:_,T=e.years,N=void 0===T?[Number(Object(m.a)(new Date,"yyyy"))]:T,L=Object(n.useState)(null),B=Object(o.a)(L,2),Y=B[0],I=B[1],R=Object(n.useState)(null),J=Object(o.a)(R,2),K=J[0],F=J[1],P=M(N),V=M(H),q=M(g),W=Object(n.useCallback)((function(){F(null),function(e){return A.apply(this,arguments)}({years:N,username:H,fullYear:g}).then((function(e){return I(e)})).catch((function(e){return F(e)}))}),[N,H,g]);function Z(){return w?Object.assign({},O,w):s?function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"inherit",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:k()("white").darken(8).toHslString(),n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"transparent",l=k()(e);if(!l.isValid())return O;var r=k()(t).isValid()?String(k()(t)):O.text;return{background:n,text:r,grade4:l.setAlpha(.92).toHslString(),grade3:l.setAlpha(.76).toHslString(),grade2:l.setAlpha(.6).toHslString(),grade1:l.setAlpha(.44).toHslString(),grade0:a}}(s):O}function X(e){var t=Object(d.a)(e.date);return"<strong>".concat(e.info.count," contributions</strong> on ").concat(Object(m.a)(t,E))}Object(n.useEffect)((function(){W()}),[]),Object(n.useEffect)((function(){(q!==g||V!==H||P.some((function(e){return!N.includes(e)})))&&W()}),[W,g,q,V,P,H,N]);var Q=function(){var e=Math.round(1.5*y);return{width:53*(a+c)-c,height:e+7*(a+c)-c}}(),U=Q.width,$=Q.height;return K?(console.error(K),l.a.createElement("p",null,"Error :(")):Y?l.a.createElement("article",{className:z,style:G},function(){var e={borderBottom:"2px solid ".concat(Z().grade0),fontSize:"".concat(Math.round(1.25*y),"px")};return l.a.createElement("div",{className:D("title",x),style:e},l.a.createElement("a",{href:"https://github.com/".concat(H),title:"GitHub profile",style:{color:"inherit"}},"@",H," on GitHub"))}(),Y.map((function(e){var t=e.year,n=e.blocks,r=e.monthLabels,o=e.totalCount;return l.a.createElement("div",{key:t,className:D("chart",C)},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:U,height:$,viewBox:"0 0 ".concat(U," ").concat($),className:D("calendar",j),style:{backgroundColor:null===w||void 0===w?void 0:w.background}},function(e){var t={fill:Z().text,fontSize:y};return e[1].x-e[0].x<=2&&e.shift(),e.map((function(e){return l.a.createElement("text",{x:(a+c)*e.x,y:y,key:e.x,style:t},e.label)}))}(r),function(e){var t=Z(),n=Math.round(1.5*y);return e.map((function(e){return e.map((function(e,r){return l.a.createElement("rect",{x:"0",y:n+(a+c)*r,width:a,height:a,fill:t["grade".concat(e.info?e.info.intensity:0)],"data-tip":e.info?X(e):null,key:e.date})}))})).map((function(e,t){return l.a.createElement("g",{key:t,transform:"translate(".concat((a+c)*t,", 0)")},e)}))}(n)),function(e,t){var a=Object(h.a)(new Date)===e;return l.a.createElement("div",{className:D("meta"),style:{fontSize:y}},a&&g?"Last year":e," \u2013 ",a&&!g?"So far ":null,t," contributions")}(t,o),i)}))):l.a.createElement("div",{className:D("loading",S)},"Loading \u2026")},N=a(21),L=(a(31),a(32),a(22)),B=function(e){var t=e.children,a=Object(L.a)(e,["children"]);return l.a.createElement("pre",a,l.a.createElement("code",null,t))},Y={position:"absolute",top:0,right:0,border:0,fill:"#fff",color:"#151513"},I=function(){return l.a.createElement("a",{href:"https://github.com/grubersjoe/react-github-calendar",className:"github-corner","aria-label":"View source on GitHub"},l.a.createElement("svg",{width:"80",height:"80",viewBox:"0 0 250 250",style:Y,"aria-hidden":"true"},l.a.createElement("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),l.a.createElement("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"hsl(313, 78%, 20%)",style:{transformOrigin:"130px 106px"},className:"octo-arm"}),l.a.createElement("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"hsl(313, 78%, 20%)",className:"octo-body"})))},R=function(){var e=Object(n.useState)("grubersjoe"),t=Object(o.a)(e,2),a=t[0],r=t[1],c=l.a.createRef();return l.a.createElement("div",null,l.a.createElement("header",null,l.a.createElement(I,null),l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"GitHub Contributions Calendar"),l.a.createElement("div",null,"A React component to display a GitHub contributions graph"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c.current&&r(String(c.current.value).toLowerCase())}},l.a.createElement("input",{type:"text",placeholder:"Enter your GitHub username",ref:c,required:!0}),l.a.createElement("button",{type:"submit"},"Show calendar")))),l.a.createElement("main",{className:"container"},l.a.createElement(T,{username:a}),l.a.createElement("section",null,l.a.createElement("h2",null,"Installation"),l.a.createElement(B,{style:{marginTop:"0.5rem"}},"yarn install react-github-calendar"),l.a.createElement("p",null,"Then in your code:"),l.a.createElement(B,null,"import GitHubCalendar from 'react-github-calendar';\n\n<GitHubCalendar username=\"".concat(a,'" />'))),l.a.createElement("section",null,l.a.createElement("h2",null,"Component properties"),l.a.createElement("div",{style:{overflowX:"auto"}},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Property"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Default"),l.a.createElement("th",null,"Description"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"username"),l.a.createElement("td",null,"string"),l.a.createElement("td",null,"-"),l.a.createElement("td",null,"A GitHub username (",l.a.createElement("em",null,"required, obviously"),")")),l.a.createElement("tr",null,l.a.createElement("td",null,"blockMargin"),l.a.createElement("td",null,"number"),l.a.createElement("td",null,"2"),l.a.createElement("td",null,"Margin between blocks")),l.a.createElement("tr",null,l.a.createElement("td",null,"blockSize"),l.a.createElement("td",null,"number"),l.a.createElement("td",null,"12"),l.a.createElement("td",null,"Size of one block (one day)")),l.a.createElement("tr",null,l.a.createElement("td",null,"color"),l.a.createElement("td",null,"string|",l.a.createElement("a",{href:"https://www.npmjs.com/package/tinycolor2"},"Color")),l.a.createElement("td",null,"undefined"),l.a.createElement("td",null,"Base color to compute graph intensity colors (see below)")),l.a.createElement("tr",null,l.a.createElement("td",null,"dateFormat"),l.a.createElement("td",null,"string"),l.a.createElement("td",null,"'MMM d, yyyy'"),l.a.createElement("td",null,"A"," ",l.a.createElement("code",null,l.a.createElement("a",{href:"https://date-fns.org/v2.9.0/docs/format"},"date-fns/format"))," ","compatible date string")),l.a.createElement("tr",null,l.a.createElement("td",null,"fontSize"),l.a.createElement("td",null,"number"),l.a.createElement("td",null,"14"),l.a.createElement("td",null,"Base font size for text in chart. The title above (@user) is 25% larger.")),l.a.createElement("tr",null,l.a.createElement("td",null,"fullYear"),l.a.createElement("td",null,"boolean"),l.a.createElement("td",null,"true"),l.a.createElement("td",null,"Whether to show the whole last year starting now or this year only (starting in January).")),l.a.createElement("tr",null,l.a.createElement("td",null,"theme"),l.a.createElement("td",null,"Theme"),l.a.createElement("td",null,l.a.createElement("em",null,"GitHub theme")),l.a.createElement("td",null,"A object specifying all theme colors explicitly (see below)")),l.a.createElement("tr",null,l.a.createElement("td",null,"tooltips"),l.a.createElement("td",null,"boolean"),l.a.createElement("td",null,"true"),l.a.createElement("td",null,"Whether to add ",l.a.createElement("code",null,"data-tip")," attributes to the blocks. Add"," ",l.a.createElement("code",null,"react-tooltip")," and use it as child of this component. See below example.")),l.a.createElement("tr",null,l.a.createElement("td",null,"years"),l.a.createElement("td",null,"number[]"),l.a.createElement("td",null,"[",Object(m.a)(new Date,"yyyy"),"]"),l.a.createElement("td",null,"List of to be rendered years. Defaults to the current year. If no data is available the chart for this year will be ommited.")))))),l.a.createElement("section",null,l.a.createElement("h2",null,"Examples"),l.a.createElement("ol",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#show-contributions-of-last-year"},"Show contributions of last year")),l.a.createElement("li",null,l.a.createElement("a",{href:"#display-this-year-only"},"Display this year only")),l.a.createElement("li",null,l.a.createElement("a",{href:"#show-several-years"},"Show several years")),l.a.createElement("li",null,l.a.createElement("a",{href:"#set-the-color-theme"},"Set the color theme")),l.a.createElement("li",null,l.a.createElement("a",{href:"#add-tooltips"},"Add tooltips")),l.a.createElement("li",null,l.a.createElement("a",{href:"#different-block-size"},"Different block size")),l.a.createElement("li",null,l.a.createElement("a",{href:"#different-block-margin"},"Different block margin")),l.a.createElement("li",null,l.a.createElement("a",{href:"#chart-font-size"},"Chart font size"))),l.a.createElement("hr",null),l.a.createElement("h3",{id:"show-contributions-of-last-year"},"Show contributions of last year"),l.a.createElement("p",null,"By default the last whole year is shown."),l.a.createElement(B,null,'<GitHubCalendar username="'.concat(a,'" />')),l.a.createElement(T,{username:a}),l.a.createElement("hr",null),l.a.createElement("h3",{id:"display-this-year-only"},"Display this year only"),l.a.createElement("p",null,"You might prefer the calendar for the current year to start in January (instead of showing the last twelve months)."),l.a.createElement(B,null,'<GitHubCalendar username="'.concat(a,'" fullYear={false} />')),l.a.createElement(T,{username:a,fullYear:!1}),l.a.createElement("hr",null),l.a.createElement("h3",{id:"show-several-years"},"Show several years"),l.a.createElement("p",null,"To display multiple years, pass an array into the component:"),l.a.createElement(B,null,'<GitHubCalendar username="'.concat(a,'" years={[2018, 2017]} fullYear={false}/>')),l.a.createElement(T,{username:a,years:[2018,2017],fullYear:!1}),l.a.createElement("hr",null),l.a.createElement("h3",{id:"set-the-color-theme"},"Set the color theme"),l.a.createElement("p",null,"Either set a base color (any valid CSS color) to calculate the color hues for the contribution intensity automatically or specify the different theme colors explicitly. If a color is set, the theme will be ignored. If neither color or theme is set, the standard GitHub colors will be used (as in these examples)."),l.a.createElement(B,null,'<GitHubCalendar username="'.concat(a,'" color="hsl(203, 82%, 33%)" />')),l.a.createElement(T,{username:a,color:"hsl(203, 82%, 33%)"}),l.a.createElement("p",null,"Set the colors explicitly like this:"),l.a.createElement(B,null,"const defaultTheme = {\n  background: 'transparent',\n  text: '#000',\n  grade4: '#196127',\n  grade3: '#239a3b',\n  grade2: '#7bc96f',\n  grade1: '#c6e48b',\n  grade0: '#ebedf0',\n};\n\n<GitHubCalendar username=\"".concat(a,'" theme={defaultTheme} />')),l.a.createElement(T,{username:a}),l.a.createElement("hr",null),l.a.createElement("h3",{id:"add-tooltips"},"Add tooltips"),l.a.createElement("p",null,"In order to show tooltips on hover, you need to add another dependency"," ",l.a.createElement("code",null,"react-tooltip"),". Add this component then as child of the calendar. Make sure to enable the `html` property in the ",l.a.createElement("code",null,"ReactTooltip")," component to display the message correctly."),l.a.createElement(B,null,'<div>\n    <GitHubCalendar username="'.concat(a,'">\n      <ReactTooltip delayShow={50} html />\n    </GitHubCalendar>\n  </div>')),l.a.createElement("div",null,l.a.createElement(T,{username:a},l.a.createElement(N.a,{delayShow:50,html:!0}))),l.a.createElement("hr",null),l.a.createElement("h3",{id:"different-block-size"},"Different block size"),l.a.createElement("p",null,"The block size (12 per default) is configurable:"),l.a.createElement(B,null,'<GitHubCalendar username="'.concat(a,'" blockSize={10} />')),l.a.createElement(T,{username:a,blockSize:10}),l.a.createElement("hr",null),l.a.createElement("h3",{id:"different-block-margin"},"Different block margin (and size)"),l.a.createElement("p",null,"Analogously the block margin can be adjusted."),l.a.createElement(B,null,'<GitHubCalendar username="'.concat(a,'" blockSize={10} blockMargin={4} />')),l.a.createElement(T,{username:a,blockSize:10,blockMargin:4}),l.a.createElement("hr",null),l.a.createElement("h3",{id:"chart-font-size"},"Chart font size"),l.a.createElement("p",null,"Finally, there is a property to set the fontsize of the text inside the chart. This comes in handy, if a large block size or margin is set. The default base font size is 14px."),l.a.createElement(B,null,'<GitHubCalendar username="'.concat(a,'" fontSize={14} blockSize={12} />')),l.a.createElement(T,{username:a,fontSize:14,blockSize:12}))))};c.a.render(l.a.createElement(R,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.44abfa64.chunk.js.map