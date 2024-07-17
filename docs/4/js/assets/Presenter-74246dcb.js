import{o as d,f as k,g as e,B as S,C as R,v as h,d as V,i as I,a as B,D as y,x as p,E as P,_ as H,G as z,H as A,c as b,b as D,I as $,J as O,K as W,L as E,M as L,N as j,O as q,P as F,Q as K,h as i,m as u,t as U,n as x,R as N,S as T,p as Z,T as G,U as w,V as J,F as Q,W as X,X as Y,w as ee,Y as te,Z as se,q as M,$ as oe,a0 as le,a1 as ne,a2 as ae,k as ie,a3 as re,a4 as ce}from"./index-6efe10e1.js";import{N as ue}from"./NoteDisplay-5d5fb259.js";import de from"./DrawingControls-4e976da7.js";const _e={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ve=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),me=[ve];function pe(o,n){return d(),k("svg",_e,me)}const he={name:"carbon-renew",render:pe},fe={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ge=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),xe=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),we=[ge,xe];function Se(o,n){return d(),k("svg",fe,we)}const ye={name:"carbon-time",render:Se},ke="/4/js/assets/logo-title-horizontal-96c3c915.png";function Ce(){const o=S(Date.now()),n=R({interval:1e3}),_=h(()=>{const t=(n.value-o.value)/1e3,l=Math.floor(t%60).toString().padStart(2,"0");return`${Math.floor(t/60).toString().padStart(2,"0")}:${l}`});function v(){o.value=n.value}return{timer:_,resetTimer:v}}const be=V({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(o){const n=o;I(B);const _=h(()=>{var t,l,s;return(s=(l=(t=y.value)==null?void 0:t.meta)==null?void 0:l.slide)==null?void 0:s.note}),v=h(()=>{var t,l,s;return(s=(l=(t=y.value)==null?void 0:t.meta)==null?void 0:l.slide)==null?void 0:s.noteHTML});return(t,l)=>(d(),p(ue,{class:P(n.class),note:_.value,"note-html":v.value},null,8,["class","note","note-html"]))}}),$e=H(be,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/NoteStatic.vue"]]),f=o=>(X("data-v-574fd206"),o=o(),Y(),o),Ne={class:"bg-main h-full slidev-presenter"},Te={class:"grid-container"},Me={class:"grid-section top flex"},Ve=f(()=>e("img",{src:ke,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2"},null,-1)),Ie=f(()=>e("div",{class:"flex-auto"},null,-1)),Be={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},Pe=f(()=>e("div",{class:"context"}," current ",-1)),He=f(()=>e("div",{class:"context"}," next ",-1)),Re={class:"grid-section note overflow-auto"},ze={class:"grid-section bottom"},Ae={class:"progress-bar"},De=V({__name:"Presenter",setup(o){I(B);const n=S();z(),A(n);const _=b.titleTemplate.replace("%s",b.title||"Slidev");D({title:`Presenter - ${_}`});const{timer:v,resetTimer:t}=Ce(),l=S([]),s=h(()=>$.value<O.value?{route:y.value,clicks:$.value+1}:W.value?{route:E.value,clicks:0}:null);return L(()=>{const C=n.value.querySelector("#slide-content"),r=j(q()),g=F();K(()=>{if(!g.value||te.value||!se.value)return;const c=C.getBoundingClientRect(),a=(r.x-c.left)/c.width*100,m=(r.y-c.top)/c.height*100;if(!(a<0||a>100||m<0||m>100))return{x:a,y:m}},c=>{ee.cursor=c})}),(C,r)=>{const g=ye,c=he;return d(),k(Q,null,[e("div",Ne,[e("div",Te,[e("div",Me,[Ve,Ie,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:r[0]||(r[0]=(...a)=>i(t)&&i(t)(...a))},[u(g,{class:"absolute"}),u(c,{class:"absolute opacity-0"})]),e("div",Be,U(i(v)),1)]),e("div",{ref_key:"main",ref:n,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:x(i(M))},[u(T,{key:"main",class:"h-full w-full"},{default:N(()=>[u(oe,{context:"presenter"})]),_:1}),Pe],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:x(i(M))},[s.value?(d(),p(T,{key:"next",class:"h-full w-full"},{default:N(()=>{var a;return[u(i(ne),{is:(a=s.value.route)==null?void 0:a.component,"clicks-elements":l.value,"onUpdate:clicksElements":r[1]||(r[1]=m=>l.value=m),clicks:s.value.clicks,"clicks-disabled":!1,class:P(i(le)(s.value.route)),route:s.value.route,context:"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):Z("v-if",!0),He],4),e("div",Re,[(d(),p($e,{key:1,class:"w-full h-full overflow-auto p-2 lg:p-4"}))]),e("div",ze,[u(re,{persist:!0})]),(d(),p(de,{key:0}))]),e("div",Ae,[e("div",{class:"progress h-2px bg-primary transition-all",style:x({width:`${(i(ae)-1)/(i(ie)-1)*100}%`})},null,4)])]),u(ce),u(J,{modelValue:i(w),"onUpdate:modelValue":r[2]||(r[2]=a=>G(w)?w.value=a:null)},null,8,["modelValue"])],64)}}});const Le=H(De,[["__scopeId","data-v-574fd206"],["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Presenter.vue"]]);export{Le as default};
