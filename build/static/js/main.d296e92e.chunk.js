(this["webpackJsonpamazon-aug"]=this["webpackJsonpamazon-aug"]||[]).push([[0],{100:function(e,t,c){},102:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c(3),s=c.n(n),i=c(28),r=c.n(i),o=(c(62),c(50)),l=c(8),d=(c(63),c(64),c(51)),j=c.n(d),u=c(52),m=c.n(u),h=c(15),b=Object(n.createContext)(),O=function(e){var t=e.reducer,c=e.initialState,s=e.children;return Object(a.jsx)(b.Provider,{value:Object(n.useReducer)(t,c),children:s})},p=function(){return Object(n.useContext)(b)},x=c(36),g=x.a.initializeApp({apiKey:"AIzaSyCNlyiVOS4kiQfvnTSLb6FQYpddb7egtDY",authDomain:"clone-5b796.firebaseapp.com",projectId:"clone-5b796",storageBucket:"clone-5b796.appspot.com",messagingSenderId:"182396632335",appId:"1:182396632335:web:f82a6e4f1295a7f365127a",measurementId:"G-GRS3TW7PLR"}).firestore(),_=x.a.auth();var v=function(){var e=p(),t=Object(l.a)(e,2),c=t[0],n=c.basket,s=c.user;return t[1],Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)(h.b,{to:"/",children:Object(a.jsx)("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png"})}),Object(a.jsxs)("div",{className:"header__search",children:[Object(a.jsx)("input",{className:"header__searchInput",type:"text"}),Object(a.jsx)(j.a,{className:"header__searchIcon"})]}),Object(a.jsxs)("div",{className:"header__nav",children:[Object(a.jsx)(h.b,{to:!s&&"/login",className:"header__clearlink",children:Object(a.jsxs)("div",{onClick:function(){s&&_.signOut()},className:"header__option",children:[Object(a.jsxs)("span",{className:"header__optionLineOne",children:["Hello ",s?s.email:"Guest"]}),Object(a.jsx)("span",{className:"header__optionLineTwo",children:s?"Sign Out":"Sign In"})]})}),Object(a.jsx)(h.b,{to:"/orders",className:"header__clearlink",children:Object(a.jsxs)("div",{className:"header__option",children:[Object(a.jsx)("span",{className:"header__optionLineOne",children:"Returns"}),Object(a.jsx)("span",{className:"header__optionLineTwo",children:"& Orders"})]})}),Object(a.jsxs)("div",{className:"header__option",children:[Object(a.jsx)("span",{className:"header__optionLineOne",children:"Your"}),Object(a.jsx)("span",{className:"header__optionLineTwo",children:"Prime"})]}),Object(a.jsx)(h.b,{to:"/checkout",className:"header__clearlink",children:Object(a.jsxs)("div",{className:"header__optionBasket",children:[Object(a.jsx)(m.a,{}),Object(a.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:n.length})]})})]})]})};c(73),c(74);var f=function(e){var t=e.id,c=e.title,n=e.image,s=e.price,i=e.rating,r=p(),o=Object(l.a)(r,2),d=(o[0].basket,o[1]);return Object(a.jsxs)("div",{className:"product",children:[Object(a.jsxs)("div",{className:"product__info",children:[Object(a.jsx)("p",{children:c}),Object(a.jsxs)("p",{className:"product__price",children:[Object(a.jsx)("small",{children:"$"}),Object(a.jsx)("strong",{children:s})]}),Object(a.jsx)("div",{className:"product__rating",children:Array(i).fill().map((function(e,t){return Object(a.jsx)("p",{children:"\ud83c\udf1f"},t)}))})]}),Object(a.jsx)("img",{src:n,alt:""}),Object(a.jsx)("button",{onClick:function(){d({type:"ADD_TO_BASKET",item:{id:t,title:c,image:n,price:s,rating:i}})},children:"Add to Basket"})]})};var S=function(){return Object(a.jsx)("div",{className:"home",children:Object(a.jsxs)("div",{className:"home__container",children:[Object(a.jsx)("img",{className:"home__image",src:"https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2020/Other/3706_WatchToGiveBack_TallDesktopHero_1x_1500x600._CB660206622_.jpg",alt:""}),Object(a.jsxs)("div",{className:"home__row",children:[Object(a.jsx)(f,{id:"12321341",title:"ASUS Laptop L210 Ultra Thin Laptop, 11.6",price:199.99,rating:5,image:"https://m.media-amazon.com/images/I/71KR2i6-WaL._AC_UY218_.jpg"}),Object(a.jsx)(f,{id:"49538094",title:"iBUYPOWER Gaming PC Computer Desktop Trace 4 9310  (AMD Ryzen 5 3600 3.6GHz, AMD Radeon RX 5500 XT 4GB, 8GB DDR4 RAM",price:699.99,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/71CyfrhCZ1L._AC_SL1500_.jpg"})]}),Object(a.jsxs)("div",{className:"home__row",children:[Object(a.jsx)(f,{id:"4903850",title:"Govee Smart LED Strip Lights, 16.4ft WiFi LED Lights Work with Alexa and Google Assistant, Bright 5050 LEDs,  16 Million Colors with App Control and Music Sync for Home, Kitchen, TV, Party",price:18.99,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/71FN5PwrLLL._AC_SX425_.jpg"}),Object(a.jsx)(f,{id:"99903850",title:"Home Collection 3 Piece Full/Queen Over Size Embossed Solid White Color Coverlet Bedspread New # Veronica",price:68,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/81IaUxJsrdL._AC_SL1500_.jpg"}),Object(a.jsx)(f,{id:"3254354345",title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",price:598.99,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"})]}),Object(a.jsx)("div",{className:"home__row",children:Object(a.jsx)(f,{id:"90829332",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",price:1094.98,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"})}),Object(a.jsxs)("div",{className:"home__row",children:[Object(a.jsx)(f,{id:"903850",title:"RUNMUS Gaming Headset for PS4, Xbox One, PC Headset w/Surround Sound, Noise Canceling Over Ear Headphones with Mic & LED Light, Compatible with PS5, PS4, Xbox One, Switch, PC, PS2, Mac, Laptop",price:24.89,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/81PtEw326aL._AC_SX466_.jpg"}),Object(a.jsx)(f,{id:"8903851",title:"80ft LED Strip Lights, Music Sync Color Changing LED Light Built-in Mic,  Bluetooth APP Controlled DIY Color Options Rope Lights, 5050 RGB LED Light Strip(APP+Remote+Mic+Music)",price:44.99,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/71r8REEcJvL._AC_SX679_.jpg"}),Object(a.jsx)(f,{id:"23445930",title:"Instant Pot Duo 7-in-1 Electric Pressure Cooker, Sterilizer, Slow Cooker, Rice Cooker, Steamer, Saute, Yogurt Maker, and Warmer, 6 Quart, 14 One-Touch Programs",price:79,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/61XkZDJ6ilL._AC_SL1500_.jpg"})]})]})})},N=c(10);c(75),c(76);var k=function(e){var t=e.id,c=e.image,n=e.title,s=e.price,i=e.rating,r=e.hideButton,o=p(),d=Object(l.a)(o,2),j=(d[0].basket,d[1]);return Object(a.jsxs)("div",{className:"checkoutProduct",children:[Object(a.jsx)("img",{className:"checkoutProduct__image",src:c}),Object(a.jsxs)("div",{className:"checkoutProduct__info",children:[Object(a.jsx)("p",{className:"checkoutProduct__title",children:n}),Object(a.jsxs)("p",{className:"checkoutProduct__price",children:[Object(a.jsx)("small",{children:"$"}),Object(a.jsx)("strong",{children:s})]}),Object(a.jsx)("div",{className:"checkoutProduct__rating",children:Array(i).fill().map((function(e,t){return Object(a.jsx)("p",{children:"\ud83c\udf1f"},t)}))}),!r&&Object(a.jsx)("button",{onClick:function(){j({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from Basket"})," "]})]})},C=(c(77),c(24)),y=c.n(C);var E=function(){var e=p(),t=Object(l.a)(e,2),c=t[0].basket,n=(t[1],Object(N.f)());return Object(a.jsxs)("div",{className:"subtotal",children:[Object(a.jsx)(y.a,{renderText:function(e){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{children:["Subtotal (",c.length," items): ",Object(a.jsx)("strong",{children:e})]}),Object(a.jsxs)("small",{className:"subtotal__gift",children:[Object(a.jsx)("input",{type:"checkbox"})," This order contains a gift"]})]})},decimalScale:2,value:function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)}(c),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(a.jsx)("button",{onClick:function(e){return n.push("/payment")},children:"Proceed to Checkout"})]})};var L=function(){var e=p(),t=Object(l.a)(e,2),c=t[0].basket;return t[1],Object(a.jsxs)("div",{className:"checkout",children:[Object(a.jsxs)("div",{className:"checkout__left",children:[Object(a.jsx)("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),Object(a.jsx)("h3",{children:"Hello"}),Object(a.jsx)("h2",{className:"checkout__title",children:"Your shopping Basket"}),c.map((function(e){return Object(a.jsx)(k,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]}),Object(a.jsx)("div",{className:"checkout__right",children:Object(a.jsx)(E,{})})]})};c(79);var A=function(){var e=Object(N.f)(),t=Object(n.useState)(""),c=Object(l.a)(t,2),s=c[0],i=c[1],r=Object(n.useState)(""),o=Object(l.a)(r,2),d=o[0],j=o[1];return Object(a.jsxs)("div",{className:"login",children:[Object(a.jsx)(h.b,{to:"/",children:Object(a.jsx)("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"})}),Object(a.jsxs)("div",{className:"login__container",children:[Object(a.jsx)("h1",{children:"Sign-in"}),Object(a.jsxs)("form",{children:[Object(a.jsx)("h5",{children:"E-mail"}),Object(a.jsx)("input",{type:"text",value:s,onChange:function(e){return i(e.target.value)}}),Object(a.jsx)("h5",{children:"Password"}),Object(a.jsx)("input",{type:"password",value:d,onChange:function(e){return j(e.target.value)}}),Object(a.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),_.signInWithEmailAndPassword(s,d).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__signInButton",children:"Sign In"})]}),Object(a.jsx)("p",{children:"By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."}),Object(a.jsx)("button",{onClick:function(t){t.preventDefault(),_.createUserWithEmailAndPassword(s,d).then((function(t){t&&e.push("/")})).catch((function(e){return console.log(e.message)}))},className:"login__registerButton",children:"Create your Amazon Account"})]})]})},P=c(26),T=c.n(P),w=c(35),D=(c(81),c(23)),B=c(53),I=c.n(B).a.create({baseURL:"https://us-central1-clone-5b796.cloudfunctions.net/api"});var R=function(){var e=p(),t=Object(l.a)(e,2),c=t[0],s=c.basket,i=c.user,r=t[1],o=Object(N.f)(),d=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},j=Object(D.useStripe)(),u=Object(D.useElements)(),m=Object(n.useState)(null),b=Object(l.a)(m,2),O=b[0],x=b[1],_=Object(n.useState)(!0),v=Object(l.a)(_,2),f=v[0],S=v[1],C=Object(n.useState)(!1),E=Object(l.a)(C,2),L=E[0],A=E[1],P=Object(n.useState)(""),B=Object(l.a)(P,2),R=B[0],M=B[1],z=Object(n.useState)(!0),G=Object(l.a)(z,2),U=G[0],W=G[1];Object(n.useEffect)((function(){(function(){var e=Object(w.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I({method:"post",url:"/payments/create?total=".concat(100*d(s))});case 2:t=e.sent,W(t.data.clientSecret);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),console.log("THE SECRET IS >>>",U);var Y=function(){var e=Object(w.a)(T.a.mark((function e(t){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),M(!0),e.next=4,j.confirmCardPayment(U,{payment_method:{card:u.getElement(D.CardElement)}}).then((function(e){var t=e.paymentIntent;g.collection("users").doc(null===i||void 0===i?void 0:i.uid).collection("orders").doc(t.id).set({basket:s,amount:t.amount,created:t.created}),A(!0),x(null),M(!1),r({type:"EMPTY_BASKET"}),o.replace("/orders")}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{className:"payment",children:Object(a.jsxs)("div",{className:"payment__container",children:[Object(a.jsxs)("h1",{children:["Checkout (",Object(a.jsxs)(h.b,{to:"/checkout",children:[null===s||void 0===s?void 0:s.length," items"]}),")"]}),Object(a.jsxs)("div",{className:"payment__section",children:[Object(a.jsx)("div",{className:"payment__title",children:Object(a.jsx)("h3",{children:"Delivery Address"})}),Object(a.jsxs)("div",{className:"payment__address",children:[Object(a.jsx)("p",{children:null===i||void 0===i?void 0:i.email}),Object(a.jsx)("p",{children:"123 React Lane"}),Object(a.jsx)("p",{children:"Canada, Saskatoon"})]})]}),Object(a.jsxs)("div",{className:"payment__section",children:[Object(a.jsx)("div",{className:"payment__title",children:Object(a.jsx)("h3",{children:"Review items and delivery"})}),Object(a.jsx)("div",{className:"payment__items",children:s.map((function(e){return Object(a.jsx)(k,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))})]}),Object(a.jsxs)("div",{className:"payment__section",children:[Object(a.jsx)("div",{className:"payment__title",children:Object(a.jsx)("h3",{children:"Payment Method"})}),Object(a.jsx)("div",{className:"payment__details",children:Object(a.jsxs)("form",{onSubmit:Y,children:[Object(a.jsx)(D.CardElement,{onChange:function(e){S(e.empty),x(e.error?e.error.message:"")}}),Object(a.jsxs)("div",{className:"payment__priceContainer",children:[Object(a.jsx)(y.a,{renderText:function(e){return Object(a.jsxs)("h3",{children:["Order Total: ",e]})},decimalScale:2,value:d(s),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(a.jsx)("button",{disabled:R||f||L,children:Object(a.jsx)("span",{children:R?Object(a.jsx)("p",{children:"Processing"}):"Buy Now"})})]}),O&&Object(a.jsx)("div",{children:O})]})})]})]})})},M=c(54),z=(c(98),c(55)),G=c.n(z);var U=function(e){var t,c=e.order;return Object(a.jsxs)("div",{className:"order",children:[Object(a.jsx)("h2",{children:"Order"}),Object(a.jsx)("p",{children:G.a.unix(c.data.created).format("MMMM Do YYYY, h:mma")}),Object(a.jsx)("p",{className:"order__id",children:Object(a.jsx)("small",{children:c.id})}),null===(t=c.data.basket)||void 0===t?void 0:t.map((function(e){return Object(a.jsx)(k,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating,hideButton:!0})})),Object(a.jsx)(y.a,{renderText:function(e){return Object(a.jsxs)("h3",{className:"order__total",children:["Order Total: ",e]})},decimalScale:2,value:c.data.amount/100,displayType:"text",thousandSeparator:!0,prefix:"$"})]})};c(100);var W=function(){var e=p(),t=Object(l.a)(e,2),c=t[0],s=(c.basket,c.user),i=(t[1],Object(n.useState)([])),r=Object(l.a)(i,2),o=r[0],d=r[1];return Object(n.useEffect)((function(){s?g.collection("users").doc(null===s||void 0===s?void 0:s.uid).collection("orders").orderBy("created","desc").onSnapshot((function(e){return d(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})):d([])}),[s]),Object(a.jsxs)("div",{className:"orders",children:[Object(a.jsx)("h1",{children:"Your Orders"}),Object(a.jsx)("div",{className:"orders__order",children:null===o||void 0===o?void 0:o.map((function(e){return Object(a.jsx)(U,{order:e})}))})]})},Y=Object(M.a)("pk_test_51IR7WrBSSnbJ9GxMsqVUy2rhH5Y4004TabHIHdUlD64E9gLSmVpWwTDkN5jpWbIm5p64bUJxCgSe75KnY8JHOrDS00NdvUDEA7");var H=function(){var e=p(),t=Object(l.a)(e,2);Object(o.a)(t[0]);var c=t[1];return Object(n.useEffect)((function(){_.onAuthStateChanged((function(e){c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(a.jsx)(h.a,{children:Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(N.c,{children:[Object(a.jsxs)(N.a,{path:"/orders",children:[Object(a.jsx)(v,{}),Object(a.jsx)(W,{})]}),Object(a.jsx)(N.a,{path:"/login",children:Object(a.jsx)(A,{})}),Object(a.jsx)(N.a,{path:"/payment",children:Object(a.jsx)(D.Elements,{stripe:Y,children:Object(a.jsx)(R,{})})}),Object(a.jsxs)(N.a,{path:"/checkout",children:[Object(a.jsx)(v,{}),Object(a.jsx)(L,{})]}),Object(a.jsxs)(N.a,{path:"/",children:[Object(a.jsx)(v,{}),Object(a.jsx)(S,{})]})]})})})},F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,114)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))},K=c(37),X=c(21),J=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":return Object(X.a)(Object(X.a)({},e),{},{basket:[].concat(Object(K.a)(e.basket),[t.item])});case"EMPTY_BASKET":return Object(X.a)(Object(X.a)({},e),{},{basket:[]});case"REMOVE_FROM_BASKET":var c=e.basket.findIndex((function(e){return e.id===t.id})),a=Object(K.a)(e.basket);return c>=0?a.splice(c,1):console.warn("Cant remove product (id: ".concat(t.id,") as its not in basket!")),Object(X.a)(Object(X.a)({},e),{},{basket:a});case"SET_USER":return Object(X.a)(Object(X.a)({},e),{},{user:t.user});default:return e}};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(O,{initialState:{basket:[],user:null},reducer:J,children:Object(a.jsx)(H,{})})}),document.getElementById("root")),F()},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},79:function(e,t,c){},81:function(e,t,c){},98:function(e,t,c){}},[[102,1,2]]]);
//# sourceMappingURL=main.d296e92e.chunk.js.map