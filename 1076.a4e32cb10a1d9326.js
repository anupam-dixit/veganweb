"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1076],{1076:(P,m,o)=>{o.r(m),o.d(m,{FriendrequestsPageModule:()=>M});var g=o(4755),h=o(5030),r=o(5562),u=o(8695),p=o(655),c=o(6191),t=o(2504),a=o(9477),f=o(227);const v=function(n){return["/menu/public-profile",n]};function C(n,l){if(1&n){const e=t.EpF();t.TgZ(0,"li")(1,"a",15),t._UZ(2,"img",16),t.TgZ(3,"h3"),t._uU(4),t.qZA()(),t.TgZ(5,"span"),t._uU(6),t.qZA(),t.TgZ(7,"div",17)(8,"a",18),t.NdJ("click",function(){const d=t.CHM(e).$implicit,_=t.oxw();return t.KtG(_.friendReqestSend(d.id))}),t._uU(9,"Confirm"),t.qZA(),t.TgZ(10,"a",19),t.NdJ("click",function(){const d=t.CHM(e).$implicit,_=t.oxw();return t.KtG(_.friendRequestDelete(d.id))}),t._uU(11,"Delete"),t.qZA()()()}if(2&n){const e=l.$implicit,i=t.oxw();t.xp6(1),t.Q6J("routerLink",t.VKq(4,v,null==e?null:e.id)),t.xp6(1),t.Q6J("src",e.profile_image?i.Env.BasePoint+e.profile_image:i.Env.BasePoint+"public/frontend/images/f_icon_user.jpg",t.LSH),t.xp6(2),t.hij(" ",e.name," "),t.xp6(2),t.hij("",e.mutual_friend_count," mutual friend")}}const x=[{path:"",component:(()=>{class n{constructor(e,i,s,d){this.api=e,this.router=i,this.other=s,this.loadingCtrl=d,this.Env=c.X}ngOnInit(){this.other.notificationCount.subscribe(e=>{this.notificationCount=e}),this.userFriendList()}presentLoading(e){return(0,p.mG)(this,void 0,void 0,function*(){return yield e.present()})}userFriendList(){var e;const i=parseInt(null===(e=JSON.parse(localStorage.getItem("userData")))||void 0===e?void 0:e.id);this.api.friendReqestList(i).subscribe(s=>{this.requestlist=s,console.log(s,"ppp")})}friendReqestSend(e){var i;return(0,p.mG)(this,void 0,void 0,function*(){const s=yield this.loadingCtrl.create({message:"Loading..."});this.presentLoading(s);const d={user_id:parseInt(null===(i=JSON.parse(localStorage.getItem("userData")))||void 0===i?void 0:i.id),fromuserId:e};this.api.friendRequestConfirm(d).subscribe(_=>{s.dismiss(),this.userFriendList()})})}friendRequestDelete(e){var i;return(0,p.mG)(this,void 0,void 0,function*(){const s=yield this.loadingCtrl.create({message:"Loading..."});this.presentLoading(s);const d={user_id:parseInt(null===(i=JSON.parse(localStorage.getItem("userData")))||void 0===i?void 0:i.id),fromuserId:e};this.api.friendRequestDelete(d).subscribe(_=>{s.dismiss(),this.userFriendList()})})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(a.s),t.Y36(u.F0),t.Y36(f.m),t.Y36(r.HT))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-friendrequests"]],decls:21,vars:2,consts:[[1,"new-background-color"],["slot","start"],["name","menu",2,"color","#fff","font-size","30px"],[1,"title",2,"color","#fff"],["slot","end"],["color","sec","routerLink","/search-result"],["src","/assets/icon/search.png",2,"width","22px"],["color","sec","routerLink","/chat-list"],["src","/assets/icon/chat.png",2,"width","24px"],["color","sec","routerLink","/notifications"],["src","/assets/icon/bell.png",2,"width","24px"],[1,"setbegde"],[1,"post_rightside"],[1,"friend_requests_page"],[4,"ngFor","ngForOf"],[3,"routerLink"],[3,"src"],[1,"freand_type"],[3,"click"],[1,"delete_friends",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1)(3,"ion-menu-button",1),t._UZ(4,"ion-icon",2),t.qZA()(),t.TgZ(5,"ion-title",3),t._uU(6,"Requests"),t.qZA(),t.TgZ(7,"ion-buttons",4)(8,"ion-button",5),t._UZ(9,"img",6),t.qZA(),t.TgZ(10,"ion-button",7),t._UZ(11,"img",8),t.qZA(),t.TgZ(12,"ion-button",9),t._UZ(13,"img",10),t.TgZ(14,"ion-badge",11),t._uU(15),t.qZA()()()()(),t.TgZ(16,"ion-content")(17,"div",12)(18,"div",13)(19,"ul"),t.YNc(20,C,12,6,"li",14),t.qZA()()()()),2&e&&(t.xp6(15),t.Oqu(i.notificationCount),t.xp6(5),t.Q6J("ngForOf",null==i.requestlist?null:i.requestlist.friend_request_received_by_me))},dependencies:[g.sg,r.yp,r.YG,r.Sm,r.W2,r.Gu,r.gu,r.fG,r.wd,r.sr,r.YI,r.Fo,u.rH],styles:[".friend_requests_page[_ngcontent-%COMP%]{width:100%;float:left}.friend_requests_page[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:0}.friend_requests_page[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:block;cursor:pointer;float:left;box-shadow:#63636333 0 2px 8px;width:47.2%;text-align:center;border-radius:5px;background:#fff;margin:5px;padding:0 0 4px}.friend_requests_page[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:170px;width:100%;background-size:cover;background-position:top;object-fit:cover;border-radius:3px;object-position:center top}.friend_requests_page[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:14px;padding:5px 0 0;text-align:center;margin:0;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;font-weight:400;text-transform:capitalize;display:-webkit-box}.friend_requests_page[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#6f6f6f;font-size:12px;display:block;padding:0 0 5px}.freand_type[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:6px 10px;display:block;cursor:pointer;background:#70cac8;width:47%;text-align:center;border-radius:3px;text-decoration:none;color:#fff;float:left;font-size:14px;margin:0 2px}.freand_type[_ngcontent-%COMP%]   a.delete_friends[_ngcontent-%COMP%]{color:#000!important;background:#e4e6eb!important}"]}),n})()}];let O=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.Bz.forChild(x),u.Bz]}),n})(),M=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[g.ez,h.u5,r.Pc,O]}),n})()},227:(P,m,o)=>{o.d(m,{m:()=>p});var g=o(655),h=o(7579),r=o(2504),u=o(5562);let p=(()=>{class c{constructor(a,f){this.toastController=a,this.loadingCtrl=f,this.nCount=new h.x,this.notificationCount=this.nCount.asObservable()}presentToast(a,f,v){return(0,g.mG)(this,void 0,void 0,function*(){yield(yield this.toastController.create({message:a,duration:2500,icon:f,color:v})).present()})}showLoading(a){return(0,g.mG)(this,void 0,void 0,function*(){return yield this.loadingCtrl.create({message:a})})}setnotificationCount(a){this.nCount.next(a)}}return c.\u0275fac=function(a){return new(a||c)(r.LFG(u.yF),r.LFG(u.HT))},c.\u0275prov=r.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()}}]);