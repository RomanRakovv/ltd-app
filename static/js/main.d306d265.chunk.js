(this["webpackJsonpltd-app"]=this["webpackJsonpltd-app"]||[]).push([[0],{51:function(n,t,e){},79:function(n,t,e){"use strict";e.r(t);var r=e(1),c=e(0),a=e(20),o=e.n(a),i=(e(51),e(5)),d=e(18),s=e(7),p=e(14),u=e(3),l=e(4);function b(){var n=Object(u.a)(["\n   padding: 5px;\n   margin:0 auto;\n   display:flex;\n   justify-content:center;\n   flex-wrap:wrap;\n   .imgProduct{\n      display:flex;\n      justify-content:center;\n      align-items:center;\n      img{\n         max-width:80%;\n      }\n   }\n   div{\n      max-width:700px;\n      p{\n         color: #DC3E31;\n         margin-bottom:40px;\n         font-size: 28px;\n         font-family: 'Circe Bold',sans-serif;\n      }\n      a{\n         font-weight: 700;\n         color: white;\n         text-decoration: none;\n         padding: .8em 1em calc(.8em + 3px);\n         border-radius: 3px;\n         background: rgb(64,199,129);\n         box-shadow: 0 -3px rgb(53,167,110) inset;\n         transition: 0.2s;\n         cursor:pointer;\n         } \n         a:hover { background: rgb(53, 167, 110); }\n         a:active {\n         background: rgb(33,147,90);\n         box-shadow: 0 3px rgb(33,147,90) inset;\n         }\n   }\n"]);return b=function(){return n},n}var x=l.a.div(b());function j(){var n=Object(u.a)(["\n   display:flex;\n   img{\n      flex: auto;\n   }\n"]);return j=function(){return n},n}var f=l.a.div(j()),g=e.p+"static/media/Spin-1s-200px.04b0a9f6.svg",O=function(){return Object(r.jsx)(f,{children:Object(r.jsx)("img",{src:g,alt:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"})})},h=function(){var n=Object(s.c)((function(n){return n.productsReducer})),t=n.isLoading,e=n.products,c=n.selectedProductId,a=e.filter((function(n){return n.id===c})),o=Object(d.a)(a,1)[0];return Object(r.jsx)(r.Fragment,{children:t?Object(r.jsx)(O,{}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(p.b,{to:"/ltd-app",children:Object(r.jsx)("div",{className:"back",children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043a \u0432\u044b\u0431\u043e\u0440\u0443"})}),Object(r.jsxs)(x,{children:[Object(r.jsx)("div",{className:"imgProduct",children:Object(r.jsx)("img",{src:o.image,alt:"product"})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:o.title}),Object(r.jsx)("h4",{children:o.description}),Object(r.jsxs)("p",{children:[o.price," $"]}),Object(r.jsx)("a",{children:"\u041a\u0443\u043f\u0438\u0442\u044c \u0432 1 \u043a\u043b\u0438\u043a"})]})]})]})})};function m(){var n=Object(u.a)(["\n    margin-bottom:30px;\n    display:flex;\n    flex-wrap:wrap;  \n"]);return m=function(){return n},n}var v=l.a.div(m()),y=e(9),w=e.n(y),k=e(17),C=e(21),P=e.n(C),T=function(n){return Object(k.a)(w.a.mark((function t(){var e;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.a.get("https://fakestoreapi.com/products".concat("\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435"!==n?"/category/".concat(n):""));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))()},E=function(n){return Object(k.a)(w.a.mark((function t(){var e;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.a.get("https://fakestoreapi.com/products/".concat(n));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))()},R="SET_PRODUCTS",S="SET_PRODUCT_BY_ID",_="START_LOADING",D="SET_CATEGORY",L="SELECT_PRODUCT",N="SET_PRODUCTS_BY_SEARCH",F="SET_CURRENT_PAGE",z=function(n){return{type:D,payload:n}},U=function(n){return function(){var t=Object(k.a)(w.a.mark((function t(e){var r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:_}),t.next=3,T(n);case 3:r=t.sent,e({type:R,payload:r}),e(z(n));case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},B=function(n){return function(t){t({type:F,payload:n})}},I=e.p+"static/media/dropDownArrow.7ebb6912.svg";function A(){var n=Object(u.a)(["\n   position: relative;\n   display: inline-block;\n   margin-right:10px;\n   margin-bottom:20px;\n   .dropbtn {      \n      background-color: inherit;\n      color: black;\n      padding: 16px;\n      font-size: 16px;\n      border: 1px solid  #3f51b5;\n      cursor: pointer;\n      border-radius:5px;\n      i{\n         background-image:url(","); \n         width:16px; \n         height:16px; \n         display:inline-block;\n         vertical-align:bottom;\n      }\n   }\n  .dropdown-content {\n      display: none;\n      position: absolute;\n      background-color: #f9f9f9;\n      min-width: 160px;\n      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n      z-index: 1;\n   }\n\n   .dropdown-content span {\n      color: black;\n      padding: 12px 16px;\n      text-decoration: none;\n      display: block;\n      cursor:pointer;\n   }\n\n   .dropdown-content span:hover {background-color: #f1f1f1}\n\n   :hover .dropdown-content {\n      display: block;\n   }\n\n   :hover .dropbtn {\n      /* background-color: #3e8e41; */\n   }\n\n"]);return A=function(){return n},n}var V=l.a.div(A(),I),G=function(){var n=Object(s.b)(),t=function(t){var e=t.currentTarget.innerHTML;n(U(e)),n(B(1))},e=Object(s.c)((function(n){return n.productsReducer})),c=e.activeCategory,a=e.categories;return Object(r.jsxs)(V,{children:[Object(r.jsxs)("button",{className:"dropbtn",children:["\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435"===c?"\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f\u043c":c," ",Object(r.jsx)("i",{})]}),Object(r.jsx)("div",{className:"dropdown-content",children:a.map((function(n){return Object(r.jsx)("span",{onClick:t,children:n},n)}))})]})},M=e.p+"static/media/search-solid.cc51b702.svg";function Y(){var n=Object(u.a)(["\n   div{\n      position:relative;\n      :before{\n         position: absolute;\n         content:'';\n         z-index:2;\n         background:  url(",") 0 0 no-repeat;\n         top:15px;\n         left: 5%;\n         width:20px;\n         height:20px;\n         cursor:pointer;\n      }\n   }\n   input{\n      padding: 16px 16px 16px 42px;\n      border: 1px solid  #3f51b5;\n      border-radius: 4px;\n      font-size:16px;  \n   }\n"]);return Y=function(){return n},n}var H=l.a.div(Y(),M),J=function(){var n=Object(s.b)(),t=Object(s.c)((function(n){return n.productsReducer})),e=t.products,a=t.searchValue,o=Object(c.useState)(a),i=Object(d.a)(o,2),p=i[0],u=i[1];return Object(r.jsxs)(H,{children:[Object(r.jsx)("div",{onClick:function(){var t=e.filter((function(n){return n.title.toUpperCase().includes(a.toUpperCase())}));n(function(n,t){return function(e){e({type:N,payload:t}),e({type:R,payload:n})}}(t,a))}}),Object(r.jsx)("input",{type:"text",onChange:function(t){n({type:N,payload:t.currentTarget.value}),u(a)},placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430...",defaultValue:p})]})},$=function(){return Object(r.jsxs)(v,{children:[Object(r.jsx)(G,{}),Object(r.jsx)(J,{})]})},W=e(6);function q(){var n=Object(u.a)(["\n   display:flex;\n   justify-content:space-between;\n   flex-wrap:wrap;\n   margin-bottom:15px;\n"]);return q=function(){return n},n}var K=l.a.div(q());function Q(){var n=Object(u.a)(["\n   display:flex;\n   flex-wrap:wrap;\n   a{\n      padding:8px 10px;\n      border: 1px solid  #3f51b5;\n      border-radius:5px;\n      margin:2px;\n      cursor:pointer;      \n   }\n   .active{\n         border: 2px solid  black;\n      }\n"]);return Q=function(){return n},n}var X=l.a.div(Q()),Z=function(n){for(var t=n.totalProducts,e=n.productsPerPage,c=n.paginate,a=n.currentPage,o=[],i=1;i<=Math.ceil(t/e);i++)o.push(i);return Object(r.jsx)(X,{children:o.map((function(n){return Object(r.jsx)("a",{className:a===n?"active":"",onClick:function(){return c(n)},href:"#",children:n},n)}))})};function nn(){var n=Object(u.a)(["\n  flex: 0 0 20%;\n  margin: 10px;\n  box-shadow: 0px 0px 5px 5px #3f51b5;\n  border-radius: 20px;\n  display:flex;\n  flex-direction:column;  \n  a{     \n   text-decoration:none;\n   :first-child{\n      flex:auto;\n      display:flex;\n      justify-content:center;\n      align-items:center;\n      .imgBlock{\n         padding: 0 5px;\n         margin-bottom:5px;\n         display:flex;\n         justify-content: center; \n         align-items:center;\n         img{\n            width: 200px;\n            border-radius:20px;\n         }\n   }  \n   }\n   \n   h3{\n      flex: auto;\n      padding: 0px 15px 0;\n      font-size: 14px;\n      line-height: 16px;\n      text-transform: uppercase;\n      color: #454545;\n      margin:0;      \n      cursor:pointer;\n   }   \n  } \n   .category{\n      margin-top:2px;\n      padding: 0px 15px 0;\n   }\n   p{\n      font-family: 'Circe Regular',sans-serif;\n      padding:5px 15px 10px;\n      color: #DC3E31;\n      margin-bottom:10px;\n      font-size: 20px;\n   }\n"]);return nn=function(){return n},n}var tn=l.a.div(nn()),en=function(n){var t=Object(s.b)(),e=function(){var e,r;t((e=n.id,function(){var n=Object(k.a)(w.a.mark((function n(t){var r;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:_}),n.next=3,E(e);case 3:r=n.sent,t({type:S,payload:r});case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}())),t((r=n.id,function(n){n({type:L,payload:r})}))};return Object(r.jsxs)(tn,{children:[Object(r.jsx)(p.b,{to:"/ltd-app/product/".concat(n.id),children:Object(r.jsx)("div",{className:"imgBlock",onClick:e,children:Object(r.jsx)("img",{src:n.image,alt:""})})}),Object(r.jsx)(p.b,{to:"/ltd-app/product/".concat(n.id),children:Object(r.jsx)("h3",{onClick:e,children:n.title})}),Object(r.jsxs)("div",{className:"category",children:["\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f - ",n.category]}),Object(r.jsxs)("p",{children:["\u0426\u0435\u043d\u0430 - ",n.price,"$"]})]})},rn=function(){var n=Object(s.c)((function(n){return n.productsReducer})),t=n.products,e=n.isLoading,a=n.activeCategory,o=n.currentPage,i=Object(s.b)(),p=Object(c.useState)(o),u=Object(d.a)(p,2),l=u[0],b=u[1],x=Object(c.useState)(4),j=Object(d.a)(x,1)[0],f=l*j,g=f-j,h=t.slice(g,f);return Object(c.useEffect)((function(){b(o)}),[a]),Object(c.useEffect)((function(){i({type:_}),i(U(a))}),[]),e?Object(r.jsx)(O,{}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(K,{children:h.map((function(n){return Object(r.jsx)(en,Object(W.a)(Object(W.a)({},n),{},{children:n.category}),"".concat(n,"_").concat(n.id))}))}),Object(r.jsx)(Z,{currentPage:l,paginate:function(n){i(B(n)),b(n)},productsPerPage:j,totalProducts:t.length})]})};function cn(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)($,{}),Object(r.jsx)(rn,{})]})}function an(){var n=Object(u.a)([" \n  font-size:20px;\n"]);return an=function(){return n},n}function on(){var n=Object(u.a)(["\n  min-height:64px;\n  padding: 0 24px;     \n  max-width:170px;\n  color:#fff;\n  a{\n    color:#fff;\n    text-decoration:none;\n  }\n"]);return on=function(){return n},n}function dn(){var n=Object(u.a)(["\n   color: #fff;\n   background-color: #3f51b5;\n   position: block;\n   top:0;\n   width: 100%;\n   display: flex;\n   box-sizing: border-box;\n   flex-shrink: 0;\n   flex-direction: column;  \n"]);return dn=function(){return n},n}var sn=l.a.header(dn()),pn=l.a.div(on()),un=l.a.h3(an());function ln(){return Object(r.jsx)(sn,{children:Object(r.jsx)(pn,{children:Object(r.jsx)(p.b,{to:"/ltd-app",children:Object(r.jsx)(un,{children:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433 \u0442\u043e\u0432\u0430\u0440\u043e\u0432"})})})})}function bn(){var n=Object(u.a)(["\n  max-width: 1500px;\n  margin: 0 auto;\n  padding: 0 15px;\n  margin-top: 10px;\n  padding:10px;\n  a{\n    text-decoration:none;\n    color:black;\n    .back{\n    margin-bottom:30px;\n    margin-left:5px;\n    border: 1px solid #3f51b5;\n    border-radius:20px;\n    padding:5px;\n    width:180px;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n  }\n  }\n"]);return bn=function(){return n},n}var xn=l.a.div(bn()),jn=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ln,{}),Object(r.jsx)(xn,{children:Object(r.jsxs)(i.c,{children:[Object(r.jsx)(i.a,{path:"/ltd-app",exact:!0,component:cn}),Object(r.jsx)(i.a,{path:"/ltd-app/product/:productId",component:h}),Object(r.jsx)(i.a,{path:"*",render:function(){return Object(r.jsx)("div",{children:"404 NOT FOUND"})}})]})})]})},fn=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,80)).then((function(t){var e=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;e(n),r(n),c(n),a(n),o(n)}))},gn=e(15),On={products:[],isLoading:!0,categories:["\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435","men clothing","jewelery","electronics","women clothing"],activeCategory:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435",searchValue:"",currentPage:1},hn=Object(gn.combineReducers)({productsReducer:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:On,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(W.a)(Object(W.a)({},n),{},{products:t.payload,isLoading:!1});case _:return Object(W.a)(Object(W.a)({},n),{},{isLoading:!0});case S:var e=t.payload;return Object(W.a)(Object(W.a)({},n),{},{isLoading:!1,products:n.products.map((function(n){return n.id===e.id?e:n}))});case D:return Object(W.a)(Object(W.a)({},n),{},{activeCategory:t.payload});case L:return Object(W.a)(Object(W.a)({},n),{},{selectedProductId:t.payload});case N:return Object(W.a)(Object(W.a)({},n),{},{searchValue:t.payload});case F:return Object(W.a)(Object(W.a)({},n),{},{currentPage:t.payload});default:return n}}}),mn=e(44),vn=e(45),yn=Object(gn.createStore)(hn,Object(mn.composeWithDevTools)(Object(gn.applyMiddleware)(vn.a)));o.a.render(Object(r.jsx)(p.a,{children:Object(r.jsx)(s.a,{store:yn,children:Object(r.jsx)(jn,{})})}),document.getElementById("root")),fn()}},[[79,1,2]]]);
//# sourceMappingURL=main.d306d265.chunk.js.map