(function(){"use strict";var t={73:function(t,e,a){var n=a(751),r=a(641);const i={id:"app"};function o(t,e,a,n,o,c){const s=(0,r.g2)("TheNavigation"),u=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",i,[(0,r.bF)(s),(0,r.bF)(u)])}const c={id:"nav"};function s(t,e,a,n,i,o){const s=(0,r.g2)("AppLink");return(0,r.uX)(),(0,r.CE)("div",c,[(0,r.bF)(s,{to:"/about"},{default:(0,r.k6)((()=>e[0]||(e[0]=[(0,r.eW)("About")]))),_:1}),(0,r.bF)(s,{to:"/random-facts"},{default:(0,r.k6)((()=>e[1]||(e[1]=[(0,r.eW)("Random Facts")]))),_:1}),(0,r.bF)(s,{to:"https://target.com",external:""},{default:(0,r.k6)((()=>e[2]||(e[2]=[(0,r.eW)("Shop")]))),_:1}),(0,r.bF)(s,{to:"/contact"},{default:(0,r.k6)((()=>e[3]||(e[3]=[(0,r.eW)("Contact")]))),_:1})])}const u=["href"];function l(t,e,a,n,i,o){const c=(0,r.g2)("router-link");return o.isExternal?((0,r.uX)(),(0,r.CE)("a",{key:0,target:"_blank",rel:"noopener",class:"external-link",href:t.to},[(0,r.RG)(t.$slots,"default")],8,u)):((0,r.uX)(),(0,r.Wv)(c,(0,r.v6)({key:1},t.$props,{class:"internal-link"}),{default:(0,r.k6)((()=>[(0,r.RG)(t.$slots,"default")])),_:3},16))}var d=a(220),p={props:{...d.Wk.props},computed:{isExternal(){return"string"===typeof this.to&&this.to.startsWith("http")}}},f=a(262);const v=(0,f.A)(p,[["render",l]]);var h=v,y={components:{AppLink:h}};const b=(0,f.A)(y,[["render",s]]);var m=b,g={components:{TheNavigation:m}};const k=(0,f.A)(g,[["render",o]]);var w=k;function C(t,e){return(0,r.uX)(),(0,r.CE)("div",null,e[0]||(e[0]=[(0,r.Lk)("h1",null,"About",-1),(0,r.Lk)("p",null,[(0,r.eW)(" This is a paragraph all about me. I'm always excited to practice new recipes and discover new favorite flavors. Creativity is key and its all about failing and retrying until you succeed! This is a paragraph all about me. I'm always excited to practice new recipes and discover new favorite flavors. Creativity is key and its all about failing and retrying until you succeed!"),(0,r.Lk)("br"),(0,r.eW)(" This is a paragraph all about me. I'm always excited to practice new recipes and discover new favorite flavors. Creativity is key and its all about failing and retrying until you succeed! This is a paragraph all about me. I'm always excited to practice new recipes and discover new favorite flavors. Creativity is key and its all about failing and retrying until you succeed! This is a paragraph all about me."),(0,r.Lk)("br"),(0,r.eW)(" I'm always excited to practice new recipes and discover new favorite flavors. Creativity is key and its all about failing and retrying until you succeed!This is a paragraph all about me. I'm always excited to practice new recipes and discover new favorite flavors. Creativity is key and its all about failing and retrying until you succeed!This is a paragraph all about me. I'm always excited to practice new recipes and discover new favorite flavors. Creativity is key and its all about failing and retrying until you succeed! ")],-1)]))}const x={},W=(0,f.A)(x,[["render",C]]);var E=W;function F(t,e,a,n,i,o){const c=(0,r.g2)("HelloWorld");return(0,r.uX)(),(0,r.CE)("div",null,[(0,r.bF)(c,{msg:"Hello from Random Facts"})])}var L=a(33);const A={class:"hello"},T={key:0};function O(t,e,a,n,i,o){return(0,r.uX)(),(0,r.CE)("div",A,[e[1]||(e[1]=(0,r.Lk)("h1",null,"Random Facts:",-1)),(0,r.Lk)("button",{onClick:e[0]||(e[0]=(...t)=>o.fetchData&&o.fetchData(...t))},"Click Me!"),i.fact?((0,r.uX)(),(0,r.CE)("p",T,(0,L.v_)(i.fact),1)):(0,r.Q3)("",!0)])}var j={props:{msg:String},data(){return{fact:""}},methods:{fetchData(){fetch("https://facts-by-api-ninjas.p.rapidapi.com/v1/facts",{method:"GET",headers:{"x-rapidapi-key":"b594523094msh9d4be5879bacd62p1cbff3jsnedcee5b8061d","x-rapidapi-host":"facts-by-api-ninjas.p.rapidapi.com"}}).then((t=>{t.json().then((t=>{this.fact=t[0].fact}))})).catch((t=>{console.error(t)}))}}};const X=(0,f.A)(j,[["render",O]]);var _=X,I={name:"RandomFacts",components:{HelloWorld:_}};const R=(0,f.A)(I,[["render",F]]);var D=R;function G(t,e){return(0,r.uX)(),(0,r.CE)("div",null,e[0]||(e[0]=[(0,r.Lk)("h1",null,"Contact",-1),(0,r.Lk)("p",null,[(0,r.eW)(" Marian Foster"),(0,r.Lk)("br"),(0,r.eW)(" You can reach me at:"),(0,r.Lk)("br"),(0,r.eW)(" mfoster4@my.waketech.edu ")],-1)]))}const H={},$=(0,f.A)(H,[["render",G]]);var M=$;const N=[{path:"/about",component:E},{path:"/random-facts",component:D},{path:"/contact",component:M}],P=(0,d.aE)({history:(0,d.LA)(),routes:N});var S=P;const Q=(0,n.Ef)(w);Q.use(S),Q.mount("#app")}},e={};function a(n){var r=e[n];if(void 0!==r)return r.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,a),i.exports}a.m=t,function(){var t=[];a.O=function(e,n,r,i){if(!n){var o=1/0;for(l=0;l<t.length;l++){n=t[l][0],r=t[l][1],i=t[l][2];for(var c=!0,s=0;s<n.length;s++)(!1&i||o>=i)&&Object.keys(a.O).every((function(t){return a.O[t](n[s])}))?n.splice(s--,1):(c=!1,i<o&&(o=i));if(c){t.splice(l--,1);var u=r();void 0!==u&&(e=u)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[n,r,i]}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,i,o=n[0],c=n[1],s=n[2],u=0;if(o.some((function(e){return 0!==t[e]}))){for(r in c)a.o(c,r)&&(a.m[r]=c[r]);if(s)var l=s(a)}for(e&&e(n);u<o.length;u++)i=o[u],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(l)},n=self["webpackChunkvue_pages"]=self["webpackChunkvue_pages"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[504],(function(){return a(73)}));n=a.O(n)})();
//# sourceMappingURL=app.f64e9172.js.map