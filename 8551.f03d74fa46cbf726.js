"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8551],{8551:(x,h,l)=>{l.r(h),l.d(h,{BlogDetailsPageModule:()=>w});var m=l(4755),s=l(5030),i=l(5562),d=l(8695),f=l(655),c=l(6191),_=l(4539),g=l(3730),t=l(2504),b=l(9477),C=l(227);const v=function(e){return["/menu/public-profile",e]};function P(e,u){if(1&e&&(t.TgZ(0,"ul",43)(1,"li")(2,"div",44),t._UZ(3,"img",13),t.qZA(),t.TgZ(4,"div",45)(5,"h2")(6,"a",46),t._uU(7),t.qZA()(),t.TgZ(8,"p",47),t._uU(9),t.qZA(),t.TgZ(10,"span",48),t._uU(11),t.qZA()()()()),2&e){const n=u.$implicit,o=t.oxw();t.xp6(3),t.s9C("src",o.Env.BasePoint+(null==n?null:n.users_profile_image),t.LSH),t.xp6(3),t.Q6J("routerLink",t.VKq(5,v,null==n?null:n.commented_by)),t.xp6(1),t.Oqu(null==n?null:n.users_name),t.xp6(2),t.Oqu(null==n?null:n.message),t.xp6(2),t.hij("on ",null==n?null:n.created_at,"")}}const M=[{path:"",component:(()=>{class e{constructor(n,o,r,p,a){this.api=n,this.router=o,this.aroute=r,this.other=p,this.loadingCtrl=a,this.form={post_id:null,user_id:null,message:null},this.Env=c.X}ngOnInit(){this.other.notificationCount.subscribe(n=>{this.notificationCount=n}),this.aroute.params.subscribe(n=>{this.blogDetails(n.id),this.blogId=n.id,console.log(n,"=00")})}blogDetails(n){this.api.blogDetails(n).subscribe(o=>{this.blogData=o,console.log(o)})}presentLoading(n){return(0,f.mG)(this,void 0,void 0,function*(){return yield n.present()})}addComment(){var n;return(0,f.mG)(this,void 0,void 0,function*(){const o=yield this.loadingCtrl.create({message:"Loading..."});this.presentLoading(o),this.form.user_id=null===(n=JSON.parse(localStorage.getItem("userData")))||void 0===n?void 0:n.id,this.form.post_id=this.blogId,this.api.addBlogDetailComment(this.form).subscribe(r=>{this.blogDetails(this.blogId),o.dismiss(),this.other.presentToast("Comment posted successful !!","checkmark-circle-outline","success")},r=>{o.dismiss(),this.other.presentToast("Something went Wrong!!","information-circle-outline","danger")})})}report(n,o){var r;return(0,f.mG)(this,void 0,void 0,function*(){const p=yield this.loadingCtrl.create({message:"Loading..."});this.presentLoading(p),this.api.post(_.H.report.create,{target_type:n,target_id:o,created_by:null===(r=g.g.auth.get())||void 0===r?void 0:r.id}).subscribe(a=>{this.other.presentToast(null==a?void 0:a.message,"information-circle-outline",null!=a&&a.status?"success":"danger"),p.dismiss()})})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(b.s),t.Y36(d.F0),t.Y36(d.gz),t.Y36(C.m),t.Y36(i.HT))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-blog-details"]],decls:68,vars:16,consts:[[1,"new-background-color"],["slot","start",2,"color","#fff"],["slot","start","size","small",1,"title",2,"color","#fff"],["slot","end"],["color","sec","routerLink","/search-result"],["src","/assets/icon/search.png",2,"width","22px"],["color","sec","routerLink","/chat-list"],["src","/assets/icon/chat.png",2,"width","24px"],["color","sec","routerLink","/notifications"],["src","/assets/icon/bell.png",2,"width","24px"],[1,"setbegde"],[1,"blog_details_page"],[1,"blogimages"],[3,"src"],[1,"blog_titel_btm"],[1,"btm_user_and_date"],["size","6"],[1,"user_icon",3,"routerLink"],["alt","",1,"user-image",3,"src"],[1,"blog_dateright"],["src","/assets/icon/dateca.png"],[1,"blog_allcon"],[3,"innerHtml"],[1,"row","mt-3","mb-4"],[1,"col"],["role","form",1,"form-inline",3,"ngSubmit"],["f","ngForm"],[1,"form-group"],["id","message","name","message","placeholder","Enter your comment here...","required","",1,"form-control","comment_here",3,"ngModel","ngModelChange"],["message","ngModel"],[1,"row","ion-align-items-center"],[1,"col","ion-text-left"],[1,"dropdown"],["type","button","id","ddw_vegan_log_2","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false",1,"btn","btn-sm","dropdown-toggle","btn-warning"],["aria-labelledby","ddw_vegan_log_2",1,"dropdown-menu"],[1,"dropdown-item",3,"click"],[1,"col","ion-text-right"],["type","submit",1,"post_comment"],[1,"blog_comment"],[1,"detailBox"],[1,"titleBox"],[1,"actionBox"],["class","commentList",4,"ngFor","ngForOf"],[1,"commentList"],[1,"commenterImage"],[1,"commentText"],[3,"routerLink"],[1,""],[1,"date","sub-text"]],template:function(n,o){if(1&n){const r=t.EpF();t.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),t._UZ(3,"ion-back-button",1),t.qZA(),t.TgZ(4,"ion-title",2),t._uU(5,"Blog"),t.qZA(),t.TgZ(6,"ion-buttons",3)(7,"ion-button",4),t._UZ(8,"img",5),t.qZA(),t.TgZ(9,"ion-button",6),t._UZ(10,"img",7),t.qZA(),t.TgZ(11,"ion-button",8),t._UZ(12,"img",9),t.TgZ(13,"ion-badge",10),t._uU(14),t.qZA()()()()(),t.TgZ(15,"ion-content")(16,"div",11)(17,"div",12),t._UZ(18,"img",13),t.TgZ(19,"div",14)(20,"h3"),t._uU(21),t.qZA(),t.TgZ(22,"h2"),t._uU(23),t.qZA(),t.TgZ(24,"div",15)(25,"ion-grid")(26,"ion-row")(27,"ion-col",16)(28,"div",17),t._UZ(29,"img",18),t.TgZ(30,"span"),t._uU(31),t.qZA()()(),t.TgZ(32,"ion-col",16)(33,"div",19),t._UZ(34,"img",20),t.TgZ(35,"span"),t._uU(36),t.ALo(37,"date"),t.qZA()()()()()()()(),t.TgZ(38,"div",21),t._UZ(39,"p",22),t.TgZ(40,"div",23)(41,"div",24)(42,"form",25,26),t.NdJ("ngSubmit",function(){t.CHM(r);const a=t.MAs(43);return t.KtG(a.form.valid&&o.addComment())}),t.TgZ(44,"div",27)(45,"h2"),t._uU(46,"LEAVE A REPLY "),t.qZA(),t.TgZ(47,"ion-textarea",28,29),t.NdJ("ngModelChange",function(a){return o.form.message=a}),t.qZA()(),t.TgZ(49,"div",27)(50,"div",30)(51,"div",31)(52,"div",32)(53,"button",33),t._uU(54," option "),t.qZA(),t.TgZ(55,"div",34)(56,"a",35),t.NdJ("click",function(){return o.report("blog",o.blogId)}),t._uU(57,"Report"),t.qZA()()()(),t.TgZ(58,"div",36)(59,"button",37),t._uU(60,"Post Comment"),t.qZA()()()()()()(),t.TgZ(61,"div",38)(62,"div",39)(63,"div",40)(64,"label"),t._uU(65,"Comment "),t.qZA()(),t.TgZ(66,"div",41),t.YNc(67,P,12,7,"ul",42),t.qZA()()()()()()}2&n&&(t.xp6(14),t.Oqu(o.notificationCount),t.xp6(4),t.s9C("src",o.Env.BasePoint+(null==o.blogData?null:o.blogData.blog_details.image),t.LSH),t.xp6(3),t.Oqu(null==o.blogData?null:o.blogData.blog_details.category_name),t.xp6(2),t.Oqu(null==o.blogData?null:o.blogData.blog_details.title),t.xp6(5),t.Q6J("routerLink",t.VKq(14,v,null==o.blogData||null==o.blogData.blog_details?null:o.blogData.blog_details.posted_by)),t.xp6(1),t.s9C("src",o.Env.BasePoint+(null==o.blogData?null:o.blogData.blog_details.user_profile),t.LSH),t.xp6(2),t.hij("By ",null==o.blogData?null:o.blogData.blog_details.user_name,""),t.xp6(5),t.Oqu(t.xi3(37,11,null==o.blogData?null:o.blogData.blog_details.created_at,"MMM dd, yyyy")),t.xp6(3),t.s9C("innerHtml",null==o.blogData?null:o.blogData.blog_details.content,t.oJD),t.xp6(8),t.Q6J("ngModel",o.form.message),t.xp6(20),t.Q6J("ngForOf",null==o.blogData?null:o.blogData.comment))},dependencies:[m.sg,s._Y,s.JJ,s.JL,s.Q7,s.On,s.F,i.oU,i.yp,i.YG,i.Sm,i.wI,i.W2,i.jY,i.Gu,i.Nd,i.g2,i.wd,i.sr,i.j9,i.cs,i.YI,i.Fo,d.rH,m.uU],styles:['.blog_details_page[_ngcontent-%COMP%]{width:100%;float:left}.blogimages[_ngcontent-%COMP%]{width:100%;float:left;position:relative}.blogimages[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;float:left;height:430px;object-fit:cover;background-position:center;background-size:100%}.blog_text_andtitel[_ngcontent-%COMP%]{position:absolute;left:0;right:0;top:0}.blog_images_topicon[_ngcontent-%COMP%]{width:100%;float:left;padding:10px 0 0}.blog_images_topicon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:13px;float:left;height:auto}.blog_images_topiconright[_ngcontent-%COMP%]{width:100%;float:left;padding:10px 0 0}.blog_images_topiconright[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:17px;float:right;height:auto}.blog_titel_btm[_ngcontent-%COMP%]{width:100%;float:left;padding:10px 0;z-index:9;position:absolute;left:0;bottom:20px}.blog_titel_btm[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:18px;margin:0;padding:0 10px 10px;color:#fff;float:left;width:100%}.blog_titel_btm[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:14px;color:#fff;margin:0;padding:0 10px 10px;width:100%;float:left}.user_icon[_ngcontent-%COMP%], .btm_user_and_date[_ngcontent-%COMP%]{width:100%;float:left}.user_icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px!important;float:left;border-radius:50%;height:30px!important}.user_icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:15px;margin:0;padding:7px 8px 10px;color:#fff;float:left;width:auto}.blog_dateright[_ngcontent-%COMP%]{width:100%;float:left}.blog_dateright[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:24px!important;float:left;height:24px!important}.blog_dateright[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:15px;margin:0;padding:7px 8px 10px;color:#fff;float:left;width:auto}.blogimages[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(0deg,rgba(0,0,0,.7),rgba(0,0,0,.3) 35%,rgba(0,0,0,0) 50%,rgba(0,0,0,0))}.blog_allcon[_ngcontent-%COMP%]{width:100%;float:left;background:#fff;padding:10px 15px;margin-top:-31px;z-index:999;position:relative;border-radius:20px}.blog_allcon[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:100%;float:left;font-size:14px;text-align:justify;padding:0;color:#000;margin:0;line-height:18px}.blog_allcon[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{width:100%;float:left;font-size:16px;text-align:justify;padding:10px 0;color:#000;margin:0}.myblog[_ngcontent-%COMP%]{margin:15px 0;overflow:hidden;border-radius:5px;width:100%;float:left}.myblog[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:125px;object-fit:cover;background-position:center}.myblog[_ngcontent-%COMP%]   .cslide[_ngcontent-%COMP%]{display:flex;width:103%;overflow:auto}.myblog[_ngcontent-%COMP%]   .cslide[_ngcontent-%COMP%]   .cslideinner[_ngcontent-%COMP%]{overflow:hidden;justify-content:center;min-width:270px;border:2px solid #6ec5c3;width:270px;margin:4px 8px 9px 0;border-radius:0;position:relative;box-shadow:0 0 7px 2px #e1e1e33b}.cslideinner[_ngcontent-%COMP%]   .myblog_text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:auto 0 0;width:100%;color:#000;padding:3px 0 0 10px;text-align:left;font-size:14px;font-weight:700;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;line-height:14px;font-weight:400}.cslideinner[_ngcontent-%COMP%]   .myblog_text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;line-height:14px;font-weight:400;padding:2px 6px;margin:0;font-size:10px;text-align:center}.titel_all[_ngcontent-%COMP%]{vertical-align:top;padding:0 0 5px}.titel_all[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{padding:0;margin:0;font-size:16px;color:#000;text-transform:capitalize;text-transform:uppercase}.titel_all[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px;color:#6ec5c3;padding:0;float:right}.myblog_text[_ngcontent-%COMP%]{position:inherit;bottom:0px;width:100%;left:0;z-index:99}']}),e})()}];let O=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.Bz.forChild(M),d.Bz]}),e})(),w=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.ez,s.u5,i.Pc,O]}),e})()},227:(x,h,l)=>{l.d(h,{m:()=>f});var m=l(655),s=l(7579),i=l(2504),d=l(5562);let f=(()=>{class c{constructor(g,t){this.toastController=g,this.loadingCtrl=t,this.nCount=new s.x,this.notificationCount=this.nCount.asObservable()}presentToast(g,t,b){return(0,m.mG)(this,void 0,void 0,function*(){yield(yield this.toastController.create({message:g,duration:2500,icon:t,color:b})).present()})}showLoading(g){return(0,m.mG)(this,void 0,void 0,function*(){return yield this.loadingCtrl.create({message:g})})}setnotificationCount(g){this.nCount.next(g)}}return c.\u0275fac=function(g){return new(g||c)(i.LFG(d.yF),i.LFG(d.HT))},c.\u0275prov=i.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()}}]);