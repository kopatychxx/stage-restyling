(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{284:function(e,t,r){var content=r(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(86).default)("a1d5c95a",content,!0,{sourceMap:!1})},299:function(e,t,r){e.exports=r.p+"img/windowtinting.2b54e99.jpg"},300:function(e,t,r){e.exports=r.p+"img/protectionFilm.6225a96.jpg"},301:function(e,t,r){e.exports=r.p+"img/vinyl.0c284e6.jpg"},302:function(e,t,r){e.exports=r.p+"img/ceramic.22e1a76.jpg"},303:function(e,t,r){"use strict";r(284)},304:function(e,t,r){var n=r(85)((function(i){return i[1]}));n.push([e.i,".service[data-v-1cb33526]{padding:0 10%}.service h3[data-v-1cb33526]{font-size:40px;font-weight:600;margin-bottom:10px}.carousel[data-v-1cb33526]{margin:0;overflow:hidden;position:relative;width:100%}.carousel-track[data-v-1cb33526]{display:flex;gap:20px;transition:transform .5s ease-in-out}.carousel-item[data-v-1cb33526]{background:#fff;border-radius:10px;box-shadow:0 4px 10px rgba(0,0,0,.1);box-sizing:border-box;cursor:pointer;flex:0 0 calc(33.33333% - 20px);flex:0 0 calc(100%/var(--itemsPerView, 3) - 20px);height:100%;margin-bottom:10px;overflow:hidden;padding:10px;text-align:center;transition:height .3s ease}.carousel-item.is-expanded[data-v-1cb33526]{height:auto}.carousel-full-text[data-v-1cb33526]{color:#666;font-size:.9rem;margin-top:10px}.read-more-btn[data-v-1cb33526]{background-color:#000;border:none;border-radius:5px;color:#fff;cursor:pointer;display:inline-block;font-size:.9rem;margin-top:10px;padding:5px 10px;transition:background-color .3s ease}.read-more-btn[data-v-1cb33526]:hover{background-color:#555}.carousel-indicator[data-v-1cb33526]{background:#e0e0e0;border-radius:2px;height:4px;margin-right:30px;overflow:hidden;position:relative;width:100%}.carousel-progress[data-v-1cb33526]{background:#000;height:100%;transition:width .5s ease-in-out}.nav-btn-container[data-v-1cb33526]{display:flex;gap:5px;justify-content:center}.carousel-test[data-v-1cb33526]{align-items:center;display:flex;flex-direction:row;justify-content:space-between}.nav-btn[data-v-1cb33526]{background:#000;border:none;border-radius:50%;color:#fff;cursor:pointer;height:40px;width:40px}.carousel-image[data-v-1cb33526]{border-radius:10px;width:100%}.carousel-title[data-v-1cb33526]{color:#9f0000;font-size:20px;font-weight:700}.carousel-description[data-v-1cb33526]{color:#666;font-size:15px;font-weight:600;margin:20px auto}@media (max-width:1024px){.carousel-item[data-v-1cb33526]{flex:0 0 calc(50% - 20px);flex:0 0 calc(100%/var(--itemsPerView, 2) - 20px)}}@media (max-width:768px){.carousel-item[data-v-1cb33526]{flex:0 0 calc(100% - 20px)}.service h2[data-v-1cb33526]{font-size:25px;font-weight:600;margin:0 auto 20px;text-align:center}}",""]),n.locals={},e.exports=n},326:function(e,t,r){"use strict";r.r(t);r(36),r(63);var n={name:"ServiceSection",data:function(){return{currentIndex:0,itemsPerView:3,expandedIndex:null,services:[{title:"Window tinting",description:"Enhance privacy and reduce heat with professional window tinting.",text:"Our premium window tinting services protect your car’s interior from UV rays, reduce heat, and provide enhanced privacy. Enjoy a cooler, more comfortable ride with a sleek look.",image:r(299)},{title:"Paint protection film",description:"Keep your car’s paint flawless with durable protective films.",text:"Protect your car’s paintwork from scratches, chips, and other damage with our high-quality paint protection films. Transparent and long-lasting, they preserve your vehicle’s original finish.",image:r(300)},{title:"Vinyl wraps",description:"Transform your car’s appearance with custom vinyl wraps.",text:"Custom vinyl wraps offer a variety of colors and textures to completely change your car’s look. They also protect the surface from minor damage and can be easily removed without residue.",image:r(301)},{title:"Ceramic coating",description:"Shield your car and maintain its shine with advanced ceramic coatings.",text:"Ceramic coating provides a long-lasting, glossy finish while protecting your car from dirt, UV rays, and water. It’s the perfect solution for preserving your vehicle’s pristine condition with minimal maintenance.",image:r(302)}]}},computed:{translateX:function(){return-this.currentIndex*(100/this.itemsPerView)},progressWidth:function(){var e=this.services.length-this.itemsPerView+1;return this.currentIndex/(e-1)*100||0}},mounted:function(){this.updateItemsPerView(),window.addEventListener("resize",this.updateItemsPerView)},beforeDestroy:function(){window.removeEventListener("resize",this.updateItemsPerView)},methods:{toggleExpand:function(e){this.expandedIndex=this.expandedIndex===e?null:e},nextSlide:function(){this.currentIndex<this.services.length-this.itemsPerView&&this.currentIndex++},prevSlide:function(){this.currentIndex>0&&this.currentIndex--},updateItemsPerView:function(){var e=window.innerWidth;this.itemsPerView=e>=1024?3:1,this.currentIndex>this.services.length-this.itemsPerView&&(this.currentIndex=this.services.length-this.itemsPerView)}}},o=(r(303),r(46)),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"service",attrs:{id:"service"}},[t("h2",[e._v("Services")]),e._v(" "),t("div",{staticClass:"carousel"},[t("div",{staticClass:"carousel-track",style:{transform:"translateX(".concat(e.translateX,"%)")}},e._l(e.services,(function(r,n){return t("div",{key:n,staticClass:"carousel-item",class:{"is-expanded":e.expandedIndex===n}},[t("img",{staticClass:"carousel-image",attrs:{src:r.image,alt:r.title}}),e._v(" "),t("div",{staticClass:"carousel-content"},[t("h4",{staticClass:"carousel-title"},[e._v(e._s(r.title))]),e._v(" "),t("p",{staticClass:"carousel-description"},[e._v(e._s(r.description))]),e._v(" "),e.expandedIndex===n?t("p",{staticClass:"carousel-full-text"},[e._v("\n            "+e._s(r.text)+"\n          ")]):e._e(),e._v(" "),t("button",{staticClass:"read-more-btn",on:{click:function(t){return e.toggleExpand(n)}}},[e._v("\n            "+e._s(e.expandedIndex===n?"Read Less":"Read More")+"\n          ")])])])})),0),e._v(" "),t("div",{staticClass:"carousel-test"},[t("div",{staticClass:"carousel-indicator"},[t("div",{staticClass:"carousel-progress",style:{width:"".concat(e.progressWidth,"%")}})]),e._v(" "),t("div",{staticClass:"nav-btn-container"},[t("button",{staticClass:"nav-btn",on:{click:e.prevSlide}},[e._v("←")]),e._v(" "),t("button",{staticClass:"nav-btn",on:{click:e.nextSlide}},[e._v("→")])])])])])}),[],!1,null,"1cb33526",null);t.default=component.exports}}]);