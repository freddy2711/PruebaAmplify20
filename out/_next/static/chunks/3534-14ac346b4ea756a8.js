(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3534],{58071:function(e,n,t){"use strict";var r=t(85893),a=t(94184),o=t.n(a),l=t(18695),c=t(95821),i=t(54501),s=t.n(i),u=function(e){var n=e.classname,t=e.children,a=o()((0,c.IO)(s(),void 0===n?"":n));return(0,r.jsx)(l.Z.Item,{className:a,children:t})};n.Z=u},13649:function(e,n,t){"use strict";var r=t(85893),a=t(94184),o=t.n(a),l=t(18695),c=t(95821),i=t(12547),s=t.n(i),u=function(e){var n=e.children,t=e.classname,a=o()((0,c.IO)(s(),void 0===t?"":t));return(0,r.jsx)(l.Z,{className:a,children:n})};n.Z=u},79827:function(e,n,t){"use strict";t.r(n);var r=t(34727),a=t(67573),o=t(14251),l=t(52875),c=t(70655),i=t(85893),s=t(67294),u=t(4969),d=t(1803),f=t(89219),m=t(84555),x=t(9473),v=t(31545),h=t(69706),p=t(42222),C=t(159),j=function(e,n){var t=n.filter(function(n){return n.value.toLocaleUpperCase()===e.toLocaleUpperCase()});return t.length>0?t[0]:n[0]},g=function(e){var n,t=e.modalShowRefLAb,g=e.setModalShowRefLAb,b=(0,x.I0)(),R=(0,x.v9)(function(e){var n;return null==e?void 0:null===(n=e.infoGeneral)||void 0===n?void 0:n.infoGeneral}),N=(0,x.v9)(function(e){var n;return null==e?void 0:null===(n=e.infoEditar)||void 0===n?void 0:n.editRefLab}),y={txtContacto:"",txtCorreo:"",txtTelffijoContacto:"",txtTelfCelular1Contacto:"",txtTelfCelular2Contacto:"",ddlRelacion:"",txtCargoReferencia:"",txtEmpresaReferencia:"",id:null},Z=(0,s.useState)(y),_=Z[0],L=Z[1],w=_.txtContacto,T=_.txtCorreo,E=_.txtTelffijoContacto,I=_.txtTelfCelular1Contacto,k=_.txtTelfCelular2Contacto,A=_.ddlRelacion,G=_.txtCargoReferencia,$=_.txtEmpresaReferencia,P=_.id,S=[{value:"0",label:"-- Seleccionar Relaci\xf3n Laboral --"},{label:"Jefe Inmediato",value:"Jefe Inmediato"},{label:"Colaborador A mi Cargo",value:"Colaborador A mi Cargo"},{label:"Compa\xf1ero",value:"Compa\xf1ero"},],z=(n=(0,r.Z)(function(e){var n,t,r;return(0,c.__generator)(this,function(r){switch(r.label){case 0:var a;return e.preventDefault(),console.log("saveNewEL"),t=null==(n=(0,p.get)(h.EG))?void 0:n.userName,[4,(a={IdReferenciaLaboral:P,IdPersona:R.idPersona,Empresa:$,CargoReferencia:G,Contacto:w,Correo:T,Relacion:A,Telefono:E,Celular1:I,Celular2:k,Activo:"1",audit_usuario_creacion:t,audit_usuario_actualizacion:""},b((0,C.q9)(a)))];case 1:return r.sent(),g(!1),L(y),[2]}})}),function(e){return n.apply(this,arguments)});(0,s.useEffect)(function(){if(0!==Object.keys(N).length){var e={txtContacto:null==N?void 0:N.contacto,txtCorreo:null==N?void 0:N.correo,txtTelffijoContacto:null==N?void 0:N.telefono,txtTelfCelular1Contacto:null==N?void 0:N.celular1,txtTelfCelular2Contacto:null==N?void 0:N.celular2,ddlRelacion:null==N?void 0:N.relacion,txtCargoReferencia:null==N?void 0:N.cargoreferencia,txtEmpresaReferencia:null==N?void 0:N.empresa,id:null==N?void 0:N.idReferenciaLaboral};console.log(e),L(e)}},[N]);var B=function(e,n){if("ddlRelacion"===n){console.log(e);var t=e.value;L((0,l.Z)((0,o.Z)({},_),(0,a.Z)({},n,t)))}else{var r=e.target.value;L((0,l.Z)((0,o.Z)({},_),(0,a.Z)({},n,r)))}};return(0,i.jsx)(d.default,{size:"lg",show:t,onHide:function(){return g(!1)},titulo:"Referencia Laboral",children:(0,i.jsxs)(f.Z,{id:"addReferenciaLaboral",onsubmit:function(e){return z(e)},children:[(0,i.jsxs)("div",{className:"form-group row mt-3",children:[(0,i.jsx)("div",{className:"col-md-4 col-12",children:"Nombre Contacto"}),(0,i.jsx)("div",{className:"col-md-8 col-12",children:(0,i.jsx)(v.Z,{id:"txtContacto",type:"text",name:"txtContacto",classname:"text-center",placeholder:"",value:w,onchange:function(e){return B(e,"txtContacto")}})})]}),(0,i.jsxs)("div",{className:"form-group row mt-3",children:[(0,i.jsx)("div",{className:"col-md-4 col-12",children:"Correo"}),(0,i.jsx)("div",{className:"col-md-8 col-12",children:(0,i.jsx)(v.Z,{id:"txtCorreo",type:"text",name:"txtCorreo",classname:"text-center",placeholder:"",value:T,onchange:function(e){return B(e,"txtCorreo")}})})]}),(0,i.jsxs)("div",{className:"form-group row mt-3",children:[(0,i.jsx)("div",{className:"col-md-4 col-12",children:"Tel\xe9fono Fijo"}),(0,i.jsx)("div",{className:"col-md-8 col-12",children:(0,i.jsx)(v.Z,{id:"txtTelffijoContacto",type:"text",name:"txtTelffijoContacto",classname:"text-center",placeholder:"",value:E,onchange:function(e){return B(e,"txtTelffijoContacto")}})})]}),(0,i.jsxs)("div",{className:"form-group row mt-3",children:[(0,i.jsx)("div",{className:"col-md-4 col-12",children:"Celular 1"}),(0,i.jsx)("div",{className:"col-md-8 col-12",children:(0,i.jsx)(v.Z,{id:"txtTelfCelular1Contacto",type:"text",name:"txtTelfCelular1Contacto",classname:"text-center",placeholder:"",value:I,onchange:function(e){return B(e,"txtTelfCelular1Contacto")}})})]}),(0,i.jsxs)("div",{className:"form-group row mt-3",children:[(0,i.jsx)("div",{className:"col-md-4 col-12",children:"Celular 2"}),(0,i.jsx)("div",{className:"col-md-8 col-12",children:(0,i.jsx)(v.Z,{id:"txtTelfCelular2Contacto",type:"text",name:"txtTelfCelular2Contacto",classname:"text-center",placeholder:"",value:k,onchange:function(e){return B(e,"txtTelfCelular2Contacto")}})})]}),(0,i.jsxs)("div",{className:"form-group row mt-3",children:[(0,i.jsx)("div",{className:"col-md-4 col-12",children:"Relaci\xf3n :"}),(0,i.jsx)("div",{className:"col-md-8 col-12",children:(0,i.jsx)(u.ZP,{options:S,id:"ddlRelacion",instanceId:"ddlRelacion",name:"ddlRelacion",defaultValue:j(A,S),onChange:function(e){return B(e,"ddlRelacion")},value:j(A,S)})})]}),(0,i.jsxs)("div",{className:"form-group row mt-3",children:[(0,i.jsx)("div",{className:"col-md-4 col-12",children:"Cargo de Referencia"}),(0,i.jsx)("div",{className:"col-md-8 col-12",children:(0,i.jsx)(v.Z,{id:"txtCargoReferencia",type:"text",name:"txtCargoReferencia",classname:"text-center",placeholder:"",value:G,onchange:function(e){return B(e,"txtCargoReferencia")}})})]}),(0,i.jsxs)("div",{className:"form-group row mt-3",children:[(0,i.jsx)("div",{className:"col-md-4 col-12",children:"Empresa"}),(0,i.jsx)("div",{className:"col-md-8 col-12",children:(0,i.jsx)(v.Z,{id:"txtEmpresaReferencia",type:"text",name:"txtEmpresaReferencia",classname:"text-center",placeholder:"",value:$,onchange:function(e){return B(e,"txtEmpresaReferencia")}})})]}),(0,i.jsx)("div",{className:"col-12 mt-3 text-center",children:(0,i.jsx)(m.Z,{type:"submit",variant:"secondary",classname:"btn-sm",children:"Guardar"})})]})})};n.default=g},43534:function(e,n,t){"use strict";t.r(n);var r=t(34727),a=t(70655),o=t(85893),l=t(67294),c=t(9473),i=t(89219),s=t(84555),u=t(13649),d=t(58071),f=t(86455),m=t.n(f),x=t(159),v=t(79827),h=t(89041),p=function(){var e,n=(0,c.I0)(),t=(0,c.v9)(function(e){var n;return null==e?void 0:null===(n=e.infoGeneral)||void 0===n?void 0:n.infoGeneral}),f=(0,c.v9)(function(e){var n,t;return null==e?void 0:null===(n=e.infoGeneral)||void 0===n?void 0:null===(t=n.infoGeneral)||void 0===t?void 0:t.ReferenciasLaborales}),p=(0,l.useState)(!1),C=p[0],j=p[1],g=function(e){j(e)},b=(e=(0,r.Z)(function(e){return(0,a.__generator)(this,function(o){var l;return m().fire({title:"Referencias Laborales",text:"\xbfEst\xe1 seguro que desea eliminar estos datos?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Aceptar",cancelButtonText:"Cancelar"}).then((l=(0,r.Z)(function(r){var o;return(0,a.__generator)(this,function(a){switch(a.label){case 0:var l;if(!r.isConfirmed)return[3,2];return(o=f.filter(function(n){return n.idReferenciaLaboral===e}))[0].activo="0",o[0].IdPersona=null==t?void 0:t.idPersona,[4,(l=o[0],n((0,x.sG)(l)))];case 1:a.sent(),a.label=2;case 2:return[2]}})}),function(e){return l.apply(this,arguments)})),[2]})}),function(n){return e.apply(this,arguments)}),R=function(e){console.log("__IdEditar__",e);var r,a=t.ReferenciasLaborales.filter(function(n){return n.idReferenciaLaboral===e})[0];console.log(a),n((0,h.pg)(a)),j(!0)};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i.Z,{id:"px-3 py-3 mb-3",children:[(0,o.jsx)("div",{className:"form-group row",children:(0,o.jsx)("div",{className:"col-sm-3",children:(0,o.jsx)(s.Z,{type:"button",variant:"secondary",classname:"btn-sm",onclick:function(){return g(!0)},children:"Agregar"})})}),(0,o.jsx)(u.Z,{classname:"mb-3 mt-3",children:t.ReferenciasLaborales&&t.ReferenciasLaborales.length>0?t.ReferenciasLaborales.map(function(e,n){return"0"!==e.activo&&!1!==e.activo?(0,o.jsxs)(d.Z,{classname:"row d-flex py-3 px-0 mx-0",children:[(0,o.jsxs)("div",{className:"col-12 col-md-6",children:[(0,o.jsx)("p",{className:"mb-1",children:(0,o.jsx)("b",{children:e.empresa})}),(0,o.jsx)("p",{className:"mb-1",children:e.relacion}),(0,o.jsxs)("p",{className:"mb-1",children:[e.contacto," - ",e.cargoreferencia]}),(0,o.jsx)("p",{className:"mb-1",children:e.telefono}),(0,o.jsx)("p",{className:"mb-1",children:e.celular1}),(0,o.jsx)("span",{className:"d-none"})]}),(0,o.jsxs)("div",{className:"col-12 col-md-6 text-end",children:[(0,o.jsx)(s.Z,{type:"button",variant:"secondary",classname:"btn-sm me-2",onclick:function(n){return R(e.idReferenciaLaboral)},children:"Editar"}),(0,o.jsx)(s.Z,{type:"button",variant:"danger",classname:"btn-sm",onclick:function(){return b(e.idReferenciaLaboral)},children:"Eliminar"})]})]},n):null}):null})]}),(0,o.jsx)(v.default,{modalShowRefLAb:C,setModalShowRefLAb:j})]})};n.default=p},89041:function(e,n,t){"use strict";t.d(n,{Py:function(){return c},Ql:function(){return l},Rp:function(){return i},XY:function(){return s},pg:function(){return u}});var r=t(34727),a=t(70655),o=t(35508);function l(e){var n;return n=(0,r.Z)(function(n){return(0,a.__generator)(this,function(t){return n(d()),n(m(e)),[2]})}),function(e){return n.apply(this,arguments)}}function c(e){var n;return n=(0,r.Z)(function(n){return(0,a.__generator)(this,function(t){return n(d()),n(f(e)),[2]})}),function(e){return n.apply(this,arguments)}}function i(e){var n;return n=(0,r.Z)(function(n){return(0,a.__generator)(this,function(t){return n(d()),n(x(e)),[2]})}),function(e){return n.apply(this,arguments)}}function s(e){var n;return n=(0,r.Z)(function(n){return(0,a.__generator)(this,function(t){return n(d()),n(v(e)),[2]})}),function(e){return n.apply(this,arguments)}}function u(e){var n;return n=(0,r.Z)(function(n){return(0,a.__generator)(this,function(t){return n(d()),n(h(e)),[2]})}),function(e){return n.apply(this,arguments)}}var d=function(){return{type:o.Fz}},f=function(e){return{type:o.iR,payload:e}},m=function(e){return{type:o.pU,payload:e}},x=function(e){return{type:o.MA,payload:e}},v=function(e){return{type:o.Lk,payload:e}},h=function(e){return{type:o.l2,payload:e}}},54501:function(){},12547:function(){},18695:function(e,n,t){"use strict";t.d(n,{Z:function(){return v}});var r=t(94184),a=t.n(r),o=t(67294);t(42473);var l=t(47150),c=t(25115),i=t(76792),s=t(78146),u=t(73716),d=t(87126),f=t(85893);let m=o.forwardRef(({bsPrefix:e,active:n,disabled:t,eventKey:r,className:o,variant:l,action:c,as:m,...x},v)=>{e=(0,i.vE)(e,"list-group-item");let[h,p]=(0,u.v)({key:(0,d.h)(r,x.href),active:n,...x}),C=(0,s.Z)(e=>{if(t){e.preventDefault(),e.stopPropagation();return}h.onClick(e)});t&&void 0===x.tabIndex&&(x.tabIndex=-1,x["aria-disabled"]=!0);let j=m||(c?x.href?"a":"button":"div");return(0,f.jsx)(j,{ref:v,...x,...h,onClick:C,className:a()(o,e,p.isActive&&"active",t&&"disabled",l&&`${e}-${l}`,c&&`${e}-action`)})});m.displayName="ListGroupItem";let x=o.forwardRef((e,n)=>{let{className:t,bsPrefix:r,variant:o,horizontal:s,numbered:u,as:d="div",...m}=(0,l.Ch)(e,{activeKey:"onSelect"}),x=(0,i.vE)(r,"list-group"),v;return s&&(v=!0===s?"horizontal":`horizontal-${s}`),(0,f.jsx)(c.Z,{ref:n,...m,as:d,className:a()(t,x,o&&`${x}-${o}`,v&&`${x}-${v}`,u&&`${x}-numbered`)})});x.displayName="ListGroup";var v=Object.assign(x,{Item:m})}}]);