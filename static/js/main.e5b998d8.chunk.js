(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(9),i=a.n(n),c=a(3),r=a(8),o=a(5),s=a(1),u=a(2),d=(a(15),a(10)),l=a.n(d),m=a(0),j=function(e){var t=e.user,a=t.name,n=t.email;return Object(m.jsx)("a",{className:"UserInfo",href:"mailto:".concat(n),children:a})},b=function(e){var t=e.todo,a=t.user,n=t.id,i=t.completed,c=t.title;return Object(m.jsxs)("article",{"data-id":n,className:l()("TodoInfo",{"TodoInfo--completed":i}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:c}),a&&Object(m.jsx)(j,{user:a})]})},h=function(e){var t=e.todos;return Object(m.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)(b,{todo:e},e.id)}))})},O=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],f=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}];function p(e,t){return e.find((function(e){return e.id===t}))}var x={id:0,title:"",completed:!1,user:void 0,userId:0},v={titleTouched:!1,userTouched:!1},y=function(){var e,t=Object(u.useState)((e=O,f.map((function(t){var a=t.userId,n=p(e,a);return Object(s.a)(Object(s.a)({},t),{},{user:n})})))),a=Object(o.a)(t,2),n=a[0],i=a[1],d=Object(u.useState)(0),l=Object(o.a)(d,2),j=l[0],b=l[1],y=Object(u.useState)(x),S=Object(o.a)(y,2),T=S[0],I=S[1],N=Object(u.useState)(v),g=Object(o.a)(N,2),C=g[0],_=g[1],k=C.titleTouched,D=C.userTouched,w=T.title,M=T.userId;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){e.preventDefault(),T.user||_((function(e){return Object(s.a)(Object(s.a)({},e),{},{userTouched:!0})})),T.title||_((function(e){return Object(s.a)(Object(s.a)({},e),{},{titleTouched:!0})})),T.user&&T.title&&(I((function(e){return Object(s.a)(Object(s.a)({},e),{},{id:Math.max.apply(Math,Object(r.a)(n.map((function(e){return e.id}))))+1})})),i((function(e){return[T].concat(Object(r.a)(e))})),b((function(e){return e+1})),I(x))},children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("input",{type:"text","data-cy":"titleInput",name:"title",value:w,onChange:function(e){var t=e.target,a=t.name,n=t.value;I((function(e){return Object(s.a)(Object(s.a)({},e),{},Object(c.a)({},a,n))})),_((function(e){return Object(s.a)(Object(s.a)({},e),{},Object(c.a)({},"".concat(a,"Touched"),!1))}))}}),k&&Object(m.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsxs)("select",{"data-cy":"userSelect",name:"user",value:M,onChange:function(e){var t=e.target,a=t.name,n=t.value,i=p(O,+n);I((function(e){return Object(s.a)(Object(s.a)({},e),{},Object(c.a)({userId:+n},a,i))})),_((function(e){return Object(s.a)(Object(s.a)({},e),{},Object(c.a)({},"".concat(a,"Touched"),!1))}))},children:[Object(m.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),O.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),D&&Object(m.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]},j),Object(m.jsx)(h,{todos:n})]})};i.a.render(Object(m.jsx)(y,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.e5b998d8.chunk.js.map