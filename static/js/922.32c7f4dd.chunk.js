"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[922],{3922:function(n,e,t){t.r(e),t.d(e,{default:function(){return dn}});var r,i,o,a,s,c,d,l,u,p,x,h,m,b,f,g,Z,j,v,y=t(9439),w=t(2791),k=t(9434),P=t(3634),C=function(n){return n.contacts.items},z=function(n){return n.contacts.isLoading},S=function(n){return n.contacts.error},_=function(n){var e=n.contacts.items,t=n.filter;return t?e.filter((function(n){return n.name.toLowerCase().includes(t)})):e},N=t(168),E=t(8789),I=E.ZP.label(r||(r=(0,N.Z)(["\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  font-size: 20px;\n  margin-top: 10px;\n  width: 100%;\n  gap: 15px;\n"]))),T=E.ZP.input(i||(i=(0,N.Z)(["\n  padding-left: 15px;\n  height: 30px;\n  background-color: transparent;\n  border: 1px solid #4343b0;\n  outline: none;\n  color: #4343b0;\n"]))),L=t(4808),A=t(184),F=function(){var n=(0,k.I0)();return(0,A.jsxs)(I,{children:["Find contacts by name:",(0,A.jsx)(T,{type:"text",name:"filter",onChange:function(e){n((0,L.I)(e.currentTarget.value))}})]})},M=t(5705),U=t(6727),q=(0,E.ZP)(M.l0)(o||(o=(0,N.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin: 10px auto;\n  gap: 12px;\n  max-width: 332px;\n"]))),D=E.ZP.label(a||(a=(0,N.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 5px;\n  font-size: 20px;\n  width: 100%;\n "]))),K=E.ZP.button(s||(s=(0,N.Z)(["\n  font-size: 15px;\n  font-weight: 700;\n  padding: 8px;\n  margin-left:120px;\n  border-radius: 10px;\n  background-color: #5472ea47;\n\n  :hover {\n    background-color: #4343b0;\n    color: white;\n  }\n"]))),O=(0,E.ZP)(M.gN)(c||(c=(0,N.Z)(["\n  padding-left: 15px;\n  height: 30px;\n  background-color: transparent;\n  border: 1px solid #4343b0;\n  outline: none;\n  color: #4343b0;\n "]))),B=(0,E.ZP)(M.Bc)(d||(d=(0,N.Z)(["\n  color: red;\n  font-size: 12px;\n"]))),G=U.Ry().shape({name:U.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces.").required(),number:U.Z_().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +, min 5 numbers").required()}),J=function(){var n=(0,k.I0)();return(0,A.jsx)(M.J9,{initialValues:{name:"",number:""},validationSchema:G,onSubmit:function(e,t){var r={name:e.name,number:e.number};n((0,P.uK)(r)),t.resetForm()},children:(0,A.jsxs)(q,{children:[(0,A.jsxs)(D,{children:["Name:",(0,A.jsx)(O,{name:"name"})]}),(0,A.jsx)(B,{name:"name",component:"p"}),(0,A.jsxs)(D,{children:["Number:",(0,A.jsx)(O,{type:"tel",name:"number"})]}),(0,A.jsx)(B,{name:"number",component:"p"}),(0,A.jsx)(K,{type:"submit",children:"Add contact"})]})})},Q=E.ZP.ul(l||(l=(0,N.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-top: 25px;\n"]))),R=E.ZP.li(u||(u=(0,N.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),V=E.ZP.p(p||(p=(0,N.Z)(["\n  font-size: 20px;\n  width: 100%;\n  padding: 0 10px;\n"]))),$=E.ZP.button(x||(x=(0,N.Z)(["\n  font-size: 15px;\n   font-weight: 700;\n  padding: 0px 10px;\n  border: 1px solid black;\n  background-color: #5472ea47;\n  height: 30px;\n  border-radius: 5px;\n\n  :hover {\n    background-color: #4343b0;\n    color: white;\n  }\n"]))),H=E.ZP.div(h||(h=(0,N.Z)(["\n  display: flex;\n  gap: 12px;\n"]))),W=function(n){var e=n.isOpenModal,t=(0,k.I0)(),r=(0,k.v9)(z),i=(0,k.v9)(_);return(0,A.jsx)(Q,{children:i.map((function(n){return(0,A.jsxs)(R,{children:[(0,A.jsxs)(V,{children:[n.name,": ",n.number]}),(0,A.jsxs)(H,{children:[(0,A.jsx)($,{disabled:r,type:"button",onClick:function(){return e(n.name,n.number,n.id)},children:"Edit"}),(0,A.jsx)($,{disabled:r,type:"button",onClick:function(){return t((0,P.GK)(n.id))},children:"Delete"})]})]},n.id)}))})},X=t(6895),Y=E.ZP.div(m||(m=(0,N.Z)(["\n  position: relative;\n  background-color: gray;\n  padding: 40px;\n  max-width: 100%;\n"]))),nn=E.ZP.div(b||(b=(0,N.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.767);\n  padding: 20px;\n"]))),en=E.ZP.form(f||(f=(0,N.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n"]))),tn=E.ZP.label(g||(g=(0,N.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 30px;\n  font-size: 20px;\n  width: 100%;\n"]))),rn=E.ZP.input(Z||(Z=(0,N.Z)(["\n  padding-left: 15px;\n  height: 30px;\n  background-color: transparent;\n  border: 1px solid #4343b0;\n  outline: none;\n"]))),on=E.ZP.button(j||(j=(0,N.Z)(["\n  cursor: pointer;\n  margin: 0;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background-color: transparent;\n  border: none;\n  :hover {\n    color: white;\n  }\n"]))),an=E.ZP.button(v||(v=(0,N.Z)(["\n  font-size: 20px;\n  font-weight: 700;\n  padding: 5px 30px;\n  border-radius: 10px;\n  background-color: #4343b0;\n  color:black;\n\n  :hover {\n    background-color: darkblue;\n    color: white;\n  }\n"]))),sn=t(5899),cn=function(n){var e=n.name,t=n.number,r=n.idUser,i=n.isCloseModal,o=(0,w.useState)(e),a=(0,y.Z)(o,2),s=a[0],c=a[1],d=(0,w.useState)(t),l=(0,y.Z)(d,2),u=l[0],p=l[1],x=(0,k.I0)();function h(n){var e=n.currentTarget,t=e.name,r=e.value;"number"===t?p(r):c(r)}return(0,w.useEffect)((function(){function n(n){"Escape"===n.key&&i()}return window.addEventListener("keydown",n),function(){return window.removeEventListener("keydown",n)}}),[i]),(0,A.jsx)(nn,{onClick:function(n){n.currentTarget===n.target&&i()},children:(0,A.jsx)(Y,{children:(0,A.jsxs)(en,{onSubmit:function(n){n.preventDefault(),x((0,P.mP)({idUser:r,userName:s,userNumber:u})),i()},children:[(0,A.jsxs)(tn,{children:["Name :",(0,A.jsx)(rn,{name:"name",type:"text",placeholder:e,value:s,onChange:h})]}),(0,A.jsxs)(tn,{children:["Number :",(0,A.jsx)(rn,{name:"number",type:"tel",placeholder:t,value:u,onChange:h})]}),(0,A.jsx)(on,{type:"button",onClick:i,children:(0,A.jsx)(sn.dc5,{size:"20"})}),(0,A.jsx)(an,{type:"submit",children:"Edit"})]})})})};var dn=function(){var n=(0,w.useState)(!1),e=(0,y.Z)(n,2),t=e[0],r=e[1],i=(0,w.useState)(""),o=(0,y.Z)(i,2),a=o[0],s=o[1],c=(0,w.useState)(""),d=(0,y.Z)(c,2),l=d[0],u=d[1],p=(0,w.useState)(""),x=(0,y.Z)(p,2),h=x[0],m=x[1],b=(0,k.I0)(),f=(0,k.v9)(z),g=(0,k.v9)(S),Z=(0,k.v9)(C),j=(0,k.v9)(_);return(0,w.useEffect)((function(){b((0,P.yF)())}),[b]),(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(X._Q,{children:"Contacts"}),(0,A.jsx)(J,{}),f&&(0,A.jsx)("div",{children:"Loading..."}),0===Z.length&&!f&&!g&&(0,A.jsx)(X.P_,{children:"There is nothing in phonebook"}),0!==Z.length&&(0,A.jsxs)("div",{children:[(0,A.jsx)(F,{}),0===j.length&&!f&&(0,A.jsx)(X.P_,{children:"There isn't any contact with this name"}),(0,A.jsx)(W,{isOpenModal:function(n,e,t){r(!0),s(n),m(e),u(t)}})]}),g&&(0,A.jsx)(X.ud,{children:"Try again, please.."}),t&&(0,A.jsx)(cn,{name:a,number:h,idUser:l,isCloseModal:function(){r(!1)}})]})}}}]);
//# sourceMappingURL=922.32c7f4dd.chunk.js.map