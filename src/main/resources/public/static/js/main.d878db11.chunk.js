(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{124:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n(18),r=n.n(a),s=(n(89),n(90),n(91),n(25)),c=n(17),i=n.n(c),l=n(23),u=n(11),d=n.n(u),p=n(136),h=n(129),b=n(134),j=n(16),m=n(21),g=function(e){return{type:"LOG_IN",loggedIn:e}},f=function(e){return{type:"GET_USER_DATA",userdata:e}},O=function(){return function(e){(function(){var t=Object(l.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:d()({method:"get",url:"http://localhost:8080/user",responseType:"stream",withCredentials:!0}).then((function(t){void 0!==t.data.authenticated&&!0===t.data.authenticated?(console.log("Hello"),e(f(t.data)),e(g(!0))):(console.log("Hello1314234"),e(f(t.data)),e(g(!1))),console.log(t)})).catch((function(t){console.log("Here"),console.error(t),e(f({authenticated:!1})),e(g(!1))}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}},x=n(2),v=n(71),y=n(72),w=n(84),k=n(83),N=n(1),C=function(e,t){return function(n){Object(w.a)(a,n);var o=Object(k.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=o.call(this,e)).reqInterceptors=t.interceptors.request.use((function(e){return e})),n.resInterceptors=t.interceptors.response.use((function(e){return e}),(function(e){return 400===e.response.status&&s.b.error("Invalid Login!!!",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),"error"})),n}return Object(y.a)(a,[{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptors),t.interceptors.request.eject(this.resInterceptors)}},{key:"render",value:function(){return Object(N.jsx)(e,Object(x.a)({},this.props))}}]),a}(o.Component)},_=C((function(){var e=Object(j.c)((function(e){return e.isLoggedIn})),t=Object(j.b)();return Object(N.jsx)("section",{children:Object(N.jsx)(p.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(N.jsxs)(h.a,{children:[Object(N.jsx)(p.a.Brand,{to:"#home",children:"RECIPIIS"}),Object(N.jsx)(p.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(N.jsxs)(p.a.Collapse,{id:"responsive-navbar-nav",children:[Object(N.jsxs)(b.a,{className:"me-auto",children:[Object(N.jsx)(m.b,{className:"nav-link",to:"/",children:"Home"}),Object(N.jsx)(m.b,{className:"nav-link",to:"/add",children:"Submit a Recipe"}),Object(N.jsx)(m.b,{className:"nav-link",to:"/about",children:"About"})]}),Object(N.jsx)(b.a,{children:e?Object(N.jsx)(m.b,{className:"nav-link",to:"#",onClick:function(e){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d()({method:"get",url:"http://localhost:8080/logout",responseType:"stream",withCredentials:!0}).then((function(e){t(O()),window.location.reload(),console.log(e)})).catch((function(e){console.log("Here"),console.error(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()},children:"Logout"}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(m.b,{className:"nav-link",to:"/login",children:"Login"}),Object(N.jsx)(m.b,{className:"nav-link",to:"/signup",children:"Sign Up"})]})})]})]})})})}),d.a),I=n(74),S=n.n(I),L=function(e){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(_,{}),Object(N.jsxs)("main",{className:S.a.Content,children:[e.children,Object(N.jsx)(s.a,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})]})},E=n(10),R=n(8),F=n(13),T=n(75),A=n.n(T),P=C((function(e){var t=Object(o.useState)({username:"",password:""}),n=Object(F.a)(t,2),a=n[0],r=n[1],c=Object(j.b)(),u=function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,o=t.name;r((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(R.a)({},o,n))}))};return Object(N.jsx)("div",{className:"container ".concat(A.a.LoginSection),children:Object(N.jsxs)("form",{className:"form-signin",children:[Object(N.jsx)("h2",{className:"form-signin-heading",children:"Please login to RECIPIIS"}),Object(N.jsxs)("p",{children:[Object(N.jsx)("label",{htmlFor:"username",className:"sr-only",children:"Username"}),Object(N.jsx)("input",{onChange:function(e){return u(e)},value:a.username,type:"text",id:"username",name:"username",className:"form-control",placeholder:"Username",required:"",autoFocus:""})]}),Object(N.jsxs)("p",{children:[Object(N.jsx)("label",{htmlFor:"password",className:"sr-only",children:"Password"}),Object(N.jsx)("input",{onChange:function(e){return u(e)},value:a.password,type:"password",id:"password",name:"password",className:"form-control",placeholder:"Password",required:""})]}),Object(N.jsx)("button",{className:"btn btn-lg btn-primary btn-block",onClick:function(e){return function(e){e.preventDefault();var t=new FormData;t.append("username",a.username),t.append("password",a.password),function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Here"),d()({method:"post",url:"http://localhost:8080/login",data:t,headers:{"Content-Type":"multipart/form-data"},withCredentials:!0}).then((function(e){console.log("success"),console.log(e),"error"!==e&&s.b.success("Login Successful",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),c(O())})).catch((function(e){console.log("error"),e.response&&(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}(e)},children:"Login"})]})})}),d.a),D=n(76),G=n.n(D),U=n(137),q=n(50),V=n.n(q),H=C((function(e){var t="";return e.isLoggedIn&&e.userdata.authenticated&&e.userdata.authorities.some((function(e){return"ROLE_ADMIN"===e.authority}))&&(t=!1===e.approved?Object(N.jsx)("button",{className:V.a.approvelink,onClick:function(t){return function(e,t){e.preventDefault();var n="http://localhost:8080/recipe/approve/".concat(t);d()({method:"post",url:n,withCredentials:!0}).then((function(e){console.log("success"),console.log(e),window.location.reload()})).catch((function(e){console.log("error"),console.log(e)}))}(t,e.id)},children:"Approve"}):Object(N.jsx)("button",{className:V.a.disapprovelink,onClick:function(t){return function(e,t){e.preventDefault();var n="http://localhost:8080/recipe/disapprove/".concat(t);d()({method:"post",url:n,withCredentials:!0}).then((function(e){console.log("success"),console.log(e),window.location.reload()})).catch((function(e){console.log("error"),console.log(e)}))}(t,e.id)},children:"Disapprove"})),Object(N.jsx)("div",{className:V.a.RecipeCard,children:Object(N.jsx)(U.a,{style:{width:"100%"},children:Object(N.jsxs)(U.a.Body,{children:[Object(N.jsx)(U.a.Title,{children:e.recipeName}),Object(N.jsx)(U.a.Subtitle,{className:"mb-2 text-muted",children:e.recipeCategory}),Object(N.jsx)("ul",{children:e.ingredients.map((function(e,t){return Object(N.jsx)("li",{children:e.ingredientName},t)}))}),Object(N.jsx)(U.a.Text,{children:e.recipeProcedure}),t]})})})}),d.a),B=n(51),M=n.n(B),W=function(e){return Object(N.jsx)("h1",{className:[M.a.Title,M.a.divider,M.a.donotcross].join(" "),children:e.name})},X=C((function(){var e=Object(o.useState)([]),t=Object(F.a)(e,2),n=t[0],a=t[1],r=Object(j.c)((function(e){return e.isLoggedIn})),s=Object(j.c)((function(e){return e.userdata}));Object(o.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d()({method:"get",url:"http://localhost:8080/recipe/all",withCredentials:!0}).then((function(e){console.log(e.data),a(e.data)})).catch((function(e){console.error(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var c="No recipes found in the database";return 0!==n.length&&(c=n.map((function(e,t){return Object(N.jsx)(H,Object(x.a)(Object(x.a)({},e),{},{isLoggedIn:r,userdata:s}),t)}))),Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("section",{className:G.a.RecipesSection,children:[Object(N.jsx)(W,{name:"All Recipes"}),c]})})}),d.a),z=n(34),J=n(130),Q=n(135),Y=n(138),K=n(77),Z=n(131),$=n(78),ee=n(132),te=n(133),ne=n(79),oe=n(52),ae=n.n(oe),re=C((function(e){var t=Object(o.useState)(""),n=Object(F.a)(t,2),a=n[0],r=n[1],s=Object(o.useState)({recipeName:"",recipeCategory:"VEG",recipeProcedure:"",ingredients:[{ingredientName:""}]}),c=Object(F.a)(s,2),i=c[0],l=c[1],u=Object(o.useRef)(),p=Object(E.g)(),h=function(e){return Object(N.jsx)(J.a,Object(x.a)(Object(x.a)({id:"button-tooltip"},e),{},{children:"Click to delete from list"}))},b=function(e){e.preventDefault();var t=e.target,n="checkbox"===t.type?t.checked:t.value,o=t.name;l((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(R.a)({},o,n))}))};return Object(N.jsx)("div",{className:"container ".concat(ae.a.RecipeForm),children:Object(N.jsxs)(Q.a,{children:[Object(N.jsxs)(Q.a.Group,{className:"mb-3",children:[Object(N.jsx)(Q.a.Label,{children:"Recipe Name"}),Object(N.jsxs)(Y.a,{children:[Object(N.jsx)(Y.a.Text,{children:"#"}),Object(N.jsx)(K.a,{name:"recipeName",onChange:function(e){return b(e)},value:i.recipeName,id:"inlineFormInputGroupRecipeName",placeholder:"Enter Recipe Name "})]})]}),Object(N.jsxs)(Q.a.Group,{className:"mb-3",children:[Object(N.jsx)(Q.a.Label,{className:"me-sm-2",htmlFor:"inlineFormCustomSelect",children:"Select Category"}),Object(N.jsxs)(Q.a.Select,{name:"recipeCategory",onChange:function(e){return b(e)},value:i.recipeCategory,className:"me-sm-2",id:"inlineFormCustomSelect",children:[Object(N.jsx)("option",{value:"VEG",children:"VEG"}),Object(N.jsx)("option",{value:"NON-VEG",children:"NON-VEG"})]})]}),Object(N.jsxs)(Q.a.Group,{className:"mb-3",children:[Object(N.jsxs)(Z.a,{className:"g-2",children:[Object(N.jsx)($.a,{lg:!0,children:Object(N.jsx)(K.a,{ref:u,onChange:function(e){return function(e){e.preventDefault(),r(e.target.value)}(e)},value:a,id:"inlineFormInputGroupIngredinets",placeholder:"Enter ingredients"})}),Object(N.jsx)($.a,{sm:!0,children:Object(N.jsx)(ee.a,{variant:"success",onClick:function(e){return function(e){e.preventDefault(),l((function(e){var t=Object(z.a)(e.ingredients);return t.some((function(e){return e.ingredientName===a}))||""===a?(console.log("Exists"),Object(x.a)({},e)):(t.length>0&&""===t[0].ingredientName&&t.shift(),Object(x.a)(Object(x.a)({},e),{},{ingredients:[].concat(Object(z.a)(t),[{ingredientName:a}])}))})),r(""),u.current.focus()}(e)},children:"Add"})})]}),Object(N.jsx)("div",{className:ae.a.tags,children:i.ingredients.map((function(e,t){return""!==e.ingredientName?Object(N.jsx)("span",{className:ae.a.tag,onClick:function(){return function(e,t){var n=Object(z.a)(i.ingredients),o=n.indexOf(e);n.splice(o,1),l((function(e){return Object(x.a)(Object(x.a)({},e),{},{ingredients:Object(z.a)(n)})}))}(e)},style:{"--color":"#41b883"},children:Object(N.jsx)(te.a,{placement:"bottom",delay:{show:0,hide:0},overlay:h,children:Object(N.jsx)("span",{children:e.ingredientName})})},t):null}))})]}),Object(N.jsx)(Q.a.Group,{className:"mb-3",children:Object(N.jsx)(ne.a,{controlId:"floatingTextarea2",label:"Procedure",children:Object(N.jsx)(Q.a.Control,{as:"textarea",placeholder:"Enter recipe procedure",style:{height:"200px"},onChange:function(e){return b(e)},name:"recipeProcedure",value:i.recipeProcedure})})}),Object(N.jsx)(ee.a,{variant:"primary",onClick:function(e){return function(e){e.preventDefault(),d()({method:"post",url:"http://localhost:8080/recipe/add",data:i,withCredentials:!0}).then((function(e){console.log(e.headers),console.log("success"),console.log(e),p.push("/")})).catch((function(e){console.log("error"),console.log(e)}))}(e)},children:"Submit"})]})})}),d.a),se=n(53),ce=n.n(se),ie=function(){return Object(N.jsxs)("section",{className:"container ".concat(ce.a.AboutSection),children:[Object(N.jsx)(W,{name:"About"}),Object(N.jsx)("div",{className:ce.a.AboutDiv,children:Object(N.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."})}),Object(N.jsx)("div",{className:ce.a.AboutDiv,children:Object(N.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."})})]})},le=n(81),ue=n.n(le),de=(n(123),C((function(e){var t=Object(o.useState)({username:"",password:"",email:""}),n=Object(F.a)(t,2),a=n[0],r=n[1],c=Object(j.b)(),u=Object(E.g)(),p=function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,o=t.name;r((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(R.a)({},o,n))}))};return Object(N.jsx)("div",{className:"container ".concat(ue.a.SignupSection),children:Object(N.jsxs)("form",{className:"form-signin",children:[Object(N.jsx)("h2",{className:"form-signin-heading",children:"Sign up for RECIPIIS"}),Object(N.jsxs)("p",{children:[Object(N.jsx)("label",{htmlFor:"email",className:"sr-only",children:"Email"}),Object(N.jsx)("input",{onChange:function(e){return p(e)},value:a.email,type:"text",id:"email",name:"email",className:"form-control",placeholder:"Email",required:"",autoFocus:""})]}),Object(N.jsxs)("p",{children:[Object(N.jsx)("label",{htmlFor:"username",className:"sr-only",children:"Username"}),Object(N.jsx)("input",{onChange:function(e){return p(e)},value:a.username,type:"text",id:"username",name:"username",className:"form-control",placeholder:"Username",required:"",autoFocus:""})]}),Object(N.jsxs)("p",{children:[Object(N.jsx)("label",{htmlFor:"password",className:"sr-only",children:"Password"}),Object(N.jsx)("input",{onChange:function(e){return p(e)},value:a.password,type:"password",id:"password",name:"password",className:"form-control",placeholder:"Password",required:""})]}),Object(N.jsx)("button",{className:"btn btn-lg btn-primary btn-block",onClick:function(e){return function(e){e.preventDefault();var t=new FormData;t.append("username",a.username),t.append("password",a.password),t.append("email",a.email),function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Sign Up"),d()({method:"post",url:"http://localhost:8080/signup",data:a,withCredentials:!0}).then((function(e){console.log("success"),console.log(e),s.b.success("Login with the newly created account!!",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),u.push("/login"),c(O())})).catch((function(e){console.log("error"),Object(s.b)("Error encountered!!!"),console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}(e)},children:"Sign Up"})]})})}),d.a)),pe=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.isLoggedIn}));Object(o.useEffect)((function(){e(O())}),[e]);var n="";return n=t?Object(N.jsxs)(E.d,{children:[Object(N.jsx)(E.b,{path:"/add",exact:!0,component:re}),Object(N.jsx)(E.b,{path:"/about",exact:!0,component:ie}),Object(N.jsx)(E.b,{path:"/",exact:!0,component:X}),Object(N.jsx)(E.a,{to:"/"})]}):Object(N.jsxs)(E.d,{children:[Object(N.jsx)(E.b,{path:"/login",exact:!0,component:P}),Object(N.jsx)(E.b,{path:"/signup",exact:!0,component:de}),Object(N.jsx)(E.b,{path:"/add",exact:!0,render:function(e){return t?Object(N.jsx)(re,{}):Object(N.jsx)(E.a,{to:{pathname:"/login",state:{from:e.location}}})}}),Object(N.jsx)(E.b,{path:"/",exact:!0,component:X}),Object(N.jsx)(E.b,{path:"/about",exact:!0,component:ie}),Object(N.jsx)(E.a,{to:"/"})]}),Object(N.jsx)("div",{className:"App",children:Object(N.jsx)(L,{children:n})})},he=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,139)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),o(e),a(e),r(e),s(e)}))},be=n(41),je=function(e){return e.loggedIn},me=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOG_IN":return console.log("sdfsdfsdfsdfs"),je(t);default:return e}},ge=n(82),fe=function(e){return e.userdata},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USER_DATA":return fe(t);default:return e}},xe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||be.c,ve=Object(be.b)({isLoggedIn:me,userdata:Oe}),ye=Object(be.d)(ve,xe(Object(be.a)(ge.a)));r.a.render(Object(N.jsx)(j.a,{store:ye,children:Object(N.jsx)(m.a,{children:Object(N.jsx)(pe,{})})}),document.getElementById("root")),he()},50:function(e,t,n){e.exports={RecipeCard:"RecipeCard_RecipeCard__bbquP",approvelink:"RecipeCard_approvelink__mVoXW",disapprovelink:"RecipeCard_disapprovelink__2tEb2"}},51:function(e,t,n){e.exports={Title:"Title_Title__3DIwr",divider:"Title_divider__LURQe",donotcross:"Title_donotcross__tGYpz"}},52:function(e,t,n){e.exports={RecipeForm:"RecipeForm_RecipeForm__2t4fg",tags:"RecipeForm_tags__9m0zU",tag:"RecipeForm_tag__ppYI8"}},53:function(e,t,n){e.exports={AboutSection:"About_AboutSection__3hvLI",AboutDiv:"About_AboutDiv__8Q7c_"}},74:function(e,t,n){e.exports={Content:"Layout_Content__2VB0j"}},75:function(e,t,n){e.exports={LoginSection:"Login_LoginSection__1mK5k"}},76:function(e,t,n){e.exports={RecipesSection:"Recipes_RecipesSection__1MV39"}},81:function(e,t,n){e.exports={SignupSection:"SignUp_SignupSection__3bm-A"}},89:function(e,t,n){},90:function(e,t,n){}},[[124,1,2]]]);
//# sourceMappingURL=main.d878db11.chunk.js.map