(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{26:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(19),s=n.n(a),i=(n(26),n(10)),l=n(2),j=n(4),o=n.n(j),u=n(9),d=n(5),b=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(null),s=Object(d.a)(a,2),i=s[0],l=s[1],j=Object(c.useCallback)(function(){var e=Object(u.a)(o.a.mark((function e(t){var n,c,a,s,i,j=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=j.length>1&&void 0!==j[1]?j[1]:"GET",c=j.length>2&&void 0!==j[2]?j[2]:null,a=j.length>3&&void 0!==j[3]?j[3]:{},r(!0),e.prev=4,c&&(c=JSON.stringify(c),a["Content-Type"]="application/json"),e.next=8,fetch(t,{method:n,body:c,headers:a});case 8:return s=e.sent,e.next=11,s.json();case 11:if(i=e.sent,s.ok){e.next=14;break}throw new Error(i.message||"Somewhare is wrong try again !");case 14:return r(!1),e.abrupt("return",i);case 18:throw e.prev=18,e.t0=e.catch(4),r(!1),l(e.t0.message),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),[]);return{loading:n,request:j,error:i,clearError:Object(c.useCallback)((function(){return l(null)}),[])}};function O(){}var h=Object(c.createContext)({token:null,userId:null,login:O,logout:O,isAuthenticated:!1}),x=n(0),p=function(){return Object(x.jsx)("div",{style:{display:"flex",justifyContent:"center",paddingTop:"2rem"},children:Object(x.jsx)("div",{className:"preloader-wrapper active",children:Object(x.jsxs)("div",{className:"spinner-layer spinner-red-only",children:[Object(x.jsx)("div",{className:"circle-clipper left",children:Object(x.jsx)("div",{className:"circle"})}),Object(x.jsx)("div",{className:"gap-patch",children:Object(x.jsx)("div",{className:"circle"})}),Object(x.jsx)("div",{className:"circle-clipper right",children:Object(x.jsx)("div",{className:"circle"})})]})})})},f=function(e){var t=e.links;return t.length?Object(x.jsxs)("table",{children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"\u2116"}),Object(x.jsx)("th",{children:"Original link"}),Object(x.jsx)("th",{children:"Abbreviated"}),Object(x.jsx)("th",{children:"Date"}),Object(x.jsx)("th",{children:"Open"})]})}),Object(x.jsx)("tbody",{children:t.map((function(e,t){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:t+1}),Object(x.jsx)("td",{children:e.from}),Object(x.jsx)("td",{children:e.to}),Object(x.jsx)("td",{children:new Date(e.date).toLocaleDateString()}),Object(x.jsx)("td",{children:Object(x.jsx)(i.b,{to:"/detail/".concat(e._id),children:"Open"})})]},e._id)}))})]}):Object(x.jsx)("p",{className:"center",children:"No any links !"})},v=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],a=b(),s=a.loading,i=a.request,l=Object(c.useContext)(h).token,j=Object(c.useCallback)(Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i("/api/link","GET",null,{Authorization:"Bearer ".concat(l)});case 3:t=e.sent,r(t),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])}))),[l,i]);return Object(c.useEffect)((function(){j()}),[j]),s?Object(x.jsx)(p,{}):Object(x.jsx)(x.Fragment,{children:!s&&Object(x.jsx)(f,{links:n})})},m=function(){var e=Object(l.g)(),t=Object(c.useContext)(h),n=b().request,r=Object(c.useState)(""),a=Object(d.a)(r,2),s=a[0],i=a[1];Object(c.useEffect)((function(){window.M.updateTextFields()}),[]);var j=function(){var c=Object(u.a)(o.a.mark((function c(r){var a;return o.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if("Enter"!==r.key){c.next=10;break}return c.prev=1,c.next=4,n("/api/link/generate","POST",{from:s},{Authorization:"Bearer ".concat(t.token)});case 4:a=c.sent,e.push("/detail/".concat(a.link._id)),c.next=10;break;case 8:c.prev=8,c.t0=c.catch(1);case 10:case"end":return c.stop()}}),c,null,[[1,8]])})));return function(e){return c.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"row",children:Object(x.jsx)("div",{className:"col s8 offset-s2",style:{paddingTop:"2rem"},children:Object(x.jsxs)("div",{className:"input-field",children:[Object(x.jsx)("input",{placeholder:"Put the link",id:"link",type:"text",value:s,onChange:function(e){return i(e.target.value)},onKeyPress:j}),Object(x.jsx)("label",{htmlFor:"link",children:"Write the link"})]})})})},g=function(e){var t=e.link;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h2",{children:"Link"}),Object(x.jsxs)("p",{children:["Your link:"," ",Object(x.jsx)("a",{href:t.to,target:"_blank",rel:"noopener noreferrer",children:t.to})]}),Object(x.jsxs)("p",{children:["From:"," ",Object(x.jsx)("a",{href:t.from,target:"_blank",rel:"noopener noreferrer",children:t.from})]}),Object(x.jsxs)("p",{children:["Count clicks to link: ",Object(x.jsx)("strong",{children:t.clicks})]}),Object(x.jsxs)("p",{children:["Date created:"," ",Object(x.jsx)("strong",{children:new Date(t.date).toLocaleDateString()})]})]})},k=function(){var e=Object(c.useContext)(h).token,t=b(),n=t.request,r=t.loading,a=Object(c.useState)(null),s=Object(d.a)(a,2),i=s[0],j=s[1],O=Object(l.h)().id,f=Object(c.useCallback)(Object(u.a)(o.a.mark((function t(){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n("/api/link/".concat(O),"GET",null,{Authorization:"Bearer ".concat(e)});case 3:c=t.sent,j(c),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])}))),[e,O,n]);return Object(c.useEffect)((function(){f()}),[f]),r?Object(x.jsx)(p,{}):Object(x.jsx)(x.Fragment,{children:!r&&i&&Object(x.jsx)(g,{link:i})})},w=n(14),N=n(13),y=function(){var e=Object(c.useContext)(h),t=Object(c.useCallback)((function(e){window.M&&e&&window.M.toast({html:e})}),[]),n=b(),r=n.loading,a=n.request,s=n.error,i=n.clearError,l=Object(c.useState)({email:"",password:""}),j=Object(d.a)(l,2),O=j[0],p=j[1];Object(c.useEffect)((function(){t(s),i()}),[s,t,i]),Object(c.useEffect)((function(){window.M.updateTextFields()}),[]);var f=function(e){p(Object(N.a)(Object(N.a)({},O),{},Object(w.a)({},e.target.name,e.target.value)))},v=function(){var e=Object(u.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a("/api/auth/register","POST",Object(N.a)({},O));case 3:n=e.sent,t(n.message),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var t=Object(u.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a("/api/auth/login","POST",Object(N.a)({},O));case 3:n=t.sent,e.login(n.token,n.userId),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("h1",{className:"center",children:"Cut the Link"}),Object(x.jsx)("div",{className:"col s6 offset-s3",children:Object(x.jsxs)("div",{className:"card blue darken-1",children:[Object(x.jsxs)("div",{className:"card-content white-text",children:[Object(x.jsx)("span",{className:"card-title",children:"Authorization"}),Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"input-field",children:[Object(x.jsx)("input",{placeholder:"Write email",id:"email",type:"text",name:"email",className:"yellow-input",value:O.email,onChange:f}),Object(x.jsx)("label",{htmlFor:"first_name",children:"Email"})]}),Object(x.jsxs)("div",{className:"input-field",children:[Object(x.jsx)("input",{placeholder:"Write password",id:"password",type:"password",name:"password",className:"yellow-input",value:O.password,onChange:f}),Object(x.jsx)("label",{htmlFor:"first_name",children:"Email"})]})]})]}),Object(x.jsxs)("div",{className:"card-action",children:[Object(x.jsx)("button",{className:"btn yellow darken-4",style:{marginRight:10},onClick:m,disabled:r,children:"Login"}),Object(x.jsx)("button",{className:"btn grey lighten-1 black-text",onClick:v,disabled:r,children:"Registration"})]})]})})]})},C="userData",S=function(){var e=Object(l.g)(),t=Object(c.useContext)(h);return Object(x.jsx)("nav",{children:Object(x.jsxs)("div",{className:"nav-wrapper blue darken-1",style:{padding:"0 2rem"},children:[Object(x.jsx)("span",{className:"brand-logo",children:"Cut the link"}),Object(x.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:[Object(x.jsx)("li",{children:Object(x.jsx)(i.c,{to:"/create",children:"Create"})}),Object(x.jsx)("li",{children:Object(x.jsx)(i.c,{to:"/links",children:"Links"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"/",onClick:function(n){n.preventDefault(),t.logout(),e.push("/")},children:"Logout"})})]})]})})};n(36);var E=function(){var e=function(){var e=Object(c.useState)(null),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),s=Object(d.a)(a,2),i=s[0],l=s[1],j=Object(c.useState)(null),o=Object(d.a)(j,2),u=o[0],b=o[1],O=Object(c.useCallback)((function(e,t){r(e),b(t),localStorage.setItem(C,JSON.stringify({userId:t,token:e}))}),[]),h=Object(c.useCallback)((function(){r(null),b(null),localStorage.removeItem(C)}),[]);return Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem(C));e&&e.token&&O(e.token,e.userId),l(!0)}),[O]),{login:O,logout:h,token:n,userId:u,ready:i}}(),t=e.token,n=e.login,r=e.logout,a=e.userId,s=e.ready,j=!!t,o=function(e){return e?Object(x.jsxs)(l.d,{children:[Object(x.jsx)(l.b,{path:"/links",exact:!0,children:Object(x.jsx)(v,{})}),Object(x.jsx)(l.b,{path:"/create",exact:!0,children:Object(x.jsx)(m,{})}),Object(x.jsx)(l.b,{path:"/detail/:id",exact:!0,children:Object(x.jsx)(k,{})}),Object(x.jsx)(l.a,{to:"/create"})]}):Object(x.jsxs)(l.d,{children:[Object(x.jsx)(l.b,{path:"/",exact:!0,children:Object(x.jsx)(y,{})}),Object(x.jsx)(l.a,{to:"/"})]})}(j);return s?Object(x.jsx)(h.Provider,{value:{token:t,login:n,logout:r,userId:a,isAuthenticated:j},children:Object(x.jsxs)(i.a,{children:[j&&Object(x.jsx)(S,{}),Object(x.jsx)("div",{className:"container",children:o})]})}):Object(x.jsx)(p,{})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(E,{})}),document.getElementById("root")),F()}},[[37,1,2]]]);
//# sourceMappingURL=main.49992310.chunk.js.map