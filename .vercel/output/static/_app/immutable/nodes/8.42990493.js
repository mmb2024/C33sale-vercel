import{S as R,i as U,s as X,k as _,q as k,a as b,y as D,l as g,m as v,r as q,h,c as P,z as I,n as d,b as p,C as $,A as J,g as C,f as Y,d as E,G as Z,B as F,v as x,O as K,D as L}from"../chunks/index.44e5ef1f.js";import{S as tt}from"../chunks/Seo.3c3d4fa8.js";import{C as et,M as at,a as st,T as lt}from"../chunks/Trigger.295058cb.js";function O(m,t,l){const r=m.slice();return r[1]=t[l].id,r[2]=t[l].title,r[3]=t[l].image,r[4]=t[l].body,r}function rt(m){let t,l=m[2].substring(0,20)+"",r,o,e,i;return{c(){t=_("h2"),r=k(l),o=b(),e=_("img"),this.h()},l(a){t=g(a,"H2",{class:!0});var c=v(t);r=q(c,l),c.forEach(h),o=P(a),e=g(a,"IMG",{src:!0,alt:!0,width:!0,height:!0}),this.h()},h(){d(t,"class","svelte-1hhf432"),K(e.src,i=m[3])||d(e,"src",i),d(e,"alt",m[2]),d(e,"width","1000"),d(e,"height","800")},m(a,c){p(a,t,c),$(t,r),p(a,o,c),p(a,e,c)},p:L,d(a){a&&h(t),a&&h(o),a&&h(e)}}}function it(m){let t,l,r,o,e=m[4].substring(0,80)+"",i;return{c(){t=_("img"),r=b(),o=_("p"),i=k(e),this.h()},l(a){t=g(a,"IMG",{src:!0,alt:!0,width:!0,height:!0}),r=P(a),o=g(a,"P",{});var c=v(o);i=q(c,e),c.forEach(h),this.h()},h(){K(t.src,l=m[3])||d(t,"src",l),d(t,"alt",m[2]),d(t,"width","380"),d(t,"height","300")},m(a,c){p(a,t,c),p(a,r,c),p(a,o,c),$(o,i)},p:L,d(a){a&&h(t),a&&h(r),a&&h(o)}}}function ot(m){let t,l,r,o;return t=new st({props:{$$slots:{default:[rt]},$$scope:{ctx:m}}}),r=new lt({props:{$$slots:{default:[it]},$$scope:{ctx:m}}}),{c(){D(t.$$.fragment),l=b(),D(r.$$.fragment)},l(e){I(t.$$.fragment,e),l=P(e),I(r.$$.fragment,e)},m(e,i){J(t,e,i),p(e,l,i),J(r,e,i),o=!0},p(e,i){const a={};i&128&&(a.$$scope={dirty:i,ctx:e}),t.$set(a);const c={};i&128&&(c.$$scope={dirty:i,ctx:e}),r.$set(c)},i(e){o||(C(t.$$.fragment,e),C(r.$$.fragment,e),o=!0)},o(e){E(t.$$.fragment,e),E(r.$$.fragment,e),o=!1},d(e){F(t,e),e&&h(l),F(r,e)}}}function W(m){let t,l,r,o;return l=new at({props:{big:!0,button:!1,$$slots:{default:[ot]},$$scope:{ctx:m}}}),{c(){t=_("div"),D(l.$$.fragment),r=b()},l(e){t=g(e,"DIV",{});var i=v(t);I(l.$$.fragment,i),r=P(i),i.forEach(h)},m(e,i){p(e,t,i),J(l,t,null),$(t,r),o=!0},p(e,i){const a={};i&128&&(a.$$scope={dirty:i,ctx:e}),l.$set(a)},i(e){o||(C(l.$$.fragment,e),o=!0)},o(e){E(l.$$.fragment,e),o=!1},d(e){e&&h(t),F(l)}}}function nt(m){let t,l,r,o,e,i,a,c,z,B,w,y,H,G,V,S=m[0],n=[];for(let s=0;s<S.length;s+=1)n[s]=W(O(m,S,s));const Q=s=>E(n[s],1,1,()=>{n[s]=null});return y=new et({}),G=new tt({props:{title:"Casa en Venta | Cumbaya",description:"Diseño Minimalista con mucha iluminacion Natural",type:"WebPage"}}),{c(){t=_("div"),l=_("h3"),r=k("Areas amplias con mucha luz natural"),o=b(),e=_("div");for(let s=0;s<n.length;s+=1)n[s].c();i=b(),a=_("div"),c=_("h2"),z=k("Contáctenos para una mejor información."),B=b(),w=_("div"),D(y.$$.fragment),H=b(),D(G.$$.fragment),this.h()},l(s){t=g(s,"DIV",{class:!0});var u=v(t);l=g(u,"H3",{class:!0});var f=v(l);r=q(f,"Areas amplias con mucha luz natural"),f.forEach(h),o=P(u),e=g(u,"DIV",{class:!0});var A=v(e);for(let j=0;j<n.length;j+=1)n[j].l(A);A.forEach(h),i=P(u),a=g(u,"DIV",{class:!0});var M=v(a);c=g(M,"H2",{class:!0});var T=v(c);z=q(T,"Contáctenos para una mejor información."),T.forEach(h),B=P(M),w=g(M,"DIV",{});var N=v(w);I(y.$$.fragment,N),N.forEach(h),M.forEach(h),u.forEach(h),H=P(s),I(G.$$.fragment,s),this.h()},h(){d(l,"class","svelte-1hhf432"),d(e,"class","grid svelte-1hhf432"),d(c,"class","svelte-1hhf432"),d(a,"class","contact svelte-1hhf432"),d(t,"class","container")},m(s,u){p(s,t,u),$(t,l),$(l,r),$(t,o),$(t,e);for(let f=0;f<n.length;f+=1)n[f]&&n[f].m(e,null);$(t,i),$(t,a),$(a,c),$(c,z),$(a,B),$(a,w),J(y,w,null),p(s,H,u),J(G,s,u),V=!0},p(s,[u]){if(u&1){S=s[0];let f;for(f=0;f<S.length;f+=1){const A=O(s,S,f);n[f]?(n[f].p(A,u),C(n[f],1)):(n[f]=W(A),n[f].c(),C(n[f],1),n[f].m(e,null))}for(x(),f=S.length;f<n.length;f+=1)Q(f);Y()}},i(s){if(!V){for(let u=0;u<S.length;u+=1)C(n[u]);C(y.$$.fragment,s),C(G.$$.fragment,s),V=!0}},o(s){n=n.filter(Boolean);for(let u=0;u<n.length;u+=1)E(n[u]);E(y.$$.fragment,s),E(G.$$.fragment,s),V=!1},d(s){s&&h(t),Z(n,s),F(y),s&&h(H),F(G,s)}}}function ct(m){return[[{id:1,title:"Fachada Principal",image:"C33facFront1.png",body:"Fachada Frontal"},{id:2,title:"Fachada Posterior",image:"C33facPost.JPG",body:"Fachada Posterior"},{id:3,title:"Sala",image:"C33living1.JPG",body:"Sala"},{id:4,title:"Sala2",image:"C33living2.JPG",body:"Sala - Comedor - Bar"},{id:5,title:"Corredor PA",image:"C33PAcorridor.JPG",body:"Corredor PA"},{id:6,title:"Hall",image:"C33stairs1.JPG",body:"Hall Comedor - Sala"},{id:7,title:"Gradas",image:"C33stairs2.JPG",body:"Gradas y Hall de Ingreso"},{id:8,title:"Sala Estar PA",image:"C33studios1.JPG",body:"Estudio PA"},{id:9,title:"Sala",image:"C33studios2.JPG",body:"Sala Doble Altura"}]]}class ht extends R{constructor(t){super(),U(this,t,ct,nt,X,{})}}export{ht as component};
