import{d as c,i as d,a as u,f as n,E as s,g as a,t as r,o as l,_ as m}from"./index-15a5b4d2.js";const f=["innerHTML"],v=["textContent"],k=["textContent"],y=c({__name:"NoteDisplay",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1},placeholder:{type:String,required:!1}},emits:["click"],setup(p){const o=p;return d(u),(e,t)=>e.noteHtml?(l(),n("div",{key:0,class:s(["prose overflow-auto outline-none",o.class]),onClick:t[0]||(t[0]=i=>e.$emit("click")),innerHTML:e.noteHtml},null,10,f)):e.note?(l(),n("div",{key:1,class:s(["prose overflow-auto outline-none",o.class]),onClick:t[1]||(t[1]=i=>e.$emit("click"))},[a("p",{textContent:r(e.note)},null,8,v)],2)):(l(),n("div",{key:2,class:s(["prose overflow-auto outline-none opacity-50 italic",o.class]),onClick:t[2]||(t[2]=i=>e.$emit("click"))},[a("p",{textContent:r(o.placeholder||"No notes.")},null,8,k)],2))}}),g=m(y,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/NoteDisplay.vue"]]);export{g as N};
