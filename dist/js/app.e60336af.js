(function(){"use strict";var e={8405:function(e,a,t){var s=t(9242),n=t(3396);const r={class:"main"};function i(e,a,t,s,i,o){const c=(0,n.up)("UserInfo"),v=(0,n.up)("ReviewsBlock"),u=(0,n.up)("ReviewForm");return(0,n.wg)(),(0,n.iD)("main",r,[(0,n.Wm)(c),(0,n.Wm)(v,{reviews:i.reviews},null,8,["reviews"]),(0,n.Wm)(u,{reviews:i.reviews,onOnNewReview:o.addReview},null,8,["reviews","onOnNewReview"])])}t(7658);var o=t.p+"img/user-avatar.158450a4.png";const c=(0,n.uE)('<div class="about" data-v-375c170b><div class="about__photo" data-v-375c170b><img src="'+o+'" alt="user avatar" data-v-375c170b></div><div class="about__name" data-v-375c170b>Eva Jonson</div><div class="about__position" data-v-375c170b>Sales Manager</div><div class="about__slogan" data-v-375c170b><div class="about__slogan-inner" data-v-375c170b> I will find the best offers for you. My services are absolutely free. </div></div></div><div class="services" data-v-375c170b><div class="services__name" data-v-375c170b>Services</div><ul class="services__stats" data-v-375c170b><li class="services__stats-a" data-v-375c170b><span class="services__stats-text" data-v-375c170b>Manual tour booking</span><span class="services__stats-count" data-v-375c170b>11</span></li><li class="services__stats-b" data-v-375c170b><span class="services__stats-text" data-v-375c170b>Package tours</span><span class="services__stats-count" data-v-375c170b>3</span></li><li class="services__stats-c" data-v-375c170b><span class="services__stats-text" data-v-375c170b>Hotels</span><span class="services__stats-count" data-v-375c170b>1</span></li></ul><div class="services__total" data-v-375c170b><div class="services__total-text" data-v-375c170b>Total</div><span class="services__total-count" data-v-375c170b>15</span></div></div>',2);function v(e,a,t,s,n,r){return c}var u={name:"UserInfo"},d=t(89);const l=(0,d.Z)(u,[["render",v],["__scopeId","data-v-375c170b"]]);var _=l,f=t(7139);const b={class:"reviews"},w=(0,n.uE)('<div class="reviews__nav" data-v-747ca34f><ul class="reviews__nav-links" data-v-747ca34f><li data-v-747ca34f><a class="reviews__nav-link active" href="#" data-v-747ca34f>Latest reviews</a></li><li data-v-747ca34f><a class="reviews__nav-link" href="#" data-v-747ca34f>All reviews</a></li></ul><div class="reviews__nav-counters" data-v-747ca34f><button class="reviews__like-btn" data-v-747ca34f>131</button><button class="reviews__comments-btn" data-v-747ca34f>14</button></div></div>',1),p={class:"reviews__list"},m={class:"reviews__info"},h={class:"reviews__author"},y={class:"reviews__date"},g={class:"reviews__body"};function k(e,a,t,s,r,i){return(0,n.wg)(),(0,n.iD)("div",b,[w,(0,n._)("ul",p,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.reviews,(e=>((0,n.wg)(),(0,n.iD)("li",{key:e.id,class:"reviews__list-item"},[(0,n._)("div",m,[(0,n._)("div",h,(0,f.zw)(e.author),1),(0,n._)("div",y,(0,f.zw)(e.date),1)]),(0,n._)("div",g,(0,f.zw)(e.body),1)])))),128))])])}var O={name:"ReviewsBlock",props:{reviews:{type:Array,required:!0,default:()=>[]}}};const D=(0,d.Z)(O,[["render",k],["__scopeId","data-v-747ca34f"]]);var x=D;function R(e,a,t,r,i,o){return(0,n.wg)(),(0,n.iD)("form",{class:"review-form",onSubmit:a[3]||(a[3]=(0,s.iM)((()=>{}),["prevent"]))},[(0,n.wy)((0,n._)("textarea",{"onUpdate:modelValue":a[0]||(a[0]=e=>i.body=e),class:"review-form__textarea",onKeydown:a[1]||(a[1]=(0,s.D2)((0,s.iM)(((...e)=>o.onSubmit&&o.onSubmit(...e)),["ctrl"]),["enter"]))},null,544),[[s.nr,i.body]]),(0,n._)("button",{class:"review-form__btn",type:"submit",onClick:a[2]||(a[2]=(...e)=>o.onSubmit&&o.onSubmit(...e))}," Send a message ")],32)}var S={name:"ReviewForm",props:{reviews:{type:Array,required:!0}},emits:["on-new-review"],data(){return{body:""}},methods:{onSubmit(){this.body&&(this.$emit("on-new-review",{author:"Anonymous",body:this.body,date:this.getDate(),id:Date.now(new Date)}),this.body="")},getDate(){const e={day:"numeric",year:"numeric",month:"short"};return(new Date).toLocaleString("en-GB",e)}}};const I=(0,d.Z)(S,[["render",R],["__scopeId","data-v-13a65390"]]);var j=I,A={name:"App",components:{UserInfo:_,ReviewsBlock:x,ReviewForm:j},data(){return{reviews:[{author:"Samuel Jackson",body:"Hey Eva! You're cool. Nice pic!",date:"13 apr 2022",id:"0"},{author:"Angela Deimon",body:"Thanks for your services! We really liked the ocean view room. We hope to cooperate in the near future. We are sure you will do everything to make our next holiday fantastic.",date:"10 apr 2022",id:"1"},{author:"Ronald Harris",body:"Eva, hello! There is such a question: How can I contact you if I am abroad in roaming?",date:"8 apr 2022",id:"2"}]}},methods:{addReview(e){this.reviews.push(e)}}};const E=(0,d.Z)(A,[["render",i]]);var M=E;(0,s.ri)(M).mount("#app")}},a={};function t(s){var n=a[s];if(void 0!==n)return n.exports;var r=a[s]={exports:{}};return e[s](r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(a,s,n,r){if(!s){var i=1/0;for(u=0;u<e.length;u++){s=e[u][0],n=e[u][1],r=e[u][2];for(var o=!0,c=0;c<s.length;c++)(!1&r||i>=r)&&Object.keys(t.O).every((function(e){return t.O[e](s[c])}))?s.splice(c--,1):(o=!1,r<i&&(i=r));if(o){e.splice(u--,1);var v=n();void 0!==v&&(a=v)}}return a}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[s,n,r]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var s in a)t.o(a,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:a[s]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.p="/"}(),function(){var e={143:0};t.O.j=function(a){return 0===e[a]};var a=function(a,s){var n,r,i=s[0],o=s[1],c=s[2],v=0;if(i.some((function(a){return 0!==e[a]}))){for(n in o)t.o(o,n)&&(t.m[n]=o[n]);if(c)var u=c(t)}for(a&&a(s);v<i.length;v++)r=i[v],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(u)},s=self["webpackChunkantagosoft_test"]=self["webpackChunkantagosoft_test"]||[];s.forEach(a.bind(null,0)),s.push=a.bind(null,s.push.bind(s))}();var s=t.O(void 0,[998],(function(){return t(8405)}));s=t.O(s)})();
//# sourceMappingURL=app.e60336af.js.map