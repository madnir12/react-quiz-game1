(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/Wrong-answer-sound-effect.093eed4f.mp3"},22:function(e,t,a){e.exports=a.p+"static/media/correct-answer.d0c5f222.mp3"},24:function(e,t,a){e.exports=a(31)},29:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(19),c=a.n(l),s=(a(29),a(10)),i=a(3),o=a(4),m=a(20);var u=function(){return r.a.createElement("div",{className:"start-button"},r.a.createElement("p",null,"Welcome to small quiz game"),r.a.createElement("button",null,r.a.createElement(m.a,null),"Start Playing Now"))},h=a(21),p=a.n(h),d=a(22),f=a.n(d);var E=function(e){var t=e.name,a=e.id,n=e.value,l=e.setUserAnswer,c=e.getClassName,s=e.active,i=e.setActive;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"radio",name:"answer",id:a,value:n,onClick:function(e){l(e.target.value),i(e.target.value)}}),r.a.createElement("label",{style:{color:n===parseInt(s)&&"white"},for:a,className:n===parseInt(s)?"option ".concat(c()):"option"},t))};var g=function(e){var t=e.letter,a=e.setUserAnswer,l=e.PARFORM_AFFTER_STEPS,c=e.getClassName,s=Object(n.useState)(""),i=Object(o.a)(s,2),m=i[0],u=i[1],h=Object(n.useState)(!1),p=Object(o.a)(h,2),d=p[0],f=p[1];return Object(n.useEffect)((function(){""!==m&&f(!1)})),r.a.createElement("div",{className:"quiz"},r.a.createElement("h3",{className:"quiz-text"},'Letter "',t,'" Is Blong To...'),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},[{name:"Root Leeter",id:"root-letter",value:0},{name:"Sky Letter",id:"sky-letter",value:1},{name:"Grass Letter",id:"grass-letter",value:2}].map((function(e){return r.a.createElement(E,{name:e.name,id:e.id,value:e.value,setUserAnswer:a,getClassName:c,active:m,setActive:u})})),r.a.createElement("p",{classNameerror:!0},d?"Please Select an Option First":""),r.a.createElement("button",{className:"check-button",onClick:function(){""!==m?(l(),u("")):f(!0)}},"Check"))))};var b=function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(),i=Object(o.a)(c,2),m=i[0],h=i[1],d=Object(n.useState)(),E=Object(o.a)(d,2),b=E[0],v=E[1],w=Object(n.useState)(""),j=Object(o.a)(w,2),k=j[0],y=j[1],O=Object(n.useState)(0),S=Object(o.a)(O,2),N=S[0],A=S[1],L=Object(n.useState)(0),R=Object(o.a)(L,2),T=R[0],q=R[1],C=Object(n.useState)(0),I=Object(o.a)(C,2),x=I[0],z=I[1],F=[["j","g","p","q","y"],["b","d","f","h","l","k","t"],["a","c","e","i","m","n","o","r","s","u","v","w","x","z"]],M=function(){var e=Math.floor(3*Math.random());l(F[e][Math.floor(Math.random()*F[e].length)]),h(e)};function P(){return""===k||"playing"===k?"default":"lose"===k?"wrong":"right"}var _=function(){parseInt(b)!==m?new Audio(p.a).play():new Audio(f.a).play()},G=function(){parseInt(b)==m?(A(N+1),q(T+1)):parseInt(b)!=m&&(A(N+1),z(x+1))};return r.a.createElement("main",{className:P()},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"status-div"},r.a.createElement("h3",null,"Status"),r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Total Answers"),r.a.createElement("td",null,N)),r.a.createElement("tr",null,r.a.createElement("td",null,"Correct Answers"),r.a.createElement("td",null,T)),r.a.createElement("tr",null,r.a.createElement("td",null,"Wrong Answers"),r.a.createElement("td",null,x))),r.a.createElement(s.b,{className:"learn-button",to:"/react-quiz-game/infopage"},"Learn about the letters")),r.a.createElement("section",{className:"info"},r.a.createElement("h3",null,"Let's test your self"),r.a.createElement("div",{className:"line ".concat(P())}),""===k?r.a.createElement("span",{onClick:function(){y("playing"),M()}},r.a.createElement(u,null)):r.a.createElement(g,{letter:a,setUserAnswer:v,PARFORM_AFFTER_STEPS:function(){parseInt(b)===m?y("win"):y("lose"),G(),_(),setTimeout((function(){y("playing")}),2e3),M()},getClassName:P}))))},v=a(23);var w=function(){Object(n.useEffect)((function(){window.innerWidth<=992&&l(!0)}),[]);var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useRef)(null),i=Object(n.useRef)(null),m=Object(n.useRef)(null);return r.a.createElement("main",{className:"default info-page"},r.a.createElement("div",{className:"container"},r.a.createElement("span",{className:"menu",onClick:function(){return l(!a)}},r.a.createElement(v.a,null)),r.a.createElement("div",{className:"side",style:{display:a?"none":"block"}},r.a.createElement("a",{onClick:function(){var e;return null===(e=c.current)||void 0===e?void 0:e.scrollIntoView()}},"Grass Letters"),r.a.createElement("a",{onClick:function(){var e;return null===(e=i.current)||void 0===e?void 0:e.scrollIntoView()}},"Sky Letters"),r.a.createElement("a",{onClick:function(){var e;return null===(e=m.current)||void 0===e?void 0:e.scrollIntoView()}},"Root Letters"),r.a.createElement(s.b,{to:"/react-quiz-game",className:"back-button"},"Go back")),r.a.createElement("div",{className:"info-content"},r.a.createElement("h3",null,"GRASS, ROOT AND SKY LETTERS"),r.a.createElement("div",{className:"line default"}),r.a.createElement("p",null,"The lower case or small letters of the alphabets have different shapes and are \u201cpositioned\u201d differently when written on the four lined paper. The children in a Montessori classroom are shown how to differentiate between them according to their shape and position on the four lines by giving separate names to similar shaped and position of the letters."),r.a.createElement("p",null,"In order to improve child\u2019s awareness regarding the shape and position of the alphabets on the line, the child is introduced to sorting exercises. The exercise which gives the child the concept of grass letters, root letters and sky letters actually prepares the child indirectly for writing on paper since the child gets a clear concept of the place and position of each alphabet on the line."),r.a.createElement("p",null,"The children are introduced to the proper placement of alphabets using equidistant four lines. A large mat with four lines equidistant lines made on it with the help of ribbons or other such material mounted on it to make straight lines is used."),r.a.createElement("p",null,"The top and bottom lines are pink and the two center lines are aquamarine/blue (as on primary writing paper)."),r.a.createElement("h4",{ref:c},"Grass letter"),r.a.createElement("p",null,"Letters which fit exactly between the two blue middle lines for example, \u2018a\u2019, \u2018c\u2019, \u2018e\u2019, \u2018i\u2019, \u2018o\u2019, etc. are known as the grass letters."),r.a.createElement("img",{src:"https://raisingthemright.weebly.com/uploads/3/8/0/4/3804886/3290232_orig.jpg",alt:"Picture"}),r.a.createElement("h4",{ref:i},"Sky Letters"),r.a.createElement("p",null,"Letters having a stem which goes up to the pink line are called sky letters, for example, \u2018b\u2019, \u2018d\u2019, \u2018h\u2019, \u2018k\u2019 etc. are known as the sky letters."),r.a.createElement("img",{src:"https://raisingthemright.weebly.com/uploads/3/8/0/4/3804886/4976625_orig.jpg",alt:""}),r.a.createElement("h4",{ref:m},"Root Letters"),r.a.createElement("p",null,"Letters having a stem which goes down to the pink line at the bottom for example, \u2018g\u2019, \u2018j\u2019, \u2018p\u2019, \u2018q\u2019, \u2018y\u2019 etc. are known as root letters."),r.a.createElement("img",{src:"https://raisingthemright.weebly.com/uploads/3/8/0/4/3804886/9195964_orig.jpg",alt:""}))))};var j=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{basename:"/react-quiz-game1"},r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/react-quiz-game1",element:r.a.createElement(b,null)}),r.a.createElement(i.a,{path:"/",element:r.a.createElement(b,null)}),r.a.createElement(i.a,{path:"/react-quiz-game1/infopage",element:r.a.createElement(w,null)}))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.5eb41a22.chunk.js.map