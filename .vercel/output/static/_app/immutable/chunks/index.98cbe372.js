function y(){}function Q(t,e){for(const n in e)t[n]=e[n];return t}function B(t){return t()}function H(){return Object.create(null)}function x(t){t.forEach(B)}function M(t){return typeof t=="function"}function mt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let b;function pt(t,e){return b||(b=document.createElement("a")),b.href=e,t===b.href}function U(t){return Object.keys(t).length===0}function V(t,...e){if(t==null)return y;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function yt(t,e,n){t.$$.on_destroy.push(V(e,n))}function gt(t,e,n,i){if(t){const r=q(t,e,n,i);return t[0](r)}}function q(t,e,n,i){return t[1]&&i?Q(n.ctx.slice(),t[1](i(e))):n.ctx}function xt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],s=Math.max(e.dirty.length,r.length);for(let l=0;l<s;l+=1)o[l]=e.dirty[l]|r[l];return o}return e.dirty|r}return e.dirty}function $t(t,e,n,i,r,o){if(r){const s=q(e,n,i,o);t.p(s,r)}}function bt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Et(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function wt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Tt(t,e,n){return t.set(n),e}function Nt(t){return t&&M(t.destroy)?t.destroy:y}let T=!1;function X(){T=!0}function Y(){T=!1}function Z(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function tt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&c.push(a)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,a=(r>0&&e[n[r]].claim_order<=u?r+1:Z(1,r,$=>e[n[$]].claim_order,u))-1;i[c]=n[a]+1;const f=a+1;n[f]=c,r=Math.max(f,r)}const o=[],s=[];let l=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);l>=c;l--)s.push(e[l]);l--}for(;l>=0;l--)s.push(e[l]);o.reverse(),s.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<s.length;c++){for(;u<o.length&&s[c].claim_order>=o[u].claim_order;)u++;const a=u<o.length?o[u]:null;t.insertBefore(s[c],a)}}function et(t,e){if(T){for(tt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function nt(t,e,n){t.insertBefore(e,n||null)}function it(t,e,n){T&&!n?et(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function vt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function G(t){return document.createElement(t)}function R(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function L(t){return document.createTextNode(t)}function At(){return L(" ")}function St(){return L("")}function Mt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function rt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const st=["width","height"];function Lt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&st.indexOf(i)===-1?t[i]=e[i]:rt(t,i,e[i])}function ct(t){return Array.from(t.childNodes)}function z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function F(t,e,n,i,r=!1){z(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(e(l)){const c=n(l);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(e(l)){const c=n(l);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function W(t,e,n,i){return F(t,r=>r.nodeName===e,r=>{const o=[];for(let s=0;s<r.attributes.length;s++){const l=r.attributes[s];n[l.name]||o.push(l.name)}o.forEach(s=>r.removeAttribute(s))},()=>i(e))}function kt(t,e,n){return W(t,e,n,G)}function Ct(t,e,n){return W(t,e,n,R)}function ot(t,e){return F(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>L(e),!0)}function Ht(t){return ot(t," ")}function j(t,e,n){for(let i=n;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===e)return i}return t.length}function jt(t,e){const n=j(t,"HTML_TAG_START",0),i=j(t,"HTML_TAG_END",n);if(n===i)return new O(void 0,e);z(t);const r=t.splice(n,i-n+1);w(r[0]),w(r[r.length-1]);const o=r.slice(1,r.length-1);for(const s of o)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new O(o,e)}function Ot(t,e){e=""+e,t.data!==e&&(t.data=e)}function Pt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Dt(t,e,n){t.classList[n?"add":"remove"](e)}function Bt(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const o=r.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(r)):o===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}class lt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=R(n.nodeName):this.e=G(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)nt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(w)}}class O extends lt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)it(this.t,this.n[n],e)}}function qt(t,e){return new t(e)}let g;function p(t){g=t}function N(){if(!g)throw new Error("Function called outside component initialization");return g}function Gt(t){N().$$.on_mount.push(t)}function Rt(t){N().$$.after_update.push(t)}function zt(t,e){return N().$$.context.set(t,e),e}function Ft(t){return N().$$.context.get(t)}const h=[],P=[];let m=[];const D=[],I=Promise.resolve();let A=!1;function J(){A||(A=!0,I.then(K))}function Wt(){return J(),I}function S(t){m.push(t)}const v=new Set;let d=0;function K(){if(d!==0)return;const t=g;do{try{for(;d<h.length;){const e=h[d];d++,p(e),ut(e.$$)}}catch(e){throw h.length=0,d=0,e}for(p(null),h.length=0,d=0;P.length;)P.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];v.has(n)||(v.add(n),n())}m.length=0}while(h.length);for(;D.length;)D.pop()();A=!1,v.clear(),p(t)}function ut(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}function ft(t){const e=[],n=[];m.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),m=e}const E=new Set;let _;function It(){_={r:0,c:[],p:_}}function Jt(){_.r||x(_.c),_=_.p}function at(t,e){t&&t.i&&(E.delete(t),t.i(e))}function Kt(t,e,n,i){if(t&&t.o){if(E.has(t))return;E.add(t),_.c.push(()=>{E.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Qt(t,e){const n={},i={},r={$$scope:1};let o=t.length;for(;o--;){const s=t[o],l=e[o];if(l){for(const c in s)c in l||(i[c]=1);for(const c in l)r[c]||(n[c]=l[c],r[c]=1);t[o]=l}else for(const c in s)r[c]=1}for(const s in i)s in n||(n[s]=void 0);return n}function Ut(t){t&&t.c()}function Vt(t,e){t&&t.l(e)}function _t(t,e,n,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),i||S(()=>{const s=t.$$.on_mount.map(B).filter(M);t.$$.on_destroy?t.$$.on_destroy.push(...s):x(s),t.$$.on_mount=[]}),o.forEach(S)}function dt(t,e){const n=t.$$;n.fragment!==null&&(ft(n.after_update),x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ht(t,e){t.$$.dirty[0]===-1&&(h.push(t),J(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Xt(t,e,n,i,r,o,s,l=[-1]){const c=g;p(t);const u=t.$$={fragment:null,ctx:[],props:o,update:y,not_equal:r,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:H(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};s&&s(u.root);let a=!1;if(u.ctx=n?n(t,e.props||{},(f,$,...k)=>{const C=k.length?k[0]:$;return u.ctx&&r(u.ctx[f],u.ctx[f]=C)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](C),a&&ht(t,f)),$}):[],u.update(),a=!0,x(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){X();const f=ct(e.target);u.fragment&&u.fragment.l(f),f.forEach(w)}else u.fragment&&u.fragment.c();e.intro&&at(t.$$.fragment),_t(t,e.target,e.anchor,e.customElement),Y(),K()}p(c)}class Yt{$destroy(){dt(this,1),this.$destroy=y}$on(e,n){if(!M(n))return y;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!U(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Bt as $,_t as A,dt as B,et as C,y as D,R as E,Ct as F,vt as G,yt as H,Dt as I,Mt as J,gt as K,$t as L,bt as M,xt as N,pt as O,Nt as P,wt as Q,zt as R,Yt as S,Q as T,Et as U,Tt as V,x as W,Ft as X,Lt as Y,Qt as Z,O as _,At as a,jt as a0,it as b,Ht as c,Kt as d,St as e,Jt as f,at as g,w as h,Xt as i,Rt as j,G as k,kt as l,ct as m,rt as n,Gt as o,Pt as p,L as q,ot as r,mt as s,Wt as t,Ot as u,It as v,P as w,qt as x,Ut as y,Vt as z};
