(self.webpackChunkeproducts_soft=self.webpackChunkeproducts_soft||[]).push([[787],{787:(t,e,r)=>{"use strict";r.r(e),r.d(e,{PublicModule:()=>Z});var a=r(116),o=r(462),c=r(699),i=r(619);let s=(()=>{class t{constructor(){this.products=[{name:"Champu Savital Anticaspa",image:"./assets/img/champu.png",price:11360},{name:"Detergente Ariel Liquido Doypack",image:"./assets/img/detergente.png",price:10870},{name:"Gaseosa Coca-Cola Original",image:"./assets/img/gaseosa.png",price:3500},{name:"Arroz Diana",image:"./assets/img/arroz.png",price:17200},{name:"Azucar Blanca Incauca",image:"./assets/img/azucar.png",price:3600},{name:"Lavaloza AXION Limon Crema",image:"./assets/img/lavaloza.png",price:5750},{name:"Papel Higienico Suave Gold Triple Hoja",image:"./assets/img/papel-higienico.png",price:9500},{name:"Jabon PROTEX Limpieza Profunda",image:"./assets/img/jabon.png",price:2900},{name:"Pan BIMBO Blanco Actileche",image:"./assets/img/pan.png",price:4200},{name:"Leche Entera PARMALAT",image:"./assets/img/leche.png",price:2500}],localStorage.setItem("products",JSON.stringify(this.products))}get getProducts(){return this.products}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function n(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"div",3),i.TgZ(1,"div",4),i._UZ(2,"img",5),i.TgZ(3,"div",6),i.TgZ(4,"h5",7),i._uU(5),i.qZA(),i.TgZ(6,"p",8),i._uU(7),i.qZA(),i.TgZ(8,"a",9),i.NdJ("click",function(){const e=i.CHM(t).$implicit;return i.oxw().addToCart(e)}),i._uU(9,"Agregar al carrito"),i.qZA(),i.qZA(),i.qZA(),i.qZA()}if(2&t){const t=e.$implicit;i.xp6(2),i.s9C("src",t.image,i.LSH),i.xp6(3),i.Oqu(t.name),i.xp6(2),i.hij("$",t.price,"")}}function l(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"div",18),i.TgZ(1,"div",19),i._UZ(2,"img",20),i.TgZ(3,"div",21),i.TgZ(4,"h5",22),i._uU(5),i.qZA(),i.TgZ(6,"p",23),i._uU(7),i.qZA(),i.TgZ(8,"button",24),i.NdJ("click",function(){const e=i.CHM(t).$implicit;return i.oxw().removeProduct(e)}),i._uU(9,"Eliminar"),i.qZA(),i.qZA(),i.qZA(),i.qZA()}if(2&t){const t=e.$implicit;i.xp6(2),i.s9C("src",t.image,i.LSH),i.xp6(3),i.Oqu(t.name),i.xp6(2),i.hij("$",t.price,"")}}function p(t,e){1&t&&(i.TgZ(0,"div",25),i._uU(1," No hay productos en tu carrito "),i.qZA())}function g(t,e){1&t&&(i.TgZ(0,"div",26),i._uU(1," Por favor haga el pago correspondiente a la cuenta XXX-XXXX-XXXX y al ser confirmada le enviaremos un correo sobre el despacho de sus productos. "),i.qZA())}function u(t,e){1&t&&(i.TgZ(0,"div",27),i._uU(1,"Este campo es obligatorio"),i.qZA())}function m(t,e){1&t&&(i.TgZ(0,"div",27),i._uU(1,"Este campo es obligatorio"),i.qZA())}function d(t,e){1&t&&(i.TgZ(0,"div",27),i._uU(1,"Este campo es obligatorio"),i.qZA())}const h=[{path:"",component:(()=>{class t{constructor(t){this.productService=t,this.products=[],this.cart=[],this.products=this.productService.getProducts}addToCart(t){localStorage.getItem("cart")&&(this.cart=JSON.parse(localStorage.getItem("cart"))),this.cart.push(t),localStorage.setItem("cart",JSON.stringify(this.cart))}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(s))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-products-list"]],decls:5,vars:1,consts:[[1,"row","my-5"],[1,"col-12","mb-3"],["class","col-12 col-md-3 col-lg-2 mb-3",4,"ngFor","ngForOf"],[1,"col-12","col-md-3","col-lg-2","mb-3"],[1,"card","h-100"],[1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"btn","btn-primary","d-block",3,"click"]],template:function(t,e){1&t&&(i.TgZ(0,"div",0),i.TgZ(1,"div",1),i.TgZ(2,"h2"),i._uU(3,"Lista de productos"),i.qZA(),i.qZA(),i.YNc(4,n,10,3,"div",2),i.qZA()),2&t&&(i.xp6(4),i.Q6J("ngForOf",e.products))},directives:[a.sg],styles:[""]}),t})()},{path:"carrito",component:(()=>{class t{constructor(t){this.formBuilder=t,this.user={},this.cart=[],this.cartTotal=0,this.purchased=!1,this.form=this.formBuilder.group({name:["",o.kI.required],phoneNumber:["",o.kI.required],address:["",o.kI.required]}),localStorage.getItem("cart")&&(this.cart=JSON.parse(localStorage.getItem("cart")),this.cart.forEach(({price:t})=>this.cartTotal+=t))}removeProduct(t){this.cartTotal=0,this.cart.splice(this.cart.indexOf(t),1),this.cart.forEach(({price:t})=>this.cartTotal+=t),localStorage.setItem("cart",JSON.stringify(this.cart))}submitPurchase(){this.purchased=!0,this.purchase={user:this.form.value,cart:this.cart},localStorage.getItem("purchases")?(this.purchases=JSON.parse(localStorage.getItem("purchases")),this.purchases.push(this.purchase),localStorage.setItem("purchases",JSON.stringify(this.purchases))):localStorage.setItem("purchases",JSON.stringify([this.purchase])),this.cart=[],this.user=this.form.value,this.cartTotal=0,this.form.reset({}),localStorage.removeItem("cart")}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(o.qu))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-cart"]],decls:36,vars:9,consts:[[1,"row","my-5"],[1,"col-12","mb-3"],[1,"row"],[1,"col-12","col-md-9"],["class","col-12 col-md-3 col-lg-2 mb-3",4,"ngFor","ngForOf"],[1,"col-12"],["class","alert alert-info","role","alert",4,"ngIf"],["class","alert alert-success","role","alert",4,"ngIf"],[1,"col-12","col-md-3"],[1,"d-grid","gap-2"],[3,"formGroup"],[1,"mb-3"],[1,"form-label"],["formControlName","name","type","text",1,"form-control"],["class","form-text text-danger",4,"ngIf"],["formControlName","phoneNumber","type","tel",1,"form-control"],["formControlName","address","type","tel",1,"form-control"],["type","button",1,"btn","btn-primary",3,"disabled","click"],[1,"col-12","col-md-3","col-lg-2","mb-3"],[1,"card","h-100"],[1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title"],[1,"card-text"],["type","button",1,"btn","btn-danger",3,"click"],["role","alert",1,"alert","alert-info"],["role","alert",1,"alert","alert-success"],[1,"form-text","text-danger"]],template:function(t,e){1&t&&(i.TgZ(0,"div",0),i.TgZ(1,"div",1),i.TgZ(2,"h2"),i._uU(3,"Carrito"),i.qZA(),i.qZA(),i.TgZ(4,"div",2),i.TgZ(5,"div",3),i.TgZ(6,"div",2),i.YNc(7,l,10,3,"div",4),i.TgZ(8,"div",5),i.YNc(9,p,2,0,"div",6),i.YNc(10,g,2,0,"div",7),i.qZA(),i.qZA(),i.qZA(),i.TgZ(11,"div",8),i.TgZ(12,"div",9),i.TgZ(13,"h3"),i._uU(14,"Datos del pedido"),i.qZA(),i.TgZ(15,"form",10),i.TgZ(16,"div",11),i.TgZ(17,"label",12),i._uU(18,"Nombre:"),i.qZA(),i._UZ(19,"input",13),i.YNc(20,u,2,0,"div",14),i.qZA(),i.TgZ(21,"div",11),i.TgZ(22,"label",12),i._uU(23,"Tel\xe9fono:"),i.qZA(),i._UZ(24,"input",15),i.YNc(25,m,2,0,"div",14),i.qZA(),i.TgZ(26,"div",11),i.TgZ(27,"label",12),i._uU(28,"Direcci\xf3n:"),i.qZA(),i._UZ(29,"input",16),i.YNc(30,d,2,0,"div",14),i.qZA(),i.qZA(),i.TgZ(31,"h3"),i._uU(32),i.qZA(),i._UZ(33,"hr"),i.TgZ(34,"button",17),i.NdJ("click",function(){return e.submitPurchase()}),i._uU(35,"Hacer pedido"),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.xp6(7),i.Q6J("ngForOf",e.cart),i.xp6(2),i.Q6J("ngIf",0===e.cart.length),i.xp6(1),i.Q6J("ngIf",0===e.cart.length&&!0===e.purchased),i.xp6(5),i.Q6J("formGroup",e.form),i.xp6(5),i.Q6J("ngIf",!e.form.controls.name.valid&&e.form.controls.name.touched),i.xp6(5),i.Q6J("ngIf",!e.form.controls.phoneNumber.valid&&e.form.controls.phoneNumber.touched),i.xp6(5),i.Q6J("ngIf",!e.form.controls.address.valid&&e.form.controls.address.touched),i.xp6(2),i.hij("Total: $ ",e.cartTotal,""),i.xp6(2),i.Q6J("disabled",!e.form.valid||0===e.cart.length))},directives:[a.sg,a.O5,o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u],styles:[""]}),t})()},{path:"**",pathMatch:"full",redirectTo:""}];let f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[c.Bz.forChild(h)]]}),t})(),Z=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[a.ez,f,o.UX]]}),t})()}}]);