(this.webpackJsonpexercises=this.webpackJsonpexercises||[]).push([[0],{14:function(e,t,n){e.exports=n(36)},36:function(e,t,n){"use strict";n.r(t);var a=n(0),u=n.n(a),c=n(13),r=n.n(c),o=n(2),l=n(3),i=n.n(l),m="/api/persons",d=function(){return i.a.get(m).then((function(e){return e.data}))},s=function(e){return i.a.post(m,e).then((function(e){return e.data}))},f=function(e,t){return i.a.put("".concat(m,"/").concat(e),t).then((function(e){return e.data}))},b=function(e){return i.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))},h=function(e){var t=e.name,n=e.number;return u.a.createElement("li",null,u.a.createElement("p",null,"Name: ",t),u.a.createElement("p",null,"Number: ",n))},p=function(e){var t=e.message,n=e.name;if(null===t)return null;var a={color:"red",background:"lightgrey",fontSize:"20px",borderStyle:"solid",borderRadius:"5px",padding:"10px",marginBottom:"10px"};return u.a.createElement("div",{style:a},function(e,t){return"success"===e?(a.color="green","Added ".concat(t)):"failure"===e?"An error has occurred with ".concat(t,". Action could not be completed"):void 0}(t,n))},v=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),l=Object(o.a)(r,2),i=l[0],m=l[1],v=Object(a.useState)(""),E=Object(o.a)(v,2),g=E[0],w=E[1],y=Object(a.useState)(""),j=Object(o.a)(y,2),O=j[0],k=j[1],S=Object(a.useState)(null),x=Object(o.a)(S,2),C=x[0],N=x[1];Object(a.useEffect)((function(){d().then((function(e){c(e)}))}),[]);return u.a.createElement("div",null,u.a.createElement("h2",null,"Add New Contact"),u.a.createElement(p,{message:C,name:i}),u.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=!0;(n.forEach((function(e){if(e.name.includes(i)&&(t=!1,window.confirm("".concat(i," is laready in the Phonebook. Do you want to update the phone number?")))){var a={name:i,number:g},u=e.id;f(u,a).then((function(e){N("success"),setTimeout((function(){N(null)}),5e3),c(n.map((function(t){return t.id!==u?t:e})))})).catch((function(e){N("failure"),setTimeout((function(){N(null)}),5e3)}))}})),t)&&(s({name:i,number:g}).then((function(e){c(n.concat(e)),N("success"),setTimeout((function(){N(null)}),5e3),m(""),w("")})).catch(N("failure")),setTimeout((function(){N(null)}),5e3))}},u.a.createElement("div",null,"Name: ",u.a.createElement("input",{value:i,onChange:function(e){console.log(e.target.value),m(e.target.value)}})),u.a.createElement("div",null,"Number: ",u.a.createElement("input",{value:g,onChange:function(e){console.log(e.target.value),w(e.target.value)}})),u.a.createElement("div",null,u.a.createElement("button",{type:"submit"},"add"))),u.a.createElement("h2",null,"Phonebook"),u.a.createElement("div",null,"Filter: ",u.a.createElement("input",{value:O,onChange:function(e){console.log(e.target.value),k(e.target.value)}})),u.a.createElement("ul",null,n.filter((function(e){return e.name.toLowerCase().includes(O.toLowerCase())})).map((function(e){return u.a.createElement("div",{key:"".concat(e.id,"-div")},u.a.createElement(h,{key:e.id,name:e.name,number:e.number}),u.a.createElement("button",{key:"".concat(e.id,"-delete"),onClick:function(){return t=e.id,console.log("ID ".concat(t," to be deleted")),void(window.confirm("Do you really want to delete this person?")&&b(t).then(c(n.filter((function(e){return e.id!==t})))));var t}},"delete"))}))))};r.a.render(u.a.createElement(v,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.43e27d3b.chunk.js.map