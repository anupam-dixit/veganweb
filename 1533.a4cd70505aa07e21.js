"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1533],{1533:(O,s,t)=>{t.r(s),t.d(s,{MenuPageModule:()=>Z});var u=t(4755),r=t(5030),a=t(5562),g=t(8695),m=t(655),c=t(4766),h=t(6191),n=t(2504),p=t(9477);const M=function(o){return["/menu/profile",o]},C=[{path:"",component:(()=>{class o{constructor(i,e,d){this.router=i,this.api=e,this.loadingCtrl=d,this.userData=JSON.parse(localStorage.getItem("userData")||"{}"),this.$=$,this.environment=c.N,this.Env=h.X}ngOnInit(){const i=this;$(document).ready(function(){localStorage.getItem("eula")||i.eula(),$("#basicExampleModal").on("hide.bs.modal",function(){}),$("#basicExampleModal").on("show.bs.modal",function(){}),setTimeout(function(){new google.translate.TranslateElement({pageLanguage:"en"},"google_translate_element"),$(".skiptranslate").each(function(){$(this).css("visibility","hidden !important")})},200)})}logout(){localStorage.clear(),this.router.navigate(["/login"])}launchModal(){$("#basicExampleModal").modal("show")}eula(){return(0,m.mG)(this,void 0,void 0,function*(){const i=yield this.loadingCtrl.create({message:"Loading..."});yield i.present(),this.api.eula().subscribe(e=>{i.dismiss(),this.eulaData=e.page_details[0].page_content,$("#eulaModal").modal("show")},e=>{i.dismiss()})})}accept(){localStorage.setItem("eula",(new Date).toString()),$("#eulaModal").modal("hide")}}return o.\u0275fac=function(i){return new(i||o)(n.Y36(g.F0),n.Y36(p.s),n.Y36(a.HT))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-menu"]],decls:79,vars:10,consts:[["contentId","main-content"],[2,"outline","0",3,"autoHide"],[1,"sidmenu_bg"],[2,"height","115px","width","100%",3,"src"],[1,"sidmenu_user"],[2,"padding","6px 0 0"],[3,"routerLink"],["size","4",2,"display","flex"],[1,"user_icon"],[3,"src","error"],["size","8"],[1,"user_name"],[1,"ion-padding"],["routerLink","/menu/dashboard"],["routerLink","/menu/blog"],["routerLink","/menu/news"],["routerLink","/menu/events"],["routerLink","/menu/recipes"],["routerLink","/menu/recommendation"],["routerLink","/menu/contact"],["routerLink","/menu/cookies"],["routerLink","/menu/advertising"],["routerLink","/menu/privacy"],[3,"click"],["routerLink","/menu/about"],["height","30","width","30","src","https://cdn-icons-png.flaticon.com/128/2014/2014826.png",1,"img-fluid","mr-3"],["id","main-content"],["id","basicExampleModal","tabindex","-1","role","dialog","aria-labelledby","exampleModalLabel","aria-hidden","true","data-backdrop","false",1,"modal","fade"],["role","document",1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title"],["type","button","data-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[1,"modal-body"],["id","google_translate_element"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-secondary"],["id","eulaModal","tabindex","-1","aria-labelledby","eulaModalLabel","aria-hidden","true","data-backdrop","false",1,"modal","fade"],[1,"modal-dialog"],["id","eulaModalLabel",1,"modal-title"],[1,"text-secondary"],[3,"innerHTML"],[1,"btn","btn-secondary",3,"click"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(i,e){1&i&&(n.TgZ(0,"ion-split-pane",0)(1,"ion-menu",0)(2,"ion-header")(3,"ion-menu-toggle",1)(4,"div",2)(5,"div"),n._UZ(6,"img",3),n.qZA(),n.TgZ(7,"div",4)(8,"ion-grid",5)(9,"ion-row",6)(10,"ion-col",7)(11,"div",8)(12,"img",9),n.NdJ("error",function(){return e.Env.no_img}),n.qZA()()(),n.TgZ(13,"ion-col",10)(14,"div",11)(15,"p"),n._uU(16,"Welcome"),n.qZA(),n.TgZ(17,"h2"),n._uU(18),n.qZA()()()()()()()()(),n.TgZ(19,"ion-content",12)(20,"ion-menu-toggle",1)(21,"ion-list")(22,"ion-item",13),n._uU(23,"Vegan log"),n.qZA(),n.TgZ(24,"ion-item",14),n._uU(25,"Blog"),n.qZA(),n.TgZ(26,"ion-item",15),n._uU(27,"News"),n.qZA(),n.TgZ(28,"ion-item",16),n._uU(29,"Event"),n.qZA(),n.TgZ(30,"ion-item",17),n._uU(31,"Recipe"),n.qZA(),n.TgZ(32,"ion-item",18),n._uU(33,"Recommendation"),n.qZA(),n.TgZ(34,"ion-item",19),n._uU(35,"Contact Us"),n.qZA(),n.TgZ(36,"ion-item",20),n._uU(37,"Cookies"),n.qZA(),n.TgZ(38,"ion-item",21),n._uU(39,"Advertising"),n.qZA(),n.TgZ(40,"ion-item",22),n._uU(41,"Privacy"),n.qZA(),n.TgZ(42,"ion-item",23),n.NdJ("click",function(){return e.logout()}),n._uU(43,"Logout"),n.qZA(),n.TgZ(44,"ion-item",24),n._uU(45,"About Us"),n.qZA(),n.TgZ(46,"ion-item",23),n.NdJ("click",function(){return e.launchModal()}),n._UZ(47,"img",25),n._uU(48," Language\n"),n.qZA()()()()(),n._UZ(49,"ion-router-outlet",26),n.qZA(),n.TgZ(50,"div",27)(51,"div",28)(52,"div",29)(53,"div",30)(54,"h5",31),n._uU(55,"Select Lanaguage"),n.qZA(),n.TgZ(56,"button",32)(57,"span",33),n._uU(58,"\xd7"),n.qZA()()(),n.TgZ(59,"div",34),n._UZ(60,"div",35),n.qZA(),n.TgZ(61,"div",36)(62,"button",37),n._uU(63,"Close"),n.qZA()()()()(),n.TgZ(64,"div",38)(65,"div",39)(66,"div",29)(67,"div",30)(68,"h5",40),n._uU(69,"EULA"),n.qZA()(),n.TgZ(70,"div",34)(71,"h5",41),n._uU(72,"Please read and accept to proceed."),n.qZA(),n._UZ(73,"div",42),n.qZA(),n.TgZ(74,"div",36)(75,"button",43),n.NdJ("click",function(){return e.logout()}),n._uU(76,"Cancel"),n.qZA(),n.TgZ(77,"button",44),n.NdJ("click",function(){return e.accept()}),n._uU(78,"Agree"),n.qZA()()()()()),2&i&&(n.xp6(3),n.Q6J("autoHide",!1),n.xp6(3),n.s9C("src",e.environment.liveDomain+(null==e.userData?null:e.userData.cover_image),n.LSH),n.xp6(3),n.Q6J("routerLink",n.VKq(8,M,e.userData.id)),n.xp6(3),n.s9C("src",null!=e.userData&&e.userData.profile_image?e.environment.liveDomain+(null==e.userData?null:e.userData.profile_image):e.Env.no_img,n.LSH),n.xp6(6),n.AsE("",e.userData.name," ",e.userData.last_name,""),n.xp6(2),n.Q6J("autoHide",!1),n.xp6(53),n.Q6J("innerHTML",e.eulaData,n.oJD))},dependencies:[a.wI,a.W2,a.jY,a.Gu,a.Ie,a.q_,a.z0,a.zc,a.Nd,a.jI,a.jP,a.YI,g.rH],styles:["iframe.goog-te-banner-frame[_ngcontent-%COMP%]{display:none!important}body[_ngcontent-%COMP%]{position:static!important;top:0px!important}.goog-logo-link[_ngcontent-%COMP%]{display:none!important}.goog-te-gadget[_ngcontent-%COMP%]{color:transparent!important}.goog-te-banner-frame[_ngcontent-%COMP%]{top:initial;bottom:0}.sidmenu_user[_ngcontent-%COMP%]{position:absolute;left:0;right:0;top:0;background:var(--primary_medium);opacity:.9;padding:11px}.header-md[_ngcontent-%COMP%]:after{height:9px}.user_icon[_ngcontent-%COMP%]{width:100%;float:left}.user_icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:78px;height:78px;border-radius:50%;border:3px solid #fff}.user_name[_ngcontent-%COMP%]{width:100%;float:left;margin:8% 0 0}.user_name[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#fff;font-size:15px;margin:0;padding:0;text-transform:capitalize;font-weight:700}.user_name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff;margin:0;padding:0;font-size:14px}.submenu[_ngcontent-%COMP%]{--ion-background-color:#ffdae8;color:#042946!important}.logout_bx[_ngcontent-%COMP%]{background-color:var(--ion-color-main);color:#fff;width:100%}.logout_bx[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:0}.logout_bx[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0;padding:10px;font-size:16px;color:var(ion-color-main-contrast);width:50%;display:inline-block}.logout_bx[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:18px;line-height:normal;padding:0;vertical-align:middle}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{font-size:15px;float:left;width:100%;color:#4b4b4b;font-family:Roboto;--padding-start:0px}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:2px 9px 0 16px}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:22px}.submenu[_ngcontent-%COMP%]{--ion-background-color: #ffdae8;color:#042946!important;--padding-start: 0 !important}.submenu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:2px 9px 0 38px!important}"]}),o})(),children:[{path:"",loadChildren:()=>t.e(9913).then(t.bind(t,9913)).then(o=>o.TabsPageModule)},{path:"profile/:id",loadChildren:()=>Promise.all([t.e(8592),t.e(2520)]).then(t.bind(t,2520)).then(o=>o.ProfilePageModule)},{path:"news",loadChildren:()=>t.e(301).then(t.bind(t,301)).then(o=>o.NewsPageModule)},{path:"product",loadChildren:()=>t.e(4998).then(t.bind(t,4998)).then(o=>o.ProductPageModule)},{path:"recipes",loadChildren:()=>t.e(1693).then(t.bind(t,1693)).then(o=>o.RecipesPageModule)},{path:"restaurants",loadChildren:()=>Promise.all([t.e(6018),t.e(8592),t.e(8685)]).then(t.bind(t,8685)).then(o=>o.RestaurantsPageModule)},{path:"about",loadChildren:()=>t.e(4742).then(t.bind(t,3397)).then(o=>o.AboutPageModule)},{path:"public-profile/:id",loadChildren:()=>t.e(1464).then(t.bind(t,1464)).then(o=>o.PublicProfilePageModule)},{path:"cook",loadChildren:()=>t.e(1335).then(t.bind(t,1335)).then(o=>o.CookPageModule)},{path:"friendrequests",loadChildren:()=>t.e(1076).then(t.bind(t,1076)).then(o=>o.FriendrequestsPageModule)},{path:"friendslist/:id",loadChildren:()=>t.e(1255).then(t.bind(t,1255)).then(o=>o.FriendslistPageModule)},{path:"share-your-thoughts",canActivate:[t(3084).n],loadChildren:()=>Promise.all([t.e(6018),t.e(3406)]).then(t.bind(t,3406)).then(o=>o.ShareYourThoughtsPageModule)},{path:"cookies",loadChildren:()=>t.e(1137).then(t.bind(t,1137)).then(o=>o.CookiesPageModule)},{path:"privacy",loadChildren:()=>t.e(6817).then(t.bind(t,6817)).then(o=>o.PrivacyPageModule)},{path:"contact",loadChildren:()=>t.e(5421).then(t.bind(t,5421)).then(o=>o.ContactPageModule)},{path:"advertising",loadChildren:()=>t.e(5508).then(t.bind(t,5508)).then(o=>o.AdvertisingPageModule)}]}];let v=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[g.Bz.forChild(C),g.Bz]}),o})(),Z=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[u.ez,r.u5,a.Pc,v]}),o})()}}]);