(function(){"use strict";var a={857:function(a,n,e){e(6992),e(8674),e(9601),e(7727);var t=e(5393),o={class:"app-box"},i={class:"router-box"};function c(a,n,e,c,r,s){var u=(0,t.up)("Appbar"),l=(0,t.up)("router-view");return(0,t.wg)(),(0,t.j4)("div",o,[(0,t.Wm)(u,{onLogin:a.onLogin,onChange:a.onChangeTab},null,8,["onLogin","onChange"]),(0,t.Wm)("div",i,[(0,t.Wm)(l)])])}e(4916),e(5306);var r=(0,t.HX)("data-v-06295722");(0,t.dD)("data-v-06295722");var s={class:"container row"},u=(0,t.Wm)("div",{class:"logo"},"上海青岚机器人有限公司",-1),l=(0,t.Wm)("div",{class:"flex"},null,-1),v=(0,t.Wm)("div",{style:{width:"24px"}},null,-1),d=(0,t.Wm)("div",{class:"barsize"},null,-1);(0,t.Cn)();var m=r((function(a,n,e,o,i,c){return(0,t.wg)(),(0,t.j4)("div",null,[(0,t.Wm)("div",s,[(0,t.Wm)("img",{class:"user-icon",src:"static/logo.png",onClick:n[1]||(n[1]=function(){return a.onLogin&&a.onLogin.apply(a,arguments)})}),u,l,((0,t.wg)(!0),(0,t.j4)(t.HY,null,(0,t.Ko)(a.tabList,(function(n,e){return(0,t.wg)(),(0,t.j4)("div",{class:"item"+(e===a.tabIndex?" select":""),key:n,onClick:function(n){return a.onClick(e)}},(0,t.zw)(n),11,["onClick"])})),128)),v]),d])})),p=(0,t.aZ)({name:"Appbar",props:{onLogin:Function,onChange:Function},setup:function(a){var n=(0,t.iH)(0),e=["公司首页","关于我们"];function o(e){n.value=e,a.onChange&&a.onChange(e)}return{tabIndex:n,tabList:e,onClick:o}}});p.render=m,p.__scopeId="data-v-06295722";var h=p,g=e(1278),f=e(2610),b=e(2119),k=function(){function a(n){(0,g.Z)(this,a),this.router=n}return(0,f.Z)(a,[{key:"dispatch",value:function(){this.router.beforeEach((function(a,n,e){console.log(a,n,e)}))}},{key:"push",value:function(a,n){this.router.push({path:a,params:n||{}})}},{key:"replace",value:function(a){this.router.replace(a)}},{key:"back",value:function(){this.router.back()}},{key:"pop",value:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.router.go(a)}},{key:"params",value:function(){(0,b.yj)().params}}],[{key:"init",value:function(n){a.ins||(a.ins=new a(n))}},{key:"get",value:function(){return a.ins}}]),a}(),x=(0,t.aZ)({name:"App",components:{Appbar:h},setup:function(){var a=k.get(),n=["/home","/about"];function e(e){console.log(e),a.replace(n[e])}function o(){}return(0,t.bv)((function(){console.log("---"),a.replace("/home")})),(0,t.Ah)((function(){console.log("---")})),{onChangeTab:e,onLogin:o}}});x.render=c;var w=x,j=(0,t.HX)("data-v-8f6c1ab2");(0,t.dD)("data-v-8f6c1ab2");var y={class:"container"};(0,t.Cn)();var C=j((function(a,n,e,o,i,c){return(0,t.wg)(),(0,t.j4)("div",y)})),D=(0,t.aZ)({name:"Account"});D.render=C,D.__scopeId="data-v-8f6c1ab2";var W=D,B=(0,t.HX)("data-v-7f1a891c");(0,t.dD)("data-v-7f1a891c");var H={class:"home-box"},I=(0,t.uE)('<div class="backdrop-cover h1co" data-v-7f1a891c><h1 style="padding:0 96px;" data-v-7f1a891c> 上海青岚机器人有限公司是一家以人工智能技术为核心，以创新为导向的服务机器人应用场景解决方案提供商，致力于将先进技术与行业需求快速结合，为客户提供可靠稳定的、高性价比解决方案。 </h1><h1 data-v-7f1a891c>网站维护中，业务联系电话：18101979508（张经理）</h1></div><div class="home-item" data-v-7f1a891c><div class="item-img" style="background-image:url(&#39;static/img/banner02.jpg&#39;);" data-v-7f1a891c></div><h1 class="item-text" data-v-7f1a891c> 业务联系电话：18101979508（张经理） </h1></div><div class="home-item" data-v-7f1a891c><h1 class="item-text" data-v-7f1a891c>网站升级维护中...</h1><div class="item-img" style="background-image:url(&#39;static/img/banner03.jpg&#39;);" data-v-7f1a891c></div></div>',3);(0,t.Cn)();var S=B((function(a,n,e,o,i,c){return(0,t.wg)(),(0,t.j4)("div",H,[(0,t.Wm)("div",{class:"backdrop",style:a.backdrop},null,4),I])})),_=(0,t.aZ)({name:"Home",components:{},setup:function(){var a=(0,t.iH)("background-image: url('static/img/banner1.jpg')");function n(){}return(0,t.bv)((function(){n()})),{backdrop:a}}});_.render=S,_.__scopeId="data-v-7f1a891c";var L=_,A=(0,t.HX)("data-v-ac067254");(0,t.dD)("data-v-ac067254");var T={class:"example-box"},Z={class:"content-box"},z={class:"book-box"};(0,t.Cn)();var X=A((function(a,n,e,o,i,c){var r=(0,t.up)("Appmenu"),s=(0,t.up)("BookItem");return(0,t.wg)(),(0,t.j4)("div",T,[(0,t.Wm)(r,{onChange:a.onChangeMenu},null,8,["onChange"]),(0,t.Wm)("div",Z,[(0,t.Wm)("div",z,[((0,t.wg)(!0),(0,t.j4)(t.HY,null,(0,t.Ko)(a.bookList,(function(a){return(0,t.wg)(),(0,t.j4)(s,{key:a,item:a},null,8,["item"])})),128))])])])})),E={userId:"",token:"",uuid:0,backdrops:["static/img/banner0.jpg","static/img/banner1.jpg","static/img/banner2.jpg","static/img/banner3.jpg","static/img/banner4.jpg"],books:[{name:"策略与风险管理",author:"未知",desc:"主要内容有机器特性、二叉树模型、希腊值、波动率、Delta、B-S定价模型的局限和应用等，力求把概念讲清楚，把策略说透彻，简单而直观地展示特性，并附有大量的实际案例。"},{name:"策略与风险管理",author:"未知",desc:"主要内容有机器特性、二叉树模型、希腊值、波动率、Delta、B-S定价模型的局限和应用等，力求把概念讲清楚，把策略说透彻，简单而直观地展示特性，并附有大量的实际案例。"},{name:"策略与风险管理",author:"未知",desc:"主要内容有机器特性、二叉树模型、希腊值、波动率、Delta、B-S定价模型的局限和应用等，力求把概念讲清楚，把策略说透彻，简单而直观地展示特性，并附有大量的实际案例。"},{name:"策略与风险管理",author:"未知",desc:"主要内容有机器特性、二叉树模型、希腊值、波动率、Delta、B-S定价模型的局限和应用等，力求把概念讲清楚，把策略说透彻，简单而直观地展示特性，并附有大量的实际案例。"},{name:"策略与风险管理",author:"未知",desc:"主要内容有机器特性、二叉树模型、希腊值、波动率、Delta、B-S定价模型的局限和应用等，力求把概念讲清楚，把策略说透彻，简单而直观地展示特性，并附有大量的实际案例。"},{name:"策略与风险管理",author:"未知",desc:"主要内容有机器特性、二叉树模型、希腊值、波动率、Delta、B-S定价模型的局限和应用等，力求把概念讲清楚，把策略说透彻，简单而直观地展示特性，并附有大量的实际案例。"},{name:"策略与风险管理",author:"未知",desc:"主要内容有机器特性、二叉树模型、希腊值、波动率、Delta、B-S定价模型的局限和应用等，力求把概念讲清楚，把策略说透彻，简单而直观地展示特性，并附有大量的实际案例。"},{name:"策略与风险管理",author:"未知",desc:"主要内容有机器特性、二叉树模型、希腊值、波动率、Delta、B-S定价模型的局限和应用等，力求把概念讲清楚，把策略说透彻，简单而直观地展示特性，并附有大量的实际案例。"},{name:"策略与风险管理",author:"未知",desc:"主要内容有机器特性、二叉树模型、希腊值、波动率、Delta、B-S定价模型的局限和应用等，力求把概念讲清楚，把策略说透彻，简单而直观地展示特性，并附有大量的实际案例。"},{name:"策略与风险管理",author:"未知",desc:"主要内容有机器特性、二叉树模型、希腊值、波动率、Delta、B-S定价模型的局限和应用等，力求把概念讲清楚，把策略说透彻，简单而直观地展示特性，并附有大量的实际案例。"},{name:"策略与风险管理",author:"未知",desc:"主要内容有机器特性、二叉树模型、希腊值、波动率、Delta、B-S定价模型的局限和应用等，力求把概念讲清楚，把策略说透彻，简单而直观地展示特性，并附有大量的实际案例。"},{name:"策略与风险管理",author:"未知",desc:"主要内容有机器特性、二叉树模型、希腊值、波动率、Delta、B-S定价模型的局限和应用等，力求把概念讲清楚，把策略说透彻，简单而直观地展示特性，并附有大量的实际案例。"},{name:"策略与风险管理",author:"未知",desc:"主要内容有机器特性、二叉树模型、希腊值、波动率、Delta、B-S定价模型的局限和应用等，力求把概念讲清楚，把策略说透彻，简单而直观地展示特性，并附有大量的实际案例。"},{name:"策略与风险管理",author:"未知",desc:"主要内容有机器特性、二叉树模型、希腊值、波动率、Delta、B-S定价模型的局限和应用等，力求把概念讲清楚，把策略说透彻，简单而直观地展示特性，并附有大量的实际案例。"},{name:"策略与风险管理",author:"未知",desc:"主要内容有机器特性、二叉树模型、希腊值、波动率、Delta、B-S定价模型的局限和应用等，力求把概念讲清楚，把策略说透彻，简单而直观地展示特性，并附有大量的实际案例。"},{name:"策略与风险管理",author:"未知",desc:"主要内容有机器特性、二叉树模型、希腊值、波动率、Delta、B-S定价模型的局限和应用等，力求把概念讲清楚，把策略说透彻，简单而直观地展示特性，并附有大量的实际案例。"},{name:"策略与风险管理",author:"未知",desc:"主要内容有机器特性、二叉树模型、希腊值、波动率、Delta、B-S定价模型的局限和应用等，力求把概念讲清楚，把策略说透彻，简单而直观地展示特性，并附有大量的实际案例。"}]},Y=(e(8309),(0,t.HX)("data-v-48e90337"));(0,t.dD)("data-v-48e90337");var K={class:"item-box"},F=(0,t.Wm)("div",{class:"item-img"},"图片加载失败",-1),O={class:"item-content"},M={class:"item-title"},P={class:"item-label"},U=(0,t.Uk)("作者： "),q={class:"item-value"},G={class:"item-label"};(0,t.Cn)();var J=Y((function(a,n,e,o,i,c){return(0,t.wg)(),(0,t.j4)("div",K,[F,(0,t.Wm)("div",O,[(0,t.Wm)("span",M,(0,t.zw)(a.item.name),1),(0,t.Wm)("p",P,[U,(0,t.Wm)("span",q,(0,t.zw)(a.item.author),1)]),(0,t.Wm)("p",G,"简介： "+(0,t.zw)(a.item.desc),1)])])})),N=(0,t.aZ)({name:"BookItem",props:{item:Object},setup:function(){return(0,t.bv)((function(){var a=setTimeout((function(){clearTimeout(a)}),1e4)})),{}}});N.render=J,N.__scopeId="data-v-48e90337";var Q=N,R=(0,t.HX)("data-v-567aa470");(0,t.dD)("data-v-567aa470");var V={class:"appmenu"},$=(0,t.Wm)("div",{style:{height:"58px"}},null,-1),aa={class:"ul-box"},na={key:0,class:"ul-box"},ea=(0,t.Wm)("div",{style:{width:"200px","min-width":"200px"}},null,-1);(0,t.Cn)();var ta=R((function(a,n,e,o,i,c){return(0,t.wg)(),(0,t.j4)(t.HY,null,[(0,t.Wm)("div",V,[$,(0,t.Wm)("ul",aa,[((0,t.wg)(!0),(0,t.j4)(t.HY,null,(0,t.Ko)(a.list,(function(n,e){return(0,t.wg)(),(0,t.j4)("li",{class:"li-box",key:e},[(0,t.Wm)("span",{class:"ul-span",onClick:function(n){return a.onChangeTab(e)}},(0,t.zw)(n.label),9,["onClick"]),n.select?((0,t.wg)(),(0,t.j4)("ul",na,[((0,t.wg)(!0),(0,t.j4)(t.HY,null,(0,t.Ko)(n.value,(function(n,o){return(0,t.wg)(),(0,t.j4)("li",{class:"li-box",key:n},[(0,t.Wm)("span",{class:"li-span"+(a.menuText===n?" span2":""),onClick:function(t){return a.onChangeItem(n,o,e)}},(0,t.zw)(n),11,["onClick"])])})),128))])):(0,t.ry)("",!0)])})),128))])]),ea],64)})),oa=(0,t.aZ)({name:"Appmenu",props:{onChange:Function},setup:function(a){var n=(0,t.iH)([{label:"自助机",select:!0,value:["政务大厅"]},{label:"餐饮业",select:!1,value:["招待","送餐"]},{label:"酒店",select:!1,value:["办理入住","送餐"]}]),e=0,o=(0,t.iH)("自助机");function i(a){var t=n.value[a];n.value[a].select=!t.select,e=a}function c(n,t,i){e=i,o.value=n,a.onChange&&a.onChange(e,t)}return{list:n,menuText:o,onChangeTab:i,onChangeItem:c}}});oa.render=ta,oa.__scopeId="data-v-567aa470";var ia=oa,ca=(0,t.aZ)({name:"Example",components:{Appmenu:ia,BookItem:Q},setup:function(){var a=E.books,n=k.get(),e=["/book","/video","/blog","/plaza","/"];function t(a,t){console.log(a,t),n.replace("/example".concat(e[a]))}return{bookList:a,onChangeMenu:t}}});ca.render=X,ca.__scopeId="data-v-ac067254";var ra=ca,sa=(0,t.HX)("data-v-2f71c150");(0,t.dD)("data-v-2f71c150");var ua={class:"book-box"};(0,t.Cn)();var la=sa((function(a,n,e,o,i,c){var r=(0,t.up)("BookItem");return(0,t.wg)(),(0,t.j4)("div",ua,[((0,t.wg)(!0),(0,t.j4)(t.HY,null,(0,t.Ko)(a.bookList,(function(a){return(0,t.wg)(),(0,t.j4)(r,{key:a,item:a},null,8,["item"])})),128))])})),va=(0,t.aZ)({name:"Books",components:{BookItem:Q},setup:function(){var a=E.books;return(0,t.bv)((function(){var a=setTimeout((function(){clearTimeout(a)}),1e4)})),{bookList:a}}});va.render=la,va.__scopeId="data-v-2f71c150";var da=(0,t.HX)("data-v-5282199a");(0,t.dD)("data-v-5282199a");var ma={class:"container"},pa=(0,t.uE)('<img class="top-img" src="static/about.jpg" data-v-5282199a><div class="home-item" data-v-5282199a><div class="item-img" style="background-image:url(&#39;static/img/banner04.jpg&#39;);" data-v-5282199a></div><h1 class="item-text" data-v-5282199a> 上海青岚机器人有限公司是一家以人工智能技术为核心，以创新为导向的服务机器人应用场景解决方案提供商，致力于将先进技术与行业需求快速结合，为客户提供可靠稳定的、高性价比解决方案。 </h1></div><div class="home-item" data-v-5282199a><h1 class="item-text" data-v-5282199a> 致力于打造共享服务机器人运营平台，推广普及服务机器人的应用，让机器人这个智能新工具助力产业升级、为更多行业创新发展贡献价值。 </h1><div class="item-img" style="background-image:url(&#39;static/img/banner05.jpg&#39;);" data-v-5282199a></div></div><div class="home-item" data-v-5282199a><div class="item-img" style="background-image:url(&#39;static/img/banner06.jpg&#39;);" data-v-5282199a></div><div data-v-5282199a><h1 class="item-text" data-v-5282199a> 在人机信息交互、物品递送、巡检、清洁消杀等需求环境下，结合具体使用场景提供针对性机器人产品及服务。为客户提供具体场景落地应用和灵活的商业合作模式。 </h1><h1 class="item-text" data-v-5282199a> 我们致力于把机器人应用到不利于人类身心健康的、不利于创新发展的工作环境中，去代替人们承担更多简单重复的工作，让每个人都有追求梦想、实现价值的机会，为人类的未来创造更大价值！ </h1></div></div><h1 data-v-5282199a></h1><h1 data-v-5282199a>上海青岚机器人有限公司</h1><h1 data-v-5282199a>公司地址：上海市浦东新区11号线秀沿路附近</h1><h1 data-v-5282199a>业务联系电话：18101979508（张经理）</h1><h1 data-v-5282199a></h1><h1 data-v-5282199a>系统升级维护中...！</h1><h1 data-v-5282199a></h1>',11);(0,t.Cn)();var ha=da((function(a,n,e,o,i,c){return(0,t.wg)(),(0,t.j4)("div",ma,[pa])})),ga=(0,t.aZ)({name:"About",components:{},setup:function(){var a="",n="";return{wxchat:a,alipay:n}}});ga.render=ha,ga.__scopeId="data-v-5282199a";var fa=ga,ba=(0,b.p7)({history:(0,b.r5)(),routes:[{path:"/",redirect:"/home",component:w},{path:"/home",name:"Home",component:L},{path:"/example",name:"Example",component:ra},{path:"/about",name:"About",component:fa},{path:"/account",name:"Account",component:W}]}),ka=(0,t.ri)(w);ka.use(ba),k.init(ba),ka.mount("#app")}},n={};function e(t){if(n[t])return n[t].exports;var o=n[t]={exports:{}};return a[t](o,o.exports,e),o.exports}e.m=a,e.x=function(){},function(){e.d=function(a,n){for(var t in n)e.o(n,t)&&!e.o(a,t)&&Object.defineProperty(a,t,{enumerable:!0,get:n[t]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){e.o=function(a,n){return Object.prototype.hasOwnProperty.call(a,n)}}(),function(){var a={143:0},n=[[857,998]],t=function(){},o=function(o,i){for(var c,r,s=i[0],u=i[1],l=i[2],v=i[3],d=0,m=[];d<s.length;d++)r=s[d],e.o(a,r)&&a[r]&&m.push(a[r][0]),a[r]=0;for(c in u)e.o(u,c)&&(e.m[c]=u[c]);l&&l(e),o&&o(i);while(m.length)m.shift()();return v&&n.push.apply(n,v),t()},i=self["webpackChunkmystep"]=self["webpackChunkmystep"]||[];function c(){for(var t,o=0;o<n.length;o++){for(var i=n[o],c=!0,r=1;r<i.length;r++){var s=i[r];0!==a[s]&&(c=!1)}c&&(n.splice(o--,1),t=e(e.s=i[0]))}return 0===n.length&&(e.x(),e.x=function(){}),t}i.forEach(o.bind(null,0)),i.push=o.bind(null,i.push.bind(i));var r=e.x;e.x=function(){return e.x=r||function(){},(t=c)()}}(),e.x()})();