(function(){"use strict";var e={688:function(e,n,a){var i=a(9242),t=a(3396);function o(e,n,a,i,o,s){const r=(0,t.up)("PuzzleNavigation"),l=(0,t.up)("router-view");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(r),(0,t.Wm)(l)],64)}var s=a(7139),r=a.p+"img/logo.2fd84aed.png";const l={class:"navigation"},c={class:"container"},u={class:"navigation__content"},d=(0,t._)("img",{src:r,alt:"logo"},null,-1),m=["id","onClick"],g={class:"navigation-list-mobile-list"},h=["id","onClick"],p={href:"tel: +998 90 980 53 00",class:"navigation-list-mobile-list-link"},v=(0,t.Uk)("   +998 90 980 53 00 "),_=(0,t._)("span",{class:"menu-burger-line"},null,-1),b=(0,t._)("span",{class:"menu-burger-line"},null,-1),z=(0,t._)("span",{class:"menu-burger-line"},null,-1),f=[_,b,z],w={class:"navigation__language"},A={class:"navigation__content-num"},k={class:"navigation__content-language"},L={class:"navigation__content-language"},y={class:"navigation__content-language"};function q(e,n,a,i,o,r){const _=(0,t.up)("router-link"),b=(0,t.up)("font-awesome-icon");return(0,t.wg)(),(0,t.iD)("div",l,[(0,t._)("div",c,[(0,t._)("div",u,[(0,t.Wm)(_,{"aria-label":"",class:"logo",title:"main-page",to:{name:"home",params:{lang:e.$route.params.lang}},onClick:n[0]||(n[0]=e=>r.goToTop())},{default:(0,t.w5)((()=>[d])),_:1},8,["to"]),(0,t._)("div",{class:(0,s.C_)(["navigation__content_item",{show:o.mobileMenu}])},[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(o.NavLinks,((e,n)=>((0,t.wg)(),(0,t.iD)("button",{key:n,class:"navigation__content_item-btn",id:e.id,onClick:n=>r.scrollToSection(e.id)},(0,s.zw)(e.link[r.activeLanguage]),9,m)))),128))],2),(0,t._)("div",{class:(0,s.C_)(["navigation-list-mobile",{active:o.menuOpen}])},[(0,t._)("div",g,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(o.NavLinks,((e,n)=>((0,t.wg)(),(0,t.iD)("button",{class:"navigation-list-btn",key:n,id:e.id,onClick:n=>r.scrollToSection(e.id)},(0,s.zw)(e.link[r.activeLanguage]),9,h)))),128))]),(0,t._)("a",p,[(0,t.Wm)(b,{class:"navigation-list-mobile-list-link-icon",icon:"fa-solid fa-phone"}),v])],2),(0,t._)("button",{class:(0,s.C_)(["menu-burger",{close:o.menuOpen}]),onClick:n[1]||(n[1]=(...e)=>r.openMenu&&r.openMenu(...e))},f,2),(0,t._)("div",w,[(0,t._)("ul",A,[(0,t._)("li",k,[(0,t._)("button",{class:(0,s.C_)(["ru choose",{active:"ru"==r.activeLanguage}]),onClick:n[2]||(n[2]=e=>r.changeLanguage("ru"))}," RUS ",2)]),(0,t._)("li",L,[(0,t._)("button",{class:(0,s.C_)(["en choose",{active:"en"==r.activeLanguage}]),onClick:n[3]||(n[3]=e=>r.changeLanguage("en"))}," ENG ",2)]),(0,t._)("li",y,[(0,t._)("button",{class:(0,s.C_)(["uz choose",{active:"uz"==r.activeLanguage}]),onClick:n[4]||(n[4]=e=>r.changeLanguage("uz"))}," UZB ",2)])])])])])])}var T={data(){return{mobileMenu:!1,opened:!1,mobileCourses:!1,dropDownOpened:!1,viewportWidth:window.innerWidth,menuOpen:!1,choose:!1,NavLinks:[{link:{ru:"Наши услуги",uz:"Xizmatlar",en:"Our services"},id:"#services"},{link:{ru:"O нас",uz:"biz haqimizda",en:"About us"},id:"#about-us"},{link:{ru:"Нам доверяют",uz:"bizga ishonishadi",en:"We are trust"},id:"#trust"},{link:{ru:"Контакты",uz:"Aloqa",en:"Contacts"},id:"#contacts"}]}},components:{},methods:{openMenu(){this.menuOpen=!this.menuOpen},goToTop(){window.scrollTo(0,0)},changeLanguage(e){const n="ru"==e?"":e;this.$router.push({name:this.$route.name,params:{lang:n}});const a="ru"==e||""==e?"ru":e;this.$store.dispatch("selectLanguage",a)},scrollTo(e){this.menuOpen&&(this.menuOpen=!1);const n=document.querySelector(e),a=n.offsetTop-50;let i=window.scrollY;const t=()=>{a>i+.5||a<i-.5?(i-=(i-a)/15,window.scrollTo(0,i),this.timer=setTimeout((()=>{t()}),5)):(window.scrollTo(0,a),o())},o=()=>{clearTimeout(this.timer),window.removeEventListener("wheel",o)};o(),window.addEventListener("wheel",o),t()},scrollToSection(e){"home"!=this.$route.name?this.$router.push("/").then((()=>{setTimeout((()=>{this.scrollTo(e)}),300)})):this.scrollTo(e)}},computed:{activeLanguage(){return this.$store.getters.getLanguage}},watch:{menuOpen(){this.menuOpen?document.body.classList.add("block"):document.body.classList.remove("block")}}},M=a(89);const C=(0,M.Z)(T,[["render",q]]);var P=C,D={components:{PuzzleNavigation:P}};const I=(0,M.Z)(D,[["render",o]]);var S=I,N=a(678);function x(e,n,a,i,o,s){const r=(0,t.up)("PuzzleMain"),l=(0,t.up)("PuzzleServices"),c=(0,t.up)("PuzzlePartnership"),u=(0,t.up)("PuzzleAbout"),d=(0,t.up)("PuzzleProject"),m=(0,t.up)("PuzzleCount"),g=(0,t.up)("PuzzleQuestion"),h=(0,t.up)("PuzzleFooter");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(r),(0,t.Wm)(l),(0,t.Wm)(c),(0,t.Wm)(u),(0,t.Wm)(d),(0,t.Wm)(m),(0,t.Wm)(g),(0,t.Wm)(h)],64)}var U=a.p+"media/bg.997c5f04.mp4",E=a.p+"media/bgMob.5d765090.mp4";const O={class:"header"},Z=(0,t._)("video",{class:"preview-video",autoplay:"autoplay",loop:!0,playsinline:"",src:U,muted:"muted"},null,-1),B=(0,t._)("video",{class:"preview-videoMob",autoplay:"autoplay",loop:!0,playsinline:"",src:E,muted:"muted"},null,-1),H={class:"container"},R={class:"header__content"},j={class:"header__content-info"},Y={class:"header__content-info-title"},W=["innerHTML"],K=["innerHTML"];function G(e,n,a,i,o,r){const l=(0,t.up)("font-awesome-icon"),c=(0,t.up)("PuzzleModal");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("div",O,[Z,B,(0,t._)("div",H,[(0,t._)("div",R,[(0,t._)("div",j,[(0,t._)("h1",Y,(0,s.zw)(o.title[r.activeLanguage]),1),(0,t._)("p",{class:"header__content-info-descr",innerHTML:o.descr[r.activeLanguage]},null,8,W),(0,t._)("p",{class:"header__content-info-descrMob",innerHTML:o.descrMob[r.activeLanguage]},null,8,K),(0,t._)("button",{class:"header__content-info-btn",onClick:n[0]||(n[0]=(...e)=>r.openModal&&r.openModal(...e))},[(0,t.Uk)((0,s.zw)(o.btn[r.activeLanguage])+" ",1),(0,t.Wm)(l,{class:"icon",icon:"fa-solid fa-circle-arrow-right"})])])])])]),(0,t.Wm)(c,{show:o.show,onClose:r.closeModal},null,8,["show","onClose"])],64)}const F={class:"modal__content-title"},Q=["innerHTML"],V={class:"modal__content-form"},X=["placeholder"],J=["placeholder"],$={class:"modal-btn"},ee={key:2,class:"close-modal"},ne={class:"modal__content-title"},ae=["innerHTML"];function ie(e,n,a,o,r,l){return(0,t.wg)(),(0,t.j4)(i.uT,{name:"slide-fade"},{default:(0,t.w5)((()=>[a.show?((0,t.wg)(),(0,t.iD)("div",{key:0,class:"modal",onClick:n[10]||(n[10]=(0,i.iM)(((...e)=>l.closeModal&&l.closeModal(...e)),["stop"]))},[(0,t._)("div",{class:"modal__content",onClick:n[9]||(n[9]=(0,i.iM)((()=>{}),["stop"]))},[r.submitted?(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)("span",{key:0,class:"modal__close",onClick:n[0]||(n[0]=(...e)=>l.closeModal&&l.closeModal(...e))},"×")),r.submitted?((0,t.wg)(),(0,t.iD)("div",ee,[(0,t._)("div",ne,(0,s.zw)(r.accept[l.activeLanguage]),1),(0,t._)("div",{class:"modal__content-descr",innerHTML:r.acceptDescr[l.activeLanguage]},null,8,ae)])):((0,t.wg)(),(0,t.iD)(t.HY,{key:1},[(0,t._)("h6",F,(0,s.zw)(r.title[l.activeLanguage]),1),(0,t._)("p",{class:"modal__content-descr",innerHTML:r.descr[l.activeLanguage]},null,8,Q),(0,t._)("div",V,[(0,t._)("form",{id:"reg-course",class:"modal__form",onSubmit:[n[7]||(n[7]=(0,i.iM)((()=>{}),["prevent"])),n[8]||(n[8]=(...e)=>l.sendFormData&&l.sendFormData(...e))]},[(0,t.wy)((0,t._)("input",{type:"text",placeholder:r.placeholder[l.activeLanguage],name:"modal-name",class:"form__input crm-form__input",required:"",autocomplete:"off","onUpdate:modelValue":n[1]||(n[1]=e=>r.modalName=e)},null,8,X),[[i.nr,r.modalName]]),(0,t.wy)((0,t._)("input",{type:"tel",placeholder:r.placeholder1[l.activeLanguage],name:"modal-tel",class:"form__input crm-form__input hidden__phone",maxlength:"17","onUpdate:modelValue":n[2]||(n[2]=e=>r.modalPhone=e),onInput:n[3]||(n[3]=(...e)=>l.inputNumber&&l.inputNumber(...e)),onFocus:n[4]||(n[4]=(...e)=>l.focusNumber&&l.focusNumber(...e)),onBlur:n[5]||(n[5]=(...e)=>l.blurNumber&&l.blurNumber(...e)),required:""},null,40,J),[[i.nr,r.modalPhone]]),(0,t.wy)((0,t._)("input",{type:"text",placeholder:"Telegram @username",name:"modal-name",class:"form__input crm-form__input hidden__phone","onUpdate:modelValue":n[6]||(n[6]=e=>r.modalUserName=e)},null,512),[[i.nr,r.modalUserName]]),(0,t._)("button",$,(0,s.zw)(r.btn[l.activeLanguage]),1)],32)])],64))])])):(0,t.kq)("",!0)])),_:1})}var te={components:{},props:{show:Boolean},data(){return{submitted:!1,modalName:"",modalPhone:"",modalUserName:"",title:{ru:"Мы на связи!",uz:"BIZ ALOQADAMIZ!",en:""},descr:{ru:"оставьте заявку и наши менеджера свяжутся <br> с вами в ближайшее время",uz:"So'rovoma qoldiring va bizning menedjerlarimiz siz bilan <br> tez orada bog'lanishadi",en:""},placeholder:{ru:"Ваше имя",uz:"Ismingiz",en:""},placeholder1:{ru:"Номер телефона",uz:"Telefon raqamingiz",en:""},btn:{ru:"Оставить заявку",uz:"So'rovnoma yuborish",en:""},accept:{ru:"Ваша заявка отправлена!",uz:"So'rovnoma qabul qilindi!",en:""},acceptDescr:{ru:" Наши менеджеры свяжутся <br> с вами в ближайшее время",uz:"bizning menedjerlarimiz siz bilan <br> tez orada bog'lanishadi",en:""}}},methods:{sendFormData(){if(""!=this.modalName&&""!=this.modalPhone&&17==this.modalPhone.length){const e=new FormData;e.append("name",this.modalName),e.append("username",this.modalUserName),e.append("contact",this.modalPhone),this.$store.dispatch("sendForm",e).then((e=>{this.submitted=!0,this.modalName="",this.modalPhone="",this.modalUserName="",setTimeout((()=>{this.submitted=!1,this.$emit("close")}),2e3)}))}},inputNumber(e){this.modalPhone.length<5&&(this.modalPhone="+998 "),this.modalPhone=this.modalPhone.replace(/[^+|^\d|^\s]/,"");const n=[4,7,11,14];n.forEach((n=>{this.modalPhone.length==n&&e.data&&(this.modalPhone+=" ")}))},focusNumber(){""==this.modalPhone&&(this.modalPhone="+998 ")},blurNumber(){"+998 "==this.modalPhone&&(this.modalPhone="")},closeModal(){this.$emit("close")}},mounted(){},updated(){},computed:{activeLanguage(){return this.$store.getters.getLanguage}},watch:{}};const oe=(0,M.Z)(te,[["render",ie]]);var se=oe,re={components:{PuzzleModal:se},data(){return{show:!1,title:{ru:"PUZZLE",uz:"PUZZLE",en:"PUZZLE"},descr:{ru:"<span>PUZZLE AGENCY</span> — эффективный и надёжный партнёр в поиске и формировании маркетинговой информации от потребителей до торговых объектов",uz:"<span>PUZZLE AGENCY</span> — iste'molchilardan savdo obyektlarigacha bo'lgan marketingga oid ma'lumotlarni qidirish hamda shakllantirishda samarali va ishonchli hamkor",en:"<span>PUZZLE AGENCY</span> "},descrMob:{ru:"<span>AGENCY</span> — эффективный и надёжный партнёр в поиске и формировании маркетинговой информации ",uz:"<span>AGENCY</span>  — marketingga oid axborotni topish hamda shakllantirishda samarali va ishonchli hamkor",en:"<span>PUZZLE AGENCY</span> "},btn:{ru:"Оставить заявку",uz:"So'rovnoma qoldirish",en:""}}},methods:{goToTop(){window.scrollTo(0,0)},openModal(){this.show=!0},closeModal(){this.show=!1}},computed:{activeLanguage(){return this.$store.getters.getLanguage}}};const le=(0,M.Z)(re,[["render",G]]);var ce=le;const ue={class:"count"},de={class:"container"},me={class:"count__content"},ge={class:"count__content-item-num"},he={class:"count__content-item-num-span"},pe={class:"count__content-item-num-span1"},ve={class:"count__content-item-num-span1"},_e=(0,t.Uk)("   "),be={class:"count__content-item-num-span"},ze=["innerHTML"];function fe(e,n,a,i,o,r){const l=(0,t.Q2)("intersection");return(0,t.wy)(((0,t.wg)(),(0,t.iD)("div",ue,[(0,t._)("div",de,[(0,t._)("div",me,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(o.CountItems,((e,n)=>((0,t.wg)(),(0,t.iD)("div",{class:"count__content-item",key:n},[(0,t._)("div",ge,[1!=n?((0,t.wg)(),(0,t.iD)(t.HY,{key:0},[(0,t._)("div",he,(0,s.zw)(e.count),1),(0,t._)("div",pe,(0,s.zw)(e.numWord),1)],64)):((0,t.wg)(),(0,t.iD)(t.HY,{key:1},[(0,t._)("div",ve,(0,s.zw)(e.numWord),1),_e,(0,t._)("div",be,(0,s.zw)(e.count),1)],64))]),(0,t._)("div",{class:"count__content-item-descr",innerHTML:e.descr[r.activeLanguage]},null,8,ze)])))),128))])])])),[[l,r.startCount]])}var we={data(){return{animationDuration:3e3,CountItems:[{result:97,count:0,numWord:"%",descr:{ru:"исследованного рынка <br> Узбекистана",uz:"tadqiq etilgan <br> O'zbekiston bozori",en:""}},{result:10,count:0,numWord:"TOP",descr:{ru:"успешных маркетинговых проектов <br> с мировыми компаниями ",uz:"xalqaro kompaniyalar bilan <br> muvaffaqiyatli loyihalar",en:""}},{result:15,count:0,numWord:"K+",descr:{ru:"проанализированных <br> торговых точек",uz:"tahlil qilingan <br> savdo nuqtalari",en:""}}]}},methods:{count(e){setTimeout((()=>{e.count<e.result&&(e.count+=1,this.count(e))}),this.animationDuration/e.result)},startCount(){this.CountItems.forEach((e=>{this.count(e)}))}},computed:{activeLanguage(){return this.$store.getters.getLanguage}}};const Ae=(0,M.Z)(we,[["render",fe]]);var ke=Ae;const Le={class:"question"},ye={class:"container"},qe={class:"question__content"},Te={class:"question__content-box"},Me={class:"question__content-box-title"},Ce={class:"question__content-box-descr"},Pe={class:"question__content-form"},De=["placeholder"],Ie=["placeholder"],Se={key:0,class:"modal-btn"},Ne={key:1,class:"modal-btn-accept"};function xe(e,n,a,o,r,l){return(0,t.wg)(),(0,t.iD)("div",Le,[(0,t._)("div",ye,[(0,t._)("div",qe,[(0,t._)("div",Te,[(0,t._)("h3",Me,(0,s.zw)(r.boxTitle[l.activeLanguage]),1),(0,t._)("p",Ce,(0,s.zw)(r.boxDescr[l.activeLanguage]),1)]),(0,t._)("div",Pe,[(0,t._)("form",{id:"reg-course",class:"modal__form",onSubmit:[n[6]||(n[6]=(0,i.iM)((()=>{}),["prevent"])),n[7]||(n[7]=(...e)=>l.sendFormData&&l.sendFormData(...e))]},[(0,t.wy)((0,t._)("input",{type:"text",placeholder:r.placeholder[l.activeLanguage],name:"modal-name",class:"form__input",required:"",autocomplete:"off","onUpdate:modelValue":n[0]||(n[0]=e=>r.modalName=e)},null,8,De),[[i.nr,r.modalName]]),(0,t.wy)((0,t._)("input",{type:"tel",placeholder:r.placeholder1[l.activeLanguage],name:"modal-tel",class:"form__input hidden__phone",maxlength:"17","onUpdate:modelValue":n[1]||(n[1]=e=>r.modalPhone=e),onInput:n[2]||(n[2]=(...e)=>l.inputNumber&&l.inputNumber(...e)),onFocus:n[3]||(n[3]=(...e)=>l.focusNumber&&l.focusNumber(...e)),onBlur:n[4]||(n[4]=(...e)=>l.blurNumber&&l.blurNumber(...e)),required:""},null,40,Ie),[[i.nr,r.modalPhone]]),(0,t.wy)((0,t._)("input",{type:"text",placeholder:"Telegram @username",name:"modal-name",class:"form__input hidden__phone","onUpdate:modelValue":n[5]||(n[5]=e=>r.modalUserName=e)},null,512),[[i.nr,r.modalUserName]]),r.submitted?(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)("button",Se,(0,s.zw)(r.btn[l.activeLanguage]),1)),r.submitted?((0,t.wg)(),(0,t.iD)("button",Ne,(0,s.zw)(r.accept[l.activeLanguage]),1)):(0,t.kq)("",!0)],32)])])])])}var Ue={data(){return{submitted:!1,modalName:"",modalPhone:"",modalUserName:"",boxTitle:{ru:"у вас есть вопросы?",uz:"SAVOLLARINGIZ BORMI?",en:""},boxDescr:{ru:"Наш менеджер обработает вашу заявку и свяжется с вами в ближайшее время ",uz:"Bizning menedjerimiz sizning so'rovnomangizni o'rganib chiqadi va siz bilan tez orada bog'lanadi",en:""},placeholder:{ru:"Ваше имя",uz:"Ismingiz",en:""},placeholder1:{ru:"Номер телефона",uz:"Telefon raqamingiz",en:""},btn:{ru:"Оставить заявку",uz:"So'rovnoma yuborish",en:""},accept:{ru:"ВАША ЗАЯВКА ПРИНЯТА ✔",uz:"So'rovnoma qabul qilindi ✔",en:""}}},methods:{sendFormData(){if(""!=this.modalName&&""!=this.modalPhone&&17==this.modalPhone.length){const e=new FormData;e.append("name",this.modalName),e.append("username",this.modalUserName),e.append("contact",this.modalPhone),this.$store.dispatch("sendForm",e).then((e=>{this.submitted=!0,this.modalName="",this.modalPhone="",this.modalUserName="",setTimeout((()=>{this.submitted=!1,this.$emit("close")}),2e3)}))}},inputNumber(e){this.modalPhone.length<5&&(this.modalPhone="+998 "),this.modalPhone=this.modalPhone.replace(/[^+|^\d|^\s]/,"");const n=[4,7,11,14];n.forEach((n=>{this.modalPhone.length==n&&e.data&&(this.modalPhone+=" ")}))},focusNumber(){""==this.modalPhone&&(this.modalPhone="+998 ")},blurNumber(){"+998 "==this.modalPhone&&(this.modalPhone="")},closeModal(){this.$emit("close")}},computed:{activeLanguage(){return this.$store.getters.getLanguage}}};const Ee=(0,M.Z)(Ue,[["render",xe]]);var Oe=Ee;const Ze={class:"footer",id:"contacts"},Be={class:"container"},He={class:"footer__content"},Re=(0,t._)("img",{class:"footer__content-puzzle-logo",src:r,alt:"logo"},null,-1),je=["innerHTML"],Ye={class:"footer__content-contacts"},We={class:"footer__content-contacts-info"},Ke=["id","onClick"],Ge={class:"footer__content-contacts-number"},Fe=(0,t._)("a",{class:"footer__content-contacts-number-link",href:"tel: +998 90 980 53 00"},"+998 90 980 53 00",-1),Qe={class:"footer-company"},Ve=["innerHTML"];function Xe(e,n,a,i,o,r){const l=(0,t.up)("router-link"),c=(0,t.up)("font-awesome-icon");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("div",Ze,[(0,t._)("div",Be,[(0,t._)("div",He,[(0,t.Wm)(l,{class:"footer__content-puzzle",to:{name:"home",params:{lang:e.$route.params.lang}},onClick:n[0]||(n[0]=e=>r.goToTop())},{default:(0,t.w5)((()=>[Re,(0,t._)("p",{class:"footer__content-puzzle-descr",innerHTML:o.puzzleDescr[r.activeLanguage]},null,8,je)])),_:1},8,["to"]),(0,t._)("div",Ye,[(0,t._)("div",We,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(o.contactsInfo,((e,n)=>((0,t.wg)(),(0,t.iD)("h3",{class:"footer__content-contacts-info-title",key:n,id:e.id,onClick:n=>r.scrollToSection(e.id)},(0,s.zw)(e.link[r.activeLanguage]),9,Ke)))),128))]),(0,t._)("div",Ge,[(0,t.Wm)(c,{class:"footer__content-contacts-number-icon",icon:"fa-solid fa-phone"}),Fe])])])])]),(0,t._)("div",Qe,[(0,t._)("h4",{class:"footer-company-title",innerHTML:o.madeIn[r.activeLanguage]},null,8,Ve)])],64)}var Je={data(){return{contactTitle:{ru:"Контакты ",uz:"Aloqa",en:""},puzzleDescr:{ru:"Эффективный и надёжный партнер <br> в поиске и формировании маркетинговой <br> информации от потребителей <br> до торговых объектов.",uz:"Iste'molchilardan savdo obyektlarigacha bo'lgan marketingga oid ma'lumotlarni qidirish hamda shakllantirishda samarali va ishonchli hamkor.",en:""},contactsInfo:[{link:{ru:"Наши услуги",uz:"Xizmatlar",en:"Our services"},id:"#services"},{link:{ru:"O нас",uz:"biz haqimizda",en:"About us"},id:"#about-us"},{link:{ru:"Нам доверяют",uz:"bizga ishonishadi",en:"We are trust"},id:"#trust"}],madeIn:{ru:"сделано в <b>centris media</b>",uz:'<b>"centris media"</b>da tayyorlangan',en:""}}},methods:{goToTop(){window.scrollTo(0,0)},scrollTo(e){this.menuOpen&&(this.menuOpen=!1);const n=document.querySelector(e),a=n.offsetTop-50;let i=window.scrollY;const t=()=>{a>i+.5||a<i-.5?(i-=(i-a)/15,window.scrollTo(0,i),this.timer=setTimeout((()=>{t()}),5)):(window.scrollTo(0,a),o())},o=()=>{clearTimeout(this.timer),window.removeEventListener("wheel",o)};o(),window.addEventListener("wheel",o),t()},scrollToSection(e){"home"!=this.$route.name?this.$router.push("/").then((()=>{setTimeout((()=>{this.scrollTo(e)}),300)})):this.scrollTo(e)}},computed:{activeLanguage(){return this.$store.getters.getLanguage}}};const $e=(0,M.Z)(Je,[["render",Xe]]);var en=$e,nn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA2CAYAAACIsLrgAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN+SURBVHgB7VrdcdswDIZ6fa82MDeoN4g2aDqBvYHTCZwN7E5gZ4KkE8idIM4E8gZKJkDBCjzBNGlbEilZd/nucJRBmfghCIKSABiIqIhKohmMGIm5IEMKahTRS5IkP31/0IZTk/K9KbO/iet3og++PpiWxjxAD/gKlZKPUCmokdFvrdyU6Du3mlJxT2PQmLrRxu653RG96d9k7DsEQsIeL6A5DlZrI4XrnbBn2hH97TKbiQg1G9prByHMXH809SjPuIIqNKd8LWfexppk/II2IGErPMUz9ASSNSWaE220c1l+m4g5GlTxgAYlDASSPeEZDTKYMawMNugnPhEeOjw5uZS8BnPeDsYJkZ1KNgaZp2Bs4JSrsRS8JfM2MDaIdK8sfj5EtvwC4YDW7x1UVUCv1XsIg/bc3lv83x7+bYMz3P/M5ugzCWJcm7RQfGLxF3bCGAVcmY75qUnlMCYIxQtH3zMbm8GYINJ3ZvGzM7OXOngLHms1qBOE4itHn569kq+VWHOmopgxv8BTrMQ4+p4p9AWpuMU3h8gZ1vXeK4djKQxDvndCdMf3GF5hOeEBYgPrkiez+Jnl9ZnoU8Ko3PpfKvqQHbARxmUQE0Jx155klNg4+pbct3T05Q4neOUEB3pquAtKn9ucfUnFKSc4hOILi6/OeRU9VYUIu9IjJ26tiC1LIeLd8xpRjr4HPF1fqu+wc3l74Zq9jnKOwi7k8UHihVtb8SeiLdEfCIMdVEeUHxATIu5fISJE2MU/GaOnFIogp5AJI1bIaTxxGzccqvBOsY+6Dz2lUGAZRzVkzBnS2EJ875n3TfGLVuG9qIsWQx718cIZBquKOWqJIva3busVq6O3rIYNClOSoKcUCgk8cxZrMojZA0r20ASrM8zGMsx4L1qJgnW51f5FHdbPCu4cffYLNAwW4359tPPav/nDKyoBh2Exwy7XAqAtWMGrShs2TCcMBZEQwqAcb+jVJVbZtFPIzc0sxfR8A326Jx4aYCvWx+NQhmGItC0Gm6P4vmAIw0TiuYNQGMowrB9QdvtY48zgyz4No7HXLCvewxKPYZvQhrGzMMrseAQqKxQxhGFYlTpr4SwFfcNjWAYN4VirCoaEwzB9vfAZx7Oh07L8sKPkkL6dV514Wpkb6I06ZyqsvouGJDAwWDm9f+i35QqOPwo8QP05p34Y8nbp48N/egVWMAR9/JoAAAAASUVORK5CYII=";const an={class:"service",id:"services"},tn={class:"container"},on={class:"service__content",ref:"content"},sn={class:"service__content_item"},rn=["onClick"],ln=(0,t._)("div",{class:"line"},null,-1),cn={class:"service__content_item-services-title"},un=["innerHTML"],dn={class:"service__content_item-txt"},mn=["innerHTML"],gn=["innerHTML"],hn={class:"service__content-swiper_item"},pn={class:"service__content-swiper_item-title"},vn=["innerHTML"],_n=(0,t._)("div",{class:"line"},null,-1),bn=["innerHTML"],zn={class:"service__content-swiper_item-info-slide"},fn=(0,t._)("div",{class:"swiper-pagination"},null,-1),wn={key:0,class:"swipe-icon",src:nn,alt:""};function An(e,n,a,i,o,r){const l=(0,t.up)("swiper-slide"),c=(0,t.up)("swiper");return(0,t.wg)(),(0,t.iD)("div",an,[(0,t._)("div",tn,[(0,t._)("div",on,[(0,t._)("div",sn,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(o.ServiceContent,((e,n)=>((0,t.wg)(),(0,t.iD)("div",{class:(0,s.C_)(["service__content_item-services",{active:e.isActive}]),key:n,onClick:e=>r.serviseCard(n)},[ln,(0,t._)("span",{class:(0,s.C_)(["service__content_item-services-num",{active:e.isActive}])},(0,s.zw)(e.num),3),(0,t._)("h3",cn,(0,s.zw)(e.title[r.activeLanguage]),1),(0,t._)("p",{class:"service__content_item-services-descr",innerHTML:e.descr[r.activeLanguage]},null,8,un)],10,rn)))),128))]),(0,t._)("div",dn,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(o.ServiceContent,((e,n)=>((0,t.wg)(),(0,t.iD)("div",{class:(0,s.C_)(["service__content_item-txt-info",{active:e.isActive}]),key:n},[(0,t._)("h3",{class:"service__content_item-txt-info-title",innerHTML:e.infoTitle[r.activeLanguage]},null,8,mn),(0,t._)("p",{class:"service__content_item-txt-info-descr",innerHTML:e.infoDescr[r.activeLanguage]},null,8,gn)],2)))),128))])],512),(0,t.Wm)(c,{class:"service__content-mob",modules:"",onActiveIndexChange:r.activeSlide,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},breakpoints:{980:{slidesPerView:4},769:{slidesPerView:3},768:{slidesPerView:1}}},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(o.ServiceContent,((e,n)=>((0,t.wg)(),(0,t.j4)(l,{class:"service__content-swiper",key:n},{default:(0,t.w5)((()=>[(0,t._)("div",hn,[(0,t._)("span",{class:(0,s.C_)(["service__content-swiper_item-num",{active:e.isActive}])},(0,s.zw)(e.num),3),(0,t._)("h3",pn,(0,s.zw)(e.title[r.activeLanguage]),1),(0,t._)("p",{class:"service__content-swiper_item-descr",innerHTML:e.descr[r.activeLanguage]},null,8,vn),_n,(0,t._)("p",{class:"service__content-swiper_item-info-descr",innerHTML:e.infoDescr[r.activeLanguage]},null,8,bn)]),(0,t._)("h6",zn,(0,s.zw)(e.slide),1)])),_:2},1024)))),128)),fn])),_:1},8,["onActiveIndexChange","pagination"]),o.showSwipeIcon?((0,t.wg)(),(0,t.iD)("img",wn)):(0,t.kq)("",!0)])])}var kn=a(6011),Ln=a(6541),yn=a(7504),qn=a(4594),Tn=a(5245);a(2633);yn.Z.use([qn.Z,Tn.Z]);var Mn={components:{Swiper:kn.t,SwiperSlide:Ln.o},data(){return{ServiceContent:[{num:"1.",title:{ru:"Market Research ",uz:"Market Research ",en:"Market Research "},descr:{ru:"(исследование рынка)",uz:"(bozor tadqiqoti)",en:""},infoTitle:{ru:"MARKET RESEARCH <span>(исследование рынка)</span>",uz:"MARKET RESEARCH <span>(bozor tadqiqoti)</span>",en:""},infoDescr:{ru:"<b>Мы собираем и анализируем данные о ситуации на рынке товаров.</b><br><br> <span>В процессе исследования собираем различную информацию, например, показатели по дистрибуции, цены на аналогичную продукцию у других производителей и продавцов, данные о ваших конкурентах, информацию про вашу целевую аудиторию и т. п.</span>",uz:"<b>Biz mahsulot bozoridagi holat to‘g‘risida ma'lumotlarni to‘playmiz va tahlil qilamiz. </b><br><br> <span>Tadqiqot jarayonida turli xildagi axborotni yig‘amiz, misol uchun, distributsiya bo'yicha ko'rsatkichlar, o‘xshash mahsulotlarning boshqa ishlab chiqaruvchi va sotuvchilardagi narxlari, raqiblaringiz to‘g‘risidagi ma'lumotlar, maqsadli auditoriyangiz to‘g‘risidagi axborot va h.k.</span>",en:""},slide:"RETAIL AUDIT →",isActive:!0},{num:"2.",title:{ru:"RETAIL AUDIT",uz:"RETAIL AUDIT",en:"RETAIL AUDIT"},descr:{ru:"(розничный аудит)",uz:"(chakana audit)",en:""},infoTitle:{ru:"RETAIL AUDIT <span>(розничный аудит)</span>",uz:"RETAIL AUDIT <span>(chakana audit)</span>",en:""},infoDescr:{ru:"<b>Наше агенство успешно проводит розничный аудит.</b> <br><br> <span>Мы можем замерять как стандартные параметры по товарам, это замеры по ассортименту, представленности, долям по выкладке, объемам продаж, наличию рекламных материалов и т. п., так и по выставленным KPI для торговых сил, команд и дистрибуторов.</span>",uz:"<b>Bizning agentligimiz muvaffaqqiyatli tarzda chakana audit o‘tkazadi.</b> <br><br> <span>Unda siz mahsulotlar bo‘yicha standart parametrlarni (assortiment, taniqlilik, ulush, savdo hajmi, reklama materiallarining mavjudligi bo‘yicha hisob-kitoblar), shuningdek, savdo kuchi, jamoasi va distribyutorlar uchun berilgan KPI kabilarni hisoblashimiz mumkin.</span>",en:""},slide:"CENSUS →",isActive:!1},{num:"3.",title:{ru:"CENSUS",uz:"CENSUS",en:"CENSUS"},descr:{ru:"(перепись)",uz:"(ro‘yxatga olish)",en:"(перепись)"},infoTitle:{ru:"CENSUS <span>(перепись)</span>",uz:"CENSUS <span>(ro‘yxatga olish)</span>",en:""},infoDescr:{ru:"<b>Мы проводим полную или частичную перепись торговых точек для формирования потенциальной клиентской базы для развития вашей дистрибуции, продаж и маркетинговых мероприятий.</b> <br><br> <span>Основные параметры, которые вы получите по каждой точке: юридическое название, фактический адрес, GPS-координаты, фото фасада, тип и категория точки, категории товаров, которые продаются в точке, которые вам необходимы, и т. п.</span>",uz:"<b>Biz distribyutsiyangiz, savdolaringiz yoki marketing tadbirlaringizni rivojlantirish maqsadida istiqboldagi xaridorlar bazasini shakllantirish uchun savdo nuqtalarini to‘la yoki qisman hisob-kitob qilamiz.</b> <br><br> <span>Siz har bir nuqtadan oladigan asosiy parametrlar: yuridik nom, asl manzil, GPS-koordinatalar, old qism fotosurati, nuqtaning turi va kategoriyasi, nuqtada sotiladigan yoki Siz uchun zarur bo‘lgan mahsulotlar kategoriyasi va h.k.</span>",en:""},isActive:!1}],showSwipeIcon:!0}},methods:{activeSlide(e){e.activeIndex+1==e.slides.length?this.showSwipeIcon=!1:this.showSwipeIcon=!0},serviseCard(e){let n=!1;this.ServiceContent.forEach(((a,i)=>{e==i&&a.isActive&&(n=!0),a.isActive&&(a.isActive=!1)})),n||(this.ServiceContent[e].isActive=!0)}},computed:{activeLanguage(){return this.$store.getters.getLanguage}},watch:{services(){this.ServiceContent=this.ServiceContent}}};const Cn=(0,M.Z)(Mn,[["render",An]]);var Pn=Cn,Dn=a.p+"img/1.7488876f.webp",In=a.p+"img/map.ce381dde.png",Sn="data:image/png;base64,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";const Nn={class:"about",id:"about-us"},xn={class:"about__content"},Un=(0,t._)("img",{class:"about__content-img",src:Dn,alt:""},null,-1),En={class:"about__content-info"},On=["innerHTML"],Zn=(0,t._)("img",{class:"about__content-info-img",src:In,alt:""},null,-1),Bn={class:"about__content-info-box"},Hn={class:"about__content-info-box-first"},Rn={class:"about__content-info-box-first-name"},jn={class:"about__content-info-box-first-info"},Yn=(0,t._)("img",{class:"about__content-info-box-img",src:Sn,alt:""},null,-1);function Wn(e,n,a,i,o,r){return(0,t.wg)(),(0,t.iD)("div",Nn,[(0,t._)("div",xn,[Un,(0,t._)("div",En,[(0,t._)("p",{class:"about__content-info-descr",innerHTML:o.aboutDescr[r.activeLanguage]},null,8,On),Zn,(0,t._)("div",Bn,[(0,t._)("div",Hn,[(0,t._)("span",Rn,(0,s.zw)(o.aboutInfoName[r.activeLanguage]),1),(0,t._)("span",jn,(0,s.zw)(o.aboutInfo[r.activeLanguage]),1)]),Yn])])])])}var Kn={data(){return{aboutDescr:{ru:"<span>В нашем быстром мире растёт потребность в надёжной информации для разработки и принятия уверенных и практических решений.</span> <br><br>Мы собрали свои лучшие <span>практики, знания и страсть</span>, чтобы найти, собрать и предоставить качественные данные, которые позволят найти чёткий и несложный путь к росту вашего бизнеса. <br><br> Для этого мы практикуем лучшие решения из <span>маркетинга и технологий</span>, успешно применяя при этом принципы безопасности, открытости, простоты и скорости. <br><br> Нашей задачей является получение результата, при котором наши клиенты могли бы действовать быстрее, умнее и смелее, а потребитель получил бы возможность повышать свой уровень жизни. <br><br> <span>Ведь ты действуешь лучше, когда уверен.</span>",uz:"<span>Bizning jadal rivojlanib borayotgan dunyomizda aniq va amaliy yechimlar qabul qilish uchun ishonchli axborotga bo’lgan ehtiyoj o‘sib bormoqda.</span> <br><br> Biz sifatli ma’lumotlarni topish, yig‘ish va taqdim etish uchun eng zo‘r bilim va ko‘nikmalarimiz, tajribamiz, kuchimizni bir joyga yig’dik, ular Sizga o‘z biznesingizni rivojlantirishda aniq va oson yo‘lni topishga yordam beradi.<br><br>Buning uchun biz marketing va texnologiya sohasidagi eng yetakchi yechimlarni amaliyotda qo‘llaymiz, bunda xavfsizlik, ochiqlik, oddiylik va tezlik tamoyillariga rioya qilamiz.<br><br>Bizning vazifamiz — mijozlarimiz tezroq, aqlliroq va dadilroq harakat qilishi, iste’molchi esa o’z hayot tarzini yaxshilashi uchun zaruriy natijaga erishishi sanaladi. <br><br> <span>Zero, o‘zingga ishonching komil bo‘lsa, harakatlaring ham dadilroq bo‘ladi.</span>",en:""},aboutInfoName:{ru:"Yuriy Li",uz:"Yuriy Li",en:""},aboutInfo:{ru:"Основатель и CEO «Puzzle Agency»",uz:"«Puzzle Agency» asoschisi va bosh direktori",en:""}}},computed:{activeLanguage(){return this.$store.getters.getLanguage}}};const Gn=(0,M.Z)(Kn,[["render",Wn]]);var Fn=Gn,Qn=a.p+"img/projects.b83d4b56.webp";const Vn={class:"projects",id:"trust"},Xn={class:"container"},Jn={class:"projects-title"},$n=(0,t._)("div",{class:"projects__content"},[(0,t._)("div",{class:"projects__content-img"},[(0,t._)("img",{src:Qn,alt:""})])],-1);function ea(e,n,a,i,o,r){return(0,t.wg)(),(0,t.iD)("div",Vn,[(0,t._)("div",Xn,[(0,t._)("h4",Jn,(0,s.zw)(o.projectTitle[r.activeLanguage]),1),$n])])}var na={data(){return{projectTitle:{ru:"Нам доверяют",uz:"bizga ishonishadi ",en:""}}},computed:{activeLanguage(){return this.$store.getters.getLanguage}}};const aa=(0,M.Z)(na,[["render",ea]]);var ia=aa,ta=a.p+"img/bank.6fea2dcd.png",oa=a.p+"img/partner.aab7a522.webp",sa=a.p+"img/evroRu.43c36e14.png",ra=a.p+"img/evro.e4aae4ab.png";const la={class:"partnership"},ca={class:"partnership__content"},ua={class:"partnership__content-info"},da=(0,t._)("img",{class:"partnership__content-info-logo",src:ta,alt:""},null,-1),ma=["innerHTML"],ga=(0,t._)("div",{class:"partnership__content-info-line"},null,-1),ha=["innerHTML"],pa={class:"partnership__content-info-chart-box"},va={class:"partnership__content-info-chart-title"},_a={class:"partnership__content-info-chart-procent"},ba=(0,t._)("div",{class:"partnership__content-info-chart-line"},[(0,t._)("div",{class:"line"})],-1),za=(0,t._)("img",{class:"partnership__content-img",src:oa,alt:""},null,-1),fa={key:0,class:"partnership__content-imgMob",src:sa,alt:""},wa={key:1,class:"partnership__content-imgMob",src:ra,alt:""};function Aa(e,n,a,i,o,r){return(0,t.wg)(),(0,t.iD)("div",la,[(0,t._)("div",ca,[(0,t._)("div",ua,[da,(0,t._)("h3",{class:"partnership__content-info-title",innerHTML:o.partnershipTitle[r.activeLanguage]},null,8,ma),ga,(0,t._)("p",{class:"partnership__content-info-descr",innerHTML:o.partnershipDescr[r.activeLanguage]},null,8,ha),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(o.audit,((e,n)=>((0,t.wg)(),(0,t.iD)("div",{class:"partnership__content-info-chart",key:n},[(0,t._)("div",pa,[(0,t._)("h6",va,(0,s.zw)(e.title[r.activeLanguage]),1),(0,t._)("span",_a,(0,s.zw)(e.procent),1)]),ba])))),128))])]),za,"ru"==r.activeLanguage?((0,t.wg)(),(0,t.iD)("img",fa)):((0,t.wg)(),(0,t.iD)("img",wa))])}var ka={data(){return{partnershipTitle:{ru:"Сотрудничество с Европейским Банком Реконструкции и Развития <span>(ЕБРР)</span>",uz:"Yevropa Rekonstruksiya va taraqqiyot banki bilan hamkorlik <span>(YRTB)</span>",en:""},partnershipDescr:{ru:"Мы постоянно интересуемся, учитывая наш опыт и знания, чем же ещё можем быть полезны в развитии бизнесов.<br><br> <span>В 2022 году мы договорились в сотрудничестве с ЕБРР, о запуске совместных проектов по консалтингу, чтобы помочь развивать различные проекты и бизнесы в управлении, разработке стратегий и бизнес-решений, продаж и маркетинга, помогаем найти механизмы и инструменты для их внедрения. </span> <br><br> Среди таких проектов - торговые компании, компании фармацевтического сектора и другие.",uz:"Tajribamiz va bilimimizni hisobga olgan holda, bizneslarni rivojlantirishda yana qanday yordam berishingiz mumkinligi to‘g‘risida qiziqamiz.<br><br> <span>2022-yilda YRTB bilan boshqaruv, strategiyalar va biznes-yechimlar ishlab chiqish, savdo va marketing sohasida turli loyiha va bizneslarni rivojlantrish uchun hamkorlik qilish, konsalting bo‘yicha turli qo‘shma loyihalarni ishlab chiqish to’g'risida shartnoma tuzdik, mexanizmlarni topish va ularni joriy etish uchun zaruriy jihozlarni topishda ko‘maklashmoqdamiz.</span> <br><br>Bunday loyihalar qatoriga savdo kompaniyalari, farmatsevtik sohaga oid kompaniyalar va boshqalar kiradi.",en:""},audit:[{title:{ru:"Retail audit",uz:"Retail audit",en:"Retail audit"},procent:"80%"},{title:{ru:"Research",uz:"Research",en:"Research"},procent:"90%"},{title:{ru:"Census",uz:"Census",en:"Census"},procent:"83%"}],partnershipInfo:{ru:"Основатель и CEO Puzzle Agency",uz:"",en:""}}},computed:{activeLanguage(){return this.$store.getters.getLanguage}}};const La=(0,M.Z)(ka,[["render",Aa]]);var ya=La,qa={data(){return{}},components:{PuzzleMain:ce,PuzzleCount:ke,PuzzleQuestion:Oe,PuzzleFooter:en,PuzzleServices:Pn,PuzzleAbout:Fn,PuzzleProject:ia,PuzzlePartnership:ya}};const Ta=(0,M.Z)(qa,[["render",x]]);var Ma=Ta,Ca=a(65);const Pa={activeLanguage:"ru",languages:["ru","uz","en"]},Da={changeLanguage(e,n){e.activeLanguage=n}},Ia={selectLanguage(e,n){e.commit("changeLanguage",n)}},Sa={getLanguage(e){return e.activeLanguage}};var Na={state:Pa,mutations:Da,actions:Ia,getters:Sa},xa=a(6265),Ua=a.n(xa),Ea={state(){},getters:{},mutations:{},actions:{async sendForm(e,n){let a;const i="/telegram.php";try{a=await Ua().post(i,n)}catch(t){a=t.response}return a}}},Oa=(0,Ca.MT)({state:{},getters:{},mutations:{},actions:{},modules:{languages:Na,form:Ea}});const Za=[{path:"/:lang(ru|uz|en)?/",name:"home",component:Ma,alias:["/:lang(ru|uz|en)?/","/:lang(ru|uz|en)?/home"]}],Ba=[{path:"/puzzle/:lang(ru|uz|en)?",name:"main",component:N.MA,children:Za}],Ha=(0,N.p7)({history:(0,N.PO)("/puzzle/"),routes:Ba});Ha.beforeEach((e=>{const n=""==e.params?.lang?"ru":e.params?.lang;document.documentElement.setAttribute("lang",n),n&&Oa.dispatch("selectLanguage",n)}));var Ra=Ha,ja={mounted(e,n){const a={rootMargin:"0px",threshold:.1},i=new IntersectionObserver((e=>{e[0].isIntersecting&&n.value()}),a);i.observe(e)}},Ya=a(8125),Wa=a(8321),Ka=a(7749);Ya.vI.add(Wa.FU$,Wa.j1w,Wa.swf,Wa.ptq,Wa.opg);var Ga=Ka.GN;(0,i.ri)(S).directive("intersection",ja).use(Oa).use(Ra).component("font-awesome-icon",Ga).mount("#app")}},n={};function a(i){var t=n[i];if(void 0!==t)return t.exports;var o=n[i]={exports:{}};return e[i](o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(n,i,t,o){if(!i){var s=1/0;for(u=0;u<e.length;u++){i=e[u][0],t=e[u][1],o=e[u][2];for(var r=!0,l=0;l<i.length;l++)(!1&o||s>=o)&&Object.keys(a.O).every((function(e){return a.O[e](i[l])}))?i.splice(l--,1):(r=!1,o<s&&(s=o));if(r){e.splice(u--,1);var c=t();void 0!==c&&(n=c)}}return n}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[i,t,o]}}(),function(){a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,{a:n}),n}}(),function(){a.d=function(e,n){for(var i in n)a.o(n,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){a.p="/puzzle/"}(),function(){var e={143:0};a.O.j=function(n){return 0===e[n]};var n=function(n,i){var t,o,s=i[0],r=i[1],l=i[2],c=0;if(s.some((function(n){return 0!==e[n]}))){for(t in r)a.o(r,t)&&(a.m[t]=r[t]);if(l)var u=l(a)}for(n&&n(i);c<s.length;c++)o=s[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(u)},i=self["webpackChunkpattern"]=self["webpackChunkpattern"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(688)}));i=a.O(i)})();
//# sourceMappingURL=app.15d99482.js.map